export default function JsonFormatterHeader() {
  return (
    <section className="flex flex-col gap-3 py-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white leading-tight">
            JSON Formatter
          </h1>
          <p className="text-[#92adc9] text-base md:text-lg max-w-2xl font-normal leading-relaxed">
            Format, validate, and beautify JSON with real-time syntax
            highlighting. Support for minify, escape, and key sorting.
          </p>
        </div>
      </div>
    </section>
  );
}
