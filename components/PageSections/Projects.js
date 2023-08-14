import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProjectInfoDialog from "../ProjectInfoDialog";

const projectBoxStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid #ccc",
  borderRadius: "20px",
  overflow: "hidden",
  margin: "20px"
};

const imageWrapperStyles = {
  flex: 30,
};

const projectImageStyles = {
  maxWidth: "100%", // Set maximum width for responsive behavior
  borderRadius: "20px"
};

// Define a new class for responsive image container
const responsiveImageWrapper = {
  ...imageWrapperStyles,
  "@media (max-width: 768px)": {
    // Adjust the max-width as needed
    flex: 100, // Set the full width for smaller screens
  }
};

const projectContentStyles = {
  padding: "10px",
};

const projectTitleStyles = {
  fontSize: "150%",
  fontWeight: "bold",
  color: "#C0A35F",
  marginBottom: "3px",
};

const projectDescriptionStyles = {
  fontSize: "120%",
  color: "#777",
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
      <div style={{ maxWidth: "98%", margin: "0 auto" }} className="carousel-container">
        <Carousel
          selectedItem={carouselIndex}
          onChange={setCarouselIndex}
          showThumbs={true}
          showStatus={true}
          showArrows={true}
          infiniteLoop={true}
        >
          {projects.map((project, index) => (
            <div key={index} style={projectBoxStyles} className="carousel-item">
              <button
                onClick={() => setCurrentProject(project)}
                style={projectBoxStyles}
              >
                {/* Apply the responsive image wrapper style */}
                <div style={responsiveImageWrapper}>
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
