import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { HeroRefined } from "@/components/home/sections/variants/HeroRefined";
import { HeroAthletic } from "@/components/home/sections/variants/HeroAthletic";
import { HeroEditorial } from "@/components/home/sections/variants/HeroEditorial";
import { HeroSleek } from "@/components/home/sections/variants/HeroSleek";

// TEMPORARY design-exploration route. Not linked, not indexed.
// Removed once a hero direction is chosen.
export const metadata: Metadata = {
  title: "Design Lab",
  robots: { index: false, follow: false },
};

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600"],
});

export default function DesignLabPage() {
  return (
    <main>
      <div id="variant-refined">
        <HeroRefined />
      </div>
      <div id="variant-athletic">
        <HeroAthletic />
      </div>
      <div id="variant-editorial" className={fraunces.variable}>
        <HeroEditorial />
      </div>
      <div id="variant-sleek">
        <HeroSleek />
      </div>
    </main>
  );
}
