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
      className="w-full px-[12%] py-20 scroll-mt-20 bg-gradient-to-b from-transparent via-gray-50/30 to-white/50 dark:via-gray-900/20 dark:to-gray-900/30"
    >
      {/* Section Headers */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Featured Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-4xl mx-auto mt-6 mb-16 font-Ovo text-lg leading-relaxed text-gray-700 dark:text-gray-300"
      >
        Transforming innovative ideas into impactful digital solutions. Each
        project represents a unique challenge solved through cutting-edge
        technology, thoughtful architecture, and meticulous execution that
        delivers real-world value.
      </motion.p>

      {/* 3-Column Grid Layout */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-16 max-w-7xl mx-auto"
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ y: -12, scale: 1.02 }}
            className="group h-full"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                {/* Project Image */}
                <div
                  className="aspect-[16/10] bg-cover bg-center relative overflow-hidden"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Live Status Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-2 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      <span>{project.status}</span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                    <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                      <Image
                        src={assets.send_icon}
                        alt="send icon"
                        className="w-5"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 font-Ovo">
                      {project.title}
                    </h3>

                    <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3 uppercase tracking-wide">
                      {project.description}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-Ovo">
                      {project.detailedDescription}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  {project.technologies?.length > 0 && (
                    <div className="mt-auto">
                      <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex items-center flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-md text-gray-600 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="text-center mt-20"
      >
        <div className="inline-flex flex-col items-center gap-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-Ovo">
              Interested in My Work?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 font-Ovo max-w-md">
              Explore more projects and see how I can help bring your ideas to
              life
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/KarthikEdhala"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-white dark:text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
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

            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
            >
              <span>Let's Collaborate</span>
              <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-800 transition-colors duration-300">
                <Image
                  src={
                    isDarkMode
                      ? assets.right_arrow_bold_dark
                      : assets.right_arrow_bold
                  }
                  alt="Contact"
                  className="w-3 h-3"
                />
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Work;
