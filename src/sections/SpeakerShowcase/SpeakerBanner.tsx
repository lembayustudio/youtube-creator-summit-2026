import { urlFor } from "../../lib/imageUrl";

interface SpeakerBannerProps {
  bannerImage?: {
    asset?: {
      _ref?: string;
      url?: string;
    };
  };
}

export default function SpeakerBanner({
  bannerImage,
}: SpeakerBannerProps) {
  if (!bannerImage) return null;

  return (
    <div className="mt-16 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-1.5 shadow-2xl shadow-green-500/10 backdrop-blur-sm">
      <img
        src={urlFor(bannerImage).url()}
        alt="Featured speakers"
        className="w-full rounded-[24px]"
      />
    </div>
  );
}