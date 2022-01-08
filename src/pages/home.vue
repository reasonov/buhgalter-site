<template lang="html">
  <section class="home__intro">
    <div class="home__intro__top">
      <div class="home__intro__slider">
        <h4 class="home__intro__caption">Бухгалтерские услуги с финансовой ответственностью</h4>
        <ul class="home__slider__list">
          <transition-group name="fade" mode="in-out">
            <li class="home__slider__item" v-for="(item, index) in homeMainList" :key="index" v-show="homeSlideNumber == index">
              {{ item }}
            </li>
          </transition-group>
        </ul>
        <div class="home__toggler__wrapper">
          <span
            :class="['home__slider__toggler', {'home__slider__toggler--active': homeSlideNumber == index - 1}]"
            v-for="index in 3"
            :key="index"
            @click="homeIntroToggle(index - 1)"
          >
          </span>
        </div>
        <div class="home__intro__request">
          <input class="home__intro__email" type="text" placeholder="E-mail address">
          <popupToggler togglerClass="home__intro__request__submit" :togglePayLoad="true">Рассчет стоимости</popupToggler>
        </div>
      </div>
      <div class="home__intro__image home__intro__image0"></div>
    </div>
    <div class="home__intro__bottom">
      <div class="home__intro__image home__intro__image1">
        <span class="home__intro__image__background0"></span>
        <span class="home__intro__image__background1"></span>
        <span class="home__intro__image__background2"></span>
      </div>
      <div class="home__intro__info">
        <h4 class="home__intro__info__caption">Здравствуйте, меня зовут Лариса Андреевна</h4>
        <p class="home__intro__info__text">
          Я профессиональный бухгалтер и налоговый консультант.
          Люблю свое дело и с удовольствием организую четкую и удобную работу бухгалтерии для вас.
          В работе нахожусь по вашу сторону баррикад, поскольку хорошо понимаю нужды собственников бизнеса.
        </p>
        <p class="home__intro__info__text">
          Профессиональная команда бухгалтеров моего Центра позволяет оперативно решать любые
          бухгалтерские задачи от монотонной рутинной работы до сложных, нестандартных запросов.
          Доверяя мне эту важную область жизни компании, мои клиенты убеждены,
          что получают результат быстро, безупречно, безопасно.
        </p>
      </div>
    </div>
  </section>
  <section class="home__pluses">
    <h3 class="pluses__caption">Преимущества работать с "ООО ПрофиксДв"</h3>

    <div class="pluses__slider" ref="plusesWrapper">
      <sliderComponent
        class="pluses__list"
        :listLength="plusesList.length"
        :slideSize="plusesItemSize"
        :slideChanges="plusesSlideNumber"
        :minWidthForSlider="1000"
      >

        <li
          class="pluses__item"
          @mouseover="plusesHover(index)"
          @mouseleave="plusesHover(null)"
          v-for="(item, index) in plusesList"
          :key="index"
          ref="plusesItem"
        >
          <span class="pluses__item__caption">{{ item.caption }}</span>
          <transition name="plusesAm">
            <p class="pluses__item__text" v-show="plusesItemHovered == index || windowWidth < 650">{{ item.text }}</p>
          </transition>
        </li>

      </sliderComponent>
    </div>

    <div class="pluses__togglers-wrapper">
      <button name="slider-toggler" class="pluses__toggler pluses__toggler-left" @click="homePlusesToggle(1)">
        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.62891 1.59375L1.99987 6.63862L9.62891 11.6835" stroke="black" stroke-width="1.72027"/>
        </svg>
      </button>
      <button name="slider-toggler" class="pluses__toggler pluses__toggler-right" @click="homePlusesToggle(-1)">
        <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.62891 1.59375L1.99987 6.63862L9.62891 11.6835" stroke="black" stroke-width="1.72027"/>
        </svg>
      </button>
    </div>
  </section>

  <saleBlock />

  <section class="home__statistic">

    <div class="statistic__slider" ref="statisticWrapper">
      <sliderComponent
        class="statistic__list"
        :listLength="6"
        :slideSize="statisticItemSize"
        :slideChanges="0"
        :minWidthForSlider="650"
      >

        <li
          class="statistic__item"
          v-for="(item, index) in statisticList"
          :key="index"
          ref="statisticItem"
        >
          <span class="statistic__item__caption">{{ item.caption }}</span>
          <p class="statistic__item__text">{{ item.text }}</p>
        </li>

      </sliderComponent>
    </div>

  </section>

  <section class="home__footer">
    <div class="home__footer__request">
      <h3 class="home__footer__request__caption">Оставьте заявку</h3>

      <request-form />

    </div>
    <div class="home__footer__info">
      <h3 class="home__footer__info__caption">"ООО ПрофиксДв"</h3>

      <p class="home__footer__info__text">
        Нашими услугами на постоянной основе пользуются более 200 клиентов:
        российские юридические лица (ООО, АО, ПАО), некоммерческие организации,
        индивидуальные предприниматели и физические лица.
        Мы предоставляем услуги комплексного бухгалтерского обслуживания как малому,
        так и среднему и крупному бизнесу.
      </p>

      <p class="home__footer__info__text">
        Наши клиенты ведут хозяйственную деятельность в различных сферах бизнеса,
        в том числе занимаются торговлей и производством.
      </p>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import requestForm from '../components/request-form'
import popupToggler from '../components/popup-toggler'
import saleBlock from '../components/sale-block'
import sliderComponent from '../components/slider-component'
import { plusesList } from '../lists/pluses-list'
import { statisticList } from '../lists/statistic-list'
import { homeMainList } from '../lists/home-main-list'

const store = useStore()

const windowWidth = computed(() => {
  return store.state.windowWidth
})

function dropValue (item) {
  setTimeout(() => {
    item.value = 0
  }, 10)
}

const homeSlideNumber = ref(0)

function homeIntroToggle (index) {
  homeSlideNumber.value = index
}

const plusesSlideNumber = ref(0)

function homePlusesToggle (index) {
  plusesSlideNumber.value = index

  dropValue(plusesSlideNumber)
}

const plusesWrapper = ref(null)

const plusesItem = ref(null)
const plusesItemSize = ref(0)

const plusesItemHovered = ref(null)

function plusesHover(index) {
  plusesItemHovered.value = index
}

const statisticWrapper = ref(null)

const statisticItem = ref(null)
const statisticItemSize = ref(0)

onMounted(() => {
  plusesItemSize.value = plusesItem.value.clientWidth

  statisticItemSize.value = statisticItem.value.clientWidth
})

</script>

<style media="screen">
  .plusesAm-enter-active, .plusesAm-leave-active {
    transition: .5s all ease-out;
  }

  .plusesAm-enter-from, .plusesAm-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .fade-enter-active {
    transition: .5s all ease-out;
  }

  .fade-leave-active {
    display: none;
  }

  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
</style>

<style src="../assets/style/home/home-desktop.css"></style>
<style src="../assets/style/home/home-middle.css"></style>
<style src="../assets/style/home/home-mobile.css"></style>
