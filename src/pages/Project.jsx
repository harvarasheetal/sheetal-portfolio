import React, { useState } from 'react';

import { 
  ExternalLink, 
  Code2, 
  Watch, 
  Image as ImageIcon, 
  Terminal, 
  Globe, 
  MessageSquare,
  Search,
  Filter,
  Sparkles
} from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'Smart-Watch',
    description: 'Interactive smart watch display. Click the smart-watch button or YouTube icon to view videos.',
    techStack: ['JavaScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://your-watch.netlify.app/',
    category: 'JavaScript',
    icon: Watch,
    color: 'from-blue-500 to-indigo-600',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  },
  {
    id: 2,
    title: 'Online Album Maker',
    description: 'Custom album creation application allowing users to combine photos, audio track, and text.',
    techStack: ['JavaScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://s-album-maker.netlify.app/',
    category: 'JavaScript',
    icon: ImageIcon,
    color: 'from-purple-500 to-pink-600',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
  },
  {
    id: 3,
    title: 'Online Code Editor',
    description: 'Browser-based code editor and compiler for executing HTML, CSS, and JavaScript in real-time.',
    techStack: ['JavaScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://onlinecomplier.netlify.app/',
    category: 'JavaScript',
    icon: Terminal,
    color: 'from-emerald-500 to-teal-600',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
  },
  {
    id: 4,
    title: 'ICE Website',
    description: 'Comprehensive static web page build featuring full page elements, services layout, and responsive design.',
    techStack: ['HTML', 'CSS'],
    liveUrl: 'https://iceclone.netlify.app/',
    category: 'HTML & CSS',
    icon: Globe,
    color: 'from-cyan-500 to-blue-600',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
  },
  {
    id: 5,
    title: 'Discord Website',
    description: 'An attractive UI clone of the Discord homepage built with Tailwind CSS.',
    techStack: ['HTML', 'Tailwind CSS'],
    liveUrl: 'https://sheetal-discord.netlify.app/',
    category: 'Tailwind CSS',
    icon: MessageSquare,
    color: 'from-indigo-500 to-purple-600',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
  }
];
 function Project() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'JavaScript', 'HTML & CSS', 'Tailwind CSS'];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg- text-slate-100 font-sans selection:bg-indigo selection:text-white">
      {/* Background Accent Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Featured Work</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            My Projects Portfolio
          </h1>
          <p className="text-slate-400 text-lg">
            A collection of web development projects showcasing responsive UI designs, interactive JavaScript applications, and clones.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            />
          </div>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="group relative bg-black  /60 rounded-2xl border border-slate-800/80 hover:border-slate-700 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Glow on Hover */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div>
                  {/* Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} text-white shadow-md`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${project.badgeColor}`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Live Link Button */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white font-medium text-sm transition-all duration-200 border border-slate-700/60 hover:border-indigo-500 group/btn"
                  >
                    <span>View Live Demo</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-900/30 rounded-2xl border border-slate-800">
            <Code2 className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-300 mb-1">No projects found</h3>
            <p className="text-slate-500 text-sm">Try adjusting your search query or filter criteria.</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Project;


























