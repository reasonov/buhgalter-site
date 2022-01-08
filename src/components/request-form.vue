<template lang="html">
  <form class="request-form" action="https://formspree.io/f/xbjwldzn" method="POST">
    <input :class="['request__input', props.inputClass]" type="text" name="name" placeholder="ФИО" required>
    <input :class="['request__input', props.inputClass]" type="text" name="company" placeholder="Наименование компании">
    <input :class="['request__input', props.inputClass]" type="tel" name="number" placeholder="Номер телефона" required>
    <input :class="['request__input', props.inputClass]" type="email" name="email" placeholder="E-mail" required>
    <textarea :class="['request__input request__input__comment', props.inputClass]" placeholder="Комментарий"></textarea>
    <button name="form-submit" class="request__submit" type="submit">Оставить заявку</button>
  </form>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  inputClass: String
})

</script>

<style lang="css" scoped>
  .request-form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    width: 605px;
  }

  .request__input {
    width: 290px;
    height: 55px;
    padding-left: 40px;
    margin-bottom: 30px;

    border-radius: 25px;
    box-sizing: border-box;

    font-family: 'Geometria';
    font-size: 18px;
    font-weight: 500;

    background: linear-gradient(104.27deg, rgba(204, 255, 0, 0.2) 11.41%, rgba(213, 255, 45, 0) 113.39%), #80CF5B;
  }

  .request__input::placeholder {
    color: #000;
  }

  .request__input__comment {
    width: 100%;
    height: 160px;
    padding-top: 10px;

    resize: none;
    border: none;
    outline: none;
  }

  .request__submit {
    width: 305px;
    height: 75px;
    margin: 0 auto;
    border-radius: 25px;

    font-family: 'Geometria';
    font-size: 20px;
    font-weight: 500;

    background: linear-gradient(163.97deg, #00FFFF -5.9%, rgba(0, 209, 255, 0) 186.5%), linear-gradient(104.08deg, rgba(204, 255, 0, 0.2) 11.66%, rgba(213, 255, 45, 0) 113.35%);
  }

  @media (min-width: 1000px) and (max-width: 1460px) {
    .request-form {
      width: 465px;
    }

    .request__input {
      width: 225px;
      padding-left: 15px;
    }

    .request__input__comment {
      width: 100%;
    }

    .request__submit {
      width: 225px;
      height: 55px;
    }
  }

  @media (min-width: 650px) and (max-width: 1000px) {

    .request-form {
      width: 280px;
    }

    .request__input {
      width: 132px;
      height: 25px;

      padding-left: 15px;
      margin-bottom: 15px;

      font-size: 12px;
    }

    .request__input__comment {
      width: 100%;
      height: 75px;

      border-radius: 12px;
    }

    .request__submit {
      width: 140px;
      height: 35px;

      border-radius: 12px;

      font-size: 12px;
    }
  }

  @media (min-width: 0px) and (max-width: 650px) {

    .request-form {
      width: 325px;
    }

    .request__input {
      width: 155px;
      height: 28px;
      padding-left: 5px;
      margin-bottom: 15px;
      border-radius: 13px;

      font-size: 12px;
    }

    .request__input__comment {
      width: 100%;
      height: 90px;
    }

    .request__submit {
      width: 165px;
      height: 40px;
      border-radius: 13px;

      font-size: 12px;
    }
  }
</style>
