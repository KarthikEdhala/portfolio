import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-transparent to-gray-50/50 dark:to-gray-900/30"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-3 text-lg font-Ovo text-gray-600 dark:text-gray-400 tracking-wide uppercase"
      >
        Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-4xl md:text-5xl lg:text-6xl font-Ovo font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mt-6 mb-16 font-Ovo text-lg leading-relaxed text-gray-700 dark:text-gray-300"
      >
        Transforming ideas into impactful digital solutions. Each project represents a unique challenge solved through innovative technology, thoughtful design, and meticulous execution.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 my-16"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700">
                {/* Project Image */}
                <div 
                  className="aspect-[4/3] bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Image
                        src={assets.send_icon}
                        alt="View project"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-4">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack Indicator */}
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                          Live Project
                        </span>
                      </div>
                    </div>

                    {/* Arrow Icon */}
                    <div className="ml-4 opacity-60 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                      <div className="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center group-hover:border-blue-500 dark:group-hover:border-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20">
                        <Image
                          src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
                          alt="View project"
                          className="w-4 h-4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="text-center mt-16"
      >
        <div className="inline-flex flex-col items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 font-Ovo">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/KarthikEdhala"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span>View All Projects</span>
            <div className="w-5 h-5 rounded-full bg-white/20 dark:bg-gray-900/20 flex items-center justify-center group-hover:bg-white/30 dark:group-hover:bg-gray-900/30 transition-colors duration-300">
              <Image
                src={assets.right_arrow_white}
                alt="View all"
                className="w-3 h-3"
              />
            </div>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Work;