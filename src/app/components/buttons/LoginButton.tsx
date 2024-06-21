"use client";
export default function LoginButton({ func }: { func: () => Promise<void> }) {
  return (
    <button
      className=" text-light-gray/80 font-roboto bg-lime-400 hover:bg-slate-600 hover:text-white hover:ease-in-out duration-200 ml-40 px-3 py-2 rounded-3xl font-medium"
      onClick={() => {
        func();
      }}
    >
      Login
    </button>
  );
}
