import React from "react";
import logo from "../assets/logo.png";
import BooksList from "./BooksList";
function PageContainer() {
  return (
    <div className="font-serif">
      <img className="w-44 pt-6 pl-4 md:w-64" src={logo} alt="dwdad" />

      <BooksList />
      <footer className="text-center mt-16 mb-3 p-5 font-serif text-xl">
        <p className="md:text-left md:w-[280px]">
          Backstage Talks is a magazine of casual, but in depth dialogues on
          design and business. Our decisions shape and influence this complex
          world—to have a chance to make the right ones, we need to talk.
        </p>
        <a
          className=" md:m-0 block mb-5 text-xs text-gray-500 w-max m-auto"
          href="http://milk.sk/"
        >
          © 2023 Published by studio Milk
        </a>
        <div className=" md:w-[100%] md:flex md:justify-between md:mt-7">
          <a
            className="block mt-5 mb-5 underline hover:no-underline w-max m-auto md:m-0"
            href="https://backstagetalks.com/privacy-policy.php"
          >
            Privacy Policy
          </a>
          <a
            className="block mt-5 mb-5 hover:underline w-max m-auto md:m-0"
            href="info@backstagetalks.com"
          >
            info@backstagetalks.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default PageContainer;
