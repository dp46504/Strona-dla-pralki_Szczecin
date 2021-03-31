import { useState, useEffect, useRef } from "react";
import { MenuItem, MenuBarBox, colors } from "../Styles";
import BurgerMenuIcon from "../cssIcons/BurgerMenuIcon";
import gsap from "gsap";

function MenuBar(props) {
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const menuBarBox = useRef(null);
  let isMenuVisible = window.innerWidth <= 426 ? false : true;

  useEffect(() => {
    async function handleResize() {
      setWinWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const showHideMenu = () => {
    const menu = menuBarBox.current;
    if (isMenuVisible) {
      isMenuVisible = !isMenuVisible;
      gsap.to(menu, {
        left: "-100vw",
        duration: 0.3,
      });
    } else {
      isMenuVisible = !isMenuVisible;
      gsap.to(menu, {
        left: "-20vw",
        duration: 0.3,
      });
    }
  };

  const activeCSS =
    window.innerWidth <= 426
      ? {
          background: `linear-gradient(to top, ${colors.blue}, transparent)`,
          mixBlendMode: "luminosity",
        }
      : {
          borderStyle: "dashed",
        };

  return (
    <div>
      <BurgerMenuIcon click={showHideMenu} />
      <MenuBarBox ref={menuBarBox}>
        <MenuItem activeStyle={activeCSS} exact to="/">
          Główna
        </MenuItem>
        <MenuItem activeStyle={activeCSS} to="/models">
          Modele
        </MenuItem>
        <MenuItem activeStyle={activeCSS} to="/contact">
          Kontakt
        </MenuItem>
      </MenuBarBox>
    </div>
  );
}
export default MenuBar;
