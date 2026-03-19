import Link from "next/link";

const themes = [
  { title: "Architecture", href: "/architecture" },
  { title: "Art", href: "/art" },
  { title: "Nature", href: "/nature" },
  { title: "Vintage", href: "/vintage" },
];

export default function FloatingThemes() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">

      <div className="grid grid-cols-2 gap-16">

        {themes.map((theme) => (
          <Link key={theme.href} href={theme.href}>

            <div
              className="
              w-40 h-40
              rounded-full
              border border-white/40
              flex items-center justify-center
              text-white font-semibold text-lg
              backdrop-blur-md
              bg-white/5
              shadow-[0_0_25px_rgba(255,255,255,0.25)]
              hover:scale-110
              hover:bg-white/10
              transition
              cursor-pointer
              "
            >
              {theme.title}
            </div>

          </Link>
        ))}

      </div>

    </div>
  );
}