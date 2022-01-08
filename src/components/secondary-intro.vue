<template lang="html">
  <div class="secondary-intro">
    <h3 class="secondary__caption">{{ props.caption }}</h3>

    <div class="secondary__text-wrapper" @touchstart="textTouch" @touchmove.prevent="textMove" @touchend="textEnd">
      <p class="secondary__text" ref="text" :style="textStyle">
        <slot></slot>
      </p>
      <div class="text-scroll">
        <span class="text-scroll__mark" :style="scrollStyle"></span>
      </div>
    </div>

    <PopupToggler togglerClass="popup-button" :togglePayLoad="true">
      Рассчет стоимости
    </PopupToggler>

  </div>

</template>

<script setup>
import PopupToggler from './popup-toggler'
import { ref, reactive, computed, defineProps, onMounted } from 'vue'

const props = defineProps({
  caption: {
    type: String,
    required: false
  },
  bottomLimitScroll: {
    type: Number,
    required: false
  }
})

const touch = reactive({
  startY: 0,
  endY: 0
})

function textTouch(event) {
  touch.startY = event.touches[0].clientY;
  touch.endY = 0;
}

function textMove(event) {
  touch.endY = event.touches[0].clientY;
}

function textEnd() {
  if (textScrollLimit.value) {
    return;
  } else if (touch.endY > touch.startY) {
    textPosition.value += 40;
    scrollPosition.value -= lineScrollSize.value
  } else {
    textPosition.value -= 40;
    scrollPosition.value += lineScrollSize.value
  }
}

const text = ref(null)
const textHeight = ref(0)
const textPosition = ref(0)

const textScrollLimit = computed(() => {
  if (textPosition.value == 0 && touch.endY > touch.startY) {
    return true;
  } else if (textPosition.value <= -textHeight.value + props.bottomLimitScroll && touch.endY < touch.startY) {
    return true;
  } else {
    return false;
  }
})

const textStyle = computed(() => {
  return 'transform: translateY(' + textPosition.value + 'px)'
})

const scrollPosition = ref(0)

const maxScrollTimes = computed(() => {
  return Math.ceil((textHeight.value - props.bottomLimitScroll) / 40)
})

const lineScrollSize = computed(() => {
  return 60 / maxScrollTimes.value
})

const scrollStyle = computed(() => {
  return 'transform: translateY(' + scrollPosition.value + 'px)'
})

onMounted(() => {
  textHeight.value = text.value.clientHeight
})
</script>

<style lang="css" scoped>
  .secondary-intro {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 670px;
    padding-top: 70px;
    margin: 0 auto;
  }

  .secondary__text {
    margin: 50px 0;

    font-family: 'Adobe Gurmukhi';
    font-size: 17px;
    text-align: center;
    color: #686868;
  }

  @media (min-width: 650px) and (max-width: 1000px) {

    .secondary-intro {
      max-width: 350px;
    }

    .secondary__text {
      margin: 20px 0;

      font-size: 12px;
    }

    .popup-button {
      width: 170px;
      height: 43px;

      border-radius: 19.5455px;

      font-size: 12px;
    }
  }

  @media (min-width: 0px) and (max-width: 650px) {

    .secondary-intro {
      width: auto;
      max-width: 420px;
      padding: 0 60px;
      padding-top: 120px;

      box-sizing: border-box;
    }

    .secondary__text-wrapper {
      position: relative;
      z-index: 2;

      width: 100%;
      max-height: 125px;
      margin-top: 20px;
      margin-bottom: 70px;
      overflow: hidden;
    }

    .secondary__text {
      max-width: 290px;
      margin: 0;
      transition: .3s all ease-out;

      font-size: 12px;
    }

    .popup-button {
      width: 135px;
      height: 35px;

      font-size: 12px;
    }

    .text-scroll {
      position: absolute;
      top: 15px;
      right: 5px;

      width: 3px;
      height: 90px;

      background: rgba(63, 137, 28, 0.4);
    }

    .text-scroll__mark {
      position: absolute;
      top: 0px;
      left: -3px;

      display: block;
      width: 9px;
      height: 28px;
      border-radius: 5px;

      background: linear-gradient(110.37deg, #CCFF00 -37.4%, rgba(204, 255, 0, 0) 91.21%), #7DE94B;
    }
  }

  @media (min-width: 0px) and (max-width: 420px) {
    .secondary-intro {
      padding: 0 20px;
      padding-top: 120px;
    }
  }

</style>
