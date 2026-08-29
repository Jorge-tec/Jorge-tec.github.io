import { profileData } from '../src/data/profileData.js';

export function renderCvHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${profileData.identity.fullName} — Curriculum Vitae</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet" />
  <style>
    @page {
      size: letter portrait;
      margin: 0;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9.2pt;
      line-height: 1.4;
      color: #1e293b;
      background: #ffffff;
      -webkit-font-smoothing: antialiased;
    }

    /* Page Canvas Dimensions: Letter = 8.5in x 11in = 215.9mm x 279.4mm */
    .page {
      width: 215.9mm;
      height: 279.4mm;
      padding: 12mm 14mm 10mm 14mm;
      position: relative;
      page-break-after: always;
      break-after: page;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    }

    .page:last-child {
      page-break-after: auto;
      break-after: auto;
    }

    .page-content {
      flex: 1;
    }

    /* Header */
    .cv-header {
      border-bottom: 2pt solid #006970;
      padding-bottom: 8px;
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .cv-name {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 20pt;
      font-weight: 700;
      color: #0b1326;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }

    .cv-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 11.5pt;
      font-weight: 600;
      color: #006970;
      margin-top: 2px;
    }

    .cv-contact {
      text-align: right;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8pt;
      color: #475569;
      line-height: 1.45;
    }

    .cv-contact a {
      color: #006970;
      text-decoration: none;
    }

    /* Section Structure */
    .cv-section {
      margin-bottom: 11px;
    }

    .section-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 10.5pt;
      font-weight: 700;
      color: #0b1326;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-bottom: 1.2pt solid #cbd5e1;
      padding-bottom: 2px;
      margin-bottom: 6px;
    }

    /* Summary */
    .cv-summary {
      font-size: 9pt;
      color: #334155;
      line-height: 1.45;
      text-align: justify;
    }

    /* Experience Items */
    .exp-item {
      margin-bottom: 9px;
    }

    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 1px;
    }

    .exp-role {
      font-weight: 700;
      font-size: 9.8pt;
      color: #0f172a;
    }

    .exp-company {
      color: #006970;
      font-weight: 600;
      font-size: 9.3pt;
    }

    .exp-date {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8pt;
      color: #64748b;
      font-weight: 500;
    }

    .exp-location {
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.5pt;
      color: #64748b;
      margin-bottom: 2px;
    }

    .exp-desc {
      font-size: 8.6pt;
      color: #334155;
      line-height: 1.4;
      margin-bottom: 3px;
    }

    .client-list {
      margin-left: 12px;
      list-style-type: square;
      font-size: 8.4pt;
      color: #334155;
      line-height: 1.38;
    }

    .client-list li {
      margin-bottom: 2px;
    }

    .client-name {
      font-weight: 600;
      color: #0f172a;
    }

    /* Competencies Grid */
    .skills-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px 14px;
    }

    .skill-card {
      background: #f8fafc;
      border: 0.8pt solid #e2e8f0;
      border-left: 2.5pt solid #006970;
      padding: 5px 8px;
      border-radius: 2px;
    }

    .skill-cat {
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      color: #006970;
      font-size: 8pt;
      text-transform: uppercase;
      margin-bottom: 1px;
    }

    .skill-list {
      color: #334155;
      font-size: 8.4pt;
      line-height: 1.35;
    }

    /* Certifications Grid */
    .cert-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4px 14px;
    }

    .cert-item {
      font-size: 8.2pt;
      color: #334155;
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 2px 0;
      border-bottom: 0.5pt solid #f1f5f9;
    }

    .cert-name {
      font-weight: 500;
      color: #0f172a;
    }

    .cert-org {
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.5pt;
      color: #006970;
    }

    /* Learning Patterns */
    .learning-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px 14px;
    }

    .learning-card {
      font-size: 8.2pt;
      line-height: 1.3;
    }

    .learning-title {
      font-weight: 600;
      color: #0f172a;
    }

    .learning-count {
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.5pt;
      color: #006970;
      font-weight: 500;
    }

    .learning-desc {
      color: #64748b;
      font-size: 7.8pt;
    }

    /* Recognitions */
    .rec-item {
      margin-bottom: 7px;
    }

    .rec-header {
      display: flex;
      justify-content: space-between;
      font-size: 8.4pt;
      margin-bottom: 1px;
    }

    .rec-author {
      font-weight: 600;
      color: #0f172a;
    }

    .rec-role {
      color: #006970;
      font-size: 7.8pt;
      font-family: 'JetBrains Mono', monospace;
    }

    .rec-date {
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.5pt;
      color: #64748b;
    }

    .rec-quote {
      font-size: 7.8pt;
      font-style: italic;
      color: #475569;
      border-left: 2pt solid #006970;
      padding-left: 6px;
      line-height: 1.3;
      margin-top: 1px;
    }

    /* Education */
    .edu-item {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }

    .edu-degree {
      font-weight: 700;
      font-size: 8.8pt;
      color: #0f172a;
    }

    .edu-school {
      color: #006970;
      font-size: 8.4pt;
      font-weight: 500;
    }

    .edu-date {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8pt;
      color: #64748b;
    }

    /* Running Footer */
    .page-footer {
      border-top: 0.8pt solid #cbd5e1;
      padding-top: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'JetBrains Mono', monospace;
      font-size: 7pt;
      color: #94a3b8;
    }

    .page-footer a {
      color: #006970;
      text-decoration: none;
    }
  </style>
