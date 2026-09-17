import { useEffect, useRef, useState } from 'react';
import heroVideo from '../video/Minecraft Autumn Mountains _ Cozy 4K Live Wallpaper 🍂🏔️.mp4';
import logoImage from '../photo/CODECRAFT LOGO.png';
import omkarPhoto from '../photo/omkar.jpg';
import member2Photo from '../photo/member2.jpg';
import member3Photo from '../photo/member3.png';
import member4Photo from '../photo/member4.png';
import member5Photo from '../photo/member5.png';
import member6Photo from '../photo/member6.png';
import buttonSound from '../sound/videoplayback.m4a';
import backgroundMusic from '../sound/Minecraft.mp3.mpeg';

const menuItems = ['Registration', 'Schedule', 'Themes'];
const splitMenuItems = ['Perks', 'FAQs'];

const journeyStages = [
  {
    id: '01',
    title: 'Ideation',
    range: '18 – 28',
    description:
      'Participants submit their initial ideas and proposed solutions online, including problem statement selection, a clear solution proposal, and required team details.',
    points: [
      'Problem statement selection',
      'Solution/idea proposal',
      'Required submission format: PDF or PPT',
      'Team information',
    ],
  },
  {
    id: '02',
    title: 'Prototyping',
    range: '1 – 9',
    description:
      'Shortlisted teams develop their ideas into functional prototypes with working code, repositories, demos, and technical documentation.',
    points: [
      'Working prototype/code',
      'GitHub or repository submission',
      'Demo video',
      'Technical documentation',
    ],
  },
  {
    id: '03',
    title: 'Grand Finale',
    range: '16 – 17',
    description:
      'Shortlisted teams compete in the final 24-hour physical hackathon, building on-site and presenting live demos to juries.',
    points: [
      '24-hour physical build sprint',
      'Hardware requirements if applicable',
      'On-site judging',
      'Final presentation and demo',
    ],
  },
];

const domains = [
  {
    icon: '🌾',
    title: 'Climate and Agriculture',
    text: 'Technology-driven solutions for climate resilience, agriculture, farming efficiency, and food systems.',
  },
  {
    icon: '🤖',
    title: 'Artificial Intelligence and Agentic AI',
    text: 'Intelligent systems, autonomous agents, machine learning, and AI-powered innovation.',
  },
  {
    icon: '🩺',
    title: 'Medical and Healthcare',
    text: 'Technology solutions that improve healthcare access, diagnosis, treatment, and patient outcomes.',
  },
  {
    icon: '📚',
    title: 'EdTech and Accessibility',
    text: 'Inclusive learning tools and accessible experiences for students, educators, and communities.',
  },
  {
    icon: '☁️',
    title: 'Cloud Computing',
    text: 'Scalable cloud platforms, infrastructure, distributed systems, and connected services.',
  },
  {
    icon: '💡',
    title: 'Open Innovation',
    text: 'Original ideas that address meaningful challenges beyond the listed domain areas.',
  },
];

const rubric = [
  'Implementability',
  'Technical Impact',
  'Sustainability',
  'Presentation Quality',
];

const resourceCards = [
  { icon: '📦', title: 'Starter Kits', text: 'Downloadable resources and templates.' },
  { icon: '💻', title: 'API Documentation', text: 'Technical docs and APIs for development.' },
  { icon: '❓', title: 'FAQ', text: 'Frequently asked participant questions.' },
  { icon: '📋', title: 'Submission Guidelines', text: 'Instructions for each round.' },
  { icon: '🔗', title: 'Useful Links', text: 'GitHub, Unstop, docs, and community channels.' },
];

