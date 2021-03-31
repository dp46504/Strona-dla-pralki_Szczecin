import { BurgerIconContainer, LineBurger, colors } from "../Styles";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function BurgerMenuIcon(props) {
  let burgerOpen = false;

  const fLine = useRef(null);
  const sLine = useRef(null);
  const tLine = useRef(null);

  useEffect(() => {
    const line1 = fLine.current;
    const line3 = tLine.current;
    gsap.set(line1, {
      transform: "translateY(-15px)",
    });
    gsap.set(line3, {
      transform: "translateY(15px)",
    });
  });

  const openCloseBurger = () => {
    props.click();
    const line1 = fLine.current;
    const line2 = sLine.current;
    const line3 = tLine.current;
    if (burgerOpen) {
      burgerOpen = !burgerOpen;
      gsap.to(line2, {
        opacity: 1,
        transform: "translateX(0)",
        duration: 0.5,
      });
      gsap.to(line1, {
        transform: "rotate(0deg) translateY(-15px)",
        backgroundColor: colors.black,
        duration: 0.5,
      });
      gsap.to(line3, {
        transform: "rotate(0deg) translateY(15px)",
        backgroundColor: colors.black,
        duration: 0.5,
      });
    } else {
      burgerOpen = !burgerOpen;
      gsap.to(line2, {
        opacity: 0,
        transform: "translateX(-20vw)",
        duration: 0.5,
      });
      gsap.to(line1, {
        transform: "rotate(-45deg)",
        backgroundColor: colors.lightGray,
        duration: 0.5,
      });
      gsap.to(line3, {
        transform: "rotate(45deg)",
        backgroundColor: colors.lightGray,
        duration: 0.5,
      });
    }
  };

  return (
    <BurgerIconContainer onClick={openCloseBurger}>
      <LineBurger ref={fLine}></LineBurger>
      <LineBurger ref={sLine}></LineBurger>
      <LineBurger ref={tLine}></LineBurger>
    </BurgerIconContainer>
  );
}
export default BurgerMenuIcon;
