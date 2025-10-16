import config from '../config.json';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {config.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow"
          >
            <h3 className="text-lg font-bold mb-1">{project.title}</h3>
            <div className="text-sm text-gray-500">{project.period}</div>
            <div className="text-sm text-gray-500">{project.supervisor && `Supervisor: ${project.supervisor}`}</div>
            <ul className="list-disc ml-5 mt-2">
              {project.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}