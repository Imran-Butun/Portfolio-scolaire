import React from 'react';
import { Download, ExternalLink, Award, Users, Video } from 'lucide-react';

const APropos: React.FC = () => {
  const skills = [
    { name: 'Montage vidéo (Premiere Pro)', level: 90 },
    { name: 'After Effects', level: 80 },
    { name: 'Blender 3D', level: 30 },
    { name: 'Photoshop / Illustrator', level: 50 }
  ];

  const experiences = [
    {
      title: "Stage - Chargé de communication - Agence Bimmo Diagnostic",
      period: "Février - Mars 2025",
      description: "Création d’une série de vidéos informatives pour les réseaux sociaux, visant à sensibiliser le public aux enjeux des diagnostics immobiliers."
    },
    {
      title: "Freelance - Monteur vidéo",
      period: "2021 - 2023",
      description: "Réalisation de montages vidéo pour divers YouTubeurs et streamers, adaptés à leurs univers et à leur audience."
    },

  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <img
            src="../image/Imranpose.JPG"
            alt="Profile"
            className="w-full h-full object-cover rounded-full shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">À propos de moi</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Créateur audiovisuel passionné, je développe mes compétences à travers des projets 
          concrets alliant montage vidéo, 3D et motion design.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {/* About Text */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Mon parcours</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Passionné par la création audiovisuelle depuis mon plus jeune âge, je me spécialise 
                dans trois domaines complémentaires qui forment l'essence de la production multimédia moderne : 
                le montage vidéo, la création 3D et le motion design.
              </p>
              <p>
                Mon approche se caractérise par une attention particulière à la narration visuelle, 
                une recherche constante d'innovation technique et une volonté de créer des expériences 
                audiovisuelles mémorables. Je crois en l'importance de maîtriser l'ensemble de la chaîne 
                de production, de l'écriture du script au rendu final.
              </p>
              <p>
                À travers mes projets, je développe une expertise transversale qui me permet 
                d'intervenir à tous les niveaux d'une production audiovisuelle : de la conceptualisation 
                créative à la réalisation technique, en passant par la post-production avancée.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Compétences techniques</h2>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Info */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-medium text-gray-700">Spécialisation :</span>
                <p className="text-gray-600">Création audiovisuelle</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Domaines :</span>
                <p className="text-gray-600">Montage, 3D, Motion Design</p>
              </div>
              <div>
                <span className="font-medium text-gray-700">Logiciels :</span>
                <p className="text-gray-600">Blender, After Effects, Premiere Pro</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Documents</h3>
            <div className="space-y-3">
              <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 p-3 rounded-lg flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Télécharger mon CV
              </button>
              <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 p-3 rounded-lg flex items-center justify-center">
                <ExternalLink className="w-4 h-4 mr-2" />
                Portfolio complet
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">En chiffres</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="bg-green-100 p-3 rounded-lg mb-2">
                  <Video className="w-6 h-6 text-green-600 mx-auto" />
                </div>
                <p className="text-2xl font-bold text-gray-900">15+</p>
                <p className="text-xs text-gray-600">Projets audiovisuels</p>
              </div>
              <div>
                <div className="bg-emerald-100 p-3 rounded-lg mb-2">
                  <Award className="w-6 h-6 text-emerald-600 mx-auto" />
                </div>
                <p className="text-2xl font-bold text-gray-900">3</p>
                <p className="text-xs text-gray-600">Domaines d'expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Expériences</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                <span className="text-sm text-green-600 font-medium">{exp.period}</span>
              </div>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default APropos;