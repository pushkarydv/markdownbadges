import { Link } from "react-router-dom";

export default function Navbar({ bgClass = "" }) {
  return (
    <>
      <nav
        className={
          "flex flex-row justify-between items-center text-2xl p-4 fixed top-0 left-0 w-full " +
          bgClass
        }
      >
        <div className="w-fit flex flex-row items-center">
          <Link
            to="/"
            className="no-underline text-slate-600 font-medium text-4xl pl-2"
          >
            MDB
          </Link>
        </div>
        <a
          href="https://www.buymeacoffee.com/pushkarydv"
          className="transition bg-amber-500 -skew-x-4 text-zinc-50 py-1 px-4 md:py-2 lg:px-6 rounded-full outline-none no-underline border-4 border-amber-400 hover:border-amber-600"
        >
          Donate
        </a>
      </nav>
    </>
  );
}
