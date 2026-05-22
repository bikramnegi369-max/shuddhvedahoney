import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col items-center relative">
      <div
        className="
      absolute
      inset-0
      scale-150
      rounded-full
      bg-amber-300/10
      blur-[100px]
    "
      />
      <div
        className="
        relative
        flex
        h-64
        w-64
        items-center
        justify-center
        rounded-full
        border
        border-amber-400/40
      "
      >
        <Image
          src="/logo.svg"
          alt="Logo"
          fill
          priority
          quality={90}
          className="object-contain"
        />
      </div>

      {/* <span
        className="
        mt-5
        text-2xl
        font-light
        tracking-[0.5em]
        text-white
      "
      >
        SHUDDHVEDA HONEY
      </span> */}
    </div>
  );
}
