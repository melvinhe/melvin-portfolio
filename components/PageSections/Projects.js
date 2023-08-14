import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectInfoDialog from "../ProjectInfoDialog";

function Projects({ projects }) {
  const [currentProject, setCurrentProject] = useState();
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Automatically change carousel slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, [projects.length]);

  return (
    <>
      <ProjectInfoDialog
        isOpen={currentProject !== undefined}
        onClose={() => setCurrentProject(undefined)}
        project={currentProject}
      />
      <Carousel
        selectedItem={carouselIndex}
        onChange={setCarouselIndex}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        infiniteLoop={true}
        className="carousel-container"
      >
        {projects.map((project, index) => (
          <div key={index} className="carousel-item">
            <button
              onClick={() => setCurrentProject(project)}
              className="flex select-none text-left flex-col transform rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden hover:opacity-75 focus:ring-2 ring-blue-600 transition-opacity focus:outline-none focus:shadow-xl duration-200"
            >
              <div className="flex-shrink-0 w-full">
                <img
                  className="h-56 w-full object-cover pointer-events-none"
                  src={project.image_front}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-base leading-6 text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </div>
            </button>
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default Projects;
