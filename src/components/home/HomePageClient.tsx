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
              <h3><strong>SMART FOOD DECISIONS ANYWHERE</strong></h3>
              <p className={styles.bentoIntro}>
                You eat out constantly. We'll teach you how to make smart
                decisions in any restaurant — without sacrificing the experience
                or progress.
              </p>
              <div className={styles.featureTitle}>
                STOP RELYING ON MEAL PREP.
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
                MAKE CLIENT DINNERS WORK FOR YOU, NOT AGAINST YOU.
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
            <p className={`${styles.textLargeNarrative}`}>
              We don't give you a diet. We build your freedom from them.
            </p>

            <div className={`${styles.systemStep} ${styles.stage1}`}>
              <div className={styles.stepHeader}>STAGE 1: THE RESET</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>
                  We analyze your schedule and build a nutrition protocol that works with your client dinners, not against them. We also install an efficient strength foundation to kickstart body recomposition. We stop the bleeding.
                </p>
                <div className={styles.stepMeta}>
                  <ul className={styles.checkList}>
                    <li>Deliverable: Your custom Nutrition Protocol & Training Foundation.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.systemStep}>
              <div className={styles.stepHeader}>STAGE 2: THE BUILD</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>
                  We install flexible training that fits your "randomized" schedule. 20 minutes in a hotel gym? We make it effective. No more treating workouts as a chore.
                </p>
                <div className={styles.stepMeta}>
                  <ul className={styles.checkList}>
                    <li>Deliverable: Your "Travel-Proof" Routine & Momentum.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.systemStep}>
              <div className={styles.stepHeader}>STAGE 3: THE STRESS-TEST</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>
                  We guide you through real-life chaos—mergers, holidays, crunch time. We prove that your results stick even when life gets crazy.
                </p>
                <div className={styles.stepMeta}>
                  <ul className={styles.checkList}>
                    <li>Deliverable: Total Lifestyle Integration & Energy Reclamation.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.systemStep}>
              <div className={styles.stepHeader}>STAGE 4: THE EXIT</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>
                  You develop "Fitness Intuition." You stop needing me. You stay fit, sharp, and energetic on autopilot for the rest of your career.
                </p>
                <div className={styles.stepMeta}>
                  <ul className={styles.checkList}>
                    <li>Deliverable: Full Autonomy. You fire me because you no longer need me.</li>
                  </ul>
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
            <p className={styles.textLargeNarrative} style={{ textAlign: 'left' }}>
              1. <strong>We Audit Your Chaos:</strong> I look at your actual schedule constraints and "friction points."
            </p>
            <p className={styles.textLargeNarrative} style={{ textAlign: 'left' }}>
              2. <strong>We Spot The Leak:</strong> I tell you exactly which "Trap" is killing your progress.
            </p>
            <p className={styles.textLargeNarrative} style={{ textAlign: 'left' }}>
              3. <strong>We Build The Fix:</strong> If I can help, I'll show you how. If not, you leave with clarity.
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
