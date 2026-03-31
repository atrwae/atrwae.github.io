<template>
  <div>
    <h1>CV</h1>

    <div class="paragraph">
      <span v-html="t('resume.p1')"></span>

      <div style="margin-top:20px; margin-bottom:20px;" v-if="currentLang === 'pl'">
          <a class="download-link" href="d/cv.pdf" target="_blank">
          <i class="fa fa-download fa-lg fa-fw"></i>{{ t('resume.downloadButton') }}
          </a>
        <div style="clear:both"></div>
      </div>

    </div>
    <div class="photo">
      <img src="img/resume-photo.png" alt="Moje logo" />
    </div>

    <div style="clear:both"></div>

      <h2>{{ t('resume.skills.title') }}</h2>
      <div class="skill-set">
        <h3>{{ t('resume.skills.miscTitle') }}</h3>
        <ul>
            <span v-html="t('resume.skills.misc')"></span>
        </ul>
      </div>
      <div class="skill-set">
          <h3>{{ t('resume.skills.unityTitle') }}</h3>
        <ul>
            <span v-html="t('resume.skills.unity')"></span>
        </ul>
      </div>
      <div style="clear:both" />

      <div class="full-content">
      <h2>{{ t('resume.experience') }}</h2>

      <h3>Naptime Games <span class="company-name">{{ t('resume.naptime.title') }}</span></h3>
      <h4>06.2023-09.2024</h4>

      <div>
          <ul>
              <span v-html="t('resume.naptime.summary')"></span>
          </ul>
      </div>

      <h3>No Gravity Development <span class="company-name">{{ t('resume.noGravity.title') }}</span></h3>
      <h4>10.2021-04.2023</h4>

      <div>
          <ul>
              <span v-html="t('resume.noGravity.summary')"></span>
          </ul>
      </div>

      <h3>{{ t('resume.hellHotel.projectName') }}
          <span class="company-name">{{ t('resume.hellHotel.title') }}</span>
      </h3>
      <h4>10.2021-02.2022</h4>

      <div>
          <ul>
              <span v-html="t('resume.hellHotel.summary')"></span>
          </ul>
      </div>

      <h3>{{ t('resume.cyborg.projectName') }}<span class="company-name">{{ t('resume.cyborg.title') }}</span></h3>
      <h4>09.2020-12.2020</h4>

      <div>
          <ul>
              <span v-html="t('resume.cyborg.summary')"></span>
          </ul>
      </div>

      <h2>{{ t('resume.languages.title') }}</h2>

      <h3>{{ t('resume.languages.eng') }}</h3>
      <div>{{ t('resume.languages.engDesc') }}</div>

      <h3>{{ t('resume.languages.fr') }}</h3>
      <div>{{ t('resume.languages.frDesc') }}</div>

      <h3>{{ t('resume.languages.pl') }}</h3>
      <div>{{ t('resume.languages.plDesc') }}</div>


      <h2>{{ t('resume.misc.title') }}</h2>
      <div>
        <h3>{{ t('resume.misc.videoGames') }}</h3>
        <div v-html="t('resume.misc.videoGamesDesc')"></div>

        <h3>{{ t('resume.misc.sport') }}</h3>
        <div v-html="t('resume.misc.sportDesc')"></div>

        <h3>{{ t('resume.misc.mountains') }}</h3>
        <div v-html="t('resume.misc.mountainsDesc')"></div>

        <h3>{{ t('resume.misc.travel') }}</h3>
        <div v-html="t('resume.misc.travelDesc')"></div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {},
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

.company-name {
  opacity: 0.5;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>