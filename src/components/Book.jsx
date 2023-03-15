import React from "react";

function Book({ id, src }) {
  return (
    <div className="text-center">
      <img className="max-w-[420px]" src={src} alt="book portade" />
      <h2 className="font-bold text-xl mb-4">{`Issue #${id}`}</h2>
      <a className="text-pink-500 text-lg hover:underline font-bold" href="">BUY HERE</a>
      <p className="mt-5 font-bold">
        or in{" "}
        <a className="text-pink-500 hover:underline" href="https://backstagetalks.com/stocklist.php">selected stores</a>
      </p>
    </div>
  );
}

export default Book;
