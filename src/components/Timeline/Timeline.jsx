import TimelineCard from './TimelineCard';
import { timeline } from '../../data/timeline';

function Timeline() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="font-bold text-3xl mb-6">Lil Dream Timeline</h1>

      <section className="space-y-4 w-full max-w-lg">
        {timeline.map((entry, i) => (
          <TimelineCard key={i} {...entry} />
        ))}
      </section>
    </div>
  );
}

export default Timeline;
