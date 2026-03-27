/* =========================================================
   InstaVibeBio — script.js
   Author: @hansu_ratewal82
   ========================================================= */

'use strict';

// ── Data ──────────────────────────────────────────────────────
const BIOS = {
  aesthetic: [
    "✨ dreaming in soft hues\n🌙 chasing golden hour\n🍃 mindful | creative | free\n💌 inbox open for collabs",
    "🌸 petals & poetry\n☁️ head in the clouds\n🎶 music is my mother tongue\n🔗 my world below ↓",
    "🌿 nature child at heart\n📷 storytelling through frames\n🕯️ slow mornings, deep thoughts\n✉️ say hi anytime",
    "🫧 soft life era\n🌊 ocean soul, city body\n🍋 zesty & authentic\n✨ creating my own sunshine",
    "🪴 growing, glowing, going\n🌅 sunrise chaser\n📚 words that breathe\n💜 spread love always",
    "🌙 midnight muse\n🎨 colours speak where words fail\n🍵 tea & tranquillity\n🔗 link below for magic",
    "☁️ floating through life gently\n🌺 bloom wherever you're planted\n🎞️ collector of memories\n💌 let's create together",
    "🌿 earthy tones & good bones\n🕊️ peace is my compass\n🎵 always mid-playlist\n✨ be the vibe",
    "🫐 blueberry skies & breezy days\n🌙 night owl, daydreamer\n📖 chapters over captions\n💚 green flags only",
    "🍃 finding beauty in ordinary moments\n🌸 soft spoken, strong-willed\n🎨 art is life\n💫 follow the stars",
    "🕯️ cosy nooks & quiet books\n🌿 plant mom energy\n☕ matcha mornings\n✉️ collab? slide in!",
    "🌊 tides & wandering minds\n🌸 rose-tinted everything\n🎶 melody over noise\n🔗 explore below",
    "🌙 a little starlight, a little storm\n🪷 bloom at your own pace\n📷 frames & feelings\n💌 kind DMs welcome",
    "🍵 sipping on stillness\n🌿 intentional living\n☁️ always daydreaming\n✨ be soft, be bold",
    "🌺 wildflower spirit\n🎞️ life in analog tones\n🌊 forever chasing waves\n💜 vibes over everything",
  ],
  attitude: [
    "🔥 I don't chase, I attract\n💎 Standards? Sky-high\n😤 Silence speaks louder\n👑 Born to stand out",
    "👑 Royalty doesn't explain itself\n🖤 Mood: unbothered\n💪 Built different, period\n🔗 Check the link",
    "🚀 Levelling up daily\n💸 Focused on the bag\n🤐 Less talk, more action\n🔥 Watch me win",
    "😎 Cool head, warm heart\n💥 Main character energy\n👊 Took the hits, wore the crown\n⚡ Stay plugged in",
    "🖤 Not a chapter, I'm the whole book\n💯 Real 24/7\n🦅 Eagles don't flock\n🔗 My journey below",
    "💪 Soft heart, savage grind\n🌪️ Storm packed in human form\n👑 I decide who I am\n🤝 Let's connect",
    "🔥 Rising from every setback\n💎 Pressure makes diamonds\n😤 My energy is a privilege\n⚡ Plugged in",
    "🚫 No cap, no filter\n💯 Authentic or nothing\n🦁 Quiet roar, loud results\n🔗 One link, infinite value",
    "👊 They said no; I said watch\n🌪️ Chaos to champion\n💪 Discipline is my superpower\n🔥 Fuelled by passion",
    "🕶️ Drip check: immaculate\n🖤 Dark horse era\n💥 Born to disrupt\n👑 Crown doesn't need adjusting",
    "🔥 Burning bridges? Nah, building rockets\n🚀 Next level only\n💎 Cut from rare cloth\n⚡ Wired for greatness",
    "😤 I outwork everyone in the room\n🦅 Vision: 20/20\n💪 Iron will, velvet moves\n👑 Leader by nature",
    "🌪️ Came, saw, conquered\n🔥 Intensity: maximum\n💎 Self-made, self-paid\n🤝 Link up",
    "🖤 Cold world, warm soul\n💪 Gym, grind, glow\n🚀 Trajectory: upward\n🔗 All links below",
    "👑 Too blessed to be stressed\n🦁 Fearless & flawless\n💥 Unapologetically me\n🔥 Stay in the fire",
  ],
  funny: [
    "😂 Professional napper\n🍕 Pizza is my love language\n🐶 Dog person in a cat world\n📲 DMs open, brain closed",
    "🤡 Living my best chaotic life\n😴 Powered by caffeine & spite\n🎮 Gamer who showers (usually)\n🔗 Click at your peril",
    "🥲 Not lazy, energy-saving mode\n🧠 Big brain, tiny attention span\n🍟 Emotionally attached to fries\n📱 See ya scroll",
    "😅 Fluent in sarcasm & nonsense\n🛌 Olympic-level napper\n🍜 Ramen is self-care\n⚠️ Approach with snacks",
    "🤌 Chef's kiss at doing nothing\n🦥 Sloth goals achieved daily\n☕ Don't talk before coffee\n🔗 Why are you here?",
    "🙃 Functioning on chaos\n🎭 Mood: choose your own adventure\n🐸 Vibe: suspicious frog\n💌 DM if you're weird too",
    "😂 I put the 'pro' in procrastinate\n🍦 Ice cream makes decisions for me\n📸 Camera shy… posting anyway\n🤝 Let's be odd together",
    "🤦 Professional overthinker\n🧃 Juicing life's lemons since birth\n😂 Laughing at my own jokes since always\n🔗 Chaos below",
    "🦆 Just winging it\n🎪 Life is my circus, I hired the clowns\n🍕 Relationship status: pizza\n📲 Unfollow if no sense of humor",
    "😴 Loading… please wait\n🤖 Human in training\n🧂 Extra salty, extra sweet\n🔗 Swipe up (just kidding)",
    "🙈 Pretending to adult since birth\n🏋️ Goes to gym for the selfies\n🍫 Chocolate solves everything\n💌 Reach me through vibes",
    "🤣 Accidentally funny 90% of the time\n🛋️ Couch is my spirit animal\n🧋 Boba over people\n🔗 Don't click this",
    "😅 Bio? More like bio-hazard\n🎭 Life: unscripted comedy\n🍜 Instant noodles connoisseur\n👀 You followed, now what?",
    "🤡 Certified problem of society\n☕ Coffee first, adulting never\n🐱 Cats 1 - Humans 0\n🔗 Link to my chaos",
    "😜 Plot twist enthusiast\n🎲 Life choices: coin flip\n🤙 Texting reply speed: geological\n📲 Still here? Respect",
  ],
  motivational: [
    "💪 Progress over perfection\n🌅 Every sunrise is a new chapter\n🚀 Chasing goals, not validation\n✨ You got this",
    "🌱 Growth is not linear, keep going\n🔥 Fuelled by passion, guided by faith\n💡 Ideas into action\n🙏 Grateful everyday",
    "⚡ Small steps, massive leaps\n🏆 Champion mindset daily\n🌟 Stars can't shine without darkness\n💌 Inspire someone today",
    "🚀 Shoot for the moon\n💎 Built under pressure\n🌅 New day, new opportunity\n🔥 Never stop hustling",
    "💡 Dream it. Plan it. Do it.\n🌱 Planting seeds of greatness\n🏋️ Discipline > motivation\n✨ The best is yet to come",
    "🌟 Your story isn't over\n💪 Struggle is part of success\n🔥 Burn bright, not out\n🙏 Faith over fear",
    "⚡ Electrified by purpose\n🚀 Launching into my destiny\n💡 Ideas are my currency\n🌱 Growing every single day",
    "🏆 Built for this moment\n🌅 Chasing the horizon\n💎 Pressure creates diamonds\n🔥 Stay in the arena",
    "💪 Done waiting for tomorrow\n🌟 My potential is limitless\n🎯 Aim high, land higher\n✨ Watch the transformation",
    "🌱 Roots deep, branches high\n🔥 Passion is the engine\n💡 Think. Build. Repeat.\n🚀 Onwards and upwards",
    "🏋️ Reps, rest, repeat — in life too\n🌅 Morning routines change lives\n💪 Earned, not given\n🌟 Be the example",
    "🎯 Focus: locked in\n🔥 Consistency beats talent\n💡 My mindset is my weapon\n🚀 Goal after goal",
    "⚡ Energy flows where focus goes\n🌱 One day or day one — you choose\n🏆 Winning from within\n💌 Motivate someone today",
    "🌟 Believe before you achieve\n💎 Grind in silence, shine loud\n🚀 No permission needed\n💪 Rise every single time",
    "🔥 On a mission, not a mission trip\n🌅 Make today count\n💡 Light your own path\n⚡ Unstoppable energy",
  ],
  love: [
    "💖 Heart wide open\n🌸 Loving loudly and softly\n🫶 Kindness is my superpower\n💌 Spreading love daily",
    "💑 Together is my favourite place\n🌹 Romanticizing my whole life\n🕊️ Peace, love & good energy\n💌 Say hi!",
    "💕 Hopeless romantic in a modern world\n🌙 Falling in love with little things\n🫶 Hugs > handshakes\n🔗 More love below",
    "🌹 Love is the answer\n💖 Passionate heart, calm mind\n🌸 Choosing joy everyday\n💌 DMs full of kindness",
    "🫶 Love what you do, do what you love\n💑 My people are my world\n🌟 Love languages: all five\n🌸 Always here",
    "💖 Radiating love & warmth\n🌙 Moonlit feelings, sunrise hope\n🕊️ Gentle soul, fierce heart\n💌 Come as you are",
    "🌹 Writing love letters to life\n🫶 Compassion first, always\n💕 Romance in every small thing\n🔗 My heart below",
    "💑 Better together, always\n🌸 Grateful for love in all forms\n💖 Pouring love into everything\n✉️ Slide in warmly",
    "🌺 Love is a verb, I choose it daily\n🕊️ Soft and steady wins\n💌 Inbox: a love letter\n💖 You matter",
    "🫶 Carrying love like a lantern\n🌹 Romantic at heart, realist in mind\n💕 Planting seeds of kindness\n🌸 Bloom with me",
    "💖 In love with life itself\n🌙 Night time thoughts, daytime love\n🌺 Wildly in love\n💌 Open heart always",
    "🕊️ Grace & gratitude\n🫶 Love fiercely, forgive freely\n🌸 Gentle but full of fire\n💌 Always love",
    "💕 Every moment is a love story\n🌹 Romance in the mundane\n🫶 Heart first, always\n🔗 Curated with love",
    "💖 Just here to love and be loved\n🌸 Soft heart, open arms\n🕊️ Peace is love in action\n✉️ DMs always open",
    "🌹 Passionately in love with life\n💑 My people, my world\n🫶 Chosen family > everything\n💌 Love you, stranger",
  ],
  travel: [
    "✈️ Passport full, heart fuller\n🌍 Every country a new story\n🗺️ Lost on purpose\n📸 Capturing the world",
    "🌏 Born to wander, forced to work\n🏔️ Mountain air is my therapy\n🛫 Next stop: everywhere\n🔗 Adventures below",
    "🗺️ Map in hand, soul on fire\n🌊 Ocean lover, mountain climber\n🍜 Eating my way around the world\n✈️ Always in transit",
    "🏕️ Campfires & city lights\n🌍 Collecting moments, not things\n✈️ Frequent flyer, rare homebody\n📸 Every view is a painting",
    "🌅 Chasing sunsets globally\n🗺️ 47 countries & counting\n🍜 Local food > tourist traps\n🔗 My travel diary",
    "✈️ Miles over material things\n🌊 Salt in my hair, sand in my shoes\n🏔️ Elevation = clarity\n📸 Lens on life",
    "🌍 One world, infinite adventures\n🛫 Departure lounge is my living room\n🗺️ Always finding new corners\n💌 Travel tips: DM me",
    "🏝️ Island souls in a mainland world\n🌅 Every horizon calls my name\n✈️ Jet-lagged but thriving\n🔗 Itineraries below",
    "🌿 Eco-traveller | Off-grid explorer\n🗺️ Roads less travelled only\n🏕️ Nature is home\n📸 Wild & free",
    "✈️ Not lost, just globally confused\n🌊 Waves in every time zone\n🍜 Food passport: stamped everywhere\n🌍 See you out there",
    "🏔️ Altitude is my attitude\n🌅 Golden hour globe-trotter\n🗺️ Spontaneous & sun-chasing\n✈️ Boarding soon",
    "🌏 Wander more, worry less\n🛫 Carry-on only, big dreams only\n🌊 Coastal soul\n📸 Travel stories below",
    "🏕️ Sleeping under stars worldwide\n🗺️ Adventure awaits every day\n✈️ Passport junkie\n🌍 Meet me at the horizon",
    "🌅 Sunset collector worldwide\n🏔️ Peak bagger | Trail blazer\n🌊 Deep sea, high peaks\n🔗 Next adventure: soon",
    "✈️ First-class vibes, budget flights\n🌍 Diversity is my favourite destination\n🗺️ Never the same place twice\n📸 Memories, not souvenirs",
  ],
  business: [
    "💼 Entrepreneur | Visionary | Builder\n📈 Turning ideas into empires\n🤝 Let's collab\n🔗 Business inquiries below",
    "🚀 Founder | Creator | Disruptor\n💡 Ideas are seeds; I grow forests\n📊 Data-driven, passion-fuelled\n💌 [email protected]",
    "💰 Hustler with a heart\n📈 Building in public\n🤝 Community > competition\n🔗 Links in bio",
    "💼 CEO of my own journey\n🌟 Helping brands tell better stories\n📱 Digital marketing pro\n💌 DM for services",
    "🚀 Launching dreams into reality\n💡 Strategy | Content | Growth\n📊 ROI-obsessed, people-first\n🔗 Work with me",
    "💎 Premium service, real results\n🤝 Trusted by 500+ clients\n📈 Scaling brands since 2019\n💌 Book a call",
    "💼 Where passion meets profit\n🚀 Serial entrepreneur on a mission\n💡 Innovation is daily bread\n🔗 Portfolio below",
    "📊 Numbers tell stories; I translate\n💰 Wealth mindset, abundance life\n🤝 Let's build together\n💌 Serious inquiries only",
    "🌟 Brand strategist | Content creator\n📱 Social media that converts\n💡 Creative director at heart\n🔗 My work below",
    "💼 Business is relationships at scale\n🤝 Connecting dots & people\n📈 Growth hacker, storyteller\n🔗 Let's scale",
    "🚀 From side hustle to main stage\n💡 Founder of [Your Brand]\n💰 Generating value, not noise\n💌 DM to collaborate",
    "📊 Metrics maven | Marketing mind\n💼 Consulting | Coaching | Creating\n🤝 Referrals always welcome\n🔗 Schedule a call",
    "💎 Turning passion into paycheques\n🚀 Built from scratch, scaling sky-high\n💡 Innovation every single day\n📱 Follow the journey",
    "🌟 Creative + strategic = unstoppable\n💼 Agency owner | Mentor | Speaker\n🤝 Let's create impact\n🔗 Site below",
    "💰 Money loves clarity; I provide it\n📈 Investor mindset, creator hands\n💡 Simplifying success daily\n💌 Inbox open",
  ],
};

