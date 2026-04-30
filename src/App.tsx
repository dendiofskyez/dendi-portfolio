import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const profile = "/profile.jpg";

  const particles = useMemo(() => Array.from({ length: 18 }, (_, i) => i), []);
  const beams = useMemo(() => Array.from({ length: 5 }, (_, i) => i), []);
  const sections = ["home", "about", "work", "contact"];

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const h = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );

      setProgress((y / h) * 100);

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 140 && rect.bottom >= 140) {
          setActive(id);
        }
      });
    };

    const onMove = (e: MouseEvent) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("mousemove", onMove);

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const cards = [
    {
      icon: "✦",
      title: "Experience",
      items: [
        "Freelance Graphic Designer",
        "Affinity Designer",
        "Canva Pro Designer",
        "Imaginary Film (2021)",
        "PT Akam Starlight (2022)",
      ],
    },
    {
      icon: "🎓",
      title: "Education",
      items: [
        "SMK Muhammadiyah Bumiayu (2019-2021)",
        "Universitas Peradaban (2022-Present)",
      ],
    },
    {
      icon: "⚡",
      title: "Vision",
      items: [
        "Break The Limit",
        "Cross The Frame",
        "Stay Different",
        "Keep Growing",
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05070b] bg-[radial-gradient(circle_at_top,#13295a_0%,#05070b_45%,#030408_100%)] font-mono text-[#6f8fb8]">
      {/* progress bar */}
      <div
        className="fixed left-0 top-0 z-50 h-[3px] bg-[#6f8fb8]"
        style={{ width: `${progress}%` }}
      />

      {/* cursor glow desktop */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-32 w-32 rounded-full bg-[#6f8fb8]/25 blur-2xl lg:block"
        animate={{
          x: cursor.x - 64,
          y: cursor.y - 64,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 18,
        }}
      />

      {/* navbar */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070b]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 md:px-8">
          <div className="text-base font-black tracking-[0.25em] text-[#f3efe6] sm:text-xl">
            PORTOFOLIO
          </div>

          <nav className="flex flex-wrap justify-center gap-3 text-[10px] uppercase tracking-[0.22em] sm:gap-5 sm:text-xs md:gap-7">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => go(item)}
                className={`transition ${
                  active === item ? "text-white" : "text-white/60"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* HOME */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden border-b border-white/10 px-4 py-20 text-center sm:px-6 md:px-10"
      >
        <motion.div
          className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#6f8fb8]/20 blur-3xl sm:h-96 sm:w-96"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl sm:h-96 sm:w-96"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {beams.map((b) => (
          <motion.div
            key={b}
            className="absolute top-0 hidden h-full w-20 bg-gradient-to-b from-white/10 via-[#6f8fb8]/15 to-transparent blur-2xl md:block"
            style={{ left: `${10 + b * 18}%` }}
            animate={{ opacity: [0, 0.3, 0], y: [-80, 80, -80] }}
            transition={{
              duration: 6 + b,
              repeat: Infinity,
              delay: b * 0.4,
            }}
          />
        ))}

        {particles.map((p) => (
          <motion.div
            key={p}
            className="absolute h-2 w-2 rounded-full bg-white/70 shadow-[0_0_14px_rgba(255,255,255,0.9)]"
            style={{
              left: `${(p * 7) % 100}%`,
              top: `${(p * 9) % 100}%`,
            }}
            animate={{
              y: [40, -120],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + (p % 6),
              repeat: Infinity,
              delay: p * 0.25,
            }}
          />
        ))}

        <div className="mb-6 max-w-full rounded-full border border-white/10 px-4 py-2 text-[10px] tracking-[0.25em] text-white/70 sm:px-6 sm:text-xs sm:tracking-[0.4em]">
          GRAPHIC DESIGNER ✦ STAY DIFFERENT ✦
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[64px] font-black leading-[0.9] tracking-[-0.05em] text-[#f3efe6] sm:text-[110px] md:text-[150px] lg:text-[220px]"
        >
          DENDI.
        </motion.h1>

        <p className="mt-5 px-2 text-sm text-white/90 sm:text-base md:text-lg">
          BREAK THE LIMIT. CROSS THE FRAME.
        </p>

        <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-white/60 sm:text-xs md:text-sm">
          LOUDER • BOLDER • UNSTOPPABLE
        </p>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl items-center gap-10 border-b border-white/10 px-4 py-16 sm:px-6 md:grid-cols-2 md:gap-14 md:px-10 md:py-24"
      >
        {/* TEXT */}
        <div className="order-2 md:order-1 flex flex-col justify-center">
          <h2 className="text-3xl font-bold leading-tight text-[#f3efe6] sm:text-4xl md:text-5xl">
            HELLO, I'M SATRIA
            <br />
            DENDI PERMANA,
            <br />
            A DESIGNER WHO
            <br />
            BREAKS LIMITS.
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-8 sm:text-base md:text-lg">
            Lahir pada tahun 2003 dan besar di Brebes, Jawa Tengah, Indonesia.
            Saya terus melangkah maju sebagai Graphic Designer yang berani
            mendobrak batas, menciptakan visual yang berani, mengeksplorasi
            UI/UX, dan mengubah ide menjadi karya penuh energi tanpa batas.
          </p>
        </div>

        {/* PHOTO */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end md:self-start">
          <div className="w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <img
                src={profile}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section
        id="work"
        className="mx-auto max-w-7xl border-b border-white/10 px-4 py-16 sm:px-6 md:px-10 md:py-24"
      >
        <h3 className="mb-10 text-center text-2xl font-bold text-[#f3efe6] sm:text-3xl">
          ✦ ODDINARY HIGHLIGHTS ✦
        </h3>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="rounded-[1.8rem] border border-white/15 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center gap-3 text-lg font-bold text-[#f3efe6] sm:text-xl">
                <span>{card.icon}</span>
                <span>{card.title}</span>
              </div>

              <div className="space-y-3 text-sm sm:text-base">
                {card.items.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <footer
        id="contact"
        className="px-4 py-16 text-center sm:px-6 md:px-10"
      >
        <div className="mx-auto mb-12 max-w-2xl rounded-[1.8rem] border border-white/15 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(111,143,184,0.12)] sm:p-8">
          <div className="mb-5 text-xl font-bold text-[#f3efe6]">
            SEND MESSAGE
          </div>

          <form
            action="https://formsubmit.co/dendipermana1107@gmail.com"
            method="POST"
            className="grid gap-4 text-left"
          >
            <input type="hidden" name="_subject" value="New Portfolio Message" />
            <input type="hidden" name="_captcha" value="false" />

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40"
            />

            <textarea
              name="message"
              rows={5}
              required
              placeholder="Your Message"
              className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40"
            />

            <button
              type="submit"
              className="rounded-xl bg-[#6f8fb8] px-5 py-3 text-sm font-bold text-black"
            >
              SEND EMAIL
            </button>
          </form>
        </div>

        <div className="text-2xl font-bold text-[#f3efe6]">
          STAY CONNECTED
        </div>

        <div className="mt-5 space-y-2 text-sm sm:text-base">
          <div>Instagram @dendiii_skyz</div>
          <div>WhatsApp 085640854493</div>
          <div>Email dendipermana1107@gmail.com</div>
        </div>
      </footer>
    </div>
  );
}