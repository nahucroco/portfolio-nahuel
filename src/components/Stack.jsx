export default function Stack() {
  const categories = [
    {
      title: "Frontend",
      items: [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind"
      ]
    },
    {
      title: "Backend",
      items: [
        "Python",
        "Django",
        "Django REST Framework"
      ]
    },
    {
      title: "Base de Datos",
      items: [
        "PostgreSQL",
        "SQLite"
      ]
    },
    {
      title: "IA y Datos",
      items: [
        "OpenAI",
        "Gemini",
        "Pandas"
      ]
    },
    {
      title: "Herramientas",
      items: [
        "Git",
        "GitHub",
        "Docker"
      ]
    }
  ];

  return (
    <section
      id="stack"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <span className="text-blue-400 text-sm tracking-widest">
        02 / STACK
      </span>

      <h2 className="mt-6 text-4xl md:text-6xl font-bold">
        Tecnologías con las que
        <span className="text-blue-500">
          {" "}trabajo
        </span>
      </h2>

      <p className="mt-6 text-zinc-400 max-w-2xl">
        Herramientas que utilizo para desarrollar
        aplicaciones web, automatizaciones y productos
        digitales.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-16">

        {categories.map((category) => (
          <div
            key={category.title}
            className="border border-zinc-800 rounded-2xl p-6"
          >
            <h3 className="text-xl font-semibold mb-6">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="
                    px-4
                    py-2
                    rounded-lg
                    bg-zinc-900
                    border
                    border-zinc-800
                    text-zinc-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}