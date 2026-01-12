export default function SpinWheelHeader() {
  return (
    <div className="text-center mb-10 space-y-2">
      <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-lg">
        <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-blue-100 to-white/70">
          Spin Wheel Names
        </span>
      </h1>
      <p className="text-blue-100/60 text-lg font-normal max-w-xl mx-auto">
        Randomly select a winner from your list with our vibrant generator.
      </p>
    </div>
  );
}
