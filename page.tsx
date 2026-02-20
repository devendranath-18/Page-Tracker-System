"use client";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Contact() {
  const [msg, setMsg] = useState("");
  const [snackbar, setSnackbar] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error";
  }>({
    show: false,
    message: "",
    type: "success",
  });
  useEffect(() => {
    axios.post(
      "http://localhost:5000/api/visit/track",
      { page: "/contact" }
    );
  }, []);
  const sendMessage = () => {
    if (!msg.trim()) {
      setSnackbar({
        show: true,
        message: "Message cannot be empty ",
        type: "error",
      });
    } else {

      setSnackbar({
        show: true,
        message: "Message Sent Successfully ",
        type: "success",
      });

      setMsg("");
    }
    setTimeout(() => {
      setSnackbar((prev) => ({ ...prev, show: false }));
    }, 3000);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white-100 to-green-200">  
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[500px]">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          Contact Us
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Have questions or feedback? Send us a message 
        </p>
        <textarea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Type your message here..."
          className="w-full border p-4 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 mb-6"
        />
        <button
          onClick={sendMessage}
          className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Send Message 
        </button>
      </div>
      {snackbar.show && (
        <div
          className={`fixed bottom-6 right-6 px-6 py-3 rounded-lg shadow-xl text-white
          ${
            snackbar.type === "success"
              ? "bg-green-600"
              : "bg-red-600"
          }`}
        >
          {snackbar.message}
        </div>
      )}
    </div>
  );
}
