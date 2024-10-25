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
      <h1>Jeffrey's tolle Urlaubsfotos</h1>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        showStatus={false}>
        <div>
          <img className='bilder' src="https://cdn.discordapp.com/attachments/1277534759240601655/1298996885272662038/20231018_142134.jpg?ex=671b989f&is=671a471f&hm=f7d7c5cc748a939dd907ef9c731b347aa03db92b0f19e93a822cde3e787914bc&" alt="Bild 1" />
          <p className="legend">Hier sehen sie ein bemerkenswertes Gebäude in Palma de Mallorca, nahe der Kathedrale. Es handelt sich wahrscheinlich um ein Beispiel für den Modernisme-Stil, eine katalanische Variante des Jugendstils, der in Palma im späten 19. und frühen 20. Jahrhundert sehr beliebt war. Dieser Baustil zeichnet sich durch geschwungene Formen, verspielte Dekorationen und kunstvolle Details aus, die auch in diesem Gebäude zu sehen sind.

Die vielen Erker und großen Fenster sind typisch für den Modernisme, da sie das natürliche Licht maximieren und den Innenräumen ein luftiges Gefühl verleihen. Die verzierten Balkone und die Fassadengestaltung mit dekorativen Elementen, wie geschwungenen Linien und schmiedeeisernen Geländern, sind charakteristisch für diesen Stil.

Palma de Mallorca beherbergt einige sehr schöne Beispiele des Modernisme, und dieses Gebäude erinnert an die Werke von berühmten Architekten wie Antoni Gaudí oder Lluís Domènech i Montaner, die ebenfalls stark von der Natur inspiriert waren und diese Einflüsse in ihre Architektur einfließen ließen.

Wenn du nahe der Kathedrale bist, kannst du viele Gebäude wie dieses finden, die den Reichtum und den kulturellen Einfluss dieser Zeit widerspiegeln. Palma de Mallorca war zu dieser Zeit ein Zentrum des aufstrebenden Jugendstils, und dieses Gebäude ist ein tolles Beispiel für diese Epoche.</p>
        </div>
        <div>
          <img className='bilder' src="https://cdn.discordapp.com/attachments/1277534759240601655/1298949726879875072/IMG-20231021-WA0129.jpg?ex=671b6cb4&is=671a1b34&hm=a63e8ffe565d7289f9ef27d02f2fa5e7aaf51ba683b04b211cb4f2605befec53&" alt="Bild 2" />
          <p className="legend">Hier sehen sie eine Landschaft aus dem Tramuntana-Gebirge auf Mallorca, die durch grüne Berghänge und einen klaren blauen Himmel mit vereinzelten Wolken gekennzeichnet ist. 
            Die Tramuntana ist bekannt für ihre raue und malerische Gebirgslandschaft mit steilen Klippen, grünen Kiefernwäldern und Olivenhainen. Es scheint ein klarer Tag zu sein, und die Vegetation ist üppig, typisch für die Region. 
            Das Bild fängt die natürliche Schönheit der Gegend gut ein, mit einem starken Kontrast zwischen den grünen Hügeln und dem blauen Himmel, was für die friedliche und doch wilde Natur der Serra de Tramuntana charakteristisch ist.
          </p>
        </div>
        <div>
          <img className='bilder' src="https://cdn.discordapp.com/attachments/1277534759240601655/1298996686798192680/20220821_105243.jpg?ex=671b9870&is=671a46f0&hm=8f42cff052aa423446ed1519fc91cadd21fd3a226f867b686079c716a39715f0&" alt="Bild 3" />
          <p className="legend">Hier sehen sie einen der beeindruckenden unterirdischen Seen in den Drachenhöhlen (Coves del Drach), die sich in Porto Cristo auf der Insel Mallorca befinden. Diese Höhlen sind eines der bekanntesten Naturwunder der Insel und ziehen viele Besucher an. 

