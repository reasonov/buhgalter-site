<template lang="html">
  <div class="about-page">
    <h3 class="secondary__caption about__caption">О компании</h3>
    <div class="about__wrapper">
      <div class="about__contacts">
        <h4 class="about__contacts__caption">Контакты</h4>
        <ul class="about__contacts__list">
          <li
            class="about__contacts__item"
            :class="{'about__contacts__item1': index != 0}"
            v-for="(item, index) in aboutContacts"
            :key="index"
          >
            <span class="about__contacts__block"></span>
            <p class="about__contacts__text" :class="{'about__contacts__text1': index != 0}">{{ item }}</p>
          </li>
        </ul>
      </div>

      <div class="about__props">
        <h4 class="about__props__caption">Реквизиты</h4>

        <p class="about__props__text about__props__text0">Наименование организации: Общество с ограниченной ответственностью "ПрофиксДв"</p>

        <p class="about__props__text about__props__text1">
          <span class="about__props__stroke">ИНН: 2723173584</span>
          <span class="about__props__stroke">КПП: 272201001</span>
          <span class="about__props__stroke">ОГРН: 1142723004929</span>
        </p>

        <p class="about__props__text about__props__text2">Юридический адрес: 680038 г. Хабаровск, ул. Калинина 123, офис 9А</p>

        <p class="about__props__text about__props__text3">Расчетный счет: 407028108700000608 Корр. Счет: 30101810600000000608 БИК: 040813608 Банк: </p>

        <p class="about__props__text about__props__text4">ПАО «Сбербанк»</p>

      </div>
    </div>
  </div>
</template>

<script setup>
const aboutContacts = [
  'Хабаровск, ул Калинина 123, офис 9А',
  'Звоните: +7(914)-201-09-45',
  'Мы работаем: пн-пт 8:00-20:00',
  'Пишите: profix27@rambler.ru'
]
</script>

<style lang="css" src="../assets/style/about/about-desktop.css"></style>
<style lang="css" src="../assets/style/about/about-middle.css"></style>
<style lang="css" src="../assets/style/about/about-mobile.css"></style>
