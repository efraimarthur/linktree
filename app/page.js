import Image from "next/image";
import profilePic from "./leonardo-da-vinci.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-orange-100 text-slate-800">
      <main className="flex flex-col items-center justify-between py-24 md:py-0 md:pt-24">
        <div className="div border-2 border-red-400 w-full md:w-[55%] flex flex-col justify-center items-center">
          <div className="border-2 border-slate-800 rounded-full overflow-hidden h-24 w-24 bg ">
            <Image
              src={profilePic}
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
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div className="shadow-md bg-white w-full text-center mt-3 py-5 transition-all duration-200 ease-in-out md:hover:w-[105%] md:hover:font-extrabold">
            Github
          </div>
          <div className="shadow-md bg-white w-full text-center mt-3 py-5 transition-all duration-200 ease-in-out md:hover:w-[105%] md:hover:font-extrabold">
            Linkedin
          </div>
          <div className="shadow-md bg-white w-full text-center mt-3 py-5 transition-all duration-200 ease-in-out md:hover:w-[105%] md:hover:font-extrabold">
            Instagram
          </div>
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
