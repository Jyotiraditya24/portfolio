import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const Resume = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Your Company",
      period: "2022 - Present",
      description: "Led development of scalable web applications using MERN stack. Implemented modern UI/UX designs and optimized performance."
    },
    // Add more experiences as needed
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      school: "Your University",
      period: "2019 - 2023",
      description: "Computer Science and Engineering"
    },
    // Add more education details as needed
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Resume</h2>
        <a
          href="/path-to-your-resume.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
        >
          <FiDownload />
          Download CV
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Experience</h3>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="border-l-2 border-primary pl-4 space-y-2"
            >
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">{exp.title}</h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Education</h3>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="border-l-2 border-primary pl-4 space-y-2"
            >
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white">{edu.degree}</h4>
                <span className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{edu.school}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Resume; 