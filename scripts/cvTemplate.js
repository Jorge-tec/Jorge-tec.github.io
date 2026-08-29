import { profileData } from '../src/data/profileData.js';

export function renderCvHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${profileData.identity.fullName} — Curriculum Vitae</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet" />
  <style>
    @page {
      size: letter portrait;
      margin: 14mm 16mm 14mm 16mm;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10.5pt;
      line-height: 1.45;
      color: #1a202c;
      background: #ffffff;
      -webkit-font-smoothing: antialiased;
    }

    /* Header */
    .cv-header {
      border-bottom: 2pt solid #006970;
      padding-bottom: 10px;
      margin-bottom: 14px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .cv-name {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 22pt;
      font-weight: 700;
      color: #0b1326;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }

    .cv-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 13pt;
      font-weight: 600;
      color: #006970;
      margin-top: 3px;
    }

    .cv-contact {
      text-align: right;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5pt;
      color: #4a5568;
      line-height: 1.5;
    }

    .cv-contact a {
      color: #006970;
      text-decoration: none;
    }

    /* Summary */
    .cv-summary {
      font-size: 9.5pt;
      color: #2d3748;
      line-height: 1.5;
      margin-bottom: 14px;
      text-align: justify;
    }

    /* Section Structure */
    .cv-section {
      margin-bottom: 14px;
      page-break-inside: avoid;
    }

    .section-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 11pt;
      font-weight: 700;
      color: #0b1326;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-bottom: 1pt solid #cbd5e0;
      padding-bottom: 3px;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    /* Grid for Skills */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 6px 16px;
      font-size: 9pt;
    }

    .skill-row {
      display: flex;
      gap: 6px;
    }

    .skill-cat {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      color: #006970;
      min-width: 110px;
    }

    .skill-list {
      color: #2d3748;
    }

    /* Experience Items */
    .exp-item {
      margin-bottom: 10px;
      page-break-inside: avoid;
    }

    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 2px;
    }

    .exp-role {
      font-weight: 700;
      font-size: 10pt;
      color: #1a202c;
    }

    .exp-company {
      color: #006970;
      font-weight: 600;
      font-size: 9.5pt;
    }

    .exp-date {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5pt;
      color: #4a5568;
      font-weight: 500;
    }

    .exp-desc {
      font-size: 9pt;
      color: #4a5568;
      line-height: 1.4;
      margin-bottom: 4px;
    }

    .client-list {
      margin-left: 14px;
      list-style-type: square;
      font-size: 8.8pt;
      color: #2d3748;
      line-height: 1.4;
    }

    .client-list li {
      margin-bottom: 2px;
    }

    .client-name {
      font-weight: 600;
      color: #1a202c;
    }

    /* Education & Certifications */
    .two-col-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .edu-item, .cert-item {
      font-size: 9pt;
      line-height: 1.4;
    }

    .edu-degree {
      font-weight: 700;
      color: #1a202c;
    }

    .edu-school {
      color: #006970;
      font-size: 8.8pt;
    }

    /* Badges / Chips for PDF */
    .db-box {
      background: #f7fafc;
      border: 1pt solid #e2e8f0;
      border-left: 3pt solid #006970;
      padding: 6px 10px;
      font-size: 8.8pt;
      margin-top: 4px;
    }

    /* Recognition snippet */
    .rec-quote {
      font-size: 8.5pt;
      font-style: italic;
      color: #4a5568;
      border-left: 2pt solid #006970;
      padding-left: 8px;
      margin-top: 4px;
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header class="cv-header">
    <div>
      <h1 class="cv-name">${profileData.identity.fullName}</h1>
      <div class="cv-title">${profileData.identity.positioning}</div>
    </div>
    <div class="cv-contact">
      <div>${profileData.identity.location}</div>
      <div>${profileData.identity.email}</div>
      <div><a href="${profileData.identity.links.linkedin}">linkedin.com/in/jorge-augusto-gutierrez-bandera</a></div>
      <div><a href="${profileData.identity.links.github}">github.com/Jorge-tec</a></div>
    </div>
  </header>

  <!-- Summary -->
  <div class="cv-summary">
    ${profileData.identity.summary}
  </div>

  <!-- Core Technical Competencies -->
  <section class="cv-section">
    <div class="section-title">Core Technical Competencies</div>
    <div class="skills-grid">
      <div class="skill-row">
        <span class="skill-cat">Languages:</span>
        <span class="skill-list">${profileData.technicalStack.languages.skills.join(', ')}</span>
      </div>
      <div class="skill-row">
        <span class="skill-cat">Backend:</span>
        <span class="skill-list">${profileData.technicalStack.backend.skills.join(', ')}</span>
      </div>
      <div class="skill-row">
        <span class="skill-cat">Databases:</span>
        <span class="skill-list">${profileData.technicalStack.databases.skills.slice(0, 4).join(', ')}</span>
      </div>
      <div class="skill-row">
        <span class="skill-cat">Frontend:</span>
        <span class="skill-list">${profileData.technicalStack.frontend.skills.join(', ')}</span>
      </div>
      <div class="skill-row">
        <span class="skill-cat">Testing & Cloud:</span>
        <span class="skill-list">${profileData.technicalStack.testingAndTools.skills.join(', ')}</span>
      </div>
      <div class="skill-row">
        <span class="skill-cat">Specialization:</span>
        <span class="skill-list">Relational DB Architecture, T-SQL, Microservices</span>
      </div>
    </div>
  </section>

  <!-- Professional Experience -->
  <section class="cv-section">
    <div class="section-title">Professional Experience</div>

    <!-- TCS -->
    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-role">Back-end Developer</span> — <span class="exp-company">Tata Consultancy Services (TCS)</span>
        </div>
        <span class="exp-date">Jun 2022 – Present (4+ yrs)</span>
      </div>
      <div class="exp-desc">
        Enterprise consultant architecting backend services and APIs for major corporate and financial sector accounts in Colombia:
      </div>
      <ul class="client-list">
        <li><span class="client-name">BANISTMO S.A</span> (Oct 2023 – Present): Banking & financial services software development in the BFSI Southeast Banking and LATAM unit.</li>
        <li><span class="client-name">Compañía de Financiamiento TUYA S.A.</span> (Jul 2023 – Sep 2023): Development of financial and retail financing services.</li>
        <li><span class="client-name">SUMMA - Servicios Corporativos Integrales S.A.S.</span> (Jun 2022 – Jul 2023): Corporate process solutions and service integration.</li>
      </ul>
    </div>

    <!-- Personalsoft -->
    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-role">Analista en Ingeniería de Software</span> — <span class="exp-company">Personalsoft</span>
        </div>
        <span class="exp-date">Feb 2021 – Jun 2022</span>
      </div>
      <div class="exp-desc">
        Enterprise software engineering analysis, requirements evaluation, and application lifecycle development based in Medellín, Colombia.
      </div>
    </div>

    <!-- Mangus.co -->
    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-role">Desarrollador de Software</span> — <span class="exp-company">Mangus.co - E-learning Empresarial</span>
        </div>
        <span class="exp-date">Mar 2018 – Jan 2021</span>
      </div>
      <div class="exp-desc">
        Full lifecycle software and web application development for enterprise EdTech platforms and online corporate training systems.
      </div>
    </div>

    <!-- Metroarea -->
    <div class="exp-item">
      <div class="exp-header">
        <div>
          <span class="exp-role">Jefe de Sistemas</span> — <span class="exp-company">Metroarea Inmobiliaria</span>
        </div>
        <span class="exp-date">Jun 2014 – May 2018</span>
      </div>
      <div class="exp-desc">
        Management and administration of computing infrastructure, internal systems, technical support, and IT operations.
      </div>
    </div>
  </section>

  <!-- Education, Certifications & Continuous Learning -->
  <section class="cv-section">
    <div class="two-col-layout">
      <!-- Left column: Education & Accreditations -->
      <div>
        <div class="section-title">Education & Accreditations</div>
        <div class="edu-item" style="margin-bottom: 8px;">
          <div class="edu-degree">${profileData.education.degree}</div>
          <div class="edu-school">${profileData.education.institution} (${profileData.education.period})</div>
        </div>

        <div style="font-size: 8.8pt; font-weight: 600; color: #0b1326; margin-top: 6px; margin-bottom: 2px;">TCS Internal Accreditations:</div>
        <ul style="font-size: 8.2pt; color: #4a5568; margin-left: 14px; line-height: 1.3;">
          <li>IT Infrastructure Services: Agile DC - Practitioner (2023)</li>
          <li>Leadership Development Program: Initiative, Team & Innovation (2023)</li>
          <li>Growth & Transformation: Awareness E0 (2022) | English Foundation (2024)</li>
        </ul>
      </div>

      <!-- Right column: Continuous Learning & Recognition -->
      <div>
        <div class="section-title">Continuous Training & Recognition</div>
        <div style="font-size: 8.5pt; color: #2d3748; line-height: 1.35;">
          <strong>Continuous Learning:</strong> 12 Learning Paths & 139 Completed LinkedIn Learning Courses spanning Databases (32h path), Agile/Scrum (11h), Leadership & Problem Solving.
        </div>
        
        <div class="rec-quote">
          "${profileData.recognitions[0].quote}"
          <div style="font-weight: 600; color: #006970; font-size: 7.8pt; margin-top: 2px;">
            — ${profileData.recognitions[0].author}, ${profileData.recognitions[0].role} (${profileData.recognitions[0].date})
          </div>
        </div>
      </div>
    </div>
  </section>
</body>
</html>`;
}
