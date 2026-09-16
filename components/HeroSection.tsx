import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="w-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-start gap-5 sm:gap-7">

        {/* Headline */}
        <h1
          className="heading-display leading-[1.05] text-left"
          style={{ fontSize: 'clamp(44px, 10.5vw, 140px)' }}
        >
          <span className="block text-foreground">I&apos;m Kartik</span>
          <span className="block text-foreground">Bhalerao<span className="text-primary">.</span></span>
        </h1>

        <p className="text-left text-muted-foreground text-[18px] sm:text-[22px] max-w-2xl leading-relaxed">
          I&apos;m building products for B2B, B2C, and more — turning user problems into products people actually use.
        </p>

        <p className="text-left text-muted-foreground text-[15px] sm:text-[16px] mt-2">
          I work with different kinds of startups.{" "}
          <Link
            href="/about"
            className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            Want to know more?
          </Link>
        </p>

      </div>
    </section>
  );
};
