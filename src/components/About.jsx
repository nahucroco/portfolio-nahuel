export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <span className="text-blue-400 text-sm tracking-widest">
        01 / SOBRE MÍ
      </span>

      <h2 className="mt-6 text-4xl md:text-6xl font-bold max-w-3xl">
        Construyendo sistemas que
        <span className="text-blue-500">
          {" "}resuelven problemas reales
        </span>
      </h2>

      <p className="mt-8 text-zinc-400 max-w-3xl leading-relaxed">
        Soy estudiante de Ingeniería en Sistemas y me
        interesa desarrollar productos digitales que
        combinen software, automatización e inteligencia
        artificial para resolver problemas concretos.
      </p>

      <p className="mt-4 text-zinc-400 max-w-3xl leading-relaxed">
        Actualmente trabajo principalmente con Python,
        Django, React y PostgreSQL, construyendo
        aplicaciones web, sistemas de gestión y
        herramientas orientadas a datos.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-16">

        <div className="border border-zinc-800 rounded-2xl p-6">
          <div className="text-3xl mb-4">⚽</div>

          <h3 className="font-semibold text-xl">
            Ticas
          </h3>

          <p className="text-zinc-400 mt-2">
            Plataforma para fútbol amateur enfocada
            en estadísticas, torneos y comunidad.
          </p>
        </div>

        <div className="border border-zinc-800 rounded-2xl p-6">
          <div className="text-3xl mb-4">🤖</div>

          <h3 className="font-semibold text-xl">
            Inteligencia Artificial
          </h3>

          <p className="text-zinc-400 mt-2">
            Automatización de procesos y asistentes
            inteligentes integrados a aplicaciones.
          </p>
        </div>

        <div className="border border-zinc-800 rounded-2xl p-6">
          <div className="text-3xl mb-4">⚙️</div>

          <h3 className="font-semibold text-xl">
            Sistemas Web
          </h3>

          <p className="text-zinc-400 mt-2">
            Desarrollo de plataformas escalables con
            Django, React y bases de datos relacionales.
          </p>
        </div>

      </div>
    </section>
  );
}