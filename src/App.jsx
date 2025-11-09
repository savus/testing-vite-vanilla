import { Header } from "./components/Header";
import { CountSection } from "./components/CountSection";
import { Carousel } from "./components/Carousel";

import { ControlledForm } from "./components/ControlledForm";
import { ClassControlledForm } from "./components/ClassControlledForm";
import { InputForm } from "./components/InputForm";
import "/src/css/app.css";
// import "/src/js/index.jsx";
import { useState } from "react";
import { UserInfo } from "./components/UserInfo";

function App() {
  const [userInformation, setUserInformation] = useState(null);

  return (
    <>
      {/* <Header></Header>
      <CountSection></CountSection>
      <Carousel></Carousel> */}
      <UserInfo userInformation={userInformation} />
      <ClassControlledForm
        handleUserInformation={(userInformation) => {
          setUserInformation(userInformation);
        }}
      />
      {/* <Header /> */}
      {/* <InputForm /> */}
    </>
  );
}

export default App;
