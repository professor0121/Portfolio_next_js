import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A sleek and modern portfolio website built with Next.js and Tailwind CSS.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?technology"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with secure authentication and payment gateway integration.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?business"
    },
    {
      title: "Blog CMS",
      description: "A custom-built content management system for blogging, featuring markdown support and SEO optimization.",
      link: "#",
      image: "https://source.unsplash.com/400x300/?writing"
    }
  ];

  return (
    <section id="projects" className="w-screen h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white flex flex-col items-center justify-center px-6">
      <motion.div
        className="max-w-6xl text-center p-10 rounded-2xl shadow-2xl border border-gray-700 backdrop-blur-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-extrabold mb-8 text-blue-400">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-400 hover:underline">View Project</a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