const ALL_BIOS = Object.values(BIOS).flat();

const CATEGORIES = [
  { key: 'aesthetic', emoji: '🌿', name: 'Aesthetic', color: '#14b8a6' },
  { key: 'attitude', emoji: '🔥', name: 'Attitude', color: '#f97316' },
  { key: 'funny', emoji: '😂', name: 'Funny', color: '#eab308' },
  { key: 'motivational', emoji: '💪', name: 'Motivational', color: '#22c55e' },
  { key: 'love', emoji: '💖', name: 'Love', color: '#ec4899' },
  { key: 'travel', emoji: '✈️', name: 'Travel', color: '#3b82f6' },
  { key: 'business', emoji: '💼', name: 'Business', color: '#a855f7' },
];

const TRENDING_BIOS = [
  { text: "✨ Living my best life one chapter at a time\n🌿 Nature | Coffee | Good vibes\n📸 @hansu_ratewal82\n🔗 See my world below", cat: 'Aesthetic', fire: '🔥 12.4k copies' },
  { text: "🔥 I don't compete, I elevate\n👑 Main character, not a side quest\n💎 Built different, verified\n⚡ Power up", cat: 'Attitude', fire: '🔥 9.8k copies' },
  { text: "😂 Professional chaos manager\n🍕 Pizza is a personality type\n🛌 Nap goals: Olympic level\n📲 DM if you're weird too", cat: 'Funny', fire: '🔥 8.1k copies' },
  { text: "🚀 Small steps every single day\n💡 Dream loud, work louder\n🌱 Growth is my north star\n⚡ Let's level up together", cat: 'Motivational', fire: '🔥 7.5k copies' },
  { text: "✈️ Every stamp tells a story\n🌍 47 countries, infinite memories\n📸 Capturing the world one frame at a time\n🗺️ Next stop: unknown", cat: 'Travel', fire: '🔥 6.3k copies' },
  { text: "💼 Building empires from ideas\n🚀 Founder & creator\n📈 Results that speak\n🤝 DM to work with me", cat: 'Business', fire: '🔥 5.9k copies' },
];

