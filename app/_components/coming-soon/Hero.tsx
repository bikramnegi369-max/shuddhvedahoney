import Image from "next/image";
import Logo from "./Logo";
import BeeLayer from "./BeeLayer";
import PollenLayer from "./Pollen";

export default function Hero() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}

      <Image
        src="/hero-bg.webp"
        alt=""
        fill
        priority
        unoptimized
        className="object-cover"
      />

      {/* Overlays */}

      {/* <div className="absolute inset-0 bg-black/55" /> */}

      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/80" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      <PollenLayer />

      <BeeLayer />

      {/* Content */}

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-5xl">
          <div
            className="
            rounded-4xl
            p-8
            md:p-14
          "
          >
            <div className="text-center">
              <Logo />

              <p
                className="
                mt-12
                text-xs
                uppercase
                tracking-[0.4em]
                text-amber-300
              "
              >
                HARVESTED BY NATURE
              </p>

              <h1
                className="
                mt-6
                text-5xl
                font-extralight
                tracking-[0.15em]
                text-white
                md:text-7xl
                lg:text-8xl
              "
              >
                COMING SOON
              </h1>

              <div className="mx-auto mt-8 h-px w-24 bg-amber-300" />

              <p
                className="
                mx-auto
                mt-8
                max-w-2xl
                text-base
                leading-relaxed
                text-gray-300
                md:text-lg
              "
              >
                Pure, raw, and gathered with care from nature&rsquo;s finest
                blooms. A new experience in authentic honey is arriving soon.
              </p>

              {/* <div className="mt-12">
                <WaitlistForm />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
