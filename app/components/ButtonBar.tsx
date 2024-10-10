"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const ButtonBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToQuestion = (questionId: string) => {
    const element = document.getElementById(questionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button
        onClick={toggleVisibility}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg z-50 md:hidden"
      >
        <FontAwesomeIcon icon={isVisible ? faTimes : faBars} />
      </button>

      <div
        className={`fixed top-1/4 right-4 bg-gray-200 dark:bg-gray-500 space-y-2 p-4 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isVisible ? "translate-x-0 flex" : "translate-x-full hidden"
        } flex-col md:translate-x-0 md:flex md:flex-col md:space-y-2`}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <button
            key={num}
            onClick={() => scrollToQuestion(`question-${num}`)}
            className="bg-white text-black hover:text-white p-3 rounded-full shadow hover:bg-blue-600 dark:bg-gray-700 dark:text-white dark:hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-110"
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonBar;
