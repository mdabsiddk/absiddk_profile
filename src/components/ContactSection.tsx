"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Instagram, Send, Linkedin } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      title: "ইমেইল",
      value: "mdabsiddk2331@gmail.com",
      link: "mailto:mdabsiddk2331@gmail.com"
    },
    {
      icon: <Phone className="text-emerald-400" size={24} />,
      title: "ফোন নম্বর",
      value: "+8801519005033",
      link: "tel:+8801519005033"
    },
    {
      icon: <MapPin className="text-red-400" size={24} />,
      title: "বর্তমান অবস্থান",
      value: "ঢাকা, বাংলাদেশ",
      link: "https://maps.google.com/?q=Dhaka,Bangladesh"
    }
  ];

  const socialLinks = [
    { icon: <Linkedin size={24} />, name: "LinkedIn", href: "https://www.linkedin.com/in/absiddk", color: "bg-blue-700 hover:bg-blue-600" },
    { icon: <Facebook size={24} />, name: "Facebook", href: "https://www.facebook.com/mdabubakarpage/", color: "bg-blue-600 hover:bg-blue-500" },
    { icon: <Instagram size={24} />, name: "Instagram", href: "https://www.instagram.com/a.siddk", color: "bg-pink-600 hover:bg-pink-500" },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-900/80">
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Send className="text-blue-400" size={40} />
            <span className="text-gradient">যোগাযোগ করুন</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-slate-200">আমার সাথে কথা বলুন</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              সফটওয়্যার রিকয়ারমেন্টস অ্যানালিসিস, কনটেন্ট ক্রিয়েশন বা যে কোনো দরকারে আমার সাথে যোগাযোগ করতে পারেন। 
              নিচের মাধ্যমগুলোতে আমি সবসময় সচল থাকি।
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-4 rounded-2xl glass hover:bg-slate-800/80 transition-colors group cursor-pointer"
                >
                  <div className="p-4 bg-slate-800/80 rounded-full group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-400 mb-1">{info.title}</h4>
                    <p className="text-lg font-medium text-slate-100 group-hover:text-blue-400 transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-medium text-slate-300 mb-4">সামাজিক যোগাযোগ মাধ্যম</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full text-white transition-all transform hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card p-8 md:p-10 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-bl-full rounded-tr-2xl -z-10 blur-2xl" />
              
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-slate-200">
                <span className="text-gradient">বার্তা পাঠান</span>
              </h3>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">আপনার নাম</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-slate-200 transition-all placeholder-slate-600"
                    placeholder="আপনার নাম লিখুন"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">ইমেইল ঠিকানা</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-slate-200 transition-all placeholder-slate-600"
                    placeholder="আপনার ইমেইল লিখুন"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">আপনার বার্তা</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-slate-200 transition-all resize-none placeholder-slate-600"
                    placeholder="কী বলতে চান তা লিখুন..."
                  ></textarea>
                </div>
                
                <button 
                  type="button" 
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-lg transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] flex items-center justify-center gap-2 group"
                >
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  বার্তা পাঠান
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