const timeline = [
  { phase: 'ROUND 1', range: '18 to 28 Sept', detail: 'Idea Submission' },
  { phase: 'ROUND 1 RESULT', range: '30 Sept', detail: 'Shortlisted Teams Announced' },
  { phase: 'ROUND 2', range: '1 to 9 Oct', detail: 'Prototype Submission' },
  { phase: 'ROUND 2 RESULT', range: '12 Oct', detail: 'Finalists Announced' },
  { phase: 'ROUND 3', range: '16 and 17 Oct', detail: '24-Hour Grand Finale' },
  { phase: 'ROUND 3 RESULT', range: '17 Oct', detail: 'Winners Announced' },
];

const eligibilityCards = [
  { title: 'Team Size', value: '[Add official team size]' },
  { title: 'Eligibility', value: '[Add official academic eligibility]' },
  { title: 'Team Composition', value: '[Add official cross-disciplinary requirements]' },
];

const organizingTeam = [
  { name: 'Tambe Omkar', role: 'Organizer', phone: '9405909432', image: omkarPhoto },
  { name: 'Tambe Yash', role: 'Organizer', phone: '84689 88834', image: member2Photo },
  { name: 'Pandharkar Aniruddha', role: 'Organizer', phone: '87999 48910', image: member3Photo },
  { name: 'Darekar Sainath', role: 'Organizer', phone: '93072 92907', image: member4Photo },
  { name: 'Wabale Shreya', role: 'Organizer', phone: '84219 05078', image: member5Photo },
  { name: 'Kale Shrushti', role: 'Organizer', phone: '94225 10744', image: member6Photo },
];

const registrationDeadline = new Date('2026-10-01T23:59:59');

