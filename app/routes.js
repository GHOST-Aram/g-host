import { config } from "../g-host/app/config.js";
import { router as appUrls } from "../g-host/app/init.js";
import { index } from "./views.js";

config()
appUrls.get('/', index)


export {appUrls}



