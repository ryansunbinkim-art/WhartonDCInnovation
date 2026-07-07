const NAV_OFFSET = 68;

const NEW_STRATEGIC_PARTNERS = [
  { name: "Archangels Washington", img: "images/logos/partners/archangels-washington.png" },
  { name: "Big Idea CONNECTpreneur", img: "images/logos/partners/big-idea-connectpreneur.png" },
  { name: "Chicago Booth", img: "images/logos/partners/chicago-booth.png", label: "The University of Chicago Booth School of Business" },
  { name: "Flourish", img: "images/logos/partners/flourish.png" },
  { name: "Ignite Social Impact", img: "images/logos/partners/ignite-social-impact.png" },
  { name: "INSEAD", img: "images/logos/partners/insead.png" },
  { name: "LSE Alumni & Friends USA", img: "images/logos/partners/lse-alumni-friends-usa.png" },
  { name: "MIT Club of Washington DC", img: "images/logos/partners/mit-club-washington-dc.png" },
  { name: "Startup Grind Washington DC", img: "images/logos/partners/startup-grind-washington-dc.png" },
  { name: "Society of Physician Entrepreneurs", img: "images/logos/partners/sope.png", label: "Society of Physician Entrepreneurs" },
  { name: "Yale Club of Washington DC", img: "images/logos/partners/yale-club-washington-dc.png", label: "The Yale Club of Washington, DC" },
];

const CAROUSEL_LOGOS = [
  { name: "Amazon Web Services", img: "images/logos/attendees/aws.png" },
  { name: "Johnson & Johnson", img: "images/logos/attendees/jnj.png", size: "lg" },
  { name: "NVIDIA", img: "images/logos/attendees/nvidia.png" },
  { name: "Salesforce", img: "images/logos/attendees/salesforce.png" },
  { name: "Bank of America", img: "images/logos/attendees/bank-of-america.png", pill: true },
  { name: "Morgan Stanley", img: "images/logos/attendees/morgan-stanley.png", pill: true },
  { name: "Wells Fargo", img: "images/logos/attendees/wells-fargo.png", pill: true },
  { name: "Merrill Lynch", img: "images/logos/attendees/merrill-lynch.png", size: "lg" },
  { name: "Tyson Foods", img: "images/logos/attendees/tyson.png" },
  { name: "Truist", img: "images/logos/attendees/truist.png", size: "lg" },
  { name: "Booz Allen", img: "images/logos/attendees/booz-allen.png" },
  { name: "MedStar Health", img: "images/logos/attendees/medstar.png" },
  { name: "Databricks", img: "images/logos/attendees/databricks.png" },
  { name: "Huron", img: "images/logos/attendees/huron.png" },
  { name: "Xometry", img: "images/logos/attendees/xometry.png" },
  { name: "Georgetown University", img: "images/logos/attendees/georgetown.png" },
  { name: "George Washington University", img: "images/logos/attendees/gwu.png" },
  { name: "Talkspace", img: "images/logos/attendees/talkspace.png" },
  { name: "TTR Sotheby's International Realty", img: "images/logos/attendees/ttr-sothebys.png" },
  { name: "Springboard Enterprises", img: "images/logos/attendees/springboard.png" },
  ...NEW_STRATEGIC_PARTNERS,
];

const REGISTER_URL = "https://www.whartondc.com/store.html?event_id=5029";

const PRICING = [
  {
    name: "2026 Wharton DC Innov Summit: Wharton DC Member/Guest - Super Early Bird",
    price: "$195.00",
    desc: "Just $195/person for full access for all sessions live (for you and each of your guests — must pay this rate per person) & Embassy. Maximum of 4/member.",
  },
  {
    name: "2026 Wharton DC Innov Summit: Public - All Welcome - SUPER EARLY BIRD",
    price: "$395.00",
    desc: "Just $395/person for full access for all sessions live (for you and each of your guests — must pay this rate per person) & Embassy. 30-day money back guarantee.",
    featured: true,
  },
  {
    name: "2026 Wharton DC Innov Summit: Strategic Partner Member/Guest - Super Early Bird",
    price: "$195.00",
    desc: "Just $195/person for full access for all sessions live (for you and each of your guests — must pay this rate per person) & Embassy. Maximum of 4/member. You must list the name of the Strategic Partner of which you are currently a member to qualify for this rate. Please do so in the \"Special Instructions\" when you register. Thank you.",
  },
  {
    name: "Innovation Summit: VIP Thomas Edison Innovation Supporter",
    price: "$500.00",
    desc: "$500/person, inclusive. Includes Innovation Summit and Embassy reception. Thanks for your tax-deductible contribution!",
  },
];

