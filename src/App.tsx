import { motion } from "framer-motion";
import {
  Award,
  Bot,
  BriefcaseBusiness,
  CircuitBoard,
  Cpu,
  Facebook,
  Gavel,
  Instagram,
  Lightbulb,
  Medal,
  Radio,
  ShieldCheck,
  Swords,
  Trophy,
  Twitter,
  Users,
  Wrench,
  Youtube,
  Zap,
} from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

const upcoming = [
  ["Event in Mumbai", "11/11/25", "BKC", "Lorem"],
  ["Event in Delhi", "11/11/25", "Location", "Lorem"],
];

const categories = [
  { title: "Mini Makers", text: "Where Creativity Meets Logic.", icon: Cpu },
  { title: "Junior Innovators", text: "Engineering & Strategy Fundamentals.", icon: Lightbulb },
  { title: "Young Engineers", text: "Advanced Wireless & Autonomous Control.", icon: Bot },
  { title: "Robo Minds", text: "Elite Professional Sports & Robotics.", icon: Trophy },
];

const disciplines = [
  {
    title: "Robo Race",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Line Follower",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "RC Racing",
    img: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "FPV Drone Racing & Aeromodelling",
    img: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Robo Hockey",
    img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Robo War",
    img: "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?auto=format&fit=crop&w=500&q=80",
  },
];

const advantages = [
  { title: "National Recognition", text: "Benchmark your skills on India's official robotics leaderboard.", icon: Medal },
  { title: "Fair Judging", text: "Compete with confidence under standardized, expert-led evaluation.", icon: Gavel },
  { title: "Career Ops", text: "Bridge the gap between arena victories and top-tier tech placements.", icon: BriefcaseBusiness },
  { title: "High - Energy Eco", text: "Join a nationwide community of elite innovators and robotics athletes.", icon: Zap },
];

function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#121212]/95 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-[980px] items-center justify-between px-4">
        <a className="relative flex items-center font-orbitron text-[18px] font-black italic tracking-[-0.05em] text-white" href="#">
          <span className="text-[#2e64ff]">B</span>
          <span className="text-[#58a4ff]">o</span>
          <span className="text-[#ff3d43]">T</span>
          <span className="text-white">LEAGUE</span>
          <span className="ml-1 text-yellow-400">⚡</span>
        </a>
        <nav className="hidden items-center gap-12 font-orbitron text-[11px] text-white/80 md:flex">
          <a className="nav-active" href="#events">Events</a>
          <a href="#programs">Programs</a>
          <a href="#community">Community</a>
          <a href="#ranks">Ranks</a>
        </nav>
        <div className="flex gap-3">
          <button className="btn-small btn-dark">Login</button>
          <button className="btn-small btn-red">Register Now</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero relative min-h-[420px] pt-12">
      <div className="absolute inset-0 hero-img" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/5" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#191919] to-transparent" />
      <div className="mx-auto grid min-h-[380px] max-w-[980px] items-center px-6">
        <motion.div {...fade} className="relative z-10 max-w-[520px]">
          <div className="absolute left-[535px] top-[-72px] hidden w-[350px] items-center gap-2 bg-black/70 px-3 py-1 text-[10px] text-white lg:flex">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="text-red-500">LIVE</span>
            <span>: Episode 14. Bengaluru Regionals</span>
            <span className="ml-auto text-red-500">WATCH LIVE</span>
          </div>
          <h1 className="font-orbitron text-[42px] font-black uppercase leading-[0.92] tracking-[0.02em] text-white sm:text-[56px]">
            India's Ultimate Robotics Arena
          </h1>
          <p className="mt-4 max-w-[380px] text-[16px] font-semibold leading-5 text-white">
            Build.Compete.Rank.The National Ecosystem for Robotics Arena
          </p>
          <div className="mt-5 flex gap-3">
            <button className="btn-main btn-red">Create Account</button>
            <button className="btn-main btn-outline">Explore Events</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Bracket() {
  return (
    <div className="bracket-viz">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="bracket-team left-team" style={{ top: i * 40 }} />
      ))}
      <div className="bracket-line v1" />
      <div className="bracket-line h1" />
      <div className="bracket-line h2" />
      <div className="bracket-line h8" />
      <div className="bracket-team mid-team mid-a" />
      <div className="bracket-line v2" />
      <div className="bracket-line h3" />
      <div className="bracket-line h4" />
      <div className="bracket-team mid-team mid-b" />
      <div className="bracket-line h2" />
      <div className="bracket-line v3" />
      <div className="bracket-line h5" />
      <div className="bracket-line h6" />
      <div className="bracket-line h9" />
      <div className="bracket-line h7" />
      <div className="bracket-team final-team" />
    </div>
  );
}

