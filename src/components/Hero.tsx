import React from 'react';
import { Github, Linkedin, MessageCircle, FileText } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 mb-20 pt-10">
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className="text-base sm:text-lg font-medium text-neutral-200 mb-6 leading-relaxed max-w-md">
                    Hi, I am <span className="text-white font-semibold">priyanshugupta</span> and I can build anything in JS, TS.
                </h1>

                <div className="flex items-center gap-5 mt-1">
                    <a href="https://github.com/priyanshuguptadev" className="text-neutral-500 hover:text-white transition-colors duration-300 transform hover:scale-105">
                        <Github strokeWidth={1.5} size={18} />
                    </a>
                    <a href="https://linkedin.com/in/priyanshuguptadev" className="text-neutral-500 hover:text-white transition-colors duration-300 transform hover:scale-105">
                        <Linkedin strokeWidth={1.5} size={18} />
                    </a>
                    <a href="whatsapp://send?phone=+919517431474" className="text-neutral-500 hover:text-white transition-colors duration-300 transform hover:scale-105">
                        <MessageCircle strokeWidth={1.5} size={18} />
                    </a>
                    <a href="#" className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors duration-300 group">
                        <FileText strokeWidth={1.5} size={18} className="transform group-hover:scale-105 transition-transform duration-300" />
                    </a>
                </div>
            </div>

            <div className="relative group shrink-0">
                <div className="w-28 h-28 bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <img src="/profile.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
