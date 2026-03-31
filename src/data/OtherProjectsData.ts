import ProjectData from '@/data/ProjectData.ts'
import { t } from '@/i18n'

export default [
    new ProjectData("project-6", "Flashout 3", "img/projects/flashout3-thumbnail.mp4",
        t('otherProjectsData.flashoutDesc'), "#F9A620", false, true),

    new ProjectData("project-7", "Cyjin", "img/projects/cyjin-thumbnail.mp4",
        t('otherProjectsData.cyjinDesc'), "#1ca1e2"),

    new ProjectData("project-8", "Uboat Attack", "img/projects/uboatAttack-thumbnail.mp4",
        t('otherProjectsData.uboatDesc')),

    new ProjectData("project-9", "Master Spy", "img/projects/masterSpy-thumbnail.mp4",
        t('otherProjectsData.masterSpyDesc'), '#c10606'),

    new ProjectData("project-10", "Not Not", "img/projects/notnot-thumbnail.mp4",
        t('otherProjectsData.notnotDesc'), "#BEB2C8", true, false),

    new ProjectData("project-11", "Woodturning", "img/projects/woodturning-thumbnail.mp4", 
        t('otherProjectsData.woodturningDesc'), '#A4036F'),

    new ProjectData("project-12", "Zombie Raft", "img/projects/zombieRaft-thumbnail.mp4", 
        t('otherProjectsData.zombieRaftDesc'), '#26C485'),
];