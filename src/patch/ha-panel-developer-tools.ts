import { patch_element } from "../helpers/patch_function";
import { ModdedElement, apply_uix } from "../helpers/apply_uix";

/*
Patch ha-config-* for theme styling

There is no style passed to apply_uix here, everything comes only from themes.
*/

@patch_element("ha-panel-developer-tools")
class HaPanelDeveloperToolsPatch extends ModdedElement {
  updated(_orig, ...args) {
    _orig?.(...args);
    apply_uix(this, "developer-tools");
  }
}