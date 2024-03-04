<template>
  <button
    @click="onBtnClick"
    class="text-white text-[36px] w-[300px] h-[90px] font-bold bg-button-bg bg-center bg-no-repeat shrink-0 shadow hover:scale-105 duration-150 transition"
  >
    Скачать
  </button>
</template>

<script setup>
defineOptions({
  name: "BaseButton"
});

const onBtnClick = () => {
  window.__GEM.detectAndDownload(
    "0.2002243",
    "https://static.gc.my.games/WorldAboveLoader.exe"
  );
};
</script>

<style lang="scss" scoped></style>
