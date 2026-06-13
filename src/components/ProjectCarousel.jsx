import { useState } from "react";

export default function ProjectCarousel({
  images,
  type = "desktop",
}) {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + images.length) %
        images.length
    );
  };

  return (
    <div className="relative mb-6 group">

      {type === "mobile" ? (
        <div className="flex justify-center">
          <div
            className="
              w-[220px]
              h-[450px]
              rounded-[32px]
              overflow-hidden
              border
              border-zinc-800
              bg-zinc-950
            "
          >
            <img
              src={images[current]}
              alt="Proyecto"
              className="
                w-full
                h-full
                object-cover
              "
            />
          </div>
        </div>
      ) : (
        <img
          src={images[current]}
          alt="Proyecto"
          className="
            w-full
            h-80
            object-contain
            rounded-xl
            bg-zinc-950
          "
        />
      )}

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              bg-black/60
              text-white
              px-3
              py-2
              rounded-lg
              opacity-0
              group-hover:opacity-100
              transition
            "
          >
            ←
          </button>

          <button
            onClick={nextImage}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              bg-black/60
              text-white
              px-3
              py-2
              rounded-lg
              opacity-0
              group-hover:opacity-100
              transition
            "
          >
            →
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`
                h-2 rounded-full transition-all
                ${
                  current === index
                    ? "w-6 bg-blue-500"
                    : "w-2 bg-zinc-600"
                }
              `}
            />
          ))}
        </div>
      )}

    </div>
  );
}