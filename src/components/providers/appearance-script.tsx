import { ACCENT_STORAGE_KEY } from "@/lib/appearance";

/**
 * Blocking, pre-hydration script that applies the stored accent colour to
 * `--primary` (and a readable `--primary-foreground`) before first paint — so
 * there's no flash of the default tangerine. Rendered first in <body>.
 */
export function AppearanceScript() {
  const code = `(function(){try{var c=localStorage.getItem(${JSON.stringify(
    ACCENT_STORAGE_KEY
  )});if(!c)return;var h=c.replace('#','');if(h.length===3){h=h[0]+h[0]+h[1]+h[1]+h[2]+h[2];}var r=parseInt(h.slice(0,2),16),g=parseInt(h.slice(2,4),16),b=parseInt(h.slice(4,6),16);var l=(0.299*r+0.587*g+0.114*b)/255;var root=document.documentElement;root.style.setProperty('--primary',c);root.style.setProperty('--primary-foreground',l>0.6?'#1a1712':'#ffffff');}catch(e){}})();`;

  return (
    <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: code }} />
  );
}
