export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center">
            <div
                className="
    absolute
    top-40
    left-20
    w-96
    h-96
    bg-blue-500/20
    blur-3xl
    rounded-full
    -z-10
  "
            />
            <div className="max-w-7xl mx-auto px-6 w-full">

                <div className="max-w-4xl">

                    <span className="inline-block px-4 py-2 border border-blue-500/30 rounded-lg text-blue-400 text-sm mb-8">
                        Disponible para oportunidades
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                        Hola, soy
                        <br />
                        <span className="text-blue-500">
                            Nahuel Crocombette
                        </span>
                    </h1>

                    <h2 className="text-xl md:text-2xl text-zinc-300 mt-6">
                        Desarrollador Full Stack - Estudiante de Ingeniería en Sistemas de Información
                    </h2>

                    <p className="mt-8 text-zinc-400 text-lg max-w-2xl leading-relaxed">
                        Construyo aplicaciones web y productos digitales utilizando
                        diversas tecnologías y lenguajes de programación.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-10">

                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
                        >
                            Ver proyectos
                        </a>

                        <a
                            href="https://github.com/nahucroco"
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 transition"
                        >
                            GitHub
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
}