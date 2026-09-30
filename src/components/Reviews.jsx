import { reviewText } from "../constants/reviewText";
import useReducedMotion from "../hooks/useReducedMotion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import adkins_review from "../assets/projects/reviews/adkins_review.png";
import amy_review from "../assets/projects/reviews/amy_review.png";
import justinr_eview from "../assets/projects/reviews/justinr_review.png";
import karthik_review from "../assets/projects/reviews/karthik_review.png";
import lindsay_review from "../assets/projects/reviews/lindsay_review.png";
import lorraine_review from "../assets/projects/reviews/lorraine_review.png";
import marilyn_review from "../assets/projects/reviews/marilyn_review.png";
import michael_review from "../assets/projects/reviews/michael_review.png";
import robin_review from "../assets/projects/reviews/robin_review.png";
import sarah_review from "../assets/projects/reviews/sarah_review.png";
import spence_review from "../assets/projects/reviews/spence_review.png";

// Settings for the react-slick carousel
const settings = {
  className: "center",
  centerMode: true,
  centerPadding: "0px",
  infinite: true,
  speed: 2000,
  slidesToShow: 4,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        centerPadding: "0px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "10px",
      },
    },
  ],
};

const images = [
  { src: amy_review, alt: "Amy Review" },
  { src: justinr_eview, alt: "Justin G Review" },
  { src: karthik_review, alt: "Karthik Review" },
  { src: lindsay_review, alt: "Lindsay Review" },
  { src: lorraine_review, alt: "Lorraine Review" },
  { src: marilyn_review, alt: "Marilyn Review" },
  { src: michael_review, alt: "Michael Review" },
  { src: robin_review, alt: "Robin Review" },
  { src: adkins_review, alt: "Adkins Review" },
  { src: sarah_review, alt: "Sarah Review" },
  { src: spence_review, alt: "Spence Review" },
];

const Reviews = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative overflow-hidden mt-8 text-4xl tracking-wide text-center border-t-1 border-blue-600 sm:text-5xl lg:text-6xl bg-gradient-to-b from-blue-50 to-transparent">
        <div className="relative ">
          {/* <h2 className="mt-8 text-5xl tracking-wide text-center lg:text-6xl text-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text">
          REVIEWS
        </h2> */}

          <Slider {...settings} autoplay={!reducedMotion} speed={reducedMotion ? 0 : settings.speed} className="mx-auto ">
            {images.map((image, index) => (
              <div key={index} className="focus:outline-none px-1">
                <a
                  href="https://www.google.com/search?q=meter+electric+llc&sca_esv=05c894fd792d1e12&source=hp&ei=zjBPaMHWEbyAm9cPzvvU2Qw&iflsig=AOw8s4IAAAAAaE8-3loUOjTJwIJr9IOvhEt9VMuFltXN&ved=0ahUKEwjB9d7TpfSNAxU8wOYEHc49NcsQ4dUDCCE&uact=5&oq=meter+electric+llc&gs_lp=Egdnd3Mtd2l6IhJtZXRlciBlbGVjdHJpYyBsbGMyBhAAGBYYHjICECYyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTIIEAAYgAQYogQyCBAAGIAEGKIEMggQABiABBiiBEjmFFAAWABwAXgAkAEAmAFOoAFOqgEBMbgBA8gBAPgBAvgBAZgCAqACVJgDAJIHATKgB7wGsgcBMbgHU8IHBTAuMS4xyAcE&sclient=gws-wiz&sei=0TBPaOXfLcuc0PEP3fH66AY#lrd=0x2bcc8ea2f59d233:0x32b08f37e9e406a5,1,,,,"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-contain w-full h-44"
                  />
                </a>
              </div>
            ))}
          </Slider>
          <style jsx>{`
            .gallery-slider :global(.slick-slide:not(.slick-center)) {
              opacity: 0.5;
              transition: opacity 0.3s ease;
            }

            .gallery-slider :global(.slick-slide) {
              transition: all 0.3s ease;
            }

            /* Hide default slick arrows */
            .gallery-slider :global(.slick-prev),
            .gallery-slider :global(.slick-next) {
              display: none !important;
            }

            /* Only show our custom arrows */
            .gallery-slider :global(.custom-arrow) {
              display: flex !important;
            }

            /* Hover effect for arrows - more white */
            .gallery-slider :global(.custom-arrow:hover) {
              background-color: #4f85f0 !important;
            }
          `}</style>
        </div>
      <section className="sr-only" aria-label="Customer review transcripts">
        <ul>
          {reviewText.map((text, index) => <li key={index}>{text}</li>)}
        </ul>
      </section>

    </div>
  );
};

export default Reviews;
