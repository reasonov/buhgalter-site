<template lang="html">
  <secondaryIntro caption="Бухгалтерские услуги для ИП" :bottomLimitScroll="90">
    Для индивидуальных предпринимателей формирование подобной отчётности во многом происходит в облегчённом режиме.
    Тем не менее это не освобождает от необходимости вникать в тонкости, если было принято решение вести такой учёт.
    Плюс к нему нужно подойти максимально ответственно, чтобы получить конкретные цифры, повысить управляемость бизнесом,
    подготовить для делового партнёра соответствующие документы. И если у ИП на решение подобной задачи не хватает времени,
    он всегда может её делегировать “ООО ПрофиксДв”.
    Мы готовы взяться даже за сложную задачу и сделать для вас всё максимально простым.
  </secondaryIntro>

  <div class="secondary__wrapper">
    <h3 class="secondary-list__caption">Стоимость услуг для ИП при УСН 6%</h3>

    <mainList :list="ipList0" />

    <h3 class="secondary-list__caption acc-ip__caption">Стоимость услуг для ИП при УСН 15%</h3>

    <mainList :list="ipList1" />

    <h3 class="secondary-list__caption acc-ip__caption">Стоимость услуг для ИП при ОСНО</h3>

    <mainList :list="ipList2" />

    <saleBlock />

    <calculatorAccounting class="acc-outsourcing__calculator" />

  </div>
</template>

<script setup>
import secondaryIntro from '../components/secondary-intro'
import mainList from '../components/main-list'
import calculatorAccounting from '../components/calculator-accounting'
import saleBlock from '../components/sale-block'

const ipList0 = [
  {
    text: 'Ведение бухгалтерского и налогового учета ИП без сотрудников',
    price: '2000 р/мес'
  },
  {
    text: 'Ведение бухгалтерского и налогового учета ИП с сотрудниками (до 5 сотрудников)',
    price: '6000 р/мес'
  },
  {
    text: 'Нулевая отчетность (составление и подача)',
    price: '4000 р./кв-л'
  }
]

const ipList1 = [
  {
    text: 'Ведение бухгалтерского и налогового учета ИП без сотрудников',
    price: '6000 р/мес'
  },
  {
    text: 'Ведение бухгалтерского и налогового учета ИП с сотрудниками (до 5 сотрудников)',
    price: '15000 р/мес'
  },
  {
    text: 'Нулевая отчетность (составление и подача)',
    price: '6000 р./кв-л'
  }
]

const ipList2 = [
  {
    text: 'Ведение бухгалтерского и налогового учета ИП без сотрудников',
    price: '10000 р/мес'
  },
  {
    text: 'Ведение бухгалтерского и налогового учета ИП с сотрудниками (до 5 сотрудников)',
    price: '16000 р/мес'
  },
  {
    text: 'Нулевая отчетность (составление и подача)',
    price: '6000 р./кв-л'
  }
]
</script>

<style media="screen" scoped>
  .acc-ip__caption {
    margin-top: 60px;
  }
</style>
