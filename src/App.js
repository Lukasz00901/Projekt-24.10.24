// App.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // CSS für Carousel
import './App.css'; // Optional für eigene Stile
import Content from './components/layout/content/Content';
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Mallorcas Schönheiten</h1>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}>
        <div>
          <img className='bilder' src="https://cdn.discordapp.com/attachments/1277534759240601655/1298996885272662038/20231018_142134.jpg?ex=671b989f&is=671a471f&hm=f7d7c5cc748a939dd907ef9c731b347aa03db92b0f19e93a822cde3e787914bc&" alt="Bild 1" />
          <p className="legend">            <ul>
              <li>Gebäude in Palma de Mallorca nahe der Kathedrale</li>
              <li>Beispiel für den Modernisme-Stil (katalanischer Jugendstil)</li>
              <li>Beliebt im späten 19. und frühen 20. Jahrhundert</li>
              <li>Merkmale: geschwungene Formen, verspielte Dekorationen, kunstvolle Details</li>
              <li>Erker und große Fenster maximieren das natürliche Licht</li>
              <li>Verzierten Balkone und dekorative Fassaden mit geschwungenen Linien und schmiedeeisernen Geländern</li>
              <li>Erinnerungen an Werke von Antoni Gaudí und Lluís Domènech i Montaner</li>
              <li>Gebäude spiegeln Reichtum und kulturellen Einfluss dieser Zeit wider</li>
              <li>Palma war ein Zentrum des Jugendstils</li>
            </ul></p>
        </div>
        <div>
          <img className='bilder' src="https://cdn.discordapp.com/attachments/1277534759240601655/1298949726879875072/IMG-20231021-WA0129.jpg?ex=671b6cb4&is=671a1b34&hm=a63e8ffe565d7289f9ef27d02f2fa5e7aaf51ba683b04b211cb4f2605befec53&" alt="Bild 2" />
          <p className="legend">            
            <ul>
              <li>Landschaft im Tramuntana-Gebirge auf Mallorca</li>
              <li>Serra de Tramuntana entlang der Nordwestküste</li>
              <li>UNESCO-Welterbe</li>
              <li>Typische Vegetation: Pinien und Olivenbäume</li>
              <li>Beliebtes Ziel für Wanderer und Naturfreunde</li>
              <li>Bekannte Dörfer in der Region: Sóller, Deià, Valldemossa</li>
              <li>Zerklüftete Berglandschaft mit steilen Felsklippen</li>
            </ul></p>
        </div>
        <div>
          <img className='bilder' src="https://cdn.discordapp.com/attachments/1277534759240601655/1298996686798192680/20220821_105243.jpg?ex=671b9870&is=671a46f0&hm=8f42cff052aa423446ed1519fc91cadd21fd3a226f867b686079c716a39715f0&" alt="Bild 3" />
          <p className="legend">            <ul>
              <li>Martelsee (Lago Martel)</li>
              <li>Drachenhöhlen (Coves del Drach) in Porto Cristo, Mallorca</li>
              <li>Eines der bekanntesten Naturwunder Mallorcas, zieht viele Besucher an</li>
              <li>Vier große Höhlen, verbunden durch unterirdische Gänge</li>
              <li>1.200 Meter lang, 25 Meter tief</li>
              <li>Beeindruckende Tropfsteinformationen und mehrere unterirdische Seen</li>
              <li>ca. 177 Meter, einer der größten unterirdischen Seen weltweit</li>
              <li>Berühmt für Bootstouren und klassische Musikaufführungen auf beleuchteten Booten</li>
              <li>Magische Atmosphäre und optimale Akustik in der Höhle</li>
            </ul></p>
        </div>
        <div>
          <img className='bilder' src="https://cdn.discordapp.com/attachments/1277534759240601655/1298998762437476463/20220824_132610.jpg?ex=671b9a5f&is=671a48df&hm=2f56e47f91e32f72894d4282598c997327d9aeabaf01b309b4acc6965f7d830d&" alt="Bild 3" />
          <p className="legend">
            <ul>
              <li>Große Rosette der Kathedrale von Palma („La Seu“)</li>
              <li>Beispiel gotischer Architektur, eine der größten in Europa</li>
              <li>Durchmesser: ca. 12 Meter</li>
              <li>Berühmt für farbenprächtige Glasmalereien</li>
              <li>Kathedrale erbaut im 13. Jahrhundert im Auftrag von König Jaume I. von Aragon</li>
              <li>Bau dauerte mehrere Jahrhunderte</li>
              <li>Lichtphänomen am 2. Februar und 11. November: Spiegelung der Rosette an der gegenüberliegenden Wand („Fest des Lichts“)</li>
              <li>Farben und Muster symbolisieren himmlische Harmonie und göttliche Ordnung</li>
            </ul></p>
        </div>
        <div>
          <img className='bilder' src="https://cdn.discordapp.com/attachments/1277534759240601655/1298949729224233070/IMG-20231021-WA0070.jpg?ex=671b6cb4&is=671a1b34&hm=a69e5b87416b5e373e0734b9b09f0c013cb77a8053a9a16a801a4bab5529637c&" alt="Bild 3" />
          <p className="legend">            <ul>
              <li>Der „Rote Blitz“ (Tranvía de Sóller) ist eine historische Straßenbahn auf Mallorca.</li>
              <li>Verbindet die Stadt Sóller mit dem Hafen von Sóller.</li>
              <li>Existiert seit 1913, ursprünglich für den Transport von Zitrusfrüchten gebaut.</li>
              <li>Heute ein beliebtes Touristenziel, bietet eine malerische 5 km lange Fahrt durch das Sóller-Tal.</li>
              <li>Nostalgische Wagen, größtenteils im Originalzustand erhalten.</li>
              <li>Teil des historischen Transportnetzes, zusammen mit der Bahnstrecke Palma-Sóller.</li>
              <li>Kombination aus historischer Technik, schöner Strecke und entspannter Atmosphäre.</li>
              <li>Ein Highlight für Touristen, um die Umgebung zu erkunden.
