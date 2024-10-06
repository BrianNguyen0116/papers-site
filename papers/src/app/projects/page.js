"use client";

import Navbar from "@/components/navbar-branch";
import Fade from "@/components/delayed-fade";
import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import Link from "next/link";
import Carousel from "@/components/carousel";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="my-6 min-h-screen">
        <Fade
          delay={0}
          className="relative flex flex-col items-center justify-center z-10 mx-auto w-full max-w-xl p-4"
        >
          <h1 className="text-4xl font-bold">Quality and satisfaction.</h1>
        </Fade>

        <Fade
          delay={0.25}
          className="relative flex flex-col items-center justify-center z-10 mx-auto w-full max-w-x2 p-4"
        >
          <h1 className="text-xl">
            Delivering exceptional construction experiences through quality
            craftsmanship, unwavering integrity, and unparalleled customer
            service.
          </h1>
        </Fade>
        <Fade delay={0.5}>
          <Gallery />
        </Fade>
      </div>



      <Fade delay={0.75}>
        <Carousel />
      </Fade>
    </>
  );
}

const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const Gallery = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const filteredProjects = selectedTab === "All"
    ? PROJECTS
    : PROJECTS.filter((project) => project.type === selectedTab);

  const rows = chunkArray(filteredProjects, 3);

  return (
    <div className="mb-16">
      <div className="tabs flex justify-center mb-6">
        <Tab label="All" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Tab label="Residential" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Tab label="Commercial" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>

      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-2 my-2 divide-y md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          {row.map((project, index) => (
            <Card
              key={index}
              href={project.href}
              title={`${project.title} - ${project.location}`}
              src="https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const Tab = ({ label, selectedTab, setSelectedTab }) => {
  return (
    <button
      className={`px-4 py-2 text-lg font-bold ${selectedTab === label ? 'text-main' : 'text-gray-500'}`}
      onClick={() => setSelectedTab(label)}
    >
      {label}
    </button>
  );
};

const Card = ({ href, title, src }) => {
  return (
    <Link
      href={`/projects/${href}`}
      className="group relative flex h-56 flex-col justify-end overflow-hidden p-6 transition-colors bg-gradient-to-tr from-gray-400/25 to-gray-600/25 bg-opacity-10 hover:bg-main hover:bg-opacity-100 md:h-80 md:p-9"
    >
      <h2 className="relative z-10 text-3xl leading-tight transition-transform duration-500 group-hover:-translate-y-3 group-hover:text-white">
        {title}
      </h2>

      <FiEye className="absolute right-3 top-4 z-10 text-2xl text-neutral-400 transition-colors group-hover:text-neutral-50" />

      <div
        className="absolute bottom-0 left-0 right-0 top-0 opacity-0 blur-sm grayscale transition-all group-hover:opacity-10 group-active:scale-105 group-active:opacity-30 group-active:blur-0 group-active:grayscale-0"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Link>
  );
};

const PROJECTS = [
  {
    title: "Housing Project",
    type: "Residential",
    location: "Vaughan",
    href: "1",
  },
  {
    title: "Housing Project",
    type: "Residential",
    location: "Markham",
    href: "2",
  },
  {
    title: "Chicken N' Dough",
    type: "Commercial",
    location: "Mississauga",
    href: "3",
  },
  {
    title: "Housing Project",
    type: "Residential",
    location: "Stouffville",
    href: "4",
  },
  {
    title: "Chicken N' Dough",
    type: "Commercial",
    location: "Oshawa",
    href: "5",
  },
  {
    title: "Chicken N' Dough",
    type: "Commercial",
    location: "Toronto",
    href: "6",
  },
];
