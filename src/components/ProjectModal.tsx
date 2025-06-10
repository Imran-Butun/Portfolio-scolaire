import React from 'react';
import { X, Calendar, Tag } from 'lucide-react';
import { Project } from '../types';
import StarRating from './StarRating';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'personnel': return 'bg-green-100 text-green-800';
      case 'scolaire': return 'bg-emerald-100 text-emerald-800';
      case 'professionnel': return 'bg-lime-100 text-lime-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'personnel': return 'Personnel';
      case 'scolaire': return 'Scolaire';
      case 'professionnel': return 'Professionnel';
      default: return type;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(project.projectType)}`}>
            {getTypeLabel(project.projectType)}
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {project.category}
            </span>
          </div>
          
          <div className="flex items-center text-gray-500 mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(project.date).toLocaleDateString('fr-FR')}
          </div>
          
          <p className="text-gray-700 text-lg mb-8">{project.description}</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Apprentissages critiques</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">Création numérique</span>
                    <StarRating rating={project.skills.creationNumerique} />
                  </div>
                  <p className="text-sm text-gray-600">Exprimer un message avec les médias numériques</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">Stratégie & UX Design</span>
                    <StarRating rating={project.skills.strategieCommunication} />
                  </div>
                  <p className="text-sm text-gray-600">Concevoir une réponse stratégique pertinente</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-700">Développement web</span>
                    <StarRating rating={project.skills.developpementWeb} />
                  </div>
                  <p className="text-sm text-gray-600">Développer pour le web et les médias numériques</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800"
                  >
                    <Tag className="w-4 h-4 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Détails du projet</h3>
              <p className="text-gray-700">{project.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;