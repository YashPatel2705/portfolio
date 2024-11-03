import Link from 'next/link';
import { EDUCATION_DATA } from '../utils/constants';

export default function EducationSection() {
  return (
    <section className="py-16 px-4 bg-bgLight">
      <h2 className="text-3xl font-bold text-center mb-6">Education</h2>
      <p className="text-center mb-12">Highlights of my academic background and achievements.</p>
      
      <div className="space-y-4 max-w-2xl mx-auto">
        {EDUCATION_DATA.map((edu) => (
          <Link href="/education" key={edu.id} className="block">
            <div className="flex items-center p-4 border-2 border-gray-300 hover:bg-black hover:text-white transition duration-300 cursor-pointer">
              <div className={`flex items-center justify-center w-12 h-12 font-bold text-lg ${edu.id === 2 ? 'bg-primary text-white' : 'bg-black text-white'} mr-4`}>
                {edu.id}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{edu.title}</h3>
                <p className="text-sm">{edu.institution}</p>
              </div>
              <span className="text-sm font-medium">{edu.year}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
