import { notFound } from "next/navigation";
import achievements from "@/data/achievements.json";
import Image from "next/image";
import Header from '@/components/Header/header'


export async function generateStaticParams() {
  return achievements.map((achieve) => ({
    id: achieve.id.toString(),
  }));
}

export default function AchievementDetail({ params }) {
  const achievement = achievements.find((achieve) => achieve.id.toString() === params.id);

  if (!achievement) {
    return notFound(); // Show 404 if achievement is not found
  }

  return (
    <div><Header/>
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-16">
      <div className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <Image src={achievement.image} alt={achievement.title} width={800} height={400} className="w-full h-64 object-cover rounded-lg" />
        <h1 className="text-4xl font-bold mt-4 text-yellow-400">{achievement.title}</h1>
        <p className="text-gray-300 mt-2">{achievement.description}</p>

        <h3 className="text-xl font-semibold mt-6 text-yellow-300">Requirements:</h3>
        <ul className="list-disc list-inside text-gray-300">
          {achievement.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-6 text-yellow-300">Steps:</h3>
        <ol className="list-decimal list-inside text-gray-300">
          {achievement.steps.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          ))}
        </ol>
      </div>
    </div>
    </div>
  );
}
