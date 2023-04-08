import AxiosPlugin from "./plugins/axios";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

app.use(AxiosPlugin);

app.mount("#app");
