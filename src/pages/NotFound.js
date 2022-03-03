import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="w-screen min-h-screen overflow-x-hidden flex justify-center items-center flex-col text-3xl lg:text-4xl px-4 lg:px-8 text-center">
        Sorry the page you were looking for doesn't exist
        <br />
        <Link
          to={"/"}
          className="transition py-3 px-5 mt-6 rounded-full text-3xl lg:text-4xl no-underline text-slate-50 bg-sky-400 hover:scale-90"
        >
          Go to Home
        </Link>
      </div>
    </>
  );
}
