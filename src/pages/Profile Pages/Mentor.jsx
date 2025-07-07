import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Mentor() {
  const location = useLocation();
  const mentor = location.state?.mentor || {};
  return (
    <section>
      <div className="flex flex-row gap-8 items-center">
        <div className="w-40 h-40 rounded-full bg-gray-900 text-center text-white text-8xl flex flex-col justify-center items-center">
          {mentor?.name[0]}
        </div>
        <div>
            <h1 className="text-gray-900 font-semibold text-3xl">{mentor?.name}</h1>
            <p className="text-gray-700">{mentor?.role}</p>
        </div>
      </div>
      <div>
        <h2 className="text-gray-800 font-semibold text-xl mt-4">About</h2>
        <p className="text-gray-600 text-sm">{mentor?.shortBio || "No bio available."}</p>
        <h2 className="text-gray-800 font-semibold text-xl mt-4">Skills:</h2>
        <p>{mentor?.skills.map((skill, index) => (
            <span key={index} className="text-gray-600 text-sm">
                {skill}{index < mentor.skills.length - 1 ? ", " : ""}
            </span>
        ))}</p>
      </div>
      <div className="py-2">
        <button className="bg-gray-900 p-1 rounded-lg text-white hover:bg-gray-800 cursor-pointer">Request Mentorship</button>
      </div>
    </section>
  );
}
