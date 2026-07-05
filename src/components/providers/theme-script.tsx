import { COLOR_THEME_STORAGE_KEY, defaultColorTheme } from "@/config/themes";

/**
 * Blocking, pre-hydration script that stamps the stored color theme onto
 * <html data-theme> before first paint — preventing a flash of the default
 * theme. (next-themes handles the light/dark class the same way.)
 *
 * Rendered once, as the first child of <body> in the root layout.
 */
export function ThemeScript() {
  const code = `(function(){try{var k=${JSON.stringify(
    COLOR_THEME_STORAGE_KEY
  )},d=${JSON.stringify(
    defaultColorTheme
  )},v=["mango","coffee","grape","ocean","matcha"],t=localStorage.getItem(k);if(v.indexOf(t)===-1)t=d;document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme",${JSON.stringify(
    defaultColorTheme
  )});}})();`;

  return <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: code }} />;
}