const TIPS = [
  { icon: '✏️', title: 'Keep it Under 150 chars', desc: 'Instagram caps bios at 150 characters. Every word must earn its place. Be concise, punchy, and powerful.' },
  { icon: '😍', title: 'Lead with Personality', desc: 'Your first line is prime real estate. Hook visitors immediately with something surprising, funny, or bold.' },
  { icon: '🔗', title: 'Use Your Link Wisely', desc: 'Your bio link is the only clickable URL on your profile. Use Linktree or a landing page to maximise its potential.' },
  { icon: '📣', title: 'Include a Clear CTA', desc: 'Always end with a call-to-action: "DM for collabs", "Shop below 👇", or "Follow for daily inspo". Guide your visitors.' },
  { icon: '🔑', title: 'Add Relevant Keywords', desc: 'Instagram indexes bios for search. Include your niche keywords — photographer, chef, fitness coach — to be discoverable.' },
  { icon: '✨', title: 'Use Emojis Strategically', desc: 'Emojis break text visually and add personality. Use 1–2 per line max. Pick ones aligned with your brand aesthetic.' },
  { icon: '🗓️', title: 'Update It Regularly', desc: 'Keep your bio fresh and relevant. Update it when you launch something new, change direction, or have exciting news.' },
  { icon: '🎯', title: 'Know Your Audience', desc: 'Write FOR your ideal follower. Speak their language, reference their world, and they\'ll hit follow in seconds.' },
];

