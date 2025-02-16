import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import Image from "next/image";
import Header from '@/components/Header/header'

export async function generateStaticParams() {
  return projects.map((proj) => ({
    id: proj.id.toString(),
  }));
}

export default function ProjectDetail({ params }) {
  const project = projects.find((proj) => proj.id.toString() === params.id);

  if (!project) {
    return notFound(); // ✅ Show 404 if project not found
  }

  return (
    <div>
        <Header/>
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-16 ">
      <div className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <Image src={project.image} alt={project.title} width={800} height={400} className="w-full h-64 object-cover rounded-lg" />
        <h1 className="text-4xl font-bold mt-4 text-blue-400">{project.title}</h1>
        <p className="text-gray-300 mt-2">{project.description}</p>

        <h3 className="text-xl font-semibold mt-6 text-blue-300">Requirements:</h3>
        <ul className="list-disc list-inside text-gray-300">
          {project.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-6 text-blue-300">Steps:</h3>
        <ol className="list-decimal list-inside text-gray-300">
          {project.steps.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          ))}
        </ol>
      </div>
    </div>
    </div>
  );
}
