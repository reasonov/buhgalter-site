<template lang="html">
  <sliderComponent
    class="main-list"
    :listLength="props.list.length"
    :slideSize="mainItemSize"
    :slideChanges="0"
    :minWidthForSlider="650"
  >
    <li class="main-list__item" v-for="(item, index) in props.list" :key="index" :ref="el => { if (el) mainItem[index] = el }">
      <p class="main-list__text">{{ item.text }}</p>
      <span class="main-list__price">от {{ item.price }}</span>
    </li>
  </sliderComponent>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue'
import sliderComponent from './slider-component'

const props = defineProps({
  list: Array
})

const mainItem = ref([])
const mainItemSize = ref(0)

onMounted(() => {
  mainItemSize.value = mainItem.value[0].clientWidth
})

</script>

<style lang="css" scoped>
  .main-list {
    width: 650px;
    margin: 0 auto;
  }

  .main-list__item {
    display: flex;
    justify-content: space-between;

    height: 70px;
    margin-bottom: 25px;
  }

  .main-list__text {
    display: flex;
    align-items: center;

    width: 415px;
    height: 100%;
    padding: 15px;

    box-sizing: border-box;
    box-shadow: inset 3px 4px 14px rgba(0, 0, 0, 0.01);
    border-radius: 25px;

    font-family: 'Adobe Gurmukhi';
    font-size: 16px;

    background: #F1F1F1;
  }

  .main-list__price {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 215px;
    height: 100%;

    box-shadow: 13px 17px 9px -9px rgba(106, 230, 48, 0.41);
    border-radius: 25px;

    font-family: 'Adobe Gurmukhi';
    font-size: 20px;

    background: linear-gradient(104.27deg, rgba(204, 255, 0, 0.2) 11.41%, rgba(213, 255, 45, 0) 113.39%), #80CF5B;
  }

  @media (min-width: 650px) and (max-width: 1000px) {
    .secondary-list__caption {
      font-size: 15px;
    }

    .main-list {
      width: 360px;
    }

    .main-list__item {
      height: 40px;
      margin-bottom: 15px;
    }

    .main-list__text {
      width: 230px;
      padding: 12px;

      font-size: 12px;
    }

    .main-list__price {
      width: 120px;

      font-size: 14px;
    }
  }

  @media (min-width: 0px) and (max-width: 650px) {

    .main-list {
      display: flex;
      width: auto;
      margin: 0;
    }

    .main-list__item {
      position: relative;
      width: 180px;
      height: 105px;
      padding: 25px;
      padding-bottom: 35px;
      margin-right: 25px;

      box-sizing: border-box;
      box-shadow: inset 1.62px 2.16px 7.56px rgba(0, 0, 0, 0.01);
      border-radius: 13.5px;

      background: #F1F1F1;
    }

    .main-list__text {
      padding: 0;

      font-size: 12px;
      text-align: center;
    }

    .main-list__price {
      position: absolute;
      left: 50%;
      bottom: -18px;

      width: 120px;
      height: 35px;

      transform: translateX(-50%);
      border-radius: 13px;

      font-size: 13px;
    }

  }
</style>
