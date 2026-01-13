import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-1/80 backdrop-blur-md border-b border-surface-2">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-btn-dark flex items-center justify-center text-surface-1 font-bold">H</div>
                    <span className="font-bold text-lg tracking-tight text-heading">Harsh.dev</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <button onClick={() => scrollToSection('about')} className="text-heading hover:opacity-70 transition-colors">About</button>
                    <button onClick={() => scrollToSection('skills')} className="text-heading hover:opacity-70 transition-colors">Skills</button>
                    <button onClick={() => scrollToSection('experience')} className="text-heading hover:opacity-70 transition-colors">Experience</button>
                    <button onClick={() => scrollToSection('projects')} className="text-heading hover:opacity-70 transition-colors">Projects</button>
                    <button onClick={() => scrollToSection('blog')} className="text-heading hover:opacity-70 transition-colors">Tech Blog</button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="bg-btn-dark hover:bg-[#333333] text-surface-1 px-5 py-2 rounded-full transition-all shadow-lg"
                    >
                        Get in Touch
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-lg bg-surface-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="material-symbols-outlined text-heading">menu</span>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-surface-1 border-b border-surface-2 p-4 flex flex-col gap-4 shadow-xl">
                    <button onClick={() => scrollToSection('about')} className="text-heading font-medium p-2 hover:bg-surface-2 rounded-lg text-left">About</button>
                    <button onClick={() => scrollToSection('skills')} className="text-heading font-medium p-2 hover:bg-surface-2 rounded-lg text-left">Skills</button>
                    <button onClick={() => scrollToSection('experience')} className="text-heading font-medium p-2 hover:bg-surface-2 rounded-lg text-left">Experience</button>
                    <button onClick={() => scrollToSection('projects')} className="text-heading font-medium p-2 hover:bg-surface-2 rounded-lg text-left">Projects</button>
                    <button className="bg-btn-dark text-surface-1 px-5 py-3 rounded-xl transition-all font-bold mt-2">
                        Get in Touch
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
