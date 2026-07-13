import dynamic from "next/dynamic";

// Dynamically import the map to prevent Server-Side Rendering (SSR) issues with Leaflet
const VirtualTourMap = dynamic(() => import("./VirtualTourMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-[2rem] overflow-hidden border border-gold/20 shadow-2xl relative bg-muted/30">
      <div className="absolute inset-0 bg-muted/20 animate-pulse" />
      <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-gold border-t-transparent animate-spin"></div>
        <span className="text-gold font-serif italic text-lg animate-pulse drop-shadow-md">Loading Campus Map...</span>
      </div>
    </div>
  ),
});

export default VirtualTourMap;
