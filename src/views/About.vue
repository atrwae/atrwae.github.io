<template>
  <div style="margin-bottom: 80px;">
    <h1>{{ t('about.hello') }}</h1>

    <div class="paragraph">
      <div v-html="t('about.p1')"></div>

    <div style="margin-top: 20px;">
		{{ t('about.p2_0') }}<router-link to="/other-projects">{{ t('about.p2_1') }}</router-link>
		{{ t('about.p2_2') }}<router-link to="/game-projects">{{ t('about.p2_3') }}</router-link>
		{{ t('about.p2_4') }}<router-link to="/resume">{{ t('about.p2_5') }}</router-link>
		{{ t('about.p2_6') }}
	</div>

    <div style="margin-top: 40px;">
        {{ t('about.p3_0') }}<router-link to="/game-projects">{{ t('about.p3_1') }}</router-link>
        {{ t('about.p3_2') }}<router-link to="/contact">{{ t('about.p3_3') }}</router-link>.
    </div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Mój avatar" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>