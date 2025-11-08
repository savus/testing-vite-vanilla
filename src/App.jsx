import { Header } from "./components/Header";
import { CountSection } from "./components/CountSection";
import { Carousel } from "./components/Carousel";

import { ControlledForm } from "./components/ControlledForm";
import { ClassControlledForm } from "./components/ClassControlledForm";
import { InputForm } from "./components/InputForm";
import "/src/css/app.css";
import "/src/js/index.jsx";

function App() {
  return (
    <>
      {/* <Header></Header>
      <CountSection></CountSection>
      <Carousel></Carousel> */}
      {/* <ClassControlledForm /> */}
      <Header />
      <InputForm />
    </>
  );
}

export default App;
