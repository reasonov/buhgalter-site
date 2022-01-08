<template lang="html">
  <div class="sale-block">
    <p class="sale__text">
      Первый месяц обслуживания<br> <span>со скидкой 10%</span>
    </p>
    <popupToggler togglerClass="sale__button" :togglePayLoad="true">
      Хочу выгодный тариф
    </popupToggler>
  </div>
</template>

<script setup>
import popupToggler from './popup-toggler'
</script>

<style lang="css">

  .sale-block {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 831px;
    height: 328px;
    padding: 0 60px;
    margin: 100px auto;

    box-sizing: border-box;

    background-image: url('../assets/images/sale-background.png');
    background-size: cover;
    background-repeat: no-repeat;
  }

  .sale__text {
    font-family: 'Roboto';
    font-size: 25px;
    font-weight: 700;
    line-height: 42px;
  }

  .sale__text span {
    font-size: 35px;
  }

  .sale__button {
    width: 310px;
    height: 80px;

    border-radius: 25px;

    font-family: 'Adobe Gurmukhi';
    font-size: 20px;

    background: linear-gradient(163.97deg, #00FFFF -5.9%, rgba(0, 209, 255, 0) 186.5%), linear-gradient(104.08deg, rgba(204, 255, 0, 0.2) 11.66%, rgba(213, 255, 45, 0) 113.35%);
  }

  @media (min-width: 650px) and (max-width: 1000px) {
    .sale-block {
      width: 455px;
      height: 173px;
      padding: 0 40px;
    }

    .sale__text {
      font-size: 14px;
      line-height: 23px;
    }

    .sale__text span {
      font-size: 19px;
    }

    .sale__button {
      width: 170px;
      height: 45px;

      font-size: 12px;
    }
  }

  @media (min-width: 0px) and (max-width: 650px) {
    .sale-block {
      display: none;
    }
  }
</style>
