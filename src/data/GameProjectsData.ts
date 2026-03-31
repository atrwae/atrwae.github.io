import ProjectData from '@/data/ProjectData.ts'
import { t } from '@/i18n'

export default [
    new ProjectData("project-1", "Astrolings", "img/projects/astrolings-thumbnail.mp4",
        t('gameProjectsData.astrolingsDesc'), "#23bd69", true, true),

    new ProjectData("project-2", t('gameProjectsData.viewCone'), "img/projects/viewConeArticle-thumbnail.mp4",
        t('gameProjectsData.viewConeDesc'), "#5a78af"),

    new ProjectData("project-3", "Artykuł 'Unity Superliminal Tutorial'",
        "img/projects/superliminalArticle-thumbnail.mp4", t('gameProjectsData.superliminalDesc'), "#383838"),

    new ProjectData("project-4", "Hell Hotel", "img/projects/hellHotel-thumbnail.mp4",
        t('gameProjectsData.hellHotelDesc'), "#e80fb7"),

    new ProjectData("project-5", "Cyborg", "img/projects/cyborg-thumbnail.mp4",
        t('gameProjectsData.cyborgDesc'), "#e48246", false, true)
];