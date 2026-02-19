from homeassistant.core import HomeAssistant

from .const import OLD_FRONTEND_SCRIPT_URL

DATA_EXTRA_MODULE_URL = "frontend_extra_module_url"

async def check_old_frontend_script_resource(hass: HomeAssistant) -> bool:
    """Check if the old frontend script is registered as a resource."""

    resources = hass.data["lovelace"].resources
    if resources:
        if not resources.loaded:
            await resources.async_load()
            resources.loaded = True

        for r in resources.async_items():
            if OLD_FRONTEND_SCRIPT_URL in r["url"]:
                return True
            
    return False

async def check_old_frontend_script_extra_module(hass: HomeAssistant) -> bool:
    """Check if the old frontend script is registered as an extra module."""

    extra_modules = hass.data[DATA_EXTRA_MODULE_URL].urls
    for extra_module_url in extra_modules:
        if OLD_FRONTEND_SCRIPT_URL in extra_module_url:
            return True

    return False