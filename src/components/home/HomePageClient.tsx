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
            You don't need more discipline. You need a system designed for executives with schedules too chaotic for conventional diets.
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
            <h2 className={styles.h2}>
              The #1 reason executives fail to get fit? Perfect-Conditions
              Fitness
            </h2>
            <p className={styles.textLargeNarrative}>
              Whether it's meal prep, strict tracking, or all-or-nothing
              thinking these approaches break the moment life gets messy.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.trapBox}>
              <h3><strong>THE MEAL PREP TRAP</strong></h3>
              <div>
                <p className={styles.trapBoxText}>
                  <strong>Sunday:</strong> Tupperware stacked high. You feel in
                  control.
                </p>
                <p className={styles.trapBoxText}>
                  <strong>Wednesday:</strong> Client dinner hits. You can't
                  bring your plastic box.
                </p>
                <p className={styles.trapBoxText}>
                  <strong>Friday:</strong> The prep dies in the fridge. You
                  order takeout.
                </p>
              </div>
              <p className={styles.trapBoxFooter}>
                <strong>"Guess I'll restart Monday."</strong>
              </p>
            </div>

            <div className={styles.trapBox}>
              <h3><strong>THE TRACKING TRAP</strong></h3>
              <div>
                <p className={styles.trapBoxText}>
                  <strong>At Home:</strong> You count every macro religiously.
                </p>
                <p className={styles.trapBoxText}>
                  <strong>Steakhouse:</strong> Hidden oils. Unknown sauce. You
                  panic.
                </p>
                <p className={styles.trapBoxText}>
                  <strong>The Choice:</strong> Order sad dry chicken or say
                  "f*ck it" and eat everything.
                </p>
              </div>
              <p className={styles.trapBoxFooter}>
                <strong>"I'll get back on track next week."</strong>
              </p>
            </div>

            <div className={styles.trapBox}>
              <h3><strong>THE ALL-OR-NOTHING TRAP</strong></h3>
              <div>
                <p className={styles.trapBoxText}>
                  <strong>The Rule:</strong> You're either 100% perfect or
                  completely off.
                </p>
                <p className={styles.trapBoxText}>
                  <strong>The Trigger:</strong> One missed workout. One
                  unplanned drink.
                </p>
                <p className={styles.trapBoxText}>
                  <strong>The Spiral:</strong> "Diet is blown." The weekend
                  binge begins.
                </p>
              </div>
              <p className={styles.trapBoxFooter}>
                <strong>Every minor slip = full reset.</strong>
              </p>
            </div>
          </div>

          <div className={`${styles.maxW800} ${styles.problemOutcome}`}>
            <p className={styles.textLargeNarrative}>
              <strong>
                The outcome? You become Physically Unfit and Mentally Trapped.
              </strong>
            </p>
            <p className={styles.textLargeNarrative}>
              Always restarting. Always getting softer. Watching other
              executives who figured it out.
            </p>
            <p className={styles.textLargeNarrative}>
              You have the means. You have the discipline.
            </p>
            <p className={styles.textLargeNarrative}>
              But forcing rigid nutrition rules and 20-year-old training logic
              on a 40+ body doesn't work anymore...
            </p>
            <p className={styles.textLargeNarrative}>
              So you get more tired, not more energized. Too exhausted to be
              active with your kids.
            </p>
            <p className={styles.textLargeNarrative}>
              You're disciplined everywhere else but here? You're the only one
              who can't crack this...
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section id="solution" className={styles.sectionPadding}>
        <div className={styles.container}>
          <div className={`${styles.textCenter} ${styles.maxW800} ${styles.problemSectionIntro}`}>
            <h2 className={styles.h2}>The solution? Convenience-First Fitness</h2>
            <p className={styles.textLargeNarrative}>
              A system that adapts to your life instead of demanding your life
              adapt to it.
            </p>
            <p className={styles.textLargeNarrative}>
              Principles that work at any restaurant, any gym, any event — built
              for execs who eat out constantly because that's their reality.
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
              Become Physically Fit and Mentally Free
            </h2>
          </div>

          <div className={styles.grid2}>
            <div className={styles.bentoCard}>
              <h3><strong>WHAT YOU GAIN</strong></h3>
              <ul className={styles.checkList}>
                <li>Eating at any restaurant without anxiety</li>
                <li>Traveling without destroying progress</li>
                <li>Making smart decisions without tracking</li>
                <li>Maintaining healthy body weight intuitively</li>
                <li>Escaping the restart cycle for good</li>
              </ul>
            </div>
            <div className={styles.bentoCard}>
              <h3><strong>WHAT YOU ESCAPE</strong></h3>
              <ul className={`${styles.checkList} ${styles.checkListCross}`}>
                <li>Declining invitations (afraid of going off-plan)</li>
                <li>Gaining weight with every trip</li>
                <li>Sweating every bite at a restaurant</li>
                <li>Struggling to stay lean without rigid rules</li>
                <li>Restarting every Monday</li>
              </ul>
            </div>
          </div>

          <div className={`${styles.textCenter} ${styles.maxW800} ${styles.problemOutcome}`}>
            <p className={styles.textLargeNarrative}>
              <strong>
                You're Physically Fit because you finally know how your body
                works.
              </strong>
            </p>
            <p className={styles.textLargeNarrative}>
              <strong>
                You're Mentally Free because you're making intuitive choices
                that feel good.
              </strong>
            </p>
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
              The Convenience-First Fitness Coaching Program
            </h2>
            <p className={`${styles.textLargeNarrative} ${styles.textCenter} ${styles.problemSectionIntro}`}>
              6 months to get you in the best shape of your life and program you
              to stay there intuitively.
            </p>

            <div className={`${styles.systemStep} ${styles.stage1}`}>
              <div className={styles.stepHeader}>Stage 1: Foundation (Weeks 1-4)</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>
                  Build your operating system:
                </p>
                <ul className={styles.checkList}>
                  <li>Your go-to meals at any restaurant</li>
                  <li>Strength training fundamentals</li>
                  <li>Proper exercise form for injury-free progress</li>
                </ul>
                <div className={styles.stepMeta}>
                  <p>
                    <strong>Outcome:</strong> Clear plan + confidence to execute
                    anywhere.
                  </p>
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
              <div className={styles.stepHeader}>Stage 2: Momentum (Weeks 5-8)</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>
                  Refine and adapt:
                </p>
                <ul className={styles.checkList}>
                  <li>Optimize nutrition and training based on results</li>
                  <li>Solve roadblocks (travel, sickness, schedule changes)</li>
                  <li>Build consistency without perfect conditions</li>
                </ul>
                <div className={styles.stepMeta}>
                  <p>
                    <strong>Outcome:</strong> Steady progress without stopping and
                    starting.
                  </p>
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
              <div className={styles.stepHeader}>Stage 3: Optimization (Weeks 9-12)</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>
                  Dial in the details:
                </p>
                <ul className={styles.checkList}>
                  <li>Sleep quality and recovery</li>
                  <li>Daily energy and mental clarity</li>
                  <li>Stress management</li>
                </ul>
                <div className={styles.stepMeta}>
                  <p>
                    <strong>Outcome:</strong> Fitness stops feeling like work.
                  </p>
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
              <div className={styles.stepHeader}>Stage 4: Mastery (Weeks 12-24)</div>
              <div className={styles.stepBody}>
                <p className={styles.stepTitle}>
                  Stress-test everything:
                </p>
                <ul className={styles.checkList}>
                  <li>Heavy travel weeks</li>
                  <li>Back-to-back dinners</li>
                  <li>Real-life chaos</li>
                </ul>
                <div className={styles.stepMeta}>
                  <p>
                    <strong>Outcome:</strong> You're eating and training
                    intuitively. Physically Fit. Mentally Free.
                  </p>
                  <p>(My goal? To make myself obsolete.)</p>
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
              You don't need another generic diet plan. We audit your schedule, spot the leak, and decide the fix.
            </p>
          </div>
          <Link href="/book" className={`${styles.btnCta} ${styles.pageSize} ${styles.ctaFinalButton}`}>
            BOOK A 15-MIN RAPID AUDIT
          </Link>
        </div>
      </section>
    </>
  );
}
