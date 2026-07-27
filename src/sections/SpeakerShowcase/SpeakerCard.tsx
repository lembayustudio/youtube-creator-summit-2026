import { motion } from "motion/react";
import type { FeaturedSpeaker } from "../../types/featuredSpeakers";

interface SpeakerCardProps {
  speaker: FeaturedSpeaker;
}

export default function SpeakerCard({
  speaker,
}: SpeakerCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        {speaker.photo?.asset?.url && (
          <img
            src={speaker.photo.asset.url}
            alt={speaker.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        )}

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-md">
          <h3 className="text-2xl font-semibold text-white">
            {speaker.name}
          </h3>

          <p className="mt-1 text-sm font-medium text-green-400">
            {speaker.role}
          </p>

          {speaker.company && (
            <p className="mt-1 text-sm text-slate-300">
              {speaker.company}
            </p>
          )}

          {speaker.bio && (
            <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-300">
              {speaker.bio}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}