"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

interface ContactSectionProps {
  handleWhatsAppClick: () => void;
}

export default function ContactSection({
  handleWhatsAppClick,
}: ContactSectionProps) {
  const contactItems = [
    {
      icon: (
        <Phone className="h-5 w-5 text-rose-600 group-hover:text-white transition-colors duration-300" />
      ),
      title: "Telepon",
      info: "+62 812 3456 7890",
    },
    {
      icon: (
        <Mail className="h-5 w-5 text-rose-600 group-hover:text-white transition-colors duration-300" />
      ),
      title: "Email",
      info: "info@harmoniwedding.com",
    },
    {
      icon: (
        <MapPin className="h-5 w-5 text-rose-600 group-hover:text-white transition-colors duration-300" />
      ),
      title: "Alamat",
      info: "Jl. Pernikahan Indah No. 123, Jakarta Selatan",
    },
    {
      icon: (
        <Clock className="h-5 w-5 text-rose-600 group-hover:text-white transition-colors duration-300" />
      ),
      title: "Jam Operasional",
      info: "Senin - Minggu: 09:00 - 18:00",
    },
  ];

  return (
    <section
      id="kontak"
      className="py-16 md:py-24 bg-gradient-to-b text-black from-rose-50 to-white"
    >
      <div className="container px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div className="h-px w-10 bg-rose-400"></div>
              <span className="text-rose-600 uppercase tracking-wider text-sm font-medium">
                Kontak Kami
              </span>
            </div>
            <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl text-gray-900">
              Hubungi Kami untuk Informasi Lebih Lanjut
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Tertarik untuk menyewa venue pernikahan kami? Hubungi kami
              sekarang untuk informasi ketersediaan dan penawaran khusus.
            </p>

            <div className="space-y-6 mt-8">
              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group"
                >
                  <div className="bg-rose-100 p-3 rounded-full group-hover:bg-rose-600 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <p className="text-gray-600 group-hover:text-rose-600 transition-colors duration-300">
                      {item.info}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="mt-6 bg-green-600 hover:bg-green-700 gap-2 rounded-full px-8 py-6 text-lg group"
              >
                Hubungi via WhatsApp
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 bg-rose-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-rose-100 rounded-full -z-10"></div>
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl h-[300px] sm:h-[350px] md:h-[400px] relative rounded-2xl overflow-hidden shadow-xl z-10">
              <Image
                src="/images/restoran-mewah-Leuwi-Asri-Garut.jpg"
                alt="Lokasi Venue"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
