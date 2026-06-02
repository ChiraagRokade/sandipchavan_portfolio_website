import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, MapPin, ExternalLink } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Home() {
  return (
    <div className="banner-gradient min-h-screen pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Profile Photo */}
          <motion.div
            className="lg:col-span-4 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              {/* Decorative background glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-sky-600 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white dark:bg-slate-900 p-3 rounded-2xl shadow-xl">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full max-w-xs object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Intro / Personal Statement */}
          <motion.div
            className="lg:col-span-8 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 border border-sky-200/50 dark:border-sky-800/30">
                <GraduationCap className="w-3.5 h-3.5 mr-1" /> Academic Leadership
              </span>
              <h1 className="font-serif text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-lg md:text-xl font-medium text-sky-600 dark:text-sky-400">
                {personalInfo.title}
              </p>
              <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-slate-400" /> {personalInfo.institution}</span>
                <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1 text-slate-400" /> {personalInfo.experience} Experience</span>
              </div>
            </div>

            <div className="space-y-4 text-base text-slate-600 dark:text-slate-350 leading-relaxed text-justify">
              {personalInfo.bio.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Quick Profile Summary Badge Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              <div className="glassmorphism p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                <p className="text-2xl font-bold text-sky-600 dark:text-sky-400">31+</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Years of Teaching & Research</p>
              </div>
              <div className="glassmorphism p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                <p className="text-2xl font-bold text-sky-600 dark:text-sky-400">41</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Research Publications</p>
              </div>
              <div className="glassmorphism p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/50 col-span-2 md:col-span-1">
                <p className="text-2xl font-bold text-sky-600 dark:text-sky-400">GYTI</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">National Award Winner</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Core Institutional Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: School of Mechanical Engineering */}
          <motion.div
            className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden hover-lift border border-slate-200/60 dark:border-slate-850"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={personalInfo.mitWpuSec.image}
                alt="Mechanical Engineering"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
              <div className="absolute bottom-4 left-6">
                <p className="text-xs text-sky-400 font-bold uppercase tracking-wider">{personalInfo.mitWpuSec.subtitle}</p>
                <h3 className="text-lg font-serif font-bold text-white mt-1">{personalInfo.mitWpuSec.title}</h3>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-sm text-slate-650 dark:text-slate-300 leading-relaxed text-justify">
                {personalInfo.mitWpuSec.text}
              </p>
              <div>
                <a
                  href={personalInfo.mitWpuSec.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-colors duration-300"
                >
                  Visit School Website <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card 2: MIT World Peace University */}
          <motion.div
            className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden hover-lift border border-slate-200/60 dark:border-slate-850"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="h-48 overflow-hidden relative bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-4">
              <img
                src={personalInfo.universitySec.image}
                alt="MIT-WPU Logo"
                className="max-h-36 object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white">
                  {personalInfo.universitySec.title}
                </h3>
                <p className="text-sm text-slate-650 dark:text-slate-300 leading-relaxed text-justify">
                  {personalInfo.universitySec.text}
                </p>
              </div>
              <div>
                <a
                  href={personalInfo.universitySec.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold px-4 py-2 border border-slate-350 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-300"
                >
                  View Maharashtra Govt. Act PDF <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
