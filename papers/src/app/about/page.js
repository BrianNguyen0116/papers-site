"use client"

import Navbar from "@/components/navbar-branch"
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Accordian from "@/components/accordian";

export default function Home() {
    return (
        <>            
            <Navbar />
            <Parallax>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
                <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
                    At Papers, we build more than just structures.
                </h2>
                <div className="col-span-1 md:col-span-8">
                <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                    We build relationships. Founded in 2020 our mission is to deliver exceptional construction experiences through 
                    quality craftsmanship, unwavering integrity, and unparalleled customer service.
                </p>
                </div>
            </div>

            <Accordian />

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 p-24 md:grid-cols-12">
                <div className="col-span-1 md:col-span-8">
                    <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                        With our experience in the construction industry, our leadership team has established a reputation for excellence. 
                        <br/> 
                        <br/>
                        From small renovations to large-scale developments, we've successfully completed numerous projects, earning the 
                        trust of businesses, homeowners and amazing tradesmans.
                    </p>
                </div>
                <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
                    You deserve the best and we have what it takes.
                </h2>
            </div>
            </Parallax>
        </>
    )
}

const Parallax = ({children}) => {
  return (
    <div className=" my-4">
      <ParallaxContent
        imgUrl="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Our Story"
        heading="Prioritizing your satisfaction."
      >
        {children}
      </ParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const ParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(90vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};
