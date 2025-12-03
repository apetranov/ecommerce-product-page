import useScreenWidth from "./useScreenWidth";

type ImageWithArrowsProps = {
  image: string;
  thumb: number;
  setThumb: (value: number) => void;
  maxThumb: number; // total number of images
};

export default function ImageWithArrows({
  image,
  thumb,
  setThumb,
  maxThumb
}: ImageWithArrowsProps) {
  return (
    <div className="relative w-fit">
      <img src={image} alt="Example" className="block" />

      {/* LEFT ARROW */}
      <button
        onClick={() => setThumb(thumb === 1 ? maxThumb : thumb - 1)}
        className="
          absolute top-1/2 left-2 
          -translate-y-1/2 
          bg-black/50 text-white 
          p-3 rounded-full 
          hover:bg-black/70 transition
        "
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => setThumb(thumb === maxThumb ? 1 : thumb + 1)}
        className="
          absolute top-1/2 right-2 
          -translate-y-1/2
          bg-black/50 text-white 
          p-3 rounded-full
          hover:bg-black/70 transition
        "
      >
        ›
      </button>
    </div>
  );
}
