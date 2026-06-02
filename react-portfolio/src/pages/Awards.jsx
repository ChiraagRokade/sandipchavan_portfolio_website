import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldAlert, FileText, CheckCircle } from "lucide-react";
import { awards, recognitions, patents } from "../data/portfolioData";

export default function Awards() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Awards, Recognitions & Patents
          </h1>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Honoring a career dedicated to technological innovation, teaching excellence, and leadership in academic councils.
          </p>
        </div>

        {/* Section 1: Awards */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center space-x-2">
            <Award className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
              Academic & Research Awards
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {awards.map((award, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-850 shadow-md overflow-hidden flex flex-col hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {award.image && (
                  <div className="h-56 bg-slate-100 dark:bg-slate-850 overflow-hidden relative border-b border-slate-150/10">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                    />
                    <div className="absolute top-4 right-4 bg-sky-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md">
                      {award.date}
                    </div>
                  </div>
                )}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {!award.image && (
                      <span className="inline-block bg-sky-50 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400 text-xs font-bold px-2.5 py-1 rounded-md mb-2">
                        {award.date}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {award.title}
                    </h3>
                    <p className="text-sm text-slate-650 dark:text-slate-305 leading-relaxed text-justify">
                      {award.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 2: Patents */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center space-x-2">
            <FileText className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
              Patents Filed
            </h2>
          </div>

          <div className="space-y-4">
            {patents.map((patent, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-850 shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover-lift"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-2.5">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200/20">
                      {patent.status}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                      Filed on {patent.date}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {patent.title}
                  </h3>
                  <p className="text-xs font-serif font-semibold text-sky-600 dark:text-sky-400">
                    {patent.number}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 3: Recognitions */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex items-center space-x-2">
            <ShieldAlert className="w-6 h-6 text-sky-600 dark:text-sky-400" />
            <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
              Professional Recognitions & Leadership
            </h2>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-850 shadow-md divide-y divide-slate-100 dark:divide-slate-850">
            {recognitions.map((recognition, idx) => (
              <motion.div
                key={idx}
                className="p-5 flex items-start space-x-4 hover:bg-slate-50/50 dark:hover:bg-slate-850/20 transition-all duration-300"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-755 dark:text-slate-300 leading-relaxed font-medium">
                  {recognition}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
