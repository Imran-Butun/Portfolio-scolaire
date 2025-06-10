import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { Project } from '../types';
import StarRating from './StarRating';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
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
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={() => onClick(project)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-700">
          {project.category}
        </div>
        <div className={`absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(project.projectType)}`}>
          {getTypeLabel(project.projectType)}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Calendar className="w-4 h-4 mr-1" />
          {new Date(project.date).toLocaleDateString('fr-FR')}
        </div>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Création numérique</span>
            <StarRating rating={project.skills.creationNumerique} size="sm" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Stratégie & UX</span>
            <StarRating rating={project.skills.strategieCommunication} size="sm" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Développement web</span>
            <StarRating rating={project.skills.developpementWeb} size="sm" />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;