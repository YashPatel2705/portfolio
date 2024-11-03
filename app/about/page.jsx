import { TECHNOLOGIES } from '../utils/constants';
import Image from 'next/image';
export default function AboutPage() {
  return (
    <section className="py-16 px-8 bg-bgLight min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold">About Me</h1>
        <p className="mt-4 text-lg">
          Hi, I&apos;m Yash, a website and application developer based in Waterloo, Canada. I specialize in design, development, and creating impactful digital experiences.
        </p>
      </div>

      <div className="mt-12 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">Technologies I&apos;ve Worked On</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {TECHNOLOGIES.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center">
              <div className="w-20 h-20 mb-3 overflow-hidden rounded-full bg-white shadow-lg transition-transform transform hover:scale-110">
                <Image
                  src={tech.image}
                  alt={tech.name}
                  width={80} 
                  height={80}
                  className="object-cover"
                />
              </div>
              <span className="text-center text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
