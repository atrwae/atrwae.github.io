<template>
  <div>
    <h1>{{ t('dotNetProjects.title') }}</h1>

    <div style="margin-bottom: 30px;">
        {{ t('dotNetProjects.p1') }}
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import dotNetProjectsData from "@/data/DotNetProjectsData.ts";

export default Vue.extend({
  name: "DotNetProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: dotNetProjectsData,
    };
  },
});
</script>
