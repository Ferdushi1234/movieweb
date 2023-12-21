"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Styles from "./addTopic.css"

 const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title, description, mediaUrl are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description}),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <form onSubmit={handleSubmit}
    className="styles.container">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        
        type="text"
        placeholder="Topic Description"
      />
    

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Add Movies
      </button>
    </form>

  );
};export default AddTopic ;
