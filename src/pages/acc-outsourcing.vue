<template lang="html">
  <secondary-intro caption="Бухгалтерский аутсорсинг" :bottomLimitScroll="90">
    Многие индивидуальные предприниматели недооценивают значение грамотно организованного бухгалтерского учёта.
    Обязанность его вести по закону остается на усмотрение ИП.
    Однако формирование подобной отчётности позволяет индивидуальному предпринимателю лучше контролировать свои дела.
    Плюс иногда наличие такого учёта становится обязательным в рамках делового сотрудничества, например,
    при работе с контрагентами и заключении договоров вам могут потребоваться акты сверок.
    Без бухучета вы не сможете их предоставить.
    Таким образом, ведение бухгалтерского учёта может коснуться и ИП.
  </secondary-intro>

  <div class="secondary__wrapper">
    <h3 class="secondary-list__caption">Цены на услуги в "ООО ПрофиксДв"</h3>

    <mainList :list="servicesList" />

    <saleBlock />

    <calculatorAccounting class="acc-outsourcing__calculator" />

  </div>

</template>

<script setup>
import secondaryIntro from '../components/secondary-intro'
import mainList from '../components/main-list'
import calculatorAccounting from '../components/calculator-accounting'
import saleBlock from '../components/sale-block'

const servicesList = [
  {
    text: 'Ведение бухгалтерского и налогового учета ИП без сотрудников',
    price: '2000 р/мес'
  },
  {
    text: 'Ведение бухгалтерского и налогового учета ИП с сотрудниками (до 5 сотрудников)',
    price: '6000 р/мес'
  },
  {
    text: 'Ведение бухгалтерского и налогового учета ООО с сотрудниками (до 5 сотрудников)',
    price: '15000 р/мес'
  },
  {
    text: 'Ведение бухгалтерского и налогового учета НКО с сотрудниками (до 5 сотрудников)',
    price: '15000 р/мес'
  },
  {
    text: 'Нулевая отчетность (составление и подача)',
    price: '6000 р/мес'
  },
  {
    text: 'Восстановление бухгалтерского учета',
    price: '30000 р'
  },
  {
    text: 'Восстановление кадрового учета',
    price: '1500 р/мес'
  }
]
</script>

<style lang="css" src="../assets/style/acc-outsourcing/acc-outsourcing-desktop.css"></style>
