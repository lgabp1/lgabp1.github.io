<script setup lang="ts">
import { setPageTitle } from "@/composables/setPageTitle"; // Updated import path and function name
setPageTitle("Projects"); /* Set title */

import Navigation from "@/components/Navigation.vue";
import { useLanguage } from "@/composables/useLanguage";
import TimelineEntry from "@/components/TimelineEntry.vue";

// Destructure only currentLanguage and toggleLanguage
const { currentLanguage, toggleLanguage } = useLanguage();
const cl = currentLanguage; // Alias for easier access
</script>

<style scoped>
@import "@/assets/base.css";
.timeline {
  position: relative;
  max-width: 80vw;
  margin: 1rem auto; /* Reduced top margin */
  padding-left: 7.5rem;
}

.timeline::before {
  content: "";
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

.two-images {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
.two-images img {
  max-width: 45%;
  width: auto;
  height: 20em;
  display: block;
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
      An overview for some of my projects, not all have their code publicly
      available.
    </span>
    <span v-if="cl === 'fr'">
      Un aperçu de quelques-uns de mes projets, parfois le code n'est pas
      public.
    </span>

<!--
  _   _ _       _     _ _       _     _       
 | | | (_) __ _| |__ | (_) __ _| |__ | |_ ___ 
 | |_| | |/ _` | '_ \| | |/ _` | '_ \| __/ __|
 |  _  | | (_| | | | | | | (_| | | | | |_\__ \
 |_| |_|_|\__, |_| |_|_|_|\__, |_| |_|\__|___/
          |___/           |___/               
 -->
    <h2 v-if="cl === 'en'">Highlights</h2>
    <h2 v-if="cl === 'fr'">Projets majeurs</h2>
    <div class="timeline">
      <TimelineEntry
        :title="
          cl === 'en'
            ? 'CoVAPSy 2025 edition SETI team'
            : cl === 'fr'
            ? 'Équipe SETI pour CoVAPSy 2025'
            : ''
        "
        :summary="
          cl === 'en'
            ? 'CoVAPSy minitature car race competition.'
            : cl === 'fr'
            ? 'Course de voitures miniatures CoVAPSy.'
            : ''
        "
        :date="cl === 'en' ? '2025 - Present' : '2025 - Présent'"
        link="http://github.com/SETI-CoVAPSy/CoVAPSy-SETI-2025"
        link_is_github
      >
        <p v-if="cl === 'en'">
          Developing navigation and obstacle avoidance algorithms for the 2025
          edition of
          <a
            href="https://ajuton-ens.github.io/CourseVoituresAutonomesSaclay/"
            target="_blank"
            rel="noopener"
            ><b>CoVAPSy</b></a
          >
          miniature car race using Webots and ROS2 Kilted.
        </p>
        <p v-if="cl === 'fr'">
          Développement des algorithmes de navigation et d'évitement d'obstacles
          pour l'édition 2025 de la course de voitures miniatures
          <a
            href="https://ajuton-ens.github.io/CourseVoituresAutonomesSaclay/"
            target="_blank"
            rel="noopener"
            ><b>CoVAPSy</b></a
          >
          à l'aide de Webots et ROS2 Kilted.
        </p>
      </TimelineEntry>

      <TimelineEntry
        title="opensurgbot"
        :summary="
          cl === 'en'
            ? 'Open-source surgical robot platform.'
            : cl === 'fr'
            ? 'Robotique chirurgical open-source.'
            : ''
        "
        :date="cl === 'en' ? 'Apr - Aug 2025' : 'Avr - Août 2025'"
        link="https://lgabp1.github.io/opensurgbot/"
      >
        <p v-if="cl === 'en'">
          <b>opensurgbot</b> is an open-source surgical robot platform
          compatible with
          <a
            href="https://med-air.github.io/SurRoL/"
            target="_blank"
            rel="noopener"
            >SurRoL</a
          >
          simulation environment. It aims to provide a low-cost, modular, and
          accessible solution for research in surgical robotics. Basically, an
          accessible and affordable alternative to arms of the
          <a href="https://github.com/jhu-dvrk" target="_blank" rel="noopener"
            >dVRK</a
          >
          .
        </p>
        <p v-if="cl === 'fr'">
          <b>opensurgbot</b> est une plateforme de robot chirurgical open-source
          compatible avec le simulateur
          <a
            href="https://med-air.github.io/SurRoL/"
            target="_blank"
            rel="noopener"
            >SurRoL</a
          >
          . Il vise à fournir une solution à faible coût, modulaire et
          accessible pour la recherche en robotique chirurgicale. En somme,
          c'est une alternative accessible et abordable au matériel du
          <a href="https://github.com/jhu-dvrk" target="_blank" rel="noopener"
            >dVRK</a
          >
          .
        </p>
        <p v-if="cl === 'en'">
          I have developed the electronics, low-level STM32 software, Python
          middleware and overview GitHub pages.
        </p>
        <p v-if="cl === 'fr'">
          J'ai développé l'électronique, le logiciel STM32 bas niveau, le
          middleware Python et la page GitHub d'overview.
        </p>

        <img
          src="https://lgabp1.github.io/opensurgbot/assets/diagram_architecture.png"
          alt="opensurgbot architecture"
          style="
            max-width: 60%;
            margin-top: 1em;
            display: block;
            margin-left: auto;
            margin-right: auto;
          "
        />

        <video
          controls
          style="
            max-width: 60%;
            margin-top: 1em;
            display: block;
            margin-left: auto;
            margin-right: auto;
          "
        >
          <source
            src="https://lgabp1.github.io/opensurgbot/assets/osg.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </TimelineEntry>
      
      <TimelineEntry
        title="curses_tui_lib"
        :summary="
          cl === 'en'
            ? 'Library to create Terminal User Interface (TUI) applications'
            : cl === 'fr'
            ? 'Bibliothèque pour créer des applications Terminal User Interface (TUI)'
            : ''
        "
        :date="cl === 'en' ? 'Summer 2024' : cl === 'fr' ? 'Été 2024' : ''"
      >
        <p v-if="cl === 'en'">
          Created a library to create complex Terminal User Interface (TUI)
          applications and a configuration software based on it.
        </p>
        <p v-if="cl === 'fr'">
          Développement d'une bibliothèque pour créer des applications Terminal
          User Interface (TUI) complexes et d'un logiciel de configuration basé
          dessus.
        </p>

        <img
          src="https://raw.githubusercontent.com/lgabp1/lgabp1.github.io/refs/heads/master/public/preview_tui.png"
          alt="Preview TUI"
          style="
            max-width: 90%;
            margin-top: 1em;
            display: block;
            margin-left: auto;
            margin-right: auto;
          "
        />
      </TimelineEntry>

      <TimelineEntry
        title="IP Paris Racing Team"
        :summary="
          cl === 'en'
            ? 'Electronics team leader'
            : cl === 'fr'
            ? 'Chef de l\'équipe d\'électronique'
            : ''
        "
        :date="
          cl === 'en'
            ? 'Jun 2023 — Mar 2025'
            : cl === 'fr'
            ? 'Jun 2023 — Mar 2025'
            : ''
        "
        link="https://ipparisracingteam.binets.fr/#"
      >
        <p v-if="cl === 'en'">
          Developing on-board electronics and setting up the CAN bus going on
          the future car.
        </p>
        <p v-if="cl === 'fr'">
          Développement de l'électronique embarquée sur la voiture et mise en
          place de son bus CAN.
        </p>
      </TimelineEntry>

      <TimelineEntry
        :title="
          cl === 'en'
            ? 'F1Tenth race car with ROS'
            : cl === 'fr'
            ? 'Course de voiture F1Tenth avec ROS'
            : ''
        "
        :summary="
          cl === 'en'
            ? 'With ROS Noetic, SLAM and path planning'
            : cl === 'fr'
            ? 'Avec ROS Noetic, SLAM et planification de trajectoire'
            : ''
        "
        date="Nov 2023 - Fev 2024"
      >
        <p v-if="cl === 'en'">
          Developed algorithms for autonomous navigation of
          <a href="https://github.com/f1tenth" target="_blank" rel="noopener"
            >F1Tenth</a
          >
          miniature car using
          <a href="https://wiki.ros.org/noetic">ROS Noetic</a>
          .
        </p>
        <p v-if="cl === 'fr'">
          Développement d'algorithmes pour la navigation autonome d'une voiture
          miniature
          <a href="https://github.com/f1tenth" target="_blank" rel="noopener"
            >F1Tenth</a
          >
          pour
          <a href="https://wiki.ros.org/noetic">ROS Noetic</a>
          .
        </p>

        <p v-if="cl === 'en'">
          Using LiDAR data and odometry, various racing algorithms were
          developed in Gazebo simulation and later tested on the real car.
        </p>
        <p v-if="cl === 'fr'">
          En utilisant un LiDAR et de l'odométrie, plusieurs algorithmes de
          course ont été développés en simulation Gazebo puis testés sur la
          voiture réelle.
        </p>
        
        <p v-if="cl === 'en'">
          The final implementation follows checkpoints placed on a pre-computed map with SLAM for global planning and basic model predictive control (MPC) for local planning.
        </p>
        <p v-if="cl === 'fr'">
          L'implémentation finale suit des checkpoints placés une carte pré-calculée par SLAM pour sa planification globale, et un contrôle prédictif (MPC) pour la planification locale.
        </p>

        <video controls style="max-height: 20em; margin-top: 1em; display: block; margin-left: auto; margin-right: auto;">
          <source src="https://raw.githubusercontent.com/lgabp1/lgabp1.github.io/refs/heads/master/public/preview_race_ros.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>

        <div class="two-images" style="margin-top:1rem;">
          <img
            src="https://raw.githubusercontent.com/lgabp1/lgabp1.github.io/refs/heads/master/public/preview_race_ros_animated.gif"
            alt="Animated preview"
          />
          <img
            src="https://raw.githubusercontent.com/lgabp1/lgabp1.github.io/refs/heads/master/public/preview_race_ros_paths.png"
            alt="Considered paths preview"
          />
        </div>

      </TimelineEntry>

    </div>

<!--
  ___  _   _                                 _           _       
  / _ \| |_| |__   ___ _ __   _ __  _ __ ___ (_) ___  ___| |_ ___ 
| | | | __| '_ \ / _ \ '__| | '_ \| '__/ _ \| |/ _ \/ __| __/ __|
| |_| | |_| | | |  __/ |    | |_) | | | (_) | |  __/ (__| |_\__ \
  \___/ \__|_| |_|\___|_|    | .__/|_|  \___// |\___|\___|\__|___/
                            |_|           |__/                    
-->
    <h2 v-if="cl === 'en'">Other projects</h2>
    <h2 v-if="cl === 'fr'">Autre projets</h2>
    <div class="timeline">
      <TimelineEntry
        title="lgabp1.github.io"
        :summary="
          cl === 'en' ? 'This website !' : cl === 'fr' ? 'C\'est ce site !' : ''
        "
        :date="
          cl === 'en' ? '2025 - Present' : cl === 'fr' ? '2025 - Présent' : ''
        "
        link="https://github.com/lgabp1/lgabp1.github.io"
        link_is_github
      >
        <p v-if="cl === 'en'">
          This very website you are browsing right now! It is a personal
          portfolio site built with Vue.js and hosted on GitHub Pages. I am
          actively developing and enhancing it to showcase some of my projects.
        </p>
        <p v-if="cl === 'fr'">
          Le site web que vous consultez en ce moment ! C'est un portfolio
          personnel écrit avec Vue.js et hébergé sur GitHub Pages. Je le
          développe et l'améliore activement pour présenter certains de mes
          projets.
        </p>
      </TimelineEntry>

      <TimelineEntry
        title="LaTemplate"
        :summary="
          cl === 'en'
            ? 'My Typst templates for various documents!'
            : cl === 'fr'
            ? 'Mes modèles Typst pour différents documents !'
            : ''
        "
        date="Sep 2025"
        link="https://github.com/lgabp1/LaTemplate"
        link_is_github
      >
        <p v-if="cl === 'en'">Sample (report template):</p>
        <p v-if="cl === 'fr'">Exemple (modèle de rapport):</p>
        <img
          src="https://github.com/user-attachments/assets/c1806e64-29c7-467e-a484-656b56c0902e"
          alt="LaTemplate image preview"
          style="
            max-width: 60%;
            margin-top: 1em;
            display: block;
            margin-left: auto;
            margin-right: auto;
          "
        />
      </TimelineEntry>

      <TimelineEntry
        title="ZDT pythoncan driver / ZDT STM32 driver"
        :summary="
          cl === 'en'
            ? 'Drivers for the ZDT stepper motor controller'
            : cl === 'fr'
            ? 'Drivers pour le contrôleur de moteur à pas par ZDT'
            : ''
        "
        :date="cl === 'en' ? 'Summer 2025' : cl === 'fr' ? 'Été 2025' : ''"
        link="https://github.com/lgabp1/zdt_pythoncan_driver"
        link_is_github
      >
        <p>
          <span v-if="cl === 'en'">Driver to control </span>
          <span v-if="cl === 'fr'"
            >Driver pour les contrôleurs de moteur à pas par
          </span>
          <a href="https://blog.csdn.net/zhangdatou666"
            >ZDT (ZhangDaTou, 张大头)</a
          >
          <span v-if="cl === 'en'">
            stepper motor controllers through a CAN bus.</span
          >
          <span v-if="cl === 'fr'"> via un bus CAN.</span>
        </p>
        <p v-if="cl === 'en'">
          Compatible with STM32 microcontrollers and python.
        </p>
        <p v-if="cl === 'fr'">
          Compatible avec microcontrôleurs STM32 et python.
        </p>

        <br />
        <p v-if="cl === 'en'">Picture of the ZDT controller:</p>
        <p v-if="cl === 'fr'">Une photo du contrôleur ZDT :</p>
        <img
          src="https://raw.githubusercontent.com/lgabp1/lgabp1.github.io/refs/heads/master/public/zdt.png"
          alt="ZDT controller preview"
          style="
            max-width: 60%;
            margin-top: 1em;
            display: block;
            margin-left: auto;
            margin-right: auto;
          "
        />
      </TimelineEntry>

      <TimelineEntry
        title="pinas"
        :summary="
          cl === 'en'
            ? 'A Raspberry Pi home server and NAS'
            : cl === 'fr'
            ? 'Un serveur et NAS sous Raspberry Pi'
            : ''
        "
        :date="
          cl === 'en' ? '2025 - Present' : cl === 'fr' ? '2025 - Présent' : ''
        "
      >
        <p v-if="cl === 'en'">
          A home server running on a Raspberry Pi 4B+ running at home allowing
          me to learn how to handle Linux servers, NAS functionalities and
          self-hosted services.
        </p>
        <p v-if="cl === 'fr'">
          Un simple serveur sur un Raspberry Pi 4B+, me permettant d'apprendre à
          gérer des serveurs Linux, des NAS et créer des services auto-hébergés.
        </p>
      </TimelineEntry>

      <TimelineEntry
        title="Portal Turret"
        :summary="
          cl === 'en'
            ? 'Robot using ROS Noetic'
            : cl === 'fr'
            ? 'Robot sous ROS Noetic'
            : ''
        "
        date="Jan - Mar 2025"
      >
        <p v-if="cl === 'en'">
          A "turret" robot inspired by the Portal video game series, built using
          <a href="https://wiki.ros.org/noetic">ROS Noetic</a>
          on a TurtleBot3 Burger platform.
        </p>
        <p v-if="cl === 'fr'">
          Une "tourelle" inspirée des jeux vidéo Portal sous
          <a href="https://wiki.ros.org/noetic">ROS Noetic</a>
          avec une plateforme TurtleBot3 Burger.
        </p>
        <p v-if="cl === 'en'">
          It features a 2-DOF laser pointer controlled by servo motors via a
          STM32 microcontroller, and a camera with basic image processing.
        </p>
        <p v-if="cl === 'fr'">
          Elle est équipée d'un pointeur laser 2-DOF contrôlé par des
          servomoteurs via un microcontrôleur STM32, ainsi qu'une caméra avec un
          traitement d'image basique.
        </p>
        <p v-if="cl === 'en'">
          It also uses a full
          <a href="https://wiki.ros.org/move_base">move_base</a>
          navigation stack for autonomous navigation and obstacle avoidance.
        </p>
        <p v-if="cl === 'fr'">
          Elle embarque une stack complète
          <a href="https://wiki.ros.org/move_base">move_base</a>
          pour la navigation autonome et l'évitement d'obstacles.
        </p>
      </TimelineEntry>

      <TimelineEntry
        title="ASIC design"
        :summary="
          cl === 'en'
            ? 'Designing a simple ASIC using Cadence Virtuoso'
            : cl === 'fr'
            ? 'Conception d\'un ASIC simple avec Virtuoso de Cadence'
            : ''
        "
        date="Jan - Mar 2025"
      >
        <p v-if="cl === 'en'">
          Designing a simple ASIC using Cadence Virtuoso. Includes power
          regulators, an amplifier and voltage comparators.
        </p>
        <p v-if="cl === 'fr'">
          Conception d'un ASIC simple avec le logiciel Virtuoso. Comprend des
          régulateurs de puissance, un amplificateur et des comparateurs de
          tension.
        </p>

        <p v-if="cl === 'en'">Layout and diagram sample:</p>
        <p v-if="cl === 'fr'">Aperçu d'un layout et schéma:</p>

        <img
          src="https://raw.githubusercontent.com/lgabp1/lgabp1.github.io/refs/heads/master/public/preview_cadence.png"
          alt="Cadence"
          style="
            max-width: 60%;
            margin-top: 1em;
            display: block;
            margin-left: auto;
            margin-right: auto;
          "
        />
      </TimelineEntry>

      <TimelineEntry
        title="Stepmania Duel"
        :summary="
          cl === 'en'
            ? 'An IoT multiplayer dance game'
            : cl === 'fr'
            ? 'Un jeu multijoueur mêlant IoT et dance'
            : ''
        "
        date="Jan - Mar 2025"
      >
        <p v-if="cl === 'en'">
          An IoT multiplayer dance game inspired by Stepmania dance game. This
          project was done in pairs as part of an academic project.
        </p>
        <p v-if="cl === 'fr'">
          Un jeu multijoueur mêlant IoT et dance inspiré du jeu Stepmania. Ce
          projet a été réalisé en binôme dans le cadre d'un projet académique.
        </p>

        <p v-if="cl === 'en'">
          This project features custom-built wireless controllers using ESP32
          microcontrollers, and a central server managing game logic and player
          interactions. A pygame-based client was custom built to provide the
          game visuals and was designed under strict low-latency constraints yet
          ease of development.
        </p>
        <p v-if="cl === 'fr'">
          Ce projet comprend des manettes sans fil à base de microcontrôleurs
          ESP32, ainsi qu'un serveur central gérant la logique du jeu et les
          interactions des joueurs. Le client basé sur pygame a été développé
          pour l'affichage du jeu et a été conçu sous des contraintes de faible
          latence strictes tout en facilitant le développement.
        </p>

        <p v-if="cl === 'en'">
          Player 1 summons the arrows, in rythm with the music, and tries to
          outplay Player 2 who has to follow the same arrows on his own
          controller.
        </p>
        <p v-if="cl === 'fr'">
          Le Joueur 1 fait apparaître les flèches, en rythme avec la musique, et
          tente de vaincre le Joueur 2 devant suivre les mêmes flèches sur sa
          propre manette.
        </p>

        <img
          src="https://raw.githubusercontent.com/lgabp1/lgabp1.github.io/refs/heads/master/public/preview_duel.png"
          alt="Stepmania Duel"
          style="
            max-width: 60%;
            margin-top: 1em;
            display: block;
            margin-left: auto;
            margin-right: auto;
          "
        />

        <p v-if="cl === 'en'">
          This project ended with a proof-of-concept demo including basic
          features and very acceptable latency, but was not fully polished due
          to time constraints.
        </p>
        <p v-if="cl === 'fr'">
          Ce projet s'est conclu par une démo avec un jeu fonctionnel et une
          latence très acceptable, mais n'a pas été entièrement peaufiné en
          raison des contraintes de temps.
        </p>
      </TimelineEntry>

      <TimelineEntry
        :title="
          cl === 'en'
            ? 'Parallel processing using CUDA, OpenMP and MPI'
            : cl === 'fr'
            ? 'Calcul parallèle via CUDA, OpenMP et MPI'
            : ''
        "
        :summary="
          cl === 'en'
            ? 'Optimizing an image processing algorithm using several parallel computing paradigms'
            : cl === 'fr'
            ? 'Optimisation d\'un algorithme de traitement d\'image via différents paradigmes de calcul parallèle'
            : ''
        "
        date="Jan - Mar 2025"
      >
        <p v-if="cl === 'en'">
          As a group of 2, we optimized a toy image processing algorithm using
          several parallel computing paradigms: CUDA for GPU acceleration,
          OpenMP for multi-threading on CPU, and MPI for distributed computing
          across multiple nodes.
        </p>
        <p v-if="cl === 'fr'">
          En binôme, nous avons optimisé un algorithme de traitement d'image à
          titre d'exemple en utilisant plusieurs paradigmes de calcul parallèle
          : CUDA pour l'accélération GPU, OpenMP pour le multi-threading sur
          CPU, et MPI pour le calcul distribué sur plusieurs nœuds.
        </p>
      </TimelineEntry>

      <TimelineEntry
        :title="
          cl === 'en'
            ? 'NoC, MPSoC and IP design on FPGA'
            : cl === 'fr'
            ? 'Conception de NoC, MPSoC et IP sur FPGA'
            : ''
        "
        :summary="
          cl === 'en'
            ? 'Designs on Xilinx FPGAs using Xilinx Vivado.'
            : cl === 'fr'
            ? 'Conception pour FPGAs Xilinx avec Xilinx Vivado.'
            : ''
        "
        date="Sep - Dec 2024"
      >
        <p v-if="cl === 'en'">
          Using Xilinx Vivado, designs were created to implement Network-on-Chip
          (NoC) architectures, Multi-Processor System-on-Chip (MPSoC) designs,
          and custom IP hardware accelerators on Xilinx FPGAs.
        </p>
        <p v-if="cl === 'fr'">
          Avec Xilinx Vivado, nous avons implémenté des architectures de
          Network-on-Chip (NoC), des conceptions de Multi-Processor
          System-on-Chip (MPSoC), et des accélérateurs matériels IP
          personnalisés sur des FPGAs Xilinx.
        </p>

        <p v-if="cl === 'en'">
          Basic solutions were developed from the ground up for the IP and
          multiprocessing software running on the MPSoC.
        </p>
        <p v-if="cl === 'fr'">
          Des solutions basiques ont été développées de A à Z pour l'IP et le
          logiciel parallelisable s'exécutant sur le MPSoC.
        </p>
      </TimelineEntry>

      <TimelineEntry
        :title="
          cl === 'en'
            ? 'CNTFET experimental fabrication'
            : cl === 'fr'
            ? 'Fabrication expérimentale de CNTFETs'
            : ''
        "
        :summary="
          cl === 'en'
            ? 'Fabrication of Carbon Nanotube Field-Effect Transistors (CNTFETs)'
            : cl === 'fr'
            ? 'Fabrication expérimentale de transistors à nanotubes de carbone (CNTFETs)'
            : ''
        "
        date="Sep - Dec 2024"
      >
        <p v-if="cl === 'en'">
          Fabrication of Carbon Nanotube Field-Effect Transistors (CNTFETs) in a
          cleanroom environment as an academic project.
        </p>
        <p v-if="cl === 'fr'">
          Fabrication expérimentale de transistors à effet de champ à nanotubes
          de carbone (CNTFETs) en salle blanche dans le cadre d'un projet
          académique.
        </p>

        <img
          src="https://raw.githubusercontent.com/lgabp1/lgabp1.github.io/refs/heads/master/public/preview_CNTFET.png"
          alt="CNTFET principle"
          style="
            max-width: 60%;
            margin-top: 1em;
            display: block;
            margin-left: auto;
            margin-right: auto;
          "
        />
      </TimelineEntry>

      <TimelineEntry
        title="Robot Shooter"
        :summary="
          cl === 'en'
            ? 'Low-level robot design.'
            : cl === 'fr'
            ? 'Conception bas-niveau d\'un robot.'
            : ''
        "
        date="Jan - Mar 2024"
      >
        <p v-if="cl === 'en'">
          Design of a robot capable of pushing a ball into a goal via low-level
          control and programming.
        </p>
        <p v-if="cl === 'fr'">
          Conception d'un robot capable de pousser une balle dans un but via une
          programmation et conception bas-niveau.
        </p>

        <p v-if="cl === 'en'">
          Complete mechanical design, and basic electronics controlled by a
          raspberry pi 3B+ running C control softwares. Motor speed control was
          implemented from scratch. Basic image processing using OpenCV was also
          done for simple object detection.
        </p>
        <p v-if="cl === 'fr'">
          Conception mécanique complète, et électronique basique contrôlée par
          un raspberry pi 3B+ exécutant des logiciels de contrôle en C. Le
          contrôle des moteurs a été implémenté de A à Z. Un traitement d'image
          basique avec OpenCV a également été réalisé pour une détection
          d'objets simple.
        </p>

        <img
          src="https://raw.githubusercontent.com/lgabp1/lgabp1.github.io/refs/heads/master/public/preview_robotshooter.png"
          alt="Robot Shooter"
          style="
            max-width: 60%;
            margin-top: 1em;
            display: block;
            margin-left: auto;
            margin-right: auto;
          "
        />
      </TimelineEntry>

      <TimelineEntry
        title="Island"
        :summary="
          cl === 'en'
            ? 'Interactive 3D scene made in C++ and OpenGL'
            : cl === 'fr'
            ? 'Scène 3D intéractive réalisée en C++ et OpenGL'
            : ''
        "
        date="Sep - Nov 2023"
      >
        <p v-if="cl === 'en'">
          An interactive 3D scene of an island floating on the sea made in C++ and OpenGL, based on the 
          <a href="https://github.com/drohmer/cgp" target="_blank" rel="noopener"
            >cgp</a
          >
          library.
        </p>
        <p v-if="cl === 'fr'">
          Une scène 3D intéractive d'une île flottante sur l'océan réalisée en C++ et OpenGL, basée sur la bibliothèque
          <a href="https://github.com/drohmer/cgp" target="_blank" rel="noopener"
            >cgp</a
          >
          .
        </p>

        <p v-if="cl === 'en'">
          It features common features such as shadow mapping, moving water surface, dynamic skybox, camera controls and simple object interactions. 

          It also features several procedurally generated elements such as the island's terrain, wind turbines, underwater elements but also procedural house and bridge made with custom models created in Blender. 
        </p>
        <p v-if="cl === 'fr'">
          Elle comprend des fonctionnalités classiques telles que le shadow mapping, une surface d'eau animée, une skybox dynamique, des contrôles de caméra et de simples interactions avec les objets.

          Elle comprend également plusieurs éléments générés procéduralement comme la forme de l'île, les éoliennes, les éléments sous-marins mais aussi des maisons et un ponts procéduraux réalisés avec des modèles créés dans Blender.
        </p>

        <video controls style="max-width: 60%; margin-top: 1em; display: block; margin-left: auto; margin-right: auto;">
          <source src="https://raw.githubusercontent.com/lgabp1/lgabp1.github.io/refs/heads/master/public/preview_island.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        
      </TimelineEntry>

      <TimelineEntry
        title="More projects to be added here..."
        summary="This website is under continuous development, stay tuned!"
        date="Present"
      >
        <p>Hopefully some more projects will be added here soon...</p>
      </TimelineEntry>
    </div>
  </div>
</template>
