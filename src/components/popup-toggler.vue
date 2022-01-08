<template lang="html">
  <button name="button-toggler" :class="props.togglerClass" @click="togglePopup">
    <slot></slot>
  </button>
</template>

<script setup>
import { useStore } from 'vuex'
import { defineProps } from 'vue'

const props = defineProps({
  togglerClass: String,
  togglePayLoad: Boolean
})

const store = useStore()

const togglePopup = () => {
  store.commit('togglePopup', props.togglePayLoad)
}

</script>

<style lang="css" scoped>
</style>