große Rosette</li></ul></p>
        </div>
        <div>
          <img className='bilder' src="https://media.discordapp.net/attachments/1277534759240601655/1299002970779684965/20231018_122029.jpg?ex=671b9e4a&is=671a4cca&hm=c7fcaf3464a9f29bbfb2579198a7d2a969a07b62277036d28e31e9547fdbb1ad&=&format=webp&width=280&height=622" alt="Bild 3" />
          <p className="legend">
            <ul>
              <li>Gotische Kathedrale mit hohen Bögen und Spitzgewölben</li>
              <li>Runde, farbenfrohe Rosettenfenster (Buntglas), die Lichtstrahlen in den Raum werfen</li>
              <li>Mystische, feierliche Atmosphäre durch Lichteffekte</li>
              <li> Detailreiche Verzierungen und Schnitzereien an den Wänden</li>
              <li>Erhabenes Raumgefühl, Blick wird nach oben gelenkt</li></ul></p>
        </div>
        <div>
          <img className='bilder' src="https://media.discordapp.net/attachments/1277534759240601655/1298949729710903376/IMG-20231021-WA0068.jpg?ex=671b6cb4&is=671a1b34&hm=26c11ffa8ec8ac923fa9c3a11acc5d856815841350e64b71508e5b0e09b1a54f&=&format=webp&width=829&height=622" alt="Bild 3" />
          <p className="legend">
            <ul>
              <li>Hafen von Port de Sóller an der Nordwestküste Mallorcas</li>
              <li>Malerischer Küstenort in einem natürlichen Hafen, umgeben von der Serra de Tramuntana</li>
              <li>Charmante Atmosphäre mit einer Kombination aus Meer und Gebirge</li>
              <li>Viele Segelboote und Yachten im Hafen</li>
              <li>Typische Gebäude entlang der Küste (Hotels, Restaurants, Cafés)</li>
              <li>Historische Straßenbahn verbindet Hafen und Dorf Sóller (ca. 3 km entfernt)</li>
              <li>Serra de Tramuntana ist ein UNESCO-Welterbe, beliebt bei Wanderern und Naturliebhabern</li>
              <li>Beliebtes Touristenziel und Ausgangspunkt für Bootstouren und Wanderungen</li>
            </ul>
          </p>
        </div>
      </Carousel>
      {/*<Content/>*/}
      <Footer />
    </div>
  );
}

export default App;

