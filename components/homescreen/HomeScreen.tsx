import Herosection from "../herosection/Herosection";
import OurFeature from "./OurFeatures";
import OutProcess from "./OurProcess";

export default function HomeScreen() {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <Herosection />
      <OurFeature />
      <OutProcess />
    </div>
  )
}
