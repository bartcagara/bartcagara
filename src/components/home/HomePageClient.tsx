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
            THE "CONVENIENCE-FIRST" SYSTEM THAT ENDS THE WEIGHT LOSS RESTART CYCLE FOR GOOD.
          </h1>
          <p className={styles.heroSub}>
            You don't need more discipline. You need a protocol designed for the executive reality: fluctuating schedules, client dinners, and zero bandwidth for "perfect" diets.
          </p>

          <div className={styles.heroCtaContainer}>
            <Link href="/book" className={`${styles.btnCta} ${styles.pageSize}`}>
              BOOK A 15-MIN RAPID AUDIT
            </Link>
            <p className={styles.heroNote}>
              <em>No meal prep. No tracking. We just find the leak in your current approach.</em>
            </p>
          </div>

          <div className={styles.trustLogos}>
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

      {/* TARGET AUDIENCE */}
      <section className={`${styles.sectionPadding} ${styles.bgFumee}`}>
        <div className={styles.container}>
          <div className={styles.maxW800}>
            <h2 className={`${styles.h3} ${styles.textCenter}`}>
              If you're an executive and you say YES to any of the following...
            </h2>
            <ul className={`${styles.checkList} ${styles.checkListLarge}`}>
              <li>
                You've tried meal prep, strict diets, and tracking apps but every
                client dinner or trip destroys your progress so you restart
                Monday.
              </li>
              <li>
                You eat out constantly and have no idea how to make smart
                decisions without rigid rules you can't actually follow.
              </li>
              <li>
                Your colleagues eat out just as much but somehow stay lean while
                you keep restarting and getting softer.
              </li>
            </ul>
            <p className={styles.checklistIntroSection}>
              then what follows was built for you.
            </p>
          </div>
        </div>
      </section>

      {/* NARRATIVE */}
      <section className={styles.sectionPadding}>
        <div className={styles.container}>
          <div className={styles.maxW800}>
            <h3 className={styles.h3}>You wanted to get back in shape for a while now...</h3>
            <p className={styles.textLargeNarrative}>
              You've tried restrictive diets, meal prep, fitness challenges. "This
              time will be different." energy.
            </p>
            <p className={styles.textLargeNarrative}>
              It all worked... for two weeks.
            </p>
            <p className={styles.textLargeNarrative}>
              Then client dinner Thursday. Weekend plans. Travel next week.
            </p>
            <p className={styles.textLargeNarrative}>The plan died.</p>
            <p className={styles.textLargeNarrative}>
              Monday morning? Another restart.
            </p>
            <p className={styles.textLargeNarrative}>You started thinking...</p>
            <p className={styles.textLargeNarrative}>
              "Is it my discipline? Do I need a better diet? More willpower?"
            </p>
            <p className={styles.textLargeNarrative}>But the real problem?</p>
            <p className={styles.textLargeNarrative}>
              <strong>
                You're stuck in Perfect-Conditions Fitness — rigid approaches that
                only work when your life is perfectly controlled.
              </strong>
            </p>
            <p className={styles.textLargeNarrative}>
              And your life is constant chaos — dinners with clients, packed
              calendar, no breathing room.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section id="problem" className={`${styles.sectionPadding} ${styles.bgFumee}`}>
        <div className={styles.container}>
          <div className={`${styles.textCenter} ${styles.maxW800} ${styles.problemSectionIntro}`}>
            <p className={styles.textLargeNarrative}>
              <strong>WE WILL IDENTIFY WHICH OF THESE 3 TRAPS IS KILLING YOUR MOMENTUM:</strong>
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.trapBox}>
              <h3><strong>THE "PERFECTIONIST" TRAP</strong></h3>
              <div>
                <p className={styles.trapBoxText}>
                  <strong>The Rule:</strong> You think you need to be 100% "on" or you've failed.
                </p>
                <p className={styles.trapBoxText}>
                  <strong>The Reality:</strong> One client dinner hits. You can't control the menu. You eat something "bad."
                </p>
                <p className={styles.trapBoxText}>
                  <strong>The Spiral:</strong> "One bad meal turns into a bad day. A bad day turns into a lost week." You restart Monday. Again.
                </p>
              </div>
            </div>

            <div className={styles.trapBox}>
              <h3><strong>THE "STARVATION" TRAP</strong></h3>
              <div>
                <p className={styles.trapBoxText}>
                  <strong>The Effort:</strong> You rely on willpower. You go to bed hungry. You sneak snacks when stress hits.
                </p>
                <p className={styles.trapBoxText}>
                  <strong>The Frustration:</strong> You wake up the next morning, step on the scale, and you're the same weight.
                </p>
                <p className={styles.trapBoxText}>
                  <strong>The Result:</strong> You feel like you're working hard for nothing. Eventually, your body quits on you.
                </p>
              </div>
            </div>

            <div className={styles.trapBox}>
              <h3><strong>THE "CHAOS" TRAP</strong></h3>
              <div>
                <p className={styles.trapBoxText}>
                  <strong>The Plan:</strong> Works great when you're at home with a routine.
                </p>
                <p className={styles.trapBoxText}>
                  <strong>The Reality:</strong> Travel hits. A deal closes. You get chained to your desk. Randomization takes over.
                </p>
                <p className={styles.trapBoxText}>
                  <strong>The Outcome:</strong> Your fitness routine collapses because it requires a perfect schedule that doesn't exist.
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.maxW800} ${styles.problemOutcome}`}>
            <h3 className={`${styles.h3} ${styles.textCenter}`}>
              THE "DECLINING EXECUTIVE" PARADOX
            </h3>
            <p className={styles.textLargeNarrative}>
              You are successful in every area of life, but this one thing keeps slipping. You feel it. You're masking a lack of energy. You're avoiding photos. You worry that you're losing your "edge."
            </p>
            <p className={styles.textLargeNarrative}>
              The gap between the man you are and the athlete you used to be is widening.
            </p>
            <p className={styles.textLargeNarrative}>
              If you don't fix the system, you will spend your 40s managing decline instead of maximizing vitality.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section id="solution" className={styles.sectionPadding}>
        <div className={styles.container}>
          <div className={`${styles.textCenter} ${styles.maxW800} ${styles.problemSectionIntro}`}>
            <h2 className={styles.h2}>THE SOLUTION? CONVENIENCE-FIRST FITNESS.</h2>
            <p className={styles.textLargeNarrative}>
              A system that runs in the background of your life.
            </p>
          </div>

          <div className={styles.grid2}>
            <div className={styles.bentoCard}>
              <h3><strong>SMART FOOD DECISIONS ANYWHERE</strong></h3>
              <p className={styles.bentoIntro}>
                You eat out constantly. We'll teach you how to make smart
                decisions in any restaurant — without sacrificing the experience
                or progress.
              </p>
              <div className={styles.featureTitle}>
                Stop relying on meal prep that dies when you travel
              </div>
              <p className={styles.bentoText}>
                You can't fly with Tupperware. But you can learn principles for
                making smart calls anywhere — airports, client dinners, family
                events. You'll finally understand what works.
              </p>
              <div className={styles.featureTitle}>
                Build intuition instead of following rigid diets
              </div>
              <p className={styles.bentoText}>
                Strict diets work at home. Then you go out and everything
                breaks. You'll learn to optimize your orders and make smart
                nutrition intuitive — whether it's steakhouse, Italian, Indian,
                or Subway.
              </p>
              <div className={styles.featureTitle}>
                Make eating out work FOR your goals, not against them
              </div>
              <p className={styles.bentoText}>
                Eating out doesn't equal restart anymore. It's where you
                actually learn nutrition — in real restaurants, being with
                people, not from diets. You'll enjoy yourself and never let diet
                culture guilt-trip you again.
              </p>
            </div>

            <div className={styles.bentoCard}>
              <h3><strong>EFFICIENT TRAINING IN ANY GYM</strong></h3>
              <p className={styles.bentoIntro}>
                This isn't another workout plan that breaks when you get busy.
                It's a training system designed to work when perfect conditions
                disappear.
              </p>
              <div className={styles.featureTitle}>
                Train efficiently with any equipment
              </div>
              <p className={styles.bentoText}>
                Hotel gym only has dumbbells up to 50lbs? You learn how to make
                that work. No leg press machine? Goblet squats get the job done.
                You're never stuck thinking "I can't train today because the gym
                doesn't have X."
              </p>
              <div className={styles.featureTitle}>
                Build muscle and avoid injuries by mastering exercise form
              </div>
              <p className={styles.bentoText}>
                No more going to the gym and seeing no results. You'll master
                exercise form through detailed video feedback — learning to
                challenge your muscles instead of beating up your joints. We
                pick exercises that fit your structure and keep you safe.
              </p>
              <div className={styles.featureTitle}>
                Get coached through the chaos and stay consistent
              </div>
              <p className={styles.bentoText}>
                You're never guessing what to do. Flight delayed and you miss
                your workout? We adjust. Hotel gym closed? Here's your room
                workout. Tweaked your shoulder? We modify the program. When
                disruptions hit, you know exactly how to adapt and keep
                progressing.
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
          <div className={styles.maxW800}>
            <h2 className={`${styles.h2} ${styles.textCenter}`}>
              OLD WAY VS. NEW WAY
            </h2>
          </div>

          <div className={styles.grid2}>
            <div className={styles.bentoCard}>
              <h3><strong>OLD WAY (PAIN)</strong></h3>
              <ul className={`${styles.checkList} ${styles.checkListCross}`}>
                <li>Anxiety: Sweating every menu choice at a steakhouse.</li>
                <li>Isolation: Declining invites because you're "being good."</li>
                <li>Confusion: "I have no idea how to eat anymore."</li>
                <li>Heavy: Feeling sluggish and "soft" even in a suit.</li>
              </ul>
            </div>
            <div className={styles.bentoCard}>
              <h3><strong>NEW WAY (GAIN)</strong></h3>
              <ul className={styles.checkList}>
                <li>Intuition: You know exactly what to order at the airport, the gala, or UberEats.</li>
                <li>Presence: You have the energy to hike with your kids, not just watch them.</li>
                <li>Confidence: You look good in your clothes, not just fit into them.</li>
                <li>Automatic: You maintain your weight without thinking about it.</li>
              </ul>
            </div>
          </div>


        </div>
      </section>

      {/* RESULTS SECTION */}
      <section className={styles.sectionPadding}>
        <div className={styles.container}>
          <div className={`${styles.textCenter} ${styles.maxW800}`}>
            <h2 className={styles.h2}>
              Results from execs who work like hell and still get it done
            </h2>
            <p className={`${styles.textLargeNarrative} ${styles.resultsIntro}`}>
              These guys didn't "find time." They've mastered Convenience-First
              Fitness.
            </p>
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
          <div className={styles.maxW800}>
            <h2 className={`${styles.h2} ${styles.textCenter}`}>
              THE "CONVENIENCE-FIRST" OPERATING SYSTEM
            </h2>
            <p className={`${styles.textLargeNarrative} ${styles.textCenter} ${styles.problemSectionIntro}`}>
              We don't give you a diet. We install a protocol.
            </p>

            <div className={`${styles.systemStep} ${styles.stage1}`}>
              <div className={styles.stepHeader}>Stage 1: The Audit & Reset</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>
                  We analyze your schedule and build a nutrition protocol that works with your client dinners and travel, not against them. We stop the bleeding.
                </p>
                <div className={styles.stepMeta}>
                  <p>
                    <strong>Duration:</strong> 4 weeks
                  </p>
                  <p>
                    <strong>Time commitment:</strong> 2-3h training + Unlimited Async Access (WhatsApp) + Strategic Check-ins
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.systemStep}>
              <div className={styles.stepHeader}>Stage 2: The Momentum Build</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>
                  We install flexible training that fits your "randomized" schedule. 20 minutes in a hotel gym? We make it effective. No more treating workouts as a chore.
                </p>
                <div className={styles.stepMeta}>
                  <p>
                    <strong>Duration:</strong> 4 weeks
                  </p>
                  <p>
                    <strong>Time commitment:</strong> 2-3h training + Unlimited Async Access (WhatsApp) + Strategic Check-ins
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.systemStep}>
              <div className={styles.stepHeader}>Stage 3: The Stress Test</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>
                  We guide you through real-life chaos—mergers, holidays, crunch time. We prove that your results stick even when life gets crazy.
                </p>
                <div className={styles.stepMeta}>
                  <p>
                    <strong>Duration:</strong> 4 weeks
                  </p>
                  <p>
                    <strong>Time commitment:</strong> 2-3h training + Unlimited Async Access (WhatsApp) + Strategic Check-ins
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.systemStep}>
              <div className={styles.stepHeader}>Stage 4: Mastery (The Exit)</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>
                  You develop "Fitness Intuition." You stop needing me. You stay fit, sharp, and energetic on autopilot for the rest of your career.
                </p>
                <div className={styles.stepMeta}>
                  <p>
                    <strong>Duration:</strong> 12 weeks
                  </p>
                  <p>
                    <strong>Time commitment:</strong> 2-3h training + Unlimited Async Access (WhatsApp) + Strategic Check-ins
                  </p>
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
              You don't need another generic plan. You need to know exactly why your previous attempts failed so you can stop repeating the cycle.
            </p>
            <p className={styles.textLargeNarrative}>
              <strong>What happens on this 15-minute Audit?</strong>
            </p>
            <p className={styles.textLargeNarrative}>
              1. <strong>We Audit Your Chaos:</strong> I look at your actual schedule constraints and "friction points."
            </p>
            <p className={styles.textLargeNarrative}>
              2. <strong>We Spot The Leak:</strong> I tell you exactly which "Trap" is killing your progress.
            </p>
            <p className={styles.textLargeNarrative}>
              3. <strong>We Decide The Fix:</strong> If I can help, I'll show you how. If not, you leave with clarity.
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
