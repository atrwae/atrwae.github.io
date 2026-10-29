import ProjectData from '@/data/ProjectData.ts'
import { t } from '@/i18n'

export default [
    new ProjectData("project-13", t('dotNetProjectsData.familyTree'), "img/projects/family-tree-thumbnail.mp4",
        t('dotNetProjectsData.familyTreeDesc'), "#F9A620", false, true),

    new ProjectData("project-14", t('dotNetProjectsData.weatherApp'), "img/projects/weather-app-thumbnail.mp4",
        t('dotNetProjectsData.weatherAppDesc'), "#1ca1e2")
];
