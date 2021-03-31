import { useState } from "react";
import { Title, Content, Container, Button, Input, colors } from "../Styles";
function Contact() {
  const [imieNazwisko, setImieNazwisko] = useState("");
  const [mail, setMail] = useState("");
  const [tresc, setTresc] = useState("");

  const onChangeName = (e) => {
    setImieNazwisko(e.target.value);
  };

  const onChangeMail = (e) => {
    setMail(e.target.value);
  };

  const onChangeTresc = (e) => {
    setTresc(e.target.value);
  };
  return (
    <Container>
      <Title>Pralki Szczecin - kontakt</Title>
      <Content>
        e-mail:{" "}
        <a style={{ textDecoration: "none" }} href="mailto:meteor.pb@op.pl">
          meteor.pb@op.pl
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
      {/* <Input
        type="text"
        name="Email"
        placeholder="Email"
        onChange={onChangeMail}
      /> */}
      <Input
        type="text"
        name="Tresc"
        placeholder="Tresc zapytania"
        onChange={onChangeTresc}
      />
      <Button
        href={`mailto:kissonion24@gmail.com?subject=Naprawa pytanie&body=${encodeURI(
          tresc
        )}`}
      >
        Wyślij
      </Button>
    </Container>
  );
}
export default Contact;
