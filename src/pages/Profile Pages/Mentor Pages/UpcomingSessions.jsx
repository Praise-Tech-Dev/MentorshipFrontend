import { ChevronLeft } from "lucide-react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const sessions = [
  {
    mentee: "James Dan",
    date: "2023-10-01",
    time: "10:00 AM",
    status: "upcoming",
  },
  {
    mentee: "Sarah Smith",
    date: "2023-10-02",
    time: "11:00 AM",
    status: "completed",
  },
  {
    mentee: "Praise Holmes",
    date: "2023-10-05",
    time: "12:00 PM",
    status: "upcoming",
  },
];
export default function UpcomingSessions() {
  const [sessionDetailsOpen, setSessionDetailsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const subpages = ["/sessions/details"];

  const handleSessionClick = (session) => {
    navigate(`/sessions/details`, {state: {session}})
  }

  useEffect(() => {
    const isSubpage = subpages.some((path) => location.pathname.includes(path));
    setSessionDetailsOpen(isSubpage);
  }, [location.pathname]);

  return (
    <section className="py-8 px-4 flex flex-row gap-2">
      <div
        className={`${
          sessionDetailsOpen ? "border-r border-gray-200 w-[50%]" : "w-full"
        }`}
      >
        <h1 className="text-gray-900 text-xl font-bold flex flex-row gap-2 items-center">
          <ChevronLeft
            onClick={() => navigate("/profile")}
            className="cursor-pointer"
          />
          Upcoming Sessions
        </h1>
        <div className="flex flex-col gap-2 py-4 h-120 overflow-scroll">
          {sessions.map((session, index) => (
            <div
              key={index}
              onClick={() => handleSessionClick(session)}
              className="flex flex-row justify-between items-center border-b border-gray-200 hover:bg-gray-200 cursor-pointer"
            >
              <div className="flex flex-row items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                <div className="">
                  <h1 className="text-gray-900 text-lg font-semibold">
                    {session.mentee}
                  </h1>
                  <p className="text-gray-700 text-sm">{session.date}</p>
                  <p className="text-gray-700 text-sm">{session.time}</p>
                </div>
              </div>
              {/* for upcoming sessions */}
              <div>
                {session.status === "upcoming" && (
                  <div className="flex flex-row gap-2">
                    <button className="bg-green-500 p-1 rounded-lg text-white cursor-pointer hover:bg-green-400">
                      Accept
                    </button>
                    <button className="bg-red-500 p-1 rounded-lg text-white cursor-pointer hover:bg-red-400">
                      Reject
                    </button>
                  </div>
                )}
              </div>
              {/* for completed sessions */}
              {session.status === "completed" && (
                <div>
                  <button className="bg-gray-900 text-white p-1 rounded-lg cursor-pointer hover:bg-gray-800">
                    Review
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-[50%]">
        <Outlet />
      </div>
    </section>
  );
}
