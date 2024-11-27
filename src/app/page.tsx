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
            src="https://zzsrstamodqlhrpuzitw.supabase.co/storage/v1/object/sign/goadventurenorth/goAdventureNorth_compress.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJnb2FkdmVudHVyZW5vcnRoL2dvQWR2ZW50dXJlTm9ydGhfY29tcHJlc3MubXA0IiwiaWF0IjoxNzMyNjg3MjAzLCJleHAiOjMzMjM3MTUxMjAzfQ.4D2oC8MukpWx7dscDApXfR1ImWsA0MnMcF3Cdzqyo7I&t=2024-11-27T06%3A00%3A00.601Z"
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
