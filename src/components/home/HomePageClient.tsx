"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { AccordionItem, ScrollSection, FAQ_ITEMS } from "@/components/home";
import styles from "@/components/home/homepage.module.css";
import { TRUST_LOGOS, TRANSFORMATIONS, CLIENT_INTERVIEWS, CLIENT_DMS } from "@/components/home/assets";

export default function HomePageClient() {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(null);

  const toggleAccordion = useCallback((index: number) => {
    setOpenAccordionIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.h1}>
            THE PROTOCOL THAT ENDS THE WEIGHT LOSS RESTART CYCLE FOR GOOD.
          </h1>
          <p className={styles.heroSub}>
            You don&apos;t need more discipline. You need a system built for the executive reality: heavy travel, high-stakes dinners, and zero space for &apos;perfect&apos; diets.
          </p>

          <div className={styles.heroCtaContainer}>
            <Link href="/book" className={`${styles.btnCta} ${styles.pageSize}`}>
              BOOK A 15-MIN RAPID AUDIT
            </Link>
            <p className={styles.heroNote}>
              <em>No meal prep. No tracking. We just find the leak in your current approach.</em>
            </p>
          </div>
        </div>
      </section>

      {/* TRUSTED BY SECTION */}
      <section className={styles.bgFumee} style={{ paddingTop: '3rem', paddingBottom: '3rem', borderTop: '1px solid var(--grey-light)', borderBottom: '1px solid var(--grey-light)' }}>
        <div className={styles.container}>
          <div className={styles.trustLogos} style={{ marginTop: 0 }}>
            <p className={styles.trustLogosTitle}>Trusted by executives from:</p>
            <div className={styles.logoGrid}>
              {TRUST_LOGOS.map((logo) => (
                <Image
                  key={logo.name}
                  src={logo.src}
                  alt={`${logo.name} company logo`}
                  className={styles.trustLogo}
                  width={logo.width}
                  height={logo.height}
                  priority
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* INTRO */}
      <section className={styles.sectionPadding}>
        <div className={styles.container}>
          <div className={styles.maxW800}>
            <p className={styles.textLargeNarrative} style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '2.5rem' }}>
              You are successful. But let's be honest — your body doesn't reflect that anymore.
            </p>
            <p className={styles.textLargeNarrative} style={{ marginBottom: '2.5rem' }}>
              You feel sharp when you walk into a meeting... until you catch your reflection in the glass. You don't look like a leader. You look like the "heavy guy at the table."
            </p>
            <p className={styles.textLargeNarrative} style={{ marginBottom: '2.5rem' }}>
              You try to fix it. You order the salad while everyone else eats steak. You go to bed hungry. But then you wake up, step on the scale, and the number hasn't moved. It drives you crazy.
            </p>
            <p className={styles.textLargeNarrative} style={{ marginBottom: '2.5rem' }}>
              So the stress wins. Your diet is a mess, so you raid the fridge at night. Your training? Non-existent.
            </p>
            <p className={styles.textLargeNarrative} style={{ marginBottom: '2.5rem' }}>
              You should be enjoying life at this stage of your career, but you don't have the energy to actually do it. Hell, you're too tired to even play with your kids.
            </p>
            <p className={styles.textLargeNarrative} style={{ marginBottom: '2.5rem' }}>
              The gap between the athlete you used to be and the man you are today is getting wider.
            </p>
            <p className={styles.textLargeNarrative}>
              And deep down, you know the truth: If you don't fix this now, you aren't going to enjoy your success. You are just going to manage your decline.
            </p>
          </div>
        </div>
      </section>


      {/* PROBLEM SECTION */}
      <section id="problem" className={`${styles.sectionPadding} ${styles.bgFumee}`}>
        <div className={styles.container}>
          <div className={`${styles.textCenter} ${styles.maxW800} ${styles.problemSectionIntro}`}>
            <h2 className={styles.h2}>
              The #1 reason executives fail to get fit? Perfect-Conditions
              Fitness
            </h2>
            <p className={styles.textLargeNarrative}>
              You didn't fail because you lack discipline. You failed because you are using "Perfect World" tools in a chaotic executive life.
            </p>
            <p className={styles.textLargeNarrative}>
              <strong>WE WILL IDENTIFY WHICH OF THESE 3 TRAPS IS KILLING YOUR MOMENTUM:</strong>
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.trapBox}>
              <h3><strong>THE "PERFECTIONIST" TRAP</strong></h3>
              <div>
                <p className={styles.trapBoxText}>
                  <strong>The Trigger:</strong> One client dinner goes off-script. You eat something "bad." You feel like you failed.
                </p>
                <p className={styles.trapBoxText}>
                  <strong>The Spiral:</strong> Guilt kicks in. You say "screw it" and binge until Monday. You restart the cycle, feeling defeated before you even begin.
                </p>
              </div>
            </div>

            <div className={styles.trapBox}>
              <h3><strong>THE "STARVATION" TRAP</strong></h3>
              <div>
                <p className={styles.trapBoxText}>
                  <strong>The Effort:</strong> You white-knuckle Monday through Thursday. But by Friday, your willpower is gone. You binge all weekend.
                </p>
                <p className={styles.trapBoxText}>
                  <strong>The Reality:</strong> You step on the scale. Nothing changed. You erased 4 days of progress in 4 hours. Eventually, your patience quits.
                </p>
              </div>
            </div>

            <div className={styles.trapBox}>
              <h3><strong>THE "CHAOS" TRAP</strong></h3>
              <div>
                <p className={styles.trapBoxText}>
                  <strong>The Plan:</strong> Works perfectly... when you are home. But then travel hits. A deal closes. The routine collapses.
                </p>
                <p className={styles.trapBoxText}>
                  <strong>The Reality:</strong> You lose your athletic taper. The weight piles on because the plan requires a perfect schedule that doesn't exist.
                </p>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section id="solution" className={styles.sectionPadding}>
        <div className={styles.container}>
          <div className={`${styles.textCenter} ${styles.maxW800} ${styles.problemSectionIntro}`}>
            <h2 className={styles.h2}>THE SOLUTION? CONVENIENCE-FIRST FITNESS.</h2>
            <p className={styles.textLargeNarrative}>
              A system that works no matter what your schedule throws at you.
            </p>
          </div>

          <div className={styles.grid2}>
            <div className={styles.bentoCard}>
              <h3><strong>TOTAL NUTRITIONAL COMMAND</strong></h3>
              <p className={styles.bentoIntro}>
                You eat out constantly. You travel. You have a life. We build a protocol that absorbs these realities instead of breaking under them.
              </p>
              <div className={styles.featureTitle}>
                NO MEAL PREP. NO TUPPERWARE.
              </div>
              <p className={styles.bentoText}>
                You can't bring plastic boxes to a board meeting. We build a system based on principles, not prep. You will know exactly how to fuel your body in an airport lounge, a gas station, or a Michelin-star restaurant.
              </p>
              <div className={styles.featureTitle}>
                OWN THE MENU
              </div>
              <p className={styles.bentoText}>
                Stop stressing over the bread basket. You will learn to navigate client dinners with zero anxiety—ordering meals that satisfy you and respect your goals, without looking like the "diet guy" at the table.
              </p>
              <div className={styles.featureTitle}>
                ELIMINATE THE BRAIN FOG
              </div>
              <p className={styles.bentoText}>
                Most executives run on caffeine and stress. We fix your nutrition to stabilize your energy. No more 3 PM crash. No more tension headaches. Just steady, lethal focus all day.
              </p>
            </div>

            <div className={styles.bentoCard}>
              <h3><strong>HIGH-ROI PHYSIQUE CONSTRUCTION</strong></h3>
              <p className={styles.bentoIntro}>
                You don't have 90 minutes to waste in the gym. We strip away the junk volume and focus on the 20% of movements that drive 80% of the result.
              </p>
              <div className={styles.featureTitle}>
                RECLAIM THE ATHLETIC TAPER
              </div>
              <p className={styles.bentoText}>
                We don't train to "burn calories." We train to build the V-shape physique that commands respect. Broad shoulders. Lean waist. You will look as sharp in a t-shirt as you do in a suit.
              </p>
              <div className={styles.featureTitle}>
                THE "HOTEL GYM" PROTOCOL
              </div>
              <p className={styles.bentoText}>
                Gym closed? Only have 30lb dumbbells? No problem. You will learn how to get a world-class workout anywhere. Your progress never stops just because you changed time zones.
              </p>
              <div className={styles.featureTitle}>
                FIX THE JOINT PAIN
              </div>
              <p className={styles.bentoText}>
                We fix the knee pain and back aches that come from sitting at a desk for 12 hours. We build a body that is durable, pain-free, and ready to play with your kids on the weekend.
              </p>
            </div>
          </div>

          <div className={`${styles.textCenter} ${styles.solutionCtaSection}`}>
            <Link href="/book" className={`${styles.btnCta} ${styles.pageSize}`}>
              BOOK A 15-MIN RAPID AUDIT
            </Link>
          </div>
        </div>
      </section>

      {/* TRANSFORMATION PROMISE */}
      <section className={`${styles.sectionPadding} ${styles.bgFumee}`}>
        <div className={styles.container}>
          <div className={`${styles.maxW800} ${styles.textCenter} ${styles.problemSectionIntro}`}>
            <h2 className={styles.h2}>
              THE SHIFT
            </h2>
            <p className={styles.textLargeNarrative}>
              You are no longer trapped in a rigid system designed for someone else. You gain the freedom to build a flexible protocol that works for you.
            </p>
          </div>

          <div className={styles.grid2}>
            <div className={styles.bentoCard}>
              <h3><strong>STOP FOLLOWING RULES</strong></h3>
              <ul className={`${styles.checkList} ${styles.checkListCross}`}>
                <li><strong>Anxiety:</strong> You sweat every menu choice at a steakhouse.</li>
                <li><strong>Isolation:</strong> You decline invites because you're "being good."</li>
                <li><strong>Confusion:</strong> You have "no idea how to eat anymore."</li>
                <li><strong>Lethargy:</strong> You feel frumpy and soft, even in a tailored suit.</li>
              </ul>
            </div>
            <div className={styles.bentoCard}>
              <h3><strong>START BUILDING PRINCIPLES</strong></h3>
              <ul className={styles.checkList}>
                <li><strong>Control:</strong> You walk into a steakhouse or airport lounge and know exactly how to eat without stress.</li>
                <li><strong>Presence:</strong> You have the energy to get silly with your kids, not just watch them.</li>
                <li><strong>Confidence:</strong> You look good in your clothes, not just fit into them.</li>
                <li><strong>Freedom:</strong> You stop thinking about food 24/7. You focus on your life and make intuitive choices by default.</li>
              </ul>
            </div>
          </div>


        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className={styles.sectionPadding}>
        <div className={styles.container}>
          <div className={`${styles.textCenter} ${styles.maxW800} ${styles.problemSectionIntro}`}>
            <h2 className={styles.h2}>
              THEY DIDN'T "FIND MORE TIME." THEY BUILT A BETTER SYSTEM.
            </h2>

          </div>

          <ScrollSection title="Client Transformations">
            {TRANSFORMATIONS.map((item) => (
              <div key={item.src} className={styles.scrollItemTransformation}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  className={styles.transformationImage}
                  width={400}
                  height={400}
                  style={{ width: 'auto', height: '400px' }}
                />
              </div>
            ))}
          </ScrollSection>

          <ScrollSection title="Client Interviews">
            {CLIENT_INTERVIEWS.map((id) => (
              <div key={id} className={styles.scrollItem}>
                <iframe
                  width="445"
                  height="250"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`Client Interview video ${id}`}
                  style={{ border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.videoEmbed}
                />
              </div>
            ))}
          </ScrollSection>

          <ScrollSection title="Client DMs">
            {CLIENT_DMS.map((src, index) => (
              <div key={src} className={styles.scrollItemDm}>
                <Image
                  src={src}
                  alt={`Client testimonial direct message ${index + 1}`}
                  width={300}
                  height={500}
                  style={{ width: 'auto', height: '500px' }}
                />
              </div>
            ))}
          </ScrollSection>

          <ScrollSection title="Client Testimonials">
            <div className="senja-embed" data-id="fc88ed05-b40d-4ef9-ad5e-1592601df582" data-mode="shadow" data-lazyload="false" style={{ display: 'block', width: '100%' }} />
          </ScrollSection>
        </div>
      </section>

      {/* SYSTEM SECTION */}
      <section id="system" className={`${styles.sectionPadding} ${styles.bgFumee}`}>
        <div className={styles.container}>
          <div className={`${styles.maxW800} ${styles.textCenter} ${styles.problemSectionIntro}`}>
            <h2 className={`${styles.h2} ${styles.textCenter}`}>
              THE "CONVENIENCE-FIRST" OPERATING SYSTEM
            </h2>
            <p className={`${styles.textLargeNarrative} ${styles.systemIntroMargin}`}>
              We don't give you a diet. We build your freedom from them.
            </p>

            <div className={`${styles.systemStep} ${styles.stage1}`} style={{ textAlign: 'left' }}>
              <div className={styles.stepHeader}>STAGE 1: THE RESET</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>
                  We fix your nutrition and training immediately so you stop spinning your wheels.
                </p>
                <ul className={styles.checkList}>
                  <li>Your custom Nutrition Protocol (no starvation).</li>
                  <li>Efficient Strength Foundation (30-min sessions).</li>
                  <li>Immediate fix for energy crashes and brain fog.</li>
                </ul>
                <div className={styles.stepMeta}>
                  <p><strong>Deliverable:</strong> Full control over your energy and hunger.</p>
                  <p><strong>Rhythm:</strong> Unlimited Async Access (WhatsApp) + Strategic Check-ins</p>
                </div>
              </div>
            </div>

            <div className={styles.systemStep} style={{ textAlign: 'left' }}>
              <div className={styles.stepHeader}>STAGE 2: THE BUILD</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>
                  We build the muscle and metabolism you need to look the part.
                </p>
                <ul className={styles.checkList}>
                  <li>Hypertrophy training designed for the executive schedule.</li>
                  <li>Building the lean muscle that keeps you lean long-term.</li>
                  <li>Solving the &apos;Travel Gap&apos; (Airport/Hotel protocols).</li>
                </ul>
                <div className={styles.stepMeta}>
                  <p><strong>Deliverable:</strong> Visible physical changes and better fitting clothes.</p>
                  <p><strong>Rhythm:</strong> Unlimited Async Access (WhatsApp) + Strategic Check-ins</p>
                </div>
              </div>
            </div>

            <div className={styles.systemStep} style={{ textAlign: 'left' }}>
              <div className={styles.stepHeader}>STAGE 3: THE STRESS-TEST</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>
                  We make sure the results stick even when your schedule goes to hell.
                </p>
                <ul className={styles.checkList}>
                  <li>Navigating heavy travel weeks without gaining weight.</li>
                  <li>Handling back-to-back client dinners with zero guilt.</li>
                  <li>Advanced recovery protocols for high-stress periods.</li>
                </ul>
                <div className={styles.stepMeta}>
                  <p><strong>Deliverable:</strong> Total confidence that you can handle any schedule.</p>
                  <p><strong>Rhythm:</strong> Unlimited Async Access (WhatsApp) + Strategic Check-ins</p>
                </div>
              </div>
            </div>

            <div className={styles.systemStep} style={{ textAlign: 'left' }}>
              <div className={styles.stepHeader}>STAGE 4: THE EXIT</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>
                  You master the system so you don&apos;t need to pay me anymore.
                </p>
                <ul className={styles.checkList}>
                  <li>Internalizing the principles (Intuition vs. Rules).</li>
                  <li>Transitioning from &apos;Coached&apos; to &apos;Autonomous&apos;.</li>
                  <li>Final optimization for longevity and bloodwork.</li>
                </ul>
                <div className={styles.stepMeta}>
                  <p><strong>Deliverable:</strong> Full Autonomy. You fire me because you&apos;ve mastered it.</p>
                  <p><strong>Rhythm:</strong> Unlimited Async Access (WhatsApp) + Strategic Check-ins</p>
                </div>
              </div>
            </div>

            <div className={`${styles.textCenter} ${styles.systemCtaSection}`}>
              <Link href="/book" className={`${styles.btnCta} ${styles.pageSize}`}>
                BOOK A 15-MIN RAPID AUDIT
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className={styles.sectionPadding}>
        <div className={styles.container}>
          <div className={styles.maxW800}>
            <h2 className={`${styles.h2} ${styles.textCenter} ${styles.faqSectionTitle}`}>FAQ</h2>
            <div className={styles.faqContainer}>
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem
                  key={item.q}
                  question={item.q}
                  answer={item.a}
                  isOpen={openAccordionIndex === index}
                  onClick={() => toggleAccordion(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="cta" className={`${styles.sectionPadding} ${styles.bgFumee}`} style={{ borderBottom: 'none' }}>
        <div className={`${styles.container} ${styles.textCenter}`}>
          <div className={styles.maxW800}>
            <h3 className={styles.h3}>STOP GUESSING. GET DIAGNOSED.</h3>
            <p className={styles.textLargeNarrative}>
              You don&apos;t need another PDF diet. You need to know exactly <em>why</em> your previous attempts failed so you can stop repeating the cycle.
            </p>
            <p className={styles.textLargeNarrative}>
              <strong>What happens on this 15-minute Audit?</strong>
            </p>
            <p className={styles.textLargeNarrative} style={{ textAlign: 'left' }}>
              1. <strong>We Audit Your Reality:</strong> I look at your actual calendar—your travel load, client dinners, and stress peaks.
            </p>
            <p className={styles.textLargeNarrative} style={{ textAlign: 'left' }}>
              2. <strong>We Spot The Leak:</strong> I tell you exactly which &quot;Trap&quot; is killing your progress.
            </p>
            <p className={styles.textLargeNarrative} style={{ textAlign: 'left' }}>
              3. <strong>We Build The Fix:</strong> You leave with one immediate, high-impact adjustment you can use tonight. If you want to implement the full system, we schedule a separate strategy call.
            </p>
          </div>
          <Link href="/book" className={`${styles.btnCta} ${styles.pageSize} ${styles.ctaFinalButton}`}>
            BOOK YOUR 15-MIN AUDIT
          </Link>
        </div>
      </section>
    </>
  );
}
