import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { projects } from '../../data/projects';
import { Project } from '../../types';
import ProjectCard from '../ProjectCard';
import ProjectModal from '../ProjectModal';

const Projets: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))];
  const projectTypes = ['all', 'personnel', 'scolaire', 'professionnel'];

  const filteredProjects = projects.filter(p => {
    const categoryMatch = filterCategory === 'all' || p.category === filterCategory;
    const typeMatch = filterType === 'all' || p.projectType === filterType;
    return categoryMatch && typeMatch;
  });

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'personnel': return 'Projets personnels';
      case 'scolaire': return 'Projets scolaires';
      case 'professionnel': return 'Projets professionnels';
      default: return 'Tous les projets';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Mes Projets</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Découvrez mes réalisations dans les domaines du montage vidéo, de la 3D Blender 
          et du motion design After Effects. Chaque projet illustre mes apprentissages 
          critiques évalués sur 4 étoiles.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="w-5 h-5 text-gray-500" />
          <span className="text-gray-700 font-medium">Filtrer les projets :</span>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Par domaine :</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    filterCategory === category
                      ? 'bg-green-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'Tous les domaines' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Par type :</label>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    filterType === type
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {getTypeLabel(type)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      {/* Skills Legend */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Grille d'évaluation des apprentissages critiques
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-green-600 mb-3">Création numérique</h3>
            <p className="text-sm text-gray-600 mb-3">
              Exprimer un message avec les médias numériques pour informer et communiquer
            </p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Production d'écrits journalistiques</li>
              <li>• Définition d'iconographies</li>
              <li>• Création d'identités visuelles</li>
              <li>• Scénarisation multimédia</li>
              <li>• Réalisation plurimédia</li>
              <li>• Animations, design sonore, 3D</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-emerald-600 mb-3">Stratégie & UX Design</h3>
            <p className="text-sm text-gray-600 mb-3">
              Concevoir une réponse stratégique pertinente à une problématique complexe
            </p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Co-conception de produits/services</li>
              <li>• Recommandations ergonomiques</li>
              <li>• Recommandations stratégiques</li>
              <li>• Optimisation SEO</li>
              <li>• Présence réseaux sociaux</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lime-600 mb-3">Développement web</h3>
            <p className="text-sm text-gray-600 mb-3">
              Développer pour le web et les médias numériques
            </p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Applications web responsives</li>
              <li>• Développement back office</li>
              <li>• Interactions riches</li>
              <li>• Modélisation d'applications</li>
              <li>• Optimisation performances</li>
              <li>• Configuration hébergement</li>
            </ul>
          </div>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default Projets;