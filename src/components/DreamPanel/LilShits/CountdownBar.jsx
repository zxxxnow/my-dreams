import { getCountdownData } from "../../../utils/getCountdownData";

function CountdownBar() {
  const { exilePercentage, daysSinceExileStart, totalExileDays } = getCountdownData();

  return (
    <div className="bg-gray-800 text-white shadow-lg p-4 rounded-xl">
      <h5 className="text-center font-semibold">Maximum Deadline Completion</h5>
      <div className="w-full bg-gray-700 rounded h-5 overflow-hidden my-3">
        <div
          className="bg-green-500 h-full text-sm text-center text-white transition-all duration-500"
          style={{ width: `${exilePercentage}%` }}
        >
          {exilePercentage}%
        </div>
      </div>
      <p className="text-sm text-center">
        Deadline Finished
      </p>

      {/* Success Box */}
      <div className="mt-4 p-3 bg-green-700 border border-green-500 rounded-lg text-center">
        <p className="text-sm font-medium">
          Completed Sunday 2nd at 6 - 7 pm SF time
        </p>
      </div>
    </div>
  );
}

export default CountdownBar;