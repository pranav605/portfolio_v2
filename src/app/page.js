import NameCard from '@/components/NameCard';
import Technologies from '@/components/Technologies';
export default function Home() {
  return (
    <main className="content mt-16 mb-16 m-auto font-sans max-w-[60rem] min-h-screen" >
      <NameCard/>
      <Technologies/>
    </main>
  );
}
