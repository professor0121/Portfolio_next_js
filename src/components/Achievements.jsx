import { motion } from "framer-motion";
import Link from "next/link";
import achievements from "@/data/achievements.json";

const Achievements = () => {
  return (
    <section id="achievements" className="w-screen min-h-screen bg-gradient-to-r from-gray-900 to-black text-white flex flex-col items-center justify-center px-6">
      <motion.div
        className="max-w-6xl text-center p-10 rounded-2xl shadow-2xl border border-gray-700 backdrop-blur-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-extrabold mb-8 text-yellow-400">My Achievements</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
            >
              <img src={achievement.image} alt={achievement.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-yellow-300">{achievement.title}</h3>
              <p className="text-gray-300 mb-2">{achievement.description}</p>
              <p className="text-gray-400 text-sm italic">{achievement.date}</p>
              <Link href={`/achievements/${achievement.id}`} className="text-yellow-400 hover:underline block mt-4">
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