</head>
<body>

  <!-- ========================================================================= -->
  <!-- PAGE 1 — PROFESSIONAL CORE & EXPERIENCE                                   -->
  <!-- ========================================================================= -->
  <div class="page">
    <div class="page-content">
      <!-- Identity Header -->
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

      <!-- Professional Profile Summary -->
      <section class="cv-section">
        <div class="section-title">Perfil Profesional</div>
        <p class="cv-summary">
          ${profileData.identity.summary}
        </p>
      </section>

      <!-- Professional Experience -->
      <section class="cv-section">
        <div class="section-title">Experiencia Profesional</div>

        <!-- TCS -->
        <div class="exp-item">
          <div class="exp-header">
            <div>
              <span class="exp-role">Back-end Developer</span> — <span class="exp-company">Tata Consultancy Services (TCS)</span>
            </div>
            <span class="exp-date">Jun 2022 – Presente (4+ años)</span>
          </div>
          <div class="exp-location">Colombia • Jornada completa</div>
          <div class="exp-desc">
            Consultor de software backend enfocado en servicios empresariales e integración para cuentas corporativas y del sector financiero:
          </div>
          <ul class="client-list">
            <li>
              <span class="client-name">BANISTMO S.A</span> (Oct 2023 – Presente): Desarrollo de software y servicios para la unidad de negocio BFSI Southeast Banking & LATAM.
            </li>
            <li>
              <span class="client-name">Compañía de Financiamiento TUYA S.A.</span> (Jul 2023 – Sep 2023): Desarrollo e integración de servicios financieros y financiamiento comercial.
            </li>
            <li>
              <span class="client-name">SUMMA - Servicios Corporativos Integrales S.A.S.</span> (Jun 2022 – Jul 2023): Desarrollo e integración de servicios corporativos para procesos empresariales.
            </li>
          </ul>
        </div>

        <!-- Personalsoft -->
        <div class="exp-item">
          <div class="exp-header">
            <div>
              <span class="exp-role">Analista en Ingeniería de Software</span> — <span class="exp-company">Personalsoft</span>
            </div>
            <span class="exp-date">Feb 2021 – Jun 2022 (1 año 5 meses)</span>
          </div>
          <div class="exp-location">Medellín, Antioquia, Colombia • Jornada completa</div>
          <div class="exp-desc">
            Análisis de ingeniería de software, evaluación de requerimientos, diseño de soluciones y desarrollo en el ciclo de vida de aplicaciones empresariales.
          </div>
        </div>

        <!-- Mangus.co -->
        <div class="exp-item">
          <div class="exp-header">
            <div>
              <span class="exp-role">Desarrollador de Software</span> — <span class="exp-company">Mangus.co - E-learning Empresarial</span>
            </div>
            <span class="exp-date">Mar 2018 – Ene 2021 (2 años 11 meses)</span>
          </div>
          <div class="exp-location">Barranquilla, Atlántico, Colombia • Jornada completa</div>
          <div class="exp-desc">
            Desarrollo de software y módulos web para plataformas de educación en línea empresarial (EdTech), integrando lógica de negocio y capas de datos.
          </div>
        </div>

        <!-- Metroarea -->
        <div class="exp-item">
          <div class="exp-header">
            <div>
              <span class="exp-role">Jefe de Sistemas</span> — <span class="exp-company">Metroarea Inmobiliaria</span>
            </div>
            <span class="exp-date">Jun 2014 – May 2018 (4 años)</span>
          </div>
          <div class="exp-location">Barranquilla, Atlántico, Colombia • Jornada completa</div>
          <div class="exp-desc">
            Liderazgo y administración de la infraestructura de TI, plataformas de computación internas, soporte técnico y continuidad operativa de sistemas.
          </div>
        </div>
      </section>
    </div>

    <!-- Page 1 Footer -->
    <footer class="page-footer">
      <div>${profileData.identity.fullName} • Curriculum Vitae</div>
      <div><a href="https://Jorge-tec.github.io">https://Jorge-tec.github.io</a></div>
      <div>Página 1 de 2</div>
    </footer>
  </div>

  <!-- ========================================================================= -->
  <!-- PAGE 2 — TECHNICAL DEPTH, CERTIFICATIONS, LEARNING, RECOGNITIONS, EDU     -->
  <!-- ========================================================================= -->
  <div class="page">
    <div class="page-content">
      <!-- Header Mini on Page 2 for ATS & Reader Context -->
      <div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1.5pt solid #006970; padding-bottom: 3px; margin-bottom: 10px;">
        <span class="font-headline" style="font-size: 10pt; font-weight: 700; color: #0b1326; text-transform: uppercase; letter-spacing: 0.05em;">
          ${profileData.identity.fullName} — Competencias y Credenciales
        </span>
        <span class="font-mono" style="font-size: 7.5pt; color: #64748b;">
          ${profileData.identity.positioning}
        </span>
      </div>

      <!-- Competencias Técnicas -->
      <section class="cv-section">
        <div class="section-title">Competencias Técnicas</div>
        <div class="skills-grid">
          <div class="skill-card">
            <div class="skill-cat">Backend & Runtimes</div>
            <div class="skill-list">${profileData.technicalStack.backend.skills.join(', ')}</div>
          </div>
          <div class="skill-card" style="border-left-color: #00dbe9; background: #f0fdfa;">
            <div class="skill-cat" style="color: #006970;">Bases de Datos (Especialidad)</div>
            <div class="skill-list">${profileData.technicalStack.databases.skills.join(', ')}</div>
          </div>
          <div class="skill-card">
            <div class="skill-cat">Lenguajes de Programación</div>
            <div class="skill-list">${profileData.technicalStack.languages.skills.join(', ')}</div>
          </div>
          <div class="skill-card">
            <div class="skill-cat">Frontend & Mobile</div>
            <div class="skill-list">${profileData.technicalStack.frontend.skills.join(', ')}</div>
          </div>
          <div class="skill-card">
            <div class="skill-cat">Testing & Calidad</div>
            <div class="skill-list">Jest, JUnit, Aseguramiento de Calidad de Software</div>
          </div>
          <div class="skill-card">
            <div class="skill-cat">Cloud & Arquitectura</div>
            <div class="skill-list">Serverless, Azure, Apache, Microservicios, REST APIs</div>
          </div>
        </div>
      </section>

      <!-- Certificaciones y Acreditaciones -->
      <section class="cv-section">
        <div class="section-title">Certificaciones y Acreditaciones</div>
        <div class="cert-grid">
          <div class="cert-item">
            <span class="cert-name">IT Infrastructure Services: Agile DC - Practitioner</span>
            <span class="cert-org">TCS • 2023</span>
          </div>
          <div class="cert-item">
            <span class="cert-name">LDP: Initiative & Proactiveness Foundation</span>
            <span class="cert-org">TCS • 2023</span>
          </div>
          <div class="cert-item">
            <span class="cert-name">LDP: Team Skills Foundation</span>
            <span class="cert-org">TCS • 2023</span>
          </div>
          <div class="cert-item">
            <span class="cert-name">LDP: Innovation & Creativity Foundation</span>
            <span class="cert-org">TCS • 2023</span>
          </div>
          <div class="cert-item">
            <span class="cert-name">Growth & Transformation: Awareness E0</span>
            <span class="cert-org">TCS • 2022</span>
          </div>
          <div class="cert-item">
            <span class="cert-name">Software Security Assurance - HiTech</span>
            <span class="cert-org">TCS • 2022</span>
          </div>
          <div class="cert-item">
            <span class="cert-name">English language: Foundation (V1.0)</span>
            <span class="cert-org">TCS • 2024</span>
          </div>
          <div class="cert-item">
            <span class="cert-name">3D learning GROW Technology 2</span>
            <span class="cert-org">TCS • 2023</span>
          </div>
        </div>
      </section>

      <!-- Formación Continua -->
      <section class="cv-section">
        <div class="section-title">Formación Continua y Desarrollo Profesional</div>
        <div style="font-size: 8.2pt; color: #475569; margin-bottom: 4px;">
          Registro comprobable: <strong>12 Itinerarios de Aprendizaje</strong> y <strong>139 Cursos</strong> en LinkedIn Learning, más <strong>11 Programas Corporativos</strong> en TCS:
        </div>
        <div class="learning-grid">
          <div class="learning-card">
            <span class="learning-title">• Desarrollo de Bases de Datos:</span> <span class="learning-count">32h</span>
            <div class="learning-desc">SQL Server (Transact-SQL, Triggers, Funciones, SSIS, Diseño y Modelado Relacional).</div>
          </div>
          <div class="learning-card">
            <span class="learning-title">• Metodologías Ágiles & Gestión:</span> <span class="learning-count">11h</span>
            <div class="learning-desc">Scrum Esencial, Design Thinking, Kanban, Extreme Programming y Lean Six Sigma.</div>
          </div>
          <div class="learning-card">
            <span class="learning-title">• Arquitectura de Software & Cloud:</span> <span class="learning-count">9h</span>
            <div class="learning-desc">Node.js Microservices, Angular Esencial, Azure y Azure Sphere.</div>
          </div>
          <div class="learning-card">
            <span class="learning-title">• Liderazgo & Estrategia:</span> <span class="learning-count">35h</span>
            <div class="learning-desc">Liderazgo transformador, gestión de equipos, comunicación asertiva y resolución de problemas.</div>
          </div>
        </div>
      </section>

      <!-- Reconocimientos y Premios -->
      <section class="cv-section">
        <div class="section-title">Reconocimientos y Agradecimientos Corporativos</div>

        <div class="rec-item">
          <div class="rec-header">
            <span class="rec-author">Apreciación Anual de Colaboración y Trabajo en Equipo</span>
            <span class="rec-date">Ene 2026</span>
          </div>
          <div class="rec-role">Raka Banerjee — Sub ISU Head (Tata Consultancy Services)</div>
          <div class="rec-quote">
            "Throughout the Year you have been a significant part of our Sub ISU, Thank You for the way you have #collaborated #supported #strengthened Team Work #worked with positivity and innovation."
          </div>
        </div>

        <div class="rec-item">
          <div class="rec-header">
            <span class="rec-author">Agradecimiento por Contribución — BFSI Banking & LATAM</span>
            <span class="rec-date">Jun 2025</span>
          </div>
          <div class="rec-role">Raka Banerjee — Sub ISU Head (Tata Consultancy Services)</div>
          <div class="rec-quote">
            "Thank you for all your efforts and contribution towards TCS and our Sub ISU BFSI SOUTHEAST BANKING and LATAM. I look forward to work with you in the upcoming quarters."
          </div>
        </div>

        <div class="rec-item">
          <div class="rec-header">
            <span class="rec-author">Invitación a Comunidad de Mentores (International Mentoring Day)</span>
            <span class="rec-date">Ene 2025</span>
          </div>
          <div class="rec-role">Talent Transformation Team — Tata Consultancy Services</div>
          <div class="rec-quote">
            "We celebrate the incredible impact that mentors have on shaping lives... We invite you to step into this fulfilling role and join the community of mentors who are transforming lives."
          </div>
        </div>
      </section>

      <!-- Educación -->
      <section class="cv-section">
        <div class="section-title">Educación</div>
        <div class="edu-item">
          <div>
            <div class="edu-degree">${profileData.education.degree}</div>
            <div class="edu-school">${profileData.education.institution} • ${profileData.education.location}</div>
          </div>
          <span class="edu-date">${profileData.education.period}</span>
        </div>
      </section>
    </div>

    <!-- Page 2 Footer -->
    <footer class="page-footer">
      <div>${profileData.identity.fullName} • Curriculum Vitae</div>
      <div><a href="https://Jorge-tec.github.io">https://Jorge-tec.github.io</a></div>
      <div>Página 2 de 2</div>
    </footer>
  </div>

</body>
</html>`;
}
