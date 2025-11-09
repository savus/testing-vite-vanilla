import { Header } from "./components/Header";
import { CountSection } from "./components/CountSection";
import { Carousel } from "./components/Carousel";

import { ControlledForm } from "./components/ControlledForm";
import { ClassControlledForm } from "./components/ClassControlledForm";
import { InputForm } from "./components/InputForm";
import "/src/css/app.css";
import "/src/js/index.jsx";
import { useState } from "react";
import { UserInfo } from "./components/UserInfo";
import { InputFormReact } from "./components/InputFormReact";

function App() {
  const [userInformation, setUserInformation] = useState(null);
  const [activeNavLink, setActiveNavLink] = useState("none");
  const [activeModal, setActiveModal] = useState("none");

  return (
    <>
      {/* <Header></Header>
      <CountSection></CountSection>
      <Carousel></Carousel> */}
      {/* <UserInfo userInformation={userInformation} /> */}
      {/* <ClassControlledForm
        handleUserInformation={(userInformation) => {
          setUserInformation(userInformation);
        }}
      /> */}
      <Header
        activeNavLink={activeNavLink}
        setActiveNavLink={(navLink) => {
          setActiveNavLink(navLink);
        }}
        setActiveModal={(modal) => {
          setActiveModal(modal);
        }}
      />
      <InputForm />
      <InputFormReact
        activeModal={activeModal}
        setActiveModal={(modal) => {
          setActiveModal(modal);
        }}
      />
    </>
  );
}

export default App;
