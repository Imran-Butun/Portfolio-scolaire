import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Court-métrage documentaire - Nature urbaine",
    description: "Réalisation complète d'un documentaire de 8 minutes sur la biodiversité en ville, incluant écriture de script, tournage et montage.",
    image: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Montage vidéo",
    projectType: "scolaire",
    tags: ["Montage", "Écriture de script", "Cadrage", "Color grading"],
    date: "2024-01-15",
    skills: {
      creationNumerique: 4,
      strategieCommunication: 3,
      developpementWeb: 1
    },
    details: "Projet complet de réalisation audiovisuelle explorant les techniques de narration documentaire, du développement du concept à la post-production finale."
  },
  {
    id: 2,
    title: "Animation 3D - Environnement architectural",
    description: "Modélisation et animation d'un espace architectural moderne avec éclairage réaliste et rendu haute qualité sous Blender.",
    image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "3D Blender",
    projectType: "personnel",
    tags: ["Blender", "Modélisation 3D", "Éclairage", "Rendu"],
    date: "2024-02-20",
    skills: {
      creationNumerique: 4,
      strategieCommunication: 2,
      developpementWeb: 1
    },
    details: "Exploration approfondie des techniques de modélisation architecturale et d'éclairage réaliste pour créer des environnements immersifs."
  },
  {
    id: 3,
    title: "Motion design - Identité de marque",
    description: "Création d'animations graphiques pour l'identité visuelle d'une startup, incluant logo animé et éléments de communication.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Motion design",
    projectType: "professionnel",
    tags: ["After Effects", "Animation 2D", "Branding", "Typography"],
    date: "2024-03-10",
    skills: {
      creationNumerique: 4,
      strategieCommunication: 4,
      developpementWeb: 1
    },
    details: "Projet professionnel combinant créativité et stratégie de marque à travers des animations fluides et impactantes."
  },
  {
    id: 4,
    title: "Clip musical - Effets visuels",
    description: "Réalisation d'un clip musical avec intégration d'effets visuels, compositing et synchronisation audio-visuelle.",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Montage vidéo",
    projectType: "personnel",
    tags: ["Montage", "Effets visuels", "Compositing", "Synchronisation"],
    date: "2024-04-05",
    skills: {
      creationNumerique: 4,
      strategieCommunication: 2,
      developpementWeb: 1
    },
    details: "Exploration créative des techniques de post-production avancées pour créer une expérience audiovisuelle immersive."
  },
  {
    id: 5,
    title: "Animation de personnage 3D",
    description: "Création et animation d'un personnage 3D complet avec rigging, skinning et cycles d'animation sous Blender.",
    image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "3D Blender",
    projectType: "scolaire",
    tags: ["Blender", "Character design", "Rigging", "Animation"],
    date: "2024-05-12",
    skills: {
      creationNumerique: 4,
      strategieCommunication: 1,
      developpementWeb: 1
    },
    details: "Projet technique approfondi explorant toutes les étapes de création d'un personnage animé, de la conception à l'animation finale."
  },
  {
    id: 6,
    title: "Motion graphics - Présentation corporate",
    description: "Série d'animations graphiques pour une présentation d'entreprise, incluant infographies animées et transitions fluides.",
    image: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Motion design",
    projectType: "professionnel",
    tags: ["After Effects", "Infographie", "Animation", "Corporate"],
    date: "2024-06-18",
    skills: {
      creationNumerique: 3,
      strategieCommunication: 4,
      developpementWeb: 1
    },
    details: "Projet professionnel axé sur la communication d'entreprise à travers des animations claires et engageantes."
  }
];