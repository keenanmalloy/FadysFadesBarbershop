import Image from "next/image";

export const Review = ({ src, rating, text, name }) => {
  console.log(src, rating, text, name);
  return (
    <div className="shadow-lg p-8 rounded-lg mx-6 md:mx-0 text-[#959DCC] leading-relaxed">
      <div className="flex justify-center mb-6">
        <Image
          loader={() => src}
          width={70}
          height={70}
          alt={name}
          src={src}
          className="rounded-full shadow-lg w-32"
        />
      </div>
      <h5 className="text-xl font-semibold mb-4">{name}</h5>
      <p className="mb-4">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="quote-left"
          className="w-6 pr-2 inline-block"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
          />
        </svg>
        {text}
      </p>
      <ul className="flex justify-center mb-0">
        {Array.from({ length: rating }).map((_, i) => (
          <li key={`${name}-star-${i.toString()}`}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              className="w-4 text-yellow-500"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47. 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
};
