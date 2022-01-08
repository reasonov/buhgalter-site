<template lang="html">
  <div class="calculator-trademark calculator">
    <h4 class="calculator__caption">Пройдите тест и получите скидку</h4>

    <div class="calculator__section">
      <span class="calculator__section__caption trademark__calculator__caption">Вид товарного знака</span>

      <calculatorCheckboxWrapper
        :itemsName="['Словестный', 'Изобразительный', 'Комбинированный']"
        classFromParent="trademark__section__item"
      />

    </div>

    <div class="calculator__section">
      <span class="calculator__section__caption trademark__calculator__caption">Нужна ли проверка знака на тождественность?</span>

      <div class="calculator__section__wrapper trademark__section__wrapper">

        <calculatorCheckboxWrapper
          :itemsName="['Да', 'Нет']"
        />

      </div>

      <popupToggler togglerClass="calculator-trademark__submit" :togglePayLoad="true">Рассчитать точную стоимость</popupToggler>

    </div>
  </div>
</template>

<script setup>
import calculatorCheckboxWrapper from './calculator-checkbox-wrapper'
import popupToggler from './popup-toggler'
</script>

<style lang="css">
  .calculator-trademark {
    position: relative;
    max-width: 710px;
    padding-top: 50px;
    padding-bottom: 50px;
    margin: 200px auto;
    margin-bottom: 250px;

    box-shadow: inset 2.6044px 3.47253px 12.1538px rgba(0, 0, 0, 0.01);
    border-radius: 21.7033px;
    background: #F1F1F1;
  }

  .trademark__calculator__caption {
    display: block;
    text-align: center;
  }

  .trademark__section__wrapper {
    margin-left: 60px;
  }

  .trademark__section__item {
    margin-left: 100px;
  }

  .calculator-trademark__submit {
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
    .calculator-trademark {
      max-width: 550px;
    }

    .calculator__section {
      padding: 0 45px;
    }
  }

  @media (min-width: 650px) and (max-width: 1000px) {
    .calculator-trademark {
      max-width: 395px;
      padding-bottom: 10px;
      margin-bottom: 150px;
    }

    .trademark__section__wrapper {
      flex-direction: column;
      margin-left: 30px;
    }

    .trademark__section__item {
      margin-left: 30px;
    }

    .calculator-trademark__submit {
      bottom: -27px;
      width: 218px;
      height: 55px;

      font-size: 16px;
    }
  }

  @media (min-width: 0px) and (max-width: 650px) {

    .calculator-trademark {
      max-width: 375px;
      margin: 100px auto;
    }

    .calculator-trademark::after {
      bottom: 30px;
      right: -25px;
    }

    .trademark__section__item {
      margin-left: 60px;
    }

    .trademark__section__wrapper {
      margin-left: 30px;
    }

    .calculator-trademark__submit {
      bottom: -27px;

      width: 220px;
      height: 55px;

      font-size: 16px;
    }
  }

  @media (min-width: 0px) and (max-width: 420px) {

    .calculator-trademark {
      max-width: 305px;
      padding-top: 25px;
      padding-bottom: 5px;
    }

    .trademark__section__item {
      margin-left: 10px;
    }

    .trademark__section__wrapper {
      margin-left: 10px;
    }

    .calculator-trademark__submit {
      bottom: -20px;
      height: 40px;

      font-size: 14px;
    }
  }
</style>
