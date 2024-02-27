import "./styles/style.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./routes.ts";
import App from "./App.vue";
import { createI18n } from "vue-i18n";

const pinia = createPinia();
const i18n = createI18n({
  legacy: false,
  locale: "en_US",
});
const app = createApp(App);

app.use(i18n);
app.use(pinia);
app.use(router);
app.mount("#app");
