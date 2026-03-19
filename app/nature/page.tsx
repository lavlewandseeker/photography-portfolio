"use client";

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

const photos = [
  "/nature/nat1.png",
  "/nature/nat2.png",
  "/nature/nat3.png",
  "/nature/nat4.png",
  "/nature/nat5.png",
  "/nature/nat6.png",
  "/nature/nat7.png",
  "/nature/nat8.png",
  "/nature/nat9.png",
  "/nature/nat10.png",
  "/nature/nat11.png",
  "/nature/nat12.png",
  "/nature/nat13.png",
  "/nature/nat14.png",
  "/nature/nat15.png",
  "/nature/nat16.png",
  "/nature/nat17.png",
  "/nature/nat18.png",
  "/nature/nat19.png",
  "/nature/nat20.png",
  "/nature/nat21.png",
  "/nature/nat22.png",
  "/nature/nat23.png",
  "/nature/nat24.png",
  "/nature/nat25.png",
  "/nature/nat26.png",
  "/nature/nat27.png",
  "/nature/nat28.png",
  "/nature/nat29.png",
  "/nature/nat30.png",
  "/nature/nat31.png",
  "/nature/nat32.png",
  "/nature/nat33.png",
  "/nature/nat34.png",
  "/nature/nat35.png",
  "/nature/nat36.png",
  "/nature/nat37.png",
  "/nature/nat38.png",
  "/nature/nat39.png",
  "/nature/nat40.png",
  "/nature/nat41.png",
  "/nature/nat42.png",
  "/nature/nat43.png",
  "/nature/nat44.png",
  "/nature/nat45.png",
  "/nature/nat46.png",
  "/nature/nat47.png",
  "/nature/nat48.png",
  "/nature/nat49.png",
  "/nature/nat50.png",
  "/nature/nat51.png",
  "/nature/nat52.png",
  "/nature/nat53.png",
  "/nature/nat54.png",
  "/nature/nat55.png",
  "/nature/nat56.png",
  "/nature/nat57.png",
  "/nature/nat58.png",
  "/nature/nat59.png",
  "/nature/nat60.png",
  "/nature/nat61.png",
  "/nature/nat62.png",
  "/nature/nat63.png",
  "/nature/nat64.png",
  "/nature/nat65.png",
  "/nature/nat66.png",
  "/nature/nat67.png",
  "/nature/nat68.png",
  "/nature/nat69.png",
  "/nature/nat70.png",
  "/nature/nat71.png",
  "/nature/nat72.png",
  "/nature/nat73.png",
  "/nature/nat74.png",
  "/nature/nat75.png",
  "/nature/nat76.png",
  "/nature/nat77.png",
]

export default function NaturePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <Link href="/" className="text-white/70 hover:text-white">
        ← Back
      </Link>

      <h1 className="text-4xl font-bold mb-10 mt-4">
        Nature
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {photos.map((src, i) => (
          <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden" onClick={() => setSelectedImage(src)}>
            <Image
              src={src}
              alt="Nature photo"
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