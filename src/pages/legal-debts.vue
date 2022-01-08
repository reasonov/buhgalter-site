<template lang="html">
  <secondaryIntro caption="Взыскание долгов" :bottomLimitScroll="120">
    Взыскание долгов – одна из самых востребованных юридических услуг.
    Она должна осуществляться только профессиональными юристами,
    так как самостоятельные попытки возврата задолженности могут привести
    к негативным последствиям. Наши юристы предлагают высококвалифицированную помощь
    по возврату долгов в Хабаровске по договорам займа, неоплаченным договорам, распискам
    и многим другим видам задолженности. Мы оказываем услуги по взысканию долгов как с физических,
    так и с юридических лиц.
  </secondaryIntro>

  <div class="secondary__wrapper">
    <h3 class="secondary-list__caption">Возможные последствия самостоятельного взыскания долгов</h3>

    <ul class="debts__list">
      <li class="debts__item" v-for="(item, index) in debtsList" :key="index">
        <span class="debts__item__stage">0{{ index + 1 }}</span>
        <p class="debts__item__text">{{ item }}</p>
      </li>
    </ul>

    <saleBlock />

    <div class="secondary__request">
      <h4 class="secondary__request__caption">Оставьте заявку</h4>

      <requestForm />

    </div>

  </div>
</template>

<script setup>
import secondaryIntro from '../components/secondary-intro'
import requestForm from '../components/request-form'
import saleBlock from '../components/sale-block'

const debtsList = [
  'Трудности со сбором доказательств , подтверждающих наличие и сумму долга;',
  'Неграмотное оформление искового заявления и, как следствие, отказ в судебном иске;',
  'Проволочки во времени по инициативе ответчика, искусственное затягивание процесса с целью уклонения от выплаты долга;',
  'Непрофессиональная и затяжная работа службы судебных приставов по взысканию долга;',
  'Встречные иски должника о вымогательстве и, как следствие, уголовное преследование кредитора.'
]
</script>

<style lang="css" src="../assets/style/debts/debts-desktop.css"></style>
<style lang="css" src="../assets/style/debts/debts-middle.css"></style>
<style lang="css" src="../assets/style/debts/debts-mobile.css"></style>
