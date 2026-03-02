<script lang="ts" setup>

defineProps<{
    type: "h1" | "p" | "nav" | "small",
    content?: string  
}>()

</script>

<template>
    <h1 v-if="type == 'h1'">{{ content }}</h1>
    <p v-else-if="type == 'p'">
        <slot></slot>
    </p>
    <p v-else-if="type == 'small'" class="small">
        <slot></slot>
    </p>
</template>

<style scoped>
h1 {
      font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
  font-style: normal;
  font-variation-settings:
  "wdth" 100;
    font-size: 44px;
    line-height: 60px;
    color: rgb(33, 36, 61);
}

p {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: rgb(33, 36, 61);
}

.small {
    font-size: 14px;
}
</style>