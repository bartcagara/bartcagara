import styles from "@/components/home/homepage.module.css";

export default function BookPage() {
  return (
    <>
      {/* SECTION 1: Header */}
      <section className={styles.sectionPadding}>
        <div className={styles.container}>
          <div className={styles.maxW800}>
            <h1 className={`${styles.h1} ${styles.textCenter}`}>
              SCHEDULE YOUR 15-MIN AUDIT
            </h1>
            <p className={`${styles.textLargeNarrative} ${styles.textCenter}`} style={{ marginTop: '1.5rem' }}>
              No sales pitch. No fluff. A rapid diagnostic to identify exactly why your previous attempts have failed.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: What to Expect */}
      <section className={`${styles.sectionPadding} ${styles.bgFumee}`}>
        <div className={styles.container}>
          <div className={styles.maxW800}>
            <h2 className={styles.h3}>What happens on this 15-minute Audit?</h2>

            <p className={styles.textLargeNarrative} style={{ textAlign: 'left', marginTop: '2rem' }}>
              <strong>1. We Audit Your Reality:</strong> I look at your actual calendar—your travel load, client dinners, and stress peaks.
            </p>
            <p className={styles.textLargeNarrative} style={{ textAlign: 'left' }}>
              <strong>2. We Spot The Leak:</strong> I tell you exactly which "Trap" is killing your momentum.
            </p>
            <p className={styles.textLargeNarrative} style={{ textAlign: 'left' }}>
              <strong>3. We Build The Fix:</strong> You leave with one immediate, high-impact adjustment you can use tonight.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: Calendar */}
      <section className={styles.sectionPadding}>
        <div className={styles.container}>
          <div className={styles.maxW800}>
            <h2 className={`${styles.h2} ${styles.textCenter}`}>
              Lock In Your Audit
            </h2>

            <div className={styles.calEmbed}>
              {/* Cal inline embed code begins */}
              <div style={{ width: '100%', height: '100%', overflow: 'scroll' }} id="my-cal-inline-audit-call"></div>
              <script type="text/javascript" dangerouslySetInnerHTML={{
                __html: `
                (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
                Cal("init", "audit-call", {origin:"https://app.cal.com"});

                Cal.ns["audit-call"]("inline", {
                  elementOrSelector:"#my-cal-inline-audit-call",
                  config: {"layout":"column_view"},
                  calLink: "bartcagara/audit-call",
                });

                Cal.ns["audit-call"]("ui", {"hideEventTypeDetails":false,"layout":"column_view"});
              `}} />
              {/* Cal inline embed code ends */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}