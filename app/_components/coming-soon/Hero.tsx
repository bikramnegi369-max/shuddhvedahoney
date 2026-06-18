import Image from "next/image";
import { BadgeCheck, Leaf, Sparkles, Sprout } from "lucide-react";
import Logo from "./Logo";
import BeeLayer from "./BeeLayer";
import PollenLayer from "./Pollen";

const highlights = [
  {
    label: "100% Organic & Natural",
    icon: Leaf,
  },
  {
    label: "Rich in Nutrients & Taste",
    icon: Sparkles,
  },
  {
    label: "100% Pure Honey",
    icon: BadgeCheck,
  },
  {
    label: "Sustainably Sourced",
    icon: Sprout,
  },
];

export default function Hero() {
  return (
    <main className="relative h-dvh overflow-hidden bg-[#2d1b08]">
      <p className="hidden">
        organic honey, pure organic honey, natural organic honey, 100% organic
        honey, raw organic honey, certified organic honey, organic forest honey,
        organic wild honey, organic bee honey, premium organic honey, buy
        organic honey online, best organic honey in India, organic honey price,
        organic honey near me, organic honey brand, premium honey online, pure
        honey online, natural honey online, organic honey jar, organic honey
        supplier
      </p>
      <Image
        src="/hero-bg.webp"
        alt=""
        fill
        priority
        unoptimized
        className="object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-b from-[#201105]/15 via-[#5d3510]/28 to-[#211104]/55" />
      <div className="absolute inset-0 bg-linear-to-r from-[#201105]/58 via-[#3c220b]/20 to-[#2a1706]/38" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#1b0e04]/80 to-transparent" />

      <PollenLayer />
      <BeeLayer />

      <section className="relative z-10 flex h-dvh items-center justify-center px-4 py-3 text-center sm:px-6">
        <div className="mx-auto flex max-h-full w-full max-w-4xl flex-col items-center">
          <Logo />

          <p className="mt-3 text-xs md:text-lg font-semibold uppercase tracking-[0.22em] text-amber-100 sm:mt-4 ">
            Nature&rsquo;s Sweetness
          </p>

          <h1 className="mt-2 text-4xl font-semibold leading-none text-[#fcd705] sm:mt-2 sm:text-6xl lg:text-7xl">
            Coming Soon
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-50/90 sm:mt-4 sm:text-base sm:leading-7 md:text-lg md:leading-8">
            Experience the true taste of nature with our premium organic honey -
            pure, natural, and crafted with care. Sourced responsibly and made
            to bring authentic goodness straight from nature to your home.
          </p>

          <p className="mt-2 max-w-2xl text-xs leading-5 text-emerald-50/82 sm:mt-3 sm:text-sm sm:leading-6 md:text-base">
            We believe in purity, quality, and preserving nature&rsquo;s
            original essence in every drop.
          </p>

          <div className="mt-3 grid w-full max-w-2xl grid-cols-2 gap-2 sm:mt-4 sm:gap-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex min-h-11 items-center gap-2 border border-amber-50/18 bg-white/12 px-2.5 py-2 text-left shadow-[0_18px_45px_rgba(0,0,0,0.16)] backdrop-blur-md sm:min-h-14 sm:gap-3 sm:px-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-amber-100/40 bg-amber-100/18 text-amber-50 sm:h-9 sm:w-9">
                    <Icon aria-hidden="true" size={17} strokeWidth={1.8} />
                  </span>
                  <span className="text-[0.72rem] font-medium leading-4 text-white sm:text-sm">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-white sm:mt-4 sm:text-base md:text-lg">
            A sweeter, healthier journey is arriving soon.
          </p>

          <p className="mt-2 max-w-xl text-xs leading-5 text-stone-50/80 sm:text-sm sm:leading-6 md:text-base">
            Stay connected and be the first to experience nature&rsquo;s golden
            goodness.
          </p>
        </div>
      </section>
    </main>
  );
}
