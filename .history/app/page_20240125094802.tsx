import Hacthon from "./components/Hacthon";
import Info from "./components/Info";




export default function Home() {
  return (
    <main className="flex flex-col bg-red-50 min-h-screen max-w-3xl mx-auto ">
      <Info/>
      <Hacthon/>

    </main>
    
  );
}