function Events() {
  return (
    <section id="events" className="competition-section">
      <div className="mx-auto max-w-[1180px] px-7 py-[70px]">
        <motion.h2 {...fade} className="competition-title">Competitions & Events</motion.h2>
        <div className="competition-grid items-stretch">
          <motion.div {...fade} className="flex flex-col">
            <div className="competition-label text-[#ff424b]">Live Now</div>
            <div className="competition-card live-card flex-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="competition-card-title">Bengaluru Regionals</h3>
                  <p className="competition-muted">Lorem Ipsum</p>
                </div>
                <span className="status-pill">Ongoing</span>
              </div>
            <Bracket />
            </div>
          </motion.div>
          <motion.div {...fade} className="flex flex-col">
            <div className="competition-label text-white">Upcoming</div>
            <div className="space-y-[14px] ">
            {upcoming.map(([name, date, location, cat]) => (
              <div className="competition-card upcoming-card " key={name}>
                <h3 className="competition-card-title">{name}</h3>
                <div className="event-meta">
                  <span><b>Date</b><br />{date}</span>
                  <span><b>Location</b><br />{location}</span>
                  <span><b>Category</b><br />{cat}</span>
                </div>
                <button className="register-btn">Register</button>
              </div>
            ))}
            </div>
          </motion.div>
          <motion.div {...fade} className="flex flex-col">
            <div className="competition-label text-white">Past Results</div>
            <div className="competition-card past-card flex-1 ">
              {[1, 2, 3].map((item) => (
                <div key={item} className="result-item">
                  <h3 className="competition-card-title">Bengaluru Regionals</h3>
                  <p className="competition-muted">Lorem Ipsum</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    { title: "Build Your Team", icon: Wrench },
    { title: "Compete Across India", icon: CircuitBoard },
    { title: "Earn National Ranking & Value", icon: Trophy },
    { title: "Join The League", icon: Users },
  ];
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[820px] px-6 py-12 text-center">
        <p className="font-orbitron text-[14px] uppercase text-red-500">User Journey</p>
        <motion.h2 {...fade} className="section-title">Your Path To The League</motion.h2>
        <p className="-mt-1 text-[12px] text-white/35">Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
        <div className="relative mt-10 grid gap-9 md:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-[38px] hidden h-1 bg-[#251dff] md:block" />
          {steps.map(({ title, icon: Icon }, i) => (
            <motion.div {...fade} className="relative" key={title}>
              <div className="mx-auto grid h-[84px] w-[84px] place-items-center rounded-full border-[8px] border-[#2d2d2d] bg-[#111] shadow-[0_0_0_4px_#251dff_inset]">
                <Icon className="text-white" size={34} />
              </div>
              <p className="mt-6 font-orbitron text-[12px] uppercase text-red-500">Step {i + 1}</p>
              <p className="mx-auto mt-2 max-w-[110px] text-[12px] font-black uppercase leading-3 text-white">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCategories() {
  return (
    <section id="programs" className="section bg-[#1b1b1b] border-right-red">
      <div className="mx-auto max-w-[980px] px-6 py-14">
        <motion.h2 {...fade} className="section-title">What is BotLeague?</motion.h2>
        <div className="mt-9 grid gap-8 md:grid-cols-[1.55fr_0.8fr]">
          <div className="grid gap-x-14 gap-y-8 sm:grid-cols-2">
            {["Structured Events", "Digital Identity", "National Ranking", "Career Pathway"].map((title, i) => (
              <motion.div {...fade} key={title}>
                <p className="font-orbitron text-[20px] font-black text-red-500">{i + 1}.</p>
                <h3 className="text-[18px] font-bold uppercase text-white">{title}</h3>
                <p className="mt-1 max-w-[250px] text-[13px] leading-4 text-white/45">
                  {i === 0 && '"From one-off events to a year-round competitive season."'}
                  {i === 1 && '"Your professional robotics legacy, tracked and verified."'}
                  {i === 2 && '"Benchmark your skills against the best engineers in India."'}
                  {i === 3 && '"Turning arena victories into real-world industry opportunities."'}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="hidden items-center justify-center md:flex">
            <div className="tech-diagram">
              <CircuitBoard size={150} />
            </div>
          </div>
        </div>
        <motion.h2 {...fade} className="section-title mt-16">Categories</motion.h2>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ title, text, icon: Icon }, i) => (
            <motion.div {...fade} whileHover={{ y: -6 }} className={`cat-card ${i === 0 ? "cat-active" : ""}`} key={title}>
              <Icon size={46} className="text-yellow-400" />
              <h3>{title}</h3>
              <p>{text}</p>
              <a>Learn More +</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Disciplines() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-[980px] px-6 py-14">
        <p className="font-orbitron text-[16px] uppercase text-red-500">Sports</p>
        <motion.h2 {...fade} className="section-title">Competition Disciplines</motion.h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {disciplines.map((disc) => (
            <motion.article {...fade} whileHover={{ y: -6 }} className="discipline" key={disc.title}>
              <div style={{ backgroundImage: `url(${disc.img})` }} />
              <h3>{disc.title}</h3>
            </motion.article>
          ))}
          <div className="circuit-tile hidden lg:block" />
        </div>
      </div>
    </section>
  );
}

function LeaderboardCard() {
  return (
    <motion.div {...fade} className="leader-card">
      <div className="leader-glow" />
      <h3>Leaderboard</h3>
      <Award className="mx-auto mt-3 text-yellow-300" size={55} />
      <p className="mt-1 text-center text-[10px] text-white/55">Player Name</p>
      <p className="text-center font-orbitron text-[23px] font-black text-white">508754</p>
      <div className="mt-2 space-y-1.5">
        {[1, 2, 3, 4, 5, 6, 7].map((rank) => (
          <div className="rank-row" key={rank}>
            <span>{rank}</span>
            <span>Player Name</span>
            <span>{rank % 2 ? "3290" : "1905"}</span>
            <ShieldCheck size={12} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Advantage() {
  return (
    <section id="ranks" className="section bg-[#1b1b1b] border-left-red border-right-red">
      <div className="mx-auto grid max-w-[980px] gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.75fr]">
        <div>
          <p className="font-orbitron text-[20px] uppercase tracking-[0.12em] text-red-500">Why Register ?</p>
          <motion.h2 {...fade} className="section-title">The League Advantage</motion.h2>
          <div className="mt-8 space-y-5">
            {advantages.map(({ title, text, icon: Icon }) => (
              <motion.div {...fade} className="flex gap-5" key={title}>
                <Icon className="mt-1 shrink-0 text-red-500" size={36} />
                <div>
                  <h3 className="text-[18px] font-black uppercase">{title}</h3>
                  <p className="max-w-[390px] text-[13px] leading-4 text-white/45">"{text}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <LeaderboardCard />
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section id="community" className="bg-black border-left-red border-right-red">
      <div className="mx-auto max-w-[980px] px-6 py-14">
        <motion.h2 {...fade} className="section-title">Join The Ecosystem</motion.h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {["Become In Judge", "Volunteer", "Community Member"].map((title) => (
            <motion.form {...fade} className="form-card" key={title}>
              <h3>{title}</h3>
              <input placeholder="Name" />
              <input placeholder="Location" />
              <input placeholder="Enroll" />
              <button>Sign Up</button>
            </motion.form>
          ))}
        </div>
        <Sponsors />
      </div>
    </section>
  );
}

function Sponsors() {
  const sponsors = ["NIT Delhi", "Indian Bit", "NIT Silchar", "Robo Company", "IIT Bombay", "Robo Company"];
  return (
    <div className="mt-16">
      <p className="font-orbitron text-[16px] uppercase text-white">Sponsors</p>
      <div className="mt-8 grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
        {sponsors.map((sponsor, i) => (
          <div className="flex items-center gap-5 text-white/65" key={`${sponsor}-${i}`}>
            <div className="grid h-14 w-14 place-items-center rounded-full border border-white/30 bg-white/5">
              {i % 2 ? <Radio size={30} /> : <Swords size={30} />}
            </div>
            <span className="text-[15px] uppercase">{sponsor}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-left-red border-right-red">
      <div className="mx-auto grid max-w-[980px] gap-8 border-t border-white/15 px-6 py-8 md:grid-cols-[1fr_0.8fr]">
        <div>
          <h3 className="text-[14px] font-black uppercase">Quick Links</h3>
          <div className="mt-5 grid grid-cols-2 gap-x-12 gap-y-2 text-[12px] text-white/55">
            {["The Arena", "Episodes", "National Rankings", "Programs", "Rulebooks", "Join the Team", "Sponsorships", "Help Center", "Contact Us", "Legal"].map((link) => (
              <a href="#" key={link}>{link}</a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-[14px] font-black uppercase">Social Media</h3>
          <div className="mt-6 flex gap-5 text-white/55">
            {[Youtube, Instagram, Facebook, Twitter].map((Icon, i) => <Icon key={i} size={25} />)}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Nav />
      <Hero />
      <Events />
      <Journey />
      <AboutCategories />
      <Disciplines />
      <Advantage />
      <Ecosystem />
      <Footer />
    </main>
  );
}
