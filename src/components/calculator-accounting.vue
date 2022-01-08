<template lang="html">
  <div class="calculator-accounting calculator" :class="$attrs">
    <h4 class="calculator__caption">Рассчитать стоимость бухгалтерских услуг</h4>

    <div class="calculator__section">
      <span class="calculator__section__caption">Ваша система налогооблажения</span>

      <div class="calculator__section__wrapper">
        <calculatorCheckboxWrapper :itemsName="['УСН', 'ОСН']" />
      </div>

    </div>

    <div class="calculator__section">
      <span class="calculator__section__caption">Количество операций в месяц</span>

      <calculatorRange :rangeId="0" :rangeMark="3" @changeRange="takeRangeChanges($event)" />

      <div class="calculator__range__marker-wrapper">
        <span class="calculator__range__marker">до 50</span>
        <span class="calculator__range__marker">до 100</span>
        <span class="calculator__range__marker">до 200</span>
        <span class="calculator__range__marker"> до 300</span>
      </div>
    </div>

    <div class="calculator__section">
      <span class="calculator__section__caption">Количество операций в месяц</span>
      <div class="calculator__range">

        <calculatorRange :rangeId="1" :rangeMark="3" @changeRange="takeRangeChanges($event)" />

      </div>
      <div class="calculator__range__marker-wrapper">
        <span class="calculator__range__marker">до 50</span>
        <span class="calculator__range__marker">до 100</span>
        <span class="calculator__range__marker">до 200</span>
        <span class="calculator__range__marker"> до 300</span>
      </div>
    </div>

    <div class="calculator__result">
      <div class="calculator__result__wrapper">
        <span class="calculator__result__text">Примерная стоимость</span>
        <span class="calculator__result__price">{{ resultSum }} <span class="valute">руб</span></span>
      </div>

      <popupToggler togglerClass="popup-button" :togglePayLoad="true">Рассчитать точную стоимость</popupToggler>

    </div>

  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import popupToggler from './popup-toggler'
import calculatorCheckboxWrapper from './calculator-checkbox-wrapper'
import calculatorRange from './calculator-range'
import { useCalcSum } from '../use/calculator-sum'

const rangeList = reactive([0, 0])

function takeRangeChanges (data) {
  rangeList[data.id] = data.position
}

const resultSum = computed(() => {
  return 1000 + useCalcSum(rangeList[0] + rangeList[1]).sum.value
})
</script>

<style lang="css">

  .calculator-accounting {
    max-width: 710px;
    padding-top: 50px;

    box-shadow: inset 2.6044px 3.47253px 12.1538px rgba(0, 0, 0, 0.01);
    border-radius: 21.7033px;
    background: #F1F1F1;
  }

  .calculator__range__eclipce-wrapper {
    position: absolute;
    top: -10px;
    left: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;

    border-radius: 50%;
    border: 0.7px solid #CCFF00;

    background: linear-gradient(104.27deg, rgba(204, 255, 0, 0.2) 11.41%, rgba(213, 255, 45, 0) 113.39%), #80CF5B;
  }

  .calculator__range__eclipce {
    display: block;
    width: 20px;
    height: 20px;

    border: 0.7px solid #CCFF00;

    border-radius: 50%;
  }

  .calculator__range__marker-wrapper {
    display: flex;
    justify-content: space-between;

    width: 350px;
    margin: 0 auto;
  }

  .calculator__result {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 50px 75px;

    box-shadow: inset 2.6044px 3.47253px 12.1538px rgba(0, 0, 0, 0.01);
    border-radius: 21.7033px;

    background: #DCDCDC;
  }

  .calculator__result__text {
    display: block;

    font-family: 'Adobe Gurmukhi';
    font-size: 20px;
  }

  .calculator__result__price {
    font-family: 'Adobe Gurmukhi';
    font-size: 85px;
    font-weight: 700;
  }

  .valute {
    font-size: 35px;
  }

  @media (min-width: 1000px) and (max-width: 1460px) {

    .calculator-accounting {
      width: 600px;
    }

    .calculator__caption {
      margin-bottom: 45px;
    }

    .calculator__section {
      padding: 0 100px;
      margin-bottom: 45px;
    }

    .calculator__result {
      padding: 50px;
    }

    .calculator__result__price {
      font-size: 60px;
    }
  }

  @media (min-width: 650px) and (max-width: 1000px) {
    .calculator-accounting {
      max-width: 400px;
      margin: 100px auto;
    }

    .calculator__section__item {
      margin-right: 55px;
    }

    .calculator__range {
      width: 215px;
      height: 10px;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .calculator__range__eclipce-wrapper {
      top: -8px;
      width: 24px;
      height: 24px;
    }

    .calculator__range__eclipce {
      width: 10px;
      height: 10px;
    }

    .calculator__range__marker-wrapper {
      width: 215px;
    }

    .calculator__range__marker {
      font-size: 12px;
    }

    .calculator__result {
      padding: 30px 45px;
    }

    .calculator__result__text {
      font-size: 12px;
    }

    .calculator__result__price {
      font-size: 45px;
    }

    .valute {
      font-size: 19px;
    }
  }

  @media (min-width: 0px) and (max-width: 650px) {

    .calculator-accounting {
      max-width: 375px;
      padding-top: 25px;
    }

    .calculator__section  {
      padding: 0 30px;
    }

    .calculator__range {
      width: 260px;
      height: 12px;

      margin-top: 25px;
      margin-bottom: 15px;
    }

    .calculator__range__eclipce-wrapper {
      top: -8px;

      width: 25px;
      height: 25px;
      min-width: 25px;
      min-height: 25px;
    }

    .calculator__range__eclipce {
      width: 10px;
      height: 10px;
      min-width: 10px;
      min-height: 10px;
    }

    .calculator__range__marker-wrapper {
      width: 260px;
    }

    .calculator__range__marker {
      font-size: 14px;
    }

    .calculator__result {
      padding: 25px;
    }

    .calculator__result__text {
      font-size: 12px;
    }

    .calculator__result__price {
      font-size: 44px;
    }

    .valute {
      font-size: 18px;
    }

    .popup-button {
      width: 150px;
      height: 37px;

      font-size: 12px;
    }
  }
</style>
