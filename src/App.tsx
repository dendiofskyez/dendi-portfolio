import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const profile = "/profile.jpg";
  const sections = ["home", "about", "work", "contact"];

  const particles = useMemo(
    () => Array.from({ length: 16 }, (_, i) => i),
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2400);

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
      clearTimeout(timer);
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
      title: "Experience",
      icon: "✦",
      items: [
        "Freelance Graphic Designer",
        "Affinity Designer",
        "Canva Pro Designer",
        "Imaginary Film (2021)",
        "PT Akam Starlight (2022)",
      ],
    },
    {
      title: "Education",
      icon: "🎓",
      items: [
        "SMK Muhammadiyah Bumiayu",
        "Universitas Peradaban",
        "Informatika",
      ],
    },
    {
      title: "Vision",
      icon: "⚡",
      items: [
        "Break The Limit",
        "Cross The Frame",
        "Stay Different",
        "Keep Growing",
      ],
    },
  ];

  return (
    <>
      {/* INTRO */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-[#030408]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="absolute h-72 w-72 rounded-full bg-[#6f8fb8]/20 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative text-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-4 text-xs tracking-[0.45em] text-white/60"
              >
                PORTFOLIO EXPERIENCE
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl font-black text-[#f3efe6] sm:text-7xl"
              >
                DENDI.
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 1.2 }}
                className="mx-auto mt-5 h-[2px] max-w-[220px] bg-[#6f8fb8]"
              />

              <p className="mt-5 text-[11px] tracking-[0.35em] text-white/50">
                ENTERING CREATIVE WORLD
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN */}
      <main className="min-h-screen overflow-x-hidden bg-[#05070b] bg-[radial-gradient(circle_at_top,#13295a_0%,#05070b_45%,#030408_100%)] font-mono text-[#6f8fb8]">
        {/* progress */}
        <div
          className="fixed left-0 top-0 z-50 h-[3px] bg-[#6f8fb8]"
          style={{ width: `${progress}%` }}
        />

        {/* cursor desktop */}
        <motion.div
          className="pointer-events-none fixed left-0 top-0 z-50 hidden h-32 w-32 rounded-full bg-[#6f8fb8]/20 blur-2xl lg:block"
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

        {/* NAVBAR */}
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070b]/70 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 md:px-10">
            <div className="text-base font-black tracking-[0.25em] text-[#f3efe6] sm:text-xl">
              PORTOFOLIO
            </div>

            <nav className="flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.22em] sm:gap-5 sm:text-xs md:gap-7">
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
          className="relative flex flex-col items-center justify-center overflow-hidden border-b border-white/10 px-4 text-center min-h-[78vh] py-12 sm:min-h-[88vh] sm:py-16 md:min-h-screen md:py-20"
        >
          {particles.map((p) => (
            <motion.div
              key={p}
              className="absolute h-2 w-2 rounded-full bg-white/70"
              style={{
                left: `${(p * 6) % 100}%`,
                top: `${(p * 8) % 100}%`,
              }}
              animate={{
                y: [30, -90],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + (p % 4),
                repeat: Infinity,
                delay: p * 0.3,
              }}
            />
          ))}

          <div className="mb-5 rounded-full border border-white/10 px-4 py-2 text-[10px] tracking-[0.25em] text-white/70 sm:px-6 sm:text-xs">
            GRAPHIC DESIGNER ✦ STAY DIFFERENT ✦
          </div>

          <h1 className="text-[56px] font-black leading-[0.9] tracking-[-0.05em] text-[#f3efe6] sm:text-[110px] md:text-[160px] lg:text-[220px]">
            DENDI.
          </h1>

          <p className="mt-4 text-sm text-white/90 sm:text-base md:text-lg">
            BREAK THE LIMIT. CROSS THE FRAME.
          </p>

          <p className="mt-3 text-[10px] tracking-[0.32em] text-white/60 sm:text-xs">
            LOUDER • BOLDER • UNSTOPPABLE
          </p>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="mx-auto grid max-w-7xl items-center gap-10 border-b border-white/10 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-14 md:px-10 md:py-24"
        >
          <div className="order-2 md:order-1">
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
              Lahir pada tahun 2003 dan besar di Brebes, Jawa Tengah,
              Indonesia. Saya terus berkembang sebagai Graphic Designer yang
              berani mendobrak batas, menciptakan visual modern, mengeksplorasi
              UI/UX, dan mengubah ide menjadi karya penuh energi.
            </p>
          </div>

          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <div className="w-full max-w-[300px] sm:max-w-sm md:max-w-md">
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
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-[1.8rem] border border-white/15 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="mb-5 flex items-center gap-3 text-lg font-bold text-[#f3efe6]">
                  <span>{card.icon}</span>
                  <span>{card.title}</span>
                </div>

                <div className="space-y-3 text-sm sm:text-base">
                  {card.items.map((item) => (
                    <div key={item}>{item}</div>
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
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_subject"
                value="Pesan Baru Portfolio Dendi"
              />
              <input type="hidden" name="_template" value="table" />

              <input
                type="text"
                name="name"
                required
                placeholder="Nama"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40"
              />

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Pesan..."
                className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40"
              />

              <button
                type="submit"
                className="rounded-xl bg-[#6f8fb8] px-5 py-3 text-sm font-bold text-black transition hover:scale-[1.02]"
              >
                KIRIM EMAIL
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
      </main>
    </>
  );
}