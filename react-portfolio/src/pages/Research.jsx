import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpDown, Award, Users, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { publications, researchGuidance, participation } from "../data/portfolioData";

export default function Research() {
  const [activeTab, setActiveTab] = useState("publications"); // publications | guidance | participation
  
  // Publication states
  const [pubSearch, setPubSearch] = useState("");
  const [pubFilter, setPubFilter] = useState("all"); // all | journal | conference
  const [sortOrder, setSortOrder] = useState("default"); // default | title-asc | title-desc

  // Participation states
  const [partSearch, setPartSearch] = useState("");

  // Guidance states
  const [expandedAbstract, setExpandedAbstract] = useState({}); // { [index]: boolean }

  const toggleAbstract = (idx) => {
    setExpandedAbstract(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Combine publications for filtering
  const allPublicationsList = useMemo(() => {
    return [
      ...publications.journals.map(p => ({ ...p, category: "Journal" })),
      ...publications.conferences.map(p => ({ ...p, category: "Conference" }))
    ];
  }, []);

  // Filtered publications
  const filteredPublications = useMemo(() => {
    let result = [...allPublicationsList];

    // Filter by type
    if (pubFilter === "journal") {
      result = result.filter(p => p.category === "Journal");
    } else if (pubFilter === "conference") {
      result = result.filter(p => p.category === "Conference");
    }

    // Filter by search query
    if (pubSearch.trim()) {
      const q = pubSearch.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.authors.toLowerCase().includes(q) || 
        p.journal.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortOrder === "title-asc") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "title-desc") {
      result.sort((a, b) => b.title.localeCompare(a.title));
    }

    return result;
  }, [allPublicationsList, pubFilter, pubSearch, sortOrder]);

  // Filtered participation
  const filteredParticipation = useMemo(() => {
    if (!partSearch.trim()) return participation;
    const q = partSearch.toLowerCase();
    return participation.filter(item => item.toLowerCase().includes(q));
  }, [partSearch]);

  const mainTabs = [
    { id: "publications", label: "Publications", icon: BookOpen },
    { id: "guidance", label: "Research Guidance", icon: Users },
    { id: "participation", label: "Workshops & Seminars", icon: Award },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Research & Scholarly Activities
          </h1>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Explore Dr. Chavan's research footprint including publications, Ph.D. mentoring, and professional workshop contributions.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-slate-200/60 dark:bg-slate-900 rounded-xl border border-slate-350/20 dark:border-slate-800">
            {mainTabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-md"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Panel Contents */}
        <div className="mt-6">
          <AnimatePresence mode="wait">
            
            {/* 1. PUBLICATIONS TAB */}
            {activeTab === "publications" && (
              <motion.div
                key="publications-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Controls: Search, Type filter, Sort */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
                  
                  {/* Search input */}
                  <div className="relative md:col-span-6">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search publications by title, author, journal..."
                      value={pubSearch}
                      onChange={(e) => setPubSearch(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-lg focus:outline-none focus:border-sky-500 text-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Filter Select */}
                  <div className="md:col-span-3">
                    <select
                      value={pubFilter}
                      onChange={(e) => setPubFilter(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-lg focus:outline-none focus:border-sky-500 text-slate-700 dark:text-slate-350"
                    >
                      <option value="all">All Types</option>
                      <option value="journal">Journals</option>
                      <option value="conference">Conferences</option>
                    </select>
                  </div>

                  {/* Sort order select */}
                  <div className="md:col-span-3 flex items-center space-x-2">
                    <ArrowUpDown className="w-4 h-4 text-slate-400 shrink-0" />
                    <select
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-lg focus:outline-none focus:border-sky-500 text-slate-700 dark:text-slate-350"
                    >
                      <option value="default">Default Order</option>
                      <option value="title-asc">Title: A to Z</option>
                      <option value="title-desc">Title: Z to A</option>
                    </select>
                  </div>

                </div>

                {/* Info Text */}
                <div className="flex justify-between items-center px-1 text-sm text-slate-500">
                  <p>Showing {filteredPublications.length} of {allPublicationsList.length} publications</p>
                  {pubFilter !== "all" && <p className="capitalize">Filtered by {pubFilter}s</p>}
                </div>

                {/* Publications List */}
                <div className="space-y-4">
                  {filteredPublications.length > 0 ? (
                    filteredPublications.map((pub, idx) => (
                      <div
                        key={idx}
                        className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200/60 dark:border-slate-850 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-2">
                            <span
                              className={`inline-block px-2.5 py-0.5 rounded text-xs font-semibold ${
                                pub.category === "Journal"
                                  ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-450 border border-emerald-250/20"
                                  : "bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-250/20"
                              }`}
                            >
                              {pub.category}
                            </span>
                            <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                              {pub.title}
                            </h3>
                            <p className="text-sm text-slate-650 dark:text-slate-300 font-medium">
                              {pub.authors}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                              {pub.journal} — <span className="font-semibold">{pub.details}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                      <p className="text-slate-500">No publications found matching your search criteria.</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* 2. RESEARCH GUIDANCE TAB */}
            {activeTab === "guidance" && (
              <motion.div
                key="guidance-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-12"
              >
                {/* 2.1 PhD Completed */}
                <div className="space-y-6">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                    <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                      Candidates Completed Ph.D.
                    </h2>
                  </div>

                  <div className="space-y-8">
                    {researchGuidance.phdCompleted.map((candidate, idx) => (
                      <div
                        key={idx}
                        className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-850 shadow-md space-y-6"
                      >
                        <div className="flex flex-col lg:flex-row gap-6">
                          
                          {/* Image side */}
                          <div className="lg:w-1/3 flex flex-col space-y-3 shrink-0">
                            {candidate.images.map((img, iIdx) => (
                              <div key={iIdx} className="overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-850 max-h-56 flex items-center justify-center border border-slate-250/20">
                                <img
                                  src={img}
                                  alt={`${candidate.name} guidance pic`}
                                  className="w-full object-cover hover:scale-102 transition-transform duration-300"
                                />
                              </div>
                            ))}
                          </div>

                          {/* Data side */}
                          <div className="lg:w-2/3 space-y-4">
                            <div>
                              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                {candidate.name}
                              </h3>
                              <p className="text-sm font-semibold text-sky-650 dark:text-sky-400 mt-1">
                                {candidate.university}
                              </p>
                              <p className="text-xs text-slate-450 mt-0.5">
                                Viva Date: {candidate.vivaDate}
                              </p>
                            </div>

                            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/50 dark:border-slate-800/30">
                              <p className="text-sm font-bold text-slate-800 dark:text-white mb-1">
                                Dissertation Title:
                              </p>
                              <p className="text-sm text-slate-700 dark:text-slate-300 italic font-medium">
                                "{candidate.title}"
                              </p>
                            </div>

                            {/* Abstract Accordion */}
                            <div className="space-y-2">
                              <button
                                onClick={() => toggleAbstract(idx)}
                                className="flex items-center space-x-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:text-sky-500 transition-colors"
                              >
                                <span>{expandedAbstract[idx] ? "Hide Research Abstract" : "View Research Abstract"}</span>
                                {expandedAbstract[idx] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                              </button>

                              {expandedAbstract[idx] && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed text-justify mt-2"
                                >
                                  {candidate.abstract}
                                </motion.div>
                              )}
                            </div>

                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2.2 PhD Pursuing */}
                <div className="space-y-6">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                    <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                      Candidates Pursuing Ph.D.
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {researchGuidance.phdPursuing.map((candidate, idx) => (
                      <div
                        key={idx}
                        className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200/60 dark:border-slate-850 shadow-sm space-y-3"
                      >
                        <div>
                          <h3 className="text-base font-bold text-slate-900 dark:text-white">
                            {candidate.name}
                          </h3>
                          <p className="text-xs text-sky-600 dark:text-sky-400 font-medium">
                            {candidate.university}
                          </p>
                        </div>
                        <div className="text-sm text-slate-650 dark:text-slate-350 leading-snug">
                          <span className="font-bold text-xs text-slate-500 uppercase block mb-1">Proposed Title:</span>
                          "{candidate.title}"
                        </div>
                        <div className="text-xs text-slate-400 font-medium">
                          {candidate.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2.3 M.Tech Thesis Advising */}
                <div className="space-y-6">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                    <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                      M.Tech. Thesis Advising
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Completed Column */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm space-y-4">
                      <div className="flex items-center space-x-2.5 text-emerald-600 dark:text-emerald-400">
                        <span className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/30 rounded-md font-bold text-sm">
                          Completed: 19
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {researchGuidance.mtechThesis.completed.map((item, idx) => (
                          <li key={idx} className="text-sm text-slate-650 dark:text-slate-350 flex items-start">
                            <span className="text-emerald-500 mr-2.5 select-none">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ongoing Column */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm space-y-4">
                      <div className="flex items-center space-x-2.5 text-sky-600 dark:text-sky-400">
                        <span className="px-2.5 py-1 bg-sky-50 dark:bg-sky-950/40 border border-sky-200/30 rounded-md font-bold text-sm">
                          Ongoing: 03
                        </span>
                      </div>
                      <ul className="space-y-3">
                        {researchGuidance.mtechThesis.ongoing.map((item, idx) => (
                          <li key={idx} className="text-sm text-slate-650 dark:text-slate-350 flex items-start">
                            <span className="text-sky-500 mr-2.5 select-none">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}

            {/* 3. PARTICIPATION / WORKSHOPS TAB */}
            {activeTab === "participation" && (
              <motion.div
                key="participation-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Search Bar */}
                <div className="relative bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
                  <Search className="absolute left-7 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Filter workshops, conferences and seminars by keyword..."
                    value={partSearch}
                    onChange={(e) => setPartSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-850 rounded-lg focus:outline-none focus:border-sky-500 text-slate-900 dark:text-white"
                  />
                </div>

                <div className="text-sm text-slate-500 px-1">
                  Showing {filteredParticipation.length} participation records
                </div>

                {/* List Items */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-850 shadow-sm divide-y divide-slate-100 dark:divide-slate-850">
                  {filteredParticipation.length > 0 ? (
                    filteredParticipation.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 hover:bg-slate-50/50 dark:hover:bg-slate-850/30 transition-all duration-300"
                      >
                        <div className="flex items-start">
                          <span className="font-serif text-sm font-bold text-sky-650 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 p-2 rounded-lg mr-4 shrink-0 select-none">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
                            {item}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 text-slate-500">
                      No records match your search filter.
                    </div>
                  )}
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
