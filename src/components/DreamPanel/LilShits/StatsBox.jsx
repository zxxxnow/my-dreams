import { getCountdownData } from '../../../utils/getCountdownData';

function StatsBox() {
  const {
    today,
    roadStart,
    softEnd,
    hardEnd,
    daysUntilRoadStart,
    daysOnRoad,
    daysUntilEnd
  } = getCountdownData();

  return (
    <div className="bg-white text-black shadow-lg p-4 rounded-xl">
      <hr className="my-3" />

      <p className="font-bold text-blue-700 mb-1">Road Begins:</p>
      <p className="mb-1">{roadStart}</p>
      <p className="text-sm text-gray-700 mb-2">
        {daysUntilRoadStart > 0
          ? `Road begins in ${daysUntilRoadStart} days`
          : `On the road for ${daysOnRoad} days`}
      </p>

      <p className="font-bold text-red-700 mb-1">The End of the World:</p>
      <p className="mb-1">Prophecy marks the night of Thu, Oct 31, 2025</p>
      <p className="text-sm text-gray-700 italic">Last moonlight allowed: {hardEnd}</p>
      <p className="text-gray-800 text-sm mb-2">Countdown to final day: {daysUntilEnd}</p>

      <p className="text-gray-500 text-sm">Today is: {today}</p>
    </div>
  );
}

export default StatsBox;
