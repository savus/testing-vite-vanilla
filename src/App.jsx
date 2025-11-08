import { Header } from "./components/Header";
import { CountSection } from "./components/CountSection";
import { Carousel } from "./components/Carousel";

import "/src/css/app.css";
import { ControlledForm } from "./components/ControlledForm";
import { ClassControlledForm } from "./components/ClassControlledForm";

function App() {
  return (
    <>
      {/* <Header></Header>
      <CountSection></CountSection>
      <Carousel></Carousel> */}
      <ClassControlledForm />
    </>
  );
}

export default App;
