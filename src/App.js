import Seed from "./components/Seed";
import { Container } from "./components/Seed.styles";
import backgroundImage from "./img/greeting_layout.png";

const App = () => {
// Define the browser width and height on load
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;
// Make envelope width 2/3 of the height of the window
  let envelopWidth = windowHeight / 1.5;
// If the envelope width(+60px) is bigger or equal to window width
  if((envelopWidth + 60) >= windowWidth){
// Then make the envelope width, the size of the window (-60px) for mobile format
    envelopWidth = windowWidth - 60;
  }
// Make the ratio by height / width (svg viewbox)
  let envelop2Ratio = (400 / 883);
  let envelop1Ratio = (553 / 883);
// cross-multiplication rule (if height / width = ratio THEN height = ratio * width)
  let envelop2Height = envelopWidth * envelop2Ratio;
  let envelop1Height = envelopWidth * envelop1Ratio;

  return (
    <Container
      width={windowWidth}
      height={windowHeight}
      backgroundImage={backgroundImage}
    >
      <Seed 
        width={windowWidth} 
        height={windowHeight}
        envelopWidth={envelopWidth}
        envelop2Height={envelop2Height}
        envelop1Height={envelop1Height}
// RGBA with opacity 1 and opacity 0 to make blue backgound fadeout and background image fade in      
        wrapperBackground={'rgba(227, 249, 255,1)'}
        wrapperBackgroundHide={'rgba(227, 249, 255,0)'}
      />
    </Container>
  );
}

export default App;
