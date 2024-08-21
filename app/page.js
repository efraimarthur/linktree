import Image from "next/image";
import profilePic from "./leonardo-da-vinci.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 md:p-24 bg-orange-100">
      <div className="div text-slate-800 border-2 border-red-400 w-full md:w-[55%] flex flex-col justify-center items-center">
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
        <p className="text-center my-5 font-bold text-xl">Arthur Efraim</p>
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
  );
}
