/* ============================================
   ClauDiretta — site scripts
   ============================================ */

const TRANSLATIONS = {
  ro: {
    nav_home: "Acasă",
    nav_vlogs: "Vloguri",
    nav_about: "Despre mine",
    nav_follow: "Urmărește-mă",
    hero_badge: "🎥 Vlogger în Palermo 🇮🇹",
    hero_title_1: "Bine ai venit pe",
    hero_title_2: "canalul meu!",
    hero_sub:
      "Sunt Clau, un băiat român stabilit în Palermo, Italia. Urmărește-mă în aventurile mele prin Sicilia: mâncare, locuri, oameni și viața de zi cu zi a unui român în Italia.",
    hero_subscribe: "Abonează-te",
    hero_watch: "Vezi vlogurile",
    stat_subs: "Abonați",
    stat_views: "Vizualizări",
    stat_videos: "Videoclipuri",
    vlogs_title: "Ultimele Vloguri",
    vlogs_sub: "Primul vlog e în pregătire — abonează-te ca să nu-l ratezi",
    coming_soon: "În curând",
    coming_soon_sub: "Primul vlog o să fie publicat — Abonează-te!",
    vlog_1_title: "O zi în Palermo 🌞",
    vlog_2_title: "Cea mai bună pizza 🍕",
    vlog_3_title: "Piața Ballarò 🛒",
    vlog_4_title: "Plaja Mondello 🏖️",
    vlog_5_title: "Viața de român în Italia 🇮🇹",
    vlog_6_title: "Street food sicilian 🍢",
    vlog_date_1: "1 iulie",
    vlog_date_2: "24 iunie",
    vlog_date_3: "17 iunie",
    vlog_date_4: "10 iunie",
    vlog_date_5: "3 iunie",
    vlog_date_6: "27 mai",
    about_label: "Despre mine",
    about_title: "Salut, eu sunt Clau!",
    about_p1:
      "M-am mutat din România în Palermo, Sicilia, pentru a-mi construi o viață nouă. De atunci, povestesc totul pe canalul meu de YouTube: de la prima zi în Italia, la cele mai bune pizza din oraș și plajele cu apă turcoaz.",
    about_p2:
      "Pe „ClauDiretta\" vei găsi vloguri zilnice despre viața unui român în Italia, gătit, travel și întâlniri cu oameni interesanți. Dacă îți place ce vezi, dă un like, comentează și abonează-te — fiecare abonat contează enorm pentru mine!",
    fact_1: "🇷🇴 Din România",
    fact_2: "🍕 Iubitor de pizza",
    fact_3: "🎥 Vloguri zilnice",
    fact_4: "🌍 4 limbi",
    follow_title: "Urmărește-mă",
    follow_sub: "Fii parte din comunitate pe toate platformele",
    footer_tag: "Din Palermo, cu drag. 🇮🇹❤️",
    footer_rights: "Toate drepturile rezervate.",
  },
  en: {
    nav_home: "Home",
    nav_vlogs: "Vlogs",
    nav_about: "About me",
    nav_follow: "Follow me",
    hero_badge: "🎥 Vlogger in Palermo 🇮🇹",
    hero_title_1: "Welcome to",
    hero_title_2: "my channel!",
    hero_sub:
      "I'm Clau, a Romanian guy living in Palermo, Italy. Follow me on my adventures across Sicily: food, places, people and the everyday life of a Romanian in Italy.",
    hero_subscribe: "Subscribe",
    hero_watch: "Watch the vlogs",
    stat_subs: "Subscribers",
    stat_views: "Views",
    stat_videos: "Videos",
    vlogs_title: "Latest Vlogs",
    vlogs_sub: "The first vlog is in the works — subscribe so you don't miss it",
    coming_soon: "Coming Soon",
    coming_soon_sub: "The first vlog will be published soon — Subscribe!",
    vlog_1_title: "A day in Palermo 🌞",
    vlog_2_title: "The best pizza 🍕",
    vlog_3_title: "Ballarò Market 🛒",
    vlog_4_title: "Mondello Beach 🏖️",
    vlog_5_title: "Life as a Romanian in Italy 🇮🇹",
    vlog_6_title: "Sicilian street food 🍢",
    vlog_date_1: "July 1",
    vlog_date_2: "June 24",
    vlog_date_3: "June 17",
    vlog_date_4: "June 10",
    vlog_date_5: "June 3",
    vlog_date_6: "May 27",
    about_label: "About me",
    about_title: "Hi, I'm Clau!",
    about_p1:
      "I moved from Romania to Palermo, Sicily, to build a new life. Since then, I document everything on my YouTube channel: from my first day in Italy to the best pizzas in town and turquoise-water beaches.",
    about_p2:
      "On \"ClauDiretta\" you'll find daily vlogs about the life of a Romanian in Italy, cooking, travel and meeting interesting people. If you like what you see, hit like, comment and subscribe — every subscriber means the world to me!",
    fact_1: "🇷🇴 From Romania",
    fact_2: "🍕 Pizza lover",
    fact_3: "🎥 Daily vlogs",
    fact_4: "🌍 4 languages",
    follow_title: "Follow me",
    follow_sub: "Join the community on all platforms",
    footer_tag: "From Palermo, with love. 🇮🇹❤️",
    footer_rights: "All rights reserved.",
  },
  fr: {
    nav_home: "Accueil",
    nav_vlogs: "Vlogs",
    nav_about: "À propos",
    nav_follow: "Suivez-moi",
    hero_badge: "🎥 Vlogueur à Palerme 🇮🇹",
    hero_title_1: "Bienvenue sur",
    hero_title_2: "ma chaîne !",
    hero_sub:
      "Je suis Clau, un jeune Roumain installé à Palerme, en Italie. Suivez-moi dans mes aventures à travers la Sicile : cuisine, lieux, gens et la vie quotidienne d'un Roumain en Italie.",
    hero_subscribe: "S'abonner",
    hero_watch: "Voir les vlogs",
    stat_subs: "Abonnés",
    stat_views: "Vues",
    stat_videos: "Vidéos",
    vlogs_title: "Derniers Vlogs",
    vlogs_sub: "Le premier vlog est en préparation — abonnez-vous pour ne pas le manquer",
    coming_soon: "Bientôt",
    coming_soon_sub: "Le premier vlog sera bientôt publié — Abonnez-vous !",
    vlog_1_title: "Une journée à Palerme 🌞",
    vlog_2_title: "La meilleure pizza 🍕",
    vlog_3_title: "Marché Ballarò 🛒",
    vlog_4_title: "Plage de Mondello 🏖️",
    vlog_5_title: "La vie d'un Roumain en Italie 🇮🇹",
    vlog_6_title: "Street food sicilien 🍢",
    vlog_date_1: "1 juillet",
    vlog_date_2: "24 juin",
    vlog_date_3: "17 juin",
    vlog_date_4: "10 juin",
    vlog_date_5: "3 juin",
    vlog_date_6: "27 mai",
    about_label: "À propos",
    about_title: "Salut, c'est Clau !",
    about_p1:
      "J'ai déménagé de Roumanie à Palerme, en Sicile, pour me construire une nouvelle vie. Depuis, je raconte tout sur ma chaîne YouTube : du premier jour en Italie aux meilleures pizzas de la ville et aux plages à l'eau turquoise.",
    about_p2:
      "Sur \"ClauDiretta\", vous trouverez des vlogs quotidiens sur la vie d'un Roumain en Italie, la cuisine, les voyages et les rencontres intéressantes. Si vous aimez ce que vous voyez, mettez un like, commentez et abonnez-vous — chaque abonné compte énormément pour moi !",
    fact_1: "🇷🇴 De Roumanie",
    fact_2: "🍕 Amoureux de pizza",
    fact_3: "🎥 Vlogs quotidiens",
    fact_4: "🌍 4 langues",
    follow_title: "Suivez-moi",
    follow_sub: "Rejoignez la communauté sur toutes les plateformes",
    footer_tag: "Depuis Palerme, avec amour. 🇮🇹❤️",
    footer_rights: "Tous droits réservés.",
  },
  de: {
    nav_home: "Start",
    nav_vlogs: "Vlogs",
    nav_about: "Über mich",
    nav_follow: "Folge mir",
    hero_badge: "🎥 Vlogger in Palermo 🇮🇹",
    hero_title_1: "Willkommen auf",
    hero_title_2: "meinem Kanal!",
    hero_sub:
      "Ich bin Clau, ein rumänischer Junge, der in Palermo, Italien, lebt. Begleite mich auf meinen Abenteuern durch Sizilien: Essen, Orte, Menschen und das Alltagsleben eines Rumänen in Italien.",
    hero_subscribe: "Abonnieren",
    hero_watch: "Vlogs ansehen",
    stat_subs: "Abonnenten",
    stat_views: "Aufrufe",
    stat_videos: "Videos",
    vlogs_title: "Neueste Vlogs",
    vlogs_sub: "Der erste Vlog ist in Arbeit — abonniere, damit du ihn nicht verpasst",
    coming_soon: "Bald",
    coming_soon_sub: "Der erste Vlog wird bald veröffentlicht — Abonniere!",
    vlog_1_title: "Ein Tag in Palermo 🌞",
    vlog_2_title: "Die beste Pizza 🍕",
    vlog_3_title: "Markt Ballarò 🛒",
    vlog_4_title: "Strand von Mondello 🏖️",
    vlog_5_title: "Leben als Rumäne in Italien 🇮🇹",
    vlog_6_title: "Sizilianisches Street Food 🍢",
    vlog_date_1: "1. Juli",
    vlog_date_2: "24. Juni",
    vlog_date_3: "17. Juni",
    vlog_date_4: "10. Juni",
    vlog_date_5: "3. Juni",
    vlog_date_6: "27. Mai",
    about_label: "Über mich",
    about_title: "Hallo, ich bin Clau!",
    about_p1:
      "Ich bin aus Rumänien nach Palermo auf Sizilien gezogen, um mir ein neues Leben aufzubauen. Seitdem erzähle ich alles auf meinem YouTube-Kanal: vom ersten Tag in Italien bis zu den besten Pizzen der Stadt und den Stränden mit türkisblauem Wasser.",
    about_p2:
      "Auf \"ClauDiretta\" findest du tägliche Vlogs über das Leben eines Rumänen in Italien, Kochen, Reisen und interessante Begegnungen. Wenn dir gefällt, was du siehst, like, kommentiere und abonniere — jeder Abonnent bedeutet mir enorm viel!",
    fact_1: "🇷🇴 Aus Rumänien",
    fact_2: "🍕 Pizza-Liebhaber",
    fact_3: "🎥 Tägliche Vlogs",
    fact_4: "🌍 4 Sprachen",
    follow_title: "Folge mir",
    follow_sub: "Werde Teil der Community auf allen Plattformen",
    footer_tag: "Aus Palermo, mit Liebe. 🇮🇹❤️",
    footer_rights: "Alle Rechte vorbehalten.",
  },
};

