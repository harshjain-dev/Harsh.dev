import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
            <div className="bg-btn-dark rounded-[3rem] p-12 text-center text-surface-1 relative overflow-hidden shadow-2xl">
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Let's Get in Touch</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-xl mx-auto">
                        Whether you have a project in mind or just want to chat about Android development, my inbox is always open.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="mailto:hello@harsh.dev" className="bg-surface-1 text-btn-dark px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-all">
                            <span className="material-symbols-outlined">send</span> Send an Email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
