import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="">
      <div className=" relative h-[calc(100vh-80px)]">
        <video
          width="1920"
          height="1080"
          autoPlay
          loop
          muted
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source
            src="https://zzsrstamodqlhrpuzitw.supabase.co/storage/v1/object/sign/goadventurenorth/output.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnb2FkdmVudHVyZW5vcnRoL291dHB1dC5tcDQiLCJpYXQiOjE3MzI2ODYxOTEsImV4cCI6MzMwOTQ4NjE5MX0.g4wqC0tB6Klf5izb1BM-lZWsPW98fApnKKSXkRfQXD8&t=2024-11-27T05%3A43%3A08.321Z"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-white text-4xl font-bold text-center">
            L’aventure commence là où la route s'arrête
          </h1>
        </div>
      </div>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        Todo
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
