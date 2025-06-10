import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';
import { BlogPost } from '../../types';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (selectedPost) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => setSelectedPost(null)}
          className="flex items-center text-green-600 hover:text-green-700 mb-8 font-medium"
        >
          ← Retour au blog
        </button>
        
        <article>
          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            className="w-full h-64 object-cover rounded-xl mb-8"
          />
          
          <div className="flex items-center text-gray-500 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(selectedPost.date).toLocaleDateString('fr-FR')}
            <span className="mx-4">•</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
              {selectedPost.category}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{selectedPost.title}</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed">
              {selectedPost.content}
            </p>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Mes réflexions, découvertes et apprentissages dans les domaines du montage vidéo, 
          de la 3D Blender et du motion design.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Featured post */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-center text-gray-500 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(blogPosts[0].date).toLocaleDateString('fr-FR')}
                <span className="mx-4">•</span>
                <Clock className="w-4 h-4 mr-1" />
                5 min de lecture
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-700 mb-6">{blogPosts[0].excerpt}</p>
              <button
                onClick={() => setSelectedPost(blogPosts[0])}
                className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
              >
                Lire l'article
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Recent posts */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Articles récents</h3>
          {blogPosts.slice(1).map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="w-3 h-3 mr-1" />
                {new Date(post.date).toLocaleDateString('fr-FR')}
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 hover:text-green-600 transition-colors">
                {post.title}
              </h4>
              <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
              <span className="inline-block mt-3 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                {post.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Catégories</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {Array.from(new Set(blogPosts.map(post => post.category))).map((category) => (
            <span
              key={category}
              className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 font-medium hover:shadow-md hover:bg-green-50 transition-all cursor-pointer"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;