<script setup lang="ts">
import { setPageTitle } from '@/composables/setPageTitle'; // Updated import path and function name
setPageTitle('Projects'); /* Set title */

import Navigation from '@/components/Navigation.vue'
import { useLanguage } from '@/composables/useLanguage';
import TimelineEntry from '@/components/TimelineEntry.vue';

// Destructure only currentLanguage and toggleLanguage
const { currentLanguage, toggleLanguage } = useLanguage();
const cl = currentLanguage; // Alias for easier access

</script>

<style scoped>
@import '@/assets/base.css';
.timeline {
  position: relative;
  max-width: 80vw;
  margin: 1rem auto; /* Reduced top margin */
  padding-left: 7.5rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 6.2rem;
  top: 0;
  bottom: 0;
  width: 0.125rem;
  background: var(--timeline-line);
}

h2 {
  margin: 2rem auto 0.5rem; /* Further reduced bottom margin */
  padding: 0;
  padding-left: 11.5rem;
}

</style>

<template>
  <Navigation />
  <div class="div-content">
    <h1>
      <span v-if="cl === 'en'">Projects</span>
      <span v-if="cl === 'fr'">Projets</span>
    </h1>

    <span v-if="cl === 'en'">
      An overview for some of my projects, not all have their code publicly available.
    </span>
    <span v-if="cl === 'fr'">
      Un aperçu de quelques-uns de mes projets, parfois le code n'est pas public.
    </span>
    
    <h2 v-if="cl === 'en'"> Highlights </h2>
    <h2 v-if="cl === 'fr'"> Projets majeurs </h2>
    <div class="timeline">
      <TimelineEntry
        :title="cl === 'en' ? 'CoVAPSy 2025 edition SETI team':
                cl === 'fr' ? 'Équipe SETI pour CoVAPSy 2025' : 
                ''"
        :summary="cl === 'en' ? 'CoVAPSy minitature car race competition.':
                  cl === 'fr' ? 'Course de voitures miniatures CoVAPSy.'
                  : ''"
        :date="cl === 'en' ? '2025 - Present' : '2025 - Présent'"
        link="http://github.com/SETI-CoVAPSy/CoVAPSy-SETI-2025"
        link_is_github 
      >
        <p v-if="cl === 'en'">
          Developing navigation and obstacle avoidance algorithms for the 2025 edition of
          <a href="https://ajuton-ens.github.io/CourseVoituresAutonomesSaclay/" target="_blank" rel="noopener"><b>CoVAPSy</b></a>
          miniature car race using Webots and ROS2 Kilted.
        </p>
        <p v-if="cl === 'fr'">
          Développement des algorithmes de navigation et d'évitement d'obstacles pour l'édition 2025 de la course de voitures miniatures
          <a href="https://ajuton-ens.github.io/CourseVoituresAutonomesSaclay/" target="_blank" rel="noopener"><b>CoVAPSy</b></a>
          à l'aide de Webots et ROS2 Kilted.
        </p>
      </TimelineEntry>

      <TimelineEntry
        title="opensurgbot"
        :summary="cl === 'en' ? 'Open-source surgical robot platform.':
                  cl === 'fr' ? 'Robotique chirurgical open-source.'
                  : ''"
        :date="cl === 'en' ? 'Apr - Aug 2025' : 'Avr - Août 2025'"
        link="https://lgabp1.github.io/opensurgbot/"
      >
        <p v-if="cl === 'en'">
          <b>opensurgbot</b> is an open-source surgical robot platform compatible with 
          <a href="https://med-air.github.io/SurRoL/" target="_blank" rel="noopener">SurRoL</a> 
          simulation environment. It aims to provide a low-cost, modular, and accessible solution for research in surgical robotics. Basically, an accessible and affordable alternative to arms of the 
          <a href="https://github.com/jhu-dvrk" target="_blank" rel="noopener">dVRK</a>
          . 
        </p>
        <p v-if="cl === 'fr'">
          <b>opensurgbot</b> est une plateforme de robot chirurgical open-source compatible avec le simulateur 
          <a href="https://med-air.github.io/SurRoL/" target="_blank" rel="noopener">SurRoL</a> 
          . Il vise à fournir une solution à faible coût, modulaire et accessible pour la recherche en robotique chirurgicale. En somme, c'est une alternative accessible et abordable au matériel du 
          <a href="https://github.com/jhu-dvrk" target="_blank" rel="noopener">dVRK</a>
          . 
        </p>
        <p v-if="cl === 'en'">I have developed the electronics, low-level STM32 software, Python middleware and overview GitHub pages.</p>
        <p v-if="cl === 'fr'">J'ai développé l'électronique, le logiciel STM32 bas niveau, le middleware Python et la page GitHub d'overview.</p> 

        <img src="https://lgabp1.github.io/opensurgbot/assets/diagram_architecture.png" alt="opensurgbot architecture" style="max-width: 60%; margin-top: 1em; display: block; margin-left: auto; margin-right: auto;" />

        <video controls style="max-width: 60%; margin-top: 1em; display: block; margin-left: auto; margin-right: auto;">
          <source src="https://lgabp1.github.io/opensurgbot/assets/osg.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </TimelineEntry>

      <TimelineEntry
        title="IP Paris Racing Team"
        :summary="cl === 'en' ? 'Electronics team leader':
                  cl === 'fr' ? 'Chef de l\'équipe d\'électronique'
                  : ''"
        :date="cl === 'en' ? 'Jun 2023 — Mar 2025':
               cl === 'fr' ? 'Jun 2023 — Mar 2025'
               : ''"
        link="https://ipparisracingteam.binets.fr/#"
      >
        <p v-if="cl === 'en'">Developing on-board electronics and setting up the CAN bus going on the future car.</p>
        <p v-if="cl === 'fr'">Développement de l'électronique embarquée sur la voiture et mise en place de son bus CAN.</p>
      </TimelineEntry>
      
      <TimelineEntry
        title="curses_tui_lib"
        :summary="cl === 'en' ? 'Library to create Terminal User Interface (TUI) applications':
                  cl === 'fr' ? 'Bibliothèque pour créer des applications Terminal User Interface (TUI)'
                  : ''"
        :date="cl === 'en' ? 'Summer 2024':
               cl === 'fr' ? 'Été 2024'
               : ''"
      >
        <p v-if="cl === 'en'">Created </p>
        <p v-if="cl === 'fr'">Développement</p>

        <img src="" alt="Preview TUI" style="max-width: 90%; margin-top: 1em; display: block; margin-left: auto; margin-right: auto;" />

      </TimelineEntry>
    </div>

    
    <h2 v-if="cl === 'en'"> Other projects </h2>
    <h2 v-if="cl === 'fr'"> Autre projets </h2>
    <div class="timeline">
      <TimelineEntry
        title="lgabp1.github.io"
        :summary="cl === 'en' ? 'This website !':
                  cl === 'fr' ? 'C\'est ce site !'
                  : ''"
        :date="cl === 'en' ? '2025 - Present' :
               cl === 'fr' ? '2025 - Présent' : 
               ''"
        link="https://github.com/lgabp1/lgabp1.github.io"
        link_is_github 
      >
        <p v-if="cl === 'en'">
          This very website you are browsing right now! It is a personal portfolio site built with Vue.js and hosted on GitHub Pages. I am actively developing and enhancing it to showcase some of my projects.
        </p>
        <p v-if="cl === 'fr'">
          Le site web que vous consultez en ce moment ! C'est un portfolio personnel écrit avec Vue.js et hébergé sur GitHub Pages. Je le développe et l'améliore activement pour présenter certains de mes projets.
        </p>
      </TimelineEntry>

      <TimelineEntry
        title="LaTemplate"
        :summary="cl === 'en' ? 'My Typst templates for various documents!':
                  cl === 'fr' ? 'Mes modèles Typst pour différents documents !'
                  : ''"
        date="Sep 2025"
        link="https://github.com/lgabp1/LaTemplate"
        link_is_github
      >
        <p v-if="cl === 'en'">Sample (report template):</p>
        <p v-if="cl === 'fr'">Exemple (modèle de rapport):</p>
        <img src="https://private-user-images.githubusercontent.com/152983873/507910493-c1806e64-29c7-467e-a484-656b56c0902e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjI5NDU4MTEsIm5iZiI6MTc2Mjk0NTUxMSwicGF0aCI6Ii8xNTI5ODM4NzMvNTA3OTEwNDkzLWMxODA2ZTY0LTI5YzctNDY3ZS1hNDg0LTY1NmI1NmMwOTAyZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTExMlQxMTA1MTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03N2NiMjY2ZGJmY2Q1ZWI4MWI4OTAyYjY4ZGFkZTU4ZjgwMGE4YmEwMmQwYjg2MjNjZjAxNTM1NDMwM2IzNjNlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.JAWuyfuwcVWNa1ZfZiez2bDOvg1bXPGOqBY8g_YGkcE" alt="LaTemplate image preview" style="max-width: 60%; margin-top: 1em; display: block; margin-left: auto; margin-right: auto;" />
      </TimelineEntry>
      
      <TimelineEntry
        title="ZDT pythoncan driver / ZDT STM32 driver"
        :summary="cl === 'en' ? 'Drivers for the ZDT stepper motor controller':
                  cl === 'fr' ? 'Drivers pour le contrôleur de moteur à pas par ZDT'
                  : ''"
        :date="cl === 'en' ? 'Summer 2025' :
               cl === 'fr' ? 'Été 2025' : 
               ''"
        link="https://github.com/lgabp1/zdt_pythoncan_driver"
        link_is_github
      >
        <p>
          <span v-if="cl === 'en'">Driver to control </span>
          <span v-if="cl === 'fr'">Driver pour les contrôleurs de moteur à pas par </span>
          <a href="https://blog.csdn.net/zhangdatou666">ZDT (ZhangDaTou, 张大头)</a>
          <span v-if="cl === 'en'"> stepper motor controllers through a CAN bus.</span>
          <span v-if="cl === 'fr'"> via un bus CAN.</span>
        </p>
        <p v-if="cl === 'en'">Compatible with STM32 microcontrollers and python.</p>
        <p v-if="cl === 'fr'">Compatible avec microcontrôleurs STM32 et python.</p>
        <img src="https://i-blog.csdnimg.cn/blog_migrate/16efba6b3fa897741cd08c76b9fb2a31.png" alt="ZDT controller preview" style="max-width: 60%; margin-top: 1em; display: block; margin-left: auto; margin-right: auto;" />
      </TimelineEntry>
      
      <TimelineEntry
        title="More projects to be added here..."
        summary="This website is under continuous development, stay tuned!"
        date="Present"
      >
        <p>
          Hopefully some more projects will be added here soon...
        </p>
      </TimelineEntry>
    </div>
  </div>
</template>
