import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-screen h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-6">
      <motion.div
        className="max-w-4xl text-center bg-gray-900 p-10 rounded-2xl shadow-2xl border border-gray-700 backdrop-blur-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 text-blue-400">About Me</h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          I'm a passionate web developer with a deep interest in building beautiful and functional user experiences.
          With expertise in modern web technologies, I turn ideas into reality using clean and efficient code.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          I specialize in front-end development with React, Next.js, and Tailwind CSS. My goal is to create fast,
          responsive, and visually stunning web applications.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          When I'm not coding, I love exploring new technologies, contributing to open-source projects,
          and sharing knowledge with fellow developers.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          I have experience in backend technologies like Node.js, MongoDB, and Firebase, allowing me to build
          full-stack applications that are scalable and secure.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Apart from coding, I enjoy photography, gaming, and traveling. I find inspiration in nature and different cultures,
          which fuels my creativity and problem-solving skills.
        </p>
      </motion.div>
    </section>
  );
};

export default About;