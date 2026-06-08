export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <span className="text-blue-400 text-sm tracking-widest">
        04 / CONTACTO
      </span>

      <h2 className="mt-6 text-4xl md:text-6xl font-bold">
        ¿Trabajamos
        <span className="text-blue-500">
          {" "}juntos?
        </span>
      </h2>

      <p className="mt-6 text-zinc-400 max-w-2xl">
        Actualmente estoy abierto a nuevas
        oportunidades, colaboraciones y proyectos.
      </p>

      <a
        href="mailto:crocombettenahuel@gmail.com"
        className="
          inline-flex
          mt-10
          px-8
          py-4
          rounded-xl
          bg-blue-600
          hover:bg-blue-500
          transition
        "
      >
        Enviar Email
      </a>

      <div className="flex flex-wrap gap-8 mt-12">

        <a
          href="https://github.com/nahucroco"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-400 hover:text-white"
        >
          GitHub →
        </a>

        <a
          href="https://www.linkedin.com/in/nahuel-crocombette-33907b242/"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-400 hover:text-white"
        >
          LinkedIn →
        </a>

        <a
          href="/cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="text-zinc-400 hover:text-white"
        >
          CV →
        </a>

      </div>
    </section>
  );
}