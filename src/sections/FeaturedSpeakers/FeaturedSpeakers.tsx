export default function FeaturedSpeakers() {
  return (
    <section id="featured-speakers" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
            Meet The Speakers
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Learn From Malaysia's Leading Creators
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Hear real experiences, practical strategies and proven insights
            from creators who have built successful brands and communities.
          </p>
        </div>

        {/* Speaker showcase akan dibina pada langkah seterusnya */}
      </div>
    </section>
  );
}