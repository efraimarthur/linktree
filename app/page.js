import Image from "next/image";
import Link from "next/link";
// import { Icon } from "@iconify-icon/react";

export default function Home() {
  // const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-orange-100 text-slate-800">
      <main className="flex flex-col items-center justify-between py-24 md:py-0 md:pt-24">
        <div className="div w-full md:w-[55%] flex flex-col justify-center items-center">
          <div className="rounded-full overflow-hidden h-24 w-24 bg ">
            <Image
              // src={profilePic}
              src={"/leonardo-da-vinci.jpg"}
              alt="Picture of the author"
              width={100}
              height={100}
              blurDataURL="data:..."
              placeholder="blur"
            />
          </div>
          <div className="text-center py-4">
            <p className="font-bold text-xl">Arthur Efraim</p>
            <p className="text-sm">Dota 2 enjoyer</p>
          </div>
          <div className="py-2 flex">
            <div className="">A</div>
            <div className="">B</div>
          </div>

          <a
            className="shadow-md bg-white w-full text-center mt-3 py-5 transition-all duration-200 ease-in-out md:hover:w-[105%] md:hover:font-extrabold"
            href="https://github.com/efraimarthur"
            target="_blank"
          >
            Github
          </a>
          <a
            className="shadow-md bg-white w-full text-center mt-3 py-5 transition-all duration-200 ease-in-out md:hover:w-[105%] md:hover:font-extrabold"
            href="https://arthurefraim.vercel.app/"
            target="_blank"
          >
            My personal Website
          </a>
          <a
            className="shadow-md bg-white w-full text-center mt-3 py-5 transition-all duration-200 ease-in-out md:hover:w-[105%] md:hover:font-extrabold"
            href="https://www.linkedin.com/in/arthurefraim"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </main>
      <footer className="text-center">
        <div className="py-5 bg-transparent bg-gradient-to-t from-slate-400 to-orange-100">
          Linktree by Arthur
        </div>
      </footer>
    </div>
  );
}
