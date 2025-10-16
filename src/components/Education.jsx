import config from '../config.json';

export default function Education() {
  const edu = config.education;
  return (
    <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div>
        <strong>{edu.degree}</strong> <span>— {edu.school}</span>
      </div>
      <div className="text-gray-500">{edu.years}</div>
      <div className="mt-2">GPA: <span className="font-bold">{edu.gpa}</span></div>
      <div className="mt-2">
        <strong>Coursework:</strong>
        <ul className="list-disc ml-5">
          {edu.coursework.map((course, i) => <li key={i}>{course}</li>)}
        </ul>
      </div>
    </section>
  );
}