import { ListItem } from "../Styles";

function Models() {
  const models = [
    "AEG",
    "AMICA",
    "ARDO",
    "ARISTON",
    "BAUKNECHT",
    "BEKO",
    "BRANDT",
    "BOSCH",
    "CANDY",
    "DAEWOO",
    "ELECTROLUX",
    "EUDORA",
    "GENERAL ELECTRIC",
    "GORENJE",
    "IGNIS",
    "INDESIT",
    "MASTERCOOK",
    "MIELE",
    "POLAR",
    "TAMAT",
    "THOMSON",
    "WIATKA",
    "WHIRPOOL",
    "ZANUSSI",
  ];

  const list = models.map((item) => {
    return <ListItem>{item}</ListItem>;
  });
  return <div>{list}</div>;
}
export default Models;
