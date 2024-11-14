"use client";

import { addBedAction } from "./actions";

export default function Home() {
  return (
    <>
      <h1>Add a bed</h1>
      <input type="text" />
      <button onClick={() => addBedAction("Ceasar size?")}>Add bed</button>
    </>
  );
}
