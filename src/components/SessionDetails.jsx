import { useLocation } from "react-router-dom";
export default function SessionDetails() {
  const location = useLocation();

  const session = location.state?.session;
  return (
    <section>
      <h1 className="text-gray-900 text-xl font-bold flex flex-row gap-2 items-center">
        <span onClick={() => window.history.back()} className="cursor-pointer">
          ←
        </span>
        Session Details
      </h1>
      <div className="flex flex-col gap-4 py-4">
        <div className="border p-4 rounded-lg">
          <h2 className="text-gray-900 text-lg font-semibold">
            Mentee: {session.mentee}
          </h2>
          <p className="text-gray-700">Date: {session.date}</p>
          <p className="text-gray-700">Time: {session.time}</p>
          <p className="text-gray-700">Status: {session.status}</p>
        </div>
        {session.status === "upcoming" ? (
          <div className="flex flex-row gap-2">
            <button className="bg-green-500 p-2 rounded-lg text-white cursor-pointer hover:bg-green-400">
              Accept
            </button>
            <button className="bg-red-500 p-2 rounded-lg text-white cursor-pointer hover:bg-red-400">
              Reject
            </button>
          </div>
        ) : (
          <div className="flex flex-row gap-2">
            <form action="" className="flex flex-col">
              <label htmlFor="mentor-comment">Leave a comment</label>
              <textarea
                name="mentorComment"
                id="mentor-comment"
                placeholder="Leave a comment"
                className="border border-gray-200 w-100 h-50 outline-none p-2 rounded-lg"
              ></textarea>
              <button type="submit" className="bg-gray-900 p-2 rounded-lg text-white cursor-pointer hover:bg-gray-800">Submit</button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
