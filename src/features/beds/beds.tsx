"use client";

import { addBedAction } from "./actions";

export function Beds() {
  return (
    <>
      <input type="text" />
      <button onClick={() => addBedAction("Ceasar size?")}>Add bed</button>
    </>
  );
}