let currentLang = "ro";

function setLang(lang) {
  currentLang = lang;
  const t = TRANSLATIONS[lang];
  if (!t) return;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.innerHTML = t[key];
  });

  document.getElementById("langLabel").textContent = lang.toUpperCase();
  document.querySelectorAll(".lang-menu button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  try {
    localStorage.setItem("clau-lang", lang);
  } catch (e) {
    /* storage unavailable */
  }
}

/* ---------- Language switcher ---------- */
const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");

langBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  langMenu.closest(".lang-switcher").classList.toggle("open");
});

document.querySelectorAll(".lang-menu button").forEach((btn) => {
  btn.addEventListener("click", () => {
    setLang(btn.dataset.lang);
    langMenu.closest(".lang-switcher").classList.remove("open");
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".lang-switcher")) {
    langMenu.closest(".lang-switcher").classList.remove("open");
  }
});

/* ---------- Mobile menu ---------- */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

/* ---------- Navbar scroll state ---------- */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 30);
});

/* ---------- Cursor glow ---------- */
const glow = document.querySelector(".cursor-glow");
if (window.matchMedia("(pointer: fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    glow.style.opacity = 1;
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
} else {
  glow.style.display = "none";
}

/* ---------- Reveal on scroll ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".vlog-card, .coming-soon, .about-grid, .social-card, .section-head").forEach((el, i) => {
  el.classList.add("reveal");
  el.style.transitionDelay = (i % 3) * 0.1 + "s";
  revealObserver.observe(el);
});

/* ---------- Animated counters ---------- */
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1600;
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        el.textContent = value.toLocaleString() + "+";
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  },
  { threshold: 0.6 }
);

document.querySelectorAll("[data-count]").forEach((el) => counterObserver.observe(el));

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Init ---------- */
(function init() {
  let saved = null;
  try {
    saved = localStorage.getItem("clau-lang");
  } catch (e) {
    /* storage unavailable */
  }
  const supported = Object.keys(TRANSLATIONS);
  const browser = (navigator.language || "ro").slice(0, 2).toLowerCase();
  setLang(supported.includes(saved) ? saved : supported.includes(browser) ? browser : "ro");
})();