Die Drachenhöhlen bestehen aus vier großen Höhlen, die durch unterirdische Gänge miteinander verbunden sind. Diese Höhlen erstrecken sich über eine Länge von etwa 1.200 Metern und reichen bis zu einer Tiefe von 25 Metern unter die Erdoberfläche. Sie enthalten mehrere beeindruckende Tropfsteinformationen und einige unterirdische Seen, von denen der bekannteste der Martelsee ist.

Der Martelsee (Lago Martel) ist etwa 177 Meter lang und einer der größten unterirdischen Seen der Welt. Er ist berühmt für die Bootstouren, die darauf angeboten werden, und für die stimmungsvollen klassischen Musikaufführungen, die direkt am See stattfinden. Diese Konzerte, bei denen die Musiker in beleuchteten Booten spielen, schaffen eine fast magische Atmosphäre, die die Akustik der Höhle perfekt nutzt.

Die Höhlen selbst wurden bereits in prähistorischer Zeit genutzt, und ihre faszinierenden Formationen, die über Jahrtausende durch das langsame Abtropfen von Wasser entstanden sind, machen sie zu einem beliebten Ziel für Natur- und Geologieinteressierte.</p>
        </div>
        <div>
          <img className='bilder' src="https://cdn.discordapp.com/attachments/1277534759240601655/1298998762437476463/20220824_132610.jpg?ex=671b9a5f&is=671a48df&hm=2f56e47f91e32f72894d4282598c997327d9aeabaf01b309b4acc6965f7d830d&" alt="Bild 3" />
          <p className="legend">Hier ist die große Rosette der Kathedrale von Palma, auch bekannt als "La Seu" zu sehen. Diese Rosette ist ein beeindruckendes Beispiel gotischer Architektur und eine der größten ihrer Art in Europa. Sie hat einen Durchmesser von etwa 12 Metern und ist besonders bekannt für ihre farbenprächtigen Glasmalereien, die das Licht auf wunderschöne Weise in das Innere der Kathedrale projizieren.

Die Kathedrale selbst, die sich in Palma de Mallorca, Spanien, befindet, wurde im 13. Jahrhundert im Auftrag von König Jaume I. von Aragon errichtet. Der Bau dauerte mehrere Jahrhunderte, was typisch für große gotische Kathedralen ist. Eines der bekanntesten Merkmale der Kathedrale ist die Ausrichtung der Rosette, die dafür sorgt, dass das Licht zweimal im Jahr – am 2. Februar und am 11. November – ein besonderes optisches Phänomen erzeugt. Dann wird das Licht so durch die Rosette gebrochen, dass es eine Spiegelung auf der gegenüberliegenden Wand der Kathedrale formt, die ebenfalls eine Rosette darstellt. Dieses Ereignis wird oft als das „Fest des Lichts“ bezeichnet.

Die Farben und Muster der Rosette sind nicht nur künstlerisch wertvoll, sondern auch spirituell bedeutungsvoll, da sie eine himmlische Harmonie und göttliche Ordnung repräsentieren.</p>
        </div>
        <div>
          <img className='bilder' src="https://cdn.discordapp.com/attachments/1277534759240601655/1298949729224233070/IMG-20231021-WA0070.jpg?ex=671b6cb4&is=671a1b34&hm=a69e5b87416b5e373e0734b9b09f0c013cb77a8053a9a16a801a4bab5529637c&" alt="Bild 3" />
          <p className="legend">Der „Rote Blitz“ (Tranvía de Sóller) ist eine historische Straßenbahn, die von der Stadt Sóller im Nordwesten Mallorcas zum Hafen von Sóller (Port de Sóller) fährt. Auf dem Bild siehst du einen der charakteristischen orangefarbenen Waggons, die für die Bahn bekannt sind.

Diese Straßenbahnstrecke ist ein beliebtes Touristenziel und existiert seit 1913. Ursprünglich wurde sie gebaut, um Waren, insbesondere Zitrusfrüchte aus dem fruchtbaren Sóller-Tal, zum Hafen zu transportieren. Heutzutage dient sie hauptsächlich als charmantes Transportmittel für Touristen und Einheimische.

