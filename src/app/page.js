import Experience from '@/components/Experience';
import NameCard from '@/components/NameCard';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
export default function Home() {
  return (
    <main className="content mt-16 text-sm sm:text-lg mb-16 m-auto font-sans max-w-[60rem] min-h-screen" >
      <NameCard/>
      <Technologies/>
      <Experience/>
      <Projects/>
    </main>
  );
}
