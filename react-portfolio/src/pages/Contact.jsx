import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Please enter your name.";
    if (!formData.email.trim()) return "Please enter your email.";
    
    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      return "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) return "Please enter a subject.";
    if (!formData.message.trim()) return "Please enter your message.";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      setStatus("error");
      return;
    }

    setErrorMessage("");
    setStatus("sending");

    // Simulate server submission (mocking the old mail.php)
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
            Contact Me
          </h1>
          <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Get in touch for academic collaborations, research discussions, industry consultancy, or student inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Contact Details Panel */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-850 shadow-md p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800">
                Department Address
              </h3>
              
              <ul className="space-y-5 text-sm md:text-base text-slate-600 dark:text-slate-350">
                <li className="flex items-start">
                  <MapPin className="w-6 h-6 mr-3 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>{personalInfo.department}</strong><br />
                    {personalInfo.institution}<br />
                    {personalInfo.address}
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-sky-600 dark:text-sky-400 shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors font-medium">
                    {personalInfo.email}
                  </a>
                </li>
                <li className="flex items-start">
                  <Phone className="w-6 h-6 mr-3 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    {personalInfo.phones.map((phone, idx) => (
                      <div key={idx} className="font-medium">{phone}</div>
                    ))}
                  </div>
                </li>
                <li className="flex items-start text-xs text-slate-450 dark:text-slate-450">
                  <Clock className="w-5 h-5 mr-3 text-slate-400 shrink-0 mt-0.5" />
                  <span>Mon to Fri: 9:00 AM – 6:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Simulated Google Map details card */}
            <div className="bg-sky-50/50 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/30 rounded-xl p-4 text-xs md:text-sm text-sky-800 dark:text-sky-300">
              <span className="font-bold block mb-1">Office Location</span>
              School of Mechanical Engineering, S.No.124, Paud Road, Kothrud, Pune. Located in the MIT-WPU Campus.
            </div>
          </div>

          {/* Interactive Form Panel */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-850 shadow-md p-8">
            <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800 mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-850 rounded-lg focus:outline-none focus:border-sky-500 text-slate-900 dark:text-white transition-all disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "sending"}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-850 rounded-lg focus:outline-none focus:border-sky-500 text-slate-900 dark:text-white transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-sm font-bold text-slate-700 dark:text-slate-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status === "sending"}
                  placeholder="Enter message subject"
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-850 rounded-lg focus:outline-none focus:border-sky-500 text-slate-900 dark:text-white transition-all disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "sending"}
                  placeholder="Type your message details here..."
                  className="w-full px-4 py-2.5 text-sm bg-slate-50 dark:bg-slate-950 border border-slate-250 dark:border-slate-850 rounded-lg focus:outline-none focus:border-sky-500 text-slate-900 dark:text-white transition-all disabled:opacity-50"
                ></textarea>
              </div>

              {/* Error Banner */}
              <AnimatePresence>
                {status === "error" && (
                  <motion.div
                    className="flex items-center space-x-2 p-3 bg-rose-50 dark:bg-rose-950/20 border border-rose-200/50 rounded-lg text-rose-600 dark:text-rose-455 text-xs font-bold"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Success Banner */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    className="flex items-center space-x-2 p-3 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-250/30 rounded-lg text-emerald-600 dark:text-emerald-400 text-xs font-bold"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>Message sent successfully! Thank you for contacting me.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center px-6 py-2.5 bg-sky-600 hover:bg-sky-500 disabled:bg-sky-550 text-white rounded-lg text-sm font-semibold transition-colors duration-300 disabled:opacity-50 select-none cursor-pointer"
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4.5 w-4.5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
