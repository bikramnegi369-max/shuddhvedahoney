import Image from "next/image";

export default function Logo() {
  return (
    <div className="relative flex flex-col items-center">
      <div
        className="
        relative
        flex
        h-28
        w-28
        items-center
        justify-center
        rounded-full
        border
        border-amber-200/45
        bg-black/20
        shadow-[0_20px_60px_rgba(0,0,0,0.24)]
        backdrop-blur-sm
        sm:h-32
        sm:w-32
        md:h-40
        md:w-40
      "
      >
        <Image
          src="/logo.webp"
          alt="ShuddhVeda Honey logo"
          fill
          unoptimized
          className="object-contain p-3"
        />
      </div>
    </div>
  );
}
