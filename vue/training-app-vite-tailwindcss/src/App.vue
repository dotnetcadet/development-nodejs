<template>
  <div>
    <h1 class="text-3xl font-bold">{{ environment }}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {},
  data() {
    return {
      environment: import.meta.env.VITE_APP_TITLE,
    };
  },
});
</script>