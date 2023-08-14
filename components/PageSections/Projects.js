import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectInfoDialog from "../ProjectInfoDialog";

const projectBoxStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  border: "1px solid #ccc",
  borderRadius: "10px",
  overflow: "hidden",
  margin: "10px",
};

const imageWrapperStyles = {
  flex: 1,
};

const projectImageStyles = {
  width: "100%",
  height: "auto",
  objectFit: "cover",
};

const projectContentStyles = {
  padding: "10px",
};

const projectTitleStyles = {
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "5px",
};

const projectDescriptionStyles = {
  fontSize: "14px",
  color: "#666",
};

function Projects({ projects }) {
  const [currentProject, setCurrentProject] = useState();
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Automatically change carousel slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 8000); // Change slide every 8 seconds

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
      <div style={{ maxWidth: "100%", margin: "0 auto" }} className="carousel-container">
        <Carousel
          selectedItem={carouselIndex}
          onChange={setCarouselIndex}
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          infiniteLoop={true}
        >
          {projects.map((project, index) => (
            <div key={index} style={projectBoxStyles} className="carousel-item">
              <button
                onClick={() => setCurrentProject(project)}
                style={projectBoxStyles}
              >
                <div style={imageWrapperStyles}>
                  <img
                    style={projectImageStyles}
                    src={project.image_front}
                    alt=""
                  />
                </div>
                <div style={projectContentStyles}>
                  <h3 style={projectTitleStyles}>{project.title}</h3>
                  <p style={projectDescriptionStyles}>{project.description}</p>
                </div>
              </button>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Projects;
