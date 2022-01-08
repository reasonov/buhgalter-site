<template lang="html">
  <div class="calculator__range" ref="rangeLine">
    <span
      class="calculator__range__eclipce-wrapper"
      :style="eclipcePosition"
      @mousedown="toggleRange(true)"
      @mousemove="moveRange()"
      @touchstart="toggleRange(true)"
      @touchmove="moveRange()"
    >
      <span class="calculator__range__eclipce"></span>
      <span class="calculator__range__value" v-show="rangeActive">{{ positionRange }}</span>
    </span>
  </div>
</template>

<script setup>
import { ref, computed, watch, defineProps, onMounted } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  rangeMark: Number,
  rangeId: Number
})

const store = useStore()

const windowWidth = computed(() => {
  return store.state.windowWidth
})

const emit = defineEmits(['changeRange'])

const rangeActive = ref(false)

function toggleRange(state) {
  rangeActive.value = state
  if(firstPosition.value === null) {
    if(windowWidth.value > 650) {
      firstPosition.value = event.clientX
    } else {
      firstPosition.value = event.touches[0].clientX
    }
  }
}

const firstPosition = ref(null)
const pxRange = ref(0)

function moveRange() {

  if (rangeActive.value) {
    if(windowWidth.value > 650) {
      pxRange.value = event.clientX - firstPosition.value
    } else {
      console.log('asd')
      pxRange.value = event.touches[0].clientX - firstPosition.value
    }

  } else {
    return
  }
}

watch(pxRange, () => {
  if (pxRange.value < 0) {
    pxRange.value = 0
  } else if (pxRange.value > rangeLineWidth.value - 30) {
    pxRange.value = rangeLineWidth.value - 30
  }

  emit('changeRange', {
    id: props.rangeId,
    position: positionRange.value
  })
})

const positionRange = computed(() => {
  return Math.round(pxRange.value / rangeLineWidth.value * 100) * props.rangeMark
})

const limitRange = computed(() => {
  if(pxRange.value < 0) {
    return 'minLimit'
  } else if (pxRange.value > rangeLineWidth.value) {
    return 'maxLimit'
  }
  return false
})

const eclipcePosition = computed(() => {
  return 'transform: translateX(' + pxRange.value + 'px)'
})

const rangeLine = ref(null)
const rangeLineWidth = ref(0)



onMounted(() => {
  rangeLineWidth.value = rangeLine.value.clientWidth

  if (windowWidth.value > 650) {
    document.addEventListener('mousemove', () => {
      if(rangeActive.value) {
        moveRange()
      }
    })

    document.addEventListener('mouseup', () => {
      if(rangeActive.value) {
        toggleRange(false)
      }
    })
  } else {
    document.addEventListener('touchmove', () => {
      if(rangeActive.value) {
        moveRange()
      }
    })

    document.addEventListener('touchend', () => {
      if(rangeActive.value) {
        toggleRange(false)
      }
    })
  }

})
</script>

<style lang="css" scoped>
  .calculator__range__value {
    position: absolute;
    top: -55px;

    padding: 10px 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;

    font-family: 'Adobe Gurmukhi';
    font-size: 23px;

    background: #fff;
  }
</style>
