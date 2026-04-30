import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [active, setActive] = useState('home');
  const [progress, setProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const profile = '/profile.jpg';

  const particles = useMemo(() => Array.from({ length: 18 }, (_, i) => i), []);
  const beams = useMemo(() => Array.from({ length: 5 }, (_, i) => i), []);
  const sections = ['home', 'about', 'work', 'contact'];

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      const h = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      setProgress((y / h) * 100);

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) setActive(id);
      });
    };

    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', onScroll);
    window.addEventListener('mousemove', onMove);
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const cards = [
    { icon: '✦', title: 'Experience', items: ['Freelance Graphic Designer', 'Affinity Designer', 'Canva Pro Designer', 'Imaginary Film (2021)', 'PT Akam Starlight (2022)'] },
    { icon: '🎓', title: 'Education', items: ['SMK Muhammadiyah Bumiayu (2019-2021)', 'Universitas Peradaban (2022-Present)'] },
    { icon: '⚡', title: 'Vision', items: ['Break The Limit', 'Cross The Frame', 'Stay Different', 'Keep Growing'] },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05070b] bg-[radial-gradient(circle_at_top,#13295a_0%,#05070b_45%,#030408_100%)] font-mono text-[#6f8fb8]">
      <div className="fixed left-0 top-0 z-50 h-1 bg-[#6f8fb8]" style={{ width: `${progress}%` }} />

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 hidden h-32 w-32 rounded-full bg-[#6f8fb8]/30 blur-2xl md:block"
        animate={{ x: cursor.x - 64, y: cursor.y - 64, scale: [1, 1.15, 1] }}
        transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-40 hidden h-56 w-56 rounded-full bg-pink-500/10 blur-3xl md:block"
        animate={{ x: cursor.x - 112, y: cursor.y - 112 }}
        transition={{ type: 'spring', stiffness: 90, damping: 22 }}
      />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070b]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 text-xs uppercase tracking-[0.25em] md:flex-row">
          <div className="text-xl font-black text-[#f3efe6]">PORTOFOLIO</div>
          <nav className="flex gap-4">
            {sections.map((item) => (
              <button key={item} onClick={() => go(item)} className={active === item ? 'text-white' : ''}>
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden border-b border-white/10 px-4 text-center">
        <motion.div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-[#6f8fb8]/20 blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }} transition={{ duration: 8, repeat: Infinity }} />
        <motion.div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-pink-500/15 blur-3xl" animate={{ scale: [1.1, 1, 1.15], opacity: [0.2, 0.35, 0.2] }} transition={{ duration: 10, repeat: Infinity }} />

        {beams.map((b) => (
          <motion.div
            key={b}
            className="absolute top-0 h-full w-24 bg-gradient-to-b from-white/10 via-[#6f8fb8]/20 to-transparent blur-2xl"
            style={{ left: `${8 + b * 20}%` }}
            animate={{ opacity: [0, 0.35, 0], y: [-80, 80, -80] }}
            transition={{ duration: 6 + b, repeat: Infinity, delay: b * 0.4 }}
          />
        ))}

        {particles.map((p) => (
          <motion.div
            key={p}
            className="absolute h-2 w-2 rounded-full bg-white/70 shadow-[0_0_14px_rgba(255,255,255,0.9)]"
            style={{ left: `${(p * 7) % 100}%`, top: `${(p * 9) % 100}%` }}
            animate={{ y: [40, -120], opacity: [0, 1, 0], scale: [0.4, 1, 0.4] }}
            transition={{ duration: 4 + (p % 6), repeat: Infinity, delay: p * 0.25 }}
          />
        ))}

        <div className="mb-6 rounded-full border border-white/10 px-4 py-2 text-xs tracking-[0.35em] text-white/70">
          GRAPHIC DESIGNER ✦ STAY DIFFERENT ✦
        </div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-[56px] font-black leading-[0.86] tracking-[-0.04em] text-[#f3efe6] drop-shadow-[0_0_28px_rgba(255,255,255,0.18)] sm:text-[120px] md:text-[190px] lg:text-[230px]">
          DENDI.
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-4 text-sm text-white/90 sm:text-base md:text-lg">
          BREAK THE LIMIT. CROSS THE FRAME.
        </motion.p>
        <p className="mt-2 text-xs uppercase tracking-[0.45em] text-white/60">LOUDER • BOLDER • UNSTOPPABLE</p>
      </section>
<section
  id="about"
  className="grid min-h-screen items-center gap-10 border-b border-white/10 px-4 py-16 md:grid-cols-2 md:px-10"
>
  {/* TEXT */}
  <div className="flex h-full flex-col justify-center">
    <h2 className="text-2xl font-bold leading-tight text-[#f3efe6] md:text-5xl">
      HELLO, I'M SATRIA DENDI PERMANA,
      <br />
      A DESIGNER WHO BREAKS LIMITS.
    </h2>

    <p className="mt-6 max-w-xl text-sm leading-8 md:text-lg">
      Lahir pada tahun 2003 dan besar di Brebes, Jawa Tengah, Indonesia.
      Saya terus melangkah maju sebagai Graphic Designer yang berani
      mendobrak batas, menciptakan visual yang berani, mengeksplorasi
      UI/UX, dan mengubah ide menjadi karya penuh energi tanpa batas—
      STEP OUT dan ciptakan jalan saya sendiri.
    </p>
  </div>

  {/* FOTO PROFIL */}
  <div className="flex h-full items-center justify-center md:justify-end">
    <div className="aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
      <img
        src={profile}
        alt="Profile"
        className="h-full w-full object-cover"
      />
    </div>
  </div>
</section>

      <section id="work" className="min-h-screen border-b border-white/10 px-4 py-16 md:px-10">
        <h3 className="mb-10 text-3xl font-bold text-[#f3efe6]">✦ODDINARY HIGHLIGHTS✦</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.03, boxShadow: '0 20px 50px rgba(111,143,184,0.18)' }}
              className="rounded-[1.8rem] border border-white/15 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center gap-3 text-xl font-bold text-[#f3efe6]">
                <span>{card.icon}</span>
                <span>{card.title}</span>
              </div>
              <div className="space-y-3">
                {card.items.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 px-4 py-12 text-center">
        <div className="mx-auto mb-10 max-w-2xl rounded-[1.8rem] border border-white/15 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_60px_rgba(111,143,184,0.12)]">
          <div className="mb-4 text-lg font-bold text-[#f3efe6]">SEND MESSAGE</div>
          <form action="https://formsubmit.co/dendipermana1107@gmail.com" method="POST" className="grid gap-4 text-left">
            <input type="hidden" name="_subject" value="New Portfolio Message" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="name" required placeholder="Your Name" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#6f8fb8]" />
            <input type="email" name="email" required placeholder="Your Email" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#6f8fb8]" />
            <textarea name="message" required rows={5} placeholder="Your Message" className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-[#6f8fb8] resize-none"></textarea>
            <motion.button whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} type="submit" className="rounded-xl bg-[#6f8fb8] px-5 py-3 text-sm font-bold text-black">
              SEND EMAIL
            </motion.button>
          </form>
        </div>
        <div className="text-2xl font-bold text-[#f3efe6]">STAY CONNECTED</div>
        <div className="mt-6 text-sm">Instagram @dendiii_skyz • WhatsApp 085640854493 • Email dendipermana1107@gmail.com</div>
      </footer>
    </div>
  );
}
