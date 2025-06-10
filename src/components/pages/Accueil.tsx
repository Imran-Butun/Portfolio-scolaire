import React from 'react';
import { ChevronRight, Award, Video, Palette } from 'lucide-react';
import Image from '../../Image/Imranpose.JPG';
interface AccueilProps {
  setActiveTab: (tab: 'accueil' | 'projets' | 'blog' | 'contact' | 'apropos') => void;
}

const Accueil: React.FC<AccueilProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-500 via-emerald-600 to-green-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Portfolio Imran Bütün
            {/* <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {' '}Audiovisuel
            </span> */}
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Créateur audiovisuel spécialisé en montage vidéo, 3D Blender et motion design
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setActiveTab('projets')}
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              Découvrir mes projets
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => setActiveTab('contact')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Me contacter
            </button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">À propos de moi</h2>
            <p className="text-lg text-gray-700 mb-6">
              Passionné par la création audiovisuelle, je développe mes compétences dans trois domaines 
              complémentaires qui forment l'essence de la production multimédia moderne.
            </p>
            <p className="text-gray-600 mb-8">
              Du montage vidéo traditionnel à la création 3D en passant par le motion design, 
              chaque projet est une opportunité d'explorer de nouvelles techniques créatives 
              et de repousser les limites de la narration visuelle.
            </p>
            <button 
              onClick={() => setActiveTab('apropos')}
              className="text-green-600 font-semibold hover:text-green-700 flex items-center"
            >
              En savoir plus sur mon parcours
              <ChevronRight className="ml-1 w-4 h-4" />
            </button>
          </div>
          <div className="relative">
            <img
              src={Image}
              alt="Workspace créatif audiovisuel"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Skills Cards */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Mes domaines d'expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Video className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Montage vidéo</h3>
              <p className="text-gray-600 mb-4">
                Réalisation audiovisuelle complète, de l'écriture de script au montage final, 
                en passant par le cadrage et la post-production.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Écriture de scripts et storyboards</li>
                <li>• Techniques de cadrage et composition</li>
                <li>• Montage et post-production avancée</li>
                <li>• Color grading et étalonnage</li>
                <li>• Synchronisation audio-visuelle</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-emerald-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3D avec Blender</h3>
              <p className="text-gray-600 mb-4">
                Création d'univers 3D complets, de la modélisation à l'animation, 
                avec maîtrise des techniques de rendu réaliste.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Modélisation 3D avancée</li>
                <li>• Texturing et matériaux</li>
                <li>• Éclairage et rendu réaliste</li>
                <li>• Animation de personnages et objets</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-lime-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Motion design</h3>
              <p className="text-gray-600 mb-4">
                Création d'animations graphiques sophistiquées et d'effets visuels 
                pour donner vie aux éléments graphiques.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Animation 2D et motion graphics</li>
                <li>• Effets visuels et compositing</li>
                <li>• Typographie animée</li>
                <li>• Infographies dynamiques</li>
                <li>• Intégration audio-visuelle</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à découvrir mes réalisations ?</h2>
          <p className="text-xl text-green-100 mb-8">
            Explorez mes projets et découvrez comment j'applique mes compétences audiovisuelles à des créations concrètes
          </p>
          <button 
            onClick={() => setActiveTab('projets')}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center mx-auto"
          >
            Voir tous mes projets
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Accueil;