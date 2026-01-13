import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-btn-dark/5 text-heading mb-6">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-btn-dark opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-btn-dark"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider">Available for new opportunities</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-heading">
                Harsh Jain
            </h1>

            <p className="text-2xl md:text-3xl font-medium text-body mb-8 max-w-3xl mx-auto">
                Senior Android Developer <span className="text-heading">&</span> Mobile Architect
            </p>

            <p className="text-lg text-body mb-10 max-w-2xl mx-auto leading-relaxed">
                Passionate Android developer with 7+ years of experience building scalable mobile applications. Specialized in Kotlin, Jetpack Compose, and performance optimization.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                <button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-btn-dark hover:opacity-90 active:scale-95 text-surface-1 px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 shadow-xl"
                >
                    <span className="material-symbols-outlined">description</span> View My Work
                </button>
                <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-transparent border-2 border-btn-dark text-heading hover:bg-btn-dark/5 px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2"
                >
                    <span className="material-symbols-outlined">mail</span> Get in Touch
                </button>
            </div>

            <div className="mt-16 flex justify-center gap-8">
                <a href="https://github.com/harshjain-dev" target="_blank" rel="noopener noreferrer" className="text-body hover:text-heading transition-colors items-center justify-center flex">
                    <Github className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com/in/harsh-jain-032a2796/" target="_blank" rel="noopener noreferrer" className="text-body hover:text-heading transition-colors items-center justify-center flex">
                    <Linkedin className="w-8 h-8" />
                </a>
                <a href="mailto:hello@harsh.dev" className="text-body hover:text-heading transition-colors items-center justify-center flex">
                    <Mail className="w-8 h-8" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
