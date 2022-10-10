<template>
  <div>
    <Toggle :onEnabled="onEnable" :onDisabled="onDisable" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Toggle from './components'

export default defineComponent({
  setup() {
    const reset = () =>{
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
    const onEnable = () => {
      reset()

      localStorage.theme = 'dark'
    }
    const onDisable = () => {
      reset()

      localStorage.theme = 'light'
    }
    return {
      onEnable,
      onDisable
    }
  },
  components: {
    Toggle
  }
});
</script>