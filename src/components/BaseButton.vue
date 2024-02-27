<template>
  <button
    @click="onBtnClick"
    class="text-white text-[36px] w-[300px] h-[90px] font-bold bg-button-bg bg-center bg-no-repeat shrink-0 shadow"
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
    "13.2013983",
    "https://static.gc.my.games/HawkedLoader.exe"
  );
};
</script>

<style lang="scss" scoped></style>
