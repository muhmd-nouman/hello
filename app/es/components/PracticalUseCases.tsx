import Image from "next/image"
import {
  Gamepad2,
  MessageSquare,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Slack,
  Smartphone,
  FileText,
  Code,
  PenTool,
} from "lucide-react"

export default function PracticalUseCases() {
  return (
    <section className="mx-auto py-12">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold dark:text-yellow-300 mb-8">
          Usos Prácticos para Caracteres Invisibles
        </h2>

        {/* Sección de Juegos */}
        <div className="mb-12 bg-white dark:bg-white/5 border dark:border-white/10 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <Gamepad2 className="text-yellow-300 h-8 w-8 flex-shrink-0" />
            <h3 className="text-2xl font-semibold text-black dark:text-yellow-200">
              Nombres de Usuario y Perfiles en Juegos
            </h3>
          </div>

          <p className="mb-6">
            Los caracteres invisibles se han convertido en una herramienta secreta para los jugadores que desean crear nombres de usuario y perfiles que se destaquen. Estos caracteres especiales te permiten agregar espacios únicos, crear nombres con un aspecto misterioso y hacer que tu perfil sobresalga entre miles. Muchos jugadores competitivos utilizan estos caracteres para que sus nombres sean reconocibles de inmediato en las tablas de clasificación y durante las partidas.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-background dark:bg-white/5 p-4 rounded-lg">
              <h4 className="text-xl dark:text-yellow-100 font-semibold mb-3">
                Personalización de Nombre en Fortnite
              </h4>
              <p className="mb-4">
                La gran cantidad de jugadores en Fortnite hace que destacar sea fundamental. Los caracteres invisibles te permiten crear nombres llamativos que parecen flotar o tener espacios inusuales. Jugadores profesionales y streamers usan estos caracteres para crear una identidad de marca reconocible durante torneos y transmisiones.
              </p>
              <div className="mb-4">
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">
                  Cómo usar caracteres invisibles en Fortnite:
                </h5>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Genera caracteres invisibles con nuestra herramienta</li>
                  <li>Copia los caracteres invisibles al portapapeles</li>
                  <li>Abre Fortnite y accede a la configuración de tu cuenta</li>
                  <li>Pega los caracteres invisibles en tu nombre de usuario</li>
                  <li>Guarda los cambios</li>
                </ol>
              </div>
              <div className="mb-4">
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">
                  Usos populares en Fortnite:
                </h5>
                <ul className="list-disc pl-5 space-y-1 ">
                  <li>Crea un nombre de usuario completamente invisible que aparezca como un espacio en blanco</li>
                  <li>Agrega espacios personalizados entre los caracteres para un aspecto único</li>
                  <li>Haz que tu nombre se vea único y fácilmente reconocible en el marcador de muertes</li>
                  <li>Crea etiquetas de clan que se destaquen del texto común</li>
                  <li>Obtén efectos de texto "flotante" en tu nombre de usuario</li>
                </ul>
              </div>
            </div>

            <div className="dark:bg-white/5 p-4 rounded-lg">
              <h4 className="text-xl dark:text-yellow-100 font-semibold mb-3">
                Trucos para Nombres en PUBG Mobile & PC
              </h4>
              <p className="mb-4">
                Los jugadores de PUBG han descubierto que los caracteres invisibles ofrecen una ventaja táctica al hacer que los nombres de usuario sean más difíciles de denunciar o recordar. Muchos jugadores de alto nivel usan estos caracteres para crear nombres minimalistas y elegantes que conservan su originalidad. Esta técnica es especialmente popular en partidas competitivas.
              </p>
              <div className="mb-4">
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">
                  Cómo usar caracteres invisibles en PUBG:
                </h5>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Genera caracteres invisibles con nuestra herramienta</li>
                  <li>Copia los caracteres invisibles al portapapeles</li>
                  <li>Abre PUBG y accede a tu perfil</li>
                  <li>Edita tu nombre y pega los caracteres invisibles</li>
                  <li>Confirma los cambios</li>
                </ol>
              </div>
              <div className="mb-4">
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">
                  Usos populares en PUBG:
                </h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Crea nombres con aspecto misterioso que parezcan más cortos de lo que son</li>
                  <li>Haz que el nombre de tu clan se destaque con espacios inusuales</li>
                  <li>Agrega espacios invisibles para centrar o alinear el texto a la derecha</li>
                  <li>Crea un perfil minimalista que aún se destaque</li>
                  <li>Haz que caracteres especiales parezcan flotar en tu nombre de usuario</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="dark:bg-white/5 p-4 rounded-lg">
            <h4 className="text-xl dark:text-yellow-100 font-semibold mb-3">
              Otros Juegos Populares
            </h4>
            <p className="mb-4">
              Los caracteres invisibles se han infiltrado en casi todas las comunidades de juegos en línea. Los jugadores los utilizan para mejorar su identidad digital y obtener una ventaja visual en la forma en que aparecen sus nombres. Desde MMORPGs hasta juegos de disparos en primera persona, estos caracteres especiales tienen diversos usos creativos:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div> 
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">
                  Minecraft
                </h5>
                <p className="mb-4">
                  Los administradores de servidores de Minecraft usan caracteres invisibles para crear nombres y descripciones de servidores que impactan visualmente. Los jugadores también los utilizan en letreros, libros y mensajes de chat para generar efectos de formateo únicos que realzan experiencias de roleplay y narrativa. Los espacios personalizados en los nombres de facciones se han convertido en un símbolo de estatus en servidores competitivos.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">
                  Call of Duty
                </h5>
                <p className="mb-4">
                  Los jugadores de CoD aprovechan los caracteres invisibles para crear nombres intimidatorios que destacan en los lobbies y en el marcador de muertes. Jugadores profesionales suelen usar estos caracteres para mantener su identidad de marca en torneos y plataformas de streaming. La ventaja táctica proviene de nombres distintivos que son difíciles de denunciar o recordar por los oponentes.
                </p>
              </div>
              <div>
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">
                  League of Legends
                </h5>
                <p className="mb-4">
                  Los jugadores de LoL han convertido la personalización de nombres en un arte utilizando caracteres invisibles. Los jugadores de alto nivel los utilizan para crear nombres minimalistas y profesionales que transmiten habilidad. Las etiquetas de clan con espacios personalizados ayudan a los equipos a establecer una identidad cohesiva que los fans reconocen al instante durante torneos y transmisiones en vivo.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Aplicaciones de Mensajería */}
        <div className="mb-12 bg-white dark:bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="text-yellow-300 h-8 w-8 flex-shrink-0" />
            <h3 className="text-2xl font-semibold dark:text-yellow-100">
              Aplicaciones de Mensajería y Redes Sociales
            </h3>
          </div>

          <p className="mb-4">
            Las plataformas de mensajería se han convertido en el centro de nuestra vida digital social. Los caracteres invisibles te permiten crear mensajes únicos que llaman la atención, mejoran la legibilidad y agregan personalidad a tu presencia en línea. Desde mensajes en blanco que generan suspenso hasta publicaciones con múltiples párrafos perfectamente formateados, estos caracteres realzan tu comunicación.
          </p>
          <p className="mb-6">
            Utilizar caracteres invisibles en tus mensajes permite una expresión creativa que va más allá de lo que las plataformas ofrecen normalmente. Puedes crear efectos visuales, mejorar el diseño del texto y hacer que tus mensajes se destaquen en medio de conversaciones comunes. Esta técnica sutil se ha popularizado entre influencers y creadores de contenido que buscan diferenciar su presencia en línea.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src="/whatapp_logo-icon.svg" className="text-yellow-300 h-5 w-5" />
                <h4 className="text-xl dark:text-yellow-100 font-semibold">
                  Formateo de Mensajes en WhatsApp
                </h4>
              </div>
              <p className="mb-4">
                Las opciones de formateo limitadas de WhatsApp llevan a muchos usuarios a buscar soluciones creativas. Los caracteres invisibles llenan ese vacío al permitir espacios personalizados, saltos de párrafo e incluso mensajes completamente en blanco que generan suspenso. Los usuarios empresariales se benefician especialmente del mejor formateo de mensajes para comunicaciones profesionales.
              </p>
              <p className="mb-4">
                Para usar caracteres invisibles en WhatsApp, simplemente genera los caracteres con nuestra herramienta, cópialos al portapapeles y pégalos en el editor de mensajes donde lo necesites. Estos caracteres permanecen invisibles pero crean el efecto de espacio deseado.
              </p>

              <div className="mb-4">
                <h5 className="text-lg font-medium dark:text-yellow-100 mb-2">
                  Usos creativos en WhatsApp:
                </h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Envía un mensaje vacío para captar la atención o generar suspenso</li>
                  <li>Agrega espacios personalizados entre párrafos en mensajes largos</li>
                  <li>Haz que tu estado se vea minimalista o vacío</li>
                  <li>Crea diseños artísticos que mejoren la legibilidad</li>
                  <li>Formatea comunicaciones empresariales con un espaciado profesional</li>
                </ul>
              </div>

              <div className="flex justify-center mb-6">
                <Image
                  src="/send-invisible-messages-on-whatsapp.avif?height=300&width=200"
                  alt="Ejemplo de mensaje en WhatsApp"
                  width={200}
                  height={300}
                  className="bg-[#efefef] dark:bg-white/5 py-2 shadow-white/50 shadow-md rounded-2xl border border-black/10 dark:border-white/10 opacity-80 dark:opacity-60"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Twitter className="text-blue-400 h-5 w-5" />
                <h4 className="text-xl dark:text-yellow-100 font-semibold">
                  Consejos de Uso para Twitter/X
                </h4>
              </div>
              <p className="mb-4">
                Las limitaciones de caracteres en Twitter hacen que cada espacio sea valioso. Los caracteres invisibles permiten crear tweets en blanco que destacan en feeds saturados, agregar espacios personalizados entre párrafos y formatear hilos para mejorar la legibilidad. Muchos tweets virales utilizan estas técnicas para maximizar el impacto y el compromiso.
              </p>

              <div className="mb-4">
                <h5 className="text-lg font-medium text-yellow-100 mb-2">
                  Usos creativos en Twitter:
                </h5>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Crea tweets en blanco que llamen la atención en feeds concurridos</li>
                  <li>Agrega espacios personalizados entre párrafos para mejorar la legibilidad</li>
                  <li>Personaliza tu nombre de usuario con formato de caracteres invisibles</li>
                  <li>Crea perfiles minimalistas con espaciados estratégicos</li>
                  <li>Formatea publicaciones en hilos de manera consistente para una mejor narrativa</li>
                </ul>
              </div>

              <div className="flex justify-center mb-6">
                <Image
                  src="/send-invisible-message-on-twitter.avif?height=300&width=200"
                  alt="Ejemplo de tweet en blanco"
                  width={200}
                  height={300}
                  className="bg-[#efefef] dark:bg-white/5 py-2 shadow-white/50 shadow-md rounded-2xl border border-black/10 opacity-80 dark:opacity-40"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-xl dark:text-yellow-200 font-semibold mb-3">
              Otras Aplicaciones de Mensajería
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="dark:bg-white/5 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/slack_logo.webp" alt="Logo de Slack" className="h-5 w-5" />
                  <h5 className="text-lg font-semibold dark:text-yellow-100">Slack</h5>
                </div>
                <p className="">
                  Los profesionales usan caracteres invisibles en Slack para mejorar la organización y legibilidad de los mensajes. Los espacios personalizados entre secciones ayudan a destacar información importante, mientras que los caracteres invisibles en los nombres de canal crean un ambiente de trabajo más limpio. Gerentes de producto y líderes de equipo usan estas técnicas para lograr una jerarquía informativa más clara en actualizaciones de proyectos.
                </p>
              </div>

              <div className="dark:bg-white/5 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/instagram_logo_icon.svg" alt="Logo de Instagram" className="h-5 w-5" />
                  <h5 className="text-lg font-semibold dark:text-yellow-100">Instagram</h5>
                </div>
                <p className="">
                  Los influencers de Instagram dependen de los caracteres invisibles para crear leyendas perfectamente formateadas con saltos de línea claros. Las opciones limitadas de formato de la plataforma hacen que estos caracteres sean esenciales para crear contenido con apariencia profesional. Muchas cuentas populares utilizan caracteres invisibles para separar párrafos y asegurar que los hashtags se distingan del resto del texto.
                </p>
              </div>

              <div className="dark:bg-white/5 p-3 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <img src="/facebook_icon.svg" alt="Logo de Facebook" className="h-5 w-5" />
                  <h5 className="text-lg font-semibold dark:text-yellow-100">Facebook</h5>
                </div>
                <p className="">
                  Los usuarios de Facebook crean publicaciones llamativas utilizando caracteres invisibles, ya sea publicando estados completamente en blanco o mejorando el diseño de publicaciones más extensas. Las páginas empresariales se benefician de esta técnica para crear anuncios y promociones con apariencia profesional. El espaciado mejorado ayuda a que la información clave se destaque, incrementando el compromiso con el contenido de marketing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Otras Aplicaciones */}
        <div className="mb-12 bg-white dark:bg-white/5 border dark:border-white/10 rounded-lg p-6">
          <h3 className="text-2xl font-semibold dark:text-yellow-100 mb-6">
            Otros Casos de Uso Creativos
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-white/5 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="text-black dark:text-yellow-300 h-5 w-5" />
                <h4 className="text-xl dark:text-yellow-100 font-semibold">
                  Documentos y Formularios
                </h4>
              </div>
              <p className="mb-4">
                Los documentos digitales a menudo tienen requisitos estrictos de formato. Los caracteres invisibles ofrecen soluciones creativas para desafíos de formato, ayudando a cumplir con los requisitos de conteo de caracteres, crear espacios personalizados en PDFs y mejorar el diseño visual de documentos importantes. Muchos profesionales utilizan estos caracteres para optimizar formularios y aplicaciones.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Crea espacios personalizados precisos en documentos digitales</li>
                <li>Elude los requisitos mínimos de caracteres en aplicaciones</li>
                <li>Crea marcadores invisibles en PDFs para facilitar la navegación</li>
                <li>Formatea el texto de manera creativa que los editores estándar no soportan</li>
                <li>Agrega separadores invisibles entre secciones del documento</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-white/5 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <Code className="text-black dark:text-yellow-300 h-5 w-5" />
                <h4 className="text-xl dark:text-yellow-100 font-semibold">
                  Programación y Desarrollo
                </h4>
              </div>
              <p className="mb-4">
                Los desarrolladores de software utilizan caracteres invisibles para fines técnicos específicos, como pruebas de aplicaciones, verificación del manejo de cadenas y formateo personalizado de código. Estos caracteres ayudan a identificar posibles vulnerabilidades de seguridad y aseguran un correcto soporte Unicode. Los equipos de QA también los emplean para probar cómo las aplicaciones manejan entradas inesperadas.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Prueba el manejo de cadenas en aplicaciones para fines de seguridad</li>
                <li>Crea alineaciones específicas en comentarios y documentación de código</li>
                <li>Verifica el soporte de Unicode y características de internacionalización</li>
                <li>Formatea comentarios de código para mejorar la legibilidad</li>
                <li>Crea código ofuscado para fines educativos o de pruebas de seguridad</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-white/5 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <PenTool className="dark:text-yellow-300 h-5 w-5" />
                <h4 className="text-xl dark:text-yellow-100 font-semibold">
                  Diseño Creativo
                </h4>
              </div>
              <p className="mb-4">
                Los diseñadores gráficos y artistas digitales utilizan caracteres invisibles para superar limitaciones de diseño en diversas plataformas. Estos caracteres permiten diseños tipográficos únicos, formateos creativos y efectos visuales que de otra manera serían imposibles. Muchos diseños premiados incorporan caracteres invisibles para lograr resultados estéticos distintivos.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Crea diseños artísticos con posicionamiento preciso</li>
                <li>Desarrolla tipografías minimalistas con espacios únicos</li>
                <li>Alcanza alineaciones de texto inusuales en aplicaciones de diseño</li>
                <li>Formatea el texto de forma innovadora para superar las limitaciones de la plataforma</li>
                <li>Crea un ritmo visual en diseños cargados de texto</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Aplicaciones Profesionales */}
        <div className="bg-white dark:bg-white/5 border dark:border-white/10 rounded-lg p-6">
          <h3 className="text-2xl font-semibold dark:text-yellow-100 mb-6">
            Aplicaciones Profesionales
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Linkedin fontVariant="filled" className="text-[#0035b1] dark:text-yellow-300 h-5 w-5" />
                <h4 className="text-xl dark:text-yellow-100 font-semibold">
                  Optimización del Perfil en LinkedIn
                </h4>
              </div>
              <p className="mb-4">
                Los profesionales utilizan caracteres invisibles para mejorar sus perfiles en LinkedIn, creando un formato más limpio que ayuda a destacar logros importantes. Los reclutadores notan los perfiles con una mejor organización visual, y muchos profesionales de alto rendimiento usan estos caracteres para formatear sus secciones de experiencia y recomendaciones con el máximo impacto.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Formatea tu biografía profesional con saltos de línea limpios</li>
                <li>Crea publicaciones visualmente atractivas que se destaquen en el feed</li>
                <li>Agrega espacios estratégicos para resaltar logros importantes</li>
                <li>Crea perfiles minimalistas y elegantes que transmitan profesionalismo</li>
                <li>Formatea las secciones de recomendaciones para mejorar la legibilidad</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <Mail className="text-red-600 h-5 w-5" />
                <h4 className="text-xl dark:text-yellow-100 font-semibold">
                  Email Marketing y Comunicación
                </h4>
              </div>
              <p className="mb-4">
                Los especialistas en email marketing y negocios utilizan caracteres invisibles para crear formatos sofisticados que mejoran las tasas de interacción. Estos caracteres ayudan a generar espacios profesionales en las firmas de correo electrónico, formatear boletines informativos de manera efectiva y resaltar información clave en comunicaciones empresariales sin depender de HTML que podría no mostrarse correctamente.
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Crea espacios profesionales en las firmas de correo electrónico</li>
                <li>Formatea boletines con espacios precisos entre secciones</li>
                <li>Desarrolla plantillas de email minimalistas con una apariencia moderna</li>
                <li>Agrega espacios sutiles para resaltar puntos importantes</li>
                <li>Asegura un formato consistente entre diferentes clientes de correo y dispositivos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
