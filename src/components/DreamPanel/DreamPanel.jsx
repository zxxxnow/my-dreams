import StatsBox from './LilShits/StatsBox';
import CountdownBar from './LilShits/CountdownBar';

function DreamPanel() {
  return (
    <aside className="hidden md:block w-80 p-4 space-y-6">
      <StatsBox />
      <CountdownBar />
    </aside>
  );
}

export default DreamPanel;
