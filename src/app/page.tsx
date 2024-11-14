"use client";

export default function Home() {
  function onClick() {
    alert("Clicked!");
  }

  return (
    <>
      <h1>Add a bed</h1>
      <input type="text" />
      <button onClick={onClick}>Add bed</button>
    </>
  );
}
