"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqItems = [
    {
      question: "Berapa lama sebelumnya saya harus memesan venue?",
      answer:
        "Kami menyarankan untuk memesan venue minimal 6-12 bulan sebelum tanggal pernikahan, terutama untuk tanggal-tanggal populer seperti akhir pekan atau musim pernikahan (April-Juni dan September-Oktober). Untuk tanggal-tanggal tertentu, pemesanan bahkan bisa dilakukan hingga 18 bulan sebelumnya.",
    },
    {
      question: "Apakah saya bisa membawa vendor sendiri?",
      answer:
        "Ya, Anda diperbolehkan membawa vendor sendiri seperti fotografer, videografer, atau penata rias. Namun, untuk katering dan dekorasi, kami memiliki daftar vendor rekanan yang telah teruji kualitasnya. Jika Anda ingin menggunakan vendor katering dari luar, akan dikenakan biaya tambahan sebesar 15% dari total biaya venue.",
    },
    {
      question: "Bagaimana kebijakan pembatalan dan pengembalian dana?",
      answer:
        "Kebijakan pembatalan kami adalah sebagai berikut: 1) Pembatalan 6+ bulan sebelum acara: pengembalian 75% dari total pembayaran, 2) Pembatalan 3-6 bulan sebelum acara: pengembalian 50% dari total pembayaran, 3) Pembatalan 1-3 bulan sebelum acara: pengembalian 25% dari total pembayaran, 4) Pembatalan kurang dari 1 bulan sebelum acara: tidak ada pengembalian dana. Untuk kasus force majeure seperti bencana alam atau pandemi, kami menawarkan opsi reschedule tanpa biaya tambahan.",
    },
    {
      question: "Apakah ada batasan waktu untuk acara?",
      answer:
        "Ya, setiap paket memiliki batasan waktu tertentu (6-12 jam). Acara harus berakhir maksimal pukul 23.00 WIB untuk menghormati peraturan lingkungan sekitar. Jika Anda membutuhkan waktu tambahan, biaya overtime adalah Rp 2.000.000 per jam dan harus disetujui minimal 1 minggu sebelum acara.",
    },
    {
      question:
        "Bagaimana dengan rencana cadangan untuk acara outdoor jika cuaca buruk?",
      answer:
        "Kami selalu memiliki rencana cadangan untuk acara outdoor. Garden Pavilion kami memiliki atap permanen yang dapat melindungi dari hujan ringan. Untuk cuaca ekstrem, kami akan memindahkan acara ke indoor venue dengan setup yang serupa. Keputusan pemindahan lokasi akan dibuat 24 jam sebelum acara berdasarkan prakiraan cuaca, atau pada hari H jika terjadi perubahan cuaca mendadak.",
    },
    {
      question: "Apakah ada akomodasi untuk tamu dari luar kota?",
      answer:
        "Kami memiliki 5 villa mewah di area venue yang dapat menampung hingga 20 tamu. Selain itu, kami bermitra dengan beberapa hotel bintang 4 dan 5 di sekitar venue dengan jarak 5-10 menit berkendara. Kami dapat membantu mengatur akomodasi untuk tamu Anda dengan harga khusus.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-gradient-to-b text-black from-rose-50 to-white"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-rose-400"></div>
            <span className="text-rose-600 uppercase tracking-wider text-sm font-medium">
              FAQ
            </span>
            <div className="h-px w-10 bg-rose-400"></div>
          </div>
          <h2 className="text-3xl font-serif font-bold tracking-tight sm:text-4xl text-gray-900">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-gray-700 text-lg">
            Temukan jawaban untuk pertanyaan umum tentang venue pernikahan kami.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border border-rose-100 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-rose-50 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
