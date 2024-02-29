<template>
  <div :class="setCurrentBlockSize()" class="text-white font-bold text-lg rounded-xd bg-block shadow leading-[140%]">
    <div :class="setCurrentInnerBlockSize()">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  size: "medium" | "large";
}>();

const setCurrentBlockSize = () => {
  switch (props.size) {
    case "medium":
      return "max-w-[456px]";
    case "large":
      return "max-w-[596px]";
  }
};

const setCurrentInnerBlockSize = () => {
  switch (props.size) {
    case "medium":
      return "m-2 border-[3px] border-block-inner rounded-xd px-6 py-3";
    case "large":
      return "m-2.5 border-[3px] border-block-inner rounded-xd px-10 py-5";
  }
};
</script>

<style scoped></style>