const AGENDA = [
  { time: "8:00–8:45 AM", title: "Registration & Breakfast", desc: "Valo Park." },
  { time: "9:00–9:15 AM", title: "Welcome & Opening Remarks", desc: "General session, Valo Park Auditorium." },
  {
    time: "9:15–10:15 AM",
    title: "Opening Keynote CEO Panel",
    desc: "Innovating to Scale a $1 Billion Business — Lessons from Unicorn CEOs.",
  },
  { time: "10:25–11:25 AM", title: "Keynote Panel: Healthcare", desc: "The Future of Healthcare." },
  {
    time: "11:40 AM–12:40 PM",
    title: "Breakout Sessions 1",
    desc: "Parallel tracks — see Breakout Tracks panel.",
  },
  { time: "12:40–1:25 PM", title: "Lunch & Networking", desc: "Valo Park Conference Center." },
  { time: "1:25–2:25 PM", title: "Mid-day Keynote Panel: AI", desc: "Does AI Need Guardrails?" },
  {
    time: "2:40–3:40 PM",
    title: "Breakout Sessions 2",
    desc: "Parallel tracks — see Breakout Tracks panel.",
  },
  {
    time: "3:55–4:55 PM",
    title: "Breakout Sessions 3",
    desc: "Parallel tracks — see Breakout Tracks panel.",
  },
  {
    time: "5:10–6:00 PM",
    title: "Closing Keynote Fireside Chat",
    desc: "Fireside Chat with Steve Case (Invited).",
  },
  {
    time: "6:00–8:00 PM",
    title: "Networking Reception @ Refraction",
    desc: "Valo Park, 8th Floor.",
  },
];

const TRACKS = [
  {
    title: "Funding & Fintech Track",
    panels: ["State of Funding", "Startup Showcase", "AI and the Future of Fintech"],
  },
  {
    title: "Healthcare Track",
    panels: [
      "The Future of Food and AgTech",
      "The Next Era of Primary Care",
      "Will AI Completely Transform Healthcare?",
    ],
  },
  {
    title: "Transformative Technologies Track",
    panels: [
      "The Latest Developments in Civilian and Defence Aerospace",
      "AI and the Future of Work",
      "The Outlook for Quantum Computing",
    ],
  },
];

const SPONSORS = [
  {
    tier: "Platinum",
    items: [{ name: "Bank of America", img: "images/logos/partners/bank-of-america.png" }],
  },
  {
    tier: "Bronze",
    items: [
      {
        name: "Fairfax County Economic Development Authority",
        img: "images/logos/partners/fceda.png",
      },
      { name: "Refraction", img: "images/logos/partners/refraction.png" },
    ],
  },
  {
    tier: "Other Sponsors",
    items: [
      { name: "Echoes Media", img: "images/logos/partners/echoes-media.png" },
      { name: "Erin Fry Photography", img: "images/logos/partners/erin-fry-photography.png" },
    ],
  },
  {
    tier: "Strategic Partners",
    items: [
      {
        name: "Oxford University Society of DC",
        img: "images/logos/partners/oxford.png",
        label: "Oxford University Society of DC",
      },
      { name: "Harvard Club", img: "images/logos/partners/harvard-club.png" },
      { name: "Cornell Club of Maryland", img: "images/logos/partners/cornell-club-md.png" },
      {
        name: "French-American Chamber of Commerce",
        img: "images/logos/partners/french-american-chamber.png",
      },
      ...NEW_STRATEGIC_PARTNERS,
    ],
  },
];

const REVIEWS = [
  {
    quote: "The Wharton DC Innovation Summit consistently delivers actionable insight and unmatched networking.",
    author: "Ruth Ann Hudson",
    org: "IBM",
  },
  {
    quote: "A must-attend for anyone building at the intersection of policy, technology, and capital.",
    author: "Aneesh Chopra",
    org: "First White House CTO",
  },
];

