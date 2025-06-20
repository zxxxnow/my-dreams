function TimelineCard({ date, title, desc, badgeColor }) {
  return (
    <div className="bg-gray-700 p-4 rounded-lg text-left">
      <span className={`${badgeColor} text-white text-xs px-2 py-1 rounded`}>{date}</span>
      <h6 className="text-lg mt-2 font-semibold">{title}</h6>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}

export default TimelineCard;
