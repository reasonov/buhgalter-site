<template lang="html">
  <secondaryIntro caption="Регистрация товарного знака" :bottomLimitScroll="130">
    <span class="secondary__paragraph">
      Товарный знак – это бренд компании, который требует значительных вложений в раскрутку,
      однако окупает себя через 2-4 года, а затем приносит стабильную
      прибыль при минимальных вложений в маркетинг.
    </span>

    <span class="secondary__paragraph">
      Регистрация товарного знака помогает в борьбе с недобросовестными конкурентами.
       Для того что бы защитить свою компанию и продукцию, необходимо обязательно регистрировать товарный знак.
    </span>

    Всего на территории России зарегистрировано 693 081 товарных знаков, по данным национальной процедуры, и 261 534 знаков, по данным международной процедуры.
  </secondaryIntro>

  <calculatorTrademark />

  <saleBlock />

  <div class="secondary__request">
    <h4 class="secondary__request__caption">Оставьте заявку</h4>

    <requestForm />

  </div>

</template>

<script setup>
import secondaryIntro from '../components/secondary-intro'
import calculatorTrademark from '../components/calculator-trademark'
import requestForm from '../components/request-form'
import saleBlock from '../components/sale-block'
</script>

<style lang="css" scoped>
</style>
