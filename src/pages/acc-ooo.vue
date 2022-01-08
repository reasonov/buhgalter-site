<template lang="html">
  <secondaryIntro caption="Бухгалтерские услуги для ООО" :bottomLimitScroll="90">
    Ведение бухгалтерского учёта силами сторонней организации – это оптимальное решение для многих начинающих предпринимателей,
    которые не обладают достаточными компетенциями в данной сфере и не готовы тратиться на штатных сотрудников.
    Благодаря обращению к профессионалам удаётся снизить налоговые риски и в целом избежать проблем с контролирующими органами.
    При этом перед исполнителем можно поставить конкретные задачи: организовать управленческий учёт в рамках бухгалтерского,
    создать современную и удобную базу, снизить налоговую нагрузку.
  </secondaryIntro>

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
    text: 'Ведение бухгалтерского и налогового учета ООО (до 5 сотрудников)',
    price: '15000 р/мес'
  },
  {
    text: 'Ведение бухгалтерского и налогового учета ООО (до 10 сотрудников)',
    price: 'от 18500 р/мес'
  },
  {
    text: 'Ведение бухгалтерского и налогового учета ООО (до 15 сотрудников)',
    price: 'от 22500 р/мес'
  },
  {
    text: 'Ведение бухгалтерского и налогового учета ООО (от 20 сотрудников и более)',
    price: 'от 25000 р/мес'
  },
  {
    text: 'Нулевая отчетность (составление и подача)',
    price: 'от 6000 р/мес'
  },
  {
    text: 'Восстановление бухгалтерского учета',
    price: 'от 30 000р'
  },
  {
    text: 'Восстановление кадрового учета',
    price: 'от 1500 р/мес'
  }
]
</script>
