import React from "react";
import { motion } from "framer-motion";
import { Mic, Calendar, MapPin, CheckCircle } from "lucide-react";
import { invitedTalks } from "../data/portfolioData";

export default function InvitedTalks() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Invited Talks & Lectures
          </h1>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Guest lectures, corporate training engagements, and keynote sessions delivered across engineering colleges and manufacturing companies.
          </p>
        </div>

        {/* Dynamic List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {invitedTalks.map((talk, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-850 shadow-md overflow-hidden flex flex-col hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {talk.image && (
                <div className="h-56 bg-slate-100 dark:bg-slate-850 overflow-hidden relative border-b border-slate-150/10">
                  <img
                    src={talk.image}
                    alt={talk.topic}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="p-1.5 bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 rounded-md shrink-0">
                      <Mic className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-bold text-slate-400 dark:text-slate-500">Invited Lecture</span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {talk.topic}
                  </h3>
                  <div className="space-y-1.5 text-xs md:text-sm text-slate-600 dark:text-slate-350">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 text-slate-400 shrink-0 mt-0.5" />
                      <span>{talk.venue}</span>
                    </div>
                    {talk.date && (
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-slate-400 shrink-0" />
                        <span>{talk.date}</span>
                      </div>
                    )}
                  </div>
                  {talk.details && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                      {talk.details}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
