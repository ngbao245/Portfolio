import "./Slider.css";

interface SliderProps {
  width: string;
  height: string;
  quantity: number;
  images: string[];
  reverse?: boolean;
}

const Slider = ({ width, height, quantity, images, reverse = false }: SliderProps) => {
  return (
    <div
      className="slider"
      style={{
        ['--width' as any]: width,
        ['--height' as any]: height,
        ['--quantity' as any]: quantity,
      }}
      {...(reverse && { reverse: "true" })}
    >
      <div className="list">
        {images.map((img, index) => (
          <div className="item" style={{ ['--position' as any]: index + 1 }} key={index}>
            <img src={img} alt={`slider-img-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
