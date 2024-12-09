<template>
  <div>
    <h1>Gry</h1>

    <div style="margin-bottom: 30px;">
      Zbiór gier które zrobiłem samemu albo w dużej części pomogłem plus dwa artykuły które napisałem.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      Więcej moich projektów znajduje się w <router-link to="/other-projects">zakładce portowanie</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