Der "Rote Blitz" hat eine Strecke von etwa 5 Kilometern, die durch das malerische Tal von Sóller führt, mit Ausblicken auf Orangen- und Zitronenhaine. Die Fahrt ist bekannt für ihre gemütliche Geschwindigkeit und die nostalgische Atmosphäre der historischen Wagen, die weitgehend im Originalzustand erhalten sind. 

Die Straßenbahn ist Teil eines größeren historischen Transportnetzes in der Region, zusammen mit der bekannten Bahnverbindung von Palma nach Sóller, die durch das Tramuntana-Gebirge führt. Der "Rote Blitz" bietet also nicht nur eine praktische Verbindung zum Hafen, sondern ist auch eine Reise durch die Geschichte der Region. 

Dieses Bild zeigt eine der Haltestellen, wo Touristen oft ein- und aussteigen, um die schöne Umgebung zu erkunden. Die Kombination aus der historischen Technik, der malerischen Strecke und der entspannten Atmosphäre macht die Fahrt zu einem Highlight auf Mallorca.</p>
        </div>
        <div>
          <img className='bilder' src="https://media.discordapp.net/attachments/1277534759240601655/1299002970779684965/20231018_122029.jpg?ex=671b9e4a&is=671a4cca&hm=c7fcaf3464a9f29bbfb2579198a7d2a969a07b62277036d28e31e9547fdbb1ad&=&format=webp&width=280&height=622" alt="Bild 3" />
          <p className="legend">Das Foto zeigt das Innere einer gotischen Kathedrale mit beeindruckenden Buntglasfenstern. Die runden, rosafarbenen Fenster, auch Rosetten genannt, sind ein charakteristisches Element der Gotik und lassen das Licht in wunderschönen Farben in den Raum strahlen. Diese farbenfrohen Lichtstrahlen erzeugen eine fast mystische Atmosphäre, die die Größe und Höhe des Kirchenschiffs betont.

Die Architektur weist hohe Bögen und Spitzgewölbe auf, die typisch für den gotischen Baustil sind und das Gefühl von Erhabenheit und Spiritualität verstärken. Diese Bögen lenken den Blick des Betrachters nach oben, was das Gefühl von Raum und Offenheit noch weiter unterstreicht. Es scheint auch einige Verzierungen und Schnitzereien zu geben, die an den Seitenwänden angebracht sind, was die Detailverliebtheit und Kunstfertigkeit der damaligen Bauzeit zeigt.

Das einfallende Licht und die warmen Farben verleihen der Szene eine ruhige und feierliche Stimmung, die oft mit solchen religiösen Gebäuden verbunden ist.</p>
        </div>
        <div>
          <img className='bilder' src="https://media.discordapp.net/attachments/1277534759240601655/1298949729710903376/IMG-20231021-WA0068.jpg?ex=671b6cb4&is=671a1b34&hm=26c11ffa8ec8ac923fa9c3a11acc5d856815841350e64b71508e5b0e09b1a54f&=&format=webp&width=829&height=622" alt="Bild 3" />
          <p className="legend">Dies ist der Hafen von Port de Sóller, der an der Nordwestküste Mallorcas liegt. Port de Sóller ist ein malerischer Küstenort in einem natürlichen Hafen, umgeben von Bergen der Serra de Tramuntana. Der Ort ist bekannt für seine charmante Atmosphäre, die Kombination aus Meer und Gebirge sowie die zahlreichen Segelboote und Yachten, die im Hafen ankern.

Im Hintergrund sind typische Gebäude von Port de Sóller zu sehen, darunter Hotels, Restaurants und Cafés, die sich entlang der Küste erstrecken. Der Ort ist auch für seine historische Straßenbahn bekannt, die den Hafen mit dem etwa 3 Kilometer entfernten Dorf Sóller verbindet. Die Berge im Hintergrund gehören zur Serra de Tramuntana, einem UNESCO-Welterbe, das Wanderer und Naturliebhaber anzieht.

Der Hafen ist ein beliebtes Touristenziel und ein Ausgangspunkt für Bootstouren, Wanderungen und andere Aktivitäten in der Natur.</p>
        </div>
      </Carousel>
      {/*<Content/>*/}
      <Footer />
    </div>
  );
}

export default App;

