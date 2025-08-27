"use client";

import { assets, toolsData } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";

/* ---------- utilities ---------- */

function pickRandom(arr, n) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

function useSize(elRef) {
  const [size, setSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const cr = entry.contentRect;
      setSize({ w: cr.width, h: cr.height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [elRef]);
  return size;
}

function buildPath(w, h) {
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
  const startX = clamp(Math.random() * w, 32, w - 32);
  const endX = clamp(Math.random() * w, 32, w - 32);
  const c1x = clamp(startX + (Math.random() * w) / 3 - w / 6, 24, w - 24);
  const c2x = clamp(endX + (Math.random() * w) / 3 - w / 6, 24, w - 24);
  const y0 = h + 60; // start below view
  const y1 = h * (0.75 + Math.random() * 0.1);
  const y2 = h * (0.25 + Math.random() * 0.1);
  const y3 = -60; // exit above view
  return `M ${startX} ${y0} C ${c1x} ${y1}, ${c2x} ${y2}, ${endX} ${y3}`;
}

/* ---------- animated layer ---------- */

function AnimatedHeaderIcons({ images, count = 6, zIndex = 0 }) {
  const wrapRef = useRef(null);
  const { w, h } = useSize(wrapRef);
  const [items, setItems] = useState([]);

  const uniqueStart = useMemo(
    () => pickRandom(images ?? [], Math.min(count, images?.length ?? 0)),
    [images, count]
  );

  const makeConfig = (idx, srcOverride) => {
    const src =
      srcOverride ?? images[Math.floor(Math.random() * images.length)];
    const path = buildPath(w, h);
    const duration = 8 + Math.random() * 6; // 8–14s for smoother movement
    const delay = Math.random() * 2; // stagger more
    const size = 32 + Math.floor(Math.random() * 16); // 32–47px
    const token = `${idx}-${Math.random().toString(36).slice(2)}`;
    return { idx, src, path, duration, delay, size, token };
  };

  // initialize when we know the size
  useEffect(() => {
    if (!w || !h || !images?.length) return;
    setItems(uniqueStart.map((s, i) => makeConfig(i, s)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [w, h, images?.length]);

  const recycle = (i) => {
    setItems((prev) => {
      if (!w || !h || !images?.length) return prev;
      const next = [...prev];
      next[i] = makeConfig(i);
      return next;
    });
  };

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex }}
      aria-hidden="true"
    >
      {items.map((it, i) => {
        const style = {
          offsetPath: `path("${it.path}")`,
          WebkitOffsetPath: `path("${it.path}")`,
          offsetRotate: "0deg",
          WebkitOffsetRotate: "0deg",
          willChange: "offset-distance, transform",
        };
        return (
          <motion.div
            key={it.token}
            className="absolute"
            style={style}
            initial={{ offsetDistance: "0%", scale: 0.8, opacity: 0 }}
            animate={{ offsetDistance: "100%", scale: 1, opacity: 1 }}
            transition={{
              duration: it.duration,
              delay: it.delay,
              ease: "linear",
            }}
            onAnimationComplete={() => recycle(i)}
          >
            <motion.div 
              className="pointer-events-auto rounded-2xl border border-white/20 bg-white/80 dark:border-gray-700/50 dark:bg-gray-800/80 backdrop-blur-md shadow-xl p-3 hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.15, rotate: 5 }}
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.05)',
              }}
            >
              <Image
                src={it.src}
                alt="technology"
                width={it.size}
                height={it.size}
                className="object-contain filter drop-shadow-sm"
                unoptimized
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ---------- header ---------- */

const Header = () => {
  return (
    <div className="relative w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6 overflow-hidden">
      {/* Enhanced animated layer with 6 tools for richer visual */}
      <AnimatedHeaderIcons images={toolsData} count={6} zIndex={0} />

      {/* Content with enhanced styling */}
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120, damping: 10 }}
        className="relative z-10"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl scale-150"></div>
          <Image 
            src={assets.profile_img} 
            alt="Karthik Edhala" 
            className="relative rounded-full w-36 h-36 object-cover border-4 border-white/50 dark:border-gray-700/50 shadow-2xl" 
          />
        </div>
      </motion.div>

      <motion.h3
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 flex items-center justify-center gap-3 text-xl md:text-2xl lg:text-3xl mb-4 font-Ovo text-gray-700 dark:text-gray-300"
      >
        <span>Hi! I'm</span>
        <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Karthik Edhala
        </span>
        <motion.div
          animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
        >
          <Image src={assets.hand_icon} alt="wave" className="w-8 md:w-10" />
        </motion.div>
      </motion.h3>

      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-Ovo font-bold leading-tight"
      >
        full-stack software engineer.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto font-Ovo text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 px-4"
      >
        Crafting scalable, high-performance applications that serve{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">100K+ users</span>.
        Specialized in cloud-native architectures, intelligent automation, and enterprise-grade solutions
        that transform ideas into impactful digital experiences.
      </motion.p>

      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 mt-8">
        <motion.a
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center gap-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <span>Let's Connect</span>
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
            <Image src={assets.right_arrow_white} alt="" className="w-3 h-3" />
          </div>
        </motion.a>

        <motion.a
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          href="/Karthik_Software_Engineer.pdf"
          download
          className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm font-semibold hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
        >
          <span className="text-gray-700 dark:text-gray-300">Download Resume</span>
          <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
            <Image src={assets.download_icon} alt="" className="w-3 h-3" />
          </div>
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;