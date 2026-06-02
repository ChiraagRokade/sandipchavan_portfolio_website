import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Scholar Profiles */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">
              Research & Academic Profiles
            </h3>
            <p className="text-sm text-slate-400">
              Access research publications, citations, indices, and collaborative networks via public profiles.
            </p>
            <div className="flex flex-col space-y-2">
              <a
                href={personalInfo.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-sky-400 hover:text-sky-300 transition-colors"
              >
                Google Scholar Profile <ExternalLink className="w-4 h-4 ml-1.5" />
              </a>
              {personalInfo.scopusLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-sky-400 hover:text-sky-300 transition-colors"
                >
                  {link.label} <ExternalLink className="w-4 h-4 ml-1.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/research" className="hover:text-white transition-colors">Research</Link>
              <Link to="/awards" className="hover:text-white transition-colors">Awards & Patents</Link>
              <Link to="/fdp-sttp" className="hover:text-white transition-colors">FDP / STTP</Link>
              <Link to="/invited-talks" className="hover:text-white transition-colors">Invited Talks</Link>
              <Link to="/gallery" className="hover:text-white transition-colors">Photo Gallery</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide">
              Contact Information
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  {personalInfo.department}<br />
                  {personalInfo.institution}<br />
                  {personalInfo.address}
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-sky-400 shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  {personalInfo.phones.map((phone, idx) => (
                    <div key={idx}>{phone}</div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-slate-800" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Prof. Dr. Sandip T. Chavan. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Original Design by{" "}
            <a
              href="https://linktr.ee/ChiraagRokade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Chiraag Rokade
            </a>{" "}
            | Ported to React & Tailwind v4
          </p>
        </div>
      </div>
    </footer>
  );
}
