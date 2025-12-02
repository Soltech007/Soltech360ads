"use client";
import React from "react";

const page = () => {
  const [text, settext] = React.useState("");
  const [todo, settodo] = React.useState<string[]>([]);

  const AddTodo = () => {};
  return (
    <div>
      <h1>Todo Page</h1>

      <input
        type="text"
        placeholder="add todo"
        onChange={(e) => settext(e.target.value)}
      />
    </div>
  );
};

export default page;
