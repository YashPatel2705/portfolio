import { EDUCATION_DATA } from '../utils/constants';

export default function EducationPage() {
  return (
    <section className="py-16 px-4 bg-bgLight min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">My Educational Journey</h2>
      <p className="text-center mb-12">Detailed overview of my academic background and experiences.</p>
      
      <div className="space-y-4 max-w-3xl mx-auto">
        {EDUCATION_DATA.map((edu) => (
          <div key={edu.id} className="flex items-center p-6 border-2 border-gray-300 hover:bg-black hover:text-white transition duration-300">
            <div className={`flex items-center justify-center w-12 h-12 font-bold text-lg ${edu.id === 2 ? 'bg-primary text-white' : 'bg-black text-white'} mr-4`}>
              {edu.id}
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-semibold">{edu.title}</h3>
              <p className="text-sm mt-2">{edu.description}</p>
              <p className="text-sm">{edu.institution}</p>
              <p className="text-sm">GPA: {edu.gpa}</p>
            </div>
            <span className="text-sm font-medium">{edu.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