function mapRange(value, inMin, inMax, outMin, outMax) {
  const clamped = Math.min(Math.max(value, inMin), inMax);
  const ratio = (clamped - inMin) / (inMax - inMin);
  return outMin + ratio * (outMax - outMin);
}

function clearbitUrl(domain) {
  return `https://logo.clearbit.com/${domain}`;
}

function createLogoItem({ name, img, domain, pill = false, label = null, size = null }) {
  const item = document.createElement("div");
  item.className = `logo-item${pill ? " logo-pill" : ""}${label ? " logo-item-labeled" : ""}${size ? ` logo-item-${size}` : ""}`;

  if (label) {
    const wrap = document.createElement("div");
    wrap.className = "logo-labeled-wrap";

    const image = document.createElement("img");
    image.alt = name;
    image.src = img || clearbitUrl(domain);
    image.loading = "lazy";
    image.onerror = () => {
      image.remove();
      const fallback = document.createElement("span");
      fallback.className = "logo-fallback";
      fallback.textContent = name;
      wrap.prepend(fallback);
    };
    wrap.appendChild(image);

    const caption = document.createElement("span");
    caption.className = "logo-label";
    caption.textContent = label;
    wrap.appendChild(caption);
    item.appendChild(wrap);
    return item;
  }

  const image = document.createElement("img");
  image.alt = name;
  image.src = img || clearbitUrl(domain);
  image.loading = "lazy";
  image.onerror = () => {
    image.remove();
    const fallback = document.createElement("span");
    fallback.className = "logo-fallback";
    fallback.textContent = name;
    item.appendChild(fallback);
  };

  item.appendChild(image);
  return item;
}

function renderCarousel() {
  const track = document.getElementById("logoCarousel");
  const wrap = track.parentElement;
  const doubled = [...CAROUSEL_LOGOS, ...CAROUSEL_LOGOS];

  doubled.forEach((logo) => track.appendChild(createLogoItem(logo)));

  wrap.addEventListener("mouseenter", () => wrap.classList.add("is-paused"));
  wrap.addEventListener("mouseleave", () => wrap.classList.remove("is-paused"));
}

function renderPricing() {
  const grid = document.getElementById("pricingGrid");
  PRICING.forEach((tier, index) => {
    const card = document.createElement("article");
    card.className = `pricing-card reveal${tier.featured ? " pricing-card-featured" : ""}`;
    card.style.setProperty("--delay", `${index * 80}ms`);
    card.innerHTML = `
      <p class="pricing-name">${tier.name}</p>
      <p class="pricing-price">${tier.price}</p>
      <p class="pricing-desc">${tier.desc}</p>
      <a class="btn btn-primary btn-block" href="${REGISTER_URL}" target="_blank" rel="noopener noreferrer">Register</a>
    `;
    grid.appendChild(card);
  });
}

function renderAgenda() {
  const timeline = document.getElementById("agendaTimeline");
  AGENDA.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "agenda-item reveal";
    li.style.setProperty("--delay", `${index * 80}ms`);
    li.innerHTML = `
      <div class="agenda-time">${item.time}</div>
      <div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    `;
    timeline.appendChild(li);
  });

  const tracksList = document.getElementById("tracksList");
  TRACKS.forEach((track) => {
    const card = document.createElement("div");
    card.className = "track-card";
    card.innerHTML = `
      <h4>${track.title}</h4>
      <ul>${track.panels.map((panel) => `<li>${panel}</li>`).join("")}</ul>
    `;
    tracksList.appendChild(card);
  });
}

function renderSponsors() {
  const container = document.getElementById("sponsorTiers");
  SPONSORS.forEach((tier, tierIndex) => {
    const section = document.createElement("div");
    section.className = "sponsor-tier reveal";
    section.style.setProperty("--delay", `${tierIndex * 100}ms`);
    section.innerHTML = `<h3>${tier.tier}</h3>`;

    const row = document.createElement("div");
    row.className = "sponsor-row";

    tier.items.forEach((item) => {
      row.appendChild(
        createLogoItem({
          name: item.name,
          img: item.img,
          label: item.label || null,
        }),
      );
    });

    section.appendChild(row);
    container.appendChild(section);
  });
}

