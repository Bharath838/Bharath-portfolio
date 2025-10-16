import config from '../config.json';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Experience</h2>
      {config.experience.map((exp, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h3 className="font-bold">{exp.role} — <span className="font-normal">{exp.company}</span></h3>
          <div className="text-sm text-gray-500">{exp.period}</div>
          <ul className="list-disc ml-5 mt-2">
            {exp.details.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </motion.div>
      ))}
    </section>
  );
}