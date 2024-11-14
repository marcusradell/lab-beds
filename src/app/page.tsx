"use client";

import { onClick } from "./actions";

export default function Home() {
  return (
    <>
      <h1>Add a bed</h1>
      <input type="text" />
      <button onClick={onClick}>Add bed</button>
    </>
  );
}
