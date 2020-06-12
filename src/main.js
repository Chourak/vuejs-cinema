import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.scss";

import Tooltip from "./util/tooltip";

createApp(App)
  .use(router)
  .use(Tooltip)
  .mount("#app");
