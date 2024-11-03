import Image from 'next/image';
import Button from './Button';
import Marquee from './Marquee';

export default function HeroSection() {
  return (
    
    <section className="relative flex flex-col items-center md:items-start md:flex-row justify-center text-center md:text-left py-16 px-4 bg-bgLight min-h-screen overflow-hidden">
      <div className="z-10 max-w-lg md:mr-16">
        <h1 className="text-5xl font-bold leading-tight">
          HI, I&apos;M YASH.
          <br />
          I&apos;M A WEBSITE AND APPLICATION <span className="text-primary">DEVELOPER</span>
          <br />
          BASED IN WATERLOO.
        </h1>
        <p className="mt-4 text-lg">DESIGN <span className="text-primary"> ✴</span> DEVELOPMENT</p>
        <div className="z-30 flex space-x-4 mt-2 justify-center md:justify-start relative">
        <Button className="button2" text="Got a project?" primary />
      </div>
      </div>


      <div className="relative z-20 mt-8 md:mt-0 md:ml-12">
        <Image
          src="/images/P1.png"  
          alt="Profile Image"
          width={250}                 
          height={200}                
          className="rounded-full shadow-lg object-cover"
        />
      </div>
      
      <div className="absolute bottom-20 left-0 w-full transform -rotate-3 z-20">
        <Marquee />
      </div>
    </section>
  );
}
