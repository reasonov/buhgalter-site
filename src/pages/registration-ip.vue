<template lang="html">
  <secondaryIntro caption="Регистрация ИП" :bottomLimitScroll="120">
    <span class="secondary__paragraph">
      Регистрация ИП в России – строго регламентированная процедура,
      порядок которой определён Федеральным законом «О государственной
      регистрации юридических лиц и индивидуальных предпринимателей» от 8 августа 2001 г. № 129.
    </span>

    <span class="secondary__paragraph">
      Обычно регистрация ИП в России осуществляется по месту постоянной регистрации,
      но в исключительных случаях возможна регистрация ИП по месту пребывания.
    </span>

    Так же необходимо учитывать, что ИП регистрируется не только непосредственно в налоговой,
    но и в так называемых внебюджетных фондах: Пенсионном Фонде России и Фонде Обязательного
    Медицинского Страхования. В ПФР и ФОМС – регистрация происходит автоматически,
    предпринимателю просто высылается уведомление о том, что он зарегистрирован в этих органах.

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
    text: 'Регистрация ИП',
    price: ' 2000 р/мес'
  },
  {
    text: 'Регистрация ИП (при заключении договора на бухгалтерское обслуживание)',
    price: 'бесплатно'
  }
]
</script>

<style lang="css" scoped>
</style>
