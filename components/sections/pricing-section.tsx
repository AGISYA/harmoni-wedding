"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface PricingSectionProps {
  handleWhatsAppClick: () => void;
}

export default function PricingSection({
  handleWhatsAppClick,
}: PricingSectionProps) {
  return (
    <section
      id="paket"
      className="py-16 md:py-24 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
        <div className="flex items-center justify-center gap-2">
          <div className="h-px w-10 bg-rose-400"></div>
          <span className="text-rose-600 uppercase tracking-wider text-sm font-medium">
            Paket & Harga
          </span>
          <div className="h-px w-10 bg-rose-400"></div>
        </div>
        <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl text-gray-900">
          Paket Pernikahan yang Dapat Disesuaikan
        </h2>
        <p className="text-gray-700 text-lg">
          Pilih paket yang sesuai dengan kebutuhan dan anggaran Anda.
        </p>
      </div>

      <Tabs defaultValue="weekday" className="max-w-4xl mx-auto w-full">
        <TabsList className="grid grid-cols-2 mb-8 p-1 bg-rose-100 text-gray-700 rounded-full">
          <TabsTrigger
            value="weekday"
            className="rounded-full data-[state=active]:bg-white data-[state=active]:text-rose-600 py-3"
          >
            Hari Kerja
          </TabsTrigger>
          <TabsTrigger
            value="weekend"
            className="rounded-full data-[state=active]:bg-white data-[state=active]:text-rose-600 py-3"
          >
            Akhir Pekan
          </TabsTrigger>
        </TabsList>

        <TabsContent value="weekday">
          <PricingPackages
            handleWhatsAppClick={handleWhatsAppClick}
            isWeekend={false}
          />
        </TabsContent>

        <TabsContent value="weekend">
          <PricingPackages
            handleWhatsAppClick={handleWhatsAppClick}
            isWeekend={true}
          />
        </TabsContent>
      </Tabs>

      <div className="text-center mt-12">
        <p className="text-gray-700 mb-4">
          Butuh paket yang disesuaikan dengan kebutuhan Anda?
        </p>
        <Button
          onClick={handleWhatsAppClick}
          variant="green"
          className="gap-2 px-6 py-4 text-lg rounded-full"
        >
          Konsultasikan via WhatsApp
        </Button>
      </div>
    </section>
  );
}

interface PricingPackagesProps {
  handleWhatsAppClick: () => void;
  isWeekend: boolean;
}

function PricingPackages({
  handleWhatsAppClick,
  isWeekend,
}: PricingPackagesProps) {
  const packages = [
    {
      name: "Paket Dasar",
      price: isWeekend ? "Rp 35.000.000" : "Rp 25.000.000",
      popular: false,
      gradient: "from-rose-100 to-pink-100",
      textColor: "text-rose-800",
      features: [
        "Venue selama 6 jam (Grand Ballroom atau Garden Pavilion)",
        "Kapasitas 200 tamu",
        "Dekorasi standar (bunga segar, karpet, dan lighting)",
        "Sound system dan MC",
        "Bridal room selama 4 jam",
      ],
    },
    {
      name: "Paket Premium",
      price: isWeekend ? "Rp 55.000.000" : "Rp 45.000.000",
      popular: true,
      gradient: "from-rose-400 to-pink-400",
      textColor: "text-white",
      features: [
        "Venue selama 10 jam (Grand Ballroom atau Garden Pavilion)",
        "Kapasitas 350 tamu",
        "Dekorasi premium (bunga segar, karpet, dan lighting)",
        "Sound system, lighting, dan MC profesional",
        "Katering untuk 200 tamu (3 course meal)",
        "Dokumentasi foto (8 jam)",
        "Bridal room selama 10 jam",
      ],
    },
    {
      name: "Paket Eksklusif",
      price: isWeekend ? "Rp 85.000.000" : "Rp 75.000.000",
      popular: false,
      gradient: "from-rose-200 to-pink-200",
      textColor: "text-rose-800",
      features: [
        "Venue selama 12 jam (akses ke semua area)",
        "Kapasitas 500 tamu",
        "Dekorasi mewah dengan desainer ternama",
        "Sound system & lighting premium",
        "Katering untuk 350 tamu (5 course meal)",
        "Dokumentasi foto & video (12 jam)",
        "Wedding organizer profesional",
        "Menginap di villa mewah (1 malam)",
      ],
    },
  ];

  return (
    <div className="grid gap-6 text-black md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
      {packages.map((pkg, index) => (
        <Card
          key={index}
          className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl overflow-hidden relative ${
            pkg.popular ? "scale-105 shadow-2xl" : ""
          }`}
        >
          {pkg.popular && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-rose-600 text-white px-6 py-1 rounded-full text-sm font-medium">
              Paling Populer
            </div>
          )}
          <div className={`bg-gradient-to-r ${pkg.gradient} p-6 text-center`}>
            <h3 className={`text-xl font-bold ${pkg.textColor}`}>{pkg.name}</h3>
            <span
              className={`text-4xl font-bold ${
                pkg.textColor === "text-white" ? "text-white" : "text-gray-900"
              }`}
            >
              {pkg.price}
            </span>
          </div>
          <CardContent className="p-6 space-y-4">
            <ul className="space-y-3">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-rose-500 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={handleWhatsAppClick}
              variant="green"
              className="w-full mt-6 rounded-full"
            >
              Pesan via WhatsApp
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
