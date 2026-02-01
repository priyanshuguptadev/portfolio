
import React from 'react';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import ProjectSection from '../components/ProjectSection';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <ProjectSection />
        </motion.div>
    );
};

export default Home;

