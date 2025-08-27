import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  const enhancedWorkData = [
    {
      ...workData[0],
      detailedDescription:
        "A comprehensive AI chatbot platform that enables businesses to create, deploy, and manage intelligent conversational agents. Features include natural language processing, multi-channel deployment, and advanced analytics dashboard.",
      tools: [
        { name: "React.js", icon: "/react-icon.png" },
        { name: "Node.js", icon: "/nodejs-icon.png" },
        { name: "OpenAI", icon: "/openai-icon.png" },
        { name: "MongoDB", icon: "/mongodb-icon.png" },
        { name: "AWS", icon: "/aws-icon.png" },
      ],
    },
    {
      ...workData[1],
      detailedDescription:
        "An intelligent customer response system powered by AI agents that automatically handles customer inquiries, provides instant responses, and escalates complex issues to human agents when needed.",
      tools: [
        { name: "Next.js", icon: "/nextjs-icon.png" },
        { name: "Python", icon: "/python-icon.png" },
        { name: "FastAPI", icon: "/fastapi-icon.png" },
        { name: "PostgreSQL", icon: "/postgres-icon.png" },
        { name: "Docker", icon: "/docker-icon.png" },
      ],
    },
    {
      ...workData[2],
      detailedDescription:
        "A sophisticated document Q&A system that allows users to upload PDF documents and ask questions about their content. Uses advanced NLP and vector embeddings for accurate information retrieval.",
      tools: [
        { name: "React.js", icon: "/react-icon.png" },
        { name: "Python", icon: "/python-icon.png" },
        { name: "LangChain", icon: "/langchain-icon.png" },
        { name: "Pinecone", icon: "/pinecone-icon.png" },
        { name: "OpenAI", icon: "/openai-icon.png" },
      ],
    },
  ];

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
        className="text-center mb-3 text-lg font-Ovo text-gray-600 dark:text-gray-400 tracking-wide uppercase font-medium"
      >
        Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-4xl md:text-5xl lg:text-6xl font-Ovo font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
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
        {enhancedWorkData.map((project, index) => (
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
                      <span>LIVE</span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                    <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl">
                      <Image
                        src={assets.send_icon}
                        alt="View project"
                        className="w-6 h-6"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 font-Ovo">
                      {project.title}
                    </h3>

                    {/* Project Category */}
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3 uppercase tracking-wide">
                      {project.description}
                    </p>

                    {/* Detailed Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-Ovo">
                      {project.detailedDescription}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-auto">
                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex items-center justify-between mb-4">
                      {project.tools.map((tool, toolIndex) => (
                        <div
                          key={toolIndex}
                          className="group/tool relative"
                          title={tool.name}
                        >
                          <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center border border-gray-200 dark:border-gray-600 group-hover:border-blue-300 dark:group-hover:border-blue-500 transition-all duration-300 group-hover:scale-110">
                            <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-600 rounded-sm flex items-center justify-center text-white text-xs font-bold">
                              {tool.name.charAt(0)}
                            </div>
                          </div>

                          {/* Tooltip */}
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover/tool:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-20">
                            {tool.name}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* View Project Button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-medium">Production Ready</span>
                      </div>

                      <div className="opacity-60 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                        <div className="w-8 h-8 rounded-full border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center group-hover:border-blue-500 dark:group-hover:border-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-all duration-300">
                          <Image
                            src={
                              isDarkMode
                                ? assets.right_arrow_bold_dark
                                : assets.right_arrow_bold
                            }
                            alt="View project"
                            className="w-3 h-3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>{" "}
      {/* ✅ fixed closing tag */}
      {/* Call to Action */}
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
