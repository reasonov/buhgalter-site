<template lang="html">
  <transition name="menuAm">
    <div class="header__nav" v-show="props.menuState || windowWidth > 650">
      <nav>
        <ul class="header__nav__list">
          <li class="header__nav__li" @mouseover="menuItemToggle(0)" @mouseleave="menuItemToggle(null)">
            <button name="nav-button" class="header__nav__open" @touchstart="menuItemToggle(0)">
              Бухгалтерские услуги
              <more-icon />
            </button>

            <transition name="fadeNav">
              <ul class="nav__pages__list" v-show="menuItemState == 0">
                <li>
                  <router-link class="nav__pages__item" tag="a" to="/acc-outsourcing">Аутсорсинг бухгалтерских услуг</router-link>
                </li>
                <li>
                  <router-link class="nav__pages__item" tag="a" to="/acc-ooo">Бухгалтерские услуги для ООО</router-link>
                </li>
                <li>
                  <router-link class="nav__pages__item" tag="a" to="/acc-ip">Бухгалтерские услуги для ИП</router-link>
                </li>
              </ul>
            </transition>

          </li>
          <li class="header__nav__li" @mouseover="menuItemToggle(1)" @mouseleave="menuItemToggle(null)">
            <button name="nav-button" class="header__nav__open" @touchstart="menuItemToggle(1)">
              Юридические услуги
              <more-icon />
            </button>

            <transition name="fadeNav">
              <ul class="nav__pages__list" v-show="menuItemState == 1">
                <li>
                  <router-link class="nav__pages__item" tag="a" to="/legal-failure">Банкротство предприятий</router-link>
                </li>
                <li>
                  <router-link class="nav__pages__item" tag="a" to="/legal-debts">Взыскание долгов</router-link>
                </li>
                <li>
                  <router-link class="nav__pages__item" tag="a" to="/legal-liqudation">Ликвидация ООО</router-link>
                </li>
              </ul>
            </transition>
          </li>
          <li class="header__nav__li">
            <router-link class="header__nav__item" to="/">Кадровый учет</router-link>
          </li>
          <li class="header__nav__li" @mouseover="menuItemToggle(3)" @mouseleave="menuItemToggle(null)">
            <button name="nav-button" class="header__nav__open" @touchstart="menuItemToggle(3)">
              Регистрация бизнеса
              <more-icon />
            </button>

            <transition name="fadeNav">
              <ul class="nav__pages__list" v-show="menuItemState == 3">
                <li>
                  <router-link class="nav__pages__item" tag="a" to="/registration-ip">Регистрация ИП</router-link>
                </li>
                <li>
                  <router-link class="nav__pages__item" tag="a" to="/registration-ooo">Регистрация ООО</router-link>
                </li>
                <li>
                  <router-link class="nav__pages__item" tag="a" to="/registration-trademark">Регистрация товарного знака</router-link>
                </li>
              </ul>
            </transition>

          </li>
          <li>
            <router-link class="header__nav__item" tag="a" to="/about">О компании</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </transition>
</template>

<script setup>
import moreIcon from '../icons/more-icon'
import { defineProps, ref, computed } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  menuState: Boolean
})

const store = useStore()

const menuItemState = ref(null)

function menuItemToggle (number) {
  if(event.changedTouches) {
    if (number === menuItemState.value) {
      menuItemState.value = -1
    } else {
      menuItemState.value = number
    }
  } else {
    menuItemState.value = number
  }
}

const windowWidth = computed(() => {
  return store.state.windowWidth
})

</script>

<style media="screen">
  .fadeNav-enter-active, .fadeNav-leave-active {
    transition: .5s all ease-out;
  }

  .fadeNav-enter-from, .fadeNav-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }

  .menuAm-enter-active, .menuAm-leave-active {
    transition: .5s all ease-out;
  }

  .menuAm-enter-from, .menuAm-leave-to {
    transform: translateX(-260px);
  }
</style>
