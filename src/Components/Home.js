import { Title, Container, Content, MadziaContainer } from "../Styles";
import Comment from "./Comment";
import madzia from "../Pictures/madzia.png";

function Home() {
  return (
    <div>
      <Container>
        <Title>Naprawa pralek automatycznych</Title>
        <Content>
          Zajmuję się naprawą pralek automatycznych na terenie Szczecina. Masz
          zepsutą pralkę? Skontaktuj się ze mną.
        </Content>
        <Title>Diagnostyka!</Title>
        <Content>
          Naprawa pralki może być bardzo kosztowna. Zanim przystąpię do naprawy
          poinformuję Ciebie o kosztach.
        </Content>
        <Title>Pobieram opłatę za dojazd 20 zł!</Title>
        <br></br>
        <br></br>
        <Title>Opinie klientów:</Title>
        <Comment author="Andrzej">
          Jest to gość przed którym powinni drżeć jego pobratymcy z Francji,
          Angli, Niemiec.
        </Comment>
        <Comment author="Emilia">
          Inni mówili pralka na wymianę a tu pan przyjechał wymienił a kwota
          150zł, bardzo tanio.
        </Comment>
        <Comment author="Artur">
          Niesamowite - przez telefon uzyskałem podpowiedź jak usunąć usterkę!
          Polecam firmę każdemu!
        </Comment>
        <Comment author="Paulina">
          Świetny fachowiec i w dodatku najtańszy w mieście! dziękuje Panu za
          ekspresowa i tanią pomoc:*
        </Comment>
        <Comment author="Krzysztof">
          Jedyny taki w szczecinie bezinteresownie przez tel. powiedzial co mam
          zrobic zeby usunac awarie mojej pralki, a nie sciemnial tak jak to
          robia inni. NUMER TEL. TEGO FACHOWCA przykleilem na pralce.
        </Comment>
      </Container>
      <MadziaContainer>
        <img src={madzia} alt="madzia" />
        <Title>
          Nazywam się<br></br>MAGDALENA BOROŃ
        </Title>
        <Content>Przekaż na mnie 1% podatku</Content>
        <Title>KRS 0000037904</Title>
        <Content>
          W rubryce "Informacje uzupełniające - cel szczegółowy 1%" podaj:
        </Content>
        <Title>30732 Boroń Magdalena</Title>
        <Content>
          Prosimy o zaznaczenie w zeznaniu podatkowym pola:<br></br>"wyrażam
          zgodę"
        </Content>
        <Content>
          Urodziłam się 27 kwietnia 2016 roku z zespołem wad wrodzonych:
          <ul>
            <li>brak gałek ocznych</li>
            <li>rozszczep podniebienia</li>
            <li>wadą serca-stenoza płucna</li>
            <li>słabym napięciem mięśniowym</li>
          </ul>
        </Content>
        <Content>
          Za mną 3 zabiegi protezowania oczodołów, operacja rozszczepu
          podniebienia i skrętu jelit oraz wiele przebytych chorób i pobytów w
          szpitalu. Jestem pod stałą opieką wielu specjalistów oraz wymagam
          stałej rehabilitacji.
        </Content>
        <Title>Za okazane wsparcie z całego serca dziękujemy</Title>
        <Title>Madzia z rodzicami</Title>
      </MadziaContainer>
    </div>
  );
}
export default Home;
