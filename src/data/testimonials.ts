/**
 * The client testimonials on the home page, self-hosted so that showing them
 * sends nothing to any outside company. Taken word for word from the Senja
 * widget "Homepage testimonials" on 2026-11-05, in its order. `<mark>` is the
 * widget's highlight. Names and photos are as they already appeared publicly.
 */
export type Testimonial =
  | {
      kind: "text";
      id: string;
      name: string;
      tagline: string;
      avatar: string;
      /** The widget's link on the LinkedIn icon; null where it showed none. */
      linkedin: string | null;
      text: string;
    }
  | {
      kind: "video";
      id: string;
      name: string;
      tagline: string;
      video: string;
      captions: string;
      poster: string;
    };

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    "id": "39701388",
    "name": "Mark Van Den Broeke",
    "tagline": "VP Construction at Wisconsin Housing Preservation Corp.",
    "kind": "text",
    "avatar": "/images/testimonials/avatars/mark-van-den-broeke.webp",
    "linkedin": "https://www.linkedin.com/in/bartcagara/",
    "text": "Bart and I have worked together for over a year, and he’s been a huge part of my fitness journey. Before reaching out to him, I was trying to figure everything out on my own and just wasn’t making the progress I wanted. I wanted a sustainable approach that I could actually maintain long term, and that’s exactly what Bart excels at.\n\nTogether, we made small, manageable changes that ended up creating major improvements in my health and overall lifestyle. Even months after finishing the program, I’ve continued building on the momentum we created, and I love seeing the results continue over time."
  },
  {
    "id": "2dbb798c",
    "name": "Brian Hurd",
    "tagline": "Founder at Legacy 5 Consulting",
    "kind": "text",
    "avatar": "/images/testimonials/avatars/brian-hurd.webp",
    "linkedin": "https://www.linkedin.com/in/bartcagara/",
    "text": "I hired Bart last year to be my health coach. \nAlthough hesitant at first to understand how I could fully benefit from hiring a coach on-line that I would never meet in person it was one of my best decisions. Some investments have a greater return than others and is this one of those for me. \nI was in a place where my desire and need to make changes in my health was great, but my knowledge and discipline continued to be stumbling blocks to reach my goals. \nWithin the first two weeks of working with Bart, I was already experiencing a complete shift in my mindset based on his coaching. I had outlined my real goals for wanting to get in shape and a very clear \"why\" and from there received personalized coaching every step of the way. I no longer had to try and figure it out on my own, I just needed to show-up and be open to real coaching by someone who had the experience and passion for helping clients succeed. Along the way not only with a shift in my mindset I now have the tools, framework and equipping to live a healthy lifestyle regardless of what obstacles might surface. I am very thankful and grateful for what I have received by becoming a client of Bart!"
  },
  {
    "id": "e8875797",
    "name": "Dan White",
    "tagline": "Head of CX Strategy & Operations",
    "kind": "text",
    "avatar": "/images/testimonials/avatars/dan-white.webp",
    "linkedin": "https://www.linkedin.com/in/bartcagara/",
    "text": "I worked with Bart as a coaching client after a real health scare.\n\nIt forced me to rethink how I was living. It was a wake-up call, and I knew I needed a different way forward, not another short-term plan.\n\nA few weeks later, I met Bart early one morning during a free assessment. The conversation felt easy, and I trusted him quickly.\n\nBefore Bart, I had tried a lot of systems.\nDiets. Challenges. Apps. Programs. Meetings.\nSome worked briefly, but none stuck.\n\nHere’s what made Bart different for me:\n* His approach was personalized to my actual life.\n* He coached me through tough choices I’d been avoiding.\n* He slowed me down when I wanted to sprint.\n* He kept everything simple and doable.\n* He helped me build habits that are still working for me today.\n\nTwo moments that really stand out for me from our 6 months of coaching:\n\nBefore Bart, when I traveled for work, I never had a plan. After Bart, when I traveled for a big work event, I came home exactly where I started weight-wise. That had never happened before. The best part was that I enjoyed the trip + had good food and drinks, without stressing out. Bart helped me plan, not panic.\n\nLater in our coaching, I hit a weight goal I’d been chasing. As I reached it, I realized I wasn’t grinding anymore. The nutrition and training we’d built together felt automatic. That shift came from Bart’s steady coaching.\n\nThrough our weekly calls, Bart didn’t just coach & analyze my workouts. He helped me rethink food, stress, sleep, travel, and routines. We talked about real life. Work dinners. Late nights. Cravings. Hotel gyms. How to stay steady without being rigid. Those conversations made all the difference for me.\n\nWorking with Bart was the best money I’ve ever spent on my health and I’d do it again without hesitation.\n\nIf you want a coach who is steady, practical, available, deeply knowledgeable, and fully invested in your success, Bart is your guy. Plus he’s a great hang too. Ask him for his best music and show recommendations and thank me later."
  },
  {
    "id": "2a93f639",
    "name": "Matt Bauer",
    "tagline": "Tenant Fitout Specialist at Compass Datacenters",
    "kind": "text",
    "avatar": "/images/testimonials/avatars/matt-bauer.webp",
    "linkedin": "https://www.linkedin.com/in/bartcagara/details/recommendations/?detailScreenTabIndex=0",
    "text": "Longevity simply translates into long life. However, it means more than that to me. It’s my mantra to continue to stay active well into “old age”. I have a goal of being able to hike/backpack and run into my 70s. In order to do that, it’s necessary to plan accordingly long term. \n\nSome context: I had experimented with Keto and Carnivore for about five years with mild success. I lost some weight and was able to maintain that loss, but it was always a challenge when it came to meals with my family, clients/customers and energy levels while exercising.\n\nPrior to engaging Bart as a coach, I had got back into running by simply participating in a marathon relay with some colleagues. It re-ignited my passion for running. However, as I increased mileage, I’d be gassed at mile 4 and didn’t really know why. I felt like I was doing what I was supposed to do, but a piece of the puzzle seemed to still be missing no matter how much research I did. I just needed proper direction. I also had increased interest to strength train specifically for running and hiking.\n\nI had been following Bart’s posts on LinkedIn for several months and finally decided to schedule a call. I can’t tell you how glad I am that I did. \n\nWithin weeks of overhauling my diet to fuel my training properly I was feeling/seeing the results!\nWhat makes Bart’s approach different is he stays curious and asks questions.\n\nHe wants to know what your overall goals are and what you like to do. He then tailors the program to your goals. It isn’t a one size fits all approach. \n\nHe makes himself available for real time feedback and guidance. This includes short videos which helped me as sometimes I need a visual. If he doesn’t know or isn’t 100% sure, he will research and get back to you with an answer.\n\nHe isn’t going to give you a hard time when you slip up or make poor decisions. He encourages you to think about what you can learn from the mistake and how you can be prepared the next time you are faced with a similar situation to overcome it.\n\nI completed the 6-month program two-months ago and have continued to get stronger (mentally and physically) and to gradually lose weight to reach my overall goal. I really feel like this is the most sustainable coaching I’ve ever received. Don’t over think it, reach out to Bart today to start on your own journey towards a better you."
  },
  {
    "id": "c31a56a7",
    "name": "MJ Hurley",
    "tagline": "Co-Founder at SUBMITTALIQ",
    "kind": "text",
    "avatar": "/images/testimonials/avatars/mj-hurley.webp",
    "linkedin": "https://www.linkedin.com/in/bartcagara/",
    "text": "There isn't enough space to say everything I want to. I spent 6 months with Bart, and it's been life-changing in every way.\n\nIf you're tired of the yo-yo weight loss. If you're tired of \"going paleo\" for 3-5 days, then failing and telling yourself you will start again on Monday. If you're tired of having good weeks and going off the rails on the weekend, only to start all over again. If you're tired of being out of shape. If you're lost.\n\nContact Bart. He will help you fix your relationship with food, give you the exact steps on what you need to be successful, help you unpack your mental baggage, and get you ripped. And if I'm honest. It was easy. Do it. It'll be the best thing you've ever done for yourself."
  },
  {
    "id": "6ae76844",
    "name": "MJ Hurley",
    "tagline": "Co-Founder at SUBMITTALIQ",
    "kind": "video",
    "video": "/videos/mj-hurley-testimonial.mp4",
    "captions": "/videos/mj-hurley-testimonial.vtt",
    "poster": "/images/testimonials/mj-hurley-video.webp"
  },
  {
    "id": "bd3d3f60",
    "name": "Adrian Kulczycki, PhD",
    "tagline": "Group CFO at Emirates Shipping Line",
    "kind": "text",
    "avatar": "/images/testimonials/avatars/adrian-kulczycki.webp",
    "linkedin": "https://www.linkedin.com/in/bartcagara/",
    "text": "In 2024, I embarked on a six-month transformation journey with Bart. The timing couldn’t have been worse for me - overwhelming stress at work, an unpredictable schedule with long hours and frequent travel, over 20 years of poor eating habits, minimal gym experience, an active job hunt, and ambitious golf goals. Despite these challenges, Bart proved to be an expert captain navigating through this rough and chaotic sea.\n\nFrom the start, Bart helped me overhaul my nutrition and continuously refined my exercise regimen. His knowledge is extensive, up-to-date, and always tested firsthand. There is no machine or exercise he hasn’t tried himself. Beyond expertise, Bart is a naturally gifted coach who doesn’t shy away from tough conversations when necessary.\n\nWhat truly sets Bart apart is the way he works:\n• He has an unparalleled understanding of the habits, challenges, motivations, and ambitions of C-level professionals\n• His approach is based on no-nonsense, practical advice. He immediately directed me to the most effective solutions, saving time and effort. For example, once we agreed on supplements, he simply sent me a few Amazon links to order, eliminating unnecessary guesswork\n• At the gym, I always felt safe and well-guided. Even when training alone, Bart was available online, providing real-time feedback as if he were right there with me\n• He never pretends to know everything. When faced with a complex question, he would say, “I don’t know, but I’ll find out.” Shortly after, he would return with a detailed explanation backed by the latest research. His commitment to knowledge and safety is second to none\n\nIn just six months, I achieved several sustainable changes:\n• Established a three-times-per-week gym routine that now feels effortless and habitual\n• Eliminated caffeine after 20 years, improving my concentration and work performance - a personal miracle\n• Lost weight and returned to my 18-year-old self’s weight while still enjoying sweets and snacks daily. No restrictive diets, just smart eating habits instilled by Bart\n• Achieved a successful body recomposition, reducing my body fat to 12.7%, well below average\n• Significantly improved my golf performance through enhanced core stability, allowing me to achieve a single-digit handicap - one of my long-term dreams\n\nIf you are truly committed to making a lasting change in your life, Bart is the person to guide you. However, ask yourself sincerely: Do you genuinely want to transform, or are you merely considering it? If you’re not 100%, don’t waste Bart’s time. But if you are all in, success is the only outcome when working with him."
  },
  {
    "id": "ea209a24",
    "name": "Don Shanklin",
    "tagline": "Director - Regional Sales & Process Improvement at Beckhoff Automation USA",
    "kind": "text",
    "avatar": "/images/testimonials/avatars/don-shanklin.webp",
    "linkedin": null,
    "text": "Bart Cagara is not bullshitting! One of the greatest outcomes as a result of his coaching was the content of this post! I travel a lot for work, and he helped me learn how to not miss a beat when traveling! When I hit a hotel exercise room, I now enter with a plan and confidence, not WTH am I going to do👊. Thanks Bart"
  },
  {
    "id": "13105f0e",
    "name": "Arthur Tina",
    "tagline": "Director Of Engineering @ Nordstrom",
    "kind": "text",
    "avatar": "/images/testimonials/avatars/arthur-tina.webp",
    "linkedin": null,
    "text": "The process/approach that Bart gives you is not just a set period to get in shape, but this is a mindset and framework that you can follow forever."
  },
  {
    "id": "8f8e5f9e",
    "name": "Drew White",
    "tagline": "CEO at Upside Down Wealth",
    "kind": "text",
    "avatar": "/images/testimonials/avatars/drew-white.webp",
    "linkedin": "https://www.linkedin.com/in/bartcagara/",
    "text": "I was burned by Health & Fitness trainers before I met Bart. So to stay I was skeptical of him is an understatement.\n\nPreviously, I joined multiple programs put on by \"gurus\" that over promised and under delivered. I also tried more programs and 30-day or 90-day challenges than I can count. And I tried accountability with buddies. None of it worked.\n\nI was 25lbs overweight and had been lifting for 1.5 years plus attending bootcamps prior to Bart. But the weight wasn't coming off. And to make things more difficult, my family and I live on the road in a 5th wheel RV traveling the country! So our food options and gyms change as we move around. But Bart worked with me through ALL of that!\n\nIt wasn't easy for me to hire Bart but I became so sick and tired of my situation and I believed he was the guy to help me transform. Bart told me he would be the last coach I'd ever need. I was skeptical when he said it but also slightly optimistic. It turns out he was right!\n\nBart is the exact opposite of every health guru and influencer out there. When he makes a promise, he OVER delivers on every single one. He was on my team from day one. When I failed or got stuck, he never once beat me up or made me feel bad. With Bart I felt like I constantly had someone in my corner who had my back but was also fighting alongside me.\n\nBart is not a heavy-handed coach who is going to beat you down and make you feel bad when you make poor decisions. He's going to tell you the failure was a good thing because there's lessons to be learned from it. Then he's going to help you uncover those lessons and move forward.\n\nIt has been 2 months since the 6 month coaching with Bart ended and I haven't missed a beat. I'm a whole new person! I know how to handle stress better, I've improved my self identity, and I love eating well and working out. All thins I couldn't say pre-Bart!\n\nWorking with Bart changed my life and my family's life. That is something I will forever be grateful to him for. He knew my goal was to make changes for me and for my family. So he gave me tips along the way on of how to help my wife and help my kids. Bart remembers the small details like that. He takes the full picture into account.\n\nLastly, Bart was ALWAYS there for me. Every step of the way for 6 whole months. I don't know anyone else as dedicated as him to my success (other than me). He is the best coach I've ever hired. I recommend him to any guy who needs to get their health right. And if you need to find out if he's the real deal or not...he is, but you can DM me and I'll tell you the same thing."
  },
  {
    "id": "4c357620",
    "name": "Robbert Koldenhof",
    "tagline": "Directeur/bestuurder @ LIOF",
    "kind": "text",
    "avatar": "/images/testimonials/avatars/robbert-koldenhof.webp",
    "linkedin": "https://www.linkedin.com/in/bartcagara",
    "text": "I met Bart early 2022 after a lot of personal dynamics. Due to the loss of structure I lost my body shape and had gained too much weight. And to be honest it did hurt most because I knew deep inside it was solely due to my own bad decisions.\n\nAlmost a year fast forward. I now realize I necessary didn’t need more information on how to lose weight and become more active, I had to redefine patterns, and change the relationship with food and exercise, and that’s were Bart happens to excel.\n\nBart combines a structured approach with accommodating coaching skills to make a real change in 6 months, and not the non-sustainable results almost everyone can get in 6 weeks. I genuinely feel equipped to train with fun and efficiency, I enjoy the occasional beers and a copious meal, because I know and have experienced this does not have to result in sliding back again.\n\nAdversity: Of course, the +10 kg weight loss, better posture and looks are nice. But Bart really made the difference for me when my progress started to slip away after 3 months due to personal circumstances. By changing his coaching approach, allowing me to sort stuff out while preserving our progress, and by picking it up where we left it when possible again we really nailed it together in the second half of the program. Overcoming adversity, knowing that every day you have a choice to make a small step towards a healthier life, really make me feel the architect of my own health now. I cannot thank Bart enough for these life skill and would recommend him to everyone who wants to create his own healthy future."
  },
  {
    "id": "eaa6a354",
    "name": "Matt Cohen",
    "tagline": "Head of Revenue Enablement at SingleStore",
    "kind": "text",
    "avatar": "/images/testimonials/avatars/matt-cohen.webp",
    "linkedin": "https://www.linkedin.com/in/bartcagara",
    "text": "I was a bit skeptical when I came across Bart's profile because it felt like I had tried everything to lose weight: Keto, intermittent fasting, working out more, etc. At best, I had seen short-term results without sustainability. As soon as I lost the weight, something would come up (like quarantine) and I’d slide right back.\n\nThat all changed when I started working with Bart. He made a meal plan that was based on what I already enjoyed eating and wasn’t overly rigid. He taught me about the importance of macros and how certain foods we all think of as healthy really aren’t (looking at you olive oil). He built a lifting regimen for me and helped me understand working out harder is not necessarily better. Most importantly, he changed my entire mindset about food. I no longer feel the need to finish everything that comes my way because I think strategically about what I put into my body.\n\nI have lost about <mark>20 pounds</mark> in my first <mark>12 weeks</mark> working with Bart, and that has been in spite of summer travel. He always works within the boundaries of my real life, expecting fun times and setbacks. He’s also just a genuinely good guy who is easy to talk to and makes himself available for questions anytime. I’d definitely recommend Bart’s services to anyone trying to make a long-term change for their health. Thanks, Bart!"
  }
];
