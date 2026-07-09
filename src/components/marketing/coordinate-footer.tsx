import { Heart, Plus } from "lucide-react";

export function CoordinateFooter() {
  return (
    <footer className="w-full border-t border-border/20">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-8">
        <div className="flex items-center gap-2">
          <Plus className="size-3.5 text-almost-white" />
          <span className="font-sans text-sm text-almost-white">Fly Direct</span>
          <span className="font-sans text-sm text-steel">Secure Web Gateway</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-sans text-sm text-almost-white">
            40.7128&deg;N &middot; 74.0060&deg;W
          </span>
          <Heart className="size-3.5 text-almost-white" />
        </div>
      </div>
    </footer>
  );
}
