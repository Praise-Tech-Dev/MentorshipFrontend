import { useState } from "react";
import { ChevronLeft, ArrowBigLeft } from "lucide-react";

function MentorAvailability() {
  const [day, setDay] = useState("Monday");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [availability, setAvailability] = useState([]);

  const handleAddAvailability = () => {
    if (!startTime || !endTime) {
      alert("Please select start and end times.");
      return;
    }

    const newBlock = { day, startTime, endTime };
    setAvailability([...availability, newBlock]);

    // Reset inputs
    setStartTime("");
    setEndTime("");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 flex flex-row gap-2 items-center">
        <ChevronLeft onClick={() => window.history.back()} />
        Set Your Weekly Availability
      </h1>

      <div className="bg-white shadow rounded-lg p-4 mb-6 max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Day</label>
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Start Time</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">End Time</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          onClick={handleAddAvailability}
          className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 cursor-pointer transition"
        >
          Add Availability
        </button>
      </div>

      <div className="max-w-md">
        <h2 className="text-xl font-semibold mb-3">Your Weekly Availability</h2>
        {availability.length === 0 ? (
          <p className="text-gray-600">No availability blocks added yet.</p>
        ) : (
          <div className="space-y-3">
            {availability.map((block, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-3 bg-white shadow-sm"
              >
                <p className="font-medium">{block.day}</p>
                <p className="text-gray-700">
                  {block.startTime} – {block.endTime}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MentorAvailability;
