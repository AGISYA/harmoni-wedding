"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rina & Budi",
      role: "Pengantin, Januari 2023",
      testimonial:
        "Kami sangat puas dengan layanan Harmoni Wedding Venue. Tempat yang indah, staf yang profesional, dan semua tamu kami terkesan dengan keindahan venue ini. Grand Ballroom-nya luar biasa megah dan Garden Pavilion memberikan latar belakang yang sempurna untuk foto pernikahan kami.",
      image: "/images/SCF9146.jpg",
    },
    {
      name: "Diana & Andi",
      role: "Pengantin, Mei 2023",
      testimonial:
        "Pernikahan kami berjalan sempurna berkat Harmoni Wedding Venue. Dekorasi yang cantik dan makanan yang lezat membuat hari spesial kami benar-benar tak terlupakan. Tim wedding planner mereka sangat membantu dalam mengkoordinasikan semua detail, sehingga kami bisa benar-benar menikmati hari pernikahan kami.",
      image:
        "/images/Snapinst.app_441052899_434103502793281_7729110757960979042_n_1080.jpg",
    },
    {
      name: "Sinta & Reza",
      role: "Pengantin, Oktober 2023",
      testimonial:
        "Terima kasih Harmoni Wedding Venue! Semua keluarga dan teman-teman kami memuji betapa indahnya tempat pernikahan kami. Pelayanan yang luar biasa! Kami mengadakan upacara di Rose Garden dan resepsi di Crystal Hall, keduanya ditata dengan sangat indah. Staf sangat profesional dan memperhatikan setiap detail.",
      image:
        "/images/Snapinst.app_462751688_526274436824246_9157435802926966555_n_1080.jpg",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-rose-400"></div>
            <span className="text-rose-600 uppercase tracking-wider text-sm font-medium">
              Testimoni
            </span>
            <div className="h-px w-10 bg-rose-400"></div>
          </div>
          <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl text-gray-900">
            Apa Kata Klien Kami
          </h2>
          <p className="text-gray-700 text-lg">
            Pengalaman pasangan yang telah menggunakan venue pernikahan kami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 text-black gap-8">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl overflow-hidden"
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-rose-200">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="italic text-gray-700">
                  {testimonial.testimonial}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
