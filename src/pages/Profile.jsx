import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MentorsViewBox from "../components/MentorsViewBox";
import MentorSideBar from "../components/MentorSideBar";

export default function Profile() {
  const user = { name: "James Jones", role: "Mentor" };
  const [openSideSection, setOpenSideSection] = useState(false);
  const location = useLocation();

  const subpages = ["/profile/edit", "/profile/mentor"];

  useEffect(() => {
    const isSubpage = subpages.some(path => location.pathname.includes(path));
    setOpenSideSection(isSubpage);
  }, [location.pathname]);

  return (
    <section className="flex flex-row w-full p-8 gap-8">
      {user?.role === "Mentor" && (
        <div className="border-r border-gray-300">{<MentorSideBar/>}</div>
      )}
      {/* Left section: Profile details and mentor view */}
      <div
        className={`flex flex-col gap-8 p-4 ${
          openSideSection ? "border-r border-gray-300 w-1/2" : "w-full"
        }`}
      >
        {/* Profile details */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-900 text-white flex items-center justify-center text-4xl">
              {user.name[0]}
            </div>
            <div>
              <h1 className="text-lg font-medium text-gray-800">
                {user.name}{" "}
                <a
                  href="/profile/edit"
                  className="text-sm text-blue-500 underline"
                >
                  edit
                </a>
              </h1>
              <p className="text-sm text-gray-600">{user.role}</p>
            </div>
          </div>

          <div className="text-gray-800 text-sm space-y-2">
            <p>Email: {user?.email || "Not provided"}</p>
            <p>Short Bio: {user?.shortBio || "No bio yet."}</p>
            <p>Skills: {user?.skills || "No skills yet"}</p>
            <p>Goals: {user?.goals || "No goals yet"}</p>
          </div>
        </section>

        {/* Mentors view box */}
        <section>
          {user?.role === "Mentee" && <MentorsViewBox />}
        </section>
      </div>

      {openSideSection && (
        <div className="w-1/2">
          <Outlet />
        </div>
      )}
    </section>
  );
}
