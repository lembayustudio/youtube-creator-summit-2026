import type { FeaturedSpeaker } from "../../types/featuredSpeakers";
import SpeakerCard from "./SpeakerCard";

interface SpeakerCardsProps {
  speakers: FeaturedSpeaker[];
}

export default function SpeakerCards({
  speakers,
}: SpeakerCardsProps) {
  if (!speakers.length) return null;

  const count = speakers.length;

  const gridClass =
    count === 1
      ? "mx-auto max-w-md"
      : count === 2
      ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
      : count === 3
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      : "grid-cols-1 md:grid-cols-2";

  return (
    <div className={`mt-16 grid gap-8 ${gridClass}`}>
      {speakers.map((speaker) => (
        <SpeakerCard
          key={speaker.name}
          speaker={speaker}
        />
      ))}
    </div>
  );
}