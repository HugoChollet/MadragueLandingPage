import Description from "./components/Description/Description";
import Gallery from "./components/Gallery/Gallery";

const image = "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
const image2 = "https://lecaninole.fr/wp-content/uploads/2021/01/tiny-house-1200x900.jpg";
const image3 = "https://upload.wikimedia.org/wikipedia/commons/0/0c/Tiny_house%2C_Portland.jpg"

export default function Home() {
  return (
    <main >
      <Gallery images={[image, image2, image3]}/>
      <Description
  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  image={image}
  direction="right"
/>
<Description
  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2"
  image={image2}
  direction="left"
/>
    </main>
  )
}
