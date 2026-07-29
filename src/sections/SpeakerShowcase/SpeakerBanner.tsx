type SpeakerBannerProps = {
  desktopBanner?: string;
  mobileBanner?: string;
};

export default function SpeakerBanner({
  desktopBanner,
  mobileBanner,
}: SpeakerBannerProps) {
  if (!desktopBanner && !mobileBanner) return null;

  return (
    <div className="mt-16 overflow-hidden rounded-3xl border border-white/10">
      <picture>
        {desktopBanner && (
          <source
            media="(min-width:768px)"
            srcSet={desktopBanner}
          />
        )}

        <img
          src={mobileBanner || desktopBanner}
          alt="Featured Speakers"
          loading="lazy"
          className="block w-full"
        />
      </picture>
    </div>
  );
}