function renderReviews() {
  const grid = document.getElementById("reviewsGrid");
  REVIEWS.forEach((review, index) => {
    const card = document.createElement("article");
    card.className = "review-card reveal";
    card.style.setProperty("--delay", `${index * 100}ms`);
    card.innerHTML = `
      <div class="stars" aria-label="5 out of 5 stars">★★★★★</div>
      <blockquote>"${review.quote}"</blockquote>
      <cite>${review.author} · ${review.org}</cite>
    `;
    grid.appendChild(card);
  });
}

function scrollToSection(id) {
  if (id === "about") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const target = document.getElementById(id);
  if (!target) return;

  const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

function setupNavigation() {
  const nav = document.getElementById("nav");
  const drawer = document.getElementById("navDrawer");
  const toggle = document.getElementById("navToggle");
  const navButtons = document.querySelectorAll("[data-nav]");

  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      scrollToSection(button.dataset.scroll);
      drawer.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  toggle.addEventListener("click", () => {
    const open = drawer.hidden;
    drawer.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
  });

  window.setTimeout(() => nav.classList.add("is-mounted"), 120);

  const sections = [
    { id: "about", nav: "about" },
    { id: "intro", nav: "intro" },
    { id: "agenda", nav: "agenda" },
    { id: "sponsors", nav: "sponsors" },
    { id: "reviews", nav: "reviews" },
    { id: "register", nav: "register" },
  ];

  const updateNav = () => {
    const scrollPos = window.scrollY + NAV_OFFSET + 80;
    let current = null;

    sections.forEach(({ id, nav: navId }) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (el.offsetTop <= scrollPos) current = navId;
    });

    navButtons.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.nav === current);
    });

    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  };

  window.addEventListener("scroll", updateNav, { passive: true });
  updateNav();
}

function runHeroIntro(container) {
  const steps = container.querySelectorAll(".hero-kicker, .hero-meta, .hero-actions");
  steps.forEach((el, index) => {
    window.setTimeout(() => el.classList.add("is-visible"), 500 + index * 450);
  });
}

function setupHeroIntro() {
  runHeroIntro(document.getElementById("about"));
}

function setupParallaxHero(section) {
  const image = section.querySelector(".hero-image");
  const overlay = section.querySelector(".hero-overlay");
  const title = section.querySelector(".hero-title");
  if (!image || !overlay || !title) return;

  const update = () => {
    const sectionTop = section.offsetTop;
    const progress = mapRange(
      window.scrollY,
      sectionTop,
      sectionTop + window.innerHeight * 0.85,
      0,
      1,
    );
    const scale = mapRange(progress, 0, 1, 1, 1.14);
    const overlayOpacity = mapRange(progress, 0, 1, 0.45, 0.78);
    const titleY = mapRange(progress, 0, 1, 0, -48);
    const titleBlur = mapRange(progress, 0, 1, 0, 4);
    const titleOpacity = mapRange(progress, 0, 1, 1, 0.35);

    image.style.transform = `scale(${scale})`;
    overlay.style.opacity = String(overlayOpacity);
    title.style.transform = `translateY(${titleY}px)`;
    title.style.filter = `blur(${titleBlur}px)`;
    title.style.opacity = String(titleOpacity);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setupHeroScroll() {
  document.querySelectorAll(".hero-parallax").forEach(setupParallaxHero);
}

function setupRevealObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    const delay = el.dataset.delay;
    if (delay) el.style.setProperty("--delay", `${delay}ms`);
    observer.observe(el);
  });
}

function setupCountUp() {
  const values = document.querySelectorAll(".stat-value[data-count]");
  const section = document.getElementById("summit-stats");
  if (!section || !values.length) return;

  let started = false;

  const run = () => {
    if (started) return;
    started = true;

    values.forEach((el) => {
      const target = Number(el.dataset.count);
      const countNode = el.querySelector(".stat-count");
      const suffixNode = el.querySelector(".stat-suffix");
      const suffix = suffixNode ? suffixNode.textContent : el.dataset.suffix || "";
      const duration = 1400;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = String(Math.round(target * eased));

        if (countNode) {
          countNode.textContent = value;
        } else {
          el.textContent = `${value}${suffix}`;
        }

        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.35 },
  );

  observer.observe(section);
}

function init() {
  renderCarousel();
  renderAgenda();
  renderSponsors();
  renderReviews();
  renderPricing();
  setupNavigation();
  setupHeroIntro();
  setupHeroScroll();
  setupRevealObserver();
  setupCountUp();
}

init();
