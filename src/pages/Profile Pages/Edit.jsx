const skills = ["skill 1", "skill 2", "skill 3"];
const goals = ["goal 1", "goal 2", "goal 3"];
import { use, useState } from "react";
import axios from "axios";

export default function ProfileEdit() {
  const user = { email: "email@user.com" };
  const [name, setName] = useState("");
  const [shortBio, setShortBio] = useState("");
  const [skillsSelected, setSkillsSelected] = useState([]);
  const [goals, setGoals] = useState("");
  // const userData = JSON.parse(localStorage.getItem("auth")).user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log(form);

    const formdata = new FormData(form);
    const skills = formdata.getAll("skills");
    // console.log(skills);

    setSkillsSelected(skills);
    const data = {
      name: name,
      email: user.email,
      bio: shortBio,
      skills: skillsSelected,
      goal: goals,
    };

    try {
      const response = await axios.put(
        `https://mentorshipbackend-fetn.onrender.com/api/profile/editProfile/${userData.id}`,
        data, {withCredentials: true}
      );
      if (response.status === 200) {
        console.log("success");
      }
    } catch (error) {console.log(error);
    }
  };

  return (
    <>
      <div>
        <h1 className="font-bold pb-4 text-gray-900">Edit Profile</h1>
        <form action="" className="w-full" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col py-2">
            <label htmlFor="user-name" className="text-gray-900 pb-2">
              Name:
            </label>
            <input
              type="text"
              name="username"
              id="user-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g James Jones"
              className="py-4 px-2 border border-gray-500 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="short-bio" className="text-gray-900 pb-2">
              Short Bio:
            </label>
            <textarea
              name="shortBio"
              id="short-bio"
              value={shortBio}
              onChange={(e) => setShortBio(e.target.value)}
              className="py-2 px-2 border border-gray-500 rounded-lg h-20 outline-none"
              placeholder="Type a short info about yourself here"
            ></textarea>
          </div>
          <div>
            <h1 className="text-gray-900 py-2">
              Skills (select multiple from list)
            </h1>
            <div className="flex flex-row flex-wrap gap-4">
              {skills.map((item, index) => (
                <div key={index} className="flex flex-row gap-2">
                  <input type="checkbox" name="skills" value={item} id={item} />
                  <label htmlFor={item} className="text-gray-900">
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="py-2">
            <h1 className="text-gray-900">Goals</h1>
            <div className="flex flex-col py-2 flex-wrap gap-4">
              {/* {goals.map((item, index) => (
                    <div key={index} className="flex flex-row gap-2">
                        <input type="checkbox" name="goals[]" value={item} id={item}/>
                        <label htmlFor={item} className="text-gray-900">{item}</label>
                    </div>
                ))} */}
              <input
                type="text"
                name="goals"
                id="goals"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                placeholder="e.g., “Improve product design skills”)"
                className="py-4 px-2 border border-gray-500 rounded-lg outline-none"
              />
            </div>
          </div>

          <div className="flex flex-row w-full my-8">
            <button
              type="submit"
              className="bg-gray-900 text-white text-base p-1 rounded-lg cursor-pointer hover:bg-gray-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
