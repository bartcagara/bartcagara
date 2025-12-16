import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, X } from "lucide-react";
import { TrustedBy } from "@/components/home/TrustedBy";
import { ResultsSection } from "@/components/home/ResultsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F4F6] text-[#09071D] font-sans selection:bg-[#456D8B] selection:text-white">

      {/* 1. HERO SECTION (Lethal Left Align) */}
      <section className="border-b-2 border-[#09071D]">
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
          <h1 className="text-7xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] mb-12 text-[#09071D] max-w-5xl">
            Stop The Decline.<br />
            <span className="text-[#456D8B]">Reclaim The Athlete.</span>
          </h1>

          <div className="border-l-4 border-[#09071D] pl-8 max-w-2xl mb-12">
            <p className="text-xl md:text-2xl font-medium text-[#09071D]/80 leading-relaxed">
              For the former-athlete executive whose physical decline just got real. You can’t afford to run the old playbook anymore.
            </p>
          </div>

          <Link
            href="https://cal.com/bartcagara/discovery-call"
            className="inline-flex items-center gap-3 bg-[#09071D] text-white px-6 py-4 text-base md:px-10 md:py-6 md:text-xl font-bold uppercase tracking-wider border-2 border-[#09071D] shadow-[4px_4px_0px_0px_#456D8B] md:shadow-[6px_6px_0px_0px_#456D8B] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
          >
            Book Discovery Call
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </div>
      </section>

      {/* TRUSTED BY */}
      <div className="border-b-2 border-[#09071D] bg-[#F3F4F6]">
        <TrustedBy />
      </div>

      {/* 2. THE DIAGNOSIS (De-Boxed Editorial) */}
      <section className="py-24 md:py-32 border-b-2 border-[#09071D] bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
            <div className="inline-block bg-[var(--bleu-accent)] text-white font-mono text-xs uppercase tracking-widest px-3 py-1 mb-8 shadow-[4px_4px_0px_0px_var(--bleu-nuit)]">
              The Diagnosis
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-[#09071D] mb-8">
              YOU ARE GRINDING<br />LIKE A ROOKIE.
            </h2>
            <h3 className="text-2xl md:text-3xl font-medium text-[#09071D]/60 max-w-3xl leading-tight">
              Fighting your physiology.<br />
              Relying on willpower.<br />
              Forcing the game.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-32">
            {/* Diet Pillar */}
            <div>
              <h4 className="text-3xl font-black uppercase mb-8 text-[#09071D] border-b-2 border-[#09071D] pb-4 inline-block">Diet</h4>
              <ul className="space-y-8">
                <li className="group">
                  <div className="flex items-start gap-4 mb-2">
                    <X className="w-8 h-8 text-red-500 flex-shrink-0" strokeWidth={3} />
                    <span className="text-2xl font-bold text-[#09071D]">Frustration leading to restrictive diets you can't maintain.</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-4 mb-2">
                    <X className="w-8 h-8 text-red-500 flex-shrink-0" strokeWidth={3} />
                    <span className="text-2xl font-bold text-[#09071D]">White-knuckling Mon-Thu. Collapsing on the weekend.</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-4 mb-2">
                    <X className="w-8 h-8 text-red-500 flex-shrink-0" strokeWidth={3} />
                    <span className="text-2xl font-bold text-[#09071D]">One business trip destroys weeks of progress.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Training Pillar */}
            <div>
              <h4 className="text-3xl font-black uppercase mb-8 text-[#09071D] border-b-2 border-[#09071D] pb-4 inline-block">Training</h4>
              <ul className="space-y-8">
                <li className="group">
                  <div className="flex items-start gap-4 mb-2">
                    <X className="w-8 h-8 text-red-500 flex-shrink-0" strokeWidth={3} />
                    <span className="text-2xl font-bold text-[#09071D]">Using "College Athlete" logic on a 40-year-old body.</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-4 mb-2">
                    <X className="w-8 h-8 text-red-500 flex-shrink-0" strokeWidth={3} />
                    <span className="text-2xl font-bold text-[#09071D]">The "All-or-Nothing" loop: 2 weeks on, 2 months off.</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-4 mb-2">
                    <X className="w-8 h-8 text-red-500 flex-shrink-0" strokeWidth={3} />
                    <span className="text-2xl font-bold text-[#09071D]">Burning calories, but never building muscle.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t-2 border-[#09071D]/20">
            <p className="text-2xl md:text-4xl font-black text-[#09071D] leading-tight max-w-4xl">
              The outcome? You stay trapped in the restart cycle, managing a physical decline instead of reversing it.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE SOLUTION (De-Boxed Inverse) */}
      <section className="py-24 md:py-32 border-b-2 border-[#09071D] bg-[#09071D] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
            <div className="inline-block bg-[var(--bleu-accent)] text-white font-mono text-xs uppercase tracking-widest px-3 py-1 mb-8 shadow-[4px_4px_0px_0px_white]">
              The Solution
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              START OPERATING<br />LIKE A VETERAN.
            </h2>
            <h3 className="text-2xl md:text-3xl font-medium text-white/60 max-w-3xl leading-tight">
              Picking your spots.<br />
              Managing your energy.<br />
              Letting the game come to you.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-32">
            {/* Diet Pillar */}
            <div>
              <h4 className="text-3xl font-black uppercase mb-8 text-white border-b-2 border-[#456D8B] pb-4 inline-block">Diet</h4>
              <ul className="space-y-8">
                <li className="group">
                  <div className="flex items-start gap-4 mb-2">
                    <Check className="w-8 h-8 text-[#456D8B] flex-shrink-0" strokeWidth={3} />
                    <span className="text-2xl font-bold">Nutrition without the starvation.</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-4 mb-2">
                    <Check className="w-8 h-8 text-[#456D8B] flex-shrink-0" strokeWidth={3} />
                    <span className="text-2xl font-bold">Dining out without looking like the "diet guy."</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-4 mb-2">
                    <Check className="w-8 h-8 text-[#456D8B] flex-shrink-0" strokeWidth={3} />
                    <span className="text-2xl font-bold">Traveling without losing momentum.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Training Pillar */}
            <div>
              <h4 className="text-3xl font-black uppercase mb-8 text-white border-b-2 border-[#456D8B] pb-4 inline-block">Training</h4>
              <ul className="space-y-8">
                <li className="group">
                  <div className="flex items-start gap-4 mb-2">
                    <Check className="w-8 h-8 text-[#456D8B] flex-shrink-0" strokeWidth={3} />
                    <span className="text-2xl font-bold">Short, targeted sessions. Zero wasted effort.</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-4 mb-2">
                    <Check className="w-8 h-8 text-[#456D8B] flex-shrink-0" strokeWidth={3} />
                    <span className="text-2xl font-bold">Building muscle with hotel gym dumbbells.</span>
                  </div>
                </li>
                <li className="group">
                  <div className="flex items-start gap-4 mb-2">
                    <Check className="w-8 h-8 text-[#456D8B] flex-shrink-0" strokeWidth={3} />
                    <span className="text-2xl font-bold">Injury prevention built into every session.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t-2 border-white/20">
            <p className="text-2xl md:text-4xl font-black text-white leading-tight max-w-4xl">
              The outcome? A system that absorbs the chaos. You look athletic and feel dangerous, no matter where the job takes you.
            </p>
          </div>
        </div>
      </section>

      {/* 4. THE RESULTS (Light again for Rhythm) */}
      <section className="border-b-2 border-[#09071D]">
        <ResultsSection />
      </section>

      {/* 5. THE PROGRAM (Tactical Roadmap - OS) */}
      <section id="program" className="py-24 md:py-32 border-b-2 border-[#09071D] bg-[#09071D] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24">
            <div className="inline-block bg-[var(--bleu-accent)] text-white font-mono text-xs uppercase tracking-widest px-3 py-1 mb-8 shadow-[4px_4px_0px_0px_white]">
              The Program
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white mb-8">
              Executive<br />Athlete OS
            </h2>
            <p className="text-xl md:text-3xl font-medium text-white/70 max-w-3xl leading-relaxed">
              A 4-phase program to rebuild your infrastructure without pausing your career.
            </p>
          </div>

          {/* VERTICAL TIMELINE - LETHAL BULLET PROTOCOL */}
          <div className="relative mt-24">
            {/* Vertical Line */}
            <div className="absolute left-[19px] top-4 bottom-0 w-0.5 bg-white/20 md:left-[2.5rem]"></div>

            {/* 01. THE RESET */}
            <div className="relative pl-20 md:pl-32 mb-20">
              <span className="absolute left-0 top-[-10px] text-5xl md:text-7xl font-black text-[#456D8B] bg-[#09071D] leading-none z-10 pr-2">01</span>
              <div className="border-b-2 border-white/10 pb-12">
                <h3 className="text-4xl font-black uppercase mb-4 text-white leading-none">
                  The Reset
                  <span className="text-[#456D8B] text-2xl block mt-2 font-bold tracking-wider">(Weeks 1-4)</span>
                </h3>

                {/* FOCUS */}
                <div className="mb-6">
                  <span className="font-mono text-[#456D8B] tracking-widest uppercase text-sm bg-white/5 px-2 py-1 inline-block">
                          // FOCUS: IMMEDIATE CONTROL
                  </span>
                </div>

                {/* PROTOCOL */}
                <ul className="text-xl text-white/80 leading-relaxed font-medium mb-8 max-w-3xl space-y-2">
                  <li className="flex items-start"><span className="text-[#456D8B] mr-4 font-black">/</span><span><strong className="text-white">Metabolic Repair</strong> (Eat more, burn more).</span></li>
                  <li className="flex items-start"><span className="text-[#456D8B] mr-4 font-black">/</span><span><strong className="text-white">The 30-Minute Baseline</strong> (Strength foundation).</span></li>
                  <li className="flex items-start"><span className="text-[#456D8B] mr-4 font-black">/</span><span><strong className="text-white">Energy Systems</strong> (Eliminating the afternoon crash).</span></li>
                </ul>

                {/* THE WIN */}
                <div className="inline-block bg-[#456D8B] p-4 shadow-[4px_4px_0px_0px_white]">
                  <span className="font-black text-white uppercase tracking-wider block mb-1 text-sm opacity-70">THE WIN:</span>
                  <span className="font-black text-white uppercase tracking-wider text-lg md:text-xl leading-tight block">
                    YOU DROP THE FIRST 10-15 LBS AND WAKE UP WITH ENERGY.
                  </span>
                </div>
              </div>
            </div>

            {/* 02. THE BUILD */}
            <div className="relative pl-20 md:pl-32 mb-20">
              <span className="absolute left-0 top-[-10px] text-5xl md:text-7xl font-black text-[#456D8B] bg-[#09071D] leading-none z-10 pr-2">02</span>
              <div className="border-b-2 border-white/10 pb-12">
                <h3 className="text-4xl font-black uppercase mb-4 text-white leading-none">
                  The Build
                  <span className="text-[#456D8B] text-2xl block mt-2 font-bold tracking-wider">(Weeks 5-8)</span>
                </h3>

                {/* FOCUS */}
                <div className="mb-6">
                  <span className="font-mono text-[#456D8B] tracking-widest uppercase text-sm bg-white/5 px-2 py-1 inline-block">
                          // FOCUS: PHYSIQUE CONSTRUCTION
                  </span>
                </div>

                {/* PROTOCOL */}
                <ul className="text-xl text-white/80 leading-relaxed font-medium mb-8 max-w-3xl space-y-2">
                  <li className="flex items-start"><span className="text-[#456D8B] mr-4 font-black">/</span><span><strong className="text-white">Hypertrophy Training</strong> (Building the V-Taper).</span></li>
                  <li className="flex items-start"><span className="text-[#456D8B] mr-4 font-black">/</span><span><strong className="text-white">Travel-Proofing</strong> (Airport & Hotel systems).</span></li>
                  <li className="flex items-start"><span className="text-[#456D8B] mr-4 font-black">/</span><span><strong className="text-white">Athletic Movement</strong> (Re-introducing flow).</span></li>
                </ul>

                {/* THE WIN */}
                <div className="inline-block bg-[#456D8B] p-4 shadow-[4px_4px_0px_0px_white]">
                  <span className="font-black text-white uppercase tracking-wider block mb-1 text-sm opacity-70">THE WIN:</span>
                  <span className="font-black text-white uppercase tracking-wider text-lg md:text-xl leading-tight block">
                    THE SHIRT GETS TIGHTER IN THE SHOULDERS, LOOSER IN THE WAIST.
                  </span>
                </div>
              </div>
            </div>

            {/* 03. THE ARMOR */}
            <div className="relative pl-20 md:pl-32 mb-20">
              <span className="absolute left-0 top-[-10px] text-5xl md:text-7xl font-black text-[#456D8B] bg-[#09071D] leading-none z-10 pr-2">03</span>
              <div className="border-b-2 border-white/10 pb-12">
                <h3 className="text-4xl font-black uppercase mb-4 text-white leading-none">
                  The Armor
                  <span className="text-[#456D8B] text-2xl block mt-2 font-bold tracking-wider">(Weeks 9-12)</span>
                </h3>

                {/* FOCUS */}
                <div className="mb-6">
                  <span className="font-mono text-[#456D8B] tracking-widest uppercase text-sm bg-white/5 px-2 py-1 inline-block">
                          // FOCUS: SOCIAL COMMAND
                  </span>
                </div>

                {/* PROTOCOL */}
                <ul className="text-xl text-white/80 leading-relaxed font-medium mb-8 max-w-3xl space-y-2">
                  <li className="flex items-start"><span className="text-[#456D8B] mr-4 font-black">/</span><span><strong className="text-white">Restaurant Protocols</strong> (Navigating dinners & alcohol).</span></li>
                  <li className="flex items-start"><span className="text-[#456D8B] mr-4 font-black">/</span><span><strong className="text-white">Bloodwork Analysis</strong> (Data-driven optimization).</span></li>
                  <li className="flex items-start"><span className="text-[#456D8B] mr-4 font-black">/</span><span><strong className="text-white">Anti-Fragility</strong> (Injury prevention & mobility).</span></li>
                </ul>

                {/* THE WIN */}
                <div className="inline-block bg-[#456D8B] p-4 shadow-[4px_4px_0px_0px_white]">
                  <span className="font-black text-white uppercase tracking-wider block mb-1 text-sm opacity-70">THE WIN:</span>
                  <span className="font-black text-white uppercase tracking-wider text-lg md:text-xl leading-tight block">
                    YOU NAVIGATE HIGH-STAKES DINNERS WITHOUT BREAKING STRIDE.
                  </span>
                </div>
              </div>
            </div>

            {/* 04. THE EXIT */}
            <div className="relative pl-20 md:pl-32">
              <span className="absolute left-0 top-[-10px] text-5xl md:text-7xl font-black text-[#456D8B] bg-[#09071D] leading-none z-10 pr-2">04</span>
              <div>
                <h3 className="text-4xl font-black uppercase mb-4 text-white leading-none">
                  The Exit
                  <span className="text-[#456D8B] text-2xl block mt-2 font-bold tracking-wider">(Weeks 13-24)</span>
                </h3>

                {/* FOCUS */}
                <div className="mb-6">
                  <span className="font-mono text-[#456D8B] tracking-widest uppercase text-sm bg-white/5 px-2 py-1 inline-block">
                          // FOCUS: FULL AUTONOMY
                  </span>
                </div>

                {/* PROTOCOL */}
                <ul className="text-xl text-white/80 leading-relaxed font-medium mb-8 max-w-3xl space-y-2">
                  <li className="flex items-start"><span className="text-[#456D8B] mr-4 font-black">/</span><span><strong className="text-white">Intuitive Transition</strong> (From "coached" to "autonomous").</span></li>
                  <li className="flex items-start"><span className="text-[#456D8B] mr-4 font-black">/</span><span><strong className="text-white">Longevity Protocols</strong> (Healthspan extension).</span></li>
                  <li className="flex items-start"><span className="text-[#456D8B] mr-4 font-black">/</span><span><strong className="text-white">The System Handoff</strong> (You become the captain).</span></li>
                </ul>

                {/* THE WIN */}
                <div className="inline-block bg-[#456D8B] p-4 shadow-[4px_4px_0px_0px_white]">
                  <span className="font-black text-white uppercase tracking-wider block mb-1 text-sm opacity-70">THE WIN:</span>
                  <span className="font-black text-white uppercase tracking-wider text-lg md:text-xl leading-tight block">
                    YOU FIRE ME. YOU OWN THE SYSTEM FOR LIFE.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ABOUT ME (Refactored Title Placement - Light Mode) */}
      <section id="about" className="py-24 md:py-32 border-b-2 border-[#09071D] bg-white text-[#09071D]">
        <div className="max-w-7xl mx-auto px-6">
          {/* NEW: Top Level Header */}
          <div className="mb-20">
            <div className="inline-block bg-[var(--bleu-accent)] text-white font-mono text-xs uppercase tracking-widest px-3 py-1 mb-8 shadow-[4px_4px_0px_0px_var(--bleu-nuit)]">
              The Coach
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-[#09071D]">
              Who The FUCK<br />Is Bart?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-32 items-start">
            {/* Image (Left) w/ Frame */}
            <div className="p-4 border-2 border-[#09071D] bg-white shadow-[12px_12px_0px_0px_#09071D]">
              <div className="aspect-[4/5] relative border-2 border-[#09071D]">
                <Image
                  src="/images/home/bart-and-son.jpg"
                  alt="Bart Cagara and son flexing"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content (Right) */}
            <div className="">
              <div className="space-y-8 text-xl md:text-2xl font-medium leading-relaxed text-[#09071D]/80">
                <p>Fair question.</p>
                <p>
                  I was an athletic kid like you. Just not gifted enough to go pro. But the obsession never left.
                </p>
                <p>
                  I spent years mastering Sports Nutrition and Strength Training because I refused to be average.<br />
                  (And because I want this little guy to be proud of his old man.)
                </p>
                <p>
                  As I built my practice, former athletes started gravitating toward me.<br />
                  (One client told me it’s the Nick Saban in me.)
                </p>
                <p>
                  But looking at their lives, I saw a pattern: too many great guys trading their health for their career.
                </p>
                <p className="text-[#09071D] font-bold">
                  So, I built a system that translates physique and performance optimization into an executive lifestyle: high-stakes dinners, heavy travel, and zero space for "perfect world" routines.
                </p>
              </div>

              <div className="mt-16 flex flex-col md:flex-row gap-8">
                <div className="flex items-center gap-4">
                  <div className="p-1 bg-[#456D8B] rounded-full text-white">
                    <Check className="w-5 h-5" strokeWidth={4} />
                  </div>
                  <span className="font-bold uppercase tracking-wider text-lg">Sports Nutritionist</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-1 bg-[#456D8B] rounded-full text-white">
                    <Check className="w-5 h-5" strokeWidth={4} />
                  </div>
                  <span className="font-bold uppercase tracking-wider text-lg">Executive Coach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA (Dark Mode Power) */}
      <section className="py-24 md:py-48 bg-[#09071D]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter mb-12 leading-[0.85] text-white">
            Get Back In<br /><span className="text-[#456D8B]">The Game.</span>
          </h2>
          <p className="text-2xl md:text-3xl font-medium text-white/70 mb-16 max-w-3xl leading-relaxed">
            The best athletes get smarter with age. Let's build a system that works for the man you are today.
          </p>
          <Link
            href="https://cal.com/bartcagara/discovery-call"
            className="inline-flex items-center gap-3 bg-white text-[#09071D] px-6 py-4 text-base md:px-12 md:py-8 md:text-2xl font-bold uppercase tracking-wider border-2 border-white shadow-[4px_4px_0px_0px_#456D8B] md:shadow-[6px_6px_0px_0px_#456D8B] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
          >
            Book Discovery Call
            <ArrowRight className="w-5 h-5 md:w-8 md:h-8" />
          </Link>
        </div>
      </section>

    </main>
  );
}