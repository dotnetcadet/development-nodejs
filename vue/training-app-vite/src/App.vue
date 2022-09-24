  
<template>
  <div>
    <h1>{{ environment }}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  setup() {

  },
  data() {
    return {
      environment: import.meta.env.VITE_APP_TITLE
    }
  }
})
</script>

    
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>