<template>
  <div class="header">
    <div class="nav-bar">
      <router-link to="/">{{ t('header.aboutMe') }}</router-link>
      <router-link to="/game-projects">{{ t('header.games') }}</router-link>
      <router-link to="/other-projects">{{ t('header.porting') }}</router-link>
      <router-link to="/resume">{{ t('header.cv') }}</router-link>
      <router-link to="/contact">{{ t('header.contact') }}</router-link>
		<img
		v-if="currentLang !== 'en'"
		src="img/englishIcon.png"
		alt="Language change"
		@click="switchLang('en')"
		id="languageIcon" />
		<img
		v-if="currentLang !== 'pl'"
		src="img/polishIcon.png"
		alt="Language change"
		@click="switchLang('pl')"
		id="languageIcon" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { setLocale } from '@/i18n'

export default Vue.extend({
  name: "Header",
  methods: {
    switchLang(lang: string) {
      setLocale(lang)
      window.location.reload()
    }
  }
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.header {
  width: 100%;
}

.nav-bar {
  text-align: right;
  padding: 20px;
  line-height: 3em;
}

a {
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
}

.router-link-exact-active {
  border: 0px solid @textColor;
  border-bottom-width: 2px;
}

#languageIcon 
{
    margin-left: 45px;
    margin-right: 15px;
    vertical-align: middle;
    width: 50px;
}

@media only screen and (max-width: 620px){
  .nav-bar {
    line-height: 2em;
  }

  a {
    margin-left: 9px;
    margin-right: 9px;
    padding-bottom: 0px;
  }
}

</style>
