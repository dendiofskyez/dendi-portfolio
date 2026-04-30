import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./index.css";

export default function App() {
  const [active, setActive] = useState("home");

  const go = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const onScroll = () => {
      const ids = ["home", "about", "work", "contact"];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top;

        if (top <= 160) {
          setActive(id);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menu = ["home", "about", "work", "contact"];

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
    <main className="bg-[#06070a] text-white overflow-x-hidden min-h-screen">
      {/* background glow */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(40,80,255,0.18),transparent_40%)]" />

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-6xl justify-center gap-6 sm:gap-10 px-4 py-4 text-[11px] sm:text-sm uppercase tracking-[0.35em] text-white/70">
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
      </header>

      {/* HERO */}
      <section
        id="home"
        className="px-6 pt-32 pb-24 text-center sm:px-10 md:px-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto mb-8 w-fit rounded-full border border-white/10 px-5 py-3 text-[10px] sm:text-xs tracking-[0.45em] text-white/70">
            GRAPHIC DESIGNER ✦ STAY DIFFERENT ✦
          </div>

          <h1 className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-6xl font-semibold leading-none tracking-tight text-transparent sm:text-8xl md:text-[9rem]">
            DENDI.
          </h1>

          <p className="mt-6 text-lg tracking-wide text-white/75 sm:text-2xl">
            BREAK THE LIMIT. CROSS THE FRAME.
          </p>

          <p className="mt-4 text-xs leading-relaxed tracking-[0.45em] text-white/45 sm:text-sm md:text-lg">
            LOUDER • BOLDER • UNSTOPPABLE
          </p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="grid grid-cols-1 items-center gap-14 px-6 py-24 sm:px-10 md:grid-cols-2 md:px-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            HELLO, I'M SATRIA DENDI PERMANA,
            <br />
            A DESIGNER WHO BREAKS LIMITS.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-9 text-white/60 sm:text-lg">
            Lahir pada tahun 2003 dan besar di Brebes, Jawa Tengah, Indonesia.
            Saya terus melangkah maju sebagai Graphic Designer yang berani
            mendobrak batas, menciptakan visual yang berani, mengeksplorasi
            UI/UX, dan mengubah ide menjadi karya penuh energi tanpa batas —
            STEP OUT dan ciptakan jalan saya sendiri.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02, y: -6 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto w-full max-w-xs overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.55)] sm:max-w-sm md:max-w-md"
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
        className="px-6 py-24 sm:px-10 md:px-16 md:py-32"
      >
        <motion.h3
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-2xl font-semibold tracking-[0.25em] text-white/90"
        >
          HIGHLIGHTS
        </motion.h3>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl"
            >
              <h4 className="mb-5 text-xl font-semibold">{card.title}</h4>

              <div className="space-y-3 text-white/65">
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
        className="px-6 py-24 text-center sm:px-10 md:px-16 md:py-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-semibold">STAY CONNECTED</h3>

          <p className="mt-5 text-white/60">
            Instagram: @dendi.skyez • WhatsApp: 085648844343 • Email:
            dendipermana110@gmail.com
          </p>

          <form className="mt-8 grid gap-4">
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
        </motion.div>
      </section>
    </main>
  );
}