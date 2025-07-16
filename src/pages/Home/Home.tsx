// src/pages/Home/Home.tsx
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import "./Home.css";

const Home = () => {
  const slider1Images = Array.from({ length: 10 }, (_, i) => `/assets/Slider/Slider1/slider1_${i + 1}.svg`);
  const slider2Images = Array.from({ length: 9 }, (_, i) => `/assets/Slider/Slider2/slider2_${i + 1}.svg`);
  
  return (
    <>
      <Header />
      <Banner />

      <div>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
        <h1>Hello World</h1>
      </div>

      <main style={{ width: "min(1200px, 90vw)", margin: "auto" }}>
        <Slider width="100px" height="50px" quantity={10} images={slider1Images} />
        <br />
        <Slider width="100px" height="50px" quantity={9} images={slider2Images} reverse />
      </main>

    </>
  );
};

export default Home;
