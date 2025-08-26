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
  const startX = clamp(Math.random() * w, 24, w - 24);
  const endX = clamp(Math.random() * w, 24, w - 24);
  const c1x = clamp(startX + (Math.random() * w) / 3 - w / 6, 16, w - 16);
  const c2x = clamp(endX + (Math.random() * w) / 3 - w / 6, 16, w - 16);
  const y0 = h + 40; // start below view
  const y1 = h * (0.7 + Math.random() * 0.1);
  const y2 = h * (0.3 + Math.random() * 0.1);
  const y3 = -40; // exit above view
  return `M ${startX} ${y0} C ${c1x} ${y1}, ${c2x} ${y2}, ${endX} ${y3}`;
}

/* ---------- animated layer ---------- */

function AnimatedHeaderIcons({ images, count = 4, zIndex = 0 }) {
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
    const duration = 7 + Math.random() * 5; // 7–12s
    const delay = Math.random() * 1.2; // stagger a bit
    const size = 28 + Math.floor(Math.random() * 12); // 28–39px
    // token forces a new key to restart the animation
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
            initial={{ offsetDistance: "0%", scale: 1.06, opacity: 0 }}
            animate={{ offsetDistance: "100%", scale: 1, opacity: 1 }}
            transition={{
              duration: it.duration,
              delay: it.delay,
              ease: "linear",
            }}
            // when one finishes, respawn it with new random config
            onAnimationComplete={() => recycle(i)}
          >
            <div className="pointer-events-auto rounded-xl border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/10 backdrop-blur-sm shadow-sm p-2">
              <Image
                src={it.src}
                alt="tool"
                width={it.size}
                height={it.size}
                className="object-contain"
                unoptimized
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ---------- header ---------- */

const Header = () => {
  return (
    <div className="relative w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 overflow-hidden">
      {/* Animated layer with 4 random tools, continuously respawning */}
      <AnimatedHeaderIcons images={toolsData} count={4} zIndex={0} />

      {/* Content */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative z-10"
      >
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
      >
        Hi! I'm Karthik Edhala{" "}
        <Image src={assets.hand_icon} alt="" className="w-10" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        full-stack software engineer.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 max-w-2xl mx-auto font-Ovo"
      >
        I am a software engineer with 3+ years of experience building scalable,
        high-performance applications that serve 100K+ users. Specialized in
        cloud-native architectures, intelligent automation, and enterprise-grade
        solutions.
      </motion.p>

      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Karthik_Software_Engineer.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
