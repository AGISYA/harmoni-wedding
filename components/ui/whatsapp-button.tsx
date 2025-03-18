"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface WhatsAppButtonProps {
  handleWhatsAppClick: () => void;
}

export default function WhatsAppButton({
  handleWhatsAppClick,
}: WhatsAppButtonProps) {
  return (
    <div className="md:hidden fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        variant="green"
        rounded="full"
        className="w-12 h-12 sm:w-14 sm:h-14 p-0 shadow-lg"
        aria-label="Hubungi via WhatsApp"
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="sr-only">Hubungi via WhatsApp</span>
      </Button>
    </div>
  );
}
