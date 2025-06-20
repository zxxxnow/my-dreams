export function getCountdownData() {
  const today = new Date();

  const exileStartDate = new Date('2024-05-08');       // Arrival in the USA
  const roadStartDate = new Date('2025-07-15');        // Road officially begins
  const softEnd = new Date('2025-10-31');              // Prophetic end
  const hardEnd = new Date('2025-11-04T23:59:59');     // Final cutoff

  const format = (d) =>
    d.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  const msPerDay = 1000 * 60 * 60 * 24;
  const diffInDays = (d1, d2) => Math.floor((d2 - d1) / msPerDay);

  // Exile Progress (May 8, 2024 → Nov 4, 2025)
  const totalExileDays = diffInDays(exileStartDate, hardEnd);
  const daysSinceExileStart = Math.max(0, diffInDays(exileStartDate, today));
  const exilePercentage = Math.min(100, Math.round((daysSinceExileStart / totalExileDays) * 100));

  // Road Progress (July 15, 2025 → Nov 4, 2025)
  const totalRoadDays = diffInDays(roadStartDate, hardEnd);
  const daysUntilRoadStart = Math.max(0, diffInDays(today, roadStartDate));
  const daysOnRoad = Math.max(0, diffInDays(roadStartDate, today));
  const roadPercentage = today < roadStartDate
    ? 0
    : Math.min(100, Math.round((daysOnRoad / totalRoadDays) * 100));

  // End Countdown (today → Nov 4)
  const daysUntilEnd = Math.max(0, diffInDays(today, hardEnd));

  return {
    today: format(today),

    // Formatted Dates
    exileStart: format(exileStartDate),
    roadStart: format(roadStartDate),
    softEnd: format(softEnd),
    hardEnd: format(hardEnd),

    // Exile Data
    daysSinceExileStart,
    totalExileDays,
    exilePercentage,

    // Road Data
    daysUntilRoadStart,
    daysOnRoad,
    totalRoadDays,
    roadPercentage,

    // Final Countdown
    daysUntilEnd
  };
}