// ── State ─────────────────────────────────────────────────────
let currentBio = '';
let activeCat = 'all';
let lastIndex = -1;
let savedBios = JSON.parse(localStorage.getItem('instaBios_saved') || '[]');
let isDark = localStorage.getItem('instaBios_theme') !== 'light';

// ── DOM Refs ──────────────────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const bioDisplay = document.getElementById('bioDisplay');
const bioLoader = document.getElementById('bioLoader');
const btnGenerate = document.getElementById('btnGenerate');
const btnCopy = document.getElementById('btnCopy');
const btnShare = document.getElementById('btnShare');
const btnFav = document.getElementById('btnFav');
const charCountRow = document.getElementById('charCountRow');
const charCountEl = document.getElementById('charCount');
const charBar = document.getElementById('charBar');
const savedSection = document.getElementById('savedSection');
const savedGrid = document.getElementById('savedGrid');
const btnClearSaved = document.getElementById('btnClearSaved');
const toast = document.getElementById('toast');
const heroBioText = document.getElementById('heroBioText');
const categoriesGrid = document.getElementById('categoriesGrid');
const trendingGrid = document.getElementById('trendingGrid');
const tipsGrid = document.getElementById('tipsGrid');

// ── Theme ─────────────────────────────────────────────────────
function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  themeToggle.querySelector('.theme-icon').textContent = dark ? '🌙' : '☀️';
  localStorage.setItem('instaBios_theme', dark ? 'dark' : 'light');
}
applyTheme(isDark);
themeToggle.addEventListener('click', () => { isDark = !isDark; applyTheme(isDark); });

