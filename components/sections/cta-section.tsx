"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  handleWhatsAppClick: () => void;
}

export default function CTASection({ handleWhatsAppClick }: CTASectionProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-rose-500 to-pink-500 text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium backdrop-blur-sm">
            Mulai Perjalanan Cinta Anda
          </div>
          <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl">
            Wujudkan Pernikahan Impian Anda Bersama Kami
          </h2>
          <p className="text-lg text-white/80">
            Jangan lewatkan kesempatan untuk memesan tanggal pernikahan Anda.
            Hubungi kami sekarang untuk penawaran khusus!
          </p>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="mt-4 bg-white text-rose-600 hover:bg-white/90 hover:text-rose-700 gap-2 rounded-full px-8 py-6 text-lg group"
          >
            Pesan Sekarang via WhatsApp
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
