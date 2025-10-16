import config from '../config.json';

export default function Achievements() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
      <ul className="list-disc ml-5">
        {config.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
      </ul>
      <h2 className="text-2xl font-semibold mb-4 mt-8">Certifications</h2>
      <ul className="list-disc ml-5">
        {config.certifications.map((cert, i) => <li key={i}>{cert}</li>)}
      </ul>
    </section>
  );
}