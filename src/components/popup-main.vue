<template lang="html">
  <div class="popup-main" v-if="popupIsOpen">
    <h3 class="popup__caption">Заказать рассчет стоимости</h3>
    <requestForm inputClass="background-white" />
  </div>
  <popupToggler togglerClass="popup__background" :togglePayLoad="false" v-if="popupIsOpen"></popupToggler>
</template>

<script setup>
import requestForm from './request-form'
import popupToggler from './popup-toggler'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const popupIsOpen = computed(() => {
  return store.state.popupIsOpen
})

</script>

<style lang="css">
  .popup-main {
    position: fixed;
    top: calc(50% - 335px);
    left: 50%;
    z-index: 10;

    padding: 70px 25px;

    box-shadow: 13px 17px 9px -9px rgba(106, 230, 48, 0.41);
    border-radius: 25px;
    transform: translateX(-50%);

    background: linear-gradient(104.27deg, rgba(204, 255, 0, 0.2) 11.41%, rgba(213, 255, 45, 0) 113.39%), #80CF5B;
  }

  .popup__caption {
    margin-bottom: 30px;
    font-family: 'Adobe Gurmukhi';
    font-size: 40px;
    font-weight: 700;
    text-align: center;
  }

  .popup__toggle__close {
    position: absolute;
    top: 25px;
    right: 25px;
  }

  .popup__close {
    position: relative;

    width: 50px;
    height: 50px;
  }

  .popup__close__line {
    position: absolute;
    top: 25px;
    left: 0;

    display: block;
    width: 56px;
    height: 6px;

    background-color: #fff;
  }

  .popup__close__line0 {
    transform: rotateZ(45deg);
  }

  .popup__close__line1 {
    transform: rotateZ(135deg);
  }

  .popup__background {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 5;

    min-width: 100vw;
    min-height: 100vh;

    opacity: 0.5;

    background-color: #C4C4C4;
  }

  @media (min-width: 650px) and (max-width: 1000px) {

    .popup-main {
      top: calc(50% - 200px);
    }

    .popup__caption {
      font-size: 16px;
    }
  }

  @media (min-width: 0px) and (max-width: 650px) {
    .popup-main {
      top: calc(50% - 250px);
    }
  }
</style>
