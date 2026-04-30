import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import "./index.css";

const menu = ["home", "about", "work", "contact"];

export default function App() {
  const [active, setActive] = useState("home");

  const menuItems = useMemo(() => menu, []);

  const go = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const onScroll = () => {
      for (const id of menuItems) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top;

        if (top <= 140) setActive(id);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuItems]);

  const cards = [
    {
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
      title: "Education",
      items: [
        "SMK Muhammadiyah Bumiayu (2019–2021)",
        "Universitas Peradaban Informatika (2022–Now)",
      ],
    },
    {
      title: "Vision",
      items: [
        "Break The Limit",
        "Cross The Frame",
        "Stay Growing",
        "Keep Evolving",
      ],
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#06070a] text-white">
      {/* background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(40,80,255,0.18),transparent_40%)]" />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 md:px-10">
          <h1 className="text-sm font-semibold tracking-[0.35em] text-white/90 sm:text-base">
            PORTOFOLIO
          </h1>

          <nav className="flex gap-3 text-[11px] uppercase tracking-[0.25em] text-white/65 sm:gap-6 sm:text-xs md:gap-8 md:text-sm">
            {menu.map((item) => (
              <button
                key={item}
                onClick={() => go(item)}
                className={`transition-all duration-300 hover:text-white ${
                  active === item ? "text-white" : ""
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="flex min-h-screen items-center justify-center px-5 pt-24 pb-14 sm:px-8 md:px-14"
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-center"
        >
          {/* tag */}
          <div className="mx-auto mb-7 w-fit max-w-full rounded-full border border-white/10 px-4 py-3 text-[10px] tracking-[0.28em] text-white/65 sm:px-6 sm:text-xs sm:tracking-[0.42em]">
            GRAPHIC DESIGNER ✦ STAY DIFFERENT ✦
          </div>

          {/* title */}
          <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent text-[4.2rem] font-semibold leading-none tracking-tight sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
            DENDI.
          </h2>

          {/* slogan */}
          <p className="mt-5 text-base tracking-[0.12em] text-white/85 sm:text-xl md:text-2xl">
            BREAK THE LIMIT. CROSS THE FRAME.
          </p>

          {/* sub */}
          <p className="mt-4 text-[11px] leading-relaxed tracking-[0.35em] text-white/45 sm:text-xs md:text-sm">
            LOUDER • BOLDER • UNSTOPPABLE
          </p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-16 md:px-14 md:py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            HELLO, I'M SATRIA
            <br />
            DENDI PERMANA.
          </h3>

          <p className="mt-6 text-base leading-8 text-white/65 sm:text-lg sm:leading-9">
            Lahir pada tahun 2003 dan besar di Brebes, Jawa Tengah, Indonesia.
            Saya terus berkembang sebagai Graphic Designer yang berani mendobrak
            batas, menciptakan visual yang berani, mengeksplorasi UI/UX, dan
            mengubah ide menjadi karya modern penuh energi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-xs overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.55)] sm:max-w-sm md:max-w-md"
        >
          <img
            src="/profile.jpg"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      {/* WORK */}
      <section
        id="work"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-14 md:py-24"
      >
        <h3 className="mb-10 text-center text-xl font-semibold tracking-[0.28em] sm:text-2xl">
          HIGHLIGHTS
        </h3>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-7">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <h4 className="mb-5 text-lg font-semibold sm:text-xl">
                {card.title}
              </h4>

              <div className="space-y-3 text-sm text-white/65 sm:text-base">
                {card.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:px-14 md:py-24"
      >
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-xl sm:p-8">
          <h3 className="text-2xl font-semibold">STAY CONNECTED</h3>

          <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
            Instagram: @dendi.skyez <br />
            WhatsApp: 085648844343 <br />
            Email: dendipermana110@gmail.com
          </p>

          <form className="mt-8 grid gap-4 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 outline-none"
            />
            <button className="rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:opacity-90">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}