import { useState } from "react";
import { ChevronLeft } from "lucide-react";

export default function MenteeRequests() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      menteeName: "Alice Johnson",
      topic: "Data Science Career Guidance",
    },
    {
      id: 2,
      menteeName: "Brian Smith",
      topic: "Frontend React Best Practices",
    },
  ]);

  const handleDecision = (id, decision) => {
    setRequests((prev) => prev.filter((req) => req.id !== id));

    alert(`You have ${decision} this request.`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 flex flex-row gap-2 items-center">
        <ChevronLeft onClick={() => window.history.back()} />
        Mentee Mentorship Requests
      </h1>

      {requests.length === 0 ? (
        <p className="text-gray-600">No pending requests.</p>
      ) : (
        <div className="space-y-4 max-w-md">
          {requests.map((req) => (
            <div
              key={req.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-4"
            >
              <h2 className="text-lg font-semibold">{req.menteeName}</h2>
              <p className="text-gray-700 mb-4">{req.topic}</p>

              <div className="flex space-x-3">
                <button
                  onClick={() => handleDecision(req.id, "accepted")}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleDecision(req.id, "rejected")}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
