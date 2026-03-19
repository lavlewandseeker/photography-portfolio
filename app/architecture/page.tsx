"use client";

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

const photos = [
  "/architecture/arch1.png",
  "/architecture/arch2.png",
  "/architecture/arch3.png",
  "/architecture/arch4.png",
  "/architecture/arch5.png",
  "/architecture/arch6.png",
  "/architecture/arch7.png",
  "/architecture/arch8.png",
  "/architecture/arch9.png",
  "/architecture/arch10.png",
  "/architecture/arch11.png",
  "/architecture/arch12.png",
  "/architecture/arch13.png",
  "/architecture/arch16.png",
  "/architecture/arch17.png",
  "/architecture/arch18.png",
  "/architecture/arch19.png",
  "/architecture/arch20.png",
  "/architecture/arch21.png",
  "/architecture/arch22.png",
  "/architecture/arch23.png",
  "/architecture/arch24.png",
  "/architecture/arch25.png",
  "/architecture/arch26.png",
  "/architecture/arch27.png",
]

export default function ArchitecturePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <Link href="/" className="text-white/70 hover:text-white">
        ← Back
      </Link>

      <h1 className="text-4xl font-bold mb-10 mt-4">
        Architecture
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {photos.map((src, i) => (
          <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden" onClick={() => setSelectedImage(src)}>
            <Image
              src={src}
              alt="Architecture photo"
              fill
              className="object-cover hover:scale-110 transition duration-700"
            />
          </div>
        ))}

      </div>

         {selectedImage && (
                <div
                  className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                  onClick={() => setSelectedImage(null)}
                >
        
                  <div className="relative w-[90vw] h-[90vh]">
        
                    <Image
                      src={selectedImage}
                      alt="Preview"
                      fill
                      className="object-contain"
                    />
        
                  </div>
        
                </div>
              )}

    </main>
  )
}