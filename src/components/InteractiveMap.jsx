import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation, ExternalLink, Plus, Minus, RotateCcw } from 'lucide-react';

export default function InteractiveMap() {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const CAFE_COORDS = [40.718, -74.005];

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return; // already initialized

    // Define single-world geographical bounds (Web Mercator max latitude ~85.0511 and longitude [-180, 180])
    // This strictly confines the user to a single world instance and prevents panning to empty space
    const worldBounds = L.latLngBounds(
      [-85.05112878, -180], // Southwest
      [85.05112878, 180]   // Northeast
    );

    // Custom non-repeating CRS: disables longitude wrapping so coordinates NEVER repeat
    const nonRepeatingCRS = L.extend({}, L.CRS.EPSG3857, {
      wrapLng: null
    });

    // Initialize Leaflet Map with full zoom-out capability (minZoom: 0) and zero repetition
    const map = L.map(mapContainerRef.current, {
      crs: nonRepeatingCRS,
      center: CAFE_COORDS,
      zoom: 15,
      minZoom: 0, // Allows zooming all the way out fully (full globe/world view)
      maxZoom: 18,
      maxBounds: worldBounds, // Restricts panning strictly to a single world
      maxBoundsViscosity: 1.0, // Hard boundary prevents dragging out of the single world
      worldCopyJump: false,
      zoomControl: false // Custom controls below
    });

    // OpenStreetMap official tiles - 100% free, zero API key required
    // noWrap: true ensures the map tiles NEVER repeat horizontally across the world
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors',
      noWrap: true, // CRITICAL: NEVER repeats continents or countries horizontally
      minZoom: 0,   // Allows full zoom out to world scale
      maxZoom: 18,
      bounds: worldBounds
    }).addTo(map);

    // Custom 21st.dev Style Coffee Marker Icon
    const customIcon = L.divIcon({
      className: 'custom-cafe-marker',
      html: `
        <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: #38220F; border: 3px solid #98A886; border-radius: 50%; box-shadow: 0 10px 25px rgba(56,34,15,0.4); cursor: pointer;">
          <span style="font-size: 20px; line-height: 1;">☕</span>
          <div style="position: absolute; -bottom: 6px; width: 0; height: 0; border-left: 6px solid transparent; border-right: 6px solid transparent; border-top: 8px solid #98A886;"></div>
          <span style="position: absolute; width: 100%; height: 100%; border-radius: 50%; border: 2px solid #98A886; animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite; opacity: 0.5;"></span>
        </div>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 44],
      popupAnchor: [0, -46]
    });

    // Add Marker & Custom Popup
    const marker = L.marker(CAFE_COORDS, { icon: customIcon }).addTo(map);

    marker.bindPopup(`
      <div style="font-family: 'Montserrat', sans-serif; padding: 4px; color: #2B2B2B; min-width: 190px;">
        <span style="font-size: 10px; font-weight: 700; text-transform: uppercase; color: #98A886; letter-spacing: 0.08em; display: block; margin-bottom: 2px;">Specialty Roastery</span>
        <h4 style="font-family: 'Playfair Display', serif; font-size: 16px; font-weight: 700; color: #38220F; margin: 0 0 4px 0;">Brew &amp; Bean Café</h4>
        <p style="font-size: 11px; margin: 0 0 6px 0; color: #5E564F;">124 Artisan Way, Coffee District</p>
        <div style="font-size: 10px; background: #FAF5E6; padding: 4px 8px; border-radius: 8px; border: 1px solid rgba(56,34,15,0.1); color: #38220F; font-weight: 600;">
          Open Today: 6:30 AM – 8:00 PM
        </div>
      </div>
    `).openPopup();

    mapInstanceRef.current = map;

    // Handle container resize
    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
    });
    resizeObserver.observe(mapContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      // Respects minZoom 0 automatically (Full world zoom-out, zero repetition)
      mapInstanceRef.current.zoomOut();
    }
  };

  const handleRecenter = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(CAFE_COORDS, 15, {
        duration: 1.2
      });
    }
  };

  return (
    <div className="mt-14 rounded-3xl overflow-hidden border border-[#38220F]/10 shadow-md bg-white">
      {/* Map Header Card */}
      <div className="p-4 sm:p-5 bg-white flex flex-wrap items-center justify-between gap-3 border-b border-[#38220F]/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#38220F] text-[#F4EBD0] flex items-center justify-center font-bold shadow-sm">
            <MapPin className="w-5 h-5 text-[#98A886]" />
          </div>
          <div>
            <h4 className="font-serif text-lg font-bold text-[#38220F]">
              Neighborhood Map &bull; Coffee District
            </h4>
            <p className="text-xs text-[#5E564F]">
              124 Artisan Way (Corner of Roaster Lane &amp; Market Square)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRecenter}
            aria-label="Re-center on Café"
            title="Re-center on Café"
            className="p-2.5 rounded-full bg-stone-100 hover:bg-[#FAF5E6] text-[#38220F] border border-[#38220F]/10 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#98A886]" />
            <span className="hidden sm:inline">Center Café</span>
          </button>

          <a
            href="https://maps.google.com/?q=124+Artisan+Way+Coffee+District"
            target="_blank"
            rel="noopener noreferrer"
            className="shine-hover px-4 py-2.5 rounded-full bg-[#38220F] text-[#F4EBD0] text-xs font-bold hover:bg-[#98A886] hover:text-[#38220F] transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>Get Directions</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Map Viewport Frame */}
      <div className="relative w-full h-[380px] md:h-[440px] bg-[#aad3df]">
        <div 
          ref={mapContainerRef} 
          className="w-full h-full z-10"
          style={{ background: '#aad3df' }}
        />

        {/* Custom On-Map Zoom Controls */}
        <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-1.5 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl shadow-lg border border-[#38220F]/15">
          <button
            onClick={handleZoomIn}
            aria-label="Zoom in"
            title="Zoom in"
            className="w-8 h-8 rounded-xl bg-white hover:bg-[#FAF5E6] text-[#38220F] flex items-center justify-center font-bold text-sm shadow-sm transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomOut}
            aria-label="Zoom out fully (Full world view)"
            title="Zoom out fully (Full world view)"
            className="w-8 h-8 rounded-xl bg-white hover:bg-[#FAF5E6] text-[#38220F] flex items-center justify-center font-bold text-sm shadow-sm transition-colors cursor-pointer"
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>

        {/* Full World View Badge */}
        <div className="absolute bottom-4 left-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#38220F]/10 text-[10px] font-semibold text-[#5E564F] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#98A886]"></span>
          <span>Full World View &bull; Single Instance (Zero Repetition)</span>
        </div>
      </div>
    </div>
  );
}
