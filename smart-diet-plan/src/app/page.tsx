"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import MealForm from "@/components/MealForm"; // Importing the MealForm

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  return (
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen relative bg-white dark:bg-gray-900 transition-colors duration-500">
          <header className="flex justify-between items-center p-5 bg-gradient-to-r from-green-400 via-blue-500 to-green-400 dark:from-gray-800 dark:to-gray-900 shadow-lg">
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">Smart Diet Plan</h1>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </header>

          {/* Show either the landing page or the MealForm based on the button click */}
          {!showForm ? (
              <main className="flex flex-col items-center justify-center flex-grow relative h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                      backgroundImage: `url('/fitness-bg.jpg')`,
                      filter: "brightness(0.6)",
                    }}
                />
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

                <div className="relative z-20 text-center text-white px-4">
                  <h1 className="text-5xl font-bold mb-5 animate-bounce">
                    Your Personal Trainer & Nutritionist
                  </h1>
                  <p className="text-xl mb-8">Transform Your Eating Habits</p>
                  <button
                      className="mt-8 px-8 py-3 bg-green-500 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-600 transition"
                      onClick={() => setShowForm(true)} // Show MealForm when clicked
                  >
                    Create Your Diet Plan Now
                  </button>
                </div>
              </main>
          ) : (
              <MealForm /> // Show the MealForm after button click
          )}
        </div>
      </div>
  );
}