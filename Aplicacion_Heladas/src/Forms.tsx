import React, { useRef, useEffect, useState } from 'react';
import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

const PhoneInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      const iti = intlTelInput(inputRef.current, {
        initialCountry: 'co',
        utilsScript:
          'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js', 
      });

      return () => {
        iti.destroy();
      };
    }
  }, []);

  return (
    <div className="mb-5">
      <label
        htmlFor="phoneNumber"
        className="block mb-2 text-sm font-medium text-black"
      >
        Phone Number
      </label>
      <input
        type="tel"
        id="phoneNumber"
        className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-300 focus:border-green-300 block w-full p-2.5 dark:bg-white dark:border-green-600 dark:text-black dark:focus:ring-green-600 dark:focus:border-green-600"
        ref={inputRef}
        required
      />
    </div>
  );
};

const Forms: React.FC = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleButtonClick = () => {
    setIsAlertVisible(true);
    setIsImageVisible(true);
  };

  const handleDismiss = () => {
    setIsAlertVisible(false);
    alert('Alert dismissed!');
  };

  return (
    <div className="relative">
      <h2 className="text-center text-xl font-bold mb-5">Register Frost</h2>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="fullName"
            className="block mb-2 text-sm font-medium text-black"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-300 focus:border-green-300 block w-full p-2.5 dark:bg-white dark:border-green-600 dark:text-black dark:focus:ring-green-600 dark:focus:border-green-600"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="date"
            className="block mb-2 text-sm font-medium text-black"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            className="bg-white border border-green-300 text-black text-sm rounded-lg focus:ring-green-300 focus:border-green-300 block w-full p-2.5 dark:bg-white dark:border-green-600 dark:text-black dark:focus:ring-green-600 dark:focus:border-green-600"
            required
          />
        </div>

        <PhoneInput />

        <button
          type="button"
          onClick={handleButtonClick}
          className="text-white hover:text-black bg-[#D6EFD8] hover:bg-[#D6EFD8] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#508D4E] dark:hover:bg-[508D4E]"
          >
          Send
        </button>
      </form>


      {isImageVisible && (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxe5ZNmoeBuhtYKp63pZeueoELILbG-55pew&s"
          alt="Imagen"
          className="absolute inset-x-0 mx-auto mt-5 w-32 h-auto"
        />
      )}

      {isAlertVisible && (
        <div className="fixed bottom-5 right-5 z-50 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <span className="font-medium">Successful!</span>
            <button
              onClick={handleDismiss}
              className="ml-2 text-green-700 font-bold"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forms;

