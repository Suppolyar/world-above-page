<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const initLeela = () => {
  const GEMS = window.__GEMS || {};
  window.__GEMS = {
    ...GEMS,
    no_header: true,
    lang: locale.value,
    langs_available: [
      "en_US",
      "de_DE",
      "fr_FR",
      "es_ES",
      "pl_PL",
      "tr_TR",
      "ko_KO",
      "pt_BR",
      "zh_CH",
      "zh_TW",
    ],
    client_id: "store.my.games",
  };

  const script = document.createElement("script");
  script.src = "//store.my.games/hotbox/leela/header.js";
  document.head.appendChild(script);
};

onMounted(() => {
  initLeela();
});
</script>

<style scoped></style>
