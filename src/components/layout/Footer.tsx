import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import resume from '../../assets/resume.pdf';

const Footer = () => {
    return (
        <footer className="bg-surface-1 border-t border-surface-2 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-btn-dark flex items-center justify-center text-surface-1 font-bold text-sm">H</div>
                            <span className="font-bold text-xl tracking-tight text-heading">Harsh.dev</span>
                        </div>
                        <p className="text-body text-sm leading-relaxed mb-6">
                            Building premium mobile experiences for users worldwide. Focused on quality, performance, and clean code.
                        </p>
                        <p className="text-body text-sm flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">location_on</span> Bengaluru, India
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-heading">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-body">
                            <li><a href="#about" className="hover:text-heading transition-colors">About</a></li>
                            <li><a href="#skills" className="hover:text-heading transition-colors">Skills</a></li>
                            <li><a href="#experience" className="hover:text-heading transition-colors">Experience</a></li>
                            <li><a href="#projects" className="hover:text-heading transition-colors">Projects</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-heading">Resources</h4>
                        <ul className="space-y-4 text-sm text-body">
                            <li><a href="#blog" className="hover:text-heading transition-colors">Tech Blog</a></li>
                            <li><a href="#projects" className="hover:text-heading transition-colors">Case Studies</a></li>
                            <li><a href={resume} download="Harsh_Jain_Resume.pdf" className="hover:text-heading transition-colors">CV Download</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-heading">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/harshjain-dev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center text-heading hover:bg-white hover:scale-110 hover:shadow-md transition-all duration-300">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/harsh-jain-032a2796/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center text-heading hover:bg-white hover:scale-110 hover:shadow-md transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://x.com/Chetan20Harsh" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-2 flex items-center justify-center text-heading hover:bg-white hover:scale-110 hover:shadow-md transition-all duration-300">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-surface-2 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-body">
                    <p>© 2024 Harsh Jain. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
