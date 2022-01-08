<template lang="html">

  <ul
    :style="sliderStyleMove"
    @touchstart="touchStart($event)"
    @touchmove="touchMove($event)"
    @touchend="touchEnd()"
  >

    <slot></slot>

  </ul>

</template>

<script setup>
import { defineProps, ref, reactive, computed, watchEffect } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const props = defineProps({
  listLength: Number,
  slideSize: Number,
  slideChanges: Number,
  minWidthForSlider: Number
})

// Mobile slider start

const touch = reactive({
  startX: 0,
  endX: 0
})

function touchStart (e) {
  touch.startX = e.touches[0].clientX
  touch.endX = 0
}

function touchMove (e) {
  touch.endX = e.touches[0].clientX
}

function touchEnd () {
  if (sliderLimit.value !== 'noLimit') {
    return
  }

  if (touch.endX < touch.startX) {
    currentSlide.value -= 1
  } else {
    currentSlide.value += 1
  }
}

const freeSpace = computed(() => {
  return (windowWidth.value - props.slideSize) / 2
})

// Mobile slider end

const currentSlide = ref(0)
const margin = 25

const windowWidth = computed(() => {
  return store.state.windowWidth
})

const sliderStyleMove = computed(() => {
  return 'transform: translateX(' + sliderPosition.value + 'px)'
})

const sliderPosition = computed(() => {
  return currentSlide.value * scrollSize.value - startPosition.value
})

const maxSlides = computed(() => {
  return windowWidth.value / (props.slideSize + margin)
})

const slidesOver = computed(() => {
  return props.listLength - maxSlides.value
})

const startPosition = computed(() => {
  if (windowWidth.value < props.minWidthForSlider) {
    if (props.listLength % 2 === 0 && windowWidth.value < 650) {
      return -freeSpace.value + scrollSize.value
    } else {
      return (props.slideSize + margin) * slidesOver.value / 2
    }
  }
  return 0
})

const maxScroll = computed(() => {
  return slidesOver.value / 2
})

let sliderLimit

if (props.listLength % 2 !== 0 || windowWidth.value > 650) {
  sliderLimit = computed(() => {
    if (currentSlide.value <= -maxScroll.value && (props.slideChanges < 0 || touch.endX < touch.startX)) {
      return 'maxLimit'
    } else if (currentSlide.value > maxScroll.value && (props.slideChanges > 0 || touch.endX > touch.startX)) {
      return 'minLimit'
    } else {
      return 'noLimit'
    }
  })
} else {
  sliderLimit = computed(() => {
    if (currentSlide.value === -props.listLength + 2 && (props.slideChanges < 0 || touch.endX < touch.startX)) {
      return 'maxLimit'
    } else if (currentSlide.value === 1 && (props.slideChanges > 0 || touch.endX > touch.startX)) {
      return 'minLimit'
    } else {
      return 'noLimit'
    }
  })
}

const scrollSize = computed(() => {
  return props.slideSize + margin
})

watchEffect(() => {
  if (sliderLimit.value === 'noLimit') {
    currentSlide.value += props.slideChanges
  }
},
{
  flush: 'post'
})

</script>

<style media="screen" scoped>
  ul {
    transition: .5s all ease-out;
  }
</style>
