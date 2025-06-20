import TimelineCard from './TimelineCard';
import { timeline } from '../../data/timeline';

function Timeline() {
  return (
    <section className="space-y-4 w-full max-w-lg">
      {timeline.map((entry, i) => (
        <TimelineCard key={i} {...entry} />
      ))}
    </section>
  );
}

export default Timeline;
