import React from "react";
const ImportantDates = () => {
  return (
    <div>
      <div
        id="next"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <table className="border-collapse">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left">Event</th>
                <th className="px-6 py-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-3">Registration Opens</td>
                <td className="px-6 py-3">April 1, 2026</td>
              </tr>
              <tr>
                <td className="px-6 py-3">Submission Deadline</td>
                <td className="px-6 py-3">May 15, 2026</td>
              </tr>
              <tr>
                <td className="px-6 py-3">Conference Date</td>
                <td className="px-6 py-3">July 10, 2026</td>
              </tr>
            </tbody>
          </table>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Key dates for submission, review, and conference events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;
