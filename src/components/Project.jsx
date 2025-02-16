import { motion } from "framer-motion";
import Link from "next/link";
import projects from "@/data/projects.json";

const Projects = () => {
  return (
    <section id="projects" className="w-screen min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 text-white flex flex-col items-center justify-center px-6">
      <motion.div
        className="max-w-6xl text-center p-10 rounded-2xl shadow-2xl border border-gray-700 backdrop-blur-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-extrabold mb-8 text-blue-400">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <Link href={`/projects/${project.id}`}>
                <span className="text-blue-400 hover:underline cursor-pointer">View Project</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
