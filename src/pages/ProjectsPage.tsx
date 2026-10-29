import React, { useState } from 'react';
import { PROJECTS, ProjectItem, COMPANY_INFO } from '../data/roofingData.ts';
import { WaveDivider } from '../components/common/WaveDivider.tsx';
import { MapPin, Calendar, Layers, Clock, ArrowRight, X, MessageSquare } from 'lucide-react';

interface ProjectsPageProps {
  onOpenEstimate: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onOpenEstimate }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'residential' | 'commercial' | 'repair' | 'waterproofing'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  const filterTabs = [
    { label: 'All Projects', value: 'all' },
    { label: 'Residential', value: 'residential' },
    { label: 'Commercial & Industrial', value: 'commercial' },
    { label: 'Waterproofing & Heatproofing', value: 'waterproofing' },
    { label: 'Leak Repair', value: 'repair' },
  ];

  return (
    <div className="w-full">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#681A16] via-[#8F211A] to-[#B52F24] text-white pt-16 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase font-extrabold tracking-widest text-red-200">
            Workmanship Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-['Plus_Jakarta_Sans'] tracking-tight mt-2 mb-4">
            Completed Roofing & Waterproofing Projects
          </h1>
          <p className="text-base sm:text-lg text-red-100/90 max-w-2xl mx-auto leading-relaxed">
            Explore our recent residential bungalows, industrial sheds, and commercial terraces completed across Karachi, Hyderabad, Sukkur, and Sindh.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-1">
          <WaveDivider color="#ffffff" position="bottom" height={40} />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value as any)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === tab.value
                    ? 'bg-[#B52F24] text-white shadow-md'
                    : 'bg-[#FAF7F5] text-neutral-700 hover:bg-[#E8E2DF] border border-[#E8E2DF]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E8E2DF] shadow-md hover:shadow-xl hover:border-[#B52F24]/30 transition-all duration-300 flex flex-col group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-60 overflow-hidden bg-neutral-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#202020]/80 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-md">
                    {project.service}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white text-xs bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-[#B52F24]" />
                    <span>{project.location}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#202020] font-['Plus_Jakarta_Sans'] group-hover:text-[#B52F24] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-[#E8E2DF] text-xs text-neutral-600">
                    <div className="flex items-center gap-2 text-[11px]">
                      <Layers className="w-3.5 h-3.5 text-[#B52F24] shrink-0" />
                      <span className="truncate">{project.materials}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] pt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#B52F24]" />
                        <span>Completed in {project.duration}</span>
                      </span>
                      <span className="font-bold text-[#B52F24] flex items-center gap-1 group-hover:gap-1.5 transition-all">
                        <span>View Project</span>
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-[#FAF7F5] rounded-3xl p-8 border border-[#E8E2DF]">
            <h3 className="text-2xl font-bold text-[#202020] font-['Plus_Jakarta_Sans'] mb-2">
              Have a Similar Roofing Challenge on Your Property?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-lg mx-auto mb-6">
              Our estimators will survey your roof terrace or commercial shed and provide an itemized quote in PKR with zero obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenEstimate}
                className="py-3.5 px-8 bg-[#B52F24] hover:bg-[#8F211A] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow transition-all cursor-pointer"
              >
                Request Free On-Site Inspection
              </button>
              <a
                href={COMPANY_INFO.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="relative bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="h-72 bg-neutral-900 relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg text-xs font-bold text-[#B52F24]">
                {selectedProject.service}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-[#202020] font-['Plus_Jakarta_Sans']">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#B52F24]" />
                  <span>{selectedProject.location}</span>
                  <span>·</span>
                  <span>Completed {selectedProject.year}</span>
                </div>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="p-4 bg-[#FAF7F5] rounded-xl border border-[#E8E2DF] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Materials Applied:</span>
                  <strong className="text-neutral-900">{selectedProject.materials}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Execution Timeline:</span>
                  <strong className="text-neutral-900">{selectedProject.duration}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Workmanship Protection:</span>
                  <strong className="text-emerald-700">Official Workmanship & Material Guarantee</strong>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenEstimate();
                  }}
                  className="w-full py-3 bg-[#B52F24] hover:bg-[#8F211A] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer text-center"
                >
                  Request Estimate for Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
