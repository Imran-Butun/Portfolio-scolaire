import React, { useState } from 'react';
import { Tab } from './types';
import Header from './components/Header';
import Accueil from './components/pages/Accueil';
import Projets from './components/pages/Projets';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import APropos from './components/pages/APropos';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('accueil');

  const renderContent = () => {
    switch (activeTab) {
      case 'accueil':
        return <Accueil setActiveTab={setActiveTab} />;
      case 'projets':
        return <Projets />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      case 'apropos':
        return <APropos />;
      default:
        return <Accueil setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderContent()}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
                  <span className="text-white font-bold text-xl"></span>
                </div>
                <h3 className="ml-3 text-xl font-bold">Portfolio Audiovisuel</h3>
              </div>
              <p className="text-gray-400">
                Créateur audiovisuel spécialisé en montage vidéo, 3D Blender 
                et motion design.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="space-y-2 text-gray-400">
                <button
                  onClick={() => setActiveTab('accueil')}
                  className="block hover:text-white transition-colors"
                >
                  Accueil
                </button>
                <button
                  onClick={() => setActiveTab('projets')}
                  className="block hover:text-white transition-colors"
                >
                  Projets
                </button>
                <button
                  onClick={() => setActiveTab('blog')}
                  className="block hover:text-white transition-colors"
                >
                  Blog
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="block hover:text-white transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>imranbayrampro@gmail.com</p>
                <p>07 68 99 07 55</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-white transition-colors">Instagram</a>
                  <a href="#" className="hover:text-white transition-colors">GitHub</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 Portfolio Imran Bütün. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;