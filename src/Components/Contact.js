import { useState } from "react";
import { Title, Content, Container, Button, Input } from "../Styles";
function Contact() {
  const [imieNazwisko, setImieNazwisko] = useState("");
  const [tresc, setTresc] = useState("");

  const onChangeName = (e) => {
    setImieNazwisko(e.target.value);
  };

  const onChangeTresc = (e) => {
    setTresc(e.target.value);
  };
  return (
    <Container>
      <Title>Pralki Szczecin - kontakt</Title>
      <Content>
        e-mail:{" "}
        <a style={{ textDecoration: "none" }} href="mailto:meteor.pb@onet.pl">
          meteor.pb@onet.pl
        </a>
      </Content>
      <Content>
        tel:
        <a href="tel:603999764"> 603 999 764</a>
      </Content>
      <Title>Formularz kontaktowy</Title>
      <Content>
        Jeśli masz jakieś pytania - zapraszam do wypełnienia formularza
      </Content>
      <Input
        type="text"
        name="imieINazwisko"
        placeholder="Imie i nazwisko"
        onChange={onChangeName}
      />
      <Input
        type="text"
        name="Tresc"
        placeholder="Tresc zapytania"
        onChange={onChangeTresc}
      />
      <Button
        href={`mailto:meteor.pb@onet.pl?subject=Naprawa pytanie (${imieNazwisko})&body=${encodeURI(
          tresc
        )}`}
      >
        Wyślij
      </Button>
    </Container>
  );
}
export default Contact;
