import config from '../config.json';
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
      <div className="mb-2">
        <strong>Languages:</strong> {config.skills.languages.join(', ')}
      </div>
      <div className="mb-2">
        <strong>Core CS:</strong> {config.skills.core.join(', ')}
      </div>
      <div>
        <strong>Tools:</strong> {config.skills.tools.join(', ')}
      </div>
    </section>
  );
}