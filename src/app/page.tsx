import Header from "@/components/Header/Header";
import Scene from "@/components/Scene/Scene";
import SecondarySidebar from "@/components/SecondarySidebar/SecondarySidebar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black overflow-hidden">
      <Header />
      <div className="flex-1 min-w-0 flex w-screen overflow-hidden scene-box">
        <Scene />
        <SecondarySidebar />
      </div>
    </div>
  );
}
