import GalaxyBackground from "@/components/GalaxyBackground";
import FloatingThemes from "@/components/FloatingThemes";
import { siInstagram } from "simple-icons/icons";

export default function Home() {
  return (
    <main className="relative h-screen bg-black overflow-hidden">

      <GalaxyBackground />

    <FloatingThemes />

    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 text-white text-base font-bold z-20 backdrop-blur-md bg-black/30 px-4 py-2 rounded-full">


  <a
  href="https://instagram.com/lavlewand"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:scale-110 transition"
>
  <svg
  viewBox="0 0 24 24"
  width="28"
  height="28"
  fill="white"
  className="hover:scale-110 transition"
>
    <path d="M7.75 2C4.126 2 2 4.126 2 7.75v8.5C2 19.874 4.126 22 7.75 22h8.5C19.874 22 22 19.874 22 16.25v-8.5C22 4.126 19.874 2 16.25 2h-8.5zm0 2h8.5C18.432 4 20 5.568 20 7.75v8.5c0 2.182-1.568 3.75-3.75 3.75h-8.5C5.568 20 4 18.432 4 16.25v-8.5C4 5.568 5.568 4 7.75 4zm8.75 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
  </svg>
</a>

</div>

    </main>
  );
}