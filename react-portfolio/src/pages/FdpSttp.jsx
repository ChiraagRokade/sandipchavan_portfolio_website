import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Award, CheckSquare } from "lucide-react";
import { fdps } from "../data/portfolioData";

export default function FdpSttp() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Short Term Courses Organized & Attended
          </h1>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">
            Professional development activities, including AICTE-sponsored FDPs, workshops on outcome-based education, and industry tool training.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm text-center">
            <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Total Courses</p>
            <p className="text-3xl font-extrabold text-sky-600 dark:text-sky-400 mt-1">{fdps.total}</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm text-center">
            <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Organized</p>
            <p className="text-3xl font-extrabold text-sky-600 dark:text-sky-400 mt-1">{fdps.organized}</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm text-center">
            <p className="text-sm text-slate-400 font-semibold uppercase tracking-wider">Attended</p>
            <p className="text-3xl font-extrabold text-sky-600 dark:text-sky-400 mt-1">{fdps.attended}</p>
          </div>
        </div>

        {/* List */}
        <motion.div
          className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-850 shadow-md divide-y divide-slate-100 dark:divide-slate-850 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {fdps.list.map((fdp, idx) => (
            <div
              key={idx}
              className="p-5 flex items-start space-x-4 hover:bg-slate-50/50 dark:hover:bg-slate-850/20 transition-all duration-300"
            >
              <span className="p-2 bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 rounded-lg shrink-0 select-none">
                <CheckSquare className="w-5 h-5" />
              </span>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-0.5">
                {fdp}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
