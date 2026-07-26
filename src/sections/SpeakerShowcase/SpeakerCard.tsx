import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../../lib/sanity.client";
import type { Speaker } from "../../types/speaker";

const builder = imageUrlBuilder(sanityClient);

function urlFor(source: unknown) {
  return builder.image(source).width(600).height(600).url();
}

interface SpeakerCardProps {
  speaker: Speaker;
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md transition hover:border-green-400/30 hover:bg-white/10">
      <img
        src={urlFor(speaker.photo)}
        alt={speaker.name}
        className="aspect-square w-full object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white">
          {speaker.name}
        </h3>

        <p className="mt-1 text-green-400">
          {speaker.role}
        </p>

        <p className="text-sm text-slate-400">
          {speaker.company}
        </p>

        <p className="mt-5 line-clamp-4 text-sm leading-7 text-slate-300">
          {speaker.bio}
        </p>

        <button className="mt-6 font-medium text-green-400 transition hover:text-green-300">
          View Profile →
        </button>
      </div>
    </article>
  );
}