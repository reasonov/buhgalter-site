<template lang="html">
  <div class="calculator-legal calculator">
    <h4 class="calculator__caption">Рассчет стоимости</h4>

    <div class="legal__section">

      <span class="calculator__section__caption legal__section__caption">Ваша система налогооблажения</span>

      <div class="legal__section__wrapper">

        <calculatorCheckboxWrapper
          :itemsName="['банкротство физ лица', 'банкротство ЮЛ', 'банкротство ИП']"
          classFromParent="legal__section__item"
        />

      </div>
    </div>

    <div class="legal__section">

      <span class="calculator__section__caption legal__section__caption">Есть ли у Вас имущество для сохранения</span>

      <div class="legal__section__wrapper">

        <calculatorCheckboxWrapper
          :itemsName="['да', 'нет', 'нет долгов']"
          classFromParent="legal__section__item"
        />

      </div>
    </div>

    <popupToggler togglerClass="calculator-legal__submit" :togglePayLoad="true">Рассчитать точную стоимость</popupToggler>

  </div>
</template>

<script setup>
import calculatorCheckboxWrapper from './calculator-checkbox-wrapper'
import popupToggler from './popup-toggler'
</script>

<style lang="css">
  .calculator-legal {
    position: relative;

    max-width: 710px;
    padding-top: 50px;
    padding-bottom: 100px;

    box-shadow: inset 2.6044px 3.47253px 12.1538px rgba(0, 0, 0, 0.01);
    border-radius: 21.7033px;
    background: #F1F1F1;
  }

  .legal__section__wrapper {
    display: flex;
    justify-content: space-between;

    margin-top: 25px;
  }

  .legal__section {
    padding: 0 65px;
    margin-bottom: 70px;
  }

  .legal__section__caption {
    display: block;
    text-align: center;
  }

  .legal__section__item {
    display: flex;
    align-items: center;

    margin-top: 25px;
    margin-right: 45px;
  }

  .calculator-legal__submit {
    position: absolute;
    bottom: -42px;
    left: 50%;

    transform: translateX(-50%);

    width: 425px;
    height: 85px;

    box-shadow: 20.0909px 26.2727px 13.9091px -13.9091px rgba(106, 230, 48, 0.41);
    border-radius: 38.6364px;

    font-family: 'Adobe Gurmukhi';
    font-size: 25px;

    background: linear-gradient(104.27deg, rgba(204, 255, 0, 0.2) 11.41%, rgba(213, 255, 45, 0) 113.39%), #80CF5B;
  }

  @media (min-width: 1000px) and (max-width: 1460px) {

    .calculator-legal {
      max-width: 540px;
      padding-bottom: 20px;
    }

    .calculator__caption {
      margin-bottom: 30px;
    }

    .legal__section__wrapper {
      flex-direction: column;

      margin-left: 100px;
    }

    .legal__section__wrapper {
      margin-top: 0px;
    }
  }

  @media (min-width: 650px) and (max-width: 1000px) {

    .calculator-legal {
      max-width: 395px;
      padding-bottom: 0px;
    }

    .calculator-legal::before {
      left: -50px;
    }

    .calculator-legal::after {
      bottom: 0px;
      right: -60px;
    }

    .legal__section__wrapper {
      flex-direction: column;

      margin-top: 0;
      margin-left: 115px;
    }

    .legal__section {
      padding: 0 30px;
      margin-bottom: 50px;
    }

    .legal__section__caption {
      font-size: 15px;
    }

    .calculator-legal__submit {
      bottom: -25px;

      width: 255px;
      height: 50px;

      font-size: 16px;
    }
  }

  @media (min-width: 0px) and (max-width: 650px) {
    .calculator-legal {
      max-width: 375px;
      padding-top: 25px;
      padding-bottom: 35px;
    }

    .calculator-legal::after {
      right: -25px;
      bottom: 60px;
    }

    .legal__section {
      padding: 0 85px;
      margin-bottom: 35px;
    }

    .legal__section__wrapper {
      flex-direction: column;
      margin-top: 10px;
    }

    .calculator-legal__submit {
      bottom: -30px;

      width: 220px;
      height: 55px;

      font-size: 16px;
    }
  }

  @media (min-width: 0px) and (max-width: 650px) {
    .legal__section {
      padding: 0 50px;
    }
  }

  @media (min-width: 0px) and (max-width: 420px) {
    .calculator-legal {
      max-width: 300px;
      padding-bottom: 15px;
    }

    .calculator-legal::after {
      bottom: -10px;
    }

    .calculator__caption {
      margin-bottom: 15px;
    }

    .legal__section {
      padding: 0 40px;
      margin-bottom: 25px;
    }

    .legal__section__item {
      margin-top: 15px;
    }

    .calculator-legal__submit {
      bottom: -20px;
      height: 40px;

      font-size: 14px;
    }
  }
</style>
