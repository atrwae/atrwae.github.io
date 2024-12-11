<template>
  <div style="margin-bottom: 80px;">
    <h1>Cześć!</h1>

    <div class="paragraph">
      <div>
        Nazywam się <strong>Artur Wiącek</strong>, jestem Unity Developerem z 3-letnim komercyjnym doświadczeniem.<br/>
        Kocham wszystko co związane z grami, biorę udział w masie eventów, a oprócz wielu gier wideo zrobiłem swoją karciankę i nawet własną konsolę do gier.
      </div>

      <div style="margin-top: 20px;">Komercyjnie pracowałem wyłącznie przy <router-link to="/other-projects">portowaniu</router-link>, ale mam też sporo <router-link to="/game-projects">własnych projektów</router-link> i innych rzeczy w <router-link to="/resume">moim cv</router-link>.</div>

      <div style="margin-top: 40px;">Obecnie pracuję nad swoją grą <a href="mailto:johnmatrix@deltaforce.us">Astrolings</a> i szukam pracy. Możesz się ze mną skontaktować <router-link to="/contact">tutaj</router-link>.</div>
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