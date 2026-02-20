"use client";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [snackbar, setSnackbar] = useState<{
    show: boolean;
    message: string;
  }>({
    show: false,
    message: "",
  });
  const pages = [
    { name: "Login", path: "/page1" },
    { name: "Register", path: "/page2" },
    { name: "Forgot Password", path: "/page3" },
    { name: "About Us", path: "/page4" },
    { name: "Contact Us", path: "/page5" },
    { name: "Analytics", path: "/analyticspage" },
  ];
  const handleClick = (name: string) => {
    setSnackbar({
      show: true,
      message: `${name} page opened `,
    });
    setTimeout(() => {
      setSnackbar({
        show: false,
        message: "",
      });
    }, 3000);
  };
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center text-green-600">
        Page Tracker Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
        {pages.map((p, i) => (
          <Link key={i} href={p.path}>
            <div
              onClick={() => handleClick(p.name)}
              className="cursor-pointer border bg-white p-8 text-center rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-700">
                {p.name}
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                Click to open
              </p>
            </div>
          </Link>
        ))}
      </div>
      {snackbar.show && (
        <div className="fixed bottom-6 right-6 bg-black text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          {snackbar.message}
        </div>
      )}
    </div>
  );
}
