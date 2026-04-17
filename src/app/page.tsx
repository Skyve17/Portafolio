import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <ul className={styles.navLinks}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#experiencia">Experiencia</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className={`${styles.section} ${styles.hero}`}>
        <div className={styles.heroGlow}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} text-gradient`}>
            Desarrollo Web & <br />Arquitectura de Redes
          </h1>
          <h2 className={styles.heroName}>
            por Kevin Valdemar Hidalgo
          </h2>
          <p style={{ maxWidth: '600px', color: 'var(--text-secondary)' }}>
            Especializado en desarrollo de software Full Stack, automatización CI/CD,
            y arquitectura de redes. Transformando ideas complejas en interfaces formales e innovadoras.
          </p>
          <div className={styles.heroButtons}>
            <a href="#proyectos" className={styles.primaryBtn}>Ver Proyectos</a>
            <a href="#contacto" className={styles.secondaryBtn}>Contactar</a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className={styles.section}>
        <h2 className={styles.sectionTitle}>Mi <span className="text-gradient">Trayectoria</span></h2>

        <div className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <h3 className={styles.expRole}>Ingeniero Full Stack</h3>
            <div className={styles.expCompany}>SEDECO (Febrero - 2026)</div>
            <ul className={styles.expDesc}>
              <li>Automatización de procesos de integración y despliegue continuo (CI/CD) utilizando Jenkins, GitLab CI y Azure DevOps.</li>
              <li>Creación de Intranet web con sistema de inventarios, utilizando Laravel, PHP, Filament y Livewire.</li>
            </ul>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <h3 className={styles.expRole}>Técnico en Redes MIKROTIK</h3>
            <div className={styles.expCompany}>Enero 2018 - Julio 2020</div>
            <ul className={styles.expDesc}>
              <li>Configuración avanzada y administración de routers y switches MikroTik (RouterOS) para redes empresariales.</li>
              <li>Implementación y gestión de soluciones de red, incluyendo VLANs, QoS, Firewalls, balanceo de carga y OSPF.</li>
            </ul>
          </div>

          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <h3 className={styles.expRole}>Instructor en CONAFE</h3>
            <div className={styles.expCompany}>Julio 2017 - Diciembre 2017</div>
            <ul className={styles.expDesc}>
              <li>Liderazgo y capacitación de estudiantes, gestionando el programa educativo en comunidades.</li>
              <li>Planificación y ejecución de planes de estudio y resolución de conflictos.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className={styles.section}>
        <h2 className={styles.sectionTitle}>Portafolio de <span className="text-gradient">Proyectos</span></h2>

        <div className={styles.grid}>
          {/* Intranet */}
          <a href="https://intranet-sedeco-f492fa3d5268.herokuapp.com/" target="_blank" rel="noopener noreferrer" className={`${styles.card} glass-panel`}>
            <div className={styles.cardIcon}>🏢</div>
            <h3 className={styles.cardTitle}>Intranet SEDECO</h3>
            <p className={styles.cardDesc}>
              Desarrollo para el gobierno de michoacan de un sistema de intranet administrativa y gestión de inventarios con panel de control moderno.
            </p>
            <div className={styles.cardTech}>
              <span className={styles.techTag}>Laravel</span>
              <span className={styles.techTag}>Filament</span>
              <span className={styles.techTag}>PHP</span>
            </div>
          </a>

          {/* Hoteles */}
          <a href="https://hotel-luna-mia.vercel.app/" target="_blank" rel="noopener noreferrer" className={`${styles.card} glass-panel`}>
            <div className={styles.cardIcon}>🏨</div>
            <h3 className={styles.cardTitle}>Sistemas Hoteleros</h3>
            <p className={styles.cardDesc}>
              Creación de plataformas web premium con paneles de control para administración de cabañas (Luna Mía, Majahua).
            </p>
            <div className={styles.cardTech}>
              <span className={styles.techTag}>Next.js</span>
              <span className={styles.techTag}>React</span>
              <span className={styles.techTag}>Vanilla CSS</span>
            </div>
          </a>

          {/* Invitaciones */}
          <a href="https://skyvel7.github.io/InvGrettel/" target="_blank" rel="noopener noreferrer" className={`${styles.card} glass-panel`}>
            <div className={styles.cardIcon}>💌</div>
            <h3 className={styles.cardTitle}>Invitaciones Digitales</h3>
            <p className={styles.cardDesc}>
              Páginas web dinámicas para Bodas y XV Años, ofreciendo una experiencia digital elegante e interactiva para los invitados.
            </p>
            <div className={styles.cardTech}>
              <span className={styles.techTag}>Web Design</span>
              <span className={styles.techTag}>UX/UI</span>
              <span className={styles.techTag}>Animaciones</span>
            </div>
          </a>
        </div>
      </section>

      {/* Services and Skills Section */}
      <section id="servicios" className={styles.section}>
        <h2 className={styles.sectionTitle}>Servicios y <span className="text-gradient">Habilidades</span></h2>

        <div className={styles.grid}>
          <div className={`${styles.card} glass-panel`}>
            <h3 className={styles.cardTitle}>Ingeniería de Software</h3>
            <p className={styles.cardDesc}>Desarrollo robusto en Python, Bash, Go y tecnologías modernas orientadas a rendimiento.</p>
          </div>
          <div className={`${styles.card} glass-panel`}>
            <h3 className={styles.cardTitle}>DevOps & CI/CD</h3>
            <p className={styles.cardDesc}>Flujos automatizados utilizando Jenkins, GitLab CI, GitHub Actions y Azure DevOps.</p>
          </div>
          <div className={`${styles.card} glass-panel`}>
            <h3 className={styles.cardTitle}>Administración de Redes</h3>
            <p className={styles.cardDesc}>Especialista en Mikrotik, implementación de Firewall, QoS, y optimización de tráfico.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className={styles.section} style={{ minHeight: '60vh' }}>
        <h2 className={styles.sectionTitle}>Información de <span className="text-gradient">Contacto</span></h2>

        <div className={styles.contactGrid}>
          <div className={`${styles.contactItem} glass-panel`}>
            <div className={styles.contactIcon}>📱</div>
            <div className={styles.contactInfo}>
              <h4>Teléfono</h4>
              <p>753 159 1172</p>
            </div>
          </div>

          <div className={`${styles.contactItem} glass-panel`}>
            <div className={styles.contactIcon}>✉️</div>
            <div className={styles.contactInfo}>
              <h4>Correo Electrónico</h4>
              <p>skyvel337@gmail.com</p>
            </div>
          </div>

          <div className={`${styles.contactItem} glass-panel`} style={{ gridColumn: '1 / -1' }}>
            <div className={styles.contactIcon}>📍</div>
            <div className={styles.contactInfo}>
              <h4>Ubicación</h4>
              <p>Morelia, Villas del pedregal #3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/527531591172?text=Hola%20Kevin,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto." 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.whatsappBtn}
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
