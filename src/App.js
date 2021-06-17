import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import Components
import Contact from "./Components/Contact";
import Home from "./Components/Home";
// import Models from "./Components/Models";
import MenuBar from "./Components/MenuBar";
// Import Styles
import { GlobalStyle, Title } from "./Styles";
import { LogoBar } from "./Styles";
import { useEffect, useState } from "react";
// Import Icons/Pictures
import machine1 from "./Pictures/machine1.svg";

function App() {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [barVisible, setBarVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 10) {
      setBarVisible(true);
    } else {
      setBarVisible(false);
    }
  }, [scrollY]);

  return (
    <div>
      <GlobalStyle />
      <Router>
        {barVisible ? (
          <LogoBar>
            <img src={machine1} alt="icon"></img>
            <Title style={{ color: "#FFFAF0" }}>Naprawa pralek</Title>
          </LogoBar>
        ) : null}
        <MenuBar />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/models" component={Models} /> */}
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
