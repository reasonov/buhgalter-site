<template lang="html">
  <div
    :class="['calculator__section__item', classFromParent]"
    @click="selectCheckbox(index)"
    v-for="(item, index) in itemsName"
    :key="index"
  >
    <span class="calculator__section__eclipce">
      <span class="calculator__section__eclipce--active" v-show="isActive == index"></span>
    </span>

    <span class="calculator__section__name calculator__section__name--active">{{ item }}</span>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  itemsName: Array,
  classFromParent: String
})

const isActive = ref(false)

function selectCheckbox(item) {
  isActive.value = item
}

</script>

<style lang="css" scoped>
</style>
