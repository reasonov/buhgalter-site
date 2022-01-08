<template lang="html">
  <secondaryIntro caption="Регистрация ООО" :bottomLimitScroll="130">
    <span class="secondary__paragraph">
      Общество с ограниченной ответственностью (ООО) – организационно-правовая форма предприятия,
      которую выбирают 80% всех компаний в России. На это есть несколько причин. Первая: ответственность
      распределяется между всеми участниками. Вторая: у дольщиков нет ограничений в ведении хозяйственной деятельности.
      Третья: при банкротстве каждый рискует только собственной долей. Четвертая: предусмотрена возможность
      долевую часть продать, подарить, завещать. Порядок регистрации ООО в РФ устанавливается ФЗ №129
      «О государственной регистрации юридических лиц».
    </span>

    Если вам нужно быстро открыть ООО, и вы ищете опытного ответственного посредника, то компания ЦентрКонсалт готова
    предложить профессиональные услуги консультантов и юристов. Наши эксперты в совершенстве знают тонкости законодательства РФ,
    а потому подготовка документации и юридическая регистрация ООО пройдет без задержек и будет легитимной. Работаем по
    доверенности с субъектами хозяйствования по всей России.

  </secondaryIntro>

  <div class="secondary__wrapper">

    <h3 class="secondary-list__caption">Цены на услуги в "ООО ПрофиксДв"</h3>

    <mainList :list="registrationIpList" />

    <saleBlock />

    <div class="secondary__request">
      <h4 class="secondary__request__caption">Оставьте заявку</h4>

      <requestForm />

    </div>

  </div>
</template>

<script setup>
import secondaryIntro from '../components/secondary-intro'
import mainList from '../components/main-list'
import requestForm from '../components/request-form'
import saleBlock from '../components/sale-block'

const registrationIpList = [
  {
    text: 'Регистрация ООО',
    price: ' 5000 р/мес'
  },
  {
    text: 'Регистрация ООО (при заключении договора на бухгалтерское обслуживание)',
    price: 'бесплатно'
  }
]
</script>

<style lang="css" scoped>
</style>
