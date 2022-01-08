<template lang="html">
  <secondaryIntro caption="Банкротство юридического лица" :bottomLimitScroll="110">
    <span class="secondary__paragraph">
      <b>Банкротство  юридического  лица</b> - это не просто несостоятельность должника, а признание арбитражным судом
      неспособность должника в полном объеме удовлетворить требование кредиторов по денежным обязательствам и исполнить
      обязанность по уплате обязательных  платежей.
    </span>

    <span class="secondary__paragraph">
      Банкротство можно произвести при задолженности от 300 000 тыс  ( срок существования задолженности свыше 3-ех мес).
    </span>

    <span class="secondary__paragraph">
      Стоимость рассчитывается индивидуально и зависит от задолженности организации.
      В любом случае стоимость процедуры законного банкротства компании будет значительно ниже, чем возврат долгов кредиторам.
    </span>

    <span class="secondary__paragraph">
      <b>Срок банкротства:</b> от 7 месяцев.
    </span>

    <span class="secondary__paragraph">
      <b>Важно!</b> Если ИП после банкротства не имеет право заниматься данной деятельностью свыше 5 лет,
      то у ООО нет каких-либо ограничений.
    </span>

    Использовать процедуру банкротства могут как ООО, Публичные общества,
    так же и ИП (у индивидуального предпринимателя процесс банкротства немного отличается).
     В соответствии с законодательством РФ банкротами не могут быть признаны: государственные предприятия,
     учреждения, политические партии и религиозные организации.
  </secondaryIntro>

  <div class="secondary__wrapper">
    <h3 class="secondary-list__caption">
      <b>Алгоритм банкротства юридических лиц</b>
    </h3>

    <div :class="['failure__list-wrapper', {'failure__list--hidden': hideList}]">
      <ul class="failure__list">
        <li :class="['failure__item', {'failure__item--mobile': index == 2 && hideList}]" v-for="(item, index) in failureList" :key="index">
          <span class="failure__item__stage">этап {{ index + 1 }}</span>
          <span class="failure__item__stage--mobile">{{ item.time }}</span>
          <p class="failure__item__text">{{ item.text }}</p>
          <span class="failure__item__time">{{ item.time }}</span>
        </li>
      </ul>

      <div class="failure__more__wrapper">
        <button name="list-toggler" :class="['failure__more__icon', {'more__icon--active': !hideList}]" @click="toggleHideList">
          <moreListIcon />
        </button>
      </div>

    </div>

  </div>

  <saleBlock />

  <CalculatorLegal class="failure__calculator" />

</template>

<script setup>
import secondaryIntro from '../components/secondary-intro'
import CalculatorLegal from '../components/calculator-legal'
import saleBlock from '../components/sale-block'
import moreListIcon from '../icons/more-list-icon'
import { currentList } from '../lists/failure-list'
import { useStore } from 'vuex'
import { ref, computed } from 'vue'

const store = useStore()

const windowWidth = computed(() => {
  return store.state.windowWidth
})

const failureList = currentList().failureList.value

const hideList = ref(true)

function toggleHideList () {
  hideList.value = !hideList.value
}

</script>

<style lang="css" src="../assets/style/failure/failure-desktop.css"></style>
<style lang="css" src="../assets/style/failure/failure-middle.css"></style>
<style lang="css" src="../assets/style/failure/failure-mobile.css"></style>
