if(typeof process==="undefined"){globalThis.process={env:{},version:"",versions:{}};}if(typeof global==="undefined"){globalThis.global=globalThis;}

function loadCss(href) {
  return new Promise((resolve, reject) => {
    const elem = document.createElement('link');
    elem.rel = 'stylesheet';
    elem.href = href;
    elem.defer = false;
    elem.async = false;
    elem.onload = resolve;
    elem.onerror = reject;
    document.head.appendChild(elem);
  });
} await loadCss('data:text/css;base64,I3NvdXJjZUJveHtmaWxsOiM5MGVlOTA7c3Ryb2tlOiMwMDB9I2NvbGxlY3Rpb25Cb3h7ZmlsbDojYWRkOGU2O3N0cm9rZTojMDAwfSNzaW5rQm94e2ZpbGw6IzhiMDAwMDtzdHJva2U6IzAwMH0jYm94e2ZpbGw6IzE5MTk3MDtzdHJva2U6IzAwMH0jYm94MXtmaWxsOiMwMDAwY2Q7c3Ryb2tlOiMwMDB9I2JveDJ7ZmlsbDojNjQ5NWVkO3N0cm9rZTojMDAwfSNib3gze2ZpbGw6IzY0OTVlZDAwO3N0cm9rZTojMDAwfQo=');import { VcsToolButton as ca, getDefaultPrimaryColor as ua, VcsCheckbox as fa, VcsTextField as da, VcsTextArea as ma, VcsFormButton as ga, VcsDatePicker as pa, VcsLabel as ya, VcsSelect as _a, VcsFormSection as ha, NotificationType as Lt, createToggleAction as Ta, WindowSlot as Ea, ToolboxType as va } from "../../assets/ui.js";
import { VectorLayer as Aa, mercatorProjection as Sa, markVolatile as Na, VectorStyleItem as Oa, startCreateFeatureSession as Ia, GeometryType as La, mercatorToCartesian as wn, mercatorToWgs84Transformer as kn, DeclarativeStyleItem as ba } from "../../assets/core.js";
import { getCurrentInstance as _n, inject as hn, shallowRef as fr, ref as Oe, computed as Le, onBeforeMount as wa, watch as Cn, onMounted as dr, onUnmounted as mr, defineComponent as $t, h as gr, createVNode as ne, Text as ka, Fragment as jt, reactive as Ca, resolveComponent as ce, createBlock as rn, openBlock as lt, withCtx as de, createElementBlock as Dt, renderList as Pa, toRaw as ft, createElementVNode as pe, toDisplayString as Ee, createCommentVNode as $e, createTextVNode as Tt } from "../../assets/vue.js";
import { VTooltip as Da, VInput as Fa, VSheet as Ra, VSpacer as Ma, VDivider as Ga, VIcon as Ua, VCardActions as xa, VCardText as Va, VCardTitle as $a, VCard as ja, VDialog as Ha, VCol as Ba, VRow as Ka, VContainer as Wa, VForm as Ya } from "../../assets/vuetify.js";
import { Color as za, Rectangle as pr, Math as Ze, Cartographic as bt, sampleTerrainMostDetailed as Xa, Cartesian3 as Ja, SingleTileImageryProvider as Jt } from "../../assets/cesium.js";
import { ol$format$GeoJSON as qa } from "../../assets/ol.js";
const Za = {
  title: "Geländeanalyse",
  description: "Die Geländeanalyse ist ein Werkzeug, mit dem Benutzer das Gelände in einer 3D-Szene analysieren kann. Es ermöglicht die Durchführung einer Wasserflussanalyse, indem lokale Höhen berücksichtigt und die Flussrichtung berechnet wird.",
  "help-title": "Geländeanalyse",
  hint1: {
    title: "Geometrie zeichnen",
    description: "Zeichnen Sie einen Bereich in der Karte, an dem das Gelände analysiert werden soll. Sie können entweder ein Rechteck oder ein Polygon zeichnen."
  },
  hint2: {
    title: "Ergebnis",
    description: "Nach einer kurzen Analyse wird das Ergebnis in der Karte angezeigt. Die Farben repräsentieren die Fließrichtung des Wassers."
  },
  drawGeometry: "Polygon zeichnen",
  drawGeometryTooltip: "Zeichnen Sie das Polygon in der Karte, um für diesen eine Analyse durchzuführen.",
  enterGeometry: "Polygongeometrie eingeben",
  enterGeometryTooltip: "Eintragen der Polygongeometrie. Maximal 4 Punkte...",
  showResults: "Ergebnisse anzeigen",
  runAnalysis: "Starten",
  draw: {
    areaSelection: "Fläche auswählen",
    drawBBox: "Rechteck zeichnen",
    drawPolygon: "Polygon zeichnen"
  },
  explanation: {
    title: "Erklärung",
    sourceAreas: "Quellgebiete (hohe Höhe) - wo Wasser entsteht",
    collectionAreas: "Sammelgebiete (niedrige Höhe) - wo Wasser hinfließt",
    sinkAreas: "Senkengebiete - Vertiefungen wo Wasser sammelt",
    flowNote: `Hinweis: Dunklere Farben innerhalb jedes Bereichs zeigen 

 einen höheren Wasserfluss an`,
    box1: "sammelt Wasser von mehr als 50 benachbarten Punkten",
    box2: "sammelt Wasser von mehr als 20 benachbarten Punkten",
    box3: "sammelt Wasser von mehr als 10 benachbarten Punkten"
  },
  error: {
    title: "Fehler",
    message: "Die Analyse konnte nicht durchgeführt werden, da der Analysebereich zu groß ist. Bitte ein kleineres Gebiet zeichnen und erneut versuchen."
  },
  uploadButton: "URBREATH",
  uploadButtonTooltip: "Bericht nach URBREATH MinIO hochladen",
  uploadDialog: {
    title: "Zu MinIO hochladen",
    selectItems: "Wählen Sie die Elemente aus, die Sie hochladen möchten.",
    geojsonLabel: "Gezeichnete Geometrie des Bereichs (GeoJSON)",
    geotiffResultLabel: "Analyseergebnisse (GeoTIFF)",
    fileSuffixLabel: "Suffix für Dateinamen",
    fileSuffixPlaceholder: "Für Standard-Suffix leer lassen",
    fileSuffixCurrent: "Leer lassen, um dieses zu verwenden:",
    requiredFilesLabel: "Zusammenfassung und Parameter erfordern einen vorhandenen Bericht oder die PDF-Option."
  }
}, Qa = {
  terrainAnalysis: Za
}, eo = {
  title: "Terrain Analysis",
  description: "Terrain analysis is a tool that allows users to analyze the terrain in a 3D scene. It enables the execution of a water flow analysis by taking local elevations into account and calculating the flow direction.",
  "help-title": "Terrain Analysis",
  hint1: {
    title: "Draw geometry",
    description: "Draw an area on the map where the terrain should be analyzed. You can either draw a rectangle or a polygon."
  },
  hint2: {
    title: "Result",
    description: "After a short analysis, the result will be displayed on the map. The colors represent the direction of water flow."
  },
  drawGeometry: "Draw Polygon",
  drawGeometryTooltip: "Draw the polygon on the map to perform an analysis for it.",
  enterGeometry: "Enter Polygon Geometry",
  enterGeometryTooltip: "Enter the polygon geometry. Maximum 4 points...",
  showResults: "Show Results",
  runAnalysis: "Start",
  draw: {
    areaSelection: "Select Area",
    drawBBox: "Draw Rectangle",
    drawPolygon: "Draw Polygon"
  },
  explanation: {
    title: "Explanation",
    sourceAreas: "Source areas (high elevation) - where water originates",
    collectionAreas: "Collection areas (low elevation) - where water flows to",
    sinkAreas: "Sink areas - depressions where water collects",
    flowNote: "Note: Darker colors within each area indicate higher water flow",
    box1: "collects water from more than 50 neighboring points",
    box2: "collects water from more than 20 neighboring points",
    box3: "collects water from more than 10 neighboring points"
  },
  error: {
    title: "Error",
    message: "The analysis could not be performed because the analysis area is too large. Please draw a smaller area and try again."
  },
  uploadDialog: {
    title: "Upload to MinIO",
    selectItems: "Select the items you want to upload.",
    geojsonLabel: "Drawn geometry of the area (GeoJSON)",
    geotiffResultLabel: "Analysis results (GeoTIFF)",
    fileSuffixLabel: "Suffix for file names",
    fileSuffixPlaceholder: "Leave empty for default suffix",
    fileSuffixCurrent: "Leave empty to use this:",
    requiredFilesLabel: "Summary and parameters require an existing report or the PDF option."
  }
}, to = {
  terrainAnalysis: eo
}, no = {
  title: "Terreinanalyse",
  description: "Terreinanalyse is een hulpmiddel waarmee gebruikers het terrein in een 3D-scène kunnen analyseren. Het maakt het mogelijk een waterstroomanalyse uit te voeren door rekening te houden met lokale hoogtes en de stroomrichting te berekenen.",
  "help-title": "Terreinanalyse",
  hint1: {
    title: "Geometrie tekenen",
    description: "Teken een gebied op de kaart waar het terrein geanalyseerd moet worden. Je kunt een rechthoek of een polygoon tekenen."
  },
  hint2: {
    title: "Resultaat",
    description: "Na een korte analyse wordt het resultaat op de kaart weergegeven. De kleuren geven de richting van de waterstroming aan."
  },
  drawGeometry: "Polygoon tekenen",
  drawGeometryTooltip: "Teken de polygoon op de kaart om er een analyse voor uit te voeren.",
  enterGeometry: "Polygoongeometrie invoeren",
  enterGeometryTooltip: "Voer de polygoongeometrie in. Maximaal 4 punten...",
  showResults: "Resultaten tonen",
  runAnalysis: "Start",
  draw: {
    areaSelection: "Gebied selecteren",
    drawBBox: "Rechthoek tekenen",
    drawPolygon: "Polygoon tekenen"
  },
  explanation: {
    title: "Uitleg",
    sourceAreas: "Brongebieden (hoge ligging) - waar water ontstaat",
    collectionAreas: "Verzamelgebieden (lage ligging) - waar water naartoe stroomt",
    sinkAreas: "Sinkgebieden - depressies waar water zich verzamelt",
    flowNote: "Opmerking: Donkere kleuren binnen elk gebied duiden op een grotere waterstroom",
    box1: "verzamelt water van meer dan 50 naburige punten",
    box2: "verzamelt water van meer dan 20 naburige punten",
    box3: "verzamelt water van meer dan 10 naburige punten"
  },
  error: {
    title: "Fout",
    message: "De analyse kon niet worden uitgevoerd omdat het analysegebied te groot is. Teken een kleiner gebied en probeer het opnieuw."
  },
  uploadDialog: {
    title: "Uploaden naar MinIO",
    selectItems: "Selecteer de items die je wilt uploaden.",
    geojsonLabel: "Getekende geometrie van het gebied (GeoJSON)",
    geotiffResultLabel: "Analyseresultaten (GeoTIFF)",
    fileSuffixLabel: "Achtervoegsel voor bestandsnamen",
    fileSuffixPlaceholder: "Laat leeg voor het standaardachtervoegsel",
    fileSuffixCurrent: "Laat leeg om dit te gebruiken:",
    requiredFilesLabel: "Samenvatting en parameters vereisen een bestaand rapport of de PDF-optie."
  }
}, ro = {
  terrainAnalysis: no
}, ao = {
  title: "Analiza terenului",
  description: "Analiza terenului este un instrument care le permite utilizatorilor să analizeze terenul într-o scenă 3D. Permite executarea unei analize a curgerii apei, ținând cont de altitudinile locale și calculând direcția de curgere.",
  "help-title": "Analiza terenului",
  hint1: {
    title: "Desenează geometria",
    description: "Desenează pe hartă o zonă în care terenul trebuie analizat. Poți desena fie un dreptunghi, fie un poligon."
  },
  hint2: {
    title: "Rezultat",
    description: "După o analiză scurtă, rezultatul va fi afișat pe hartă. Culorile reprezintă direcția de curgere a apei."
  },
  drawGeometry: "Desenează poligon",
  drawGeometryTooltip: "Desenează poligonul pe hartă pentru a efectua o analiză pentru acesta.",
  enterGeometry: "Introdu geometria poligonului",
  enterGeometryTooltip: "Introdu geometria poligonului. Maximum 4 puncte...",
  showResults: "Afișează rezultatele",
  runAnalysis: "Pornește",
  draw: {
    areaSelection: "Selectează zona",
    drawBBox: "Desenează dreptunghi",
    drawPolygon: "Desenează poligon"
  },
  explanation: {
    title: "Explicație",
    sourceAreas: "Zone sursă (altitudine mare) - unde își are originea apa",
    collectionAreas: "Zone de colectare (altitudine mică) - unde curge apa",
    sinkAreas: "Zone de acumulare - depresiuni unde se adună apa",
    flowNote: "Notă: Culorile mai închise din fiecare zonă indică un debit de apă mai mare",
    box1: "colectează apă de la mai mult de 50 de puncte vecine",
    box2: "colectează apă de la mai mult de 20 de puncte vecine",
    box3: "colectează apă de la mai mult de 10 puncte vecine"
  },
  error: {
    title: "Eroare",
    message: "Analiza nu a putut fi efectuată deoarece zona de analiză este prea mare. Te rugăm să desenezi o zonă mai mică și să încerci din nou."
  },
  uploadDialog: {
    title: "Încărcare în MinIO",
    selectItems: "Selectează elementele pe care vrei să le încarci.",
    geojsonLabel: "Geometria desenată a zonei (GeoJSON)",
    geotiffResultLabel: "Rezultatele analizei (GeoTIFF)",
    fileSuffixLabel: "Sufix pentru numele fișierelor",
    fileSuffixPlaceholder: "Lasă gol pentru sufixul implicit",
    fileSuffixCurrent: "Lasă gol pentru a folosi acesta:",
    requiredFilesLabel: "Rezumatul și parametrii necesită un raport existent sau opțiunea PDF."
  }
}, oo = {
  terrainAnalysis: ao
}, io = {
  title: "Analisi del terreno",
  description: "L’analisi del terreno è uno strumento che consente agli utenti di analizzare il terreno in una scena 3D. Permette di eseguire un’analisi del deflusso dell’acqua tenendo conto delle quote locali e calcolando la direzione del flusso.",
  "help-title": "Analisi del terreno",
  hint1: {
    title: "Disegna la geometria",
    description: "Disegna un’area sulla mappa in cui il terreno deve essere analizzato. Puoi disegnare un rettangolo o un poligono."
  },
  hint2: {
    title: "Risultato",
    description: "Dopo una breve analisi, il risultato verrà visualizzato sulla mappa. I colori rappresentano la direzione del flusso dell’acqua."
  },
  drawGeometry: "Disegna poligono",
  drawGeometryTooltip: "Disegna il poligono sulla mappa per eseguire un’analisi su di esso.",
  enterGeometry: "Inserisci la geometria del poligono",
  enterGeometryTooltip: "Inserisci la geometria del poligono. Massimo 4 punti...",
  showResults: "Mostra risultati",
  runAnalysis: "Avvia",
  draw: {
    areaSelection: "Seleziona area",
    drawBBox: "Disegna rettangolo",
    drawPolygon: "Disegna poligono"
  },
  explanation: {
    title: "Spiegazione",
    sourceAreas: "Aree sorgente (quota elevata) - dove l’acqua ha origine",
    collectionAreas: "Aree di raccolta (quota bassa) - dove l’acqua confluisce",
    sinkAreas: "Aree di accumulo - depressioni in cui l’acqua si raccoglie",
    flowNote: "Nota: I colori più scuri all’interno di ciascuna area indicano un flusso d’acqua maggiore",
    box1: "raccoglie acqua da più di 50 punti vicini",
    box2: "raccoglie acqua da più di 20 punti vicini",
    box3: "raccoglie acqua da più di 10 punti vicini"
  },
  error: {
    title: "Errore",
    message: "Non è stato possibile eseguire l’analisi perché l’area di analisi è troppo grande. Disegna un’area più piccola e riprova."
  },
  uploadDialog: {
    title: "Carica su MinIO",
    selectItems: "Seleziona gli elementi che vuoi caricare.",
    geojsonLabel: "Geometria disegnata dell’area (GeoJSON)",
    geotiffResultLabel: "Risultati dell’analisi (GeoTIFF)",
    fileSuffixLabel: "Suffisso per i nomi dei file",
    fileSuffixPlaceholder: "Lascia vuoto per il suffisso predefinito",
    fileSuffixCurrent: "Lascia vuoto per usare questo:",
    requiredFilesLabel: "Riepilogo e parametri richiedono un report esistente o l’opzione PDF."
  }
}, lo = {
  terrainAnalysis: io
}, so = {
  title: "Analýza terénu",
  description: "Analýza terénu je nástroj, který uživatelům umožňuje analyzovat terén ve 3D scéně. Umožňuje provést analýzu odtoku vody s ohledem na místní nadmořské výšky a vypočítat směr proudění.",
  "help-title": "Analýza terénu",
  hint1: {
    title: "Nakreslete geometrii",
    description: "Nakreslete na mapě oblast, ve které má být terén analyzován. Můžete nakreslit obdélník nebo polygon."
  },
  hint2: {
    title: "Výsledek",
    description: "Po krátké analýze se výsledek zobrazí na mapě. Barvy představují směr proudění vody."
  },
  drawGeometry: "Nakreslit polygon",
  drawGeometryTooltip: "Nakreslete polygon na mapě a proveďte pro něj analýzu.",
  enterGeometry: "Zadat geometrii polygonu",
  enterGeometryTooltip: "Zadejte geometrii polygonu. Maximálně 4 body...",
  showResults: "Zobrazit výsledky",
  runAnalysis: "Spustit",
  draw: {
    areaSelection: "Vybrat oblast",
    drawBBox: "Nakreslit obdélník",
    drawPolygon: "Nakreslit polygon"
  },
  explanation: {
    title: "Vysvětlení",
    sourceAreas: "Zdrojové oblasti (vysoká nadmořská výška) – kde voda vzniká",
    collectionAreas: "Sběrné oblasti (nízká nadmořská výška) – kam voda odtéká",
    sinkAreas: "Akumulační oblasti – deprese, kde se voda hromadí",
    flowNote: "Poznámka: Tmavší barvy v rámci každé oblasti znamenají vyšší průtok vody",
    box1: "shromažďuje vodu z více než 50 sousedních bodů",
    box2: "shromažďuje vodu z více než 20 sousedních bodů",
    box3: "shromažďuje vodu z více než 10 sousedních bodů"
  },
  error: {
    title: "Chyba",
    message: "Analýzu nebylo možné provést, protože analyzovaná oblast je příliš velká. Nakreslete menší oblast a zkuste to znovu."
  },
  uploadDialog: {
    title: "Nahrát do MinIO",
    selectItems: "Vyberte položky, které chcete nahrát.",
    geojsonLabel: "Nakreslená geometrie oblasti (GeoJSON)",
    geotiffResultLabel: "Výsledky analýzy (GeoTIFF)",
    fileSuffixLabel: "Přípona pro názvy souborů",
    fileSuffixPlaceholder: "Nechte prázdné pro výchozí příponu",
    fileSuffixCurrent: "Nechte prázdné pro použití tohoto:",
    requiredFilesLabel: "Souhrn a parametry vyžadují existující report nebo volbu PDF."
  }
}, co = {
  terrainAnalysis: so
}, uo = {
  title: "Maastiku analüüs",
  description: "Maastiku analüüs on tööriist, mis võimaldab kasutajatel analüüsida maastikku 3D-stseenis. See võimaldab teostada vee voolamise analüüsi, võttes arvesse kohalikke kõrgusi ja arvutades voolusuuna.",
  "help-title": "Maastiku analüüs",
  hint1: {
    title: "Joonista geomeetria",
    description: "Joonista kaardile ala, kus maastikku tuleks analüüsida. Saad joonistada kas ristküliku või hulknurga."
  },
  hint2: {
    title: "Tulemus",
    description: "Pärast lühikest analüüsi kuvatakse tulemus kaardil. Värvid näitavad vee voolusuunda."
  },
  drawGeometry: "Joonista hulknurk",
  drawGeometryTooltip: "Joonista hulknurk kaardile, et selle kohta analüüs teha.",
  enterGeometry: "Sisesta hulknurga geomeetria",
  enterGeometryTooltip: "Sisesta hulknurga geomeetria. Maksimaalselt 4 punkti...",
  showResults: "Näita tulemusi",
  runAnalysis: "Käivita",
  draw: {
    areaSelection: "Vali ala",
    drawBBox: "Joonista ristkülik",
    drawPolygon: "Joonista hulknurk"
  },
  explanation: {
    title: "Selgitus",
    sourceAreas: "Lähtealad (kõrge kõrgus) – kust vesi alguse saab",
    collectionAreas: "Kogunemisalad (madal kõrgus) – kuhu vesi voolab",
    sinkAreas: "Vajumis-/kogumisalad – lohud, kuhu vesi koguneb",
    flowNote: "Märkus: Tumedamad värvid igas alas viitavad suuremale veevoolule",
    box1: "kogub vett enam kui 50 naaberpunktist",
    box2: "kogub vett enam kui 20 naaberpunktist",
    box3: "kogub vett enam kui 10 naaberpunktist"
  },
  error: {
    title: "Viga",
    message: "Analüüsi ei saanud teha, sest analüüsiala on liiga suur. Joonista väiksem ala ja proovi uuesti."
  },
  uploadDialog: {
    title: "Laadi üles MinIO-sse",
    selectItems: "Vali üksused, mida soovid üles laadida.",
    geojsonLabel: "Ala joonistatud geomeetria (GeoJSON)",
    geotiffResultLabel: "Analüüsi tulemused (GeoTIFF)",
    fileSuffixLabel: "Failinimede sufiks",
    fileSuffixPlaceholder: "Jäta tühjaks vaikimisi sufiksi jaoks",
    fileSuffixCurrent: "Jäta t��hjaks, et kasutada seda:",
    requiredFilesLabel: "Kokkuvõte ja parameetrid nõuavad olemasolevat aruannet või PDF-valikut."
  }
}, fo = {
  terrainAnalysis: uo
}, mo = {
  title: "Análisis del terreno",
  description: "El análisis del terreno es una herramienta que permite a los usuarios analizar el terreno en una escena 3D. Permite ejecutar un análisis del flujo de agua teniendo en cuenta las elevaciones locales y calculando la dirección del flujo.",
  "help-title": "Análisis del terreno",
  hint1: {
    title: "Dibujar geometría",
    description: "Dibuja un área en el mapa donde se deba analizar el terreno. Puedes dibujar un rectángulo o un polígono."
  },
  hint2: {
    title: "Resultado",
    description: "Tras un breve análisis, el resultado se mostrará en el mapa. Los colores representan la dirección del flujo de agua."
  },
  drawGeometry: "Dibujar polígono",
  drawGeometryTooltip: "Dibuja el polígono en el mapa para realizar un análisis sobre él.",
  enterGeometry: "Introducir geometría del polígono",
  enterGeometryTooltip: "Introduce la geometría del polígono. Máximo 4 puntos...",
  showResults: "Mostrar resultados",
  runAnalysis: "Iniciar",
  draw: {
    areaSelection: "Seleccionar área",
    drawBBox: "Dibujar rectángulo",
    drawPolygon: "Dibujar polígono"
  },
  explanation: {
    title: "Explicación",
    sourceAreas: "Áreas fuente (elevación alta) - donde se origina el agua",
    collectionAreas: "Áreas de acumulación (elevación baja) - hacia donde fluye el agua",
    sinkAreas: "Áreas sumidero - depresiones donde el agua se acumula",
    flowNote: "Nota: Los colores más oscuros dentro de cada área indican un mayor flujo de agua",
    box1: "recoge agua de más de 50 puntos vecinos",
    box2: "recoge agua de más de 20 puntos vecinos",
    box3: "recoge agua de más de 10 puntos vecinos"
  },
  error: {
    title: "Error",
    message: "No se pudo realizar el análisis porque el área de análisis es demasiado grande. Dibuja un área más pequeña e inténtalo de nuevo."
  },
  uploadDialog: {
    title: "Subir a MinIO",
    selectItems: "Selecciona los elementos que deseas subir.",
    geojsonLabel: "Geometría dibujada del área (GeoJSON)",
    geotiffResultLabel: "Resultados del análisis (GeoTIFF)",
    fileSuffixLabel: "Sufijo para nombres de archivo",
    fileSuffixPlaceholder: "Dejar vacío para el sufijo predeterminado",
    fileSuffixCurrent: "Dejar vacío para usar esto:",
    requiredFilesLabel: "El resumen y los parámetros requieren un informe existente o la opción PDF."
  }
}, go = {
  terrainAnalysis: mo
}, po = {
  title: "Maastoanalyysi",
  description: "Maastoanalyysi on työkalu, jonka avulla käyttäjät voivat analysoida maastoa 3D-näkymässä. Sen avulla voidaan suorittaa veden virtausanalyysi ottamalla paikalliset korkeuserot huomioon ja laskemalla virtaussuunta.",
  "help-title": "Maastoanalyysi",
  hint1: {
    title: "Piirrä geometria",
    description: "Piirrä kartalle alue, jolta maasto analysoidaan. Voit piirtää suorakulmion tai monikulmion."
  },
  hint2: {
    title: "Tulos",
    description: "Lyhyen analyysin jälkeen tulos näytetään kartalla. Värit kuvaavat veden virtaussuuntaa."
  },
  drawGeometry: "Piirrä monikulmio",
  drawGeometryTooltip: "Piirrä monikulmio kartalle, jotta sille voidaan suorittaa analyysi.",
  enterGeometry: "Syötä monikulmion geometria",
  enterGeometryTooltip: "Syötä monikulmion geometria. Enintään 4 pistettä...",
  showResults: "Näytä tulokset",
  runAnalysis: "Käynnistä",
  draw: {
    areaSelection: "Valitse alue",
    drawBBox: "Piirrä suorakulmio",
    drawPolygon: "Piirrä monikulmio"
  },
  explanation: {
    title: "Selitys",
    sourceAreas: "Lähdealueet (korkea korkeus) – mistä vesi saa alkunsa",
    collectionAreas: "Kertymäalueet (matala korkeus) – minne vesi virtaa",
    sinkAreas: "Nielualueet – painanteet, joihin vesi kertyy",
    flowNote: "Huom: Tummemmat värit kunkin alueen sisällä tarkoittavat suurempaa veden virtausta",
    box1: "kerää vettä yli 50 naapuripisteestä",
    box2: "kerää vettä yli 20 naapuripisteestä",
    box3: "kerää vettä yli 10 naapuripisteestä"
  },
  error: {
    title: "Virhe",
    message: "Analyysiä ei voitu suorittaa, koska analyysialue on liian suuri. Piirrä pienempi alue ja yritä uudelleen."
  },
  uploadDialog: {
    title: "Lähetä MinIO:oon",
    selectItems: "Valitse kohteet, jotka haluat lähettää.",
    geojsonLabel: "Piirretty alueen geometria (GeoJSON)",
    geotiffResultLabel: "Analyysin tulokset (GeoTIFF)",
    fileSuffixLabel: "Tiedostonimien pääte",
    fileSuffixPlaceholder: "Jätä tyhjäksi käyttääksesi oletuspäätettä",
    fileSuffixCurrent: "Jätä tyhjäksi käyttääksesi tätä:",
    requiredFilesLabel: "Yhteenveto ja parametrit edellyttävät olemassa olevaa raporttia tai PDF-vaihtoehtoa."
  }
}, yo = {
  terrainAnalysis: po
}, _o = {
  title: "Terrænanalyse",
  description: "Terrænanalyse er et værktøj, der giver brugere mulighed for at analysere terrænet i en 3D-scene. Det gør det muligt at udføre en vandstrømsanalyse ved at tage lokale højder i betragtning og beregne strømningsretningen.",
  "help-title": "Terrænanalyse",
  hint1: {
    title: "Tegn geometri",
    description: "Tegn et område på kortet, hvor terrænet skal analyseres. Du kan enten tegne et rektangel eller en polygon."
  },
  hint2: {
    title: "Resultat",
    description: "Efter en kort analyse vises resultatet på kortet. Farverne repræsenterer vandets strømningsretning."
  },
  drawGeometry: "Tegn polygon",
  drawGeometryTooltip: "Tegn polygonen på kortet for at udføre en analyse for den.",
  enterGeometry: "Indtast polygongeometri",
  enterGeometryTooltip: "Indtast polygongeometrien. Maksimalt 4 punkter...",
  showResults: "Vis resultater",
  runAnalysis: "Start",
  draw: {
    areaSelection: "Vælg område",
    drawBBox: "Tegn rektangel",
    drawPolygon: "Tegn polygon"
  },
  explanation: {
    title: "Forklaring",
    sourceAreas: "Kildeområder (høj højde) - hvor vandet opstår",
    collectionAreas: "Opsamlingsområder (lav højde) - hvor vandet strømmer hen",
    sinkAreas: "Sænkningsområder - fordybninger hvor vand samler sig",
    flowNote: "Bemærk: Mørkere farver inden for hvert område indikerer større vandstrøm",
    box1: "opsamler vand fra mere end 50 nabopunkter",
    box2: "opsamler vand fra mere end 20 nabopunkter",
    box3: "opsamler vand fra mere end 10 nabopunkter"
  },
  error: {
    title: "Fejl",
    message: "Analysen kunne ikke udføres, fordi analyseområdet er for stort. Tegn et mindre område, og prøv igen."
  },
  uploadDialog: {
    title: "Upload til MinIO",
    selectItems: "Vælg de elementer, du vil uploade.",
    geojsonLabel: "Tegnet geometri for området (GeoJSON)",
    geotiffResultLabel: "Analyseresultater (GeoTIFF)",
    fileSuffixLabel: "Suffiks for filnavne",
    fileSuffixPlaceholder: "Lad være tomt for standardsuffiks",
    fileSuffixCurrent: "Lad være tomt for at bruge dette:",
    requiredFilesLabel: "Oversigt og parametre kræver en eksisterende rapport eller PDF-muligheden."
  }
}, ho = {
  terrainAnalysis: _o
}, To = {
  title: "Ανάλυση εδάφους",
  description: "Η ανάλυση εδάφους είναι ένα εργαλείο που επιτρέπει στους χρήστες να αναλύουν το έδαφος σε μια 3D σκηνή. Επιτρέπει την εκτέλεση ανάλυσης ροής νερού λαμβάνοντας υπόψη τα τοπικά υψόμετρα και υπολογίζοντας την κατεύθυνση ροής.",
  "help-title": "Ανάλυση εδάφους",
  hint1: {
    title: "Σχεδίαση γεωμετρίας",
    description: "Σχεδιάστε μια περιοχή στον χάρτη όπου θα πρέπει να αναλυθεί το έδαφος. Μπορείτε να σχεδιάσετε είτε ένα ορθογώνιο είτε ένα πολύγωνο."
  },
  hint2: {
    title: "Αποτέλεσμα",
    description: "Μετά από μια σύντομη ανάλυση, το αποτέλεσμα θα εμφανιστεί στον χάρτη. Τα χρώματα αντιπροσωπεύουν την κατεύθυνση ροής του νερού."
  },
  drawGeometry: "Σχεδίαση πολυγώνου",
  drawGeometryTooltip: "Σχεδιάστε το πολύγωνο στον χάρτη για να εκτελέσετε ανάλυση γι’ αυτό.",
  enterGeometry: "Εισαγωγή γεωμετρίας πολυγώνου",
  enterGeometryTooltip: "Εισαγάγετε τη γεωμετρία του πολυγώνου. Μέγιστο 4 σημεία...",
  showResults: "Εμφάνιση αποτελεσμάτων",
  runAnalysis: "Έναρξη",
  draw: {
    areaSelection: "Επιλογή περιοχής",
    drawBBox: "Σχεδίαση ορθογωνίου",
    drawPolygon: "Σχεδίαση πολυγώνου"
  },
  explanation: {
    title: "Επεξήγηση",
    sourceAreas: "Περιοχές πηγής (υψηλό υψόμετρο) - όπου ξεκινά το νερό",
    collectionAreas: "Περιοχές συλλογής (χαμηλό υψόμετρο) - όπου ρέει το νερό",
    sinkAreas: "Περιοχές καταβόθρας - κοιλότητες όπου συγκεντρώνεται το νερό",
    flowNote: "Σημείωση: Πιο σκούρα χρώματα μέσα σε κάθε περιοχή υποδηλώνουν μεγαλύτερη ροή νερού",
    box1: "συλλέγει νερό από περισσότερα από 50 γειτονικά σημεία",
    box2: "συλλέγει νερό από περισσότερα από 20 γειτονικά σημεία",
    box3: "συλλέγει νερό από περισσότερα από 10 γειτονικά σημεία"
  },
  error: {
    title: "Σφάλμα",
    message: "Δεν ήταν δυνατή η εκτέλεση της ανάλυσης επειδή η περιοχή ανάλυσης είναι πολύ μεγάλη. Σχεδιάστε μια μικρότερη περιοχή και δοκιμάστε ξανά."
  },
  uploadDialog: {
    title: "Μεταφόρτω��η στο MinIO",
    selectItems: "Επιλέξτε τα στοιχεία που θέλετε να μεταφορτώσετε.",
    geojsonLabel: "Η σχεδιασμένη γεωμετρία της περιοχής (GeoJSON)",
    geotiffResultLabel: "Αποτελέσματα ανάλυσης (GeoTIFF)",
    fileSuffixLabel: "Κατάληξη για ονόματα αρχείων",
    fileSuffixPlaceholder: "Αφήστε κενό για την προεπιλεγμένη κατάληξη",
    fileSuffixCurrent: "Αφήστε κενό για να χρησιμοποιηθεί αυτό:",
    requiredFilesLabel: "Η σύνοψη και οι παράμετροι απαιτούν υπάρχουσα αναφορά ή την επιλογή PDF."
  }
}, Eo = {
  terrainAnalysis: To
}, mt = "terrainAnalysis", vo = "1.0.0", Ao = "^6.1";
/*!
  * shared v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ye = typeof window < "u";
let De, st;
if (process.env.NODE_ENV !== "production") {
  const e = Ye && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (De = (t) => {
    e.mark(t);
  }, st = (t, n, r) => {
    e.measure(t, n, r), e.clearMarks(n), e.clearMarks(r);
  });
}
const So = /\{([0-9a-zA-Z]+)\}/g;
function Tn(e, ...t) {
  return t.length === 1 && Y(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(So, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const ze = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), No = (e, t, n) => Oo({ l: e, k: t, s: n }), Oo = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), _e = (e) => typeof e == "number" && isFinite(e), Io = (e) => _r(e) === "[object Date]", pt = (e) => _r(e) === "[object RegExp]", Ht = (e) => B(e) && Object.keys(e).length === 0, Se = Object.assign, Lo = Object.create, ee = (e = null) => Lo(e);
let Pn;
const We = () => Pn || (Pn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : ee());
function Dn(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const bo = Object.prototype.hasOwnProperty;
function xe(e, t) {
  return bo.call(e, t);
}
const me = Array.isArray, oe = (e) => typeof e == "function", R = (e) => typeof e == "string", re = (e) => typeof e == "boolean", Y = (e) => e !== null && typeof e == "object", wo = (e) => Y(e) && oe(e.then) && oe(e.catch), yr = Object.prototype.toString, _r = (e) => yr.call(e), B = (e) => {
  if (!Y(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, ko = (e) => e == null ? "" : me(e) || B(e) && e.toString === yr ? JSON.stringify(e, null, 2) : String(e);
function Co(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Fn = 2;
function Po(e, t = 0, n = e.length) {
  const r = e.split(/\r?\n/);
  let o = 0;
  const a = [];
  for (let i = 0; i < r.length; i++)
    if (o += r[i].length + 1, o >= t) {
      for (let c = i - Fn; c <= i + Fn || n > o; c++) {
        if (c < 0 || c >= r.length)
          continue;
        const l = c + 1;
        a.push(`${l}${" ".repeat(3 - String(l).length)}|  ${r[c]}`);
        const d = r[c].length;
        if (c === i) {
          const f = t - (o - d) + 1, m = Math.max(1, n > o ? d - f : n - t);
          a.push("   |  " + " ".repeat(f) + "^".repeat(m));
        } else if (c > i) {
          if (n > o) {
            const f = Math.max(Math.min(n - o, d), 1);
            a.push("   |  " + "^".repeat(f));
          }
          o += d + 1;
        }
      }
      break;
    }
  return a.join(`
`);
}
function Bt(e) {
  let t = e;
  return () => ++t;
}
function Xe(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Rn = {};
function hr(e) {
  Rn[e] || (Rn[e] = !0, Xe(e));
}
function Do() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, r) {
      const o = e.get(n);
      o && o.push(r) || e.set(n, [r]);
    },
    off(n, r) {
      const o = e.get(n);
      o && o.splice(o.indexOf(r) >>> 0, 1);
    },
    emit(n, r) {
      (e.get(n) || []).slice().map((o) => o(r)), (e.get("*") || []).slice().map((o) => o(n, r));
    }
  };
}
const wt = (e) => !Y(e) || me(e);
function Ft(e, t) {
  if (wt(e) || wt(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: r, des: o } = n.pop();
    Object.keys(r).forEach((a) => {
      a !== "__proto__" && (Y(r[a]) && !Y(o[a]) && (o[a] = Array.isArray(r[a]) ? [] : ee()), wt(o[a]) || wt(r[a]) ? o[a] = r[a] : n.push({ src: r[a], des: o[a] }));
    });
  }
}
/*!
  * message-compiler v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Fo(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ut(e, t, n) {
  return { start: e, end: t };
}
const Ro = /\{([0-9a-zA-Z]+)\}/g;
function Tr(e, ...t) {
  return t.length === 1 && Mo(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Ro, (n, r) => t.hasOwnProperty(r) ? t[r] : "");
}
const Er = Object.assign, Mn = (e) => typeof e == "string", Mo = (e) => e !== null && typeof e == "object";
function vr(e, t = "") {
  return e.reduce((n, r, o) => o === 0 ? n + r : n + t + r, "");
}
const Kt = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, Go = {
  [Kt.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function Uo(e, t, ...n) {
  const r = Tr(Go[e], ...n || []), o = { message: String(r), code: e };
  return t && (o.location = t), o;
}
const x = {
  // tokenizer error codes
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  // parser error codes
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  // generator error codes
  UNHANDLED_CODEGEN_NODE_TYPE: 15,
  // minifier error codes
  UNHANDLED_MINIFIER_NODE_TYPE: 16,
  // Special value for higher-order compilers to pick up the last code
  // to avoid collision of error codes. This should always be kept as the last
  // item.
  __EXTEND_POINT__: 17
}, xo = {
  // tokenizer error messages
  [x.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [x.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [x.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [x.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [x.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [x.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [x.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [x.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [x.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [x.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [x.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [x.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [x.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [x.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [x.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [x.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function _t(e, t, n = {}) {
  const { domain: r, messages: o, args: a } = n, i = Tr((o || xo)[e] || "", ...a || []), c = new SyntaxError(String(i));
  return c.code = e, t && (c.location = t), c.domain = r, c;
}
function Vo(e) {
  throw e;
}
const $o = /<\/?[\w\s="/.':;#-\/]+>/, jo = (e) => $o.test(e), Be = " ", Ho = "\r", Ne = `
`, Bo = "\u2028", Ko = "\u2029";
function Wo(e) {
  const t = e;
  let n = 0, r = 1, o = 1, a = 0;
  const i = (A) => t[A] === Ho && t[A + 1] === Ne, c = (A) => t[A] === Ne, l = (A) => t[A] === Ko, d = (A) => t[A] === Bo, f = (A) => i(A) || c(A) || l(A) || d(A), m = () => n, g = () => r, T = () => o, L = () => a, O = (A) => i(A) || l(A) || d(A) ? Ne : t[A], P = () => O(n), D = () => O(n + a);
  function F() {
    return a = 0, f(n) && (r++, o = 0), i(n) && n++, n++, o++, t[n];
  }
  function p() {
    return i(n + a) && a++, a++, t[n + a];
  }
  function E() {
    n = 0, r = 1, o = 1, a = 0;
  }
  function _(A = 0) {
    a = A;
  }
  function y() {
    const A = n + a;
    for (; A !== n; )
      F();
    a = 0;
  }
  return {
    index: m,
    line: g,
    column: T,
    peekOffset: L,
    charAt: O,
    currentChar: P,
    currentPeek: D,
    next: F,
    peek: p,
    reset: E,
    resetPeek: _,
    skipToPeek: y
  };
}
const Qe = void 0, Yo = ".", Gn = "'", zo = "tokenizer";
function Xo(e, t = {}) {
  const n = t.location !== !1, r = Wo(e), o = () => r.index(), a = () => Fo(r.line(), r.column(), r.index()), i = a(), c = o(), l = {
    currentType: 14,
    offset: c,
    startLoc: i,
    endLoc: i,
    lastType: 14,
    lastOffset: c,
    lastStartLoc: i,
    lastEndLoc: i,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, d = () => l, { onError: f } = t;
  function m(s, u, N, ...M) {
    const le = d();
    if (u.column += N, u.offset += N, f) {
      const te = n ? Ut(le.startLoc, u) : null, Z = _t(s, te, {
        domain: zo,
        args: M
      });
      f(Z);
    }
  }
  function g(s, u, N) {
    s.endLoc = a(), s.currentType = u;
    const M = { type: u };
    return n && (M.loc = Ut(s.startLoc, s.endLoc)), N != null && (M.value = N), M;
  }
  const T = (s) => g(
    s,
    14
    /* TokenTypes.EOF */
  );
  function L(s, u) {
    return s.currentChar() === u ? (s.next(), u) : (m(x.EXPECTED_TOKEN, a(), 0, u), "");
  }
  function O(s) {
    let u = "";
    for (; s.currentPeek() === Be || s.currentPeek() === Ne; )
      u += s.currentPeek(), s.peek();
    return u;
  }
  function P(s) {
    const u = O(s);
    return s.skipToPeek(), u;
  }
  function D(s) {
    if (s === Qe)
      return !1;
    const u = s.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u === 95;
  }
  function F(s) {
    if (s === Qe)
      return !1;
    const u = s.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function p(s, u) {
    const { currentType: N } = u;
    if (N !== 2)
      return !1;
    O(s);
    const M = D(s.currentPeek());
    return s.resetPeek(), M;
  }
  function E(s, u) {
    const { currentType: N } = u;
    if (N !== 2)
      return !1;
    O(s);
    const M = s.currentPeek() === "-" ? s.peek() : s.currentPeek(), le = F(M);
    return s.resetPeek(), le;
  }
  function _(s, u) {
    const { currentType: N } = u;
    if (N !== 2)
      return !1;
    O(s);
    const M = s.currentPeek() === Gn;
    return s.resetPeek(), M;
  }
  function y(s, u) {
    const { currentType: N } = u;
    if (N !== 8)
      return !1;
    O(s);
    const M = s.currentPeek() === ".";
    return s.resetPeek(), M;
  }
  function A(s, u) {
    const { currentType: N } = u;
    if (N !== 9)
      return !1;
    O(s);
    const M = D(s.currentPeek());
    return s.resetPeek(), M;
  }
  function v(s, u) {
    const { currentType: N } = u;
    if (!(N === 8 || N === 12))
      return !1;
    O(s);
    const M = s.currentPeek() === ":";
    return s.resetPeek(), M;
  }
  function S(s, u) {
    const { currentType: N } = u;
    if (N !== 10)
      return !1;
    const M = () => {
      const te = s.currentPeek();
      return te === "{" ? D(s.peek()) : te === "@" || te === "%" || te === "|" || te === ":" || te === "." || te === Be || !te ? !1 : te === Ne ? (s.peek(), M()) : $(s, !1);
    }, le = M();
    return s.resetPeek(), le;
  }
  function V(s) {
    O(s);
    const u = s.currentPeek() === "|";
    return s.resetPeek(), u;
  }
  function j(s) {
    const u = O(s), N = s.currentPeek() === "%" && s.peek() === "{";
    return s.resetPeek(), {
      isModulo: N,
      hasSpace: u.length > 0
    };
  }
  function $(s, u = !0) {
    const N = (le = !1, te = "", Z = !1) => {
      const h = s.currentPeek();
      return h === "{" ? te === "%" ? !1 : le : h === "@" || !h ? te === "%" ? !0 : le : h === "%" ? (s.peek(), N(le, "%", !0)) : h === "|" ? te === "%" || Z ? !0 : !(te === Be || te === Ne) : h === Be ? (s.peek(), N(!0, Be, Z)) : h === Ne ? (s.peek(), N(!0, Ne, Z)) : !0;
    }, M = N();
    return u && s.resetPeek(), M;
  }
  function z(s, u) {
    const N = s.currentChar();
    return N === Qe ? Qe : u(N) ? (s.next(), N) : null;
  }
  function he(s) {
    const u = s.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36;
  }
  function fe(s) {
    return z(s, he);
  }
  function Q(s) {
    const u = s.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36 || // $
    u === 45;
  }
  function ge(s) {
    return z(s, Q);
  }
  function W(s) {
    const u = s.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function ve(s) {
    return z(s, W);
  }
  function ae(s) {
    const u = s.charCodeAt(0);
    return u >= 48 && u <= 57 || // 0-9
    u >= 65 && u <= 70 || // A-F
    u >= 97 && u <= 102;
  }
  function Te(s) {
    return z(s, ae);
  }
  function ie(s) {
    let u = "", N = "";
    for (; u = ve(s); )
      N += u;
    return N;
  }
  function J(s) {
    P(s);
    const u = s.currentChar();
    return u !== "%" && m(x.EXPECTED_TOKEN, a(), 0, u), s.next(), "%";
  }
  function U(s) {
    let u = "";
    for (; ; ) {
      const N = s.currentChar();
      if (N === "{" || N === "}" || N === "@" || N === "|" || !N)
        break;
      if (N === "%")
        if ($(s))
          u += N, s.next();
        else
          break;
      else if (N === Be || N === Ne)
        if ($(s))
          u += N, s.next();
        else {
          if (V(s))
            break;
          u += N, s.next();
        }
      else
        u += N, s.next();
    }
    return u;
  }
  function b(s) {
    P(s);
    let u = "", N = "";
    for (; u = ge(s); )
      N += u;
    return s.currentChar() === Qe && m(x.UNTERMINATED_CLOSING_BRACE, a(), 0), N;
  }
  function C(s) {
    P(s);
    let u = "";
    return s.currentChar() === "-" ? (s.next(), u += `-${ie(s)}`) : u += ie(s), s.currentChar() === Qe && m(x.UNTERMINATED_CLOSING_BRACE, a(), 0), u;
  }
  function G(s) {
    return s !== Gn && s !== Ne;
  }
  function H(s) {
    P(s), L(s, "'");
    let u = "", N = "";
    for (; u = z(s, G); )
      u === "\\" ? N += q(s) : N += u;
    const M = s.currentChar();
    return M === Ne || M === Qe ? (m(x.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), M === Ne && (s.next(), L(s, "'")), N) : (L(s, "'"), N);
  }
  function q(s) {
    const u = s.currentChar();
    switch (u) {
      case "\\":
      case "'":
        return s.next(), `\\${u}`;
      case "u":
        return be(s, u, 4);
      case "U":
        return be(s, u, 6);
      default:
        return m(x.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, u), "";
    }
  }
  function be(s, u, N) {
    L(s, u);
    let M = "";
    for (let le = 0; le < N; le++) {
      const te = Te(s);
      if (!te) {
        m(x.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${u}${M}${s.currentChar()}`);
        break;
      }
      M += te;
    }
    return `\\${u}${M}`;
  }
  function Pe(s) {
    return s !== "{" && s !== "}" && s !== Be && s !== Ne;
  }
  function Me(s) {
    P(s);
    let u = "", N = "";
    for (; u = z(s, Pe); )
      N += u;
    return N;
  }
  function Ge(s) {
    let u = "", N = "";
    for (; u = fe(s); )
      N += u;
    return N;
  }
  function k(s) {
    const u = (N) => {
      const M = s.currentChar();
      return M === "{" || M === "%" || M === "@" || M === "|" || M === "(" || M === ")" || !M || M === Be ? N : (N += M, s.next(), u(N));
    };
    return u("");
  }
  function K(s) {
    P(s);
    const u = L(
      s,
      "|"
      /* TokenChars.Pipe */
    );
    return P(s), u;
  }
  function Je(s, u) {
    let N = null;
    switch (s.currentChar()) {
      case "{":
        return u.braceNest >= 1 && m(x.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), s.next(), N = g(
          u,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), P(s), u.braceNest++, N;
      case "}":
        return u.braceNest > 0 && u.currentType === 2 && m(x.EMPTY_PLACEHOLDER, a(), 0), s.next(), N = g(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), u.braceNest--, u.braceNest > 0 && P(s), u.inLinked && u.braceNest === 0 && (u.inLinked = !1), N;
      case "@":
        return u.braceNest > 0 && m(x.UNTERMINATED_CLOSING_BRACE, a(), 0), N = rt(s, u) || T(u), u.braceNest = 0, N;
      default: {
        let le = !0, te = !0, Z = !0;
        if (V(s))
          return u.braceNest > 0 && m(x.UNTERMINATED_CLOSING_BRACE, a(), 0), N = g(u, 1, K(s)), u.braceNest = 0, u.inLinked = !1, N;
        if (u.braceNest > 0 && (u.currentType === 5 || u.currentType === 6 || u.currentType === 7))
          return m(x.UNTERMINATED_CLOSING_BRACE, a(), 0), u.braceNest = 0, ht(s, u);
        if (le = p(s, u))
          return N = g(u, 5, b(s)), P(s), N;
        if (te = E(s, u))
          return N = g(u, 6, C(s)), P(s), N;
        if (Z = _(s, u))
          return N = g(u, 7, H(s)), P(s), N;
        if (!le && !te && !Z)
          return N = g(u, 13, Me(s)), m(x.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, N.value), P(s), N;
        break;
      }
    }
    return N;
  }
  function rt(s, u) {
    const { currentType: N } = u;
    let M = null;
    const le = s.currentChar();
    switch ((N === 8 || N === 9 || N === 12 || N === 10) && (le === Ne || le === Be) && m(x.INVALID_LINKED_FORMAT, a(), 0), le) {
      case "@":
        return s.next(), M = g(
          u,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), u.inLinked = !0, M;
      case ".":
        return P(s), s.next(), g(
          u,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return P(s), s.next(), g(
          u,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return V(s) ? (M = g(u, 1, K(s)), u.braceNest = 0, u.inLinked = !1, M) : y(s, u) || v(s, u) ? (P(s), rt(s, u)) : A(s, u) ? (P(s), g(u, 12, Ge(s))) : S(s, u) ? (P(s), le === "{" ? Je(s, u) || M : g(u, 11, k(s))) : (N === 8 && m(x.INVALID_LINKED_FORMAT, a(), 0), u.braceNest = 0, u.inLinked = !1, ht(s, u));
    }
  }
  function ht(s, u) {
    let N = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (u.braceNest > 0)
      return Je(s, u) || T(u);
    if (u.inLinked)
      return rt(s, u) || T(u);
    switch (s.currentChar()) {
      case "{":
        return Je(s, u) || T(u);
      case "}":
        return m(x.UNBALANCED_CLOSING_BRACE, a(), 0), s.next(), g(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return rt(s, u) || T(u);
      default: {
        if (V(s))
          return N = g(u, 1, K(s)), u.braceNest = 0, u.inLinked = !1, N;
        const { isModulo: le, hasSpace: te } = j(s);
        if (le)
          return te ? g(u, 0, U(s)) : g(u, 4, J(s));
        if ($(s))
          return g(u, 0, U(s));
        break;
      }
    }
    return N;
  }
  function Xt() {
    const { currentType: s, offset: u, startLoc: N, endLoc: M } = l;
    return l.lastType = s, l.lastOffset = u, l.lastStartLoc = N, l.lastEndLoc = M, l.offset = o(), l.startLoc = a(), r.currentChar() === Qe ? g(
      l,
      14
      /* TokenTypes.EOF */
    ) : ht(r, l);
  }
  return {
    nextToken: Xt,
    currentOffset: o,
    currentPosition: a,
    context: d
  };
}
const Jo = "parser", qo = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Zo(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const r = parseInt(t || n, 16);
      return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�";
    }
  }
}
function Qo(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: r } = e;
  function o(p, E, _, y, ...A) {
    const v = p.currentPosition();
    if (v.offset += y, v.column += y, n) {
      const S = t ? Ut(_, v) : null, V = _t(E, S, {
        domain: Jo,
        args: A
      });
      n(V);
    }
  }
  function a(p, E, _, y, ...A) {
    const v = p.currentPosition();
    if (v.offset += y, v.column += y, r) {
      const S = t ? Ut(_, v) : null;
      r(Uo(E, S, A));
    }
  }
  function i(p, E, _) {
    const y = { type: p };
    return t && (y.start = E, y.end = E, y.loc = { start: _, end: _ }), y;
  }
  function c(p, E, _, y) {
    t && (p.end = E, p.loc && (p.loc.end = _));
  }
  function l(p, E) {
    const _ = p.context(), y = i(3, _.offset, _.startLoc);
    return y.value = E, c(y, p.currentOffset(), p.currentPosition()), y;
  }
  function d(p, E) {
    const _ = p.context(), { lastOffset: y, lastStartLoc: A } = _, v = i(5, y, A);
    return v.index = parseInt(E, 10), p.nextToken(), c(v, p.currentOffset(), p.currentPosition()), v;
  }
  function f(p, E, _) {
    const y = p.context(), { lastOffset: A, lastStartLoc: v } = y, S = i(4, A, v);
    return S.key = E, _ === !0 && (S.modulo = !0), p.nextToken(), c(S, p.currentOffset(), p.currentPosition()), S;
  }
  function m(p, E) {
    const _ = p.context(), { lastOffset: y, lastStartLoc: A } = _, v = i(9, y, A);
    return v.value = E.replace(qo, Zo), p.nextToken(), c(v, p.currentOffset(), p.currentPosition()), v;
  }
  function g(p) {
    const E = p.nextToken(), _ = p.context(), { lastOffset: y, lastStartLoc: A } = _, v = i(8, y, A);
    return E.type !== 12 ? (o(p, x.UNEXPECTED_EMPTY_LINKED_MODIFIER, _.lastStartLoc, 0), v.value = "", c(v, y, A), {
      nextConsumeToken: E,
      node: v
    }) : (E.value == null && o(p, x.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, Ue(E)), v.value = E.value || "", c(v, p.currentOffset(), p.currentPosition()), {
      node: v
    });
  }
  function T(p, E) {
    const _ = p.context(), y = i(7, _.offset, _.startLoc);
    return y.value = E, c(y, p.currentOffset(), p.currentPosition()), y;
  }
  function L(p) {
    const E = p.context(), _ = i(6, E.offset, E.startLoc);
    let y = p.nextToken();
    if (y.type === 9) {
      const A = g(p);
      _.modifier = A.node, y = A.nextConsumeToken || p.nextToken();
    }
    switch (y.type !== 10 && o(p, x.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ue(y)), y = p.nextToken(), y.type === 2 && (y = p.nextToken()), y.type) {
      case 11:
        y.value == null && o(p, x.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ue(y)), _.key = T(p, y.value || "");
        break;
      case 5:
        y.value == null && o(p, x.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ue(y)), _.key = f(p, y.value || "");
        break;
      case 6:
        y.value == null && o(p, x.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ue(y)), _.key = d(p, y.value || "");
        break;
      case 7:
        y.value == null && o(p, x.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ue(y)), _.key = m(p, y.value || "");
        break;
      default: {
        o(p, x.UNEXPECTED_EMPTY_LINKED_KEY, E.lastStartLoc, 0);
        const A = p.context(), v = i(7, A.offset, A.startLoc);
        return v.value = "", c(v, A.offset, A.startLoc), _.key = v, c(_, A.offset, A.startLoc), {
          nextConsumeToken: y,
          node: _
        };
      }
    }
    return c(_, p.currentOffset(), p.currentPosition()), {
      node: _
    };
  }
  function O(p) {
    const E = p.context(), _ = E.currentType === 1 ? p.currentOffset() : E.offset, y = E.currentType === 1 ? E.endLoc : E.startLoc, A = i(2, _, y);
    A.items = [];
    let v = null, S = null;
    do {
      const $ = v || p.nextToken();
      switch (v = null, $.type) {
        case 0:
          $.value == null && o(p, x.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ue($)), A.items.push(l(p, $.value || ""));
          break;
        case 6:
          $.value == null && o(p, x.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ue($)), A.items.push(d(p, $.value || ""));
          break;
        case 4:
          S = !0;
          break;
        case 5:
          $.value == null && o(p, x.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ue($)), A.items.push(f(p, $.value || "", !!S)), S && (a(p, Kt.USE_MODULO_SYNTAX, E.lastStartLoc, 0, Ue($)), S = null);
          break;
        case 7:
          $.value == null && o(p, x.UNEXPECTED_LEXICAL_ANALYSIS, E.lastStartLoc, 0, Ue($)), A.items.push(m(p, $.value || ""));
          break;
        case 8: {
          const z = L(p);
          A.items.push(z.node), v = z.nextConsumeToken || null;
          break;
        }
      }
    } while (E.currentType !== 14 && E.currentType !== 1);
    const V = E.currentType === 1 ? E.lastOffset : p.currentOffset(), j = E.currentType === 1 ? E.lastEndLoc : p.currentPosition();
    return c(A, V, j), A;
  }
  function P(p, E, _, y) {
    const A = p.context();
    let v = y.items.length === 0;
    const S = i(1, E, _);
    S.cases = [], S.cases.push(y);
    do {
      const V = O(p);
      v || (v = V.items.length === 0), S.cases.push(V);
    } while (A.currentType !== 14);
    return v && o(p, x.MUST_HAVE_MESSAGES_IN_PLURAL, _, 0), c(S, p.currentOffset(), p.currentPosition()), S;
  }
  function D(p) {
    const E = p.context(), { offset: _, startLoc: y } = E, A = O(p);
    return E.currentType === 14 ? A : P(p, _, y, A);
  }
  function F(p) {
    const E = Xo(p, Er({}, e)), _ = E.context(), y = i(0, _.offset, _.startLoc);
    return t && y.loc && (y.loc.source = p), y.body = D(E), e.onCacheKey && (y.cacheKey = e.onCacheKey(p)), _.currentType !== 14 && o(E, x.UNEXPECTED_LEXICAL_ANALYSIS, _.lastStartLoc, 0, p[_.offset] || ""), c(y, E.currentOffset(), E.currentPosition()), y;
  }
  return { parse: F };
}
function Ue(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function ei(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Un(e, t) {
  for (let n = 0; n < e.length; n++)
    En(e[n], t);
}
function En(e, t) {
  switch (e.type) {
    case 1:
      Un(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Un(e.items, t);
      break;
    case 6: {
      En(e.key, t), t.helper(
        "linked"
        /* HelperNameMap.LINKED */
      ), t.helper(
        "type"
        /* HelperNameMap.TYPE */
      );
      break;
    }
    case 5:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "list"
        /* HelperNameMap.LIST */
      );
      break;
    case 4:
      t.helper(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      ), t.helper(
        "named"
        /* HelperNameMap.NAMED */
      );
      break;
  }
}
function ti(e, t = {}) {
  const n = ei(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && En(e.body, n);
  const r = n.context();
  e.helpers = Array.from(r.helpers);
}
function ni(e) {
  const t = e.body;
  return t.type === 2 ? xn(t) : t.cases.forEach((n) => xn(n)), e;
}
function xn(e) {
  if (e.items.length === 1) {
    const t = e.items[0];
    (t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
  } else {
    const t = [];
    for (let n = 0; n < e.items.length; n++) {
      const r = e.items[n];
      if (!(r.type === 3 || r.type === 9) || r.value == null)
        break;
      t.push(r.value);
    }
    if (t.length === e.items.length) {
      e.static = vr(t);
      for (let n = 0; n < e.items.length; n++) {
        const r = e.items[n];
        (r.type === 3 || r.type === 9) && delete r.value;
      }
    }
  }
}
const ri = "minifier";
function dt(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      dt(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let r = 0; r < n.length; r++)
        dt(n[r]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let r = 0; r < n.length; r++)
        dt(n[r]);
      t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
      break;
    }
    case 3:
    case 9:
    case 8:
    case 7: {
      const t = e;
      t.value && (t.v = t.value, delete t.value);
      break;
    }
    case 6: {
      const t = e;
      dt(t.key), t.k = t.key, delete t.key, t.modifier && (dt(t.modifier), t.m = t.modifier, delete t.modifier);
      break;
    }
    case 5: {
      const t = e;
      t.i = t.index, delete t.index;
      break;
    }
    case 4: {
      const t = e;
      t.k = t.key, delete t.key;
      break;
    }
    default:
      throw _t(x.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: ri,
        args: [e.type]
      });
  }
  delete e.type;
}
const ai = "parser";
function oi(e, t) {
  const { filename: n, breakLineCode: r, needIndent: o } = t, a = t.location !== !1, i = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: o,
    indentLevel: 0
  };
  a && e.loc && (i.source = e.loc.source);
  const c = () => i;
  function l(O, P) {
    i.code += O;
  }
  function d(O, P = !0) {
    const D = P ? r : "";
    l(o ? D + "  ".repeat(O) : D);
  }
  function f(O = !0) {
    const P = ++i.indentLevel;
    O && d(P);
  }
  function m(O = !0) {
    const P = --i.indentLevel;
    O && d(P);
  }
  function g() {
    d(i.indentLevel);
  }
  return {
    context: c,
    push: l,
    indent: f,
    deindent: m,
    newline: g,
    helper: (O) => `_${O}`,
    needIndent: () => i.needIndent
  };
}
function ii(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), yt(e, t.key), t.modifier ? (e.push(", "), yt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function li(e, t) {
  const { helper: n, needIndent: r } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(r());
  const o = t.items.length;
  for (let a = 0; a < o && (yt(e, t.items[a]), a !== o - 1); a++)
    e.push(", ");
  e.deindent(r()), e.push("])");
}
function si(e, t) {
  const { helper: n, needIndent: r } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(r());
    const o = t.cases.length;
    for (let a = 0; a < o && (yt(e, t.cases[a]), a !== o - 1); a++)
      e.push(", ");
    e.deindent(r()), e.push("])");
  }
}
function ci(e, t) {
  t.body ? yt(e, t.body) : e.push("null");
}
function yt(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      ci(e, t);
      break;
    case 1:
      si(e, t);
      break;
    case 2:
      li(e, t);
      break;
    case 6:
      ii(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "list"
        /* HelperNameMap.LIST */
      )}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n(
        "interpolate"
        /* HelperNameMap.INTERPOLATE */
      )}(${n(
        "named"
        /* HelperNameMap.NAMED */
      )}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      throw _t(x.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: ai,
        args: [t.type]
      });
  }
}
const ui = (e, t = {}) => {
  const n = Mn(t.mode) ? t.mode : "normal", r = Mn(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, a = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], c = oi(e, {
    filename: r,
    breakLineCode: o,
    needIndent: a
  });
  c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(a), i.length > 0 && (c.push(`const { ${vr(i.map((f) => `${f}: _${f}`), ", ")} } = ctx`), c.newline()), c.push("return "), yt(c, e), c.deindent(a), c.push("}"), delete e.helpers;
  const { code: l, map: d } = c.context();
  return {
    ast: e,
    code: l,
    map: d ? d.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function fi(e, t = {}) {
  const n = Er({}, t), r = !!n.jit, o = !!n.minify, a = n.optimize == null ? !0 : n.optimize, c = Qo(n).parse(e);
  return r ? (a && ni(c), o && dt(c), { ast: c, code: "" }) : (ti(c, n), ui(c, n));
}
/*!
  * core-base v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function di() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (We().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (We().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (We().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Ve(e) {
  return Y(e) && vn(e) === 0 && (xe(e, "b") || xe(e, "body"));
}
const Ar = ["b", "body"];
function mi(e) {
  return tt(e, Ar);
}
const Sr = ["c", "cases"];
function gi(e) {
  return tt(e, Sr, []);
}
const Nr = ["s", "static"];
function pi(e) {
  return tt(e, Nr);
}
const Or = ["i", "items"];
function yi(e) {
  return tt(e, Or, []);
}
const Ir = ["t", "type"];
function vn(e) {
  return tt(e, Ir);
}
const Lr = ["v", "value"];
function kt(e, t) {
  const n = tt(e, Lr);
  if (n != null)
    return n;
  throw At(t);
}
const br = ["m", "modifier"];
function _i(e) {
  return tt(e, br);
}
const wr = ["k", "key"];
function hi(e) {
  const t = tt(e, wr);
  if (t)
    return t;
  throw At(
    6
    /* NodeTypes.Linked */
  );
}
function tt(e, t, n) {
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (xe(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const kr = [
  ...Ar,
  ...Sr,
  ...Nr,
  ...Or,
  ...wr,
  ...br,
  ...Lr,
  ...Ir
];
function At(e) {
  return new Error(`unhandled node type: ${e}`);
}
const nt = [];
nt[
  0
  /* States.BEFORE_PATH */
] = {
  w: [
    0
    /* States.BEFORE_PATH */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
nt[
  1
  /* States.IN_PATH */
] = {
  w: [
    1
    /* States.IN_PATH */
  ],
  ".": [
    2
    /* States.BEFORE_IDENT */
  ],
  "[": [
    4
    /* States.IN_SUB_PATH */
  ],
  o: [
    7
    /* States.AFTER_PATH */
  ]
};
nt[
  2
  /* States.BEFORE_IDENT */
] = {
  w: [
    2
    /* States.BEFORE_IDENT */
  ],
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ]
};
nt[
  3
  /* States.IN_IDENT */
] = {
  i: [
    3,
    0
    /* Actions.APPEND */
  ],
  0: [
    3,
    0
    /* Actions.APPEND */
  ],
  w: [
    1,
    1
    /* Actions.PUSH */
  ],
  ".": [
    2,
    1
    /* Actions.PUSH */
  ],
  "[": [
    4,
    1
    /* Actions.PUSH */
  ],
  o: [
    7,
    1
    /* Actions.PUSH */
  ]
};
nt[
  4
  /* States.IN_SUB_PATH */
] = {
  "'": [
    5,
    0
    /* Actions.APPEND */
  ],
  '"': [
    6,
    0
    /* Actions.APPEND */
  ],
  "[": [
    4,
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ],
  "]": [
    1,
    3
    /* Actions.PUSH_SUB_PATH */
  ],
  o: 8,
  l: [
    4,
    0
    /* Actions.APPEND */
  ]
};
nt[
  5
  /* States.IN_SINGLE_QUOTE */
] = {
  "'": [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    5,
    0
    /* Actions.APPEND */
  ]
};
nt[
  6
  /* States.IN_DOUBLE_QUOTE */
] = {
  '"': [
    4,
    0
    /* Actions.APPEND */
  ],
  o: 8,
  l: [
    6,
    0
    /* Actions.APPEND */
  ]
};
const Ti = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Ei(e) {
  return Ti.test(e);
}
function vi(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Ai(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function Si(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Ei(t) ? vi(t) : "*" + t;
}
function Ni(e) {
  const t = [];
  let n = -1, r = 0, o = 0, a, i, c, l, d, f, m;
  const g = [];
  g[
    0
    /* Actions.APPEND */
  ] = () => {
    i === void 0 ? i = c : i += c;
  }, g[
    1
    /* Actions.PUSH */
  ] = () => {
    i !== void 0 && (t.push(i), i = void 0);
  }, g[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    g[
      0
      /* Actions.APPEND */
    ](), o++;
  }, g[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (o > 0)
      o--, r = 4, g[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (o = 0, i === void 0 || (i = Si(i), i === !1))
        return !1;
      g[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function T() {
    const L = e[n + 1];
    if (r === 5 && L === "'" || r === 6 && L === '"')
      return n++, c = "\\" + L, g[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; r !== null; )
    if (n++, a = e[n], !(a === "\\" && T())) {
      if (l = Ai(a), m = nt[r], d = m[l] || m.l || 8, d === 8 || (r = d[0], d[1] !== void 0 && (f = g[d[1]], f && (c = a, f() === !1))))
        return;
      if (r === 7)
        return t;
    }
}
const Vn = /* @__PURE__ */ new Map();
function Oi(e, t) {
  return Y(e) ? e[t] : null;
}
function Ii(e, t) {
  if (!Y(e))
    return null;
  let n = Vn.get(t);
  if (n || (n = Ni(t), n && Vn.set(t, n)), !n)
    return null;
  const r = n.length;
  let o = e, a = 0;
  for (; a < r; ) {
    const i = n[a];
    if (kr.includes(i) && Ve(o))
      return null;
    const c = o[i];
    if (c === void 0 || oe(o))
      return null;
    o = c, a++;
  }
  return o;
}
const Li = (e) => e, bi = (e) => "", wi = "text", ki = (e) => e.length === 0 ? "" : Co(e), Ci = ko;
function $n(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Pi(e) {
  const t = _e(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (_e(e.named.count) || _e(e.named.n)) ? _e(e.named.count) ? e.named.count : _e(e.named.n) ? e.named.n : t : t;
}
function Di(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Fi(e = {}) {
  const t = e.locale, n = Pi(e), r = Y(e.pluralRules) && R(t) && oe(e.pluralRules[t]) ? e.pluralRules[t] : $n, o = Y(e.pluralRules) && R(t) && oe(e.pluralRules[t]) ? $n : void 0, a = (D) => D[r(n, D.length, o)], i = e.list || [], c = (D) => i[D], l = e.named || ee();
  _e(e.pluralIndex) && Di(n, l);
  const d = (D) => l[D];
  function f(D) {
    const F = oe(e.messages) ? e.messages(D) : Y(e.messages) ? e.messages[D] : !1;
    return F || (e.parent ? e.parent.message(D) : bi);
  }
  const m = (D) => e.modifiers ? e.modifiers[D] : Li, g = B(e.processor) && oe(e.processor.normalize) ? e.processor.normalize : ki, T = B(e.processor) && oe(e.processor.interpolate) ? e.processor.interpolate : Ci, L = B(e.processor) && R(e.processor.type) ? e.processor.type : wi, P = {
    list: c,
    named: d,
    plural: a,
    linked: (D, ...F) => {
      const [p, E] = F;
      let _ = "text", y = "";
      F.length === 1 ? Y(p) ? (y = p.modifier || y, _ = p.type || _) : R(p) && (y = p || y) : F.length === 2 && (R(p) && (y = p || y), R(E) && (_ = E || _));
      const A = f(D)(P), v = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        _ === "vnode" && me(A) && y ? A[0] : A
      );
      return y ? m(y)(v, _) : v;
    },
    message: f,
    type: L,
    interpolate: T,
    normalize: g,
    values: Se(ee(), i, l)
  };
  return P;
}
let St = null;
function Ri(e) {
  St = e;
}
function Mi(e, t, n) {
  St && St.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Gi = /* @__PURE__ */ Ui(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function Ui(e) {
  return (t) => St && St.emit(e, t);
}
const Cr = Kt.__EXTEND_POINT__, ot = Bt(Cr), Ie = {
  NOT_FOUND_KEY: Cr,
  // 2
  FALLBACK_TO_TRANSLATE: ot(),
  // 3
  CANNOT_FORMAT_NUMBER: ot(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: ot(),
  // 5
  CANNOT_FORMAT_DATE: ot(),
  // 6
  FALLBACK_TO_DATE_FORMAT: ot(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: ot(),
  // 8
  __EXTEND_POINT__: ot()
  // 9
}, xi = {
  [Ie.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Ie.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Ie.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Ie.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Ie.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Ie.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [Ie.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function ct(e, ...t) {
  return Tn(xi[e], ...t);
}
const Pr = x.__EXTEND_POINT__, it = Bt(Pr), ye = {
  INVALID_ARGUMENT: Pr,
  // 17
  INVALID_DATE_ARGUMENT: it(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: it(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: it(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: it(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: it(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: it(),
  // 23
  __EXTEND_POINT__: it()
  // 24
};
function He(e) {
  return _t(e, null, process.env.NODE_ENV !== "production" ? { messages: Vi } : void 0);
}
const Vi = {
  [ye.INVALID_ARGUMENT]: "Invalid arguments",
  [ye.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [ye.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [ye.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [ye.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [ye.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [ye.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function An(e, t) {
  return t.locale != null ? jn(t.locale) : jn(e.locale);
}
let qt;
function jn(e) {
  if (R(e))
    return e;
  if (oe(e)) {
    if (e.resolvedOnce && qt != null)
      return qt;
    if (e.constructor.name === "Function") {
      const t = e();
      if (wo(t))
        throw He(ye.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return qt = t;
    } else
      throw He(ye.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw He(ye.NOT_SUPPORT_LOCALE_TYPE);
}
function $i(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...me(t) ? t : Y(t) ? Object.keys(t) : R(t) ? [t] : [n]
  ])];
}
function Dr(e, t, n) {
  const r = R(n) ? n : Nt, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let a = o.__localeChainCache.get(r);
  if (!a) {
    a = [];
    let i = [n];
    for (; me(i); )
      i = Hn(a, i, t);
    const c = me(t) || !B(t) ? t : t.default ? t.default : null;
    i = R(c) ? [c] : c, me(i) && Hn(a, i, !1), o.__localeChainCache.set(r, a);
  }
  return a;
}
function Hn(e, t, n) {
  let r = !0;
  for (let o = 0; o < t.length && re(r); o++) {
    const a = t[o];
    R(a) && (r = ji(e, t[o], n));
  }
  return r;
}
function ji(e, t, n) {
  let r;
  const o = t.split("-");
  do {
    const a = o.join("-");
    r = Hi(e, a, n), o.splice(-1, 1);
  } while (o.length && r === !0);
  return r;
}
function Hi(e, t, n) {
  let r = !1;
  if (!e.includes(t) && (r = !0, t)) {
    r = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (me(n) || B(n)) && n[o] && (r = n[o]);
  }
  return r;
}
const Bi = "9.14.4", Wt = -1, Nt = "en-US", xt = "", Bn = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Ki() {
  return {
    upper: (e, t) => t === "text" && R(e) ? e.toUpperCase() : t === "vnode" && Y(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && R(e) ? e.toLowerCase() : t === "vnode" && Y(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && R(e) ? Bn(e) : t === "vnode" && Y(e) && "__v_isVNode" in e ? Bn(e.children) : e
  };
}
let Fr;
function Kn(e) {
  Fr = e;
}
let Rr;
function Wi(e) {
  Rr = e;
}
let Mr;
function Yi(e) {
  Mr = e;
}
let Gr = null;
const zi = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Gr = e;
}, Xi = /* @__NO_SIDE_EFFECTS__ */ () => Gr;
let Ur = null;
const Wn = (e) => {
  Ur = e;
}, Ji = () => Ur;
let Yn = 0;
function qi(e = {}) {
  const t = oe(e.onWarn) ? e.onWarn : Xe, n = R(e.version) ? e.version : Bi, r = R(e.locale) || oe(e.locale) ? e.locale : Nt, o = oe(r) ? Nt : r, a = me(e.fallbackLocale) || B(e.fallbackLocale) || R(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, i = B(e.messages) ? e.messages : Zt(o), c = B(e.datetimeFormats) ? e.datetimeFormats : Zt(o), l = B(e.numberFormats) ? e.numberFormats : Zt(o), d = Se(ee(), e.modifiers, Ki()), f = e.pluralRules || ee(), m = oe(e.missing) ? e.missing : null, g = re(e.missingWarn) || pt(e.missingWarn) ? e.missingWarn : !0, T = re(e.fallbackWarn) || pt(e.fallbackWarn) ? e.fallbackWarn : !0, L = !!e.fallbackFormat, O = !!e.unresolving, P = oe(e.postTranslation) ? e.postTranslation : null, D = B(e.processor) ? e.processor : null, F = re(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, p = !!e.escapeParameter, E = oe(e.messageCompiler) ? e.messageCompiler : Fr;
  process.env.NODE_ENV !== "production" && oe(e.messageCompiler) && hr(ct(Ie.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const _ = oe(e.messageResolver) ? e.messageResolver : Rr || Oi, y = oe(e.localeFallbacker) ? e.localeFallbacker : Mr || $i, A = Y(e.fallbackContext) ? e.fallbackContext : void 0, v = e, S = Y(v.__datetimeFormatters) ? v.__datetimeFormatters : /* @__PURE__ */ new Map(), V = Y(v.__numberFormatters) ? v.__numberFormatters : /* @__PURE__ */ new Map(), j = Y(v.__meta) ? v.__meta : {};
  Yn++;
  const $ = {
    version: n,
    cid: Yn,
    locale: r,
    fallbackLocale: a,
    messages: i,
    modifiers: d,
    pluralRules: f,
    missing: m,
    missingWarn: g,
    fallbackWarn: T,
    fallbackFormat: L,
    unresolving: O,
    postTranslation: P,
    processor: D,
    warnHtmlMessage: F,
    escapeParameter: p,
    messageCompiler: E,
    messageResolver: _,
    localeFallbacker: y,
    fallbackContext: A,
    onWarn: t,
    __meta: j
  };
  return $.datetimeFormats = c, $.numberFormats = l, $.__datetimeFormatters = S, $.__numberFormatters = V, process.env.NODE_ENV !== "production" && ($.__v_emitter = v.__v_emitter != null ? v.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Mi($, n, j), $;
}
const Zt = (e) => ({ [e]: ee() });
function Yt(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function xr(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Sn(e, t, n, r, o) {
  const { missing: a, onWarn: i } = e;
  if (process.env.NODE_ENV !== "production") {
    const c = e.__v_emitter;
    c && c.emit("missing", {
      locale: n,
      key: t,
      type: o,
      groupId: `${o}:${t}`
    });
  }
  if (a !== null) {
    const c = a(e, n, t, o);
    return R(c) ? c : t;
  } else
    return process.env.NODE_ENV !== "production" && xr(r, t) && i(ct(Ie.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Et(e, t, n) {
  const r = e;
  r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Vr(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function Zi(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let r = n + 1; r < t.length; r++)
    if (Vr(e, t[r]))
      return !0;
  return !1;
}
function Qt(e) {
  return (n) => Qi(n, e);
}
function Qi(e, t) {
  const n = mi(t);
  if (n == null)
    throw At(
      0
      /* NodeTypes.Resource */
    );
  if (vn(n) === 1) {
    const a = gi(n);
    return e.plural(a.reduce((i, c) => [
      ...i,
      zn(e, c)
    ], []));
  } else
    return zn(e, n);
}
function zn(e, t) {
  const n = pi(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const r = yi(t).reduce((o, a) => [...o, an(e, a)], []);
    return e.normalize(r);
  }
}
function an(e, t) {
  const n = vn(t);
  switch (n) {
    case 3:
      return kt(t, n);
    case 9:
      return kt(t, n);
    case 4: {
      const r = t;
      if (xe(r, "k") && r.k)
        return e.interpolate(e.named(r.k));
      if (xe(r, "key") && r.key)
        return e.interpolate(e.named(r.key));
      throw At(n);
    }
    case 5: {
      const r = t;
      if (xe(r, "i") && _e(r.i))
        return e.interpolate(e.list(r.i));
      if (xe(r, "index") && _e(r.index))
        return e.interpolate(e.list(r.index));
      throw At(n);
    }
    case 6: {
      const r = t, o = _i(r), a = hi(r);
      return e.linked(an(e, a), o ? an(e, o) : void 0, e.type);
    }
    case 7:
      return kt(t, n);
    case 8:
      return kt(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const el = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function $r(e, t) {
  t && jo(e) && Xe(Tn(el, { source: e }));
}
const jr = (e) => e;
let gt = ee();
function Hr(e) {
  e.code === Kt.USE_MODULO_SYNTAX && Xe(`The use of named interpolation with modulo syntax is deprecated. It will be removed in v10.
reference: https://vue-i18n.intlify.dev/guide/essentials/syntax#rails-i18n-format 
(message compiler warning message: ${e.message})`);
}
function Br(e, t = {}) {
  let n = !1;
  const r = t.onError || Vo;
  return t.onError = (o) => {
    n = !0, r(o);
  }, { ...fi(e, t), detectError: n };
}
const tl = /* @__NO_SIDE_EFFECTS__ */ (e, t) => {
  if (!R(e))
    throw He(ye.NOT_SUPPORT_NON_STRING_MESSAGE);
  process.env.NODE_ENV !== "production" && (t.onWarn = Hr);
  {
    const n = re(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && $r(e, n);
    const o = (t.onCacheKey || jr)(e), a = gt[o];
    if (a)
      return a;
    const { code: i, detectError: c } = Br(e, t), l = new Function(`return ${i}`)();
    return c ? l : gt[o] = l;
  }
};
function nl(e, t) {
  if (process.env.NODE_ENV !== "production" && (t.onWarn = Hr), __INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && R(e)) {
    const n = re(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && $r(e, n);
    const o = (t.onCacheKey || jr)(e), a = gt[o];
    if (a)
      return a;
    const { ast: i, detectError: c } = Br(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), l = Qt(i);
    return c ? l : gt[o] = l;
  } else {
    if (process.env.NODE_ENV !== "production" && !Ve(e))
      return Xe(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const r = gt[n];
      return r || (gt[n] = Qt(e));
    } else
      return Qt(e);
  }
}
const Xn = () => "", Re = (e) => oe(e);
function Jn(e, ...t) {
  const { fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: a, fallbackLocale: i, messages: c } = e, [l, d] = on(...t), f = re(d.missingWarn) ? d.missingWarn : e.missingWarn, m = re(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, g = re(d.escapeParameter) ? d.escapeParameter : e.escapeParameter, T = !!d.resolvedMessage, L = R(d.default) || re(d.default) ? re(d.default) ? a ? l : () => l : d.default : n ? a ? l : () => l : "", O = n || L !== "", P = An(e, d);
  g && rl(d);
  let [D, F, p] = T ? [
    l,
    P,
    c[P] || ee()
  ] : Kr(e, l, P, i, m, f), E = D, _ = l;
  if (!T && !(R(E) || Ve(E) || Re(E)) && O && (E = L, _ = E), !T && (!(R(E) || Ve(E) || Re(E)) || !R(F)))
    return o ? Wt : l;
  if (process.env.NODE_ENV !== "production" && R(E) && e.messageCompiler == null)
    return Xe(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let y = !1;
  const A = () => {
    y = !0;
  }, v = Re(E) ? E : Wr(e, l, F, E, _, A);
  if (y)
    return E;
  const S = ll(e, F, p, d), V = Fi(S), j = al(e, v, V), $ = r ? r(j, l) : j;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const z = {
      timestamp: Date.now(),
      key: R(l) ? l : Re(E) ? E.key : "",
      locale: F || (Re(E) ? E.locale : ""),
      format: R(E) ? E : Re(E) ? E.source : "",
      message: $
    };
    z.meta = Se({}, e.__meta, /* @__PURE__ */ Xi() || {}), Gi(z);
  }
  return $;
}
function rl(e) {
  me(e.list) ? e.list = e.list.map((t) => R(t) ? Dn(t) : t) : Y(e.named) && Object.keys(e.named).forEach((t) => {
    R(e.named[t]) && (e.named[t] = Dn(e.named[t]));
  });
}
function Kr(e, t, n, r, o, a) {
  const { messages: i, onWarn: c, messageResolver: l, localeFallbacker: d } = e, f = d(e, r, n);
  let m = ee(), g, T = null, L = n, O = null;
  const P = "translate";
  for (let D = 0; D < f.length; D++) {
    if (g = O = f[D], process.env.NODE_ENV !== "production" && n !== g && !Vr(n, g) && Yt(o, t) && c(ct(Ie.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: g
    })), process.env.NODE_ENV !== "production" && n !== g) {
      const _ = e.__v_emitter;
      _ && _.emit("fallback", {
        type: P,
        key: t,
        from: L,
        to: O,
        groupId: `${P}:${t}`
      });
    }
    m = i[g] || ee();
    let F = null, p, E;
    if (process.env.NODE_ENV !== "production" && Ye && (F = window.performance.now(), p = "intlify-message-resolve-start", E = "intlify-message-resolve-end", De && De(p)), (T = l(m, t)) === null && (T = m[t]), process.env.NODE_ENV !== "production" && Ye) {
      const _ = window.performance.now(), y = e.__v_emitter;
      y && F && T && y.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: T,
        time: _ - F,
        groupId: `${P}:${t}`
      }), p && E && De && st && (De(E), st("intlify message resolve", p, E));
    }
    if (R(T) || Ve(T) || Re(T))
      break;
    if (!Zi(g, f)) {
      const _ = Sn(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        g,
        a,
        P
      );
      _ !== t && (T = _);
    }
    L = O;
  }
  return [T, g, m];
}
function Wr(e, t, n, r, o, a) {
  const { messageCompiler: i, warnHtmlMessage: c } = e;
  if (Re(r)) {
    const g = r;
    return g.locale = g.locale || n, g.key = g.key || t, g;
  }
  if (i == null) {
    const g = () => r;
    return g.locale = n, g.key = t, g;
  }
  let l = null, d, f;
  process.env.NODE_ENV !== "production" && Ye && (l = window.performance.now(), d = "intlify-message-compilation-start", f = "intlify-message-compilation-end", De && De(d));
  const m = i(r, ol(e, n, o, r, c, a));
  if (process.env.NODE_ENV !== "production" && Ye) {
    const g = window.performance.now(), T = e.__v_emitter;
    T && l && T.emit("message-compilation", {
      type: "message-compilation",
      message: r,
      time: g - l,
      groupId: `translate:${t}`
    }), d && f && De && st && (De(f), st("intlify message compilation", d, f));
  }
  return m.locale = n, m.key = t, m.source = r, m;
}
function al(e, t, n) {
  let r = null, o, a;
  process.env.NODE_ENV !== "production" && Ye && (r = window.performance.now(), o = "intlify-message-evaluation-start", a = "intlify-message-evaluation-end", De && De(o));
  const i = t(n);
  if (process.env.NODE_ENV !== "production" && Ye) {
    const c = window.performance.now(), l = e.__v_emitter;
    l && r && l.emit("message-evaluation", {
      type: "message-evaluation",
      value: i,
      time: c - r,
      groupId: `translate:${t.key}`
    }), o && a && De && st && (De(a), st("intlify message evaluation", o, a));
  }
  return i;
}
function on(...e) {
  const [t, n, r] = e, o = ee();
  if (!R(t) && !_e(t) && !Re(t) && !Ve(t))
    throw He(ye.INVALID_ARGUMENT);
  const a = _e(t) ? String(t) : (Re(t), t);
  return _e(n) ? o.plural = n : R(n) ? o.default = n : B(n) && !Ht(n) ? o.named = n : me(n) && (o.list = n), _e(r) ? o.plural = r : R(r) ? o.default = r : B(r) && Se(o, r), [a, o];
}
function ol(e, t, n, r, o, a) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (i) => {
      if (a && a(i), process.env.NODE_ENV !== "production") {
        const c = il(r), l = `Message compilation error: ${i.message}`, d = i.location && c && Po(c, i.location.start.offset, i.location.end.offset), f = e.__v_emitter;
        f && c && f.emit("compile-error", {
          message: c,
          error: i.message,
          start: i.location && i.location.start.offset,
          end: i.location && i.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(d ? `${l}
${d}` : l);
      } else
        throw i;
    },
    onCacheKey: (i) => No(t, n, i)
  };
}
function il(e) {
  if (R(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function ll(e, t, n, r) {
  const { modifiers: o, pluralRules: a, messageResolver: i, fallbackLocale: c, fallbackWarn: l, missingWarn: d, fallbackContext: f } = e, g = {
    locale: t,
    modifiers: o,
    pluralRules: a,
    messages: (T) => {
      let L = i(n, T);
      if (L == null && f) {
        const [, , O] = Kr(f, T, t, c, l, d);
        L = i(O, T);
      }
      if (R(L) || Ve(L)) {
        let O = !1;
        const D = Wr(e, T, t, L, T, () => {
          O = !0;
        });
        return O ? Xn : D;
      } else return Re(L) ? L : Xn;
    }
  };
  return e.processor && (g.processor = e.processor), r.list && (g.list = r.list), r.named && (g.named = r.named), _e(r.plural) && (g.pluralIndex = r.plural), g;
}
const qn = typeof Intl < "u", Yr = {
  dateTimeFormat: qn && typeof Intl.DateTimeFormat < "u",
  numberFormat: qn && typeof Intl.NumberFormat < "u"
};
function Zn(e, ...t) {
  const { datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: i } = e, { __datetimeFormatters: c } = e;
  if (process.env.NODE_ENV !== "production" && !Yr.dateTimeFormat)
    return a(ct(Ie.CANNOT_FORMAT_DATE)), xt;
  const [l, d, f, m] = ln(...t), g = re(f.missingWarn) ? f.missingWarn : e.missingWarn, T = re(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, L = !!f.part, O = An(e, f), P = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    O
  );
  if (!R(l) || l === "")
    return new Intl.DateTimeFormat(O, m).format(d);
  let D = {}, F, p = null, E = O, _ = null;
  const y = "datetime format";
  for (let S = 0; S < P.length; S++) {
    if (F = _ = P[S], process.env.NODE_ENV !== "production" && O !== F && Yt(T, l) && a(ct(Ie.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: F
    })), process.env.NODE_ENV !== "production" && O !== F) {
      const V = e.__v_emitter;
      V && V.emit("fallback", {
        type: y,
        key: l,
        from: E,
        to: _,
        groupId: `${y}:${l}`
      });
    }
    if (D = n[F] || {}, p = D[l], B(p))
      break;
    Sn(e, l, F, g, y), E = _;
  }
  if (!B(p) || !R(F))
    return r ? Wt : l;
  let A = `${F}__${l}`;
  Ht(m) || (A = `${A}__${JSON.stringify(m)}`);
  let v = c.get(A);
  return v || (v = new Intl.DateTimeFormat(F, Se({}, p, m)), c.set(A, v)), L ? v.formatToParts(d) : v.format(d);
}
const zr = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function ln(...e) {
  const [t, n, r, o] = e, a = ee();
  let i = ee(), c;
  if (R(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw He(ye.INVALID_ISO_DATE_ARGUMENT);
    const d = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    c = new Date(d);
    try {
      c.toISOString();
    } catch {
      throw He(ye.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (Io(t)) {
    if (isNaN(t.getTime()))
      throw He(ye.INVALID_DATE_ARGUMENT);
    c = t;
  } else if (_e(t))
    c = t;
  else
    throw He(ye.INVALID_ARGUMENT);
  return R(n) ? a.key = n : B(n) && Object.keys(n).forEach((l) => {
    zr.includes(l) ? i[l] = n[l] : a[l] = n[l];
  }), R(r) ? a.locale = r : B(r) && (i = r), B(o) && (i = o), [a.key || "", c, a, i];
}
function Qn(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__datetimeFormatters.has(a) && r.__datetimeFormatters.delete(a);
  }
}
function er(e, ...t) {
  const { numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: a, localeFallbacker: i } = e, { __numberFormatters: c } = e;
  if (process.env.NODE_ENV !== "production" && !Yr.numberFormat)
    return a(ct(Ie.CANNOT_FORMAT_NUMBER)), xt;
  const [l, d, f, m] = sn(...t), g = re(f.missingWarn) ? f.missingWarn : e.missingWarn, T = re(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, L = !!f.part, O = An(e, f), P = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    O
  );
  if (!R(l) || l === "")
    return new Intl.NumberFormat(O, m).format(d);
  let D = {}, F, p = null, E = O, _ = null;
  const y = "number format";
  for (let S = 0; S < P.length; S++) {
    if (F = _ = P[S], process.env.NODE_ENV !== "production" && O !== F && Yt(T, l) && a(ct(Ie.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: F
    })), process.env.NODE_ENV !== "production" && O !== F) {
      const V = e.__v_emitter;
      V && V.emit("fallback", {
        type: y,
        key: l,
        from: E,
        to: _,
        groupId: `${y}:${l}`
      });
    }
    if (D = n[F] || {}, p = D[l], B(p))
      break;
    Sn(e, l, F, g, y), E = _;
  }
  if (!B(p) || !R(F))
    return r ? Wt : l;
  let A = `${F}__${l}`;
  Ht(m) || (A = `${A}__${JSON.stringify(m)}`);
  let v = c.get(A);
  return v || (v = new Intl.NumberFormat(F, Se({}, p, m)), c.set(A, v)), L ? v.formatToParts(d) : v.format(d);
}
const Xr = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function sn(...e) {
  const [t, n, r, o] = e, a = ee();
  let i = ee();
  if (!_e(t))
    throw He(ye.INVALID_ARGUMENT);
  const c = t;
  return R(n) ? a.key = n : B(n) && Object.keys(n).forEach((l) => {
    Xr.includes(l) ? i[l] = n[l] : a[l] = n[l];
  }), R(r) ? a.locale = r : B(r) && (i = r), B(o) && (i = o), [a.key || "", c, a, i];
}
function tr(e, t, n) {
  const r = e;
  for (const o in n) {
    const a = `${t}__${o}`;
    r.__numberFormatters.has(a) && r.__numberFormatters.delete(a);
  }
}
di();
/*!
  * vue-i18n v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const sl = "9.14.4";
function cl() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (We().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (We().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (We().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (We().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (We().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Jr = Ie.__EXTEND_POINT__, Ke = Bt(Jr), ke = {
  FALLBACK_TO_ROOT: Jr,
  // 9
  NOT_SUPPORTED_PRESERVE: Ke(),
  // 10
  NOT_SUPPORTED_FORMATTER: Ke(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: Ke(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: Ke(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: Ke(),
  // 14
  NOT_FOUND_PARENT_SCOPE: Ke(),
  // 15
  IGNORE_OBJ_FLATTEN: Ke(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: Ke(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: Ke()
  // 18
}, ul = {
  [ke.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [ke.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [ke.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [ke.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [ke.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [ke.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [ke.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [ke.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [ke.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze",
  [ke.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG]: "'translateExistCompatible' option will be dropped in the next major version."
};
function Vt(e, ...t) {
  return Tn(ul[e], ...t);
}
const qr = ye.__EXTEND_POINT__, we = Bt(qr), se = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: qr,
  // 24
  // legacy module errors
  INVALID_ARGUMENT: we(),
  // 25
  // i18n module errors
  MUST_BE_CALL_SETUP_TOP: we(),
  // 26
  NOT_INSTALLED: we(),
  // 27
  NOT_AVAILABLE_IN_LEGACY_MODE: we(),
  // 28
  // directive module errors
  REQUIRED_VALUE: we(),
  // 29
  INVALID_VALUE: we(),
  // 30
  // vue-devtools errors
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: we(),
  // 31
  NOT_INSTALLED_WITH_PROVIDE: we(),
  // 32
  // unexpected error
  UNEXPECTED_ERROR: we(),
  // 33
  // not compatible legacy vue-i18n constructor
  NOT_COMPATIBLE_LEGACY_VUE_I18N: we(),
  // 34
  // bridge support vue 2.x only
  BRIDGE_SUPPORT_VUE_2_ONLY: we(),
  // 35
  // need to define `i18n` option in `allowComposition: true` and `useScope: 'local' at `useI18n``
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: we(),
  // 36
  // Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: we(),
  // 37
  // for enhancement
  __EXTEND_POINT__: we()
  // 38
};
function et(e, ...t) {
  return _t(e, null, process.env.NODE_ENV !== "production" ? { messages: fl, args: t } : void 0);
}
const fl = {
  [se.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [se.INVALID_ARGUMENT]: "Invalid argument",
  [se.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [se.NOT_INSTALLED]: "Need to install with `app.use` function",
  [se.UNEXPECTED_ERROR]: "Unexpected error",
  [se.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [se.REQUIRED_VALUE]: "Required in value: {0}",
  [se.INVALID_VALUE]: "Invalid value",
  [se.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [se.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [se.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [se.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [se.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [se.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, cn = /* @__PURE__ */ ze("__translateVNode"), un = /* @__PURE__ */ ze("__datetimeParts"), fn = /* @__PURE__ */ ze("__numberParts"), dn = /* @__PURE__ */ ze("__enableEmitter"), mn = /* @__PURE__ */ ze("__disableEmitter"), dl = ze("__setPluralRules"), Zr = /* @__PURE__ */ ze("__injectWithOption"), gn = /* @__PURE__ */ ze("__dispose");
function Ot(e) {
  if (!Y(e) || Ve(e))
    return e;
  for (const t in e)
    if (xe(e, t))
      if (!t.includes("."))
        Y(e[t]) && Ot(e[t]);
      else {
        const n = t.split("."), r = n.length - 1;
        let o = e, a = !1;
        for (let i = 0; i < r; i++) {
          if (n[i] === "__proto__")
            throw new Error(`unsafe key: ${n[i]}`);
          if (n[i] in o || (o[n[i]] = ee()), !Y(o[n[i]])) {
            process.env.NODE_ENV !== "production" && Xe(Vt(ke.IGNORE_OBJ_FLATTEN, {
              key: n[i]
            })), a = !0;
            break;
          }
          o = o[n[i]];
        }
        if (a || (Ve(o) ? kr.includes(n[r]) || delete e[t] : (o[n[r]] = e[t], delete e[t])), !Ve(o)) {
          const i = o[n[r]];
          Y(i) && Ot(i);
        }
      }
  return e;
}
function Nn(e, t) {
  const { messages: n, __i18n: r, messageResolver: o, flatJson: a } = t, i = B(n) ? n : me(r) ? ee() : { [e]: ee() };
  if (me(r) && r.forEach((c) => {
    if ("locale" in c && "resource" in c) {
      const { locale: l, resource: d } = c;
      l ? (i[l] = i[l] || ee(), Ft(d, i[l])) : Ft(d, i);
    } else
      R(c) && Ft(JSON.parse(c), i);
  }), o == null && a)
    for (const c in i)
      xe(i, c) && Ot(i[c]);
  return i;
}
function Qr(e) {
  return e.type;
}
function ml(e, t, n) {
  let r = Y(t.messages) ? t.messages : ee();
  "__i18nGlobal" in n && (r = Nn(e.locale.value, {
    messages: r,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(r);
  o.length && o.forEach((a) => {
    e.mergeLocaleMessage(a, r[a]);
  });
  {
    if (Y(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (Y(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function nr(e) {
  return ne(ka, null, e, 0);
}
const rr = "__INTLIFY_META__", ar = () => [], gl = () => !1;
let or = 0;
function ir(e) {
  return (t, n, r, o) => e(n, r, _n() || void 0, o);
}
const pl = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = _n();
  let t = null;
  return e && (t = Qr(e)[rr]) ? { [rr]: t } : null;
};
function yl(e = {}, t) {
  const { __root: n, __injectWithOption: r } = e, o = n === void 0, a = e.flatJson, i = Ye ? Oe : fr, c = !!e.translateExistCompatible;
  process.env.NODE_ENV !== "production" && c && hr(Vt(ke.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  let l = re(e.inheritLocale) ? e.inheritLocale : !0;
  const d = i(
    // prettier-ignore
    n && l ? n.locale.value : R(e.locale) ? e.locale : Nt
  ), f = i(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : R(e.fallbackLocale) || me(e.fallbackLocale) || B(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : d.value
  ), m = i(Nn(d.value, e)), g = i(B(e.datetimeFormats) ? e.datetimeFormats : { [d.value]: {} }), T = i(B(e.numberFormats) ? e.numberFormats : { [d.value]: {} });
  let L = n ? n.missingWarn : re(e.missingWarn) || pt(e.missingWarn) ? e.missingWarn : !0, O = n ? n.fallbackWarn : re(e.fallbackWarn) || pt(e.fallbackWarn) ? e.fallbackWarn : !0, P = n ? n.fallbackRoot : re(e.fallbackRoot) ? e.fallbackRoot : !0, D = !!e.fallbackFormat, F = oe(e.missing) ? e.missing : null, p = oe(e.missing) ? ir(e.missing) : null, E = oe(e.postTranslation) ? e.postTranslation : null, _ = n ? n.warnHtmlMessage : re(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter;
  const A = n ? n.modifiers : B(e.modifiers) ? e.modifiers : {};
  let v = e.pluralRules || n && n.pluralRules, S;
  S = (() => {
    o && Wn(null);
    const h = {
      version: sl,
      locale: d.value,
      fallbackLocale: f.value,
      messages: m.value,
      modifiers: A,
      pluralRules: v,
      missing: p === null ? void 0 : p,
      missingWarn: L,
      fallbackWarn: O,
      fallbackFormat: D,
      unresolving: !0,
      postTranslation: E === null ? void 0 : E,
      warnHtmlMessage: _,
      escapeParameter: y,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    h.datetimeFormats = g.value, h.numberFormats = T.value, h.__datetimeFormatters = B(S) ? S.__datetimeFormatters : void 0, h.__numberFormatters = B(S) ? S.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (h.__v_emitter = B(S) ? S.__v_emitter : void 0);
    const w = qi(h);
    return o && Wn(w), w;
  })(), Et(S, d.value, f.value);
  function j() {
    return [
      d.value,
      f.value,
      m.value,
      g.value,
      T.value
    ];
  }
  const $ = Le({
    get: () => d.value,
    set: (h) => {
      d.value = h, S.locale = d.value;
    }
  }), z = Le({
    get: () => f.value,
    set: (h) => {
      f.value = h, S.fallbackLocale = f.value, Et(S, d.value, h);
    }
  }), he = Le(() => m.value), fe = /* @__PURE__ */ Le(() => g.value), Q = /* @__PURE__ */ Le(() => T.value);
  function ge() {
    return oe(E) ? E : null;
  }
  function W(h) {
    E = h, S.postTranslation = h;
  }
  function ve() {
    return F;
  }
  function ae(h) {
    h !== null && (p = ir(h)), F = h, S.missing = p;
  }
  function Te(h, w) {
    return h !== "translate" || !w.resolvedMessage;
  }
  const ie = (h, w, X, ue, qe, It) => {
    j();
    let ut;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, o || (S.fallbackContext = n ? Ji() : void 0), ut = h(S);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, o || (S.fallbackContext = void 0);
    }
    if (X !== "translate exists" && // for not `te` (e.g `t`)
    _e(ut) && ut === Wt || X === "translate exists" && !ut) {
      const [at, sa] = w();
      if (process.env.NODE_ENV !== "production" && n && R(at) && Te(X, sa) && (P && (Yt(O, at) || xr(L, at)) && Xe(Vt(ke.FALLBACK_TO_ROOT, {
        key: at,
        type: X
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: bn } = S;
        bn && P && bn.emit("fallback", {
          type: X,
          key: at,
          to: "global",
          groupId: `${X}:${at}`
        });
      }
      return n && P ? ue(n) : qe(at);
    } else {
      if (It(ut))
        return ut;
      throw et(se.UNEXPECTED_RETURN_TYPE);
    }
  };
  function J(...h) {
    return ie((w) => Reflect.apply(Jn, null, [w, ...h]), () => on(...h), "translate", (w) => Reflect.apply(w.t, w, [...h]), (w) => w, (w) => R(w));
  }
  function U(...h) {
    const [w, X, ue] = h;
    if (ue && !Y(ue))
      throw et(se.INVALID_ARGUMENT);
    return J(w, X, Se({ resolvedMessage: !0 }, ue || {}));
  }
  function b(...h) {
    return ie((w) => Reflect.apply(Zn, null, [w, ...h]), () => ln(...h), "datetime format", (w) => Reflect.apply(w.d, w, [...h]), () => xt, (w) => R(w));
  }
  function C(...h) {
    return ie((w) => Reflect.apply(er, null, [w, ...h]), () => sn(...h), "number format", (w) => Reflect.apply(w.n, w, [...h]), () => xt, (w) => R(w));
  }
  function G(h) {
    return h.map((w) => R(w) || _e(w) || re(w) ? nr(String(w)) : w);
  }
  const q = {
    normalize: G,
    interpolate: (h) => h,
    type: "vnode"
  };
  function be(...h) {
    return ie(
      (w) => {
        let X;
        const ue = w;
        try {
          ue.processor = q, X = Reflect.apply(Jn, null, [ue, ...h]);
        } finally {
          ue.processor = null;
        }
        return X;
      },
      () => on(...h),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (w) => w[cn](...h),
      (w) => [nr(w)],
      (w) => me(w)
    );
  }
  function Pe(...h) {
    return ie(
      (w) => Reflect.apply(er, null, [w, ...h]),
      () => sn(...h),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (w) => w[fn](...h),
      ar,
      (w) => R(w) || me(w)
    );
  }
  function Me(...h) {
    return ie(
      (w) => Reflect.apply(Zn, null, [w, ...h]),
      () => ln(...h),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (w) => w[un](...h),
      ar,
      (w) => R(w) || me(w)
    );
  }
  function Ge(h) {
    v = h, S.pluralRules = v;
  }
  function k(h, w) {
    return ie(() => {
      if (!h)
        return !1;
      const X = R(w) ? w : d.value, ue = rt(X), qe = S.messageResolver(ue, h);
      return c ? qe != null : Ve(qe) || Re(qe) || R(qe);
    }, () => [h], "translate exists", (X) => Reflect.apply(X.te, X, [h, w]), gl, (X) => re(X));
  }
  function K(h) {
    let w = null;
    const X = Dr(S, f.value, d.value);
    for (let ue = 0; ue < X.length; ue++) {
      const qe = m.value[X[ue]] || {}, It = S.messageResolver(qe, h);
      if (It != null) {
        w = It;
        break;
      }
    }
    return w;
  }
  function Je(h) {
    const w = K(h);
    return w ?? (n ? n.tm(h) || {} : {});
  }
  function rt(h) {
    return m.value[h] || {};
  }
  function ht(h, w) {
    if (a) {
      const X = { [h]: w };
      for (const ue in X)
        xe(X, ue) && Ot(X[ue]);
      w = X[h];
    }
    m.value[h] = w, S.messages = m.value;
  }
  function Xt(h, w) {
    m.value[h] = m.value[h] || {};
    const X = { [h]: w };
    if (a)
      for (const ue in X)
        xe(X, ue) && Ot(X[ue]);
    w = X[h], Ft(w, m.value[h]), S.messages = m.value;
  }
  function s(h) {
    return g.value[h] || {};
  }
  function u(h, w) {
    g.value[h] = w, S.datetimeFormats = g.value, Qn(S, h, w);
  }
  function N(h, w) {
    g.value[h] = Se(g.value[h] || {}, w), S.datetimeFormats = g.value, Qn(S, h, w);
  }
  function M(h) {
    return T.value[h] || {};
  }
  function le(h, w) {
    T.value[h] = w, S.numberFormats = T.value, tr(S, h, w);
  }
  function te(h, w) {
    T.value[h] = Se(T.value[h] || {}, w), S.numberFormats = T.value, tr(S, h, w);
  }
  or++, n && Ye && (Cn(n.locale, (h) => {
    l && (d.value = h, S.locale = h, Et(S, d.value, f.value));
  }), Cn(n.fallbackLocale, (h) => {
    l && (f.value = h, S.fallbackLocale = h, Et(S, d.value, f.value));
  }));
  const Z = {
    id: or,
    locale: $,
    fallbackLocale: z,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(h) {
      l = h, h && n && (d.value = n.locale.value, f.value = n.fallbackLocale.value, Et(S, d.value, f.value));
    },
    get availableLocales() {
      return Object.keys(m.value).sort();
    },
    messages: he,
    get modifiers() {
      return A;
    },
    get pluralRules() {
      return v || {};
    },
    get isGlobal() {
      return o;
    },
    get missingWarn() {
      return L;
    },
    set missingWarn(h) {
      L = h, S.missingWarn = L;
    },
    get fallbackWarn() {
      return O;
    },
    set fallbackWarn(h) {
      O = h, S.fallbackWarn = O;
    },
    get fallbackRoot() {
      return P;
    },
    set fallbackRoot(h) {
      P = h;
    },
    get fallbackFormat() {
      return D;
    },
    set fallbackFormat(h) {
      D = h, S.fallbackFormat = D;
    },
    get warnHtmlMessage() {
      return _;
    },
    set warnHtmlMessage(h) {
      _ = h, S.warnHtmlMessage = h;
    },
    get escapeParameter() {
      return y;
    },
    set escapeParameter(h) {
      y = h, S.escapeParameter = h;
    },
    t: J,
    getLocaleMessage: rt,
    setLocaleMessage: ht,
    mergeLocaleMessage: Xt,
    getPostTranslationHandler: ge,
    setPostTranslationHandler: W,
    getMissingHandler: ve,
    setMissingHandler: ae,
    [dl]: Ge
  };
  return Z.datetimeFormats = fe, Z.numberFormats = Q, Z.rt = U, Z.te = k, Z.tm = Je, Z.d = b, Z.n = C, Z.getDateTimeFormat = s, Z.setDateTimeFormat = u, Z.mergeDateTimeFormat = N, Z.getNumberFormat = M, Z.setNumberFormat = le, Z.mergeNumberFormat = te, Z[Zr] = r, Z[cn] = be, Z[un] = Me, Z[fn] = Pe, process.env.NODE_ENV !== "production" && (Z[dn] = (h) => {
    S.__v_emitter = h;
  }, Z[mn] = () => {
    S.__v_emitter = void 0;
  }), Z;
}
const On = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    // NOTE: avoid https://github.com/microsoft/rushstack/issues/1050
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
    /* ComponentI18nScope */
  },
  i18n: {
    type: Object
  }
};
function _l({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [
    ...r,
    // prettier-ignore
    ...o.type === jt ? o.children : [o]
  ], []) : t.reduce((n, r) => {
    const o = e[r];
    return o && (n[r] = o()), n;
  }, ee());
}
function ea(e) {
  return jt;
}
Se({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validator: (e) => _e(e) || !isNaN(e)
  }
}, On);
function hl(e) {
  return me(e) && !R(e[0]);
}
function ta(e, t, n, r) {
  const { slots: o, attrs: a } = t;
  return () => {
    const i = { part: !0 };
    let c = ee();
    e.locale && (i.locale = e.locale), R(e.format) ? i.key = e.format : Y(e.format) && (R(e.format.key) && (i.key = e.format.key), c = Object.keys(e.format).reduce((g, T) => n.includes(T) ? Se(ee(), g, { [T]: e.format[T] }) : g, ee()));
    const l = r(e.value, i, c);
    let d = [i.key];
    me(l) ? d = l.map((g, T) => {
      const L = o[g.type], O = L ? L({ [g.type]: g.value, index: T, parts: l }) : [g.value];
      return hl(O) && (O[0].key = `${g.type}-${T}`), O;
    }) : R(l) && (d = [l]);
    const f = Se(ee(), a), m = R(e.tag) || Y(e.tag) ? e.tag : ea();
    return gr(m, f, d);
  };
}
Se({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, On);
Se({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, On);
function lr(e, t) {
}
const Tl = /* @__PURE__ */ ze("global-vue-i18n");
function zt(e = {}) {
  const t = _n();
  if (t == null)
    throw et(se.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw et(se.NOT_INSTALLED);
  const n = El(t), r = Al(n), o = Qr(t), a = vl(e, o);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw et(se.NOT_AVAILABLE_IN_LEGACY_MODE);
    return Il(t, a, r, e);
  }
  if (a === "global")
    return ml(r, e, o), r;
  if (a === "parent") {
    let l = Sl(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && Xe(Vt(ke.NOT_FOUND_PARENT_SCOPE)), l = r), l;
  }
  const i = n;
  let c = i.__getInstance(t);
  if (c == null) {
    const l = Se({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), c = yl(l), i.__composerExtend && (c[gn] = i.__composerExtend(c)), Ol(i, t, c), i.__setInstance(t, c);
  }
  return c;
}
function El(e) {
  {
    const t = hn(e.isCE ? Tl : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw et(e.isCE ? se.NOT_INSTALLED_WITH_PROVIDE : se.UNEXPECTED_ERROR);
    return t;
  }
}
function vl(e, t) {
  return Ht(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Al(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function Sl(e, t, n = !1) {
  let r = null;
  const o = t.root;
  let a = Nl(t, n);
  for (; a != null; ) {
    const i = e;
    if (e.mode === "composition")
      r = i.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const c = i.__getInstance(a);
      c != null && (r = c.__composer, n && r && !r[Zr] && (r = null));
    }
    if (r != null || o === a)
      break;
    a = a.parent;
  }
  return r;
}
function Nl(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Ol(e, t, n) {
  let r = null;
  dr(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, r = Do();
      const o = n;
      o[dn] && o[dn](r), r.on("*", lr);
    }
  }, t), mr(() => {
    const o = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (r && r.off("*", lr), o[mn] && o[mn](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const a = o[gn];
    a && (a(), delete o[gn]);
  }, t);
}
function Il(e, t, n, r = {}) {
  const o = t === "local", a = fr(null);
  if (o && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw et(se.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const i = re(r.inheritLocale) ? r.inheritLocale : !R(r.locale), c = Oe(
    // prettier-ignore
    !o || i ? n.locale.value : R(r.locale) ? r.locale : Nt
  ), l = Oe(
    // prettier-ignore
    !o || i ? n.fallbackLocale.value : R(r.fallbackLocale) || me(r.fallbackLocale) || B(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : c.value
  ), d = Oe(Nn(c.value, r)), f = Oe(B(r.datetimeFormats) ? r.datetimeFormats : { [c.value]: {} }), m = Oe(B(r.numberFormats) ? r.numberFormats : { [c.value]: {} }), g = o ? n.missingWarn : re(r.missingWarn) || pt(r.missingWarn) ? r.missingWarn : !0, T = o ? n.fallbackWarn : re(r.fallbackWarn) || pt(r.fallbackWarn) ? r.fallbackWarn : !0, L = o ? n.fallbackRoot : re(r.fallbackRoot) ? r.fallbackRoot : !0, O = !!r.fallbackFormat, P = oe(r.missing) ? r.missing : null, D = oe(r.postTranslation) ? r.postTranslation : null, F = o ? n.warnHtmlMessage : re(r.warnHtmlMessage) ? r.warnHtmlMessage : !0, p = !!r.escapeParameter, E = o ? n.modifiers : B(r.modifiers) ? r.modifiers : {}, _ = r.pluralRules || o && n.pluralRules;
  function y() {
    return [
      c.value,
      l.value,
      d.value,
      f.value,
      m.value
    ];
  }
  const A = Le({
    get: () => a.value ? a.value.locale.value : c.value,
    set: (k) => {
      a.value && (a.value.locale.value = k), c.value = k;
    }
  }), v = Le({
    get: () => a.value ? a.value.fallbackLocale.value : l.value,
    set: (k) => {
      a.value && (a.value.fallbackLocale.value = k), l.value = k;
    }
  }), S = Le(() => a.value ? a.value.messages.value : d.value), V = Le(() => f.value), j = Le(() => m.value);
  function $() {
    return a.value ? a.value.getPostTranslationHandler() : D;
  }
  function z(k) {
    a.value && a.value.setPostTranslationHandler(k);
  }
  function he() {
    return a.value ? a.value.getMissingHandler() : P;
  }
  function fe(k) {
    a.value && a.value.setMissingHandler(k);
  }
  function Q(k) {
    return y(), k();
  }
  function ge(...k) {
    return a.value ? Q(() => Reflect.apply(a.value.t, null, [...k])) : Q(() => "");
  }
  function W(...k) {
    return a.value ? Reflect.apply(a.value.rt, null, [...k]) : "";
  }
  function ve(...k) {
    return a.value ? Q(() => Reflect.apply(a.value.d, null, [...k])) : Q(() => "");
  }
  function ae(...k) {
    return a.value ? Q(() => Reflect.apply(a.value.n, null, [...k])) : Q(() => "");
  }
  function Te(k) {
    return a.value ? a.value.tm(k) : {};
  }
  function ie(k, K) {
    return a.value ? a.value.te(k, K) : !1;
  }
  function J(k) {
    return a.value ? a.value.getLocaleMessage(k) : {};
  }
  function U(k, K) {
    a.value && (a.value.setLocaleMessage(k, K), d.value[k] = K);
  }
  function b(k, K) {
    a.value && a.value.mergeLocaleMessage(k, K);
  }
  function C(k) {
    return a.value ? a.value.getDateTimeFormat(k) : {};
  }
  function G(k, K) {
    a.value && (a.value.setDateTimeFormat(k, K), f.value[k] = K);
  }
  function H(k, K) {
    a.value && a.value.mergeDateTimeFormat(k, K);
  }
  function q(k) {
    return a.value ? a.value.getNumberFormat(k) : {};
  }
  function be(k, K) {
    a.value && (a.value.setNumberFormat(k, K), m.value[k] = K);
  }
  function Pe(k, K) {
    a.value && a.value.mergeNumberFormat(k, K);
  }
  const Me = {
    get id() {
      return a.value ? a.value.id : -1;
    },
    locale: A,
    fallbackLocale: v,
    messages: S,
    datetimeFormats: V,
    numberFormats: j,
    get inheritLocale() {
      return a.value ? a.value.inheritLocale : i;
    },
    set inheritLocale(k) {
      a.value && (a.value.inheritLocale = k);
    },
    get availableLocales() {
      return a.value ? a.value.availableLocales : Object.keys(d.value);
    },
    get modifiers() {
      return a.value ? a.value.modifiers : E;
    },
    get pluralRules() {
      return a.value ? a.value.pluralRules : _;
    },
    get isGlobal() {
      return a.value ? a.value.isGlobal : !1;
    },
    get missingWarn() {
      return a.value ? a.value.missingWarn : g;
    },
    set missingWarn(k) {
      a.value && (a.value.missingWarn = k);
    },
    get fallbackWarn() {
      return a.value ? a.value.fallbackWarn : T;
    },
    set fallbackWarn(k) {
      a.value && (a.value.missingWarn = k);
    },
    get fallbackRoot() {
      return a.value ? a.value.fallbackRoot : L;
    },
    set fallbackRoot(k) {
      a.value && (a.value.fallbackRoot = k);
    },
    get fallbackFormat() {
      return a.value ? a.value.fallbackFormat : O;
    },
    set fallbackFormat(k) {
      a.value && (a.value.fallbackFormat = k);
    },
    get warnHtmlMessage() {
      return a.value ? a.value.warnHtmlMessage : F;
    },
    set warnHtmlMessage(k) {
      a.value && (a.value.warnHtmlMessage = k);
    },
    get escapeParameter() {
      return a.value ? a.value.escapeParameter : p;
    },
    set escapeParameter(k) {
      a.value && (a.value.escapeParameter = k);
    },
    t: ge,
    getPostTranslationHandler: $,
    setPostTranslationHandler: z,
    getMissingHandler: he,
    setMissingHandler: fe,
    rt: W,
    d: ve,
    n: ae,
    tm: Te,
    te: ie,
    getLocaleMessage: J,
    setLocaleMessage: U,
    mergeLocaleMessage: b,
    getDateTimeFormat: C,
    setDateTimeFormat: G,
    mergeDateTimeFormat: H,
    getNumberFormat: q,
    setNumberFormat: be,
    mergeNumberFormat: Pe
  };
  function Ge(k) {
    k.locale.value = c.value, k.fallbackLocale.value = l.value, Object.keys(d.value).forEach((K) => {
      k.mergeLocaleMessage(K, d.value[K]);
    }), Object.keys(f.value).forEach((K) => {
      k.mergeDateTimeFormat(K, f.value[K]);
    }), Object.keys(m.value).forEach((K) => {
      k.mergeNumberFormat(K, m.value[K]);
    }), k.escapeParameter = p, k.fallbackFormat = O, k.fallbackRoot = L, k.fallbackWarn = T, k.missingWarn = g, k.warnHtmlMessage = F;
  }
  return wa(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw et(se.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const k = a.value = e.proxy.$i18n.__composer;
    t === "global" ? (c.value = k.locale.value, l.value = k.fallbackLocale.value, d.value = k.messages.value, f.value = k.datetimeFormats.value, m.value = k.numberFormats.value) : o && Ge(k);
  }), Me;
}
cl();
__INTLIFY_JIT_COMPILATION__ ? Kn(nl) : Kn(tl);
Wi(Ii);
Yi(Dr);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = We();
  e.__INTLIFY__ = !0, Ri(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Rt = Symbol("areaSelection"), Ll = {
  Polygon: "$vcsTriangle",
  BBox: "$vcsBoundingBox"
}, en = Ca({
  Polygon: !1,
  BBox: !1
});
function tn(e) {
  return new Oa({
    fill: {
      color: za.fromCssColorString(e).withAlpha(0.3).toCssColorString()
    },
    stroke: {
      color: e,
      width: 2
    }
  });
}
const bl = {
  name: "SelectionArea",
  components: { VcsToolButton: ca, VSheet: Ra, VInput: Fa, VTooltip: Da },
  emits: ["sessionstart"],
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  setup(e, { emit: t }) {
    const n = hn("vcsApp"), r = ua(n), o = Oe(!1);
    async function a() {
      if (!n.layers.hasKey(String(Rt))) {
        const d = n.uiConfig.config.primaryColor ?? r, f = tn(d), m = new Aa({
          name: String(Rt),
          projection: Sa.toJSON(),
          style: f
        });
        Na(m), n.layers.add(m);
      }
      const l = n.layers.getByKey(
        String(Rt)
      );
      return await l.activate(), l;
    }
    const i = [
      n.uiConfig.added.addEventListener(async (l) => {
        (l == null ? void 0 : l.name) === "primaryColor" && (await a()).setStyle(
          tn(l.value)
        );
      }),
      n.uiConfig.removed.addEventListener(async (l) => {
        (l == null ? void 0 : l.name) === "primaryColor" && (await a()).setStyle(
          tn(r)
        );
      })
    ];
    async function c(l) {
      const d = await a();
      d && (o.value = !1);
      const f = Ia(
        n,
        d,
        La[l]
      );
      t(
        "sessionstart",
        new Promise((m) => {
          let g = null;
          f.stopped.addEventListener(() => {
            en[l] = !1, g.set("geometryType", l), m(g);
          }), f.creationFinished.addEventListener((T) => {
            T && (g = T, g.set("geometryType", l), f.stop(), o.value = !0);
          });
        })
      ), en[l] = !0;
    }
    return dr(async () => {
      const l = a();
      o.value = (await l).getFeatures().length !== 0;
    }), n.windowManager.removed.addEventListener(async ({ id: l }) => {
      l === Ln && ((await a()).deactivate(), i.forEach((d) => d()));
    }), {
      waitForGeometry: c,
      allowedGeometries: Ll,
      geometryState: en,
      featureDrawn: o
    };
  }
}, na = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
function wl(e, t, n, r, o, a) {
  const i = ce("VcsToolButton"), c = ce("v-tooltip"), l = ce("v-input"), d = ce("v-sheet");
  return lt(), rn(d, { class: "px-1 mb-0" }, {
    default: de(() => [
      ne(l, {
        class: "feature-input",
        "model-value": r.featureDrawn
      }, {
        message: de(({ message: f }) => [
          ne(c, {
            activator: ".feature-input",
            "v-if": f,
            text: e.$st(f),
            "content-class": "bg-error",
            location: "right"
          }, null, 8, ["v-if", "text"])
        ]),
        default: de(() => [
          (lt(!0), Dt(
            jt,
            null,
            Pa(r.allowedGeometries, (f, m) => (lt(), rn(i, {
              key: m,
              icon: f,
              active: r.geometryState[m],
              tooltip: e.$st("shadowmap.draw.draw" + m),
              onClick: (g) => r.waitForGeometry(m)
            }, null, 8, ["icon", "active", "tooltip", "onClick"]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["model-value"])
    ]),
    _: 1
    /* STABLE */
  });
}
const kl = /* @__PURE__ */ na(bl, [["render", wl]]), I = Object.freeze({
  BYTE: 1,
  ASCII: 2,
  SHORT: 3,
  LONG: 4,
  RATIONAL: 5,
  SBYTE: 6,
  UNDEFINED: 7,
  SSHORT: 8,
  SLONG: 9,
  SRATIONAL: 10,
  FLOAT: 11,
  DOUBLE: 12,
  // IFD offset, suggested by https://owl.phy.queensu.ca/~phil/exiftool/standards.html
  IFD: 13,
  // introduced by BigTIFF
  LONG8: 16,
  SLONG8: 17,
  IFD8: 18
});
Object.freeze({
  [I.BYTE]: 1,
  [I.ASCII]: 1,
  [I.SBYTE]: 1,
  [I.UNDEFINED]: 1,
  [I.SHORT]: 2,
  [I.SSHORT]: 2,
  [I.LONG]: 4,
  [I.SLONG]: 4,
  [I.FLOAT]: 4,
  [I.IFD]: 4,
  [I.RATIONAL]: 8,
  [I.SRATIONAL]: 8,
  [I.DOUBLE]: 8,
  [I.LONG8]: 8,
  [I.SLONG8]: 8,
  [I.IFD8]: 8
});
const Cl = [
  { tag: 254, name: "NewSubfileType", fieldTypes: I.LONG },
  { tag: 255, name: "SubfileType", type: I.SHORT },
  { tag: 256, name: "ImageWidth", type: I.SHORT },
  { tag: 257, name: "ImageLength", type: I.SHORT },
  {
    tag: 258,
    name: "BitsPerSample",
    type: I.SHORT,
    isArray: !0,
    eager: !0
  },
  { tag: 259, name: "Compression", type: I.SHORT },
  { tag: 262, name: "PhotometricInterpretation", type: I.SHORT },
  { tag: 263, name: "Threshholding", type: I.SHORT },
  { tag: 264, name: "CellWidth", type: I.SHORT },
  { tag: 265, name: "CellLength", type: I.SHORT },
  { tag: 266, name: "FillOrder", type: I.SHORT },
  { tag: 269, name: "DocumentName", type: I.ASCII },
  { tag: 270, name: "ImageDescription", type: I.ASCII },
  { tag: 271, name: "Make", type: I.ASCII },
  { tag: 272, name: "Model", type: I.ASCII },
  { tag: 273, name: "StripOffsets", type: I.SHORT, isArray: !0 },
  { tag: 274, name: "Orientation", type: I.SHORT },
  { tag: 277, name: "SamplesPerPixel", type: I.SHORT },
  { tag: 278, name: "RowsPerStrip", type: I.SHORT },
  { tag: 279, name: "StripByteCounts", type: I.LONG, isArray: !0 },
  { tag: 280, name: "MinSampleValue", type: I.SHORT, isArray: !0 },
  { tag: 281, name: "MaxSampleValue", type: I.SHORT, isArray: !0 },
  { tag: 282, name: "XResolution", type: I.RATIONAL },
  { tag: 283, name: "YResolution", type: I.RATIONAL },
  { tag: 284, name: "PlanarConfiguration", fieldTypes: I.SHORT },
  { tag: 285, name: "PageName", type: I.ASCII },
  { tag: 286, name: "XPosition", type: I.RATIONAL },
  { tag: 287, name: "YPosition", type: I.RATIONAL },
  { tag: 288, name: "FreeOffsets", type: I.LONG },
  { tag: 289, name: "FreeByteCounts", type: I.LONG },
  { tag: 290, name: "GrayResponseUnit", type: I.SHORT },
  {
    tag: 291,
    name: "GrayResponseCurve",
    type: I.SHORT,
    isArray: !0
  },
  { tag: 292, name: "T4Options", type: I.LONG },
  { tag: 293, name: "T6Options", type: I.LONG },
  { tag: 296, name: "ResolutionUnit", type: I.SHORT },
  { tag: 297, name: "PageNumber", type: I.SHORT, isArray: !0 },
  { tag: 301, name: "TransferFunction", type: I.SHORT, isArray: !0 },
  { tag: 305, name: "Software", type: I.ASCII },
  { tag: 306, name: "DateTime", type: I.ASCII },
  { tag: 315, name: "Artist", type: I.ASCII },
  { tag: 316, name: "HostComputer", type: I.ASCII },
  { tag: 317, name: "Predictor", type: I.SHORT },
  { tag: 318, name: "WhitePoint", type: I.RATIONAL, isArray: !0 },
  {
    tag: 319,
    name: "PrimaryChromaticities",
    type: I.RATIONAL,
    isArray: !0
  },
  { tag: 320, name: "ColorMap", type: I.SHORT, isArray: !0 },
  { tag: 321, name: "HalftoneHints", type: I.SHORT, isArray: !0 },
  { tag: 322, name: "TileWidth", type: I.SHORT },
  { tag: 323, name: "TileLength", type: I.SHORT },
  { tag: 324, name: "TileOffsets", type: I.LONG, isArray: !0 },
  { tag: 325, name: "TileByteCounts", type: I.SHORT, isArray: !0 },
  { tag: 332, name: "InkSet", type: I.SHORT },
  { tag: 333, name: "InkNames", type: I.ASCII },
  { tag: 334, name: "NumberOfInks", type: I.SHORT },
  { tag: 336, name: "DotRange", type: I.BYTE, isArray: !0 },
  { tag: 337, name: "TargetPrinter", type: I.ASCII },
  { tag: 338, name: "ExtraSamples", type: I.BYTE, isArray: !0 },
  {
    tag: 339,
    name: "SampleFormat",
    type: I.SHORT,
    isArray: !0,
    eager: !0
  },
  { tag: 340, name: "SMinSampleValue", isArray: !0 },
  { tag: 341, name: "SMaxSampleValue", isArray: !0 },
  { tag: 342, name: "TransferRange", type: I.SHORT, isArray: !0 },
  { tag: 512, name: "JPEGProc", type: I.SHORT },
  { tag: 513, name: "JPEGInterchangeFormat", type: I.LONG },
  { tag: 514, name: "JPEGInterchangeFormatLngth", type: I.LONG },
  { tag: 515, name: "JPEGRestartInterval", type: I.SHORT },
  {
    tag: 517,
    name: "JPEGLosslessPredictors",
    type: I.SHORT,
    isArray: !0
  },
  {
    tag: 518,
    name: "JPEGPointTransforms",
    type: I.SHORT,
    isArray: !0
  },
  { tag: 519, name: "JPEGQTables", type: I.LONG, isArray: !0 },
  { tag: 520, name: "JPEGDCTables", type: I.LONG, isArray: !0 },
  { tag: 521, name: "JPEGACTables", type: I.LONG, isArray: !0 },
  {
    tag: 529,
    name: "YCbCrCoefficients",
    type: I.RATIONAL,
    isArray: !0
  },
  { tag: 530, name: "YCbCrSubSampling", type: I.SHORT, isArray: !0 },
  { tag: 531, name: "YCbCrPositioning", type: I.SHORT },
  {
    tag: 532,
    name: "ReferenceBlackWhite",
    type: I.LONG,
    isArray: !0
  },
  { tag: 33432, name: "Copyright", type: I.ASCII },
  // TIFF Extended
  { tag: 326, name: "BadFaxLines" },
  { tag: 327, name: "CleanFaxData" },
  { tag: 343, name: "ClipPath" },
  { tag: 328, name: "ConsecutiveBadFaxLines" },
  { tag: 433, name: "Decode" },
  { tag: 434, name: "DefaultImageColor" },
  { tag: 346, name: "Indexed" },
  { tag: 347, name: "JPEGTables", isArray: !0, eager: !0 },
  { tag: 559, name: "StripRowCounts", isArray: !0 },
  { tag: 330, name: "SubIFDs", isArray: !0 },
  { tag: 344, name: "XClipPathUnits" },
  { tag: 345, name: "YClipPathUnits" },
  // EXIF
  { tag: 37378, name: "ApertureValue" },
  { tag: 40961, name: "ColorSpace" },
  { tag: 36868, name: "DateTimeDigitized" },
  { tag: 36867, name: "DateTimeOriginal" },
  { tag: 34665, name: "Exif IFD", type: I.LONG },
  { tag: 36864, name: "ExifVersion" },
  { tag: 33434, name: "ExposureTime" },
  { tag: 41728, name: "FileSource" },
  { tag: 37385, name: "Flash" },
  { tag: 40960, name: "FlashpixVersion" },
  { tag: 33437, name: "FNumber" },
  { tag: 42016, name: "ImageUniqueID" },
  { tag: 37384, name: "LightSource" },
  { tag: 37500, name: "MakerNote" },
  { tag: 37377, name: "ShutterSpeedValue" },
  { tag: 37510, name: "UserComment" },
  // IPTC
  { tag: 33723, name: "IPTC" },
  // Laser Scanning Microscopy
  { tag: 34412, name: "CZ_LSMINFO" },
  // ICC
  { tag: 34675, name: "ICC Profile" },
  // XMP
  { tag: 700, name: "XMP" },
  // GDAL
  { tag: 42112, name: "GDAL_METADATA" },
  { tag: 42113, name: "GDAL_NODATA", type: I.ASCII },
  // Photoshop
  { tag: 34377, name: "Photoshop" },
  // GeoTiff
  {
    tag: 33550,
    name: "ModelPixelScale",
    type: I.DOUBLE,
    isArray: !0,
    eager: !0
  },
  {
    tag: 33922,
    name: "ModelTiepoint",
    type: I.DOUBLE,
    isArray: !0,
    eager: !0
  },
  {
    tag: 34264,
    name: "ModelTransformation",
    type: I.DOUBLE,
    isArray: !0,
    eager: !0
  },
  {
    tag: 34735,
    name: "GeoKeyDirectory",
    type: I.SHORT,
    isArray: !0,
    eager: !0
  },
  {
    tag: 34736,
    name: "GeoDoubleParams",
    type: I.DOUBLE,
    isArray: !0,
    eager: !0
  },
  { tag: 34737, name: "GeoAsciiParams", type: I.ASCII, eager: !0 },
  // LERC
  { tag: 50674, name: "LercParameters", eager: !0 }
], In = {};
function Pl(e, t, n, r = !1, o = !1) {
  In[t] = e, typeof n == "string" && I[n];
}
for (const e of Cl)
  Pl(e.tag, e.name, e.type, e.isArray, e.eager);
const ra = {
  256: "SHORT",
  257: "SHORT",
  258: "SHORT",
  259: "SHORT",
  262: "SHORT",
  270: "ASCII",
  271: "ASCII",
  272: "ASCII",
  273: "LONG",
  274: "SHORT",
  277: "SHORT",
  278: "LONG",
  279: "LONG",
  282: "RATIONAL",
  283: "RATIONAL",
  284: "SHORT",
  286: "SHORT",
  287: "RATIONAL",
  296: "SHORT",
  297: "SHORT",
  305: "ASCII",
  306: "ASCII",
  315: "ASCII",
  338: "SHORT",
  339: "SHORT",
  513: "LONG",
  514: "LONG",
  1024: "SHORT",
  1025: "SHORT",
  1026: "ASCII",
  2048: "SHORT",
  2049: "ASCII",
  2052: "SHORT",
  2054: "SHORT",
  2057: "DOUBLE",
  2059: "DOUBLE",
  2060: "SHORT",
  3072: "SHORT",
  3073: "ASCII",
  3076: "SHORT",
  4096: "SHORT",
  4097: "ASCII",
  4099: "SHORT",
  33432: "ASCII",
  33550: "DOUBLE",
  33922: "DOUBLE",
  34264: "DOUBLE",
  34665: "LONG",
  34735: "SHORT",
  34736: "DOUBLE",
  34737: "ASCII",
  42113: "ASCII"
}, Mt = Object.freeze({
  1024: "GTModelTypeGeoKey",
  1025: "GTRasterTypeGeoKey",
  1026: "GTCitationGeoKey",
  2048: "GeographicTypeGeoKey",
  2049: "GeogCitationGeoKey",
  2050: "GeogGeodeticDatumGeoKey",
  2051: "GeogPrimeMeridianGeoKey",
  2052: "GeogLinearUnitsGeoKey",
  2053: "GeogLinearUnitSizeGeoKey",
  2054: "GeogAngularUnitsGeoKey",
  2055: "GeogAngularUnitSizeGeoKey",
  2056: "GeogEllipsoidGeoKey",
  2057: "GeogSemiMajorAxisGeoKey",
  2058: "GeogSemiMinorAxisGeoKey",
  2059: "GeogInvFlatteningGeoKey",
  2060: "GeogAzimuthUnitsGeoKey",
  2061: "GeogPrimeMeridianLongGeoKey",
  2062: "GeogTOWGS84GeoKey",
  3072: "ProjectedCSTypeGeoKey",
  3073: "PCSCitationGeoKey",
  3074: "ProjectionGeoKey",
  3075: "ProjCoordTransGeoKey",
  3076: "ProjLinearUnitsGeoKey",
  3077: "ProjLinearUnitSizeGeoKey",
  3078: "ProjStdParallel1GeoKey",
  3079: "ProjStdParallel2GeoKey",
  3080: "ProjNatOriginLongGeoKey",
  3081: "ProjNatOriginLatGeoKey",
  3082: "ProjFalseEastingGeoKey",
  3083: "ProjFalseNorthingGeoKey",
  3084: "ProjFalseOriginLongGeoKey",
  3085: "ProjFalseOriginLatGeoKey",
  3086: "ProjFalseOriginEastingGeoKey",
  3087: "ProjFalseOriginNorthingGeoKey",
  3088: "ProjCenterLongGeoKey",
  3089: "ProjCenterLatGeoKey",
  3090: "ProjCenterEastingGeoKey",
  3091: "ProjCenterNorthingGeoKey",
  3092: "ProjScaleAtNatOriginGeoKey",
  3093: "ProjScaleAtCenterGeoKey",
  3094: "ProjAzimuthAngleGeoKey",
  3095: "ProjStraightVertPoleLongGeoKey",
  3096: "ProjRectifiedGridAngleGeoKey",
  4096: "VerticalCSTypeGeoKey",
  4097: "VerticalCitationGeoKey",
  4098: "VerticalDatumGeoKey",
  4099: "VerticalUnitsGeoKey"
}), Dl = (
  /** @type {Record<GeoKeyName, number>} */
  {}
);
for (const e in Mt)
  Mt.hasOwnProperty(e) && (Dl[Mt[e]] = parseInt(e, 10));
function aa(e, t) {
  for (const n in t)
    t.hasOwnProperty(n) && (e[n] = t[n]);
}
function oa(e, t) {
  return e.length < t.length ? !1 : e.substr(e.length - t.length) === t;
}
function Fl(e, t) {
  const { length: n } = e;
  for (let r = 0; r < n; r++)
    t(e[r], r);
}
function Rl(e) {
  const t = {};
  for (const n in e)
    if (e.hasOwnProperty(n)) {
      const r = e[n];
      t[r] = n;
    }
  return t;
}
function Ce(e, t) {
  const n = [];
  for (let r = 0; r < e; r++)
    n.push(t(r));
  return n;
}
function Ml(e) {
  if (ArrayBuffer.isView(e)) {
    const t = e.constructor;
    if (t === Float32Array || t === Float64Array)
      return !0;
  }
  return !1;
}
function Gl(e) {
  if (ArrayBuffer.isView(e)) {
    const t = e.constructor;
    if (t === Int8Array || t === Int16Array || t === Int32Array)
      return !0;
  }
  return !1;
}
function Ul(e) {
  if (ArrayBuffer.isView(e)) {
    const t = e.constructor;
    if (t === Uint8Array || t === Uint16Array || t === Uint32Array || t === Uint8ClampedArray)
      return !0;
  }
  return !1;
}
const xl = {
  Float64Array,
  Float32Array,
  Uint32Array,
  Uint16Array,
  Uint8Array
}, Vl = In, $l = Rl(Mt), je = {};
aa(je, Vl);
aa(je, $l);
const jl = I, vt = 1e3, Ae = {
  nextZero: (e, t) => {
    let n = t;
    for (; e[n] !== 0; )
      n++;
    return n;
  },
  readUshort: (e, t) => e[t] << 8 | e[t + 1],
  readShort: (e, t) => {
    const n = Ae.ui8;
    return n[0] = e[t + 1], n[1] = e[t + 0], Ae.i16[0];
  },
  readInt: (e, t) => {
    const n = Ae.ui8;
    return n[0] = e[t + 3], n[1] = e[t + 2], n[2] = e[t + 1], n[3] = e[t + 0], Ae.i32[0];
  },
  readUint: (e, t) => {
    const n = Ae.ui8;
    return n[0] = e[t + 3], n[1] = e[t + 2], n[2] = e[t + 1], n[3] = e[t + 0], Ae.ui32[0];
  },
  readASCII: (e, t, n) => n.map((r) => String.fromCharCode(e[t + r])).join(""),
  readFloat: (e, t) => {
    const n = Ae.ui8;
    return Ce(4, (r) => {
      n[r] = e[t + 3 - r];
    }), Ae.fl32[0];
  },
  readDouble: (e, t) => {
    const n = Ae.ui8;
    return Ce(8, (r) => {
      n[r] = e[t + 7 - r];
    }), Ae.fl64[0];
  },
  writeUshort: (e, t, n) => {
    e[t] = n >> 8 & 255, e[t + 1] = n & 255;
  },
  writeUint: (e, t, n) => {
    e[t] = n >> 24 & 255, e[t + 1] = n >> 16 & 255, e[t + 2] = n >> 8 & 255, e[t + 3] = n >> 0 & 255;
  },
  writeASCII: (e, t, n) => {
    Ce(n.length, (r) => {
      e[t + r] = n.charCodeAt(r);
    });
  },
  ui8: new Uint8Array(8)
};
Ae.fl64 = new Float64Array(Ae.ui8.buffer);
Ae.writeDouble = (e, t, n) => {
  Ae.fl64[0] = n, Ce(8, (r) => {
    e[t + r] = Ae.ui8[7 - r];
  });
};
const Hl = (e, t, n, r) => {
  let o = n;
  const a = Object.keys(r).filter((c) => c != null && c !== "undefined");
  e.writeUshort(t, o, a.length), o += 2;
  let i = o + 12 * a.length + 4;
  for (const c of a) {
    let l = null;
    typeof c == "number" ? l = c : typeof c == "string" && (l = parseInt(c, 10));
    const d = ra[l], f = jl[d];
    if (d == null || d === void 0 || typeof d > "u")
      throw new Error(`unknown type of tag: ${l}`);
    let m = r[c];
    if (m === void 0)
      throw new Error(`failed to get value for key ${c}`);
    d === "ASCII" && typeof m == "string" && oa(m, "\0") === !1 && (m += "\0");
    const g = m.length;
    e.writeUshort(t, o, l), o += 2, e.writeUshort(t, o, f), o += 2, e.writeUint(t, o, g), o += 4;
    let T = [-1, 1, 1, 2, 4, 8, 0, 0, 0, 0, 0, 0, 8][f] * g, L = o;
    T > 4 && (e.writeUint(t, o, i), L = i), d === "ASCII" ? e.writeASCII(t, L, m) : d === "SHORT" ? Ce(g, (O) => {
      e.writeUshort(t, L + 2 * O, m[O]);
    }) : d === "LONG" ? Ce(g, (O) => {
      e.writeUint(t, L + 4 * O, m[O]);
    }) : d === "RATIONAL" ? Ce(g, (O) => {
      e.writeUint(t, L + 8 * O, Math.round(m[O] * 1e4)), e.writeUint(t, L + 8 * O + 4, 1e4);
    }) : d === "DOUBLE" && Ce(g, (O) => {
      e.writeDouble(t, L + 8 * O, m[O]);
    }), T > 4 && (T += T & 1, i += T), o += 4;
  }
  return [o, i];
}, Bl = (e) => {
  const t = new Uint8Array(vt);
  let n = 4;
  const r = Ae;
  t[0] = 77, t[1] = 77, t[3] = 42;
  let o = 8;
  if (r.writeUint(t, n, o), n += 4, e.forEach((i, c) => {
    const l = Hl(r, t, o, i);
    o = l[1], c < e.length - 1 && r.writeUint(t, l[0], o);
  }), t.slice)
    return t.slice(0, o).buffer;
  const a = new Uint8Array(o);
  for (let i = 0; i < o; i++)
    a[i] = t[i];
  return a.buffer;
}, Kl = (e, t, n, r) => {
  if (n == null)
    throw new Error(`you passed into encodeImage a width of type ${n}`);
  if (t == null)
    throw new Error(`you passed into encodeImage a width of type ${t}`);
  const o = {
    256: [t],
    // ImageWidth
    257: [n],
    // ImageLength
    273: [vt],
    // strips offset
    278: [n],
    // RowsPerStrip
    305: "geotiff.js"
    // no array for ASCII(Z)
  };
  if (r)
    for (const m in r)
      r.hasOwnProperty(m) && (o[m] = r[m]);
  const a = new Uint8Array(Bl([o])), i = o[In.SamplesPerPixel], c = e.constructor.name, l = xl[c];
  let d = 8;
  l && (d = l.BYTES_PER_ELEMENT);
  const f = new Uint8Array(vt + e.length * d * i);
  return Ce(a.length, (m) => {
    f[m] = a[m];
  }), Fl(e, (m, g) => {
    if (!l) {
      f[vt + g] = m;
      return;
    }
    const T = new ArrayBuffer(d), L = new DataView(T);
    c === "Float64Array" ? L.setFloat64(0, m, !1) : c === "Float32Array" ? L.setFloat32(0, m, !1) : c === "Uint32Array" ? L.setUint32(0, m, !1) : c === "Uint16Array" ? L.setUint16(0, m, !1) : c === "Uint8Array" && L.setUint8(0, m);
    const O = new Uint8Array(L.buffer), P = vt + g * d;
    for (let D = 0; D < d; D++)
      f[P + D] = O[D];
  }), f.buffer;
}, Wl = (e) => {
  const t = {};
  for (const n in e)
    n !== "StripOffsets" && (je[n] || console.error(n, "not in name2code:", Object.keys(je)), t[je[n]] = e[n]);
  return t;
}, sr = (e) => Array.isArray(e) ? e : [e], Yl = [
  ["Compression", 1],
  // no compression
  ["PlanarConfiguration", 1],
  ["ExtraSamples", 0]
];
function zl(e, t) {
  const n = typeof e[0] == "number";
  let r, o, a, i;
  if (n ? (r = t.height || t.ImageLength, a = t.width || t.ImageWidth, o = e.length / (r * a), i = e) : (o = e.length, r = e[0].length, a = e[0][0].length, i = [], Ce(r, (f) => {
    Ce(a, (m) => {
      Ce(o, (g) => {
        i.push(e[g][f][m]);
      });
    });
  })), t.ImageLength = r, delete t.height, t.ImageWidth = a, delete t.width, !t.BitsPerSample) {
    let f = 8;
    ArrayBuffer.isView(i) && (f = 8 * Object.getPrototypeOf(i).BYTES_PER_ELEMENT), t.BitsPerSample = Ce(o, () => f);
  }
  if (Yl.forEach((f) => {
    const m = f[0];
    if (!t[m]) {
      const g = f[1];
      t[m] = g;
    }
  }), t.PhotometricInterpretation || (t.PhotometricInterpretation = t.BitsPerSample.length === 3 ? 2 : 1), t.SamplesPerPixel || (t.SamplesPerPixel = [o]), !t.StripByteCounts) {
    let f = 8;
    ArrayBuffer.isView(i) && (f = Object.getPrototypeOf(i).BYTES_PER_ELEMENT), t.StripByteCounts = [o * f * r * a];
  }
  if (!t.ModelPixelScale && !t.ModelTransformation && (t.ModelPixelScale = [360 / a, 180 / r, 0]), !t.SampleFormat) {
    let f = 1;
    Ml(i) && (f = 3), Gl(i) && (f = 2), Ul(i) && (f = 1), t.SampleFormat = Ce(o, () => f);
  }
  !t.hasOwnProperty("GeographicTypeGeoKey") && !t.hasOwnProperty("ProjectedCSTypeGeoKey") && (t.GeographicTypeGeoKey = 4326, t.ModelTransformation || (t.ModelTiepoint = [0, 0, 0, -180, 90, 0]), t.GeogCitationGeoKey = "WGS 84", t.GTModelTypeGeoKey = 2);
  const c = Object.keys(t).filter((f) => oa(f, "GeoKey")).sort((f, m) => je[f] - je[m]);
  if (!t.GeoKeyDirectory) {
    let f = t.GeoAsciiParams || "", m = f.length;
    const g = t.GeoDoubleParams || [];
    let T = g.length;
    const L = [1, 1, 0, 0];
    let O = 0;
    c.forEach((P) => {
      const D = Number(je[P]), F = ra[D], p = t[P];
      if (p === void 0)
        return;
      let E, _, y;
      if (F === "SHORT")
        E = 1, _ = 0, y = p;
      else if (F === "ASCII") {
        if (t.GeoAsciiParams)
          return;
        {
          const A = `${p.toString()}\0`;
          _ = Number(je.GeoAsciiParams), y = m, E = A.length, f += A, m += A.length;
        }
      } else if (F === "DOUBLE") {
        if (t.GeoDoubleParams)
          return;
        {
          const A = sr(p);
          _ = Number(je.GeoDoubleParams), y = T, E = A.length, A.forEach((v) => {
            g.push(Number(v)), T++;
          });
        }
      } else {
        console.warn(`[geotiff.js] couldn't get TIFFTagLocation for ${P}`);
        return;
      }
      L.push(D, _, E, y), O++;
    }), L[3] = O, t.GeoKeyDirectory = L, !t.GeoAsciiParams && f.length > 0 && (t.GeoAsciiParams = f), !t.GeoDoubleParams && g.length > 0 && (t.GeoDoubleParams = g);
  }
  for (const f of c)
    t.hasOwnProperty(f) && delete t[f];
  [
    "Compression",
    "ExtraSamples",
    "GeographicTypeGeoKey",
    "GTModelTypeGeoKey",
    "GTRasterTypeGeoKey",
    "ImageLength",
    // synonym of ImageHeight
    "ImageWidth",
    "Orientation",
    "PhotometricInterpretation",
    "ProjectedCSTypeGeoKey",
    "PlanarConfiguration",
    "ResolutionUnit",
    "SamplesPerPixel",
    "XPosition",
    "YPosition",
    "RowsPerStrip"
  ].forEach((f) => {
    t[f] && (t[f] = sr(t[f]));
  });
  const l = Wl(t);
  return Kl(i, a, r, l);
}
function ia(e, t) {
  return zl(e, t);
}
function Xl(e) {
  let t = 1 / 0, n = -1 / 0;
  for (const o of e)
    for (const a of o)
      a < t && (t = a), a > n && (n = a);
  const r = n - t || 1;
  return e.map(
    (o) => o.map((a) => Math.round((a - t) / r * 255))
  );
}
function Ct(e, t) {
  const n = Xl(e), r = n.length, o = n[0].length, a = document.createElement("canvas");
  a.width = o, a.height = r;
  const i = a.getContext("2d");
  if (!i) throw new Error("Could not get canvas context");
  const c = i.createImageData(o, r);
  for (let l = 0; l < r; l++) {
    const d = r - 1 - l;
    for (let f = 0; f < o; f++) {
      const m = (l * o + f) * 4, g = n[d][f], [T, L, O] = t ? t(e[d][f], f, d) : [g, g, g];
      c.data[m] = T, c.data[m + 1] = L, c.data[m + 2] = O, c.data[m + 3] = T === 255 && L === 255 && O === 255 ? 0 : 255;
    }
  }
  return i.putImageData(c, 0, 0), a.toDataURL("image/png");
}
function cr(e) {
  return [e, e, e];
}
function pn(e, t, n = !1) {
  if (n) return [139, 0, 0];
  switch (t) {
    case "source":
      return e >= 10 ? [34, 139, 34] : e >= 5 ? [50, 205, 50] : [144, 238, 144];
    case "middle":
      return e >= 50 ? [25, 25, 112] : e >= 20 ? [0, 0, 205] : e >= 10 ? [100, 149, 237] : [230, 230, 250];
    case "collection":
      return e >= 50 ? [0, 0, 139] : e >= 20 ? [30, 144, 255] : e >= 10 ? [135, 206, 250] : [240, 248, 255];
    case "sink":
      return [139, 0, 0];
    default:
      return [255, 255, 255];
  }
}
async function Jl(e, t, n, r = {}) {
  if (!e || e.length === 0)
    throw new Error("Grid is empty or undefined");
  if (!e[0] || e[0].length === 0)
    throw new Error("Grid has no columns");
  const o = e.length, a = e[0].length, i = (t.maxX - t.minX) / a, c = (t.maxY - t.minY) / o, l = t.minX, d = t.maxY;
  if (!isFinite(i) || !isFinite(c) || !isFinite(l) || !isFinite(d))
    throw new Error(
      `Invalid coordinate values: pixelSizeX=${i}, pixelSizeY=${c}, originX=${l}, originY=${d}`
    );
  console.log("Creating RGB GeoTIFF:", {
    gridDimensions: { height: o, width: a },
    bounds: t
  });
  const f = new Uint8Array(o * a * 3);
  for (let g = 0; g < o; g++)
    for (let T = 0; T < a; T++) {
      const O = (g * a + T) * 3, P = e[g][T], [D, F, p] = n(P, T, g);
      f[O] = D, f[O + 1] = F, f[O + 2] = p;
    }
  const m = {
    height: o,
    width: a,
    samplesPerPixel: 3,
    // Geospatial metadata for EPSG:3857
    ModelPixelScale: [i, c, 0],
    ModelTiepoint: [0, 0, 0, l, d, 0],
    GeographicTypeGeoKey: 4326,
    ProjectedCSTypeGeoKey: 3857
  };
  try {
    console.log("Writing RGB GeoTIFF with metadata:", m), console.log("Interleaved RGB data:", {
      length: f.length,
      type: f.constructor.name,
      expectedLength: a * o * 3,
      firstPixel: [f[0], f[1], f[2]]
    });
    const g = await ia(f, m);
    return console.log("RGB GeoTIFF creation successful:", {
      arrayBufferSize: g.byteLength,
      bands: 3
    }), g;
  } catch (g) {
    throw new Error(`Failed to create RGB GeoTIFF: ${g}`);
  }
}
async function ql(e, t, n = {}) {
  var O, P, D, F, p, E;
  const { noDataValue: r = -9999 } = n;
  if (!e || e.length === 0)
    throw new Error("Grid is empty or undefined");
  if (!e[0] || e[0].length === 0)
    throw new Error("Grid has no columns");
  const o = e.length, a = e[0].length, i = (t.maxX - t.minX) / a, c = (t.maxY - t.minY) / o, l = t.minX, d = t.maxY;
  if (!isFinite(i) || !isFinite(c) || !isFinite(l) || !isFinite(d))
    throw new Error(
      `Invalid coordinate values: pixelSizeX=${i}, pixelSizeY=${c}, originX=${l}, originY=${d}`
    );
  console.log("Grid data analysis:", {
    gridDimensions: { height: o, width: a },
    firstRow: (O = e[0]) == null ? void 0 : O.slice(0, 5),
    // First 5 values of first row
    lastRow: (P = e[o - 1]) == null ? void 0 : P.slice(0, 5),
    // First 5 values of last row
    sampleValues: [
      (D = e[0]) == null ? void 0 : D[0],
      (F = e[0]) == null ? void 0 : F[a - 1],
      // Top corners
      (p = e[o - 1]) == null ? void 0 : p[0],
      (E = e[o - 1]) == null ? void 0 : E[a - 1]
      // Bottom corners
    ],
    minMaxCheck: {
      hasNaN: e.some((_) => _.some((y) => isNaN(y))),
      hasUndefined: e.some((_) => _.some((y) => y === void 0)),
      hasNull: e.some((_) => _.some((y) => y === null))
    }
  });
  const f = [];
  let m = 1 / 0, g = -1 / 0;
  for (let _ = 0; _ < o; _++)
    for (let y = 0; y < a; y++) {
      const A = Number(e[_][y]), v = isFinite(A) && A !== null && A !== void 0 ? A : r;
      f.push(v), isFinite(v) && v !== r && (v < m && (m = v), v > g && (g = v));
    }
  let T;
  n.sampleFormat === "float" ? n.bitsPerSample === 64 ? T = new Float64Array(f) : T = new Float32Array(f) : n.sampleFormat === "int" ? n.bitsPerSample === 8 ? T = new Int8Array(f) : n.bitsPerSample === 16 ? T = new Int16Array(f) : T = new Int32Array(f) : n.bitsPerSample === 8 || !n.bitsPerSample ? T = new Uint8Array(f) : n.bitsPerSample === 16 ? T = new Uint16Array(f) : T = new Uint32Array(f), console.log("Flattened data analysis:", {
    totalPoints: T.length,
    minValue: m,
    maxValue: g,
    range: g - m,
    firstFewValues: Array.from(T.slice(0, 10)),
    lastFewValues: Array.from(T.slice(-10)),
    allZeros: Array.from(T).every((_) => _ === 0),
    allSameValue: Array.from(T).every((_) => _ === T[0]),
    dataType: T.constructor.name,
    arrayType: T instanceof Float32Array ? "Float32Array" : T instanceof Float64Array ? "Float64Array" : T instanceof Uint8Array ? "Uint8Array" : T instanceof Uint16Array ? "Uint16Array" : T instanceof Uint32Array ? "Uint32Array" : T instanceof Int8Array ? "Int8Array" : T instanceof Int16Array ? "Int16Array" : T instanceof Int32Array ? "Int32Array" : "regular array"
  });
  const L = {
    // Required basic properties (as per geotiff.js docs)
    height: o,
    width: a,
    // Geospatial metadata for EPSG:3857
    ModelPixelScale: [i, c, 0],
    ModelTiepoint: [0, 0, 0, l, d, 0],
    // Optional: Geographic coordinate system (from their example)
    GeographicTypeGeoKey: 4326,
    ProjectedCSTypeGeoKey: 3857
  };
  n.compression;
  try {
    if (console.log("About to write GeoTIFF with:", {
      dataArray: {
        type: T.constructor.name,
        length: T.length,
        firstValues: Array.from(T.slice(0, 5)),
        someMiddleValues: Array.from(
          T.slice(
            Math.floor(T.length / 2),
            Math.floor(T.length / 2) + 5
          )
        )
      },
      metadata: {
        width: L.width,
        height: L.height,
        Compression: L.Compression,
        GeographicTypeGeoKey: L.GeographicTypeGeoKey,
        ProjectedCSTypeGeoKey: L.ProjectedCSTypeGeoKey,
        GTModelTypeGeoKey: L.GTModelTypeGeoKey,
        GTRasterTypeGeoKey: L.GTRasterTypeGeoKey,
        ModelPixelScale: L.ModelPixelScale,
        ModelTiepoint: L.ModelTiepoint,
        note: "SampleFormat and BitsPerSample auto-detected from typed array"
      },
      options: {
        sampleFormat: n.sampleFormat,
        bitsPerSample: n.bitsPerSample,
        compression: n.compression
      },
      bounds: {
        minX: l,
        maxX: l + a * i,
        minY: d - o * c,
        maxY: d
      }
    }), typeof L.width != "number" || typeof L.height != "number")
      throw new Error(
        `Invalid metadata: width=${typeof L.width}, height=${typeof L.height}`
      );
    const _ = await ia([T], L);
    return console.log("GeoTIFF creation successful:", {
      arrayBufferSize: _.byteLength,
      expectedMinSize: a * o * 4
    }), _;
  } catch (_) {
    throw new Error(`Failed to create GeoTIFF: ${_}`);
  }
}
function la(e, t) {
  const n = e.length, r = e[0].length, o = (t.maxX - t.minX) / r, a = (t.maxY - t.minY) / n, i = t.minX + o * 0.5, c = t.maxY - a * 0.5;
  return [
    o.toString(),
    "0",
    "0",
    (-a).toString(),
    i.toString(),
    c.toString()
  ].join(`
`);
}
async function Zl(e, t, n = "grid_export.tif", r) {
  const o = await ql(e, t, r), a = la(e, t), i = (n.toLowerCase().endsWith(".tif") || n.toLowerCase().endsWith(".tiff"), ".tfw"), c = n.replace(
    /\.(tiff?|TIF{1,2})$/i,
    i
  );
  return {
    tiffData: o,
    tiffFilename: n,
    worldFileContent: a,
    worldFilename: c
  };
}
async function Ql(e, t, n, r = "grid_export.tif", o) {
  const a = await Jl(
    e,
    t,
    n,
    o
  ), i = la(e, t), c = (r.toLowerCase().endsWith(".tif") || r.toLowerCase().endsWith(".tiff"), ".tfw"), l = r.replace(
    /\.(tiff?|TIF{1,2})$/i,
    c
  );
  return {
    tiffData: a,
    tiffFilename: r,
    worldFileContent: i,
    worldFilename: l
  };
}
async function es(e, t, n = { output: "geojson" }) {
  if (!e.maps || !e.maps.activeMap)
    throw new Error("Active map is not available");
  if (!e.maps.activeMap.getCesiumWidget)
    throw new Error("Cesium widget is not available");
  const r = e.maps.activeMap.getScene(), [o, a, i, c] = t, l = wn([o, a, 0]), d = wn([i, c, 0]), f = pr.fromCartesianArray([l, d]), m = 111320, g = Ze.toDegrees(f.west), T = Ze.toDegrees(f.east), L = Ze.toDegrees(f.south), O = Ze.toDegrees(f.north), P = (L + O) / 2, D = m * Math.cos(P * Math.PI / 180), F = (T - g) * D, p = (O - L) * m, E = 1, _ = Math.max(2, Math.round(F / E) + 1), y = Math.max(2, Math.round(p / E) + 1), A = [], v = [];
  for (let b = 0; b < _; b++)
    A.push(
      Ze.lerp(f.west, f.east, b / (_ - 1))
    );
  for (let b = 0; b < y; b++)
    v.push(
      Ze.lerp(f.south, f.north, b / (y - 1))
    );
  const S = [];
  for (let b = 0; b < y; b++)
    for (let C = 0; C < _; C++)
      S.push(bt.fromRadians(A[C], v[b]));
  const V = await Xa(
    r.terrainProvider,
    S
  );
  let j;
  if (n.include3DTilesetHeights) {
    const b = V.map(
      (G) => Ja.fromRadians(G.longitude, G.latitude, G.height)
    );
    let C = [];
    r.clampToHeightMostDetailed ? C = await r.clampToHeightMostDetailed(b) : r.scene && r.scene.clampToHeightMostDetailed ? C = await r.scene.clampToHeightMostDetailed(b) : C = b.map(() => {
    }), j = [];
    for (let G = 0; G < y; G++) {
      j[G] = [];
      for (let H = 0; H < _; H++) {
        const q = G * _ + H, be = V[q].height, Pe = C[q];
        j[G][H] = typeof Pe == "number" && Pe > be ? Pe : be;
      }
    }
  } else {
    j = [];
    for (let b = 0; b < y; b++) {
      j[b] = [];
      for (let C = 0; C < _; C++)
        j[b][C] = V[b * _ + C].height;
    }
  }
  function $(b, C) {
    const G = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
      [-1, -1],
      [-1, 1],
      [1, -1],
      [1, 1]
    ];
    let H = -1 / 0, q = null;
    for (const [be, Pe] of G) {
      const Me = b + be, Ge = C + Pe;
      if (Me >= 0 && Me < y && Ge >= 0 && Ge < _) {
        const k = j[b][C] - j[Me][Ge];
        k > 0.1 && k > H && (H = k, q = [be, Pe]);
      }
    }
    return q;
  }
  const z = [];
  for (let b = 0; b < y; b++) {
    z[b] = [];
    for (let C = 0; C < _; C++)
      z[b][C] = $(b, C);
  }
  const he = [];
  for (let b = 0; b < y; b++) {
    he[b] = [];
    for (let C = 0; C < _; C++)
      he[b][C] = z[b][C] === null;
  }
  let fe = 1 / 0, Q = -1 / 0;
  for (let b = 0; b < y; b++)
    for (let C = 0; C < _; C++) {
      const G = j[b][C];
      G < fe && (fe = G), G > Q && (Q = G);
    }
  const ge = Q - fe, W = [];
  for (let b = 0; b < y; b++) {
    W[b] = [];
    for (let C = 0; C < _; C++)
      if (he[b][C])
        W[b][C] = "sink";
      else {
        const G = (j[b][C] - fe) / ge;
        G >= 0.75 ? W[b][C] = "source" : G >= 0.5 ? W[b][C] = "middle" : W[b][C] = "collection";
      }
  }
  const ve = Array(y).fill(0).map(() => Array(_).fill(1)), ae = Array(y).fill(0).map(() => Array(_).fill(0));
  for (let b = 0; b < y; b++)
    for (let C = 0; C < _; C++) {
      const G = z[b][C];
      if (G) {
        const H = b + G[0], q = C + G[1];
        H >= 0 && H < y && q >= 0 && q < _ && ae[H][q]++;
      }
    }
  const Te = [];
  for (let b = 0; b < y; b++)
    for (let C = 0; C < _; C++)
      ae[b][C] === 0 && Te.push([b, C]);
  for (; Te.length > 0; ) {
    const [b, C] = Te.shift(), G = z[b][C];
    if (G) {
      const H = b + G[0], q = C + G[1];
      H >= 0 && H < y && q >= 0 && q < _ && (ve[H][q] += ve[b][C], ae[H][q]--, ae[H][q] === 0 && Te.push([H, q]));
    }
  }
  const ie = {
    minX: t[0],
    minY: t[1],
    maxX: t[2],
    maxY: t[3]
  };
  let J;
  if (n.output === "raster" || n.output === "both")
    if (n.rasterType === "both") {
      const b = Ct(j, cr), C = Ct(
        ve,
        (G, H, q) => pn(
          G,
          W[q][H],
          he[q][H]
        )
      );
      J = {
        type: "raster-both",
        rasters: [
          {
            dataUrl: b,
            rasterType: "height",
            tileWidth: _,
            tileHeight: y,
            grid: j,
            mercatorBounds: ie
          },
          {
            dataUrl: C,
            rasterType: "accumulation",
            tileWidth: _,
            tileHeight: y,
            grid: ve,
            mercatorBounds: ie,
            heightClassGrid: W,
            isSinkGrid: he
          }
        ]
      };
    } else n.rasterType === "accumulation" ? J = {
      type: "raster",
      dataUrl: Ct(
        ve,
        (C, G, H) => pn(
          C,
          W[H][G],
          he[H][G]
        )
      ),
      rasterType: "accumulation",
      tileWidth: _,
      tileHeight: y,
      grid: ve,
      mercatorBounds: ie,
      heightClassGrid: W,
      isSinkGrid: he
    } : J = {
      type: "raster",
      dataUrl: Ct(j, cr),
      rasterType: "height",
      tileWidth: _,
      tileHeight: y,
      grid: j,
      mercatorBounds: ie
    };
  const U = [];
  for (let b = 0; b < y; b++)
    for (let C = 0; C < _; C++) {
      const G = z[b][C];
      if (G) {
        bt.fromRadians(
          A[C],
          v[b],
          j[b][C]
        );
        const H = b + G[0], q = C + G[1];
        bt.fromRadians(
          A[q],
          v[H],
          j[H][q]
        );
      }
    }
  for (let b = 0; b < y; b++)
    for (let C = 0; C < _; C++) {
      const G = bt.fromRadians(A[C], v[b], j[b][C]), H = z[b][C] === null;
      U.push({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
            Ze.toDegrees(G.longitude),
            Ze.toDegrees(G.latitude),
            G.height
          ]
        },
        properties: {
          type: "grid_cell",
          height: G.height,
          accumulation: ve[b][C],
          heightClass: W[b][C],
          isSink: H,
          gridIndex: [b, C],
          normalizedHeight: (G.height - fe) / ge
        }
      });
    }
  return n.output === "geojson" ? {
    type: "FeatureCollection",
    features: U
  } : n.output === "raster" && J ? J : n.output === "both" && J ? {
    geojson: {
      type: "FeatureCollection",
      features: U
    },
    raster: J
  } : {
    type: "FeatureCollection",
    features: U
  };
}
let Fe = {
  endpoint: "https://urbreath.virtualcitymap.de/minioproxy",
  //'https://minio-dev.urbreath.tech',
  bucket: "vcs-analysis",
  accessKey: "VCS",
  secretKey: "iOUgAVACityp"
}, Pt = null;
function nn(e, t) {
  const n = (t ?? "").trim();
  if (!n)
    return e;
  const r = n.replace(/\s+/g, "_"), o = e.lastIndexOf(".");
  return o <= 0 ? `${e}_${r}` : `${e.slice(0, o)}_${r}${e.slice(o)}`;
}
async function ts() {
  if (Pt)
    return Pt;
  const e = `${Fe.endpoint}/api/v1/login`;
  console.log("[MinIO] Attempting login...");
  const t = await fetch(e, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      accessKey: Fe.accessKey,
      secretKey: Fe.secretKey
    }),
    credentials: "include"
    // Required to receive and store session cookies
  });
  if (!t.ok && t.status !== 204) {
    const n = await t.text();
    throw console.error(`[MinIO] Login failed: ${t.status}`, n), new Error(`MinIO login failed: ${t.status} ${n}`);
  }
  return console.log("[MinIO] Login successful (204 No Content), session cookie set"), Pt = "cookie-based", Pt;
}
async function Gt(e, t, n, r) {
  try {
    const o = e.uiConfig.getByKey("appTitle");
    let a = o && typeof o.value == "string" ? o.value : "default";
    a = a.split(" ")[0], console.log(`[MinIO] App title: ${a}`);
    const { config: i } = e.plugins.getByKey(mt);
    Fe = {
      endpoint: i.minioEndpoint || Fe.endpoint,
      bucket: i.minioBucket || Fe.bucket,
      accessKey: i.minioAccessKey || Fe.accessKey,
      secretKey: i.minioSecretKey || Fe.secretKey
    }, await ts();
    const c = `${a}/waterflowAnalysis/${r}/${n}`;
    console.log(`[MinIO] Object key: ${c}`);
    const l = `${Fe.endpoint}/api/v1/buckets/${Fe.bucket}/objects/upload?prefix=${encodeURIComponent(c)}`;
    console.log(`[MinIO] Upload URL: ${l}`), console.log(`[MinIO] File size: ${t.size} bytes`);
    const d = new FormData();
    d.append(String(t.size), t, n);
    const f = await fetch(l, {
      method: "POST",
      credentials: "include",
      // Include session cookies from login
      body: d
    });
    if (console.log(`[MinIO] Upload response status: ${f.status}`), console.log("[MinIO] Upload response headers:", f.headers), !f.ok) {
      const g = await f.text();
      throw console.error(`[MinIO] Upload error response: ${g}`), new Error(
        `Failed to upload to MinIO: ${f.status} ${f.statusText}. ${g}`
      );
    }
    const m = `${Fe.endpoint}/${Fe.bucket}/${c}`;
    return console.log(`[MinIO] Upload successful, public URL: ${m}`), m;
  } catch (o) {
    throw console.error("[MinIO] Upload error:", o), new Error(
      `Failed to upload to MinIO: ${o instanceof Error ? o.message : String(o)}`
    );
  }
}
async function ns(e, t, n, r) {
  try {
    const o = [];
    if (!t || t.length === 0)
      return console.warn("[MinIO] No GeoTIFF files to upload"), o;
    console.log(
      `[MinIO] Uploading ${t.length} GeoTIFF file(s) with world files and SLD`
    );
    for (const a of t) {
      const i = new Blob([a.tiffData], { type: "image/tiff" }), c = nn(a.tiffFilename, r);
      console.log(
        `[MinIO] Uploading TIFF: ${c} (${i.size} bytes)`
      );
      const l = await Gt(
        e,
        i,
        c,
        n
      );
      o.push(l), console.log(`[MinIO] TIFF uploaded: ${l}`);
      const d = new Blob([a.worldFileContent], {
        type: "text/plain"
      }), f = nn(a.worldFilename, r);
      console.log(
        `[MinIO] Uploading world file: ${f} (${d.size} bytes)`
      );
      const m = await Gt(
        e,
        d,
        f,
        n
      );
      if (o.push(m), console.log(`[MinIO] World file uploaded: ${m}`), a.sldContent && a.sldFilename) {
        const g = new Blob([a.sldContent], {
          type: "application/xml"
        }), T = nn(a.sldFilename, r);
        console.log(
          `[MinIO] Uploading SLD style: ${T} (${g.size} bytes)`
        );
        const L = await Gt(e, g, T, n);
        o.push(L), console.log(`[MinIO] SLD style uploaded: ${L}`);
      }
    }
    return console.log(
      `[MinIO] All GeoTIFF files uploaded successfully: ${o.length} file(s)`
    ), o;
  } catch (o) {
    throw console.error("[MinIO] Error uploading GeoTIFF files:", o), new Error(
      `Failed to upload GeoTIFF files to MinIO: ${o instanceof Error ? o.message : String(o)}`
    );
  }
}
function rs(e = "WaterFlowAccumulation") {
  return `<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" 
                       xmlns:ogc="http://www.opengis.net/ogc" 
                       xmlns:se="http://www.opengis.net/se" 
                       version="1.1.0" 
                       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                       xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd">
  <NamedLayer>
    <se:Name>${e}</se:Name>
    <UserStyle>
      <se:Name>Water Flow Accumulation Analysis</se:Name>
      <se:Description>
        <se:Title>Water Flow Accumulation with Terrain Classification</se:Title>
        <se:Abstract>
          This style visualizes water flow accumulation based on terrain analysis.
          Green: Source areas (high elevation where water originates)
          Blue: Collection areas (low elevation with accumulated water flow)
          Dark Red: Sink areas (depressions with no outflow)
          White: Minimal or no flow
        </se:Abstract>
      </se:Description>
      <se:CoverageStyle>
        <se:Rule>
          <se:RasterSymbolizer>
            <se:Opacity>0.85</se:Opacity>
            <se:ColorMap>
              <se:Categorize fallbackValue="#FFFFFF">
                <se:LookupValue>
                  <ogc:PropertyName>GRAY_INDEX</ogc:PropertyName>
                </se:LookupValue>
                <!-- Sink areas: Dark red -->
                <se:Value>#8B0000</se:Value>
                <se:Threshold>0</se:Threshold>
                <!-- Source areas - Light green (accumulation 1-4) -->
                <se:Value>#90EE90</se:Value>
                <se:Threshold>5</se:Threshold>
                <!-- Source areas - Lime green (accumulation 5-9) -->
                <se:Value>#32CD32</se:Value>
                <se:Threshold>10</se:Threshold>
                <!-- Mixed - Forest green / Light sky blue (accumulation 10-19) -->
                <se:Value>#87CEFA</se:Value>
                <se:Threshold>20</se:Threshold>
                <!-- Collection - Dodger blue (accumulation 20-49) -->
                <se:Value>#1E90FF</se:Value>
                <se:Threshold>50</se:Threshold>
                <!-- Collection - Dark blue (accumulation 50+) -->
                <se:Value>#00008B</se:Value>
              </se:Categorize>
            </se:ColorMap>
          </se:RasterSymbolizer>
        </se:Rule>
      </se:CoverageStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>`;
}
const as = $t({
  name: "terrainAnalysisMainWindow",
  props: {
    windowState: {
      type: Object,
      default: void 0
    }
  },
  emits: ["close"],
  components: {
    VcsFormSection: ha,
    VcsSelect: _a,
    VForm: Ya,
    VContainer: Wa,
    VRow: Ka,
    VCol: Ba,
    VcsLabel: ya,
    VcsDatePicker: pa,
    VcsFormButton: ga,
    VcsTextArea: ma,
    VcsTextField: da,
    VDialog: Ha,
    VCard: ja,
    VCardTitle: $a,
    VCardText: Va,
    VCardActions: xa,
    VcsCheckbox: fa,
    VIcon: Ua,
    SelectionArea: kl,
    VDivider: Ga,
    VSpacer: Ma
  },
  setup(e) {
    const t = hn("vcsApp"), { config: n } = t.plugins.getByKey(mt), { t: r } = zt(), o = Oe(n.allowMinioUpload), a = Oe(!1), i = Oe(null), c = Oe(!1), l = Oe(""), d = Le(() => "Analysis"), f = Oe({
      geotiff: !0,
      geojson: !1
    });
    Oe(null);
    const m = Oe(null), g = Le(
      () => f.value.geotiff || f.value.geojson
    ), T = Le(
      () => !!m.value && (f.value.geotiff || f.value.geojson)
    ), L = Le(() => {
      const v = r("terrainAnalysis.explanation.flowNote"), S = 50;
      if (v.length <= S)
        return v;
      const V = v.lastIndexOf(" ", S);
      return V > 0 ? v.substring(0, V).trim() : v.substring(0, S).trim();
    }), O = Le(() => {
      const v = r("terrainAnalysis.explanation.flowNote"), S = 50;
      if (v.length <= S)
        return "";
      const V = v.lastIndexOf(" ", S);
      return V > 0 ? v.substring(V).trim() : v.substring(S).trim();
    });
    async function P(v) {
      var j, $;
      const S = t.layers.getByKey(
        String(Rt)
      );
      S && S.removeAllFeatures();
      const V = await v;
      if (V) {
        i.value = V;
        const z = V.getGeometry();
        if (z.getArea() <= 1e6) {
          z.getCoordinates()[0];
          const fe = z.getExtent(), Q = kn([
            fe[0],
            fe[1]
          ]), ge = kn([
            fe[2],
            fe[3]
          ]), W = await es(
            t,
            fe,
            {
              output: "raster",
              rasterType: "accumulation",
              include3DTilesetHeights: !1
            }
          );
          if (m.value = W, "type" in W && W.type !== "raster")
            throw new Error("Unexpected result type from terrainWaterFlow");
          if (!("dataUrl" in W))
            throw new Error("Missing dataUrl in result");
          const ve = W.dataUrl, ae = "tileWidth" in W ? W.tileWidth : 0, Te = "tileHeight" in W ? W.tileHeight : 0, J = (($ = (j = t.maps.activeMap) == null ? void 0 : j.getScene) == null ? void 0 : $.call(j)).imageryLayers;
          console.log(J);
          const U = J.length > 0 ? J.get(J.length - 1) : null;
          U && U.imageryProvider && U.imageryProvider instanceof Jt && J.remove(U, !0), J.addImageryProvider(
            new Jt({
              url: ve,
              tileWidth: ae,
              tileHeight: Te,
              rectangle: pr.fromDegrees(
                Q[0],
                Q[1],
                ge[0],
                ge[1]
              )
            })
          ), console.log(J), S && S.removeAllFeatures();
        } else
          t.notifier.add({
            type: Lt.ERROR,
            title: "terrainAnalysis.error.title",
            message: "terrainAnalysis.error.message"
          });
      }
    }
    mr(() => {
      const S = t.maps.activeMap.getScene().imageryLayers;
      console.log(S);
      const V = S.length > 0 ? S.get(S.length - 1) : null;
      V && V.imageryProvider && V.imageryProvider instanceof Jt && S.remove(V, !0);
    });
    function D() {
      const v = l.value.trim();
      return v || d.value;
    }
    function F() {
      const v = /* @__PURE__ */ new Date();
      return `${v.getFullYear()}-${String(v.getMonth() + 1).padStart(2, "0")}-${String(v.getDate()).padStart(2, "0")}-${String(v.getHours()).padStart(2, "0")}-${String(v.getMinutes()).padStart(2, "0")}-${String(v.getSeconds()).padStart(2, "0")}`;
    }
    function p(v) {
      return v.substring(0, v.lastIndexOf("/")).replace(
        "https://urbreath.virtualcitymap.de/minioproxy/vcs-analysis",
        "https://minio-dev.urbreath.tech/browser/vcs-analysis"
      );
    }
    function E() {
      f.value = {
        geotiff: !0,
        geojson: !1
      }, l.value = "", c.value = !0;
    }
    function _() {
      c.value = !1;
    }
    function y() {
      c.value = !1, A({ ...f.value });
    }
    async function A(v) {
      var $, z, he, fe;
      const S = {
        geotiff: !0,
        geojson: !1,
        ...v
      }, V = F(), j = D();
      try {
        const Q = [];
        let ge = null;
        const W = V;
        if (S.geotiff && m.value) {
          const ae = ft(m.value);
          console.log("[GeoTIFF] Terrain analysis result:", {
            type: "type" in ae ? ae.type : "unknown",
            hasGrid: "grid" in ae,
            hasRasters: "rasters" in ae,
            resultKeys: Object.keys(ae)
          });
          const Te = "rasters" in ae ? ae.rasters : [ae];
          console.log("[GeoTIFF] Rasters to process:", Te.length);
          const ie = [];
          for (let J = 0; J < Te.length; J++) {
            const U = ft(Te[J]);
            if (console.log("[GeoTIFF] Processing raster:", {
              hasGrid: !!U.grid,
              gridLength: ($ = U.grid) == null ? void 0 : $.length,
              gridFirstRowLength: (he = (z = U.grid) == null ? void 0 : z[0]) == null ? void 0 : he.length,
              hasBounds: !!U.mercatorBounds,
              rasterType: "rasterType" in U ? U.rasterType : "unknown"
            }), !U.grid || !Array.isArray(U.grid)) {
              console.error("[GeoTIFF] Invalid grid: not an array", U);
              continue;
            }
            if (U.grid.length === 0) {
              console.error("[GeoTIFF] Invalid grid: empty array");
              continue;
            }
            if (!U.grid[0] || U.grid[0].length === 0) {
              console.error(
                "[GeoTIFF] Invalid grid: first row is empty or undefined"
              );
              continue;
            }
            if (!U.mercatorBounds) {
              console.error("[GeoTIFF] Missing mercatorBounds");
              continue;
            }
            if (U.grid && U.mercatorBounds) {
              const b = `terrain_${"rasterType" in U ? U.rasterType : "unknown"}_${W}.tif`;
              console.log(
                `[GeoTIFF] Creating GeoTIFF for ${U.rasterType}`,
                {
                  gridSize: {
                    height: U.grid.length,
                    width: (fe = U.grid[0]) == null ? void 0 : fe.length
                  },
                  bounds: U.mercatorBounds,
                  hasHeightClassGrid: !!U.heightClassGrid,
                  hasIsSinkGrid: !!U.isSinkGrid
                }
              );
              const C = ft(U.grid), G = ft(U.mercatorBounds);
              let H;
              if (U.rasterType === "accumulation" && U.heightClassGrid && U.isSinkGrid) {
                const q = ft(U.heightClassGrid), be = ft(U.isSinkGrid), Me = await Ql(
                  C,
                  G,
                  (k, K, Je) => pn(
                    k,
                    q[Je][K],
                    be[Je][K]
                  ),
                  b,
                  {
                    compression: "deflate",
                    description: `Terrain ${U.rasterType} analysis (RGB)`
                  }
                ), Ge = rs(
                  `WaterFlowAccumulation_${W}`
                );
                H = {
                  ...Me,
                  sldContent: Ge,
                  sldFilename: `terrain_${U.rasterType}_${W}.sld`
                };
              } else
                H = await Zl(
                  C,
                  G,
                  b,
                  {
                    sampleFormat: "float",
                    bitsPerSample: 32,
                    compression: "deflate",
                    description: `Terrain ${U.rasterType} analysis`
                  }
                );
              ie.push(H);
            }
          }
          if (ie.length > 0) {
            const J = await ns(
              t,
              ie,
              W,
              j
            );
            Q.push(...J), console.log("Uploaded GeoTIFF URLs:", Q);
          } else
            t.notifier.add({
              type: Lt.WARNING,
              message: "No terrain analysis data available for GeoTIFF export."
            });
        }
        if (S.geojson && i.value) {
          const ae = `terrainAnalysis_polygon_${W}_${j}.geojson`, ie = new qa({
            dataProjection: "EPSG:4326",
            featureProjection: "EPSG:3857"
          }).writeFeature(i.value), J = new Blob([ie], {
            type: "application/vnd.geo+json"
          });
          ge = await Gt(
            t,
            J,
            ae,
            W
          ), console.log(
            `[GeoJSON] GeoJSON report uploaded: ${ge}`
          );
        }
        if (Q.length + (ge ? 1 : 0) > 0) {
          const ae = ge ? p(ge) : Q.length > 0 ? p(Q[0]) : null;
          ae && t.notifier.add({
            type: Lt.SUCCESS,
            message: `Files can be found here: ${ae}/`
          });
        }
      } catch (Q) {
        console.error("Upload to MinIO error:", Q);
        const ge = Q instanceof Error ? Q.message : String(Q);
        t.notifier.add({
          type: Lt.ERROR,
          message: `Failed to upload to MinIO: ${ge}`
        });
      }
    }
    return {
      polygon: i,
      terrainAnalysisResult: m,
      resultsAvailable: a,
      handleSession: P,
      minioUploadEnabled: o,
      uploadMinio: A,
      openUploadDialog: E,
      cancelUploadDialog: _,
      confirmUploadDialog: y,
      showUploadDialog: c,
      uploadOptions: f,
      uploadSuffix: l,
      defaultUploadSuffix: d,
      hasAnyUploadOption: g,
      canUploadReportData: T,
      flowNoteLine1: L,
      flowNoteLine2: O,
      icons: yn,
      closeSelf() {
        t.windowManager.remove(Ln);
      }
    };
  }
}), os = { class: "d-flex justify-start gc-2 mt-4 mb-2" }, is = {
  width: "450",
  height: "145",
  style: { "vertical-align": "middle" }
}, ls = /* @__PURE__ */ pe(
  "rect",
  {
    id: "sourceBox",
    x: "0",
    y: "10",
    width: "20",
    height: "20"
  },
  null,
  -1
  /* HOISTED */
), ss = {
  x: "30",
  y: "25",
  "alignment-baseline": "middle"
}, cs = /* @__PURE__ */ pe(
  "rect",
  {
    id: "collectionBox",
    x: "0",
    y: "40",
    width: "20",
    height: "20"
  },
  null,
  -1
  /* HOISTED */
), us = {
  x: "30",
  y: "55",
  "alignment-baseline": "middle"
}, fs = /* @__PURE__ */ pe(
  "rect",
  {
    id: "sinkBox",
    x: "0",
    y: "70",
    width: "20",
    height: "20"
  },
  null,
  -1
  /* HOISTED */
), ds = {
  x: "30",
  y: "85",
  "alignment-baseline": "middle"
}, ms = {
  x: "0",
  y: "110",
  style: { "font-size": "12px", "font-style": "italic" }
}, gs = {
  x: "0",
  dy: "0"
}, ps = {
  x: "0",
  dy: "15"
}, ys = { class: "d-flex justify-end gc-2" }, _s = { class: "text-body-2 mb-3" }, hs = { class: "text-caption mb-3" }, Ts = {
  key: 0,
  class: "text-caption mt-2"
};
function Es(e, t, n, r, o, a) {
  const i = ce("VcsFormSection"), c = ce("v-form"), l = ce("SelectionArea"), d = ce("v-container"), f = ce("v-divider"), m = ce("VcsFormButton"), g = ce("v-col"), T = ce("v-icon"), L = ce("v-row"), O = ce("v-card-title"), P = ce("VcsLabel"), D = ce("VcsTextField"), F = ce("VcsCheckbox"), p = ce("v-card-text"), E = ce("v-spacer"), _ = ce("v-card-actions"), y = ce("v-card"), A = ce("v-dialog");
  return lt(), Dt(
    jt,
    null,
    [
      ne(
        c,
        { ref: "form" },
        {
          default: de(() => [
            ne(i, {
              heading: e.$t("terrainAnalysis.help-title"),
              "start-open": "",
              "start-help-open": !0
            }, {
              help: de(() => [
                pe("ol", null, [
                  pe(
                    "li",
                    null,
                    Ee(e.$t("terrainAnalysis.hint1.title")) + ":",
                    1
                    /* TEXT */
                  ),
                  pe(
                    "span",
                    null,
                    Ee(e.$t("terrainAnalysis.hint1.description")),
                    1
                    /* TEXT */
                  ),
                  pe(
                    "li",
                    null,
                    Ee(e.$t("terrainAnalysis.hint2.title")) + ":",
                    1
                    /* TEXT */
                  ),
                  pe(
                    "span",
                    null,
                    Ee(e.$t("terrainAnalysis.hint2.description")),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["heading"])
          ]),
          _: 1
          /* STABLE */
        },
        512
        /* NEED_PATCH */
      ),
      ne(d, null, {
        default: de(() => [
          $e('v-divider :thickness="2" class="mt-2 mb-2"></v-divider'),
          ne(i, {
            heading: e.$t("terrainAnalysis.drawGeometry"),
            expandable: "",
            "start-open": "",
            tooltip: e.$t("terrainAnalysis.drawGeometryTooltip")
          }, {
            default: de(() => [
              ne(d, { class: "mt-3 py-1 px-1" }, {
                default: de(() => [
                  ne(l, {
                    onSessionstart: t[0] || (t[0] = (v) => e.handleSession(v))
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["heading", "tooltip"]),
          ne(f, {
            thickness: 2,
            class: "mb-2"
          }),
          pe(
            "h2",
            null,
            Ee(e.$t("terrainAnalysis.explanation.title")),
            1
            /* TEXT */
          ),
          pe("div", os, [
            (lt(), Dt("svg", is, [
              $e(" Source areas (green) "),
              ls,
              pe(
                "text",
                ss,
                Ee(e.$t("terrainAnalysis.explanation.sourceAreas")),
                1
                /* TEXT */
              ),
              $e(" Collection areas (blue) "),
              cs,
              pe(
                "text",
                us,
                Ee(e.$t("terrainAnalysis.explanation.collectionAreas")),
                1
                /* TEXT */
              ),
              $e(" Sink areas (red) "),
              fs,
              pe(
                "text",
                ds,
                Ee(e.$t("terrainAnalysis.explanation.sinkAreas")),
                1
                /* TEXT */
              ),
              $e(" Flow intensity note "),
              pe("text", ms, [
                pe(
                  "tspan",
                  gs,
                  Ee(e.flowNoteLine1),
                  1
                  /* TEXT */
                ),
                pe(
                  "tspan",
                  ps,
                  Ee(e.flowNoteLine2),
                  1
                  /* TEXT */
                )
              ])
            ]))
          ]),
          ne(f, {
            thickness: 2,
            class: "mb-2"
          }),
          pe("div", ys, [
            e.minioUploadEnabled ? (lt(), rn(m, {
              key: 0,
              onClick: e.openUploadDialog,
              icon: "$vcsUpload",
              disabled: !(e.terrainAnalysisResult && e.polygon)
            }, {
              default: de(() => [
                Tt(
                  Ee(e.$t("terrainAnalysis.uploadButton")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick", "disabled"])) : $e("v-if", !0),
            ne(A, {
              modelValue: e.showUploadDialog,
              "onUpdate:modelValue": t[4] || (t[4] = (v) => e.showUploadDialog = v),
              persistent: "",
              "max-width": "520"
            }, {
              default: de(() => [
                ne(y, null, {
                  default: de(() => [
                    ne(O, { class: "text-h6" }, {
                      default: de(() => [
                        ne(L, {
                          align: "center",
                          "no-gutters": ""
                        }, {
                          default: de(() => [
                            ne(g, {
                              class: "text-left text-h6",
                              cols: "6"
                            }, {
                              default: de(() => [
                                Tt(
                                  Ee(e.$t("terrainAnalysis.uploadDialog.title")),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            ne(g, {
                              class: "text-right",
                              cols: "6"
                            }, {
                              default: de(() => [
                                ne(T, {
                                  color: "error",
                                  icon: e.icons[3].icon,
                                  size: "88"
                                }, null, 8, ["icon"])
                              ]),
                              _: 1
                              /* STABLE */
                            })
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    ne(p, { class: "pt-2" }, {
                      default: de(() => [
                        pe(
                          "div",
                          _s,
                          Ee(e.$t("terrainAnalysis.uploadDialog.selectItems")),
                          1
                          /* TEXT */
                        ),
                        ne(P, { "html-for": "uploadSuffixInput" }, {
                          default: de(() => [
                            Tt(
                              Ee(e.$t("terrainAnalysis.uploadDialog.fileSuffixLabel")),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        ne(D, {
                          id: "uploadSuffixInput",
                          modelValue: e.uploadSuffix,
                          "onUpdate:modelValue": t[1] || (t[1] = (v) => e.uploadSuffix = v),
                          placeholder: e.$t("terrainAnalysis.uploadDialog.fileSuffixPlaceholder"),
                          class: "mb-1"
                        }, null, 8, ["modelValue", "placeholder"]),
                        pe(
                          "div",
                          hs,
                          Ee(e.$t("terrainAnalysis.uploadDialog.fileSuffixCurrent")) + ' "' + Ee(e.defaultUploadSuffix) + '". ',
                          1
                          /* TEXT */
                        ),
                        ne(F, {
                          modelValue: e.uploadOptions.geotiff,
                          "onUpdate:modelValue": t[2] || (t[2] = (v) => e.uploadOptions.geotiff = v),
                          label: e.$t("terrainAnalysis.uploadDialog.geotiffResultLabel")
                        }, null, 8, ["modelValue", "label"]),
                        ne(F, {
                          modelValue: e.uploadOptions.geojson,
                          "onUpdate:modelValue": t[3] || (t[3] = (v) => e.uploadOptions.geojson = v),
                          label: e.$t("terrainAnalysis.uploadDialog.geojsonLabel"),
                          disabled: !e.canUploadReportData
                        }, null, 8, ["modelValue", "label", "disabled"]),
                        e.canUploadReportData ? $e("v-if", !0) : (lt(), Dt(
                          "div",
                          Ts,
                          Ee(e.$t("terrainAnalysis.uploadDialog.requiredFilesLabel")),
                          1
                          /* TEXT */
                        ))
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    ne(_, null, {
                      default: de(() => [
                        ne(E),
                        ne(m, { onClick: e.cancelUploadDialog }, {
                          default: de(() => [
                            Tt("Cancel")
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["onClick"]),
                        ne(m, {
                          onClick: e.confirmUploadDialog,
                          disabled: !e.hasAnyUploadOption
                        }, {
                          default: de(() => [
                            Tt(" Upload ")
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["onClick", "disabled"])
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          $e(`VcsFormSection\r
      :heading="$t('terrainAnalysis.enterGeometry')"\r
      expandable\r
      :tooltip="$t('terrainAnalysis.enterGeometryTooltip')"\r
    >\r
      <VcsTextArea\r
        placeholder="[\r
  [13.375916137434332,52.50958736153632],\r
  [13.376031120070795,52.50959004427611],\r
  [13.375970378742716,52.50978645439449]\r
]"\r
        tooltip="This is a tooltip"\r
        rows="6"\r
        v-model="manPolygon"\r
      />\r
    </VcsFormSection`),
          $e('v-divider :thickness="2" class="mb-2"></v-divider'),
          $e(`div class="d-flex justify-end gc-2 mt-4">\r
      <VcsFormButton @click="openResultWindow" :disabled="!resultsAvailable">\r
        {{ $t('terrainAnalysis.showResults') }}\r
      </VcsFormButton>\r
      <VcsFormButton @click="run" :disabled="!pileFeatureCollection">{{\r
        $t('terrainAnalysis.runAnalysis')\r
      }}</VcsFormButton>\r
    </div`)
        ]),
        _: 1
        /* STABLE */
      })
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const vs = /* @__PURE__ */ na(as, [["render", Es]]);
function ur() {
  return {
    allowCatalogueRegistry: !1,
    catalogueEndpoint: "https://urbreath.virtualcitymap.de/minioproxy",
    allowMinioUpload: !1,
    minioEndpoint: "https://urbreath.virtualcitymap.de/minioproxy",
    minioBucketName: "vcs-analysis"
  };
}
typeof process > "u" && (globalThis.process = {
  env: {},
  version: "",
  versions: {}
}), typeof global > "u" && (globalThis.global = globalThis), !0;
const Ln = "terrainAnalysis_window_id", yn = [
  {
    title: "snowmelt",
    set: "custom",
    icon: 'svgString:<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path fill="currentColor" d="M2.475 12.5A2.475 2.467 0 0 0 0 14.967v70.066A2.475 2.467 0 0 0 2.475 87.5h95.05A2.475 2.467 0 0 0 100 85.033V14.967a2.475 2.467 0 0 0-2.475-2.467Zm2.475 4.934h.573c-.122 1.102-.296 2.12-.573 2.887zm3.067 0h8.784c-.825 3.029-1.62 6.069-2.004 8.068c-1.013 5.281-1.032 9.217-1.502 12.677s-1.454 6.527-1.367 9.053a7.1 7.1 0 0 0 .632 2.687c.238.543.234.514.222.559c-.086.326-.171.477-.205.532c.038.016.026.028-.011.025l-.004.008c-.01-.004.003-.009-.045-.01c.044.001.03 0 .049.002l.011-.025c-.028-.012-.052-.019-.102-.054a3.5 3.5 0 0 1-.553-.515c-.386-.437-.68-1.137-.656-.996c-.049-.297-.5-3.379-1.131-6.638c-.63-3.26-1.321-6.64-2.41-8.517c-.856-1.478-2.04-2.032-2.775-2.246v-5.923c.544-1.447 1.224-2.854 1.818-3.85c.864-1.45 1.098-3.165 1.25-4.837m11.356 0h.412c-.612 2.223-.994 4.831-1.286 7.498c-.446 4.06-.645 8.187-.86 10.782c-.214 2.57-.476 3.083-.598 4.236c-.123 1.154-.039 2.56.435 6.573c.484 4.108 2.046 12.521 3.885 20.32c.92 3.9 1.906 7.635 2.871 10.594c.483 1.48.957 2.762 1.431 3.799c.23.501.443.94.681 1.33h-2.388c-.75-4.466-1.508-8.785-2.914-11.335c-1.263-2.291-2.083-3.267-2.948-3.844c-.864-.576-1.258-.554-2.148-1.312c-1.232-1.05-2.946-1.916-4.46-2.812c-1.512-.897-2.734-1.918-2.921-2.334c-.18-.402-.174-.546-.174-.538c0 .007-.03.052.077-.126a4.37 4.37 0 0 0 .578-2.854c-.387-2.735-2.142-7.636-4.094-10.196l-.002-.002V34.66c.168.146.35.374.633.862c.569.981 1.504 4.559 2.121 7.75c.617 3.192 1.033 6.053 1.12 6.575c.159.96.653 1.559 1.237 2.222c.293.332.615.64.983.9s.778.515 1.412.53c.691.017 1.452-.266 1.914-.763s.654-1.059.804-1.629c.243-.917-.132-1.69-.346-2.178s-.397-.911-.427-1.783c-.06-1.713.845-4.947 1.346-8.636c.5-3.689.51-7.484 1.481-12.546c.385-2.003 1.254-5.29 2.145-8.53m3 0h4.588a5.4 5.4 0 0 0-1.025 1.157c-.642.988-1.067 2.175-1.916 4.294c-1.811 4.52-3.808 13.753-3.533 20.539s2.956 12.314 4.64 18.139c.834 2.881 1.548 6.679 2.42 10.12c.872 3.442 1.756 6.537 3.676 8.292c.856.783 1.72 1.211 2.558 1.28c.84.07 1.518-.222 1.955-.434c.418-.201.625-.27.604-.275c-.022-.029 0-.012.029-.014l-.03.014c.017.021.047.054.173.208c.262.322.372.96.385 1.812H29.95a8 8 0 0 1-1.11-.806c-.07-.058-.511-.648-.923-1.548s-.866-2.114-1.33-3.538c-.929-2.848-1.906-6.535-2.816-10.393c-1.82-7.716-3.377-16.164-3.835-20.045c-.469-3.977-.52-5.214-.433-6.025c.087-.812.379-1.587.604-4.295c.222-2.683.42-6.756.854-10.714c.316-2.875.792-5.696 1.414-7.768m19.236 0h15.857c-1.85.428-3.721.927-5.52 1.455c-2.963.87-5.717 1.795-7.776 2.5c-1.03.353-1.888.65-2.5.856c-.307.103-.555.182-.718.231l-.054.016c.013-.004.037 0-.11-.045c-.213-.064-.517-.165-.877-.281a25 25 0 0 0-2.726-.744c-2.119-.431-4.798-.6-6.97.973c-2.159 1.565-3.163 4.274-3.828 7.169c-.666 2.894-.96 6.069-1.304 8.73c-.739 5.71.877 10.61 2.176 16.623c.674 3.122 2.074 8.052 3.395 12.249c.661 2.098 1.301 4.007 1.826 5.416c.262.704.493 1.28.702 1.723c.104.222.198.405.325.597c.063.096.13.194.265.324s.363.386.93.386c.42 0 .516-.067.737-.122s.47-.122.754-.19c.568-.137 1.27-.277 1.995-.32c1.453-.087 2.85.146 3.878 1.472c.385.497.628 1.497.607 2.85c-.015.965-.168 2.096-.358 3.264H39.43c.013-1.215-.189-2.373-.996-3.366c-.58-.713-1.433-1.176-2.208-1.13c-.776.044-1.232.37-1.567.531s-.5.21-.675.195s-.494-.095-1.088-.638c-.981-.897-2.106-3.747-2.95-7.078c-.843-3.33-1.551-7.13-2.44-10.202c-1.759-6.08-4.296-11.37-4.546-17.555s1.759-15.536 3.357-19.524c.855-2.135 1.304-3.26 1.698-3.867c.394-.606.747-.867 1.885-1.538c.987-.581.972-.45 2.124-.304c1.15.146 3.065.366 6.59-.081c.876-.112 1.903-.323 2.995-.575m29.87 0h9.35c.938.956 1.833 1.988 2.803 3.082c3.424 3.86 4.84 7.007 6.29 12.777c1.377 5.485.961 15.195.784 20.97c-.081 2.652-.905 5.26-1.497 7.595c-.295 1.167-.54 2.267-.549 3.344s.264 2.21 1.072 3.058c.671.706 1.44 1.169 2.245 1.332c.803.164 1.58.02 2.233-.239c.298-.118.574-.262.84-.414v1.037c-1.444 1.172-2.694 2.115-3.491 2.496l-.03.015l-.034.018c-1.242.684-2.152 1.052-2.711 1.18c-.56.127-.647.042-.667.028s-.155-.158-.279-.617s-.218-1.15-.324-1.962l-.002-.002v-.004c-.222-1.629.063-4.724.35-8.237s.551-7.5.139-11.278c-.797-7.29-2.186-17.738-5.983-23.933c-1.77-2.885-3.183-5.175-5.16-7.021c-1.43-1.336-3.146-2.388-5.38-3.225m12.703 0h3.31c2.786 3.525 4.785 7.581 5.713 10.757c1.155 3.954.032 6.254.286 9.751c.238 3.279.925 6.098.998 8.841c.03 1.132-.453 3-.805 4.713c-.175.856-.32 1.68-.29 2.494s.311 1.812 1.195 2.342c.162.096.314.165.46.215v9.356c-.645.499-1.264.963-1.755 1.159c-.34.134-.583.162-.822.113c-.24-.048-.534-.18-.944-.61c-.274-.289-.399-.644-.392-1.34c.006-.696.193-1.655.473-2.762c.562-2.215 1.476-5.026 1.57-8.124c.176-5.725.71-15.416-.856-21.645c-1.494-5.945-3.182-9.693-6.836-13.812q-.649-.73-1.305-1.448m6.412 0h4.456v8.452c-.963-2.676-2.47-5.647-4.456-8.452m-25.362 1.303c1.14-.036 2.116.033 2.837.216c3.427.872 5.444 1.964 7.097 3.508s2.977 3.63 4.74 6.507c3.267 5.329 4.845 15.698 5.633 22.911c.38 3.475.14 7.33-.145 10.811c-.284 3.482-.639 6.533-.334 8.77c.105.802.194 1.56.388 2.278c.195.72.514 1.481 1.246 1.993c.73.512 1.69.573 2.64.357c.936-.214 1.989-.678 3.314-1.405c.741-.356 1.546-.875 2.402-1.5v3.681c-.524.491-1.003.938-1.358 1.257c-.395.355-.742.617-.692.586c-.532.33-2.062 1.144-3.613 1.725c-1.55.581-3.216.782-3.61.634c-.563-.211-.945-.343-1.114-.422s-.098-.03-.141-.092c-.085-.127-.393-1.051-1.038-3.102c-.492-1.562-.336-5.002-.091-8.744c.244-3.743.513-7.857-.196-11.368c-1.361-6.744-4.783-14.54-7.545-18.579c-1.378-2.014-2.605-3.051-3.636-3.766c-1.03-.715-1.738-1.075-2.527-1.98c-.577-.66-.45-1.5-.84-3.002s-1.613-3.204-4.596-4.376c-.85-.333-1.801-.529-2.83-.613a15 15 0 0 0-1.187-.048c-2.841-.008-6.15.69-9.473 1.633c-5.065 1.438-10.033 3.558-12.91 5.497c-2.649 1.785-4.047 2.578-5.082 3.882s-1.4 2.799-2.137 5.63c-.85 3.27-.258 7.82.74 12.28c1 4.46 2.446 8.728 3.686 11.211c1.177 2.357 2.03 3.76 3.03 4.728c1.002.968 2.137 1.358 3.32 1.633c1.055.244 2.015-.25 2.652-.787c.638-.536 1.129-1.17 1.588-1.719c.459-.548.897-1 1.154-1.162c.258-.163.106-.169.314-.048c.031.018.322.385.471 1.281c.15.897.183 2.165.159 3.566c-.047 2.801-.312 6.114.1 8.783c.057.365.08.767.09 1.184h-2.913c.17-1.1.307-2.19.323-3.225c.026-1.621-.177-3.176-1.125-4.398c-1.64-2.113-4.093-2.54-5.983-2.427a14 14 0 0 0-2.427.386c-.124.03-.195.05-.302.077a22 22 0 0 1-.51-1.257c-.5-1.34-1.133-3.223-1.785-5.295c-1.305-4.143-2.7-9.073-3.338-12.029c-1.327-6.143-2.795-10.719-2.139-15.79c.353-2.727.649-5.832 1.26-8.493c.613-2.662 1.576-4.787 2.87-5.725c1.282-.928 3.203-.921 5.02-.551c.91.185 1.764.449 2.457.673c.346.112.65.215.92.297s.413.17.88.17c.275 0 .325-.033.422-.057c.097-.023.19-.05.297-.083c.215-.064.477-.15.795-.256c.636-.214 1.49-.511 2.514-.862c2.047-.7 4.767-1.613 7.671-2.467c2.905-.853 5.997-1.645 8.76-2.108c1.382-.232 2.687-.373 3.827-.409m-5.507 8.797c1.433-.04 2.623.085 3.419.397c2.536.996 2.864 1.752 3.11 2.698c.245.946.093 2.543 1.367 4.004c1.061 1.217 2.089 1.767 2.982 2.386c.892.619 1.778 1.337 3.005 3.13c2.446 3.576 5.89 11.373 7.162 17.676c.608 3.012.397 6.987.153 10.719s-.586 7.15.2 9.645c.631 2.007.767 2.88 1.343 3.737c.172.254.403.462.646.64H77.57c.422-1.994-.019-4.406-.81-7.107c-.932-3.178-2.454-6.717-4.214-10.045s-3.753-6.438-5.672-8.743c-.96-1.153-1.895-2.107-2.829-2.8c-.817-.607-1.654-1.071-2.6-1.107a3 3 0 0 0-.413.011c-.937.089-1.67.604-2.342 1.269c-.671.665-1.291 1.533-1.871 2.579c-1.16 2.09-2.15 4.9-2.667 8.14c-1.471 9.2.243 13.486 2.564 17.803h-6.494a12 12 0 0 0-.127-1.56c-.337-2.179-.12-5.456-.072-8.365c.025-1.454.007-2.82-.191-4.01c-.199-1.191-.554-2.366-1.671-3.013c-.941-.545-2.14-.37-2.88.096s-1.248 1.09-1.732 1.668s-.935 1.12-1.284 1.414s-.42.285-.493.268c-1.07-.248-1.54-.4-2.158-.998c-.619-.599-1.403-1.789-2.537-4.06c-1.071-2.143-2.527-6.363-3.487-10.648c-.96-4.286-1.381-8.736-.76-11.124c.735-2.827 1.06-3.935 1.682-4.718s1.844-1.561 4.527-3.37c2.455-1.653 7.354-3.788 12.203-5.165c3.03-.86 6.094-1.381 8.483-1.447m-14.28 9.213a4.4 4.4 0 0 0-.896.006c-.6.062-1.2.231-1.8.453c-1.2.443-2.407 1.15-3.464 2.03c-1.057.878-1.972 1.922-2.504 3.131c-.533 1.21-.623 2.702.14 3.965c.682 1.126 1.717 1.844 2.799 1.978s2.07-.23 2.922-.729c1.703-.997 3.021-2.581 3.715-3.812c.472-.84 1.357-1.819 1.862-3.028c.253-.605.423-1.406.077-2.192c-.345-.785-1.082-1.287-1.964-1.603a3.7 3.7 0 0 0-.886-.199m-.223 2.479q.179.009.27.042c.487.175.537.286.526.264a1 1 0 0 1-.085.26c-.236.567-1.08 1.61-1.734 2.77c-.433.768-1.686 2.233-2.81 2.891c-.562.33-1.051.445-1.363.407s-.587-.145-.985-.802c-.314-.519-.305-.994.006-1.7c.31-.706.982-1.528 1.824-2.228s1.847-1.282 2.736-1.61c.666-.245 1.259-.312 1.615-.294M4.95 52.57c.807 1.977 1.49 4.094 1.644 5.185c.13.91.045.755-.243 1.23c-.145.237-.39.678-.43 1.231s.109 1.105.385 1.72c.727 1.617 2.322 2.503 3.916 3.448s3.277 1.85 4.115 2.565c1.18 1.006 1.968 1.213 2.38 1.488c.413.275.965.822 2.155 2.98c.938 1.702 1.826 5.853 2.568 10.148h-1.495c-1.617-4.397-3.282-8.082-5.4-10.464c-1.758-1.979-3.25-2.508-4.253-2.668s-1.144.039-2.143-1.017c-.774-.818-1.462-3.151-2.218-5.6c-.28-.906-.589-1.842-.98-2.735Zm56.314 2.662c.106-.01.614.106 1.302.617c.688.51 1.526 1.34 2.403 2.396c1.756 2.11 3.692 5.109 5.388 8.316s3.16 6.635 4.026 9.59c.844 2.877 1.002 5.328.619 6.414H59.51c-2.604-4.61-4.447-7.824-2.914-17.415c.475-2.972 1.397-5.547 2.388-7.333c.496-.894 1.012-1.59 1.45-2.024c.44-.435.792-.557.83-.561M4.95 67.893c.355.822.796 1.579 1.399 2.216c1.371 1.45 2.782 1.639 3.554 1.762c.772.122 1.28.167 2.79 1.867c1.58 1.778 3.053 4.923 4.55 8.828h-3.631c-1.125-2.395-2.405-4.509-3.937-5.867c-1.64-1.453-3.308-1.997-4.725-2.217Zm0 9.072c.966.186 1.958.582 3.08 1.576c.875.777 1.847 2.256 2.774 4.025H4.95Zm90.1 3.257v2.344h-4.355c1.563-.621 2.929-1.339 3.612-1.762a5.3 5.3 0 0 0 .743-.582" color="currentColor"/></svg>'
  },
  {
    title: "graph",
    set: "custom",
    icon: 'svgString:<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m16 11.78l4.24-7.33l1.73 1l-5.23 9.05l-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8z"/></svg>'
  },
  {
    title: "pdfIcon",
    set: "custom",
    icon: 'svgString:<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M161.28 328.32a61 61 0 0 0-40.32-8.32H85.333v128h28.373v-48.853h12.16a55.04 55.04 0 0 0 35.84-8.747a38.61 38.61 0 0 0 13.44-30.933a37.33 37.33 0 0 0-13.866-31.147m-22.827 46.72a32.85 32.85 0 0 1-17.067 2.56h-8.32v-36.266h8.32a30.3 30.3 0 0 1 17.494 3.413a17.49 17.49 0 0 1 7.466 15.36a15.15 15.15 0 0 1-7.893 14.933M236.16 320h-35.414v128h33.92a90.24 90.24 0 0 0 50.134-9.6a60.16 60.16 0 0 0 23.893-54.4a64 64 0 0 0-17.707-48.853A73.4 73.4 0 0 0 236.16 320m28.16 98.987a51.2 51.2 0 0 1-29.227 6.4h-5.547v-82.773h5.12c17.92 0 24.96 1.706 32 8.106a43.95 43.95 0 0 1 12.16 33.28a41.39 41.39 0 0 1-14.506 34.987M339.84 448h28.8v-53.546h58.026V371.84H368.64v-29.226h58.026V320H339.84zM320 42.667H85.333v234.667H128v-192h174.293L384 167.04v110.294h42.666v-128z"/></svg>'
  },
  {
    title: "minioIcon",
    set: "custom",
    icon: 'svgString:<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 106 18" fill="none" class="navbar_logo w-variant-e50a6df3-7ed9-d560-de46-856fa3fb13c1"><path d="M40.6149 0.304199H34.7266V17.6899H40.6149V0.304199Z" fill="currentColor"></path><path d="M27.4597 0.241986L15.5093 7.53878C15.3418 7.64426 15.1246 7.64426 14.9571 7.53878L3.00672 0.241986C2.75233 0.0868666 2.4545 0 2.15047 0H2.13806C1.23216 0 0.5 0.732161 0.5 1.63806V17.3671H6.38211V9.88418C6.38211 9.42503 6.88469 9.13961 7.27559 9.38159L13.9705 13.4767C14.6282 13.88 15.4597 13.8862 16.1236 13.4953L23.1908 9.35057C23.5817 9.12099 24.0781 9.40641 24.0781 9.85936V17.3671H29.9602V1.63806C29.9602 0.732161 29.228 0 28.3221 0H28.3097C28.0057 0 27.7141 0.0806618 27.4535 0.241986" fill="currentColor"></path><path d="M69.9642 0.304199H63.9953V8.21526C63.9953 8.66201 63.5237 8.94122 63.1328 8.73646L47.6581 0.496547C47.4224 0.372452 47.1556 0.304199 46.8887 0.304199H46.8763C45.9704 0.304199 45.2383 1.03636 45.2383 1.94226V17.6713H51.1576V9.76645C51.1576 9.32592 51.6292 9.0405 52.0201 9.24525L67.5506 17.4852C67.7864 17.6093 68.0532 17.6775 68.32 17.6775C69.2259 17.6775 69.958 16.9454 69.958 16.0395V0.304199H69.9642Z" fill="currentColor"></path><path d="M77.3013 0.304199H74.5898V17.6899H77.3013V0.304199Z" fill="currentColor"></path><path d="M93.242 18C85.9576 18 80.7891 14.544 80.7891 9.0031C80.7891 3.46225 85.9824 0 93.242 0C100.502 0 105.726 3.45605 105.726 8.9969C105.726 14.5377 100.619 17.9938 93.242 17.9938M93.242 2.30196C87.8253 2.30196 83.6495 4.66598 83.6495 8.9969C83.6495 13.3278 87.8253 15.6918 93.242 15.6918C98.6588 15.6918 102.866 13.3588 102.866 8.9969C102.866 4.63495 98.665 2.30196 93.242 2.30196Z" fill="currentColor"></path></svg>'
  }
];
function bs(e, t) {
  const n = ur(), r = { ...n, ...e };
  console.log(r, t);
  const o = [];
  return {
    get name() {
      return mt;
    },
    get version() {
      return vo;
    },
    get mapVersion() {
      return Ao;
    },
    get config() {
      return r;
    },
    initialize(a, i) {
      console.log(
        "Called before loading the rest of the current context. Passed in the containing Vcs UI App ",
        a,
        i
      );
      const c = {
        name: "Waterflow",
        properties: {
          legend: [
            {
              type: "StyleLegendItem",
              colNr: 1,
              rows: [
                {
                  type: "FillLegendRow",
                  fill: {
                    color: "#191970"
                  },
                  title: ">= 30 (stream)"
                },
                {
                  type: "FillLegendRow",
                  fill: {
                    color: "#0000CD"
                  },
                  title: ">= 20 (small stream)"
                },
                {
                  type: "FillLegendRow",
                  fill: {
                    color: "#6495ED"
                  },
                  title: ">= 10 (water flow)"
                },
                {
                  type: "FillLegendRow",
                  fill: {
                    color: "#50C878"
                  },
                  title: "= ridge or high point"
                },
                {
                  type: "FillLegendRow",
                  fill: {
                    color: "#FF0000"
                  },
                  title: "sink"
                },
                {
                  type: "FillLegendRow",
                  fill: {
                    color: "#FFFFFF"
                  },
                  title: "misc"
                }
              ]
            }
          ]
        },
        declarativeStyle: {
          show: "true",
          color: {
            conditions: [
              ["Number(${accumulation}) >= 30", "color('#191970',1)"],
              ["Number(${accumulation}) >= 20", "color('#0000CD',1)"],
              ["Number(${accumulation}) >= 10", "color('#6495ED',0.7)"],
              ["Number(${accumulation}) === 1", "color('#50C878',1)"],
              ["${isSink}", "color('#FF0000',1)"],
              ["true", "color('#FFFFFF',1)"]
            ]
          },
          strokeColor: "color('#191970',1)",
          strokeWidth: {
            conditions: [["true", "10"]]
          }
        }
      }, l = new ba(c);
      a.styles.add(l);
      const { action: d, destroy: f } = Ta(
        {
          name: "terrainAnalysis",
          icon: yn[0].icon,
          title: "terrainAnalysis.title"
        },
        {
          id: Ln,
          component: vs,
          state: {
            headerTitle: "terrainAnalysis.title",
            headerIcon: yn[0].icon
          },
          slot: Ea.DYNAMIC_LEFT,
          position: {
            //height: 800,
            minWidth: 450
          }
        },
        a.windowManager,
        mt
      );
      return o.push(f), a.toolboxManager.add(
        { type: va.SINGLE, id: mt, action: d },
        mt
      ), Promise.resolve();
    },
    onVcsAppMounted(a) {
      console.log(
        "Called when the root UI component is mounted and managers are ready to accept components",
        a
      );
    },
    /**
     * should return all default values of the configuration
     */
    getDefaultOptions() {
      return ur();
    },
    /**
     * should return the plugin's serialization excluding all default values
     */
    toJSON() {
      return r.allowMinioUpload !== n.allowMinioUpload && (e.allowMinioUpload = r.allowMinioUpload), r.minioEndpoint !== n.minioEndpoint && (e.minioEndpoint = r.minioEndpoint), r.minioBucketName !== n.minioBucketName && (e.minioBucketName = r.minioBucketName), r.allowCatalogueRegistry !== n.allowCatalogueRegistry && (e.allowCatalogueRegistry = r.allowCatalogueRegistry), r.catalogueEndpoint !== n.catalogueEndpoint && (e.catalogueEndpoint = r.catalogueEndpoint), e;
    },
    /**
     * should return the plugins state
     * @param {boolean} forUrl
     * @returns {PluginState}
     */
    getState(a) {
      return console.log("Called when collecting state, e.g. for create link", a), {
        prop: "*"
      };
    },
    /**
     * components for configuring the plugin and/ or custom items defined by the plugin
     */
    getConfigEditors() {
      return [];
    },
    i18n: { en: to, de: Qa, be: ro, ro: oo, it: lo, cz: co, ee: fo, es: go, fi: yo, dk: ho, gr: Eo },
    destroy() {
      o.forEach((a) => a());
    }
  };
}
export {
  bs as default,
  yn as icons,
  Ln as windowId
};
