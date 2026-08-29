import { profileData } from '../data/profileData.js';
import { t, getLocale, setLocale, onLocaleChange } from '../i18n/index.js';

let isListening = false;

export function renderApp() {
  const root = document.getElementById('app');
  if (!root) return;

  const dict = t();
  const currentLang = getLocale();

  root.innerHTML = `
    <!-- Background Grid -->
    <div class="grid-bg-overlay" aria-hidden="true"></div>

    <!-- Top Navigation Header -->
    <header class="top-nav-bar">
      <div class="container top-nav-inner">
        <a href="#hero" class="brand-lockup" aria-label="Jorge Gutiérrez Home">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">terminal</span>
          <span class="brand-title text-glow">J. GUTIÉRREZ</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav-links" aria-label="Main Navigation">
          <a class="nav-link" href="#profile">${dict.nav.profile}</a>
          <a class="nav-link" href="#journey">${dict.nav.journey}</a>
          <a class="nav-link" href="#skills">${dict.nav.skills}</a>
          <a class="nav-link" href="#experience">${dict.nav.experience}</a>
          <a class="nav-link" href="#recognitions">${dict.nav.recognitions}</a>
          <a class="nav-link" href="#contact">${dict.nav.contact}</a>
          
          <a class="btn-ghost" href="${profileData.identity.links.cvFile}" download="Jorge-Gutierrez-CV.pdf" style="padding: 6px 14px; font-size: 13px; color: var(--cyan-primary); border-color: var(--cyan-primary);">
            ${dict.nav.downloadCv}
          </a>

          <!-- Language Selector Desktop -->
          <div class="lang-switcher" role="group" aria-label="Language Selector">
            <button type="button" class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-locale="en" aria-pressed="${currentLang === 'en'}">EN</button>
            <span class="lang-divider">|</span>
            <button type="button" class="lang-btn ${currentLang === 'es' ? 'active' : ''}" data-locale="es" aria-pressed="${currentLang === 'es'}">ES</button>
          </div>
        </nav>

        <!-- Mobile Language Selector in Header -->
        <div class="lang-switcher mobile-header-lang" role="group" aria-label="Language Selector" style="display: none;">
          <button type="button" class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-locale="en" aria-pressed="${currentLang === 'en'}">EN</button>
          <span class="lang-divider">|</span>
          <button type="button" class="lang-btn ${currentLang === 'es' ? 'active' : ''}" data-locale="es" aria-pressed="${currentLang === 'es'}">ES</button>
        </div>
      </div>
    </header>

    <!-- Main Content Flow -->
    <main class="main-flow" style="padding-top: 104px;">
      
      <!-- 1. Hero Section -->
      <section id="hero" class="container section-chapter" style="min-height: 65vh; display: flex; align-items: center;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 48px; align-items: center; width: 100%;">
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div>
              <span class="font-mono text-cyan" style="font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; display: inline-block; margin-bottom: 8px;">
                ${dict.hero.locationRole}
              </span>
              <h1 class="font-headline" style="font-size: clamp(34px, 5vw, 52px); font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; margin-bottom: 8px;">
                ${profileData.identity.fullName}
              </h1>
              <h2 class="font-headline text-cyan text-glow" style="font-size: clamp(22px, 3.5vw, 32px); font-weight: 600; line-height: 1.2;">
                ${dict.hero.positioning}
              </h2>
            </div>
            
            <p class="font-mono text-muted" style="font-size: 14px; letter-spacing: 0.05em;">
              ${dict.hero.tagline}
            </p>

            <p class="font-body text-muted" style="font-size: 17px; max-width: 600px; line-height: 1.65;">
              ${dict.hero.summary}
            </p>

            <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center; padding-top: 8px;">
              <a href="#experience" class="btn-primary">
                ${dict.hero.ctaExperience}
                <span class="material-symbols-outlined" style="font-size: 18px;">arrow_downward</span>
              </a>
              <a href="${profileData.identity.links.cvFile}" download="Jorge-Gutierrez-CV.pdf" class="btn-ghost" style="color: var(--cyan-primary); border-color: var(--cyan-primary);">
                ${dict.hero.ctaDownloadCv}
              </a>
              <a href="${profileData.identity.links.linkedin}" target="_blank" rel="noopener noreferrer" class="btn-ghost">
                ${dict.hero.ctaLinkedin}
              </a>
            </div>
          </div>

          <!-- Hero Abstract Architectural Graphic -->
          <div style="display: flex; justify-content: center; position: relative;">
            <div class="card-base" style="width: 100%; max-width: 440px; aspect-ratio: 1; display: flex; flex-direction: column; justify-content: space-between; border-color: rgba(0, 240, 255, 0.3); background: linear-gradient(135deg, #171f33 0%, #060e20 100%); position: relative; overflow: hidden;">
              <!-- Visual terminal decorative header -->
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-muted); padding-bottom: 12px;">
                <div style="display: flex; gap: 6px;">
                  <span style="width: 10px; height: 10px; border-radius: 50%; background: #ff5f56; display: inline-block;"></span>
                  <span style="width: 10px; height: 10px; border-radius: 50%; background: #ffbd2e; display: inline-block;"></span>
                  <span style="width: 10px; height: 10px; border-radius: 50%; background: #27c93f; display: inline-block;"></span>
                </div>
                <span class="font-mono text-cyan" style="font-size: 12px;">${dict.hero.cardSubtitle}</span>
              </div>

              <div class="font-mono" style="font-size: 13px; line-height: 1.8; color: #a7b6cc;">
                <p><span class="text-cyan">const</span> <span style="color: #7df4ff;">engineer</span> = {</p>
                <p style="padding-left: 16px;">name: <span style="color: #dbfcff;">"${profileData.identity.name}"</span>,</p>
                <p style="padding-left: 16px;">role: <span style="color: #dbfcff;">"${profileData.identity.positioning}"</span>,</p>
                <p style="padding-left: 16px;">focus: <span style="color: #00f0ff;">["Backend", "Databases", "APIs"]</span>,</p>
                <p style="padding-left: 16px;">enterprise: <span style="color: #7df4ff;">"Tata Consultancy Services"</span>,</p>
                <p style="padding-left: 16px;">tenure: <span style="color: #dbfcff;">"${dict.hero.tenureText}"</span></p>
                <p>};</p>
                <p style="color: #00f0ff; margin-top: 8px;">// ${dict.hero.cardBadge}</p>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-muted); padding-top: 12px;">
                <span class="font-mono" style="font-size: 11px; color: var(--text-muted);">${dict.hero.cardStatus}</span>
                <span class="material-symbols-outlined text-cyan" style="font-size: 18px;">verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Professional Snapshot (Bento Stat Grid) -->
      <section id="snapshot" class="container section-chapter">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
          <div class="card-slate" style="display: flex; flex-direction: column; align-items: center; text-align: center; justify-content: center; padding: 28px 20px;">
            <span class="font-headline text-cyan text-glow" style="font-size: 38px; font-weight: 700; margin-bottom: 4px;">12+</span>
            <span class="font-headline" style="font-size: 16px; font-weight: 600; color: var(--text-primary); margin-bottom: 2px;">${dict.snapshot.yearsTech.label}</span>
            <span class="font-mono text-muted" style="font-size: 12px;">${dict.snapshot.yearsTech.subtext}</span>
          </div>
          <div class="card-slate" style="display: flex; flex-direction: column; align-items: center; text-align: center; justify-content: center; padding: 28px 20px;">
            <span class="font-headline text-cyan text-glow" style="font-size: 38px; font-weight: 700; margin-bottom: 4px;">4+</span>
            <span class="font-headline" style="font-size: 16px; font-weight: 600; color: var(--text-primary); margin-bottom: 2px;">${dict.snapshot.yearsTcs.label}</span>
            <span class="font-mono text-muted" style="font-size: 12px;">${dict.snapshot.yearsTcs.subtext}</span>
          </div>
          <div class="card-slate" style="display: flex; flex-direction: column; align-items: center; text-align: center; justify-content: center; padding: 28px 20px;">
            <span class="font-headline text-cyan text-glow" style="font-size: 38px; font-weight: 700; margin-bottom: 4px;">3</span>
            <span class="font-headline" style="font-size: 16px; font-weight: 600; color: var(--text-primary); margin-bottom: 2px;">${dict.snapshot.engagements.label}</span>
            <span class="font-mono text-muted" style="font-size: 12px;">${dict.snapshot.engagements.subtext}</span>
          </div>
          <div class="card-slate" style="display: flex; flex-direction: column; align-items: center; text-align: center; justify-content: center; padding: 28px 20px;">
            <span class="font-headline text-cyan text-glow" style="font-size: 38px; font-weight: 700; margin-bottom: 4px;">150+</span>
            <span class="font-headline" style="font-size: 16px; font-weight: 600; color: var(--text-primary); margin-bottom: 2px;">${dict.snapshot.trainings.label}</span>
            <span class="font-mono text-muted" style="font-size: 12px;">${dict.snapshot.trainings.subtext}</span>
          </div>
        </div>
      </section>

      <!-- 3. Engineering Profile Pillars -->
      <section id="profile" class="container section-chapter">
        <h2 class="section-header">
          <span class="material-symbols-outlined text-cyan">layers</span>
          ${dict.engineering.title}
        </h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
          ${profileData.engineeringProfile.map(pillar => {
            const pillarDict = dict.engineering.pillars[pillar.id] || { title: pillar.title, desc: pillar.description };
            return `
              <div class="card-base">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 14px;">
                  <span class="material-symbols-outlined text-cyan" style="font-size: 26px;">${pillar.icon}</span>
                  <h3 class="font-headline" style="font-size: 18px; font-weight: 600; color: var(--text-primary);">${pillarDict.title}</h3>
                </div>
                <p class="font-body text-muted" style="font-size: 15px; margin-bottom: 16px; line-height: 1.6;">
                  ${pillarDict.desc}
                </p>
                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                  ${pillar.highlightSkills.map(sk => `<span class="tech-chip">${sk}</span>`).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- 4. Career Journey Timeline -->
      <section id="journey" class="container section-chapter">
        <h2 class="section-header">
          <span class="material-symbols-outlined text-cyan">timeline</span>
          ${dict.journey.title}
        </h2>
        
        <div style="position: relative; padding-left: 36px; border-left: 2px solid var(--border-muted); margin-left: 16px; display: flex; flex-direction: column; gap: 32px;">
          ${profileData.careerJourney.map(step => {
            const stepDict = dict.journey.steps[step.step] || { phase: step.phase, role: step.role, desc: step.description };
            return `
              <div style="position: relative;">
                <!-- Node circle on line -->
                <div class="font-mono" style="position: absolute; left: -53px; top: 0; width: 32px; height: 32px; border-radius: 50%; background: ${step.isCurrent ? 'var(--bg-main)' : 'var(--bg-container)'}; border: 2px solid ${step.isCurrent ? 'var(--cyan-primary)' : 'var(--border-muted)'}; color: ${step.isCurrent ? 'var(--cyan-primary)' : 'var(--text-muted)'}; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; ${step.isCurrent ? 'box-shadow: 0 0 10px rgba(0,240,255,0.4);' : ''}">
                  ${step.step}
                </div>

                <div class="card-base" style="background: ${step.isCurrent ? 'var(--bg-high)' : 'var(--bg-container)'}; border-color: ${step.isCurrent ? 'rgba(0, 240, 255, 0.4)' : 'var(--border-muted)'};">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px; margin-bottom: 8px;">
                    <div>
                      <span class="font-mono text-cyan" style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Phase ${step.step} — ${stepDict.phase}</span>
                      <h3 class="font-headline" style="font-size: 19px; font-weight: 700; color: var(--text-primary); margin-top: 2px;">
                        ${stepDict.role}
                      </h3>
                      <h4 class="font-body text-cyan-light" style="font-size: 15px; font-weight: 500;">
                        ${step.company}
                      </h4>
                    </div>
                    <span class="font-mono" style="font-size: 12px; background: rgba(51, 65, 85, 0.4); padding: 4px 10px; border-radius: 4px; border: 1px solid var(--border-muted); color: var(--text-muted);">
                      ${step.period}
                    </span>
                  </div>
                  <p class="font-body text-muted" style="font-size: 14px; line-height: 1.6;">
                    ${stepDict.desc}
                  </p>
                  ${stepDict.positioningNote ? `
                    <div class="font-mono text-cyan" style="font-size: 11px; margin-top: 8px; opacity: 0.9;">
                      ℹ ${stepDict.positioningNote}
                    </div>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- 5. Technical Stack Architecture -->
      <section id="skills" class="container section-chapter">
        <h2 class="section-header">
          <span class="material-symbols-outlined text-cyan">code</span>
          ${dict.skills.title}
        </h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
          ${Object.entries(profileData.technicalStack).map(([key, cat]) => {
            const catLabel = dict.skills.categories[key] || cat.category;
            return `
              <div class="card-base" style="${cat.highlighted ? 'border-color: rgba(0, 240, 255, 0.4); background: var(--bg-high);' : ''}">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
                  <h3 class="font-mono text-cyan" style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">
                    ${catLabel}
                  </h3>
                  ${cat.highlighted ? '<span class="material-symbols-outlined text-cyan" style="font-size: 18px;">star</span>' : ''}
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${cat.skills.map(skill => `
                    <span class="tech-chip ${cat.highlighted ? 'highlight' : ''}">
                      ${skill}
                    </span>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- 6. Professional Experience Details -->
      <section id="experience" class="container section-chapter">
        <h2 class="section-header">
          <span class="material-symbols-outlined text-cyan">work</span>
          ${dict.experience.title}
        </h2>

        <div style="display: flex; flex-direction: column; gap: 28px;">
          <!-- TCS -->
          <div class="card-base" style="border: 2px solid rgba(0, 240, 255, 0.35); background: var(--bg-high);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
              <div>
                <div style="display: flex; align-items: center; gap: 8px;">
                  <h3 class="font-headline" style="font-size: 22px; font-weight: 700; color: var(--text-primary);">
                    Tata Consultancy Services (TCS)
                  </h3>
                  <span class="font-mono text-cyan" style="font-size: 11px; background: rgba(0, 240, 255, 0.1); border: 1px solid var(--cyan-primary); padding: 2px 8px; border-radius: 4px;">${dict.experience.currentBadge}</span>
                </div>
                <p class="font-body text-cyan-light" style="font-size: 16px; font-weight: 500; margin-top: 2px;">
                  ${dict.experience.companies.tcs.role}
                </p>
                <p class="font-mono text-muted" style="font-size: 13px;">
                  Colombia • ${dict.experience.companies.tcs.employmentType}
                </p>
              </div>
              <span class="font-mono text-cyan" style="font-size: 13px; font-weight: 600; background: rgba(23, 31, 51, 0.8); border: 1px solid var(--border-muted); padding: 6px 12px; border-radius: 4px;">
                ${dict.experience.companies.tcs.period}
              </span>
            </div>

            <p class="font-body text-muted" style="font-size: 15px; margin-bottom: 20px; line-height: 1.6;">
              ${dict.experience.companies.tcs.desc}
            </p>

            <div style="border-top: 1px solid var(--border-muted); padding-top: 16px; margin-top: 16px;">
              <h4 class="font-mono text-cyan" style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">
                ${dict.experience.clientAssignmentsTitle}
              </h4>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px;">
                <div style="background: var(--bg-main); border: 1px solid var(--border-muted); border-radius: 6px; padding: 14px;">
                  <h5 class="font-headline" style="font-size: 15px; font-weight: 600; color: var(--text-primary);">BANISTMO S.A</h5>
                  <span class="font-mono text-cyan" style="font-size: 11px; display: block; margin-bottom: 6px;">Oct 2023 – ${dict.experience.present} • ${dict.experience.companies.tcs.clients.banistmo.unit}</span>
                  <p class="font-body text-muted" style="font-size: 13px; line-height: 1.5;">${dict.experience.companies.tcs.clients.banistmo.summary}</p>
                </div>
                <div style="background: var(--bg-main); border: 1px solid var(--border-muted); border-radius: 6px; padding: 14px;">
                  <h5 class="font-headline" style="font-size: 15px; font-weight: 600; color: var(--text-primary);">Compañía de Financiamiento TUYA S.A.</h5>
                  <span class="font-mono text-cyan" style="font-size: 11px; display: block; margin-bottom: 6px;">Jul 2023 – Sep 2023</span>
                  <p class="font-body text-muted" style="font-size: 13px; line-height: 1.5;">${dict.experience.companies.tcs.clients.tuya.summary}</p>
                </div>
                <div style="background: var(--bg-main); border: 1px solid var(--border-muted); border-radius: 6px; padding: 14px;">
                  <h5 class="font-headline" style="font-size: 15px; font-weight: 600; color: var(--text-primary);">SUMMA - Servicios Corporativos Integrales S.A.S.</h5>
                  <span class="font-mono text-cyan" style="font-size: 11px; display: block; margin-bottom: 6px;">Jun 2022 – Jul 2023</span>
                  <p class="font-body text-muted" style="font-size: 13px; line-height: 1.5;">${dict.experience.companies.tcs.clients.summa.summary}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Personalsoft -->
          <div class="card-base">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
              <div>
                <h3 class="font-headline" style="font-size: 22px; font-weight: 700; color: var(--text-primary);">Personalsoft</h3>
                <p class="font-body text-cyan-light" style="font-size: 16px; font-weight: 500; margin-top: 2px;">${dict.experience.companies.personalsoft.role}</p>
                <p class="font-mono text-muted" style="font-size: 13px;">Medellín, Antioquia, Colombia • ${dict.experience.companies.personalsoft.employmentType}</p>
              </div>
              <span class="font-mono text-cyan" style="font-size: 13px; font-weight: 600; background: rgba(23, 31, 51, 0.8); border: 1px solid var(--border-muted); padding: 6px 12px; border-radius: 4px;">
                ${dict.experience.companies.personalsoft.period}
              </span>
            </div>
            <p class="font-body text-muted" style="font-size: 15px; line-height: 1.6;">${dict.experience.companies.personalsoft.desc}</p>
          </div>

          <!-- Mangus.co -->
          <div class="card-base">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
              <div>
                <h3 class="font-headline" style="font-size: 22px; font-weight: 700; color: var(--text-primary);">Mangus.co - E-learning Empresarial</h3>
                <p class="font-body text-cyan-light" style="font-size: 16px; font-weight: 500; margin-top: 2px;">${dict.experience.companies.mangus.role}</p>
                <p class="font-mono text-muted" style="font-size: 13px;">Barranquilla, Atlántico, Colombia • ${dict.experience.companies.mangus.employmentType}</p>
              </div>
              <span class="font-mono text-cyan" style="font-size: 13px; font-weight: 600; background: rgba(23, 31, 51, 0.8); border: 1px solid var(--border-muted); padding: 6px 12px; border-radius: 4px;">
                ${dict.experience.companies.mangus.period}
              </span>
            </div>
            <p class="font-body text-muted" style="font-size: 15px; line-height: 1.6;">${dict.experience.companies.mangus.desc}</p>
          </div>

          <!-- Metroarea -->
          <div class="card-base">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
              <div>
                <h3 class="font-headline" style="font-size: 22px; font-weight: 700; color: var(--text-primary);">Metroarea Inmobiliaria</h3>
                <p class="font-body text-cyan-light" style="font-size: 16px; font-weight: 500; margin-top: 2px;">${dict.experience.companies.metroarea.role}</p>
                <p class="font-mono text-muted" style="font-size: 13px;">Barranquilla, Atlántico, Colombia • ${dict.experience.companies.metroarea.employmentType}</p>
              </div>
              <span class="font-mono text-cyan" style="font-size: 13px; font-weight: 600; background: rgba(23, 31, 51, 0.8); border: 1px solid var(--border-muted); padding: 6px 12px; border-radius: 4px;">
                ${dict.experience.companies.metroarea.period}
              </span>
            </div>
            <p class="font-body text-muted" style="font-size: 15px; line-height: 1.6;">${dict.experience.companies.metroarea.desc}</p>
          </div>
        </div>
      </section>

      <!-- 7. Database Specialization Signal -->
      <section class="container section-chapter">
        <div class="card-base" style="border: 1px solid rgba(0, 240, 255, 0.35); background: linear-gradient(135deg, #131b2e 0%, #171f33 100%);">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <span class="material-symbols-outlined text-cyan" style="font-size: 28px;">database</span>
            <h2 class="font-headline" style="font-size: 22px; font-weight: 700; color: var(--text-primary);">
              ${dict.database.title}
            </h2>
          </div>
          <p class="font-body text-muted" style="font-size: 15px; margin-bottom: 18px; max-width: 800px;">
            ${dict.database.summary}
          </p>
          
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 18px;">
            ${profileData.databaseSpecialization.engines.map(eng => `
              <span class="tech-chip highlight" style="font-size: 14px; padding: 6px 14px;">
                ${eng}
              </span>
            `).join('')}
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 10px; border-top: 1px solid var(--border-muted); padding-top: 16px;">
            ${dict.database.competencies.map(comp => `
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="material-symbols-outlined text-cyan" style="font-size: 16px;">check_circle</span>
                <span class="font-body text-muted" style="font-size: 13px;">${comp}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 8. Continuous Learning & Accreditations -->
      <section id="learning" class="container section-chapter">
        <h2 class="section-header">
          <span class="material-symbols-outlined text-cyan">school</span>
          ${dict.learning.title}
        </h2>
        <p class="font-body text-muted" style="font-size: 15px; margin-bottom: 24px;">
          ${dict.learning.summary}
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-bottom: 32px;">
          ${profileData.learning.categories.map((cat, idx) => {
            const keys = ['leadership', 'databases', 'cloud', 'agile', 'communication', 'productivity'];
            const catKey = keys[idx] || 'leadership';
            const catDict = dict.learning.categories[catKey] || { name: cat.name, count: cat.count };
            return `
              <div class="card-base">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
                  <h3 class="font-headline" style="font-size: 16px; font-weight: 600; color: var(--text-primary);">${catDict.name}</h3>
                </div>
                <span class="font-mono text-cyan" style="font-size: 12px; display: inline-block; margin-bottom: 10px;">${catDict.count}</span>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 6px;">
                  ${cat.examples.map(ex => `
                    <li class="font-body text-muted" style="font-size: 13px; display: flex; align-items: flex-start; gap: 6px;">
                      <span class="text-cyan">•</span> <span>${ex}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Corporate Certifications -->
        <div class="card-slate">
          <h3 class="font-mono text-cyan" style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 14px;">
            ${dict.learning.corporateTitle}:
          </h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px;">
            ${profileData.learning.certifications.map(cert => `
              <div style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-container); padding: 10px 14px; border-radius: 4px; border: 1px solid var(--border-muted);">
                <span class="font-body" style="font-size: 13px; color: var(--text-primary); font-weight: 500;">${cert.name}</span>
                <span class="font-mono text-cyan" style="font-size: 11px;">${cert.year}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 9. Recognitions (Verbatim TCS Gems) -->
      <section id="recognitions" class="container section-chapter">
        <h2 class="section-header">
          <span class="material-symbols-outlined text-cyan">format_quote</span>
          ${dict.recognitions.title}
        </h2>
        <p class="font-body text-muted" style="font-size: 15px; margin-bottom: 20px;">
          ${dict.recognitions.subtitle}
        </p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 20px;">
          ${profileData.recognitions.map(rec => `
            <div class="card-base" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <span class="material-symbols-outlined text-cyan" style="font-size: 28px; opacity: 0.8; margin-bottom: 8px;">format_quote</span>
                <p class="font-body text-muted" style="font-size: 14px; font-style: italic; line-height: 1.6; margin-bottom: 16px;">
                  "${rec.quote}"
                </p>
              </div>
              <div style="border-top: 1px solid var(--border-muted); padding-top: 12px; display: flex; justify-content: space-between; align-items: flex-end;">
                <div>
                  <div class="font-headline" style="font-size: 15px; font-weight: 600; color: var(--text-primary);">${rec.author}</div>
                  <div class="font-mono text-cyan" style="font-size: 12px;">${rec.role}</div>
                  <div class="font-mono text-muted" style="font-size: 11px;">${rec.org}</div>
                </div>
                <span class="font-mono text-muted" style="font-size: 11px;">${rec.date}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- 10. Education Foundation -->
      <section id="education" class="container section-chapter">
        <h2 class="section-header">
          <span class="material-symbols-outlined text-cyan">school</span>
          ${dict.education.title}
        </h2>
        <div class="card-base" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
          <div>
            <span class="font-mono text-cyan" style="font-size: 12px; text-transform: uppercase;">${dict.education.type}</span>
            <h3 class="font-headline" style="font-size: 20px; font-weight: 700; color: var(--text-primary); margin-top: 2px;">
              ${dict.education.degree}
            </h3>
            <p class="font-body text-muted" style="font-size: 15px;">
              ${dict.education.institution} • ${dict.education.location}
            </p>
          </div>
          <span class="font-mono text-cyan" style="font-size: 14px; font-weight: 600; background: var(--bg-high); padding: 8px 16px; border-radius: 4px; border: 1px solid var(--border-muted);">
            ${dict.education.period}
          </span>
        </div>
      </section>

      <!-- 11. Contact Section -->
      <section id="contact" class="container section-chapter">
        <div class="card-base" style="text-align: center; padding: 48px 24px; border: 1px solid rgba(0, 240, 255, 0.4); background: linear-gradient(180deg, #171f33 0%, #0b1326 100%);">
          <h2 class="font-headline text-cyan text-glow" style="font-size: 32px; font-weight: 700; margin-bottom: 12px;">
            ${dict.contact.title}
          </h2>
          <p class="font-body text-muted" style="font-size: 16px; max-width: 600px; margin: 0 auto 24px auto;">
            ${dict.contact.subtitle}
          </p>
          <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 16px;">
            <a href="mailto:${profileData.identity.email}" class="btn-primary">
              <span class="material-symbols-outlined" style="font-size: 18px;">mail</span>
              ${dict.contact.emailMe}
            </a>
            <a href="${profileData.identity.links.linkedin}" target="_blank" rel="noopener noreferrer" class="btn-ghost">
              ${dict.contact.connectLinkedin}
            </a>
            <a href="${profileData.identity.links.github}" target="_blank" rel="noopener noreferrer" class="btn-ghost">
              ${dict.contact.viewGithub}
            </a>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer style="background: var(--bg-terminal); border-top: 1px solid var(--border-subtle); padding: 40px 0; margin-top: 60px;">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
        <div>
          <span class="font-headline" style="font-size: 18px; font-weight: 700; color: var(--text-primary);">
            J. GUTIÉRREZ
          </span>
          <p class="font-mono text-muted" style="font-size: 12px; margin-top: 4px;">
            ${dict.hero.positioning} • ${profileData.identity.location}
          </p>
          <p class="font-body text-muted" style="font-size: 11px; margin-top: 2px;">
            ${dict.footer.builtWith}
          </p>
        </div>
        <div style="display: flex; gap: 20px;">
          <a href="${profileData.identity.links.linkedin}" target="_blank" rel="noopener noreferrer" class="nav-link">LinkedIn</a>
          <a href="${profileData.identity.links.github}" target="_blank" rel="noopener noreferrer" class="nav-link">GitHub</a>
          <a href="mailto:${profileData.identity.email}" class="nav-link">Email</a>
        </div>
        <div class="font-mono text-muted" style="font-size: 12px;">
          © ${new Date().getFullYear()} Jorge Augusto Gutiérrez Bandera • ${dict.footer.rights}
        </div>
      </div>
    </footer>

    <!-- Mobile Bottom Navigation -->
    <nav class="mobile-bottom-nav" aria-label="Mobile Bottom Navigation">
      <a href="#hero" class="mobile-tab-item active">
        <span class="material-symbols-outlined" style="font-size: 20px;">home</span>
        <span>Home</span>
      </a>
      <a href="#profile" class="mobile-tab-item">
        <span class="material-symbols-outlined" style="font-size: 20px;">person</span>
        <span>${dict.nav.profile}</span>
      </a>
      <a href="#journey" class="mobile-tab-item">
        <span class="material-symbols-outlined" style="font-size: 20px;">timeline</span>
        <span>${dict.nav.journey}</span>
      </a>
      <a href="#skills" class="mobile-tab-item">
        <span class="material-symbols-outlined" style="font-size: 20px;">code</span>
        <span>${dict.nav.skills}</span>
      </a>
      <a href="#experience" class="mobile-tab-item">
        <span class="material-symbols-outlined" style="font-size: 20px;">work</span>
        <span>${dict.nav.experience}</span>
      </a>
      <a href="#contact" class="mobile-tab-item">
        <span class="material-symbols-outlined" style="font-size: 20px;">mail</span>
        <span>${dict.nav.contact}</span>
      </a>
    </nav>
  `;

  // Attach event listeners for language selector buttons
  attachLanguageSelectorEvents();

  // Set up active tab interaction on scroll
  setupNavigationInteractions();

  // Subscribe to locale changes if not already subscribed
  if (!isListening) {
    onLocaleChange(() => {
      renderApp();
    });
    isListening = true;
  }
}

function attachLanguageSelectorEvents() {
  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetLocale = e.currentTarget.getAttribute('data-locale');
      if (targetLocale) {
        setLocale(targetLocale);
      }
    });
  });
}

function setupNavigationInteractions() {
  const sections = document.querySelectorAll('section[id]');
  const mobileTabs = document.querySelectorAll('.mobile-tab-item');
  const desktopLinks = document.querySelectorAll('.desktop-nav-links .nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    mobileTabs.forEach(tab => {
      tab.classList.remove('active');
      if (tab.getAttribute('href') === `#${current}`) {
        tab.classList.add('active');
      }
    });

    desktopLinks.forEach(link => {
      if (link.getAttribute('href') === `#${current}`) {
        link.style.color = 'var(--cyan-primary)';
      } else {
        link.style.color = 'var(--text-muted)';
      }
    });
  });
}
