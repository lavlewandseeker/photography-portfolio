"use client";

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

const photos = [
  "/art/art1.png",
  "/art/art2.png",
  "/art/art3.png",
  "/art/art4.png",
  "/art/art5.png",
  "/art/art6.png",
  "/art/art7.png",
  "/art/art8.png",
  "/art/art9.png",
  "/art/art10.png",
  "/art/art11.png",
  "/art/art12.png",
  "/art/art13.png",
  "/art/art14.png",
  "/art/art15.png",
  "/art/art16.png",
]

export default function ArtPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <Link href="/" className="text-white/70 hover:text-white">
        ← Back
      </Link>

      <h1 className="text-4xl font-bold mb-10 mt-4">
        Art
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {photos.map((src, i) => (
          <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden" onClick={() => setSelectedImage(src)}>
            <Image
              src={src}
              alt="Art photo"
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