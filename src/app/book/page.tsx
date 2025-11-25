import styles from "@/components/home/homepage.module.css";

export default function BookPage() {
  return (
    <>
      {/* SECTION 1: Book Your Nutrition Blueprint Call */}
      <section className={styles.sectionPadding}>
        <div className={styles.container}>
          <div className={styles.maxW800}>
            <h1 className={`${styles.h1} ${styles.textCenter}`}>
              Book Your Nutrition Blueprint Call
            </h1>
          </div>
        </div>
      </section>

      {/* SECTION 2: Make sure this fits you */}
      <section className={`${styles.sectionPadding} ${styles.bgFumee}`}>
        <div className={styles.container}>
          <div className={styles.maxW800}>
            <h2 className={styles.h3}>Make sure this fits you before booking:</h2>
            <ul className={`${styles.checkList} ${styles.checkListLarge}`}>
              <li>
                You're an executive with a chaotic schedule — and you're done
                restarting every Monday.
              </li>
              <li>
                You've outgrown Perfect-Conditions Fitness and want an approach that
                survives your actual life.
              </li>
              <li>
                You used to be in good shape — and you're done watching yourself get
                softer.
              </li>
              <li>
                You're serious about making a change — not just casually curious.
              </li>
            </ul>

            <h3 className={`${styles.h3} ${styles.bookH3Spacing}`}>The call:</h3>
            <p className={styles.textLargeNarrative}>
              We'll talk for 30 minutes so I can understand your situation and goals.
            </p>
            <p className={styles.textLargeNarrative}>
              If it's a strong fit, I'll show you how we can build your transformation
              together.
            </p>
            <p className={styles.textLargeNarrative}>
              Either way, you'll leave with total clarity on what's been holding you
              back — and how to fix it.
            </p>

            <h3 className={`${styles.h3} ${styles.bookH3Spacing}`}>
              What you get — regardless:
            </h3>
            <p className={styles.textLargeNarrative}>
              Your personalized Nutrition Blueprint created live on the call. You walk
              away with a plan that fits your lifestyle — no meal prep, no tracking,
              just principles that work anywhere.
            </p>
            <p className={styles.textLargeNarrative}>
              Even if we don't work together, you leave with something tangible to
              kick-start your comeback.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Calendar */}
      <section className={styles.sectionPadding}>
        <div className={styles.container}>
          <div className={styles.maxW800}>
            <h2 className={`${styles.h2} ${styles.textCenter}`}>
              Lock In Your Nutrition Blueprint
            </h2>

            <div className={styles.calEmbed}>
              <iframe
                src="https://app.cal.com/bartcagara/blueprint-call?layout=column_view"
                width="100%"
                height="800"
                frameBorder="0"
                className={styles.calIframe}
                title="Book a Nutrition Blueprint Call"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}