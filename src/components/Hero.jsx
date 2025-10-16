import config from '../config.json';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col items-center py-12"
    >
      <img src="/avatar.png" alt="Bharath Kumar" className="rounded-full w-32 h-32 mb-4"/>
      <h1 className="text-4xl font-bold">{config.name}</h1>
      <p className="text-lg">{config.location}</p>
      <p className="mt-2 text-center">{config.summary}</p>
      <div className="flex gap-4 mt-4">
        <a href={`mailto:${config.email}`} className="hover:underline">📧 Email</a>
        <a href={config.linkedin} target="_blank" rel="noopener" className="hover:underline">🔗 LinkedIn</a>
        <a href={config.leetcode} target="_blank" rel="noopener" className="hover:underline">💻 LeetCode</a>
      </div>
      <p className="mt-2">📞 {config.phone}</p>
    </motion.section>
  );
}