import Select from "react-select";
import "../components/styles/viewbox.css";
import { FilterIcon } from "lucide-react";
import mentorsJson from "../../mentors.json";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const options = [
  { value: "skill 1", label: "skill 1" },
  { value: "skill 2", label: "skill 2" },
  { value: "skill 3", label: "skill 3" },
];

export default function MentorsViewBox() {
  const navigate = useNavigate();
  const [selectedMentor, setSelectedMentor] = useState(null);

  const HandleMentorClick = (mentor) => {
    setSelectedMentor(mentor.id);
    navigate(`/profile/mentor`, { state: { mentor } });
  };
  return (
    <section className="border border-gray-200 rounded-lg p-2 ">
      <div className="flex flex-row justify-between items-center border-b border-gray-200 mb-2">
        <h1 className="text-gray-900 font-semibold">Mentors:</h1>
        <div className="flex flex-row gap-2 items-center">
          <FilterIcon className="w-4 h-4" />
          <h1 className="text-gray-700 text-base">By Skills:</h1>
          <Select options={options} isMulti className="my-select" />
          <h1 className="text-gray-700 text-base">By Industry:</h1>
          <Select options={options} isMulti className="my-select" />
        </div>
      </div>
      <div className="h-50 overflow-scroll">
        {mentorsJson.map((mentor, index) => (
          <div
            key={index}
            onClick={() => HandleMentorClick(mentor)}
            className={`flex flex-row gap-2 items-center pb-2 border-b border-gray-200 p-1 hover:bg-gray-200 cursor-pointer rounded-lg px-2 ${
              (selectedMentor === mentor.id) ? "bg-gray-200" : ""
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-gray-900 text-white text-center flex flex-col items-center justify-center">
              {mentor.name[0]}
            </div>
            <div>
              <p>{mentor.name}</p>
              <p className="flex flex-row text-sm gap-2 text-gray-700">
                {mentor.skills.slice(0, 3).map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
