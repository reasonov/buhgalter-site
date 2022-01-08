<template>
  <header class="main-header">
    <div class="header__top">
      <div class="header__left">
        <a class="header__logo main-logo" href="/">ПрофиксДв</a>
        <p class="header__text main-description">Персональный бухгалтер с финансовой ответственностью</p>
      </div>
      <div class="header__right">
        <span class="header__phone">+7(914)-201-09-45</span>
        <popupToggler togglerClass="header__open-popup" :togglePayLoad="true">Рассчет стоимости</popupToggler>
      </div>
    </div>

    <div class="header__top--mobile">
      <button name="menu-toggler" class="menu-toggler" @click="menuToggle()">
        <span class="menu-toggler__line"></span>
        <span class="menu-toggler__line menu-toggler__line--short"></span>
        <span class="menu-toggler__line"></span>
      </button>
      <router-link class="header__top__caption" to="/">"ООО ПрофикcДв"</router-link>
      <button name="phone-number" class="header__top__phone" @click="copyNumber()">
        <img class="phone-number" src="./assets/images/phone-image.png" alt="phone">
      </button>
    </div>

    <mainNavigation :menuState="menuState" />

  </header>

  <main>

    <popupMain />

    <router-view></router-view>

  </main>

  <footer>
    <div class="footer__wrapper">

      <div class="footer__column footer__column0">
        <a class="footer__logo main-logo" href="/">ПрофиксДв</a>
        <p class="footer__text main-description">Персональный бухгалтер с финансовой ответственностью</p>
      </div>

      <div class="footer__column footer__column1">
        <span class="footer__column__caption">Время работы</span>
        <p class="footer__column__text footer__column__text0">9:00 - 18:00 по Хабаровску</p>

        <span class="footer__column__caption footer__number">+7(421)-240-30-17</span>
        <p class="footer__column__text footer__column__text1">г. Хабаровск ул. Калинина 123, офис 9А</p>
      </div>

      <div class="footer__column footer__column2">
        <nav class="footer__nav">
          <ul class="footer__nav__list">
            <li>
              <router-link to="/acc-outsourcing" tag="a" class="footer__nav__item">Бухгалтерские услуги</router-link>
            </li>
            <li>
              <router-link to="/registration-ip" tag="a" class="footer__nav__item">Регистрация бизнеса</router-link>
            </li>
            <li>
              <router-link to="/legal-failure" tag="a" class="footer__nav__item">Юридические услуги</router-link>
            </li>
            <li>
              <router-link to="/about" tag="a" class="footer__nav__item footer__nav__item--last">О компании</router-link>
            </li>
          </ul>
        </nav>
      </div>

      <popupToggler togglerClass="footer__open-popup" :togglePayLoad="true">Заказать звонок</popupToggler>

    </div>

    <a class="footer__site-maker" href="#">Hello World</a>
  </footer>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import popupMain from './components/popup-main'
import popupToggler from './components/popup-toggler'
import mainNavigation from './components/main-navigation'

const store = useStore()

const menuState = ref(false)

function menuToggle (state = null) {
  if(state === null) {
    menuState.value = !menuState.value
  } else {
    menuState.value = state
  }
}

function resizeWindow () {
  store.commit('resizeWindow', document.documentElement.clientWidth)
}

const route = useRoute()

watch(route, () => {
  menuToggle(false)
})

async function copyNumber() {
  try {
    await navigator.clipboard.writeText('+7(914)-201-09-45');
  } catch {
  }
}

window.addEventListener('resize', resizeWindow())

onMounted(resizeWindow)

</script>

<style src="./assets/style/app/app-desktop.css"></style>
<style src="./assets/style/app/app-middle.css"></style>
<style src="./assets/style/app/app-mobile.css"></style>
<style src="./assets/style/global/global-desktop.css"></style>
<style src="./assets/style/global/global-middle.css"></style>
<style src="./assets/style/global/global-mobile.css"></style>
<style src="./assets/fonts/fonts.css"></style>