// ── Navbar scroll ─────────────────────────────────────────────
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── Hamburger ─────────────────────────────────────────────────
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navLinks.classList.remove('open');
}));

// ── Particles ────────────────────────────────────────────────
(function spawnParticles() {
  const container = document.getElementById('particles');
  const colors = ['#a855f7', '#ec4899', '#14b8a6', '#f97316', '#3b82f6'];
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      top:  ${Math.random() * 100}%;
      width:  ${2 + Math.random() * 4}px;
      height: ${2 + Math.random() * 4}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration: ${8 + Math.random() * 16}s;
      animation-delay: ${-Math.random() * 16}s;
    `;
    container.appendChild(p);
  }
})();

// ── Hero Bio Rotator ─────────────────────────────────────────
const HERO_BIOS = [
  "✨ Living life on my own terms\n📸 Capturing moments, not time\n🌿 Nature | Music | Vibes\n💌 DM for collabs\n👇 Check my latest drop",
  "🔥 Main character energy\n💎 Curated content daily\n🌍 Traveller | Creator\n📲 @hansu_ratewal82\n👇 Link below",
  "🌸 Aesthetic soul, real heart\n☕ Coffee & creativity\n📷 Stories worth sharing\n✨ Let's create together\n👇 Tap the link",
];
let heroBioIdx = 0;
setInterval(() => {
  heroBioIdx = (heroBioIdx + 1) % HERO_BIOS.length;
  if (heroBioText) {
    heroBioText.style.opacity = '0';
    heroBioText.style.transform = 'translateY(8px)';
    setTimeout(() => {
      heroBioText.innerHTML = HERO_BIOS[heroBioIdx].replace(/\n/g, '<br/>');
      heroBioText.style.opacity = '1';
      heroBioText.style.transform = 'none';
    }, 400);
  }
}, 4000);
// Smooth transition styles for heroBioText
if (heroBioText) {
  heroBioText.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
}

// ── Build Categories Grid ─────────────────────────────────────
function buildCategories() {
  categoriesGrid.innerHTML = '';
  CATEGORIES.forEach(({ key, emoji, name, color }) => {
    const count = BIOS[key].length;
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.innerHTML = `
      <span class="cat-emoji">${emoji}</span>
      <div class="cat-name">${name}</div>
      <div class="cat-count">${count} ideas</div>
    `;
    card.style.setProperty('--cat-color', color);
    card.addEventListener('click', () => {
      // Scroll to generator & select category
      document.getElementById('generator').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        setActiveCat(key);
        generateBio();
      }, 600);
    });
    categoriesGrid.appendChild(card);
  });
}
buildCategories();

// ── Generator Pills ───────────────────────────────────────────
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('click', () => {
    setActiveCat(pill.dataset.cat);
  });
});

function setActiveCat(cat) {
  activeCat = cat;
  document.querySelectorAll('.pill').forEach(p => {
    p.classList.toggle('active', p.dataset.cat === cat);
  });
}

// ── Generate Bio ──────────────────────────────────────────────
function generateBio() {
  const pool = activeCat === 'all' ? ALL_BIOS : (BIOS[activeCat] || ALL_BIOS);
  bioLoader.classList.add('active');
  bioDisplay.style.opacity = '0';
  btnGenerate.disabled = true;

  setTimeout(() => {
    let idx;
    do { idx = Math.floor(Math.random() * pool.length); } while (idx === lastIndex && pool.length > 1);
    lastIndex = idx;
    currentBio = pool[idx];

    bioDisplay.innerHTML = `<div class="bio-text">${currentBio.replace(/\n/g, '<br/>')}</div>`;
    bioLoader.classList.remove('active');
    bioDisplay.style.opacity = '1';
    btnCopy.disabled = false;
    btnShare.disabled = false;
    btnFav.disabled = false;
    btnGenerate.disabled = false;

    // Character count
    const raw = currentBio.replace(/\n/g, '\n');
    const chars = raw.length;
    charCountEl.textContent = chars;
    charCountRow.style.display = 'flex';
    const pct = Math.min((chars / 150) * 100, 100);
    charBar.style.width = pct + '%';
    charBar.classList.toggle('warn', chars > 120);

    // Reset fav heart
    btnFav.querySelector('span').textContent = savedBios.includes(currentBio) ? '❤️' : '🤍';
  }, 800);
}

btnGenerate.addEventListener('click', generateBio);

// ── Copy ──────────────────────────────────────────────────────
btnCopy.addEventListener('click', async () => {
  if (!currentBio) return;
  try {
    await navigator.clipboard.writeText(currentBio);
    showToast('✅ Bio copied to clipboard!');
    btnCopy.querySelector('span:last-child').textContent = 'Copied!';
    setTimeout(() => btnCopy.querySelector('span:last-child').textContent = 'Copy', 2000);
  } catch {
    showToast('⚠️ Copy failed. Please copy manually.');
  }
});

// ── Share ─────────────────────────────────────────────────────
btnShare.addEventListener('click', async () => {
  if (!currentBio) return;
  const shareData = {
    title: 'Check out this Instagram Bio! 📸',
    text: currentBio + '\n\n— via @hansu_ratewal82 | InstaVibeBio',
  };
  if (navigator.share) {
    try { await navigator.share(shareData); showToast('🎉 Shared successfully!'); }
    catch { /* User cancelled */ }
  } else {
    await navigator.clipboard.writeText(shareData.text).catch(() => { });
    showToast('📋 Bio copied — paste to share!');
  }
});

// ── Favourite ─────────────────────────────────────────────────
btnFav.addEventListener('click', () => {
  if (!currentBio) return;
  const heart = btnFav.querySelector('span');
  const idx = savedBios.indexOf(currentBio);
  if (idx === -1) {
    savedBios.unshift(currentBio);
    heart.textContent = '❤️';
    showToast('❤️ Saved to your collection!');
  } else {
    savedBios.splice(idx, 1);
    heart.textContent = '🤍';
    showToast('💔 Removed from collection.');
  }
  btnFav.classList.add('saved');
  setTimeout(() => btnFav.classList.remove('saved'), 400);
  localStorage.setItem('instaBios_saved', JSON.stringify(savedBios));
  renderSaved();
});

// ── Render Saved ──────────────────────────────────────────────
function renderSaved() {
  savedSection.style.display = savedBios.length ? 'block' : 'none';
  savedGrid.innerHTML = '';
  savedBios.forEach((bio, i) => {
    const card = document.createElement('div');
    card.className = 'saved-card';
    card.innerHTML = `
      <span class="saved-card-remove" data-idx="${i}" title="Remove">✕</span>
      ${bio.replace(/\n/g, '<br/>')}
      <span class="saved-card-copy" data-bio="${encodeURIComponent(bio)}">📋 Copy this bio</span>
    `;
    savedGrid.appendChild(card);
  });

  savedGrid.querySelectorAll('.saved-card-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx, 10);
      savedBios.splice(idx, 1);
      localStorage.setItem('instaBios_saved', JSON.stringify(savedBios));
      renderSaved();
      showToast('🗑️ Removed from saved.');
    });
  });
  savedGrid.querySelectorAll('.saved-card-copy').forEach(btn => {
    btn.addEventListener('click', async () => {
      const bio = decodeURIComponent(btn.dataset.bio);
      await navigator.clipboard.writeText(bio).catch(() => { });
      showToast('✅ Copied!');
    });
  });
}
renderSaved();

btnClearSaved.addEventListener('click', () => {
  savedBios = [];
  localStorage.setItem('instaBios_saved', JSON.stringify(savedBios));
  renderSaved();
  showToast('🗑️ All saved bios cleared.');
});

// ── Trending Grid ─────────────────────────────────────────────
function buildTrending() {
  trendingGrid.innerHTML = '';
  TRENDING_BIOS.forEach(({ text, cat, fire }, i) => {
    const card = document.createElement('div');
    card.className = 'trend-card';
    card.innerHTML = `
      <div class="trend-rank">${String(i + 1).padStart(2, '0')}</div>
      <span class="trend-cat-badge">${cat}</span>
      <div class="trend-text">${text.replace(/\n/g, '<br/>')}</div>
      <div class="trend-actions">
        <button class="trend-copy-btn" data-bio="${encodeURIComponent(text)}">📋 Copy Bio</button>
        <span class="trend-fire">${fire}</span>
      </div>
    `;
    trendingGrid.appendChild(card);
  });
  trendingGrid.querySelectorAll('.trend-copy-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const bio = decodeURIComponent(btn.dataset.bio);
      await navigator.clipboard.writeText(bio).catch(() => { });
      showToast('✅ Trending bio copied!');
    });
  });
}
buildTrending();

// ── Tips Grid ─────────────────────────────────────────────────
function buildTips() {
  tipsGrid.innerHTML = '';
  TIPS.forEach(({ icon, title, desc }) => {
    const card = document.createElement('div');
    card.className = 'tip-card';
    card.innerHTML = `
      <span class="tip-icon">${icon}</span>
      <div class="tip-title">${title}</div>
      <p class="tip-desc">${desc}</p>
    `;
    tipsGrid.appendChild(card);
  });
}
buildTips();

// ── Toast ─────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ── Scroll Reveal (Intersection Observer) ────────────────────
const revealItems = document.querySelectorAll('.cat-card, .trend-card, .tip-card, .stat');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideDown .6s var(--transition-bounce) both';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealItems.forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// ── Active nav link on scroll ─────────────────────────────────
const sections = document.querySelectorAll('section[id], header[id]');
const navAnchors = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });

console.log('%c InstaVibeBio 📸 by @hansu_ratewal82', 'color:#a855f7;font-size:16px;font-weight:bold;');
