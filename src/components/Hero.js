import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-5 lg:p-12 min-h-screen items-center pt-12 md:pt-0 ">
      <div className="basis-3/5">
        <div className="text-5xl md:text-6xl lg:text-8xl font-bold mt-24 lg:mt-auto lg:pt-24 text-slate-700 ">
          Super Cool Badges for your Projects
        </div>
        <div className="mt-8 md:mt-6 text-3xl">
          Socials/ Languages/ Frameworks/ Libraries and more
        </div>

        <Link
          to="/generate"
          className="transition no-underline mt-6 lg:mt-12 inline-block text-3xl lg:text-5xl px-6 py-2 bg-amber-500 rounded-3xl text-slate-50 hover:translate-x-2 hover:shadow-xl hover:shadow-amber-50 border-none outline-none"
        >
          Get &rarr;
        </Link>
      </div>
      <div className="basis-2/5">
        <img src={process.env.PUBLIC_URL + "/object.png"} alt="object" />
      </div>
    </div>
  );
}
