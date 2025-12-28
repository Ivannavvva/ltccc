import React, { useState } from 'react';
import { 
  CheckCircle, 
  MessageSquare, 
  ChevronRight, 
  Sparkles, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  Target,
  Shirt,
  XCircle,
  Users,
  Play,
  TrendingUp,
  Award,
  Quote,
  ShieldAlert,
  ChevronLeft,
  HelpCircle,
  AlertTriangle,
  BarChart3,
  Smartphone,
  ChevronDown,
  ChevronUp,
  MessageCircle
} from 'lucide-react';

// Brand Palette
// Cyan: #26C6DA (Primary/Backgrounds)
// Orange: #FF6E40 (Buttons/CTAs)
// Yellow: #FFD740 (Highlights/Stars)

const App = () => {
  const [step, setStep] = useState(0); // 0: Pre-quiz, 1-4: Questions, 5: Success, 6: Rejection
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    hasBusiness: '',
    techCount: '',
    revenue: '',
    readyToInvest: ''
  });

  const scrollToApply = () => {
    const element = document.getElementById('apply-section');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleNext = (field: string, value: string) => {
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);

    if (field === 'hasBusiness' && value === 'no') {
      setStep(6); 
      return;
    }

    if (step < 4) {
      setStep(step + 1);
    } else {
      if (newFormData.revenue === 'bajo' || newFormData.techCount === '0') {
        setStep(6);
      } else {
        setStep(5); 
      }
    }
  };

  // Updated to 3 Pillars Structure
  const coreOffer = [
    {
      title: "Pilar A: Demanda y Autoridad",
      tag: "TRÁFICO",
      icon: <Target className="w-8 h-8 text-white" />,
      iconBg: "bg-[#26C6DA]",
      description: "Generación de demanda y marca líder en tu ciudad.",
      points: [
        "Licencia de Marca (Exclusiva)",
        "Biblioteca Ads Ganadores",
        "Subdominio Web",
        "Content Creator IA"
      ],
      hormoziLever: "Deja de adivinar qué anuncios funcionan.",
      emoji: "🚀"
    },
    {
      title: "Pilar B: Conversión 24/7",
      tag: "AUTOMATIZACIÓN",
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      iconBg: "bg-[#FF6E40]",
      description: "Tu vendedora digital filtra y cierra mientras operas.",
      points: [
        "Sof-IA: Vendedora Digital",
        "Filtro de 'Curiosos'",
        "Reporte CEO Diario",
        "Reactivación Automática"
      ],
      hormoziLever: "No pierdas ventas por tardar en contestar.",
      emoji: "🤖"
    },
    {
      title: "Pilar C: Operación y Talento",
      tag: "CONTROL",
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      iconBg: "bg-[#FFD740]",
      description: "Infraestructura para gestionar técnicos y dinero.",
      points: [
        "App Rug Tracker",
        "Control de Tapetes",
        "Embudo de Contratación",
        "Mastermind Mensual"
      ],
      hormoziLever: "Escala rutas sin perder el control.",
      emoji: "📱"
    }
  ];

  const painPoints = [
    {
      title: "Ads que no venden",
      desc: "No quemes dinero probando. Te instalamos nuestra biblioteca validada.",
      icon: <TrendingUp className="w-6 h-6 text-red-500" />
    },
    {
      title: "Esclavitud del WhatsApp",
      desc: "¿Pierdes ventas por tardar? Sof-IA califica y responde por ti.",
      icon: <Smartphone className="w-6 h-6 text-red-500" />
    },
    {
      title: "Marca 'Casera'",
      desc: "Sin imagen premium no puedes cobrar más. Te damos autoridad instantánea.",
      icon: <Shirt className="w-6 h-6 text-red-500" />
    },
    {
      title: "Descontrol Operativo",
      desc: "¿Se pierden tapetes? Rug Tracker te da visión total en un clic.",
      icon: <AlertTriangle className="w-6 h-6 text-red-500" />
    }
  ];

  const faqs = [
    {
      q: "¿Es caro invertir $9,900 ahora?",
      a: "Más caro es dejar dinero en la mesa por no tener una marca premium ni automatización. La inversión se paga al liberar tu tiempo y aumentar tu ticket promedio."
    },
    {
      q: "¿Y si llegan mensajes pero no vendo?",
      a: "Te damos los scripts de cierre y manejo de objeciones probados. Además, Sof-IA filtra a los curiosos antes de que lleguen a ti."
    },
    {
      q: "¿Me conviene esperar a temporada alta?",
      a: "No. La temporada baja es ideal para instalar la estructura. En temporada alta estarás demasiado ocupado lavando para crecer."
    },
    {
      q: "¿Debo contratar personal ya?",
      a: "No. Optimiza tu ruta actual primero. Cuando la demanda te supere, usa nuestro Embudo de Contratación para crecer sin estrés."
    },
    {
      q: "¿Tengo que cambiar mi nombre?",
      a: "Puedes usar co-branding (LTC + Tu Nombre) para sumar autoridad sin perder tu trayectoria local."
    },
    {
      q: "¿Qué tan rápido veo resultados?",
      a: "El motor se instala en 72h. El flujo de prospectos depende de tu inversión en pauta publicitaria."
    },
    {
      q: "¿Es una franquicia?",
      a: "No. Es una licencia tecnológica. Tienes independencia operativa total con el respaldo de un sistema probado."
    }
  ];

  return (
    <div className="min-h-screen font-sans text-slate-700 bg-white selection:bg-[#26C6DA] selection:text-white overflow-x-hidden relative">
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/8131561479" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded-lg text-xs font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¿Dudas? Escríbenos
        </span>
      </a>

      {/* Top Banner */}
      <div className="bg-[#26C6DA] text-white py-2 px-6 text-center text-xs font-bold tracking-widest uppercase sticky top-0 z-50 flex items-center justify-center gap-2 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
        <span className="hidden sm:inline">Zona Exclusiva:</span> 
        <span className="opacity-90">Solo 10 espacios para Partners Fundadores.</span>
      </div>

      {/* Navigation */}
      <nav className="sticky top-10 z-40 w-full px-4 mt-2">
        <div className="max-w-7xl mx-auto h-20 bg-white/80 backdrop-blur-xl border border-slate-100 rounded-full shadow-lg shadow-slate-200/50 flex items-center justify-between px-6 transition-all duration-300">
          <div className="flex items-center gap-2 cursor-pointer group">
            <img 
              src="https://i.postimg.cc/CL22gB5d/Logo-azul.png" 
              alt="LTC Logo" 
              className="h-14 w-auto object-contain" 
            />
          </div>
          <button 
            onClick={scrollToApply}
            className="hidden md:flex items-center bg-slate-900 text-white px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[#FF6E40] transition-colors shadow-md hover:-translate-y-0.5"
          >
            Validar Zona
            <ArrowRight className="w-3 h-3 ml-2" />
          </button>
        </div>
      </nav>

      {/* SECCIÓN 1: HERO */}
      <section className="relative pt-12 pb-24 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none -z-10">
          <div className="absolute top-10 right-10 w-80 h-80 bg-[#26C6DA]/10 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
          <div className="absolute top-40 left-10 w-80 h-80 bg-[#FFD740]/20 rounded-full blur-3xl mix-blend-multiply"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6 relative">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-100 px-4 py-1.5 rounded-full shadow-sm cursor-default">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6E40] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6E40]"></span>
            </span>
            <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">Motor de Crecimiento para Limpieza</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Deja de adivinar y activa la <span className="text-[#26C6DA]">librería de Ads ganadores</span>.
          </h1>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            LTC System: Licencia <strong>Business-in-a-Box</strong>. Motor de demanda, IA de ventas y Marca Premium. Tú operas, el sistema llena la agenda.
          </p>

          <div className="flex justify-center pt-4">
            <button 
              onClick={scrollToApply}
              className="bg-[#FF6E40] text-white px-8 py-3 rounded-2xl font-bold text-sm uppercase tracking-wider shadow-xl shadow-[#FF6E40]/20 hover:shadow-2xl hover:shadow-[#FF6E40]/40 hover:-translate-y-1 transition-all flex items-center gap-2 group"
            >
              Validar Zona Exclusiva
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: DIAGNÓSTICO */}
      <section className="py-16 px-4 bg-slate-50 rounded-[2.5rem] mx-2 md:mx-6 border border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">¿Es para ti?</h2>
            <p className="text-slate-500 text-sm mt-1">Descubre por qué tu negocio tiene un "techo" de cristal.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-green-100 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1.5 bg-green-500"></div>
               <div className="flex items-center gap-3 mb-4">
                 <CheckCircle className="w-6 h-6 text-green-500" />
                 <h3 className="font-bold text-lg text-slate-900">SÍ es para ti si:</h3>
               </div>
               <ul className="space-y-3">
                 {[
                   "Facturas $30k-$60k/mes y estás estancado.",
                   "Tienes ruta pero sigues respondiendo WhatsApps.",
                   "Harto de ingresos inestables.",
                   "Quieres ser dueño de zona, no lavador."
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                     <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden opacity-90">
               <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-200"></div>
               <div className="flex items-center gap-3 mb-4">
                 <XCircle className="w-6 h-6 text-slate-400" />
                 <h3 className="font-bold text-lg text-slate-900">NO es para ti si:</h3>
               </div>
               <ul className="space-y-3">
                 {[
                   "No tienes equipo ni capacidad operativa.",
                   "Buscas resultados sin profesionalizarte.",
                   "No invertirás en pauta publicitaria."
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-2 text-slate-500 text-sm">
                     <XCircle className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: DOLORES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
           <span className="text-red-500 font-bold text-xs uppercase tracking-wider">Problemas Reales</span>
           <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2">4 Dolores que eliminamos.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
           {painPoints.map((pain, idx) => (
             <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                   {pain.icon}
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">{pain.title}</h4>
                <p className="text-xs text-slate-500">{pain.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* SECCIÓN 4: PILARES */}
      <section className="py-20 px-6 bg-[#0f172a] text-white rounded-[2.5rem] mx-2 md:mx-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#26C6DA]/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
             <h2 className="text-3xl md:text-4xl font-extrabold">Sistema "Todo Incluido"</h2>
             <p className="text-slate-400 text-sm mt-2">Los 3 Pilares de Crecimiento</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {coreOffer.map((pillar, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-3xl border border-slate-700 hover:border-[#26C6DA]/50 transition-all flex flex-col">
                <div className="flex items-start justify-between mb-4">
                   <div className={`w-12 h-12 rounded-xl ${pillar.iconBg} flex items-center justify-center shadow-lg`}>
                      {pillar.icon}
                   </div>
                   <span className="text-2xl">{pillar.emoji}</span>
                </div>
                
                <div className="mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-900/50 px-2 py-1 rounded-md">{pillar.tag}</span>
                  <h3 className="text-lg font-bold text-white mt-2">{pillar.title}</h3>
                </div>
                
                <p className="text-slate-300 mb-6 text-xs leading-relaxed">{pillar.description}</p>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {pillar.points.map((point, pIdx) => (
                     <li key={pIdx} className="flex items-start gap-2 text-xs font-medium text-slate-200">
                        <CheckCircle className="w-3 h-3 text-[#26C6DA] flex-shrink-0 mt-0.5" />
                        {point}
                     </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-700 flex items-center gap-2">
                   <Zap className="w-3 h-3 text-[#FFD740] fill-[#FFD740]" />
                   <p className="text-[10px] font-bold text-slate-300 italic">{pillar.hormoziLever}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: PRUEBA SOCIAL */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Resultados Reales</h2>
            <p className="text-slate-500 text-sm mt-2">Probado en mercados feroces y plazas en crecimiento.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
             
             {/* CASE 1: QRO */}
             <div className="flex flex-col gap-4">
                <div className="rounded-[2rem] overflow-hidden bg-black aspect-video border-4 border-slate-100 shadow-xl relative group w-full">
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all pointer-events-none z-10">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                       <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                  <iframe 
                    src="https://player.vimeo.com/video/1149566685?badge=0&autopause=0&player_id=0&app_id=58479" 
                    className="w-full h-full"
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    title="Testimonio LTC Querétaro"
                  ></iframe>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="px-2 py-1 bg-[#26C6DA]/10 rounded text-[#26C6DA] font-bold text-xs">QRO</div>
                      <h4 className="font-bold text-slate-900 text-sm">Crecimiento Explosivo</h4>
                   </div>
                   <p className="text-slate-700 italic text-sm mb-3">
                     "Pasamos de $15k a $40k semanales instalando el sistema."
                   </p>
                   <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <CheckCircle className="w-3 h-3 text-[#26C6DA]" />
                      Maximiliano Téllez, Partner
                   </div>
                </div>
             </div>

             {/* CASE 2: MTY */}
             <div className="bg-white rounded-[2rem] shadow-lg border border-slate-100 overflow-hidden flex flex-col h-full">
                <div className="p-6 pb-2">
                  <div className="inline-flex items-center gap-2 bg-[#FFD740] text-amber-900 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
                      <Award className="w-3 h-3" /> Sede Central
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Caso Monterrey</h3>
                  <p className="text-slate-500 text-xs">De la cochera a dominar la ciudad.</p>
                </div>

                <div className="grid grid-cols-2 gap-0.5 bg-slate-100 h-56">
                   <div className="relative group overflow-hidden">
                      <img src="https://i.postimg.cc/FRHZ5Ysz/Diseno-sin-titulo.jpg" alt="Antes" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-3">
                         <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">2022</span>
                         <span className="text-white font-bold text-sm">Autoempleo</span>
                      </div>
                   </div>
                   <div className="relative group overflow-hidden">
                      <img src="https://i.postimg.cc/02zxcr8s/IMG-8932.jpg" alt="Después" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3">
                          <span className="text-[#26C6DA] text-[10px] font-bold uppercase tracking-widest">2025</span>
                         <span className="text-white font-bold text-sm">Infraestructura LTC</span>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-3 divide-x divide-slate-100 bg-slate-50 border-t border-slate-100 flex-grow items-center">
                   <div className="p-3 text-center">
                      <div className="text-lg font-black text-slate-900">16</div>
                      <div className="text-[9px] text-slate-500 uppercase font-bold">Personas</div>
                   </div>
                   <div className="p-3 text-center">
                      <div className="text-lg font-black text-slate-900">5</div>
                      <div className="text-[9px] text-slate-500 uppercase font-bold">Rutas</div>
                   </div>
                   <div className="p-3 text-center">
                      <div className="text-lg font-black text-slate-900">1</div>
                      <div className="text-[9px] text-slate-500 uppercase font-bold">Centro</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: INVERSIÓN */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
             <h2 className="text-2xl font-extrabold text-slate-900">Inversión y Exclusividad</h2>
             <p className="text-slate-500 text-sm">Modelo para escalar con control.</p>
          </div>

          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100">
            <div className="bg-[#26C6DA] py-6 text-center text-white px-4">
               <h3 className="text-2xl font-black tracking-tight">Licencia Partner LTC</h3>
               <p className="opacity-90 font-medium text-xs">Zona Exclusiva - Se cierra para la competencia.</p>
            </div>

            <div className="p-8">
               <div className="grid md:grid-cols-2 gap-8 items-center relative">
                  <div className="absolute left-1/2 top-4 bottom-4 w-px bg-slate-100 hidden md:block"></div>
                  
                  {/* Setup */}
                  <div className="text-center">
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Setup (Pago Único)</p>
                     <div className="flex flex-col items-center">
                        <span className="text-sm font-bold text-slate-400 line-through decoration-red-400 decoration-2">$45,000</span>
                        <div className="text-4xl font-black text-slate-900 mb-1">$9,900 <span className="text-xs font-bold text-slate-400">MXN</span></div>
                     </div>
                     <span className="text-[10px] font-bold text-[#FF6E40] bg-[#FF6E40]/10 px-2 py-0.5 rounded-full">Oferta Partners Fundadores (10 cupos)</span>

                     <ul className="text-left mt-4 space-y-1.5 text-xs text-slate-600 max-w-[180px] mx-auto">
                        <li className="flex gap-2"><CheckCircle className="w-3 h-3 text-[#26C6DA]"/> Onboarding 72h</li>
                        <li className="flex gap-2"><CheckCircle className="w-3 h-3 text-[#26C6DA]"/> Configuración IA</li>
                        <li className="flex gap-2"><CheckCircle className="w-3 h-3 text-[#26C6DA]"/> Marca Mínima</li>
                     </ul>
                  </div>

                  {/* MRR */}
                  <div className="text-center">
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Membresía</p>
                     <div className="flex flex-col items-center">
                        <span className="text-sm font-bold text-slate-400 line-through decoration-slate-400 decoration-2">$5,900</span>
                        <div className="text-4xl font-black text-[#26C6DA] mb-1">$3,900 <span className="text-xs font-bold text-slate-400">MXN/Mes</span></div>
                     </div>
                     <div className="inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase">Precio Vitalicio</div>
                     <ul className="text-left mt-4 space-y-1.5 text-xs text-slate-600 max-w-[180px] mx-auto">
                        <li className="flex gap-2"><CheckCircle className="w-3 h-3 text-[#26C6DA]"/> Hosting Sof-IA</li>
                        <li className="flex gap-2"><CheckCircle className="w-3 h-3 text-[#26C6DA]"/> Rug Tracker App</li>
                        <li className="flex gap-2"><CheckCircle className="w-3 h-3 text-[#26C6DA]"/> Mastermind</li>
                     </ul>
                  </div>
               </div>

               <div className="mt-8 bg-amber-50 rounded-xl p-4 border border-[#FFD740] flex items-center gap-4">
                  <Award className="w-6 h-6 text-[#FFD740] flex-shrink-0" />
                  <div>
                     <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider">Garantía "Negocio Activado"</h4>
                     <p className="text-xs text-slate-600 mt-1">
                       Si en 30 días no tienes servicios agendados y prospectos, <strong>reembolsamos el 100% del Setup</strong> y Sof-IA gratis 60 días.
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 8: FAQ Toggle */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
         <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Preguntas Frecuentes</h3>
         <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300">
                 <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                 >
                   <span className="flex items-center gap-3 text-sm md:text-base">
                     <HelpCircle className="w-5 h-5 text-[#26C6DA] flex-shrink-0" />
                     {faq.q}
                   </span>
                   {openFaq === idx ? (
                     <ChevronUp className="w-5 h-5 text-slate-400" />
                   ) : (
                     <ChevronDown className="w-5 h-5 text-slate-400" />
                   )}
                 </button>
                 
                 <div className={`px-5 text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                   <p className="pl-8 leading-relaxed border-l-2 border-slate-100 ml-2">
                     {faq.a}
                   </p>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* SECCIÓN 9: WIZARD */}
      <section id="apply-section" className="py-20 px-6 bg-white relative">
         <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-10">
               <h2 className="text-3xl font-extrabold text-slate-900">Deja de operar, empieza a dirigir.</h2>
               <p className="text-slate-500 text-sm">Consulta disponibilidad en tu ciudad.</p>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
               
               {/* Progress */}
               <div className="px-8 pt-8 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                       <h2 className="text-lg font-bold text-slate-900">Validación de Zona</h2>
                       <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Paso {step > 4 ? 4 : step} de 4</p>
                    </div>
                    <div className="flex gap-1.5">
                       {[1, 2, 3, 4].map((s) => (
                          <div key={s} className={`h-1.5 w-6 rounded-full transition-all duration-500 ${step >= s ? 'bg-[#26C6DA]' : 'bg-slate-100'}`}></div>
                       ))}
                    </div>
                  </div>
                  <div className="w-full h-px bg-slate-100"></div>
               </div>
               
               <div className="p-8 md:p-10 min-h-[400px] flex flex-col justify-center">
                  
                  {step === 0 && (
                    <div className="text-center animate-fade-in space-y-6">
                       <div className="w-16 h-16 bg-[#26C6DA]/10 rounded-2xl flex items-center justify-center mx-auto mb-2 rotate-3">
                          <ShieldCheck className="w-8 h-8 text-[#26C6DA]" />
                       </div>
                       <div>
                           <h3 className="text-2xl font-extrabold text-slate-900">Disponibilidad de Zona</h3>
                           <p className="text-slate-600 text-sm max-w-md mx-auto mt-2">
                             Verifica si tu ciudad está libre para asignación exclusiva.
                           </p>
                       </div>
                       
                       <button 
                         onClick={() => setStep(1)}
                         className="bg-[#FF6E40] text-white px-10 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#ff5722] transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg shadow-[#FF6E40]/20"
                       >
                         INICIAR CONSULTA <ArrowRight className="w-4 h-4" />
                       </button>
                    </div>
                  )}

                  {step === 1 && (
                    <div className="space-y-6 animate-fade-in">
                       <h4 className="text-xl font-bold text-center text-slate-900">¿Tienes negocio de limpieza activo?</h4>
                       <div className="grid md:grid-cols-2 gap-4">
                          <button onClick={() => handleNext('hasBusiness', 'yes')} className="group p-5 rounded-2xl border-2 border-slate-100 hover:border-[#26C6DA] hover:bg-[#26C6DA]/5 transition-all text-left flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-[#26C6DA] flex items-center justify-center transition-colors flex-shrink-0">
                                <CheckCircle className="w-5 h-5 text-slate-400 group-hover:text-white" />
                             </div>
                             <div>
                                <span className="block font-bold text-slate-900">Sí, operando</span>
                                <span className="text-xs text-slate-500">Con clientes activos.</span>
                             </div>
                          </button>
                          <button onClick={() => handleNext('hasBusiness', 'no')} className="group p-5 rounded-2xl border-2 border-slate-100 hover:border-red-200 hover:bg-red-50 transition-all text-left flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-red-200 flex items-center justify-center transition-colors flex-shrink-0">
                                <XCircle className="w-5 h-5 text-slate-400 group-hover:text-red-500" />
                             </div>
                             <div>
                                <span className="block font-bold text-slate-900">No, desde cero</span>
                                <span className="text-xs text-slate-500">Quiero emprender.</span>
                             </div>
                          </button>
                       </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6 animate-fade-in">
                       <h4 className="text-xl font-bold text-center text-slate-900">¿Tamaño de tu equipo?</h4>
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {[
                            { val: '0', label: 'Yo solo', desc: 'Autoempleado' },
                            { val: '1-2', label: '1-2 Staff', desc: 'Pequeño' },
                            { val: '3+', label: '3+ Staff', desc: 'Sólido' }
                          ].map(opt => (
                            <button 
                              key={opt.val}
                              onClick={() => handleNext('techCount', opt.val)}
                              className="p-4 rounded-2xl border-2 border-slate-100 hover:border-[#26C6DA] hover:bg-[#26C6DA]/5 transition-all text-center group"
                            >
                               <span className="text-3xl font-black text-slate-200 group-hover:text-[#26C6DA] block mb-1 transition-colors">{opt.val}</span>
                               <span className="font-bold text-slate-900 block text-sm">{opt.label}</span>
                            </button>
                          ))}
                       </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6 animate-fade-in">
                       <h4 className="text-xl font-bold text-center text-slate-900">Facturación Semanal</h4>
                       <div className="flex flex-col gap-3 max-w-sm mx-auto">
                          {[
                            { val: 'bajo', label: 'Menos de $30k MXN' },
                            { val: 'medio', label: '$30k - $60k MXN' },
                            { val: 'alto', label: 'Más de $60k MXN' }
                          ].map(opt => (
                            <button 
                              key={opt.val}
                              onClick={() => handleNext('revenue', opt.val)}
                              className="w-full p-4 rounded-xl border-2 border-slate-100 hover:border-[#26C6DA] hover:bg-[#26C6DA]/5 transition-all font-bold text-slate-700 hover:text-[#26C6DA]"
                            >
                               {opt.label}
                            </button>
                          ))}
                       </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="space-y-6 animate-fade-in text-center">
                       <div className="inline-block bg-[#FFD740]/20 text-amber-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2">
                          Verificación Final
                       </div>
                       <h4 className="text-2xl font-bold text-slate-900 leading-tight">
                         ¿Cuentas con capital para el inicio ($13,800) y pauta?
                       </h4>
                       <p className="text-slate-500 text-xs">Incluye Setup ($9,900) + 1er Mes ($3,900).</p>
                       
                       <div className="flex flex-col gap-3 max-w-xs mx-auto mt-6">
                          <button 
                            onClick={() => handleNext('readyToInvest', 'yes')}
                            className="w-full bg-[#26C6DA] text-white py-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md hover:bg-cyan-500 transition-all"
                          >
                             Sí, tengo el capital
                          </button>
                          <button 
                            onClick={() => setStep(6)}
                            className="w-full bg-white border-2 border-slate-100 text-slate-400 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:text-slate-600 transition-all"
                          >
                             Aún no
                          </button>
                       </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="animate-fade-in w-full h-full flex flex-col">
                       <div className="text-center mb-4">
                          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wide mb-2">
                            <CheckCircle className="w-3 h-3" /> Pre-Calificado
                          </div>
                          <h4 className="text-xl font-bold text-slate-900">Agenda Entrevista</h4>
                       </div>
                       
                       <div className="flex-grow rounded-xl overflow-hidden border border-slate-200 bg-white relative min-h-[450px]">
                          <iframe 
                            src="https://calendly.com/ivan-morga/30min?primary_color=26C6DA&hide_gdpr_banner=1" 
                            width="100%" 
                            height="100%" 
                            className="absolute inset-0"
                            frameBorder="0"
                          ></iframe>
                       </div>
                    </div>
                  )}

                  {step === 6 && (
                    <div className="text-center animate-fade-in py-8 space-y-4">
                       <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto">
                        <ShieldAlert className="w-8 h-8 text-amber-500" />
                       </div>
                       <div className="max-w-md mx-auto space-y-2">
                          <h3 className="text-xl font-bold text-slate-900">No es el momento</h3>
                          <p className="text-slate-500 text-sm leading-relaxed">
                            LTC System es para negocios establecidos con capacidad de inversión. Sigue operando y vuelve cuando tengas tracción.
                          </p>
                       </div>
                       <button 
                        onClick={() => setStep(0)}
                        className="text-slate-400 hover:text-[#26C6DA] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 mx-auto mt-4"
                       >
                         <ChevronLeft className="w-4 h-4" /> Volver al inicio
                       </button>
                    </div>
                  )}

               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-slate-400 py-16 text-center text-sm border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
           <div className="flex items-center gap-2 cursor-pointer group">
             <img 
               src="https://i.postimg.cc/CL22gB5d/Logo-azul.png" 
               alt="LTC Logo" 
               className="h-12 w-auto object-contain" 
             />
           </div>
           <p className="opacity-60 text-xs max-w-md leading-relaxed">
             Confidencial. Uso exclusivo del prospecto. Esta propuesta no constituye asesoría legal/fiscal.
           </p>
           <p className="opacity-30 text-[10px] uppercase tracking-wider mt-4">© 2025 Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
};

export default App;