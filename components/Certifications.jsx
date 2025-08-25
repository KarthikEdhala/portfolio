"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { assets, certsData } from "@/assets/assets";

const Certifications = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="certifications"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Certifications & Profiles
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Proof of skills
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        From cloud certifications to consistent problem-solving practice, here
        are the credentials and profiles that back up my work.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-6"
      >
        {certsData.map((item, index) => (
          <motion.a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ x: 10 }}
            className="group"
          >
            <div className="flex items-center gap-6 p-6 rounded-xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer mb-3">
              <div className="flex-shrink-0">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-white shadow-sm border border-gray-100 dark:border-gray-700 p-2 flex items-center justify-center bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.bgImage})` }}
                ></div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm md:text-base">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                      <span>{item.date}</span>
                      {item.badge && (
                        <>
                          <span>•</span>
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              item.badge === "Active"
                                ? "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400"
                                : item.badge === "Certified"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-400"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-800/20 dark:text-gray-400"
                            }`}
                          >
                            {item.badge}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="ml-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 group-hover:border-blue-300 dark:group-hover:border-blue-600">
                      <Image
                        src={
                          isDarkMode
                            ? assets.right_arrow_bold_dark
                            : assets.right_arrow_bold
                        }
                        alt="View certificate"
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        className="text-center mt-12"
      >
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 hover:bg-lightHover hover:scale-105 duration-300 dark:text-white dark:border-white dark:hover:bg-darkHover transition-all"
        >
          View All Achievements
          <Image
            src={
              isDarkMode
                ? assets.right_arrow_bold_dark
                : assets.right_arrow_bold
            }
            alt="Right arrow"
            className="w-4"
          />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Certifications;
