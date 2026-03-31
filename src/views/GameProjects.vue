<template>
  <div>
    <h1>{{ t('gameProjects.title') }}</h1>

    <div style="margin-bottom: 30px;">
		{{ t('gameProjects.p1') }}
	</div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
		{{ t('gameProjects.p2_0') }}<router-link to="/other-projects">{{ t('gameProjects.p2_1') }}</router-link>
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