function getCountdown() {
  const remaining = Math.max(0, registrationDeadline.getTime() - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

const menuInformation = {
  Registration: {
    title: 'Registration',
    text: 'Register your team to participate in CodeCraft. Complete the form before the registration deadline and keep your team details ready.',
    items: ['Team registration', 'Problem statement selection', 'Submission instructions', 'Confirmation after signup'],
    action: 'Register on Unstop',
    href: 'https://unstop.com/',
  },
  Schedule: {
    title: 'Schedule',
    text: 'CodeCraft moves through three rounds, taking teams from their first idea to a live 24-hour grand finale.',
    items: ['Round 1: 18th - 28th Sept, idea submission', 'Round 1 results: 30th Sept', 'Round 2: 1st - 9th Oct, prototype submission', 'Round 3: 16th - 17th Oct, grand finale'],
    action: 'View full schedule',
    
  },
  Themes: {
    title: 'Themes',
    text: 'Choose a theme where technology can create measurable real-world impact.',
    items: [
      'Climate and Agriculture',
      'Artificial Intelligence and Agentic AI',
      'Medical and Healthcare',
      'EdTech and Accessibility',
      'Cloud Computing',
      'Open Innovation',
    ],
    
   
  },
  Perks: {
    title: 'Perks',
    text: 'Participants get more than a competition: build your portfolio, meet experts, and take your idea further.',
    items: ['₹30,000 total prize pool', 'Mentorship opportunities', 'Industry networking', 'Recognition and certificates'],
   
    
  },
  FAQs: {
    title: 'FAQs',
    text: 'Find quick answers about participation, submissions, judging, and the final challenge. ',
    items: [
      'Who can participate? ',
      'What is the team size? ',
      'What technologies can we use? ',
      
    ],
    action: 'Read details',
    href: '#eligibility',
  },
  Location: {
    title: 'Location',
    text: 'Pravara Rural Engineering College (PREC), Loni',
    items: ['A/P Loni Bk', 'Taluka Rahata', 'District Ahmednagar, Maharashtra', 'PIN 413736'],
    action: 'Open in Google Maps',
    href: 'https://maps.app.goo.gl/Uk2bmMXSWjg9ktLo9',
  },
};

function App() {
  const [activePopup, setActivePopup] = useState(null);
  const [countdown, setCountdown] = useState(getCountdown);
  const [soundEnabled, setSoundEnabled] = useState(null);
  const [organizersOpen, setOrganizersOpen] = useState(false);
  const musicRef = useRef(null);

  const playButtonSound = () => {
    if (!soundEnabled) return;

    const audio = new Audio(buttonSound);
    audio.volume = 0.45;
    audio.play().catch(() => {});
  };

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActivePopup(null);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const startBackgroundMusic = () => {
      const music = musicRef.current;
      if (!music || !soundEnabled) return;

      music.volume = 0.28;
      music.play().catch(() => {});
    };

    if (!soundEnabled) return undefined;

    window.addEventListener('pointerdown', startBackgroundMusic, { once: true });
    window.addEventListener('keydown', startBackgroundMusic, { once: true });
    return () => {
      window.removeEventListener('pointerdown', startBackgroundMusic);
      window.removeEventListener('keydown', startBackgroundMusic);
    };
  }, [soundEnabled]);

  const openPopup = (label) => setActivePopup(menuInformation[label]);

  const chooseSound = (enabled) => {
    setSoundEnabled(enabled);

    if (enabled && musicRef.current) {
      musicRef.current.volume = 0.28;
      musicRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="page-shell">
      <video className="video-background" src={heroVideo} autoPlay loop muted playsInline />
      <audio ref={musicRef} src={backgroundMusic} loop preload="auto" aria-label="Minecraft background music" />
      <div className="video-overlay" />

      {soundEnabled === null && (
        <div className="sound-choice-backdrop" role="presentation">
          <section className="sound-choice" role="dialog" aria-modal="true" aria-labelledby="sound-choice-title">
            <span className="eyebrow">CodeCraft Experience</span>
            <h1 id="sound-choice-title">Enable sound?</h1>
            <p>Would you like background music and button sounds while exploring the website?</p>
            <div className="sound-choice-actions">
              <button type="button" onClick={() => chooseSound(true)}>Enable Sound</button>
              <button type="button" onClick={() => chooseSound(false)}>No Sound</button>
            </div>
          </section>
        </div>
      )}

      <header className="top-header">
        <div className="brand-group">
          <img className="header-icon" src={logoImage} alt="CodeCraft mini logo" />
        </div>
        <nav className="top-nav" aria-label="Top navigation">
        
        </nav>
      </header>

      <main className="content-wrapper">
        {organizersOpen ? (
          <section className="organizers-page" aria-labelledby="organizers-title">
            <button className="organizers-back popup-close" type="button" aria-label="Close organizing team page" title="Back to home" onClick={() => { playButtonSound(); setOrganizersOpen(false); }}>
              ×
            </button>
            <div className="organizers-page-heading">
              <span className="eyebrow">CodeCraft committee</span>
              <h1 id="organizers-title">CodeCraft Committee</h1>
              <a className="organizers-instagram" href="https://www.instagram.com/codecraft.prec/" target="_blank" rel="noreferrer">
                Follow us on Instagram
              </a>
            </div>
            <div className="organizers-page-grid">
              {organizingTeam.map((member) => (     
                <article key={member.name} className="organizer-page-card">
                  <div className="organizer-avatar">
                    <img src={member.image} alt={`${member.name} organizer`} />
                  </div>
                  <h2>{member.name}</h2>
                  <span>{member.role}</span>
                  <small>Contact</small>
                  <a className={member.phone.startsWith('[') ? 'placeholder-contact' : ''} href={member.phone.startsWith('[') ? undefined : `tel:${member.phone}`}>
                    {member.phone}
                  </a>
                </article>
              ))}
            </div>
          </section>
        ) : (
          <section className="hero-section" id="home">
            <div className="menu-wrap">
              <img className="brand-logo" src={logoImage} alt="CodeCraft logo" />

              <div className="mc-menu" aria-label="Main menu">
                {menuItems.map((label) => (
                  <button key={label} className="mc-button full" type="button" onClick={() => { playButtonSound(); openPopup(label); }}>
                    <span className="title">{label}</span>
                  </button>
                ))}

                <div className="double" aria-label="Secondary menu group">
                  {splitMenuItems.map((label) => (
                    <button key={label} className="mc-button full" type="button" onClick={() => { playButtonSound(); openPopup(label); }}>
                      <span className="title">{label}</span>
                    </button>
                  ))}
                </div>

                <button className="mc-button full lang" type="button" aria-label="View location" onClick={() => { playButtonSound(); openPopup('Location'); }}>
                  <span className="title">
                    <span className="location-menu-icon" aria-hidden="true">⌖</span>
                  </span>
                </button>
              </div>

              <button className="mc-button organizer-menu-button" type="button" onClick={() => { playButtonSound(); setOrganizersOpen(true); }}>
                <span className="title">Organizing Team</span>
              </button>
            </div>
          </section>
        )}

      </main>

      {activePopup && (
        <div className="popup-backdrop" role="presentation" onMouseDown={() => setActivePopup(null)}>
          <section
            className="info-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="popup-close" type="button" aria-label="Close information popup" onClick={() => { playButtonSound(); setActivePopup(null); }}>
              ×
            </button>
            <span className="eyebrow">CodeCraft Information</span>
            <h2 id="popup-title">{activePopup.title}</h2>
            <p>{activePopup.text}</p>
            {activePopup.title === 'Location' && (
              <div className="location-map" aria-label="Map showing the PREC Loni location">
                <span className="map-road map-road-one" />
                <span className="map-road map-road-two" />
                <span className="map-road map-road-three" />
                <span className="map-block map-block-one" />
                <span className="map-block map-block-two" />
                <span className="map-block map-block-three" />
                <span className="map-pin" aria-hidden="true">●</span>
                <span className="map-label">PREC LONI</span>
              </div>
            )}
            {activePopup.title === 'Registration' && (
              <div className="countdown-panel" aria-label="Registration countdown">
                <span>Registration closes in</span>
                <div className="countdown-grid">
                  <div><strong>{String(countdown.days).padStart(2, '0')}</strong><small>Days</small></div>
                  <div><strong>{String(countdown.hours).padStart(2, '0')}</strong><small>Hours</small></div>
                  <div><strong>{String(countdown.minutes).padStart(2, '0')}</strong><small>Minutes</small></div>
                  <div><strong>{String(countdown.seconds).padStart(2, '0')}</strong><small>Seconds</small></div>
                </div>
              </div>
            )}
            {activePopup.title === 'Schedule' ? (
              <div className="schedule-timeline" aria-label="CodeCraft schedule timeline">
                {timeline.map((item, index) => (
                  <div key={item.phase} className="schedule-event">
                    <div className="schedule-node" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
                    <div className="schedule-event-content">
                      <span>{item.phase}</span>
                      <strong>{item.range}</strong>
                      <small>{item.detail}</small>
                      {item.phase.includes('RESULT') }
                    </div>
                  </div>
                ))}*-0
              </div>
            ) : activePopup.title === 'Perks' ? (
              <div className="winner-list" aria-label="Hackathon winners and prizes">
                <div className="winner-row first-place">
                  <span className="winner-medal">1st</span>
                  <div><strong>First Prize</strong><small>₹15,000</small></div>
                </div>
                <div className="winner-row second-place">
                  <span className="winner-medal">2nd</span>
                  <div><strong>Second Prize</strong><small>₹10,000</small></div>
                </div>
                <div className="winner-row third-place">
                  <span className="winner-medal">3rd</span>
                  <div><strong>Third Prize</strong><small>₹5,000</small></div>
                </div>
              </div>
            ) : (
              <ul>
                {activePopup.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
            {activePopup.action && (
              <a className="primary-cta popup-action" href={activePopup.href || '#'} target={activePopup.href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer" onClick={() => { playButtonSound(); setActivePopup(null); }}>
                {activePopup.action}
              </a>
            )}
          </section>
        </div>
      )}

      <footer className="site-footer">
        <div className="footer-heading">
          <div>
            <strong>CodeCraft</strong>
         
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 CodeCraft</span>
          <span>Built for the next generation</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
