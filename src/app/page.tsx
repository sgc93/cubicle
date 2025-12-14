import Header from "@/components/Header/Header";
import Scene from "@/components/Scene/Scene";
import SecondarySidebar from "@/components/SecondarySidebar/SecondarySidebar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <div className="flex-1 min-w-0 flex w-screen">
        <Scene />
        <SecondarySidebar />
      </div>
    </div>
  );
}
