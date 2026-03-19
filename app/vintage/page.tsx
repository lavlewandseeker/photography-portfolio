"use client";

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

const photos = [
  "/vintage/vin1.png",
  "/vintage/vin2.png",
  "/vintage/vin3.png",
  "/vintage/vin4.png",
  "/vintage/vin5.png",
  "/vintage/vin6.png",
  "/vintage/vin7.png",
  "/vintage/vin8.png",
  "/vintage/vin9.png",
  "/vintage/vin10.png",
  "/vintage/vin11.png",
  "/vintage/vin12.png",
  "/vintage/vin13.png",
]

export default function VintagePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <Link href="/" className="text-white/70 hover:text-white">
        ← Back
      </Link>

      <h1 className="text-4xl font-bold mb-10 mt-4">
        Vintage
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {photos.map((src, i) => (
          <div key={i} className="relative aspect-[4/3] rounded-lg overflow-hidden" onClick={() => setSelectedImage(src)}>
            <Image
              src={src}
              alt="Vintage photo"
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