
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
} await loadCss('data:text/css;base64,I3NvdXJjZUJveHtmaWxsOiM5MGVlOTA7c3Ryb2tlOiMwMDB9I2NvbGxlY3Rpb25Cb3h7ZmlsbDojYWRkOGU2O3N0cm9rZTojMDAwfSNzaW5rQm94e2ZpbGw6IzhiMDAwMDtzdHJva2U6IzAwMH0jYm94e2ZpbGw6IzE5MTk3MDtzdHJva2U6IzAwMH0jYm94MXtmaWxsOiMwMDAwY2Q7c3Ryb2tlOiMwMDB9I2JveDJ7ZmlsbDojNjQ5NWVkO3N0cm9rZTojMDAwfSNib3gze2ZpbGw6IzY0OTVlZDAwO3N0cm9rZTojMDAwfQo=');var ur = Object.defineProperty;
var fr = (e, t, n) => t in e ? ur(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Zt = (e, t, n) => fr(e, typeof t != "symbol" ? t + "" : t, n);
import { VcsToolButton as dr, getDefaultPrimaryColor as mr, VcsCheckbox as pr, VcsTextField as gr, VcsTextArea as yr, VcsFormButton as hr, VcsDatePicker as _r, VcsLabel as Tr, VcsSelect as Ir, VcsFormSection as Er, NotificationType as At, createToggleAction as vr, WindowSlot as Nr, ToolboxType as Sr } from "../../assets/ui.js";
import { VectorLayer as Or, mercatorProjection as br, markVolatile as Ar, VectorStyleItem as Lr, startCreateFeatureSession as wr, GeometryType as Cr, mercatorToCartesian as Cn, mercatorToWgs84Transformer as kn, DeclarativeStyleItem as kr } from "../../assets/core.js";
import { getCurrentInstance as _n, inject as Tn, shallowRef as da, ref as Ne, computed as Le, onBeforeMount as Fr, watch as Fn, onMounted as ma, onUnmounted as pa, defineComponent as Wt, h as ga, createVNode as te, Text as Pr, Fragment as jt, reactive as Dr, resolveComponent as fe, createBlock as rn, openBlock as st, withCtx as me, createElementBlock as Pt, renderList as Rr, toRaw as dt, createElementVNode as ye, toDisplayString as ve, createCommentVNode as je, createTextVNode as Tt } from "../../assets/vue.js";
import { VTooltip as Mr, VInput as Gr, VSheet as Ur, VSpacer as Vr, VDivider as xr, VIcon as Wr, VCardActions as jr, VCardText as $r, VCardTitle as Br, VCard as Yr, VDialog as Hr, VCol as Kr, VRow as Xr, VContainer as zr, VForm as Zr } from "../../assets/vuetify.js";
import { Color as Jr, Rectangle as ya, Math as Qe, Cartographic as Lt, sampleTerrainMostDetailed as qr, Cartesian3 as Qr, SingleTileImageryProvider as Jt } from "../../assets/cesium.js";
import { ol$format$GeoJSON as eo } from "../../assets/ol.js";
const to = {
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
}, no = {
  terrainAnalysis: to
}, ao = {
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
  uploadButton: "URBREATH",
  uploadButtonTooltip: "Upload report to URBREATH MinIO",
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
}, ro = {
  terrainAnalysis: ao
}, oo = {
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
}, io = {
  terrainAnalysis: oo
}, lo = {
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
}, so = {
  terrainAnalysis: lo
}, co = {
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
}, uo = {
  terrainAnalysis: co
}, fo = {
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
}, mo = {
  terrainAnalysis: fo
}, po = {
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
}, go = {
  terrainAnalysis: po
}, yo = {
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
}, ho = {
  terrainAnalysis: yo
}, _o = {
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
}, To = {
  terrainAnalysis: _o
}, Io = {
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
}, Eo = {
  terrainAnalysis: Io
}, vo = {
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
}, No = {
  terrainAnalysis: vo
}, pt = "terrainAnalysis", So = "1.0.0", Oo = "^6.1";
/*!
  * shared v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const Xe = typeof window < "u";
let De, ct;
if (process.env.NODE_ENV !== "production") {
  const e = Xe && window.performance;
  e && e.mark && e.measure && e.clearMarks && // @ts-ignore browser compat
  e.clearMeasures && (De = (t) => {
    e.mark(t);
  }, ct = (t, n, a) => {
    e.measure(t, n, a), e.clearMarks(n), e.clearMarks(a);
  });
}
const bo = /\{([0-9a-zA-Z]+)\}/g;
function In(e, ...t) {
  return t.length === 1 && X(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(bo, (n, a) => t.hasOwnProperty(a) ? t[a] : "");
}
const ze = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), Ao = (e, t, n) => Lo({ l: e, k: t, s: n }), Lo = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), Ie = (e) => typeof e == "number" && isFinite(e), wo = (e) => _a(e) === "[object Date]", yt = (e) => _a(e) === "[object RegExp]", $t = (e) => $(e) && Object.keys(e).length === 0, Oe = Object.assign, Co = Object.create, Q = (e = null) => Co(e);
let Pn;
const Ke = () => Pn || (Pn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : Q());
function Dn(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const ko = Object.prototype.hasOwnProperty;
function Ue(e, t) {
  return ko.call(e, t);
}
const pe = Array.isArray, ie = (e) => typeof e == "function", R = (e) => typeof e == "string", ne = (e) => typeof e == "boolean", X = (e) => e !== null && typeof e == "object", Fo = (e) => X(e) && ie(e.then) && ie(e.catch), ha = Object.prototype.toString, _a = (e) => ha.call(e), $ = (e) => {
  if (!X(e))
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t.constructor === Object;
}, Po = (e) => e == null ? "" : pe(e) || $(e) && e.toString === ha ? JSON.stringify(e, null, 2) : String(e);
function Do(e, t = "") {
  return e.reduce((n, a, o) => o === 0 ? n + a : n + t + a, "");
}
const Rn = 2;
function Ro(e, t = 0, n = e.length) {
  const a = e.split(/\r?\n/);
  let o = 0;
  const r = [];
  for (let i = 0; i < a.length; i++)
    if (o += a[i].length + 1, o >= t) {
      for (let c = i - Rn; c <= i + Rn || n > o; c++) {
        if (c < 0 || c >= a.length)
          continue;
        const l = c + 1;
        r.push(`${l}${" ".repeat(3 - String(l).length)}|  ${a[c]}`);
        const d = a[c].length;
        if (c === i) {
          const f = t - (o - d) + 1, p = Math.max(1, n > o ? d - f : n - t);
          r.push("   |  " + " ".repeat(f) + "^".repeat(p));
        } else if (c > i) {
          if (n > o) {
            const f = Math.max(Math.min(n - o, d), 1);
            r.push("   |  " + "^".repeat(f));
          }
          o += d + 1;
        }
      }
      break;
    }
  return r.join(`
`);
}
function Bt(e) {
  let t = e;
  return () => ++t;
}
function Ze(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const Mn = {};
function Ta(e) {
  Mn[e] || (Mn[e] = !0, Ze(e));
}
function Mo() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, a) {
      const o = e.get(n);
      o && o.push(a) || e.set(n, [a]);
    },
    off(n, a) {
      const o = e.get(n);
      o && o.splice(o.indexOf(a) >>> 0, 1);
    },
    emit(n, a) {
      (e.get(n) || []).slice().map((o) => o(a)), (e.get("*") || []).slice().map((o) => o(n, a));
    }
  };
}
const wt = (e) => !X(e) || pe(e);
function Dt(e, t) {
  if (wt(e) || wt(t))
    throw new Error("Invalid value");
  const n = [{ src: e, des: t }];
  for (; n.length; ) {
    const { src: a, des: o } = n.pop();
    Object.keys(a).forEach((r) => {
      r !== "__proto__" && (X(a[r]) && !X(o[r]) && (o[r] = Array.isArray(a[r]) ? [] : Q()), wt(o[r]) || wt(a[r]) ? o[r] = a[r] : n.push({ src: a[r], des: o[r] }));
    });
  }
}
/*!
  * message-compiler v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function Go(e, t, n) {
  return { line: e, column: t, offset: n };
}
function Ut(e, t, n) {
  return { start: e, end: t };
}
const Uo = /\{([0-9a-zA-Z]+)\}/g;
function Ia(e, ...t) {
  return t.length === 1 && Vo(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Uo, (n, a) => t.hasOwnProperty(a) ? t[a] : "");
}
const Ea = Object.assign, Gn = (e) => typeof e == "string", Vo = (e) => e !== null && typeof e == "object";
function va(e, t = "") {
  return e.reduce((n, a, o) => o === 0 ? n + a : n + t + a, "");
}
const Yt = {
  USE_MODULO_SYNTAX: 1,
  __EXTEND_POINT__: 2
}, xo = {
  [Yt.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function Wo(e, t, ...n) {
  const a = Ia(xo[e], ...n || []), o = { message: String(a), code: e };
  return t && (o.location = t), o;
}
const W = {
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
}, jo = {
  // tokenizer error messages
  [W.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [W.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [W.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [W.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [W.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [W.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [W.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [W.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [W.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [W.INVALID_LINKED_FORMAT]: "Invalid linked format",
  // parser error messages
  [W.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [W.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [W.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [W.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
  // generator error messages
  [W.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
  // minimizer error messages
  [W.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function _t(e, t, n = {}) {
  const { domain: a, messages: o, args: r } = n, i = Ia((o || jo)[e] || "", ...r || []), c = new SyntaxError(String(i));
  return c.code = e, t && (c.location = t), c.domain = a, c;
}
function $o(e) {
  throw e;
}
const Bo = /<\/?[\w\s="/.':;#-\/]+>/, Yo = (e) => Bo.test(e), Ye = " ", Ho = "\r", be = `
`, Ko = "\u2028", Xo = "\u2029";
function zo(e) {
  const t = e;
  let n = 0, a = 1, o = 1, r = 0;
  const i = (N) => t[N] === Ho && t[N + 1] === be, c = (N) => t[N] === be, l = (N) => t[N] === Xo, d = (N) => t[N] === Ko, f = (N) => i(N) || c(N) || l(N) || d(N), p = () => n, m = () => a, _ = () => o, L = () => r, O = (N) => i(N) || l(N) || d(N) ? be : t[N], F = () => O(n), P = () => O(n + r);
  function D() {
    return r = 0, f(n) && (a++, o = 0), i(n) && n++, n++, o++, t[n];
  }
  function g() {
    return i(n + r) && r++, r++, t[n + r];
  }
  function I() {
    n = 0, a = 1, o = 1, r = 0;
  }
  function h(N = 0) {
    r = N;
  }
  function y() {
    const N = n + r;
    for (; N !== n; )
      D();
    r = 0;
  }
  return {
    index: p,
    line: m,
    column: _,
    peekOffset: L,
    charAt: O,
    currentChar: F,
    currentPeek: P,
    next: D,
    peek: g,
    reset: I,
    resetPeek: h,
    skipToPeek: y
  };
}
const et = void 0, Zo = ".", Un = "'", Jo = "tokenizer";
function qo(e, t = {}) {
  const n = t.location !== !1, a = zo(e), o = () => a.index(), r = () => Go(a.line(), a.column(), a.index()), i = r(), c = o(), l = {
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
  function p(s, u, S, ...U) {
    const le = d();
    if (u.column += S, u.offset += S, f) {
      const ee = n ? Ut(le.startLoc, u) : null, J = _t(s, ee, {
        domain: Jo,
        args: U
      });
      f(J);
    }
  }
  function m(s, u, S) {
    s.endLoc = r(), s.currentType = u;
    const U = { type: u };
    return n && (U.loc = Ut(s.startLoc, s.endLoc)), S != null && (U.value = S), U;
  }
  const _ = (s) => m(
    s,
    14
    /* TokenTypes.EOF */
  );
  function L(s, u) {
    return s.currentChar() === u ? (s.next(), u) : (p(W.EXPECTED_TOKEN, r(), 0, u), "");
  }
  function O(s) {
    let u = "";
    for (; s.currentPeek() === Ye || s.currentPeek() === be; )
      u += s.currentPeek(), s.peek();
    return u;
  }
  function F(s) {
    const u = O(s);
    return s.skipToPeek(), u;
  }
  function P(s) {
    if (s === et)
      return !1;
    const u = s.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u === 95;
  }
  function D(s) {
    if (s === et)
      return !1;
    const u = s.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function g(s, u) {
    const { currentType: S } = u;
    if (S !== 2)
      return !1;
    O(s);
    const U = P(s.currentPeek());
    return s.resetPeek(), U;
  }
  function I(s, u) {
    const { currentType: S } = u;
    if (S !== 2)
      return !1;
    O(s);
    const U = s.currentPeek() === "-" ? s.peek() : s.currentPeek(), le = D(U);
    return s.resetPeek(), le;
  }
  function h(s, u) {
    const { currentType: S } = u;
    if (S !== 2)
      return !1;
    O(s);
    const U = s.currentPeek() === Un;
    return s.resetPeek(), U;
  }
  function y(s, u) {
    const { currentType: S } = u;
    if (S !== 8)
      return !1;
    O(s);
    const U = s.currentPeek() === ".";
    return s.resetPeek(), U;
  }
  function N(s, u) {
    const { currentType: S } = u;
    if (S !== 9)
      return !1;
    O(s);
    const U = P(s.currentPeek());
    return s.resetPeek(), U;
  }
  function b(s, u) {
    const { currentType: S } = u;
    if (!(S === 8 || S === 12))
      return !1;
    O(s);
    const U = s.currentPeek() === ":";
    return s.resetPeek(), U;
  }
  function k(s, u) {
    const { currentType: S } = u;
    if (S !== 10)
      return !1;
    const U = () => {
      const ee = s.currentPeek();
      return ee === "{" ? P(s.peek()) : ee === "@" || ee === "%" || ee === "|" || ee === ":" || ee === "." || ee === Ye || !ee ? !1 : ee === be ? (s.peek(), U()) : x(s, !1);
    }, le = U();
    return s.resetPeek(), le;
  }
  function M(s) {
    O(s);
    const u = s.currentPeek() === "|";
    return s.resetPeek(), u;
  }
  function V(s) {
    const u = O(s), S = s.currentPeek() === "%" && s.peek() === "{";
    return s.resetPeek(), {
      isModulo: S,
      hasSpace: u.length > 0
    };
  }
  function x(s, u = !0) {
    const S = (le = !1, ee = "", J = !1) => {
      const T = s.currentPeek();
      return T === "{" ? ee === "%" ? !1 : le : T === "@" || !T ? ee === "%" ? !0 : le : T === "%" ? (s.peek(), S(le, "%", !0)) : T === "|" ? ee === "%" || J ? !0 : !(ee === Ye || ee === be) : T === Ye ? (s.peek(), S(!0, Ye, J)) : T === be ? (s.peek(), S(!0, be, J)) : !0;
    }, U = S();
    return u && s.resetPeek(), U;
  }
  function B(s, u) {
    const S = s.currentChar();
    return S === et ? et : u(S) ? (s.next(), S) : null;
  }
  function ge(s) {
    const u = s.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36;
  }
  function he(s) {
    return B(s, ge);
  }
  function _e(s) {
    const u = s.charCodeAt(0);
    return u >= 97 && u <= 122 || // a-z
    u >= 65 && u <= 90 || // A-Z
    u >= 48 && u <= 57 || // 0-9
    u === 95 || // _
    u === 36 || // $
    u === 45;
  }
  function Ee(s) {
    return B(s, _e);
  }
  function z(s) {
    const u = s.charCodeAt(0);
    return u >= 48 && u <= 57;
  }
  function ae(s) {
    return B(s, z);
  }
  function q(s) {
    const u = s.charCodeAt(0);
    return u >= 48 && u <= 57 || // 0-9
    u >= 65 && u <= 70 || // A-F
    u >= 97 && u <= 102;
  }
  function Fe(s) {
    return B(s, q);
  }
  function Y(s) {
    let u = "", S = "";
    for (; u = ae(s); )
      S += u;
    return S;
  }
  function re(s) {
    F(s);
    const u = s.currentChar();
    return u !== "%" && p(W.EXPECTED_TOKEN, r(), 0, u), s.next(), "%";
  }
  function se(s) {
    let u = "";
    for (; ; ) {
      const S = s.currentChar();
      if (S === "{" || S === "}" || S === "@" || S === "|" || !S)
        break;
      if (S === "%")
        if (x(s))
          u += S, s.next();
        else
          break;
      else if (S === Ye || S === be)
        if (x(s))
          u += S, s.next();
        else {
          if (M(s))
            break;
          u += S, s.next();
        }
      else
        u += S, s.next();
    }
    return u;
  }
  function v(s) {
    F(s);
    let u = "", S = "";
    for (; u = Ee(s); )
      S += u;
    return s.currentChar() === et && p(W.UNTERMINATED_CLOSING_BRACE, r(), 0), S;
  }
  function E(s) {
    F(s);
    let u = "";
    return s.currentChar() === "-" ? (s.next(), u += `-${Y(s)}`) : u += Y(s), s.currentChar() === et && p(W.UNTERMINATED_CLOSING_BRACE, r(), 0), u;
  }
  function G(s) {
    return s !== Un && s !== be;
  }
  function j(s) {
    F(s), L(s, "'");
    let u = "", S = "";
    for (; u = B(s, G); )
      u === "\\" ? S += H(s) : S += u;
    const U = s.currentChar();
    return U === be || U === et ? (p(W.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, r(), 0), U === be && (s.next(), L(s, "'")), S) : (L(s, "'"), S);
  }
  function H(s) {
    const u = s.currentChar();
    switch (u) {
      case "\\":
      case "'":
        return s.next(), `\\${u}`;
      case "u":
        return ue(s, u, 4);
      case "U":
        return ue(s, u, 6);
      default:
        return p(W.UNKNOWN_ESCAPE_SEQUENCE, r(), 0, u), "";
    }
  }
  function ue(s, u, S) {
    L(s, u);
    let U = "";
    for (let le = 0; le < S; le++) {
      const ee = Fe(s);
      if (!ee) {
        p(W.INVALID_UNICODE_ESCAPE_SEQUENCE, r(), 0, `\\${u}${U}${s.currentChar()}`);
        break;
      }
      U += ee;
    }
    return `\\${u}${U}`;
  }
  function oe(s) {
    return s !== "{" && s !== "}" && s !== Ye && s !== be;
  }
  function Pe(s) {
    F(s);
    let u = "", S = "";
    for (; u = B(s, oe); )
      S += u;
    return S;
  }
  function xe(s) {
    let u = "", S = "";
    for (; u = he(s); )
      S += u;
    return S;
  }
  function C(s) {
    const u = (S) => {
      const U = s.currentChar();
      return U === "{" || U === "%" || U === "@" || U === "|" || U === "(" || U === ")" || !U || U === Ye ? S : (S += U, s.next(), u(S));
    };
    return u("");
  }
  function K(s) {
    F(s);
    const u = L(
      s,
      "|"
      /* TokenChars.Pipe */
    );
    return F(s), u;
  }
  function rt(s, u) {
    let S = null;
    switch (s.currentChar()) {
      case "{":
        return u.braceNest >= 1 && p(W.NOT_ALLOW_NEST_PLACEHOLDER, r(), 0), s.next(), S = m(
          u,
          2,
          "{"
          /* TokenChars.BraceLeft */
        ), F(s), u.braceNest++, S;
      case "}":
        return u.braceNest > 0 && u.currentType === 2 && p(W.EMPTY_PLACEHOLDER, r(), 0), s.next(), S = m(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        ), u.braceNest--, u.braceNest > 0 && F(s), u.inLinked && u.braceNest === 0 && (u.inLinked = !1), S;
      case "@":
        return u.braceNest > 0 && p(W.UNTERMINATED_CLOSING_BRACE, r(), 0), S = We(s, u) || _(u), u.braceNest = 0, S;
      default: {
        let le = !0, ee = !0, J = !0;
        if (M(s))
          return u.braceNest > 0 && p(W.UNTERMINATED_CLOSING_BRACE, r(), 0), S = m(u, 1, K(s)), u.braceNest = 0, u.inLinked = !1, S;
        if (u.braceNest > 0 && (u.currentType === 5 || u.currentType === 6 || u.currentType === 7))
          return p(W.UNTERMINATED_CLOSING_BRACE, r(), 0), u.braceNest = 0, Je(s, u);
        if (le = g(s, u))
          return S = m(u, 5, v(s)), F(s), S;
        if (ee = I(s, u))
          return S = m(u, 6, E(s)), F(s), S;
        if (J = h(s, u))
          return S = m(u, 7, j(s)), F(s), S;
        if (!le && !ee && !J)
          return S = m(u, 13, Pe(s)), p(W.INVALID_TOKEN_IN_PLACEHOLDER, r(), 0, S.value), F(s), S;
        break;
      }
    }
    return S;
  }
  function We(s, u) {
    const { currentType: S } = u;
    let U = null;
    const le = s.currentChar();
    switch ((S === 8 || S === 9 || S === 12 || S === 10) && (le === be || le === Ye) && p(W.INVALID_LINKED_FORMAT, r(), 0), le) {
      case "@":
        return s.next(), U = m(
          u,
          8,
          "@"
          /* TokenChars.LinkedAlias */
        ), u.inLinked = !0, U;
      case ".":
        return F(s), s.next(), m(
          u,
          9,
          "."
          /* TokenChars.LinkedDot */
        );
      case ":":
        return F(s), s.next(), m(
          u,
          10,
          ":"
          /* TokenChars.LinkedDelimiter */
        );
      default:
        return M(s) ? (U = m(u, 1, K(s)), u.braceNest = 0, u.inLinked = !1, U) : y(s, u) || b(s, u) ? (F(s), We(s, u)) : N(s, u) ? (F(s), m(u, 12, xe(s))) : k(s, u) ? (F(s), le === "{" ? rt(s, u) || U : m(u, 11, C(s))) : (S === 8 && p(W.INVALID_LINKED_FORMAT, r(), 0), u.braceNest = 0, u.inLinked = !1, Je(s, u));
    }
  }
  function Je(s, u) {
    let S = {
      type: 14
      /* TokenTypes.EOF */
    };
    if (u.braceNest > 0)
      return rt(s, u) || _(u);
    if (u.inLinked)
      return We(s, u) || _(u);
    switch (s.currentChar()) {
      case "{":
        return rt(s, u) || _(u);
      case "}":
        return p(W.UNBALANCED_CLOSING_BRACE, r(), 0), s.next(), m(
          u,
          3,
          "}"
          /* TokenChars.BraceRight */
        );
      case "@":
        return We(s, u) || _(u);
      default: {
        if (M(s))
          return S = m(u, 1, K(s)), u.braceNest = 0, u.inLinked = !1, S;
        const { isModulo: le, hasSpace: ee } = V(s);
        if (le)
          return ee ? m(u, 0, se(s)) : m(u, 4, re(s));
        if (x(s))
          return m(u, 0, se(s));
        break;
      }
    }
    return S;
  }
  function zt() {
    const { currentType: s, offset: u, startLoc: S, endLoc: U } = l;
    return l.lastType = s, l.lastOffset = u, l.lastStartLoc = S, l.lastEndLoc = U, l.offset = o(), l.startLoc = r(), a.currentChar() === et ? m(
      l,
      14
      /* TokenTypes.EOF */
    ) : Je(a, l);
  }
  return {
    nextToken: zt,
    currentOffset: o,
    currentPosition: r,
    context: d
  };
}
const Qo = "parser", ei = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function ti(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const a = parseInt(t || n, 16);
      return a <= 55295 || a >= 57344 ? String.fromCodePoint(a) : "�";
    }
  }
}
function ni(e = {}) {
  const t = e.location !== !1, { onError: n, onWarn: a } = e;
  function o(g, I, h, y, ...N) {
    const b = g.currentPosition();
    if (b.offset += y, b.column += y, n) {
      const k = t ? Ut(h, b) : null, M = _t(I, k, {
        domain: Qo,
        args: N
      });
      n(M);
    }
  }
  function r(g, I, h, y, ...N) {
    const b = g.currentPosition();
    if (b.offset += y, b.column += y, a) {
      const k = t ? Ut(h, b) : null;
      a(Wo(I, k, N));
    }
  }
  function i(g, I, h) {
    const y = { type: g };
    return t && (y.start = I, y.end = I, y.loc = { start: h, end: h }), y;
  }
  function c(g, I, h, y) {
    t && (g.end = I, g.loc && (g.loc.end = h));
  }
  function l(g, I) {
    const h = g.context(), y = i(3, h.offset, h.startLoc);
    return y.value = I, c(y, g.currentOffset(), g.currentPosition()), y;
  }
  function d(g, I) {
    const h = g.context(), { lastOffset: y, lastStartLoc: N } = h, b = i(5, y, N);
    return b.index = parseInt(I, 10), g.nextToken(), c(b, g.currentOffset(), g.currentPosition()), b;
  }
  function f(g, I, h) {
    const y = g.context(), { lastOffset: N, lastStartLoc: b } = y, k = i(4, N, b);
    return k.key = I, h === !0 && (k.modulo = !0), g.nextToken(), c(k, g.currentOffset(), g.currentPosition()), k;
  }
  function p(g, I) {
    const h = g.context(), { lastOffset: y, lastStartLoc: N } = h, b = i(9, y, N);
    return b.value = I.replace(ei, ti), g.nextToken(), c(b, g.currentOffset(), g.currentPosition()), b;
  }
  function m(g) {
    const I = g.nextToken(), h = g.context(), { lastOffset: y, lastStartLoc: N } = h, b = i(8, y, N);
    return I.type !== 12 ? (o(g, W.UNEXPECTED_EMPTY_LINKED_MODIFIER, h.lastStartLoc, 0), b.value = "", c(b, y, N), {
      nextConsumeToken: I,
      node: b
    }) : (I.value == null && o(g, W.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, Ge(I)), b.value = I.value || "", c(b, g.currentOffset(), g.currentPosition()), {
      node: b
    });
  }
  function _(g, I) {
    const h = g.context(), y = i(7, h.offset, h.startLoc);
    return y.value = I, c(y, g.currentOffset(), g.currentPosition()), y;
  }
  function L(g) {
    const I = g.context(), h = i(6, I.offset, I.startLoc);
    let y = g.nextToken();
    if (y.type === 9) {
      const N = m(g);
      h.modifier = N.node, y = N.nextConsumeToken || g.nextToken();
    }
    switch (y.type !== 10 && o(g, W.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, Ge(y)), y = g.nextToken(), y.type === 2 && (y = g.nextToken()), y.type) {
      case 11:
        y.value == null && o(g, W.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, Ge(y)), h.key = _(g, y.value || "");
        break;
      case 5:
        y.value == null && o(g, W.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, Ge(y)), h.key = f(g, y.value || "");
        break;
      case 6:
        y.value == null && o(g, W.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, Ge(y)), h.key = d(g, y.value || "");
        break;
      case 7:
        y.value == null && o(g, W.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, Ge(y)), h.key = p(g, y.value || "");
        break;
      default: {
        o(g, W.UNEXPECTED_EMPTY_LINKED_KEY, I.lastStartLoc, 0);
        const N = g.context(), b = i(7, N.offset, N.startLoc);
        return b.value = "", c(b, N.offset, N.startLoc), h.key = b, c(h, N.offset, N.startLoc), {
          nextConsumeToken: y,
          node: h
        };
      }
    }
    return c(h, g.currentOffset(), g.currentPosition()), {
      node: h
    };
  }
  function O(g) {
    const I = g.context(), h = I.currentType === 1 ? g.currentOffset() : I.offset, y = I.currentType === 1 ? I.endLoc : I.startLoc, N = i(2, h, y);
    N.items = [];
    let b = null, k = null;
    do {
      const x = b || g.nextToken();
      switch (b = null, x.type) {
        case 0:
          x.value == null && o(g, W.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, Ge(x)), N.items.push(l(g, x.value || ""));
          break;
        case 6:
          x.value == null && o(g, W.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, Ge(x)), N.items.push(d(g, x.value || ""));
          break;
        case 4:
          k = !0;
          break;
        case 5:
          x.value == null && o(g, W.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, Ge(x)), N.items.push(f(g, x.value || "", !!k)), k && (r(g, Yt.USE_MODULO_SYNTAX, I.lastStartLoc, 0, Ge(x)), k = null);
          break;
        case 7:
          x.value == null && o(g, W.UNEXPECTED_LEXICAL_ANALYSIS, I.lastStartLoc, 0, Ge(x)), N.items.push(p(g, x.value || ""));
          break;
        case 8: {
          const B = L(g);
          N.items.push(B.node), b = B.nextConsumeToken || null;
          break;
        }
      }
    } while (I.currentType !== 14 && I.currentType !== 1);
    const M = I.currentType === 1 ? I.lastOffset : g.currentOffset(), V = I.currentType === 1 ? I.lastEndLoc : g.currentPosition();
    return c(N, M, V), N;
  }
  function F(g, I, h, y) {
    const N = g.context();
    let b = y.items.length === 0;
    const k = i(1, I, h);
    k.cases = [], k.cases.push(y);
    do {
      const M = O(g);
      b || (b = M.items.length === 0), k.cases.push(M);
    } while (N.currentType !== 14);
    return b && o(g, W.MUST_HAVE_MESSAGES_IN_PLURAL, h, 0), c(k, g.currentOffset(), g.currentPosition()), k;
  }
  function P(g) {
    const I = g.context(), { offset: h, startLoc: y } = I, N = O(g);
    return I.currentType === 14 ? N : F(g, h, y, N);
  }
  function D(g) {
    const I = qo(g, Ea({}, e)), h = I.context(), y = i(0, h.offset, h.startLoc);
    return t && y.loc && (y.loc.source = g), y.body = P(I), e.onCacheKey && (y.cacheKey = e.onCacheKey(g)), h.currentType !== 14 && o(I, W.UNEXPECTED_LEXICAL_ANALYSIS, h.lastStartLoc, 0, g[h.offset] || ""), c(y, I.currentOffset(), I.currentPosition()), y;
  }
  return { parse: D };
}
function Ge(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function ai(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (r) => (n.helpers.add(r), r) };
}
function Vn(e, t) {
  for (let n = 0; n < e.length; n++)
    En(e[n], t);
}
function En(e, t) {
  switch (e.type) {
    case 1:
      Vn(e.cases, t), t.helper(
        "plural"
        /* HelperNameMap.PLURAL */
      );
      break;
    case 2:
      Vn(e.items, t);
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
function ri(e, t = {}) {
  const n = ai(e);
  n.helper(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  ), e.body && En(e.body, n);
  const a = n.context();
  e.helpers = Array.from(a.helpers);
}
function oi(e) {
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
      const a = e.items[n];
      if (!(a.type === 3 || a.type === 9) || a.value == null)
        break;
      t.push(a.value);
    }
    if (t.length === e.items.length) {
      e.static = va(t);
      for (let n = 0; n < e.items.length; n++) {
        const a = e.items[n];
        (a.type === 3 || a.type === 9) && delete a.value;
      }
    }
  }
}
const ii = "minifier";
function mt(e) {
  switch (e.t = e.type, e.type) {
    case 0: {
      const t = e;
      mt(t.body), t.b = t.body, delete t.body;
      break;
    }
    case 1: {
      const t = e, n = t.cases;
      for (let a = 0; a < n.length; a++)
        mt(n[a]);
      t.c = n, delete t.cases;
      break;
    }
    case 2: {
      const t = e, n = t.items;
      for (let a = 0; a < n.length; a++)
        mt(n[a]);
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
      mt(t.key), t.k = t.key, delete t.key, t.modifier && (mt(t.modifier), t.m = t.modifier, delete t.modifier);
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
      throw _t(W.UNHANDLED_MINIFIER_NODE_TYPE, null, {
        domain: ii,
        args: [e.type]
      });
  }
  delete e.type;
}
const li = "parser";
function si(e, t) {
  const { filename: n, breakLineCode: a, needIndent: o } = t, r = t.location !== !1, i = {
    filename: n,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: a,
    needIndent: o,
    indentLevel: 0
  };
  r && e.loc && (i.source = e.loc.source);
  const c = () => i;
  function l(O, F) {
    i.code += O;
  }
  function d(O, F = !0) {
    const P = F ? a : "";
    l(o ? P + "  ".repeat(O) : P);
  }
  function f(O = !0) {
    const F = ++i.indentLevel;
    O && d(F);
  }
  function p(O = !0) {
    const F = --i.indentLevel;
    O && d(F);
  }
  function m() {
    d(i.indentLevel);
  }
  return {
    context: c,
    push: l,
    indent: f,
    deindent: p,
    newline: m,
    helper: (O) => `_${O}`,
    needIndent: () => i.needIndent
  };
}
function ci(e, t) {
  const { helper: n } = e;
  e.push(`${n(
    "linked"
    /* HelperNameMap.LINKED */
  )}(`), ht(e, t.key), t.modifier ? (e.push(", "), ht(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function ui(e, t) {
  const { helper: n, needIndent: a } = e;
  e.push(`${n(
    "normalize"
    /* HelperNameMap.NORMALIZE */
  )}([`), e.indent(a());
  const o = t.items.length;
  for (let r = 0; r < o && (ht(e, t.items[r]), r !== o - 1); r++)
    e.push(", ");
  e.deindent(a()), e.push("])");
}
function fi(e, t) {
  const { helper: n, needIndent: a } = e;
  if (t.cases.length > 1) {
    e.push(`${n(
      "plural"
      /* HelperNameMap.PLURAL */
    )}([`), e.indent(a());
    const o = t.cases.length;
    for (let r = 0; r < o && (ht(e, t.cases[r]), r !== o - 1); r++)
      e.push(", ");
    e.deindent(a()), e.push("])");
  }
}
function di(e, t) {
  t.body ? ht(e, t.body) : e.push("null");
}
function ht(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      di(e, t);
      break;
    case 1:
      fi(e, t);
      break;
    case 2:
      ui(e, t);
      break;
    case 6:
      ci(e, t);
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
      throw _t(W.UNHANDLED_CODEGEN_NODE_TYPE, null, {
        domain: li,
        args: [t.type]
      });
  }
}
const mi = (e, t = {}) => {
  const n = Gn(t.mode) ? t.mode : "normal", a = Gn(t.filename) ? t.filename : "message.intl";
  t.sourceMap;
  const o = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, r = t.needIndent ? t.needIndent : n !== "arrow", i = e.helpers || [], c = si(e, {
    filename: a,
    breakLineCode: o,
    needIndent: r
  });
  c.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), c.indent(r), i.length > 0 && (c.push(`const { ${va(i.map((f) => `${f}: _${f}`), ", ")} } = ctx`), c.newline()), c.push("return "), ht(c, e), c.deindent(r), c.push("}"), delete e.helpers;
  const { code: l, map: d } = c.context();
  return {
    ast: e,
    code: l,
    map: d ? d.toJSON() : void 0
    // eslint-disable-line @typescript-eslint/no-explicit-any
  };
};
function pi(e, t = {}) {
  const n = Ea({}, t), a = !!n.jit, o = !!n.minify, r = n.optimize == null ? !0 : n.optimize, c = ni(n).parse(e);
  return a ? (r && oi(c), o && mt(c), { ast: c, code: "" }) : (ri(c, n), mi(c, n));
}
/*!
  * core-base v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
function gi() {
  typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ke().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Ke().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ke().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function Ve(e) {
  return X(e) && vn(e) === 0 && (Ue(e, "b") || Ue(e, "body"));
}
const Na = ["b", "body"];
function yi(e) {
  return nt(e, Na);
}
const Sa = ["c", "cases"];
function hi(e) {
  return nt(e, Sa, []);
}
const Oa = ["s", "static"];
function _i(e) {
  return nt(e, Oa);
}
const ba = ["i", "items"];
function Ti(e) {
  return nt(e, ba, []);
}
const Aa = ["t", "type"];
function vn(e) {
  return nt(e, Aa);
}
const La = ["v", "value"];
function Ct(e, t) {
  const n = nt(e, La);
  if (n != null)
    return n;
  throw vt(t);
}
const wa = ["m", "modifier"];
function Ii(e) {
  return nt(e, wa);
}
const Ca = ["k", "key"];
function Ei(e) {
  const t = nt(e, Ca);
  if (t)
    return t;
  throw vt(
    6
    /* NodeTypes.Linked */
  );
}
function nt(e, t, n) {
  for (let a = 0; a < t.length; a++) {
    const o = t[a];
    if (Ue(e, o) && e[o] != null)
      return e[o];
  }
  return n;
}
const ka = [
  ...Na,
  ...Sa,
  ...Oa,
  ...ba,
  ...Ca,
  ...wa,
  ...La,
  ...Aa
];
function vt(e) {
  return new Error(`unhandled node type: ${e}`);
}
const at = [];
at[
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
at[
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
at[
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
at[
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
at[
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
at[
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
at[
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
const vi = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Ni(e) {
  return vi.test(e);
}
function Si(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Oi(e) {
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
function bi(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Ni(t) ? Si(t) : "*" + t;
}
function Ai(e) {
  const t = [];
  let n = -1, a = 0, o = 0, r, i, c, l, d, f, p;
  const m = [];
  m[
    0
    /* Actions.APPEND */
  ] = () => {
    i === void 0 ? i = c : i += c;
  }, m[
    1
    /* Actions.PUSH */
  ] = () => {
    i !== void 0 && (t.push(i), i = void 0);
  }, m[
    2
    /* Actions.INC_SUB_PATH_DEPTH */
  ] = () => {
    m[
      0
      /* Actions.APPEND */
    ](), o++;
  }, m[
    3
    /* Actions.PUSH_SUB_PATH */
  ] = () => {
    if (o > 0)
      o--, a = 4, m[
        0
        /* Actions.APPEND */
      ]();
    else {
      if (o = 0, i === void 0 || (i = bi(i), i === !1))
        return !1;
      m[
        1
        /* Actions.PUSH */
      ]();
    }
  };
  function _() {
    const L = e[n + 1];
    if (a === 5 && L === "'" || a === 6 && L === '"')
      return n++, c = "\\" + L, m[
        0
        /* Actions.APPEND */
      ](), !0;
  }
  for (; a !== null; )
    if (n++, r = e[n], !(r === "\\" && _())) {
      if (l = Oi(r), p = at[a], d = p[l] || p.l || 8, d === 8 || (a = d[0], d[1] !== void 0 && (f = m[d[1]], f && (c = r, f() === !1))))
        return;
      if (a === 7)
        return t;
    }
}
const Wn = /* @__PURE__ */ new Map();
function Li(e, t) {
  return X(e) ? e[t] : null;
}
function wi(e, t) {
  if (!X(e))
    return null;
  let n = Wn.get(t);
  if (n || (n = Ai(t), n && Wn.set(t, n)), !n)
    return null;
  const a = n.length;
  let o = e, r = 0;
  for (; r < a; ) {
    const i = n[r];
    if (ka.includes(i) && Ve(o))
      return null;
    const c = o[i];
    if (c === void 0 || ie(o))
      return null;
    o = c, r++;
  }
  return o;
}
const Ci = (e) => e, ki = (e) => "", Fi = "text", Pi = (e) => e.length === 0 ? "" : Do(e), Di = Po;
function jn(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Ri(e) {
  const t = Ie(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (Ie(e.named.count) || Ie(e.named.n)) ? Ie(e.named.count) ? e.named.count : Ie(e.named.n) ? e.named.n : t : t;
}
function Mi(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Gi(e = {}) {
  const t = e.locale, n = Ri(e), a = X(e.pluralRules) && R(t) && ie(e.pluralRules[t]) ? e.pluralRules[t] : jn, o = X(e.pluralRules) && R(t) && ie(e.pluralRules[t]) ? jn : void 0, r = (P) => P[a(n, P.length, o)], i = e.list || [], c = (P) => i[P], l = e.named || Q();
  Ie(e.pluralIndex) && Mi(n, l);
  const d = (P) => l[P];
  function f(P) {
    const D = ie(e.messages) ? e.messages(P) : X(e.messages) ? e.messages[P] : !1;
    return D || (e.parent ? e.parent.message(P) : ki);
  }
  const p = (P) => e.modifiers ? e.modifiers[P] : Ci, m = $(e.processor) && ie(e.processor.normalize) ? e.processor.normalize : Pi, _ = $(e.processor) && ie(e.processor.interpolate) ? e.processor.interpolate : Di, L = $(e.processor) && R(e.processor.type) ? e.processor.type : Fi, F = {
    list: c,
    named: d,
    plural: r,
    linked: (P, ...D) => {
      const [g, I] = D;
      let h = "text", y = "";
      D.length === 1 ? X(g) ? (y = g.modifier || y, h = g.type || h) : R(g) && (y = g || y) : D.length === 2 && (R(g) && (y = g || y), R(I) && (h = I || h));
      const N = f(P)(F), b = (
        // The message in vnode resolved with linked are returned as an array by processor.nomalize
        h === "vnode" && pe(N) && y ? N[0] : N
      );
      return y ? p(y)(b, h) : b;
    },
    message: f,
    type: L,
    interpolate: _,
    normalize: m,
    values: Oe(Q(), i, l)
  };
  return F;
}
let Nt = null;
function Ui(e) {
  Nt = e;
}
function Vi(e, t, n) {
  Nt && Nt.emit("i18n:init", {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const xi = /* @__PURE__ */ Wi(
  "function:translate"
  /* IntlifyDevToolsHooks.FunctionTranslate */
);
function Wi(e) {
  return (t) => Nt && Nt.emit(e, t);
}
const Fa = Yt.__EXTEND_POINT__, it = Bt(Fa), Ae = {
  NOT_FOUND_KEY: Fa,
  // 2
  FALLBACK_TO_TRANSLATE: it(),
  // 3
  CANNOT_FORMAT_NUMBER: it(),
  // 4
  FALLBACK_TO_NUMBER_FORMAT: it(),
  // 5
  CANNOT_FORMAT_DATE: it(),
  // 6
  FALLBACK_TO_DATE_FORMAT: it(),
  // 7
  EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: it(),
  // 8
  __EXTEND_POINT__: it()
  // 9
}, ji = {
  [Ae.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [Ae.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [Ae.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [Ae.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [Ae.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [Ae.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale.",
  [Ae.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER]: "This project is using Custom Message Compiler, which is an experimental feature. It may receive breaking changes or be removed in the future."
};
function ut(e, ...t) {
  return In(ji[e], ...t);
}
const Pa = W.__EXTEND_POINT__, lt = Bt(Pa), Te = {
  INVALID_ARGUMENT: Pa,
  // 17
  INVALID_DATE_ARGUMENT: lt(),
  // 18
  INVALID_ISO_DATE_ARGUMENT: lt(),
  // 19
  NOT_SUPPORT_NON_STRING_MESSAGE: lt(),
  // 20
  NOT_SUPPORT_LOCALE_PROMISE_VALUE: lt(),
  // 21
  NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: lt(),
  // 22
  NOT_SUPPORT_LOCALE_TYPE: lt(),
  // 23
  __EXTEND_POINT__: lt()
  // 24
};
function Be(e) {
  return _t(e, null, process.env.NODE_ENV !== "production" ? { messages: $i } : void 0);
}
const $i = {
  [Te.INVALID_ARGUMENT]: "Invalid arguments",
  [Te.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [Te.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string",
  [Te.NOT_SUPPORT_NON_STRING_MESSAGE]: "Not support non-string message",
  [Te.NOT_SUPPORT_LOCALE_PROMISE_VALUE]: "cannot support promise value",
  [Te.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION]: "cannot support async function",
  [Te.NOT_SUPPORT_LOCALE_TYPE]: "cannot support locale type"
};
function Nn(e, t) {
  return t.locale != null ? $n(t.locale) : $n(e.locale);
}
let qt;
function $n(e) {
  if (R(e))
    return e;
  if (ie(e)) {
    if (e.resolvedOnce && qt != null)
      return qt;
    if (e.constructor.name === "Function") {
      const t = e();
      if (Fo(t))
        throw Be(Te.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
      return qt = t;
    } else
      throw Be(Te.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
  } else
    throw Be(Te.NOT_SUPPORT_LOCALE_TYPE);
}
function Bi(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...pe(t) ? t : X(t) ? Object.keys(t) : R(t) ? [t] : [n]
  ])];
}
function Da(e, t, n) {
  const a = R(n) ? n : St, o = e;
  o.__localeChainCache || (o.__localeChainCache = /* @__PURE__ */ new Map());
  let r = o.__localeChainCache.get(a);
  if (!r) {
    r = [];
    let i = [n];
    for (; pe(i); )
      i = Bn(r, i, t);
    const c = pe(t) || !$(t) ? t : t.default ? t.default : null;
    i = R(c) ? [c] : c, pe(i) && Bn(r, i, !1), o.__localeChainCache.set(a, r);
  }
  return r;
}
function Bn(e, t, n) {
  let a = !0;
  for (let o = 0; o < t.length && ne(a); o++) {
    const r = t[o];
    R(r) && (a = Yi(e, t[o], n));
  }
  return a;
}
function Yi(e, t, n) {
  let a;
  const o = t.split("-");
  do {
    const r = o.join("-");
    a = Hi(e, r, n), o.splice(-1, 1);
  } while (o.length && a === !0);
  return a;
}
function Hi(e, t, n) {
  let a = !1;
  if (!e.includes(t) && (a = !0, t)) {
    a = t[t.length - 1] !== "!";
    const o = t.replace(/!/g, "");
    e.push(o), (pe(n) || $(n)) && n[o] && (a = n[o]);
  }
  return a;
}
const Ki = "9.14.4", Ht = -1, St = "en-US", Vt = "", Yn = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function Xi() {
  return {
    upper: (e, t) => t === "text" && R(e) ? e.toUpperCase() : t === "vnode" && X(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && R(e) ? e.toLowerCase() : t === "vnode" && X(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && R(e) ? Yn(e) : t === "vnode" && X(e) && "__v_isVNode" in e ? Yn(e.children) : e
  };
}
let Ra;
function Hn(e) {
  Ra = e;
}
let Ma;
function zi(e) {
  Ma = e;
}
let Ga;
function Zi(e) {
  Ga = e;
}
let Ua = null;
const Ji = /* @__NO_SIDE_EFFECTS__ */ (e) => {
  Ua = e;
}, qi = /* @__NO_SIDE_EFFECTS__ */ () => Ua;
let Va = null;
const Kn = (e) => {
  Va = e;
}, Qi = () => Va;
let Xn = 0;
function el(e = {}) {
  const t = ie(e.onWarn) ? e.onWarn : Ze, n = R(e.version) ? e.version : Ki, a = R(e.locale) || ie(e.locale) ? e.locale : St, o = ie(a) ? St : a, r = pe(e.fallbackLocale) || $(e.fallbackLocale) || R(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o, i = $(e.messages) ? e.messages : Qt(o), c = $(e.datetimeFormats) ? e.datetimeFormats : Qt(o), l = $(e.numberFormats) ? e.numberFormats : Qt(o), d = Oe(Q(), e.modifiers, Xi()), f = e.pluralRules || Q(), p = ie(e.missing) ? e.missing : null, m = ne(e.missingWarn) || yt(e.missingWarn) ? e.missingWarn : !0, _ = ne(e.fallbackWarn) || yt(e.fallbackWarn) ? e.fallbackWarn : !0, L = !!e.fallbackFormat, O = !!e.unresolving, F = ie(e.postTranslation) ? e.postTranslation : null, P = $(e.processor) ? e.processor : null, D = ne(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, g = !!e.escapeParameter, I = ie(e.messageCompiler) ? e.messageCompiler : Ra;
  process.env.NODE_ENV !== "production" && ie(e.messageCompiler) && Ta(ut(Ae.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER));
  const h = ie(e.messageResolver) ? e.messageResolver : Ma || Li, y = ie(e.localeFallbacker) ? e.localeFallbacker : Ga || Bi, N = X(e.fallbackContext) ? e.fallbackContext : void 0, b = e, k = X(b.__datetimeFormatters) ? b.__datetimeFormatters : /* @__PURE__ */ new Map(), M = X(b.__numberFormatters) ? b.__numberFormatters : /* @__PURE__ */ new Map(), V = X(b.__meta) ? b.__meta : {};
  Xn++;
  const x = {
    version: n,
    cid: Xn,
    locale: a,
    fallbackLocale: r,
    messages: i,
    modifiers: d,
    pluralRules: f,
    missing: p,
    missingWarn: m,
    fallbackWarn: _,
    fallbackFormat: L,
    unresolving: O,
    postTranslation: F,
    processor: P,
    warnHtmlMessage: D,
    escapeParameter: g,
    messageCompiler: I,
    messageResolver: h,
    localeFallbacker: y,
    fallbackContext: N,
    onWarn: t,
    __meta: V
  };
  return x.datetimeFormats = c, x.numberFormats = l, x.__datetimeFormatters = k, x.__numberFormatters = M, process.env.NODE_ENV !== "production" && (x.__v_emitter = b.__v_emitter != null ? b.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Vi(x, n, V), x;
}
const Qt = (e) => ({ [e]: Q() });
function Kt(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function xa(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Sn(e, t, n, a, o) {
  const { missing: r, onWarn: i } = e;
  if (process.env.NODE_ENV !== "production") {
    const c = e.__v_emitter;
    c && c.emit("missing", {
      locale: n,
      key: t,
      type: o,
      groupId: `${o}:${t}`
    });
  }
  if (r !== null) {
    const c = r(e, n, t, o);
    return R(c) ? c : t;
  } else
    return process.env.NODE_ENV !== "production" && xa(a, t) && i(ut(Ae.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function It(e, t, n) {
  const a = e;
  a.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function Wa(e, t) {
  return e === t ? !1 : e.split("-")[0] === t.split("-")[0];
}
function tl(e, t) {
  const n = t.indexOf(e);
  if (n === -1)
    return !1;
  for (let a = n + 1; a < t.length; a++)
    if (Wa(e, t[a]))
      return !0;
  return !1;
}
function en(e) {
  return (n) => nl(n, e);
}
function nl(e, t) {
  const n = yi(t);
  if (n == null)
    throw vt(
      0
      /* NodeTypes.Resource */
    );
  if (vn(n) === 1) {
    const r = hi(n);
    return e.plural(r.reduce((i, c) => [
      ...i,
      zn(e, c)
    ], []));
  } else
    return zn(e, n);
}
function zn(e, t) {
  const n = _i(t);
  if (n != null)
    return e.type === "text" ? n : e.normalize([n]);
  {
    const a = Ti(t).reduce((o, r) => [...o, on(e, r)], []);
    return e.normalize(a);
  }
}
function on(e, t) {
  const n = vn(t);
  switch (n) {
    case 3:
      return Ct(t, n);
    case 9:
      return Ct(t, n);
    case 4: {
      const a = t;
      if (Ue(a, "k") && a.k)
        return e.interpolate(e.named(a.k));
      if (Ue(a, "key") && a.key)
        return e.interpolate(e.named(a.key));
      throw vt(n);
    }
    case 5: {
      const a = t;
      if (Ue(a, "i") && Ie(a.i))
        return e.interpolate(e.list(a.i));
      if (Ue(a, "index") && Ie(a.index))
        return e.interpolate(e.list(a.index));
      throw vt(n);
    }
    case 6: {
      const a = t, o = Ii(a), r = Ei(a);
      return e.linked(on(e, r), o ? on(e, o) : void 0, e.type);
    }
    case 7:
      return Ct(t, n);
    case 8:
      return Ct(t, n);
    default:
      throw new Error(`unhandled node on format message part: ${n}`);
  }
}
const al = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function ja(e, t) {
  t && Yo(e) && Ze(In(al, { source: e }));
}
const $a = (e) => e;
let gt = Q();
function Ba(e) {
  e.code === Yt.USE_MODULO_SYNTAX && Ze(`The use of named interpolation with modulo syntax is deprecated. It will be removed in v10.
reference: https://vue-i18n.intlify.dev/guide/essentials/syntax#rails-i18n-format 
(message compiler warning message: ${e.message})`);
}
function Ya(e, t = {}) {
  let n = !1;
  const a = t.onError || $o;
  return t.onError = (o) => {
    n = !0, a(o);
  }, { ...pi(e, t), detectError: n };
}
const rl = /* @__NO_SIDE_EFFECTS__ */ (e, t) => {
  if (!R(e))
    throw Be(Te.NOT_SUPPORT_NON_STRING_MESSAGE);
  process.env.NODE_ENV !== "production" && (t.onWarn = Ba);
  {
    const n = ne(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && ja(e, n);
    const o = (t.onCacheKey || $a)(e), r = gt[o];
    if (r)
      return r;
    const { code: i, detectError: c } = Ya(e, t), l = new Function(`return ${i}`)();
    return c ? l : gt[o] = l;
  }
};
function ol(e, t) {
  if (process.env.NODE_ENV !== "production" && (t.onWarn = Ba), __INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && R(e)) {
    const n = ne(t.warnHtmlMessage) ? t.warnHtmlMessage : !0;
    process.env.NODE_ENV !== "production" && ja(e, n);
    const o = (t.onCacheKey || $a)(e), r = gt[o];
    if (r)
      return r;
    const { ast: i, detectError: c } = Ya(e, {
      ...t,
      location: process.env.NODE_ENV !== "production",
      jit: !0
    }), l = en(i);
    return c ? l : gt[o] = l;
  } else {
    if (process.env.NODE_ENV !== "production" && !Ve(e))
      return Ze(`the message that is resolve with key '${t.key}' is not supported for jit compilation`), () => e;
    const n = e.cacheKey;
    if (n) {
      const a = gt[n];
      return a || (gt[n] = en(e));
    } else
      return en(e);
  }
}
const Zn = () => "", Me = (e) => ie(e);
function Jn(e, ...t) {
  const { fallbackFormat: n, postTranslation: a, unresolving: o, messageCompiler: r, fallbackLocale: i, messages: c } = e, [l, d] = ln(...t), f = ne(d.missingWarn) ? d.missingWarn : e.missingWarn, p = ne(d.fallbackWarn) ? d.fallbackWarn : e.fallbackWarn, m = ne(d.escapeParameter) ? d.escapeParameter : e.escapeParameter, _ = !!d.resolvedMessage, L = R(d.default) || ne(d.default) ? ne(d.default) ? r ? l : () => l : d.default : n ? r ? l : () => l : "", O = n || L !== "", F = Nn(e, d);
  m && il(d);
  let [P, D, g] = _ ? [
    l,
    F,
    c[F] || Q()
  ] : Ha(e, l, F, i, p, f), I = P, h = l;
  if (!_ && !(R(I) || Ve(I) || Me(I)) && O && (I = L, h = I), !_ && (!(R(I) || Ve(I) || Me(I)) || !R(D)))
    return o ? Ht : l;
  if (process.env.NODE_ENV !== "production" && R(I) && e.messageCompiler == null)
    return Ze(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${l}'.`), l;
  let y = !1;
  const N = () => {
    y = !0;
  }, b = Me(I) ? I : Ka(e, l, D, I, h, N);
  if (y)
    return I;
  const k = ul(e, D, g, d), M = Gi(k), V = ll(e, b, M), x = a ? a(V, l) : V;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const B = {
      timestamp: Date.now(),
      key: R(l) ? l : Me(I) ? I.key : "",
      locale: D || (Me(I) ? I.locale : ""),
      format: R(I) ? I : Me(I) ? I.source : "",
      message: x
    };
    B.meta = Oe({}, e.__meta, /* @__PURE__ */ qi() || {}), xi(B);
  }
  return x;
}
function il(e) {
  pe(e.list) ? e.list = e.list.map((t) => R(t) ? Dn(t) : t) : X(e.named) && Object.keys(e.named).forEach((t) => {
    R(e.named[t]) && (e.named[t] = Dn(e.named[t]));
  });
}
function Ha(e, t, n, a, o, r) {
  const { messages: i, onWarn: c, messageResolver: l, localeFallbacker: d } = e, f = d(e, a, n);
  let p = Q(), m, _ = null, L = n, O = null;
  const F = "translate";
  for (let P = 0; P < f.length; P++) {
    if (m = O = f[P], process.env.NODE_ENV !== "production" && n !== m && !Wa(n, m) && Kt(o, t) && c(ut(Ae.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: m
    })), process.env.NODE_ENV !== "production" && n !== m) {
      const h = e.__v_emitter;
      h && h.emit("fallback", {
        type: F,
        key: t,
        from: L,
        to: O,
        groupId: `${F}:${t}`
      });
    }
    p = i[m] || Q();
    let D = null, g, I;
    if (process.env.NODE_ENV !== "production" && Xe && (D = window.performance.now(), g = "intlify-message-resolve-start", I = "intlify-message-resolve-end", De && De(g)), (_ = l(p, t)) === null && (_ = p[t]), process.env.NODE_ENV !== "production" && Xe) {
      const h = window.performance.now(), y = e.__v_emitter;
      y && D && _ && y.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: _,
        time: h - D,
        groupId: `${F}:${t}`
      }), g && I && De && ct && (De(I), ct("intlify message resolve", g, I));
    }
    if (R(_) || Ve(_) || Me(_))
      break;
    if (!tl(m, f)) {
      const h = Sn(
        e,
        // eslint-disable-line @typescript-eslint/no-explicit-any
        t,
        m,
        r,
        F
      );
      h !== t && (_ = h);
    }
    L = O;
  }
  return [_, m, p];
}
function Ka(e, t, n, a, o, r) {
  const { messageCompiler: i, warnHtmlMessage: c } = e;
  if (Me(a)) {
    const m = a;
    return m.locale = m.locale || n, m.key = m.key || t, m;
  }
  if (i == null) {
    const m = () => a;
    return m.locale = n, m.key = t, m;
  }
  let l = null, d, f;
  process.env.NODE_ENV !== "production" && Xe && (l = window.performance.now(), d = "intlify-message-compilation-start", f = "intlify-message-compilation-end", De && De(d));
  const p = i(a, sl(e, n, o, a, c, r));
  if (process.env.NODE_ENV !== "production" && Xe) {
    const m = window.performance.now(), _ = e.__v_emitter;
    _ && l && _.emit("message-compilation", {
      type: "message-compilation",
      message: a,
      time: m - l,
      groupId: `translate:${t}`
    }), d && f && De && ct && (De(f), ct("intlify message compilation", d, f));
  }
  return p.locale = n, p.key = t, p.source = a, p;
}
function ll(e, t, n) {
  let a = null, o, r;
  process.env.NODE_ENV !== "production" && Xe && (a = window.performance.now(), o = "intlify-message-evaluation-start", r = "intlify-message-evaluation-end", De && De(o));
  const i = t(n);
  if (process.env.NODE_ENV !== "production" && Xe) {
    const c = window.performance.now(), l = e.__v_emitter;
    l && a && l.emit("message-evaluation", {
      type: "message-evaluation",
      value: i,
      time: c - a,
      groupId: `translate:${t.key}`
    }), o && r && De && ct && (De(r), ct("intlify message evaluation", o, r));
  }
  return i;
}
function ln(...e) {
  const [t, n, a] = e, o = Q();
  if (!R(t) && !Ie(t) && !Me(t) && !Ve(t))
    throw Be(Te.INVALID_ARGUMENT);
  const r = Ie(t) ? String(t) : (Me(t), t);
  return Ie(n) ? o.plural = n : R(n) ? o.default = n : $(n) && !$t(n) ? o.named = n : pe(n) && (o.list = n), Ie(a) ? o.plural = a : R(a) ? o.default = a : $(a) && Oe(o, a), [r, o];
}
function sl(e, t, n, a, o, r) {
  return {
    locale: t,
    key: n,
    warnHtmlMessage: o,
    onError: (i) => {
      if (r && r(i), process.env.NODE_ENV !== "production") {
        const c = cl(a), l = `Message compilation error: ${i.message}`, d = i.location && c && Ro(c, i.location.start.offset, i.location.end.offset), f = e.__v_emitter;
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
    onCacheKey: (i) => Ao(t, n, i)
  };
}
function cl(e) {
  if (R(e))
    return e;
  if (e.loc && e.loc.source)
    return e.loc.source;
}
function ul(e, t, n, a) {
  const { modifiers: o, pluralRules: r, messageResolver: i, fallbackLocale: c, fallbackWarn: l, missingWarn: d, fallbackContext: f } = e, m = {
    locale: t,
    modifiers: o,
    pluralRules: r,
    messages: (_) => {
      let L = i(n, _);
      if (L == null && f) {
        const [, , O] = Ha(f, _, t, c, l, d);
        L = i(O, _);
      }
      if (R(L) || Ve(L)) {
        let O = !1;
        const P = Ka(e, _, t, L, _, () => {
          O = !0;
        });
        return O ? Zn : P;
      } else return Me(L) ? L : Zn;
    }
  };
  return e.processor && (m.processor = e.processor), a.list && (m.list = a.list), a.named && (m.named = a.named), Ie(a.plural) && (m.pluralIndex = a.plural), m;
}
const qn = typeof Intl < "u", Xa = {
  dateTimeFormat: qn && typeof Intl.DateTimeFormat < "u",
  numberFormat: qn && typeof Intl.NumberFormat < "u"
};
function Qn(e, ...t) {
  const { datetimeFormats: n, unresolving: a, fallbackLocale: o, onWarn: r, localeFallbacker: i } = e, { __datetimeFormatters: c } = e;
  if (process.env.NODE_ENV !== "production" && !Xa.dateTimeFormat)
    return r(ut(Ae.CANNOT_FORMAT_DATE)), Vt;
  const [l, d, f, p] = sn(...t), m = ne(f.missingWarn) ? f.missingWarn : e.missingWarn, _ = ne(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, L = !!f.part, O = Nn(e, f), F = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    O
  );
  if (!R(l) || l === "")
    return new Intl.DateTimeFormat(O, p).format(d);
  let P = {}, D, g = null, I = O, h = null;
  const y = "datetime format";
  for (let k = 0; k < F.length; k++) {
    if (D = h = F[k], process.env.NODE_ENV !== "production" && O !== D && Kt(_, l) && r(ut(Ae.FALLBACK_TO_DATE_FORMAT, {
      key: l,
      target: D
    })), process.env.NODE_ENV !== "production" && O !== D) {
      const M = e.__v_emitter;
      M && M.emit("fallback", {
        type: y,
        key: l,
        from: I,
        to: h,
        groupId: `${y}:${l}`
      });
    }
    if (P = n[D] || {}, g = P[l], $(g))
      break;
    Sn(e, l, D, m, y), I = h;
  }
  if (!$(g) || !R(D))
    return a ? Ht : l;
  let N = `${D}__${l}`;
  $t(p) || (N = `${N}__${JSON.stringify(p)}`);
  let b = c.get(N);
  return b || (b = new Intl.DateTimeFormat(D, Oe({}, g, p)), c.set(N, b)), L ? b.formatToParts(d) : b.format(d);
}
const za = [
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
function sn(...e) {
  const [t, n, a, o] = e, r = Q();
  let i = Q(), c;
  if (R(t)) {
    const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!l)
      throw Be(Te.INVALID_ISO_DATE_ARGUMENT);
    const d = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
    c = new Date(d);
    try {
      c.toISOString();
    } catch {
      throw Be(Te.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (wo(t)) {
    if (isNaN(t.getTime()))
      throw Be(Te.INVALID_DATE_ARGUMENT);
    c = t;
  } else if (Ie(t))
    c = t;
  else
    throw Be(Te.INVALID_ARGUMENT);
  return R(n) ? r.key = n : $(n) && Object.keys(n).forEach((l) => {
    za.includes(l) ? i[l] = n[l] : r[l] = n[l];
  }), R(a) ? r.locale = a : $(a) && (i = a), $(o) && (i = o), [r.key || "", c, r, i];
}
function ea(e, t, n) {
  const a = e;
  for (const o in n) {
    const r = `${t}__${o}`;
    a.__datetimeFormatters.has(r) && a.__datetimeFormatters.delete(r);
  }
}
function ta(e, ...t) {
  const { numberFormats: n, unresolving: a, fallbackLocale: o, onWarn: r, localeFallbacker: i } = e, { __numberFormatters: c } = e;
  if (process.env.NODE_ENV !== "production" && !Xa.numberFormat)
    return r(ut(Ae.CANNOT_FORMAT_NUMBER)), Vt;
  const [l, d, f, p] = cn(...t), m = ne(f.missingWarn) ? f.missingWarn : e.missingWarn, _ = ne(f.fallbackWarn) ? f.fallbackWarn : e.fallbackWarn, L = !!f.part, O = Nn(e, f), F = i(
    e,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    o,
    O
  );
  if (!R(l) || l === "")
    return new Intl.NumberFormat(O, p).format(d);
  let P = {}, D, g = null, I = O, h = null;
  const y = "number format";
  for (let k = 0; k < F.length; k++) {
    if (D = h = F[k], process.env.NODE_ENV !== "production" && O !== D && Kt(_, l) && r(ut(Ae.FALLBACK_TO_NUMBER_FORMAT, {
      key: l,
      target: D
    })), process.env.NODE_ENV !== "production" && O !== D) {
      const M = e.__v_emitter;
      M && M.emit("fallback", {
        type: y,
        key: l,
        from: I,
        to: h,
        groupId: `${y}:${l}`
      });
    }
    if (P = n[D] || {}, g = P[l], $(g))
      break;
    Sn(e, l, D, m, y), I = h;
  }
  if (!$(g) || !R(D))
    return a ? Ht : l;
  let N = `${D}__${l}`;
  $t(p) || (N = `${N}__${JSON.stringify(p)}`);
  let b = c.get(N);
  return b || (b = new Intl.NumberFormat(D, Oe({}, g, p)), c.set(N, b)), L ? b.formatToParts(d) : b.format(d);
}
const Za = [
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
function cn(...e) {
  const [t, n, a, o] = e, r = Q();
  let i = Q();
  if (!Ie(t))
    throw Be(Te.INVALID_ARGUMENT);
  const c = t;
  return R(n) ? r.key = n : $(n) && Object.keys(n).forEach((l) => {
    Za.includes(l) ? i[l] = n[l] : r[l] = n[l];
  }), R(a) ? r.locale = a : $(a) && (i = a), $(o) && (i = o), [r.key || "", c, r, i];
}
function na(e, t, n) {
  const a = e;
  for (const o in n) {
    const r = `${t}__${o}`;
    a.__numberFormatters.has(r) && a.__numberFormatters.delete(r);
  }
}
gi();
/*!
  * vue-i18n v9.14.4
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */
const fl = "9.14.4";
function dl() {
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (Ke().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (Ke().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (Ke().__INTLIFY_JIT_COMPILATION__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (Ke().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ke().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
const Ja = Ae.__EXTEND_POINT__, He = Bt(Ja), Ce = {
  FALLBACK_TO_ROOT: Ja,
  // 9
  NOT_SUPPORTED_PRESERVE: He(),
  // 10
  NOT_SUPPORTED_FORMATTER: He(),
  // 11
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: He(),
  // 12
  NOT_SUPPORTED_GET_CHOICE_INDEX: He(),
  // 13
  COMPONENT_NAME_LEGACY_COMPATIBLE: He(),
  // 14
  NOT_FOUND_PARENT_SCOPE: He(),
  // 15
  IGNORE_OBJ_FLATTEN: He(),
  // 16
  NOTICE_DROP_ALLOW_COMPOSITION: He(),
  // 17
  NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG: He()
  // 18
}, ml = {
  [Ce.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [Ce.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [Ce.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [Ce.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [Ce.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [Ce.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [Ce.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope.",
  [Ce.IGNORE_OBJ_FLATTEN]: "Ignore object flatten: '{key}' key has an string value",
  [Ce.NOTICE_DROP_ALLOW_COMPOSITION]: "'allowComposition' option will be dropped in the next major version. For more information, please see 👉 https://tinyurl.com/2p97mcze",
  [Ce.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG]: "'translateExistCompatible' option will be dropped in the next major version."
};
function xt(e, ...t) {
  return In(ml[e], ...t);
}
const qa = Te.__EXTEND_POINT__, we = Bt(qa), ce = {
  // composer module errors
  UNEXPECTED_RETURN_TYPE: qa,
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
function tt(e, ...t) {
  return _t(e, null, process.env.NODE_ENV !== "production" ? { messages: pl, args: t } : void 0);
}
const pl = {
  [ce.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [ce.INVALID_ARGUMENT]: "Invalid argument",
  [ce.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [ce.NOT_INSTALLED]: "Need to install with `app.use` function",
  [ce.UNEXPECTED_ERROR]: "Unexpected error",
  [ce.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [ce.REQUIRED_VALUE]: "Required in value: {0}",
  [ce.INVALID_VALUE]: "Invalid value",
  [ce.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [ce.NOT_INSTALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [ce.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [ce.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [ce.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define ‘i18n’ option or custom block in Composition API with using local scope in Legacy API mode",
  [ce.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, un = /* @__PURE__ */ ze("__translateVNode"), fn = /* @__PURE__ */ ze("__datetimeParts"), dn = /* @__PURE__ */ ze("__numberParts"), mn = /* @__PURE__ */ ze("__enableEmitter"), pn = /* @__PURE__ */ ze("__disableEmitter"), gl = ze("__setPluralRules"), Qa = /* @__PURE__ */ ze("__injectWithOption"), gn = /* @__PURE__ */ ze("__dispose");
function Ot(e) {
  if (!X(e) || Ve(e))
    return e;
  for (const t in e)
    if (Ue(e, t))
      if (!t.includes("."))
        X(e[t]) && Ot(e[t]);
      else {
        const n = t.split("."), a = n.length - 1;
        let o = e, r = !1;
        for (let i = 0; i < a; i++) {
          if (n[i] === "__proto__")
            throw new Error(`unsafe key: ${n[i]}`);
          if (n[i] in o || (o[n[i]] = Q()), !X(o[n[i]])) {
            process.env.NODE_ENV !== "production" && Ze(xt(Ce.IGNORE_OBJ_FLATTEN, {
              key: n[i]
            })), r = !0;
            break;
          }
          o = o[n[i]];
        }
        if (r || (Ve(o) ? ka.includes(n[a]) || delete e[t] : (o[n[a]] = e[t], delete e[t])), !Ve(o)) {
          const i = o[n[a]];
          X(i) && Ot(i);
        }
      }
  return e;
}
function On(e, t) {
  const { messages: n, __i18n: a, messageResolver: o, flatJson: r } = t, i = $(n) ? n : pe(a) ? Q() : { [e]: Q() };
  if (pe(a) && a.forEach((c) => {
    if ("locale" in c && "resource" in c) {
      const { locale: l, resource: d } = c;
      l ? (i[l] = i[l] || Q(), Dt(d, i[l])) : Dt(d, i);
    } else
      R(c) && Dt(JSON.parse(c), i);
  }), o == null && r)
    for (const c in i)
      Ue(i, c) && Ot(i[c]);
  return i;
}
function er(e) {
  return e.type;
}
function yl(e, t, n) {
  let a = X(t.messages) ? t.messages : Q();
  "__i18nGlobal" in n && (a = On(e.locale.value, {
    messages: a,
    __i18n: n.__i18nGlobal
  }));
  const o = Object.keys(a);
  o.length && o.forEach((r) => {
    e.mergeLocaleMessage(r, a[r]);
  });
  {
    if (X(t.datetimeFormats)) {
      const r = Object.keys(t.datetimeFormats);
      r.length && r.forEach((i) => {
        e.mergeDateTimeFormat(i, t.datetimeFormats[i]);
      });
    }
    if (X(t.numberFormats)) {
      const r = Object.keys(t.numberFormats);
      r.length && r.forEach((i) => {
        e.mergeNumberFormat(i, t.numberFormats[i]);
      });
    }
  }
}
function aa(e) {
  return te(Pr, null, e, 0);
}
const ra = "__INTLIFY_META__", oa = () => [], hl = () => !1;
let ia = 0;
function la(e) {
  return (t, n, a, o) => e(n, a, _n() || void 0, o);
}
const _l = /* @__NO_SIDE_EFFECTS__ */ () => {
  const e = _n();
  let t = null;
  return e && (t = er(e)[ra]) ? { [ra]: t } : null;
};
function Tl(e = {}, t) {
  const { __root: n, __injectWithOption: a } = e, o = n === void 0, r = e.flatJson, i = Xe ? Ne : da, c = !!e.translateExistCompatible;
  process.env.NODE_ENV !== "production" && c && Ta(xt(Ce.NOTICE_DROP_TRANSLATE_EXIST_COMPATIBLE_FLAG));
  let l = ne(e.inheritLocale) ? e.inheritLocale : !0;
  const d = i(
    // prettier-ignore
    n && l ? n.locale.value : R(e.locale) ? e.locale : St
  ), f = i(
    // prettier-ignore
    n && l ? n.fallbackLocale.value : R(e.fallbackLocale) || pe(e.fallbackLocale) || $(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : d.value
  ), p = i(On(d.value, e)), m = i($(e.datetimeFormats) ? e.datetimeFormats : { [d.value]: {} }), _ = i($(e.numberFormats) ? e.numberFormats : { [d.value]: {} });
  let L = n ? n.missingWarn : ne(e.missingWarn) || yt(e.missingWarn) ? e.missingWarn : !0, O = n ? n.fallbackWarn : ne(e.fallbackWarn) || yt(e.fallbackWarn) ? e.fallbackWarn : !0, F = n ? n.fallbackRoot : ne(e.fallbackRoot) ? e.fallbackRoot : !0, P = !!e.fallbackFormat, D = ie(e.missing) ? e.missing : null, g = ie(e.missing) ? la(e.missing) : null, I = ie(e.postTranslation) ? e.postTranslation : null, h = n ? n.warnHtmlMessage : ne(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, y = !!e.escapeParameter;
  const N = n ? n.modifiers : $(e.modifiers) ? e.modifiers : {};
  let b = e.pluralRules || n && n.pluralRules, k;
  k = (() => {
    o && Kn(null);
    const T = {
      version: fl,
      locale: d.value,
      fallbackLocale: f.value,
      messages: p.value,
      modifiers: N,
      pluralRules: b,
      missing: g === null ? void 0 : g,
      missingWarn: L,
      fallbackWarn: O,
      fallbackFormat: P,
      unresolving: !0,
      postTranslation: I === null ? void 0 : I,
      warnHtmlMessage: h,
      escapeParameter: y,
      messageResolver: e.messageResolver,
      messageCompiler: e.messageCompiler,
      __meta: { framework: "vue" }
    };
    T.datetimeFormats = m.value, T.numberFormats = _.value, T.__datetimeFormatters = $(k) ? k.__datetimeFormatters : void 0, T.__numberFormatters = $(k) ? k.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (T.__v_emitter = $(k) ? k.__v_emitter : void 0);
    const w = el(T);
    return o && Kn(w), w;
  })(), It(k, d.value, f.value);
  function V() {
    return [
      d.value,
      f.value,
      p.value,
      m.value,
      _.value
    ];
  }
  const x = Le({
    get: () => d.value,
    set: (T) => {
      d.value = T, k.locale = d.value;
    }
  }), B = Le({
    get: () => f.value,
    set: (T) => {
      f.value = T, k.fallbackLocale = f.value, It(k, d.value, T);
    }
  }), ge = Le(() => p.value), he = /* @__PURE__ */ Le(() => m.value), _e = /* @__PURE__ */ Le(() => _.value);
  function Ee() {
    return ie(I) ? I : null;
  }
  function z(T) {
    I = T, k.postTranslation = T;
  }
  function ae() {
    return D;
  }
  function q(T) {
    T !== null && (g = la(T)), D = T, k.missing = g;
  }
  function Fe(T, w) {
    return T !== "translate" || !w.resolvedMessage;
  }
  const Y = (T, w, Z, de, qe, bt) => {
    V();
    let ft;
    try {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, o || (k.fallbackContext = n ? Qi() : void 0), ft = T(k);
    } finally {
      process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__, o || (k.fallbackContext = void 0);
    }
    if (Z !== "translate exists" && // for not `te` (e.g `t`)
    Ie(ft) && ft === Ht || Z === "translate exists" && !ft) {
      const [ot, cr] = w();
      if (process.env.NODE_ENV !== "production" && n && R(ot) && Fe(Z, cr) && (F && (Kt(O, ot) || xa(L, ot)) && Ze(xt(Ce.FALLBACK_TO_ROOT, {
        key: ot,
        type: Z
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: wn } = k;
        wn && F && wn.emit("fallback", {
          type: Z,
          key: ot,
          to: "global",
          groupId: `${Z}:${ot}`
        });
      }
      return n && F ? de(n) : qe(ot);
    } else {
      if (bt(ft))
        return ft;
      throw tt(ce.UNEXPECTED_RETURN_TYPE);
    }
  };
  function re(...T) {
    return Y((w) => Reflect.apply(Jn, null, [w, ...T]), () => ln(...T), "translate", (w) => Reflect.apply(w.t, w, [...T]), (w) => w, (w) => R(w));
  }
  function se(...T) {
    const [w, Z, de] = T;
    if (de && !X(de))
      throw tt(ce.INVALID_ARGUMENT);
    return re(w, Z, Oe({ resolvedMessage: !0 }, de || {}));
  }
  function v(...T) {
    return Y((w) => Reflect.apply(Qn, null, [w, ...T]), () => sn(...T), "datetime format", (w) => Reflect.apply(w.d, w, [...T]), () => Vt, (w) => R(w));
  }
  function E(...T) {
    return Y((w) => Reflect.apply(ta, null, [w, ...T]), () => cn(...T), "number format", (w) => Reflect.apply(w.n, w, [...T]), () => Vt, (w) => R(w));
  }
  function G(T) {
    return T.map((w) => R(w) || Ie(w) || ne(w) ? aa(String(w)) : w);
  }
  const H = {
    normalize: G,
    interpolate: (T) => T,
    type: "vnode"
  };
  function ue(...T) {
    return Y(
      (w) => {
        let Z;
        const de = w;
        try {
          de.processor = H, Z = Reflect.apply(Jn, null, [de, ...T]);
        } finally {
          de.processor = null;
        }
        return Z;
      },
      () => ln(...T),
      "translate",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (w) => w[un](...T),
      (w) => [aa(w)],
      (w) => pe(w)
    );
  }
  function oe(...T) {
    return Y(
      (w) => Reflect.apply(ta, null, [w, ...T]),
      () => cn(...T),
      "number format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (w) => w[dn](...T),
      oa,
      (w) => R(w) || pe(w)
    );
  }
  function Pe(...T) {
    return Y(
      (w) => Reflect.apply(Qn, null, [w, ...T]),
      () => sn(...T),
      "datetime format",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (w) => w[fn](...T),
      oa,
      (w) => R(w) || pe(w)
    );
  }
  function xe(T) {
    b = T, k.pluralRules = b;
  }
  function C(T, w) {
    return Y(() => {
      if (!T)
        return !1;
      const Z = R(w) ? w : d.value, de = We(Z), qe = k.messageResolver(de, T);
      return c ? qe != null : Ve(qe) || Me(qe) || R(qe);
    }, () => [T], "translate exists", (Z) => Reflect.apply(Z.te, Z, [T, w]), hl, (Z) => ne(Z));
  }
  function K(T) {
    let w = null;
    const Z = Da(k, f.value, d.value);
    for (let de = 0; de < Z.length; de++) {
      const qe = p.value[Z[de]] || {}, bt = k.messageResolver(qe, T);
      if (bt != null) {
        w = bt;
        break;
      }
    }
    return w;
  }
  function rt(T) {
    const w = K(T);
    return w ?? (n ? n.tm(T) || {} : {});
  }
  function We(T) {
    return p.value[T] || {};
  }
  function Je(T, w) {
    if (r) {
      const Z = { [T]: w };
      for (const de in Z)
        Ue(Z, de) && Ot(Z[de]);
      w = Z[T];
    }
    p.value[T] = w, k.messages = p.value;
  }
  function zt(T, w) {
    p.value[T] = p.value[T] || {};
    const Z = { [T]: w };
    if (r)
      for (const de in Z)
        Ue(Z, de) && Ot(Z[de]);
    w = Z[T], Dt(w, p.value[T]), k.messages = p.value;
  }
  function s(T) {
    return m.value[T] || {};
  }
  function u(T, w) {
    m.value[T] = w, k.datetimeFormats = m.value, ea(k, T, w);
  }
  function S(T, w) {
    m.value[T] = Oe(m.value[T] || {}, w), k.datetimeFormats = m.value, ea(k, T, w);
  }
  function U(T) {
    return _.value[T] || {};
  }
  function le(T, w) {
    _.value[T] = w, k.numberFormats = _.value, na(k, T, w);
  }
  function ee(T, w) {
    _.value[T] = Oe(_.value[T] || {}, w), k.numberFormats = _.value, na(k, T, w);
  }
  ia++, n && Xe && (Fn(n.locale, (T) => {
    l && (d.value = T, k.locale = T, It(k, d.value, f.value));
  }), Fn(n.fallbackLocale, (T) => {
    l && (f.value = T, k.fallbackLocale = T, It(k, d.value, f.value));
  }));
  const J = {
    id: ia,
    locale: x,
    fallbackLocale: B,
    get inheritLocale() {
      return l;
    },
    set inheritLocale(T) {
      l = T, T && n && (d.value = n.locale.value, f.value = n.fallbackLocale.value, It(k, d.value, f.value));
    },
    get availableLocales() {
      return Object.keys(p.value).sort();
    },
    messages: ge,
    get modifiers() {
      return N;
    },
    get pluralRules() {
      return b || {};
    },
    get isGlobal() {
      return o;
    },
    get missingWarn() {
      return L;
    },
    set missingWarn(T) {
      L = T, k.missingWarn = L;
    },
    get fallbackWarn() {
      return O;
    },
    set fallbackWarn(T) {
      O = T, k.fallbackWarn = O;
    },
    get fallbackRoot() {
      return F;
    },
    set fallbackRoot(T) {
      F = T;
    },
    get fallbackFormat() {
      return P;
    },
    set fallbackFormat(T) {
      P = T, k.fallbackFormat = P;
    },
    get warnHtmlMessage() {
      return h;
    },
    set warnHtmlMessage(T) {
      h = T, k.warnHtmlMessage = T;
    },
    get escapeParameter() {
      return y;
    },
    set escapeParameter(T) {
      y = T, k.escapeParameter = T;
    },
    t: re,
    getLocaleMessage: We,
    setLocaleMessage: Je,
    mergeLocaleMessage: zt,
    getPostTranslationHandler: Ee,
    setPostTranslationHandler: z,
    getMissingHandler: ae,
    setMissingHandler: q,
    [gl]: xe
  };
  return J.datetimeFormats = he, J.numberFormats = _e, J.rt = se, J.te = C, J.tm = rt, J.d = v, J.n = E, J.getDateTimeFormat = s, J.setDateTimeFormat = u, J.mergeDateTimeFormat = S, J.getNumberFormat = U, J.setNumberFormat = le, J.mergeNumberFormat = ee, J[Qa] = a, J[un] = ue, J[fn] = Pe, J[dn] = oe, process.env.NODE_ENV !== "production" && (J[mn] = (T) => {
    k.__v_emitter = T;
  }, J[pn] = () => {
    k.__v_emitter = void 0;
  }), J;
}
const bn = {
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
function Il({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((a, o) => [
    ...a,
    // prettier-ignore
    ...o.type === jt ? o.children : [o]
  ], []) : t.reduce((n, a) => {
    const o = e[a];
    return o && (n[a] = o()), n;
  }, Q());
}
function tr(e) {
  return jt;
}
Oe({
  keypath: {
    type: String,
    required: !0
  },
  plural: {
    type: [Number, String],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    validator: (e) => Ie(e) || !isNaN(e)
  }
}, bn);
function El(e) {
  return pe(e) && !R(e[0]);
}
function nr(e, t, n, a) {
  const { slots: o, attrs: r } = t;
  return () => {
    const i = { part: !0 };
    let c = Q();
    e.locale && (i.locale = e.locale), R(e.format) ? i.key = e.format : X(e.format) && (R(e.format.key) && (i.key = e.format.key), c = Object.keys(e.format).reduce((m, _) => n.includes(_) ? Oe(Q(), m, { [_]: e.format[_] }) : m, Q()));
    const l = a(e.value, i, c);
    let d = [i.key];
    pe(l) ? d = l.map((m, _) => {
      const L = o[m.type], O = L ? L({ [m.type]: m.value, index: _, parts: l }) : [m.value];
      return El(O) && (O[0].key = `${m.type}-${_}`), O;
    }) : R(l) && (d = [l]);
    const f = Oe(Q(), r), p = R(e.tag) || X(e.tag) ? e.tag : tr();
    return ga(p, f, d);
  };
}
Oe({
  value: {
    type: Number,
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, bn);
Oe({
  value: {
    type: [Number, Date],
    required: !0
  },
  format: {
    type: [String, Object]
  }
}, bn);
function sa(e, t) {
}
const vl = /* @__PURE__ */ ze("global-vue-i18n");
function Xt(e = {}) {
  const t = _n();
  if (t == null)
    throw tt(ce.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw tt(ce.NOT_INSTALLED);
  const n = Nl(t), a = Ol(n), o = er(t), r = Sl(e, o);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw tt(ce.NOT_AVAILABLE_IN_LEGACY_MODE);
    return wl(t, r, a, e);
  }
  if (r === "global")
    return yl(a, e, o), a;
  if (r === "parent") {
    let l = bl(n, t, e.__useComponent);
    return l == null && (process.env.NODE_ENV !== "production" && Ze(xt(Ce.NOT_FOUND_PARENT_SCOPE)), l = a), l;
  }
  const i = n;
  let c = i.__getInstance(t);
  if (c == null) {
    const l = Oe({}, e);
    "__i18n" in o && (l.__i18n = o.__i18n), a && (l.__root = a), c = Tl(l), i.__composerExtend && (c[gn] = i.__composerExtend(c)), Ll(i, t, c), i.__setInstance(t, c);
  }
  return c;
}
function Nl(e) {
  {
    const t = Tn(e.isCE ? vl : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw tt(e.isCE ? ce.NOT_INSTALLED_WITH_PROVIDE : ce.UNEXPECTED_ERROR);
    return t;
  }
}
function Sl(e, t) {
  return $t(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Ol(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function bl(e, t, n = !1) {
  let a = null;
  const o = t.root;
  let r = Al(t, n);
  for (; r != null; ) {
    const i = e;
    if (e.mode === "composition")
      a = i.__getInstance(r);
    else if (__VUE_I18N_LEGACY_API__) {
      const c = i.__getInstance(r);
      c != null && (a = c.__composer, n && a && !a[Qa] && (a = null));
    }
    if (a != null || o === r)
      break;
    r = r.parent;
  }
  return a;
}
function Al(e, t = !1) {
  return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Ll(e, t, n) {
  let a = null;
  ma(() => {
    if (process.env.NODE_ENV !== "production" && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, a = Mo();
      const o = n;
      o[mn] && o[mn](a), a.on("*", sa);
    }
  }, t), pa(() => {
    const o = n;
    process.env.NODE_ENV !== "production" && t.vnode.el && t.vnode.el.__VUE_I18N__ && (a && a.off("*", sa), o[pn] && o[pn](), delete t.vnode.el.__VUE_I18N__), e.__deleteInstance(t);
    const r = o[gn];
    r && (r(), delete o[gn]);
  }, t);
}
function wl(e, t, n, a = {}) {
  const o = t === "local", r = da(null);
  if (o && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw tt(ce.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const i = ne(a.inheritLocale) ? a.inheritLocale : !R(a.locale), c = Ne(
    // prettier-ignore
    !o || i ? n.locale.value : R(a.locale) ? a.locale : St
  ), l = Ne(
    // prettier-ignore
    !o || i ? n.fallbackLocale.value : R(a.fallbackLocale) || pe(a.fallbackLocale) || $(a.fallbackLocale) || a.fallbackLocale === !1 ? a.fallbackLocale : c.value
  ), d = Ne(On(c.value, a)), f = Ne($(a.datetimeFormats) ? a.datetimeFormats : { [c.value]: {} }), p = Ne($(a.numberFormats) ? a.numberFormats : { [c.value]: {} }), m = o ? n.missingWarn : ne(a.missingWarn) || yt(a.missingWarn) ? a.missingWarn : !0, _ = o ? n.fallbackWarn : ne(a.fallbackWarn) || yt(a.fallbackWarn) ? a.fallbackWarn : !0, L = o ? n.fallbackRoot : ne(a.fallbackRoot) ? a.fallbackRoot : !0, O = !!a.fallbackFormat, F = ie(a.missing) ? a.missing : null, P = ie(a.postTranslation) ? a.postTranslation : null, D = o ? n.warnHtmlMessage : ne(a.warnHtmlMessage) ? a.warnHtmlMessage : !0, g = !!a.escapeParameter, I = o ? n.modifiers : $(a.modifiers) ? a.modifiers : {}, h = a.pluralRules || o && n.pluralRules;
  function y() {
    return [
      c.value,
      l.value,
      d.value,
      f.value,
      p.value
    ];
  }
  const N = Le({
    get: () => r.value ? r.value.locale.value : c.value,
    set: (C) => {
      r.value && (r.value.locale.value = C), c.value = C;
    }
  }), b = Le({
    get: () => r.value ? r.value.fallbackLocale.value : l.value,
    set: (C) => {
      r.value && (r.value.fallbackLocale.value = C), l.value = C;
    }
  }), k = Le(() => r.value ? r.value.messages.value : d.value), M = Le(() => f.value), V = Le(() => p.value);
  function x() {
    return r.value ? r.value.getPostTranslationHandler() : P;
  }
  function B(C) {
    r.value && r.value.setPostTranslationHandler(C);
  }
  function ge() {
    return r.value ? r.value.getMissingHandler() : F;
  }
  function he(C) {
    r.value && r.value.setMissingHandler(C);
  }
  function _e(C) {
    return y(), C();
  }
  function Ee(...C) {
    return r.value ? _e(() => Reflect.apply(r.value.t, null, [...C])) : _e(() => "");
  }
  function z(...C) {
    return r.value ? Reflect.apply(r.value.rt, null, [...C]) : "";
  }
  function ae(...C) {
    return r.value ? _e(() => Reflect.apply(r.value.d, null, [...C])) : _e(() => "");
  }
  function q(...C) {
    return r.value ? _e(() => Reflect.apply(r.value.n, null, [...C])) : _e(() => "");
  }
  function Fe(C) {
    return r.value ? r.value.tm(C) : {};
  }
  function Y(C, K) {
    return r.value ? r.value.te(C, K) : !1;
  }
  function re(C) {
    return r.value ? r.value.getLocaleMessage(C) : {};
  }
  function se(C, K) {
    r.value && (r.value.setLocaleMessage(C, K), d.value[C] = K);
  }
  function v(C, K) {
    r.value && r.value.mergeLocaleMessage(C, K);
  }
  function E(C) {
    return r.value ? r.value.getDateTimeFormat(C) : {};
  }
  function G(C, K) {
    r.value && (r.value.setDateTimeFormat(C, K), f.value[C] = K);
  }
  function j(C, K) {
    r.value && r.value.mergeDateTimeFormat(C, K);
  }
  function H(C) {
    return r.value ? r.value.getNumberFormat(C) : {};
  }
  function ue(C, K) {
    r.value && (r.value.setNumberFormat(C, K), p.value[C] = K);
  }
  function oe(C, K) {
    r.value && r.value.mergeNumberFormat(C, K);
  }
  const Pe = {
    get id() {
      return r.value ? r.value.id : -1;
    },
    locale: N,
    fallbackLocale: b,
    messages: k,
    datetimeFormats: M,
    numberFormats: V,
    get inheritLocale() {
      return r.value ? r.value.inheritLocale : i;
    },
    set inheritLocale(C) {
      r.value && (r.value.inheritLocale = C);
    },
    get availableLocales() {
      return r.value ? r.value.availableLocales : Object.keys(d.value);
    },
    get modifiers() {
      return r.value ? r.value.modifiers : I;
    },
    get pluralRules() {
      return r.value ? r.value.pluralRules : h;
    },
    get isGlobal() {
      return r.value ? r.value.isGlobal : !1;
    },
    get missingWarn() {
      return r.value ? r.value.missingWarn : m;
    },
    set missingWarn(C) {
      r.value && (r.value.missingWarn = C);
    },
    get fallbackWarn() {
      return r.value ? r.value.fallbackWarn : _;
    },
    set fallbackWarn(C) {
      r.value && (r.value.missingWarn = C);
    },
    get fallbackRoot() {
      return r.value ? r.value.fallbackRoot : L;
    },
    set fallbackRoot(C) {
      r.value && (r.value.fallbackRoot = C);
    },
    get fallbackFormat() {
      return r.value ? r.value.fallbackFormat : O;
    },
    set fallbackFormat(C) {
      r.value && (r.value.fallbackFormat = C);
    },
    get warnHtmlMessage() {
      return r.value ? r.value.warnHtmlMessage : D;
    },
    set warnHtmlMessage(C) {
      r.value && (r.value.warnHtmlMessage = C);
    },
    get escapeParameter() {
      return r.value ? r.value.escapeParameter : g;
    },
    set escapeParameter(C) {
      r.value && (r.value.escapeParameter = C);
    },
    t: Ee,
    getPostTranslationHandler: x,
    setPostTranslationHandler: B,
    getMissingHandler: ge,
    setMissingHandler: he,
    rt: z,
    d: ae,
    n: q,
    tm: Fe,
    te: Y,
    getLocaleMessage: re,
    setLocaleMessage: se,
    mergeLocaleMessage: v,
    getDateTimeFormat: E,
    setDateTimeFormat: G,
    mergeDateTimeFormat: j,
    getNumberFormat: H,
    setNumberFormat: ue,
    mergeNumberFormat: oe
  };
  function xe(C) {
    C.locale.value = c.value, C.fallbackLocale.value = l.value, Object.keys(d.value).forEach((K) => {
      C.mergeLocaleMessage(K, d.value[K]);
    }), Object.keys(f.value).forEach((K) => {
      C.mergeDateTimeFormat(K, f.value[K]);
    }), Object.keys(p.value).forEach((K) => {
      C.mergeNumberFormat(K, p.value[K]);
    }), C.escapeParameter = g, C.fallbackFormat = O, C.fallbackRoot = L, C.fallbackWarn = _, C.missingWarn = m, C.warnHtmlMessage = D;
  }
  return Fr(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw tt(ce.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const C = r.value = e.proxy.$i18n.__composer;
    t === "global" ? (c.value = C.locale.value, l.value = C.fallbackLocale.value, d.value = C.messages.value, f.value = C.datetimeFormats.value, p.value = C.numberFormats.value) : o && xe(C);
  }), Pe;
}
dl();
__INTLIFY_JIT_COMPILATION__ ? Hn(ol) : Hn(rl);
zi(wi);
Zi(Da);
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Ke();
  e.__INTLIFY__ = !0, Ui(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
const Rt = Symbol("areaSelection"), Cl = {
  Polygon: "$vcsTriangle",
  BBox: "$vcsBoundingBox"
}, tn = Dr({
  Polygon: !1,
  BBox: !1
});
function nn(e) {
  return new Lr({
    fill: {
      color: Jr.fromCssColorString(e).withAlpha(0.3).toCssColorString()
    },
    stroke: {
      color: e,
      width: 2
    }
  });
}
const kl = {
  name: "SelectionArea",
  components: { VcsToolButton: dr, VSheet: Ur, VInput: Gr, VTooltip: Mr },
  emits: ["sessionstart"],
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  setup(e, { emit: t }) {
    const n = Tn("vcsApp"), a = mr(n), o = Ne(!1);
    async function r() {
      if (!n.layers.hasKey(String(Rt))) {
        const d = n.uiConfig.config.primaryColor ?? a, f = nn(d), p = new Or({
          name: String(Rt),
          projection: br.toJSON(),
          style: f
        });
        Ar(p), n.layers.add(p);
      }
      const l = n.layers.getByKey(
        String(Rt)
      );
      return await l.activate(), l;
    }
    const i = [
      n.uiConfig.added.addEventListener(async (l) => {
        (l == null ? void 0 : l.name) === "primaryColor" && (await r()).setStyle(
          nn(l.value)
        );
      }),
      n.uiConfig.removed.addEventListener(async (l) => {
        (l == null ? void 0 : l.name) === "primaryColor" && (await r()).setStyle(
          nn(a)
        );
      })
    ];
    async function c(l) {
      const d = await r();
      d && (o.value = !1);
      const f = wr(
        n,
        d,
        Cr[l]
      );
      t(
        "sessionstart",
        new Promise((p) => {
          let m = null;
          f.stopped.addEventListener(() => {
            tn[l] = !1, m.set("geometryType", l), p(m);
          }), f.creationFinished.addEventListener((_) => {
            _ && (m = _, m.set("geometryType", l), f.stop(), o.value = !0);
          });
        })
      ), tn[l] = !0;
    }
    return ma(async () => {
      const l = r();
      o.value = (await l).getFeatures().length !== 0;
    }), n.windowManager.removed.addEventListener(async ({ id: l }) => {
      l === Ln && ((await r()).deactivate(), i.forEach((d) => d()));
    }), {
      waitForGeometry: c,
      allowedGeometries: Cl,
      geometryState: tn,
      featureDrawn: o
    };
  }
}, ar = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, o] of t)
    n[a] = o;
  return n;
};
function Fl(e, t, n, a, o, r) {
  const i = fe("VcsToolButton"), c = fe("v-tooltip"), l = fe("v-input"), d = fe("v-sheet");
  return st(), rn(d, { class: "px-1 mb-0" }, {
    default: me(() => [
      te(l, {
        class: "feature-input",
        "model-value": a.featureDrawn
      }, {
        message: me(({ message: f }) => [
          te(c, {
            activator: ".feature-input",
            "v-if": f,
            text: e.$st(f),
            "content-class": "bg-error",
            location: "right"
          }, null, 8, ["v-if", "text"])
        ]),
        default: me(() => [
          (st(!0), Pt(
            jt,
            null,
            Rr(a.allowedGeometries, (f, p) => (st(), rn(i, {
              key: p,
              icon: f,
              active: a.geometryState[p],
              tooltip: e.$st("shadowmap.draw.draw" + p),
              onClick: (m) => a.waitForGeometry(p)
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
const Pl = /* @__PURE__ */ ar(kl, [["render", Fl]]), A = Object.freeze({
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
  [A.BYTE]: 1,
  [A.ASCII]: 1,
  [A.SBYTE]: 1,
  [A.UNDEFINED]: 1,
  [A.SHORT]: 2,
  [A.SSHORT]: 2,
  [A.LONG]: 4,
  [A.SLONG]: 4,
  [A.FLOAT]: 4,
  [A.IFD]: 4,
  [A.RATIONAL]: 8,
  [A.SRATIONAL]: 8,
  [A.DOUBLE]: 8,
  [A.LONG8]: 8,
  [A.SLONG8]: 8,
  [A.IFD8]: 8
});
const Dl = [
  { tag: 254, name: "NewSubfileType", fieldTypes: A.LONG },
  { tag: 255, name: "SubfileType", type: A.SHORT },
  { tag: 256, name: "ImageWidth", type: A.SHORT },
  { tag: 257, name: "ImageLength", type: A.SHORT },
  {
    tag: 258,
    name: "BitsPerSample",
    type: A.SHORT,
    isArray: !0,
    eager: !0
  },
  { tag: 259, name: "Compression", type: A.SHORT },
  { tag: 262, name: "PhotometricInterpretation", type: A.SHORT },
  { tag: 263, name: "Threshholding", type: A.SHORT },
  { tag: 264, name: "CellWidth", type: A.SHORT },
  { tag: 265, name: "CellLength", type: A.SHORT },
  { tag: 266, name: "FillOrder", type: A.SHORT },
  { tag: 269, name: "DocumentName", type: A.ASCII },
  { tag: 270, name: "ImageDescription", type: A.ASCII },
  { tag: 271, name: "Make", type: A.ASCII },
  { tag: 272, name: "Model", type: A.ASCII },
  { tag: 273, name: "StripOffsets", type: A.SHORT, isArray: !0 },
  { tag: 274, name: "Orientation", type: A.SHORT },
  { tag: 277, name: "SamplesPerPixel", type: A.SHORT },
  { tag: 278, name: "RowsPerStrip", type: A.SHORT },
  { tag: 279, name: "StripByteCounts", type: A.LONG, isArray: !0 },
  { tag: 280, name: "MinSampleValue", type: A.SHORT, isArray: !0 },
  { tag: 281, name: "MaxSampleValue", type: A.SHORT, isArray: !0 },
  { tag: 282, name: "XResolution", type: A.RATIONAL },
  { tag: 283, name: "YResolution", type: A.RATIONAL },
  { tag: 284, name: "PlanarConfiguration", fieldTypes: A.SHORT },
  { tag: 285, name: "PageName", type: A.ASCII },
  { tag: 286, name: "XPosition", type: A.RATIONAL },
  { tag: 287, name: "YPosition", type: A.RATIONAL },
  { tag: 288, name: "FreeOffsets", type: A.LONG },
  { tag: 289, name: "FreeByteCounts", type: A.LONG },
  { tag: 290, name: "GrayResponseUnit", type: A.SHORT },
  {
    tag: 291,
    name: "GrayResponseCurve",
    type: A.SHORT,
    isArray: !0
  },
  { tag: 292, name: "T4Options", type: A.LONG },
  { tag: 293, name: "T6Options", type: A.LONG },
  { tag: 296, name: "ResolutionUnit", type: A.SHORT },
  { tag: 297, name: "PageNumber", type: A.SHORT, isArray: !0 },
  { tag: 301, name: "TransferFunction", type: A.SHORT, isArray: !0 },
  { tag: 305, name: "Software", type: A.ASCII },
  { tag: 306, name: "DateTime", type: A.ASCII },
  { tag: 315, name: "Artist", type: A.ASCII },
  { tag: 316, name: "HostComputer", type: A.ASCII },
  { tag: 317, name: "Predictor", type: A.SHORT },
  { tag: 318, name: "WhitePoint", type: A.RATIONAL, isArray: !0 },
  {
    tag: 319,
    name: "PrimaryChromaticities",
    type: A.RATIONAL,
    isArray: !0
  },
  { tag: 320, name: "ColorMap", type: A.SHORT, isArray: !0 },
  { tag: 321, name: "HalftoneHints", type: A.SHORT, isArray: !0 },
  { tag: 322, name: "TileWidth", type: A.SHORT },
  { tag: 323, name: "TileLength", type: A.SHORT },
  { tag: 324, name: "TileOffsets", type: A.LONG, isArray: !0 },
  { tag: 325, name: "TileByteCounts", type: A.SHORT, isArray: !0 },
  { tag: 332, name: "InkSet", type: A.SHORT },
  { tag: 333, name: "InkNames", type: A.ASCII },
  { tag: 334, name: "NumberOfInks", type: A.SHORT },
  { tag: 336, name: "DotRange", type: A.BYTE, isArray: !0 },
  { tag: 337, name: "TargetPrinter", type: A.ASCII },
  { tag: 338, name: "ExtraSamples", type: A.BYTE, isArray: !0 },
  {
    tag: 339,
    name: "SampleFormat",
    type: A.SHORT,
    isArray: !0,
    eager: !0
  },
  { tag: 340, name: "SMinSampleValue", isArray: !0 },
  { tag: 341, name: "SMaxSampleValue", isArray: !0 },
  { tag: 342, name: "TransferRange", type: A.SHORT, isArray: !0 },
  { tag: 512, name: "JPEGProc", type: A.SHORT },
  { tag: 513, name: "JPEGInterchangeFormat", type: A.LONG },
  { tag: 514, name: "JPEGInterchangeFormatLngth", type: A.LONG },
  { tag: 515, name: "JPEGRestartInterval", type: A.SHORT },
  {
    tag: 517,
    name: "JPEGLosslessPredictors",
    type: A.SHORT,
    isArray: !0
  },
  {
    tag: 518,
    name: "JPEGPointTransforms",
    type: A.SHORT,
    isArray: !0
  },
  { tag: 519, name: "JPEGQTables", type: A.LONG, isArray: !0 },
  { tag: 520, name: "JPEGDCTables", type: A.LONG, isArray: !0 },
  { tag: 521, name: "JPEGACTables", type: A.LONG, isArray: !0 },
  {
    tag: 529,
    name: "YCbCrCoefficients",
    type: A.RATIONAL,
    isArray: !0
  },
  { tag: 530, name: "YCbCrSubSampling", type: A.SHORT, isArray: !0 },
  { tag: 531, name: "YCbCrPositioning", type: A.SHORT },
  {
    tag: 532,
    name: "ReferenceBlackWhite",
    type: A.LONG,
    isArray: !0
  },
  { tag: 33432, name: "Copyright", type: A.ASCII },
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
  { tag: 34665, name: "Exif IFD", type: A.LONG },
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
  { tag: 42113, name: "GDAL_NODATA", type: A.ASCII },
  // Photoshop
  { tag: 34377, name: "Photoshop" },
  // GeoTiff
  {
    tag: 33550,
    name: "ModelPixelScale",
    type: A.DOUBLE,
    isArray: !0,
    eager: !0
  },
  {
    tag: 33922,
    name: "ModelTiepoint",
    type: A.DOUBLE,
    isArray: !0,
    eager: !0
  },
  {
    tag: 34264,
    name: "ModelTransformation",
    type: A.DOUBLE,
    isArray: !0,
    eager: !0
  },
  {
    tag: 34735,
    name: "GeoKeyDirectory",
    type: A.SHORT,
    isArray: !0,
    eager: !0
  },
  {
    tag: 34736,
    name: "GeoDoubleParams",
    type: A.DOUBLE,
    isArray: !0,
    eager: !0
  },
  { tag: 34737, name: "GeoAsciiParams", type: A.ASCII, eager: !0 },
  // LERC
  { tag: 50674, name: "LercParameters", eager: !0 }
], An = {};
function Rl(e, t, n, a = !1, o = !1) {
  An[t] = e, typeof n == "string" && A[n];
}
for (const e of Dl)
  Rl(e.tag, e.name, e.type, e.isArray, e.eager);
const rr = {
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
}), Ml = (
  /** @type {Record<GeoKeyName, number>} */
  {}
);
for (const e in Mt)
  Mt.hasOwnProperty(e) && (Ml[Mt[e]] = parseInt(e, 10));
function or(e, t) {
  for (const n in t)
    t.hasOwnProperty(n) && (e[n] = t[n]);
}
function ir(e, t) {
  return e.length < t.length ? !1 : e.substr(e.length - t.length) === t;
}
function Gl(e, t) {
  const { length: n } = e;
  for (let a = 0; a < n; a++)
    t(e[a], a);
}
function Ul(e) {
  const t = {};
  for (const n in e)
    if (e.hasOwnProperty(n)) {
      const a = e[n];
      t[a] = n;
    }
  return t;
}
function ke(e, t) {
  const n = [];
  for (let a = 0; a < e; a++)
    n.push(t(a));
  return n;
}
function Vl(e) {
  if (ArrayBuffer.isView(e)) {
    const t = e.constructor;
    if (t === Float32Array || t === Float64Array)
      return !0;
  }
  return !1;
}
function xl(e) {
  if (ArrayBuffer.isView(e)) {
    const t = e.constructor;
    if (t === Int8Array || t === Int16Array || t === Int32Array)
      return !0;
  }
  return !1;
}
function Wl(e) {
  if (ArrayBuffer.isView(e)) {
    const t = e.constructor;
    if (t === Uint8Array || t === Uint16Array || t === Uint32Array || t === Uint8ClampedArray)
      return !0;
  }
  return !1;
}
const jl = {
  Float64Array,
  Float32Array,
  Uint32Array,
  Uint16Array,
  Uint8Array
}, $l = An, Bl = Ul(Mt), $e = {};
or($e, $l);
or($e, Bl);
const Yl = A, Et = 1e3, Se = {
  nextZero: (e, t) => {
    let n = t;
    for (; e[n] !== 0; )
      n++;
    return n;
  },
  readUshort: (e, t) => e[t] << 8 | e[t + 1],
  readShort: (e, t) => {
    const n = Se.ui8;
    return n[0] = e[t + 1], n[1] = e[t + 0], Se.i16[0];
  },
  readInt: (e, t) => {
    const n = Se.ui8;
    return n[0] = e[t + 3], n[1] = e[t + 2], n[2] = e[t + 1], n[3] = e[t + 0], Se.i32[0];
  },
  readUint: (e, t) => {
    const n = Se.ui8;
    return n[0] = e[t + 3], n[1] = e[t + 2], n[2] = e[t + 1], n[3] = e[t + 0], Se.ui32[0];
  },
  readASCII: (e, t, n) => n.map((a) => String.fromCharCode(e[t + a])).join(""),
  readFloat: (e, t) => {
    const n = Se.ui8;
    return ke(4, (a) => {
      n[a] = e[t + 3 - a];
    }), Se.fl32[0];
  },
  readDouble: (e, t) => {
    const n = Se.ui8;
    return ke(8, (a) => {
      n[a] = e[t + 7 - a];
    }), Se.fl64[0];
  },
  writeUshort: (e, t, n) => {
    e[t] = n >> 8 & 255, e[t + 1] = n & 255;
  },
  writeUint: (e, t, n) => {
    e[t] = n >> 24 & 255, e[t + 1] = n >> 16 & 255, e[t + 2] = n >> 8 & 255, e[t + 3] = n >> 0 & 255;
  },
  writeASCII: (e, t, n) => {
    ke(n.length, (a) => {
      e[t + a] = n.charCodeAt(a);
    });
  },
  ui8: new Uint8Array(8)
};
Se.fl64 = new Float64Array(Se.ui8.buffer);
Se.writeDouble = (e, t, n) => {
  Se.fl64[0] = n, ke(8, (a) => {
    e[t + a] = Se.ui8[7 - a];
  });
};
const Hl = (e, t, n, a) => {
  let o = n;
  const r = Object.keys(a).filter((c) => c != null && c !== "undefined");
  e.writeUshort(t, o, r.length), o += 2;
  let i = o + 12 * r.length + 4;
  for (const c of r) {
    let l = null;
    typeof c == "number" ? l = c : typeof c == "string" && (l = parseInt(c, 10));
    const d = rr[l], f = Yl[d];
    if (d == null || d === void 0 || typeof d > "u")
      throw new Error(`unknown type of tag: ${l}`);
    let p = a[c];
    if (p === void 0)
      throw new Error(`failed to get value for key ${c}`);
    d === "ASCII" && typeof p == "string" && ir(p, "\0") === !1 && (p += "\0");
    const m = p.length;
    e.writeUshort(t, o, l), o += 2, e.writeUshort(t, o, f), o += 2, e.writeUint(t, o, m), o += 4;
    let _ = [-1, 1, 1, 2, 4, 8, 0, 0, 0, 0, 0, 0, 8][f] * m, L = o;
    _ > 4 && (e.writeUint(t, o, i), L = i), d === "ASCII" ? e.writeASCII(t, L, p) : d === "SHORT" ? ke(m, (O) => {
      e.writeUshort(t, L + 2 * O, p[O]);
    }) : d === "LONG" ? ke(m, (O) => {
      e.writeUint(t, L + 4 * O, p[O]);
    }) : d === "RATIONAL" ? ke(m, (O) => {
      e.writeUint(t, L + 8 * O, Math.round(p[O] * 1e4)), e.writeUint(t, L + 8 * O + 4, 1e4);
    }) : d === "DOUBLE" && ke(m, (O) => {
      e.writeDouble(t, L + 8 * O, p[O]);
    }), _ > 4 && (_ += _ & 1, i += _), o += 4;
  }
  return [o, i];
}, Kl = (e) => {
  const t = new Uint8Array(Et);
  let n = 4;
  const a = Se;
  t[0] = 77, t[1] = 77, t[3] = 42;
  let o = 8;
  if (a.writeUint(t, n, o), n += 4, e.forEach((i, c) => {
    const l = Hl(a, t, o, i);
    o = l[1], c < e.length - 1 && a.writeUint(t, l[0], o);
  }), t.slice)
    return t.slice(0, o).buffer;
  const r = new Uint8Array(o);
  for (let i = 0; i < o; i++)
    r[i] = t[i];
  return r.buffer;
}, Xl = (e, t, n, a) => {
  if (n == null)
    throw new Error(`you passed into encodeImage a width of type ${n}`);
  if (t == null)
    throw new Error(`you passed into encodeImage a width of type ${t}`);
  const o = {
    256: [t],
    // ImageWidth
    257: [n],
    // ImageLength
    273: [Et],
    // strips offset
    278: [n],
    // RowsPerStrip
    305: "geotiff.js"
    // no array for ASCII(Z)
  };
  if (a)
    for (const p in a)
      a.hasOwnProperty(p) && (o[p] = a[p]);
  const r = new Uint8Array(Kl([o])), i = o[An.SamplesPerPixel], c = e.constructor.name, l = jl[c];
  let d = 8;
  l && (d = l.BYTES_PER_ELEMENT);
  const f = new Uint8Array(Et + e.length * d * i);
  return ke(r.length, (p) => {
    f[p] = r[p];
  }), Gl(e, (p, m) => {
    if (!l) {
      f[Et + m] = p;
      return;
    }
    const _ = new ArrayBuffer(d), L = new DataView(_);
    c === "Float64Array" ? L.setFloat64(0, p, !1) : c === "Float32Array" ? L.setFloat32(0, p, !1) : c === "Uint32Array" ? L.setUint32(0, p, !1) : c === "Uint16Array" ? L.setUint16(0, p, !1) : c === "Uint8Array" && L.setUint8(0, p);
    const O = new Uint8Array(L.buffer), F = Et + m * d;
    for (let P = 0; P < d; P++)
      f[F + P] = O[P];
  }), f.buffer;
}, zl = (e) => {
  const t = {};
  for (const n in e)
    n !== "StripOffsets" && ($e[n] || console.error(n, "not in name2code:", Object.keys($e)), t[$e[n]] = e[n]);
  return t;
}, ca = (e) => Array.isArray(e) ? e : [e], Zl = [
  ["Compression", 1],
  // no compression
  ["PlanarConfiguration", 1],
  ["ExtraSamples", 0]
];
function Jl(e, t) {
  const n = typeof e[0] == "number";
  let a, o, r, i;
  if (n ? (a = t.height || t.ImageLength, r = t.width || t.ImageWidth, o = e.length / (a * r), i = e) : (o = e.length, a = e[0].length, r = e[0][0].length, i = [], ke(a, (f) => {
    ke(r, (p) => {
      ke(o, (m) => {
        i.push(e[m][f][p]);
      });
    });
  })), t.ImageLength = a, delete t.height, t.ImageWidth = r, delete t.width, !t.BitsPerSample) {
    let f = 8;
    ArrayBuffer.isView(i) && (f = 8 * Object.getPrototypeOf(i).BYTES_PER_ELEMENT), t.BitsPerSample = ke(o, () => f);
  }
  if (Zl.forEach((f) => {
    const p = f[0];
    if (!t[p]) {
      const m = f[1];
      t[p] = m;
    }
  }), t.PhotometricInterpretation || (t.PhotometricInterpretation = t.BitsPerSample.length === 3 ? 2 : 1), t.SamplesPerPixel || (t.SamplesPerPixel = [o]), !t.StripByteCounts) {
    let f = 8;
    ArrayBuffer.isView(i) && (f = Object.getPrototypeOf(i).BYTES_PER_ELEMENT), t.StripByteCounts = [o * f * a * r];
  }
  if (!t.ModelPixelScale && !t.ModelTransformation && (t.ModelPixelScale = [360 / r, 180 / a, 0]), !t.SampleFormat) {
    let f = 1;
    Vl(i) && (f = 3), xl(i) && (f = 2), Wl(i) && (f = 1), t.SampleFormat = ke(o, () => f);
  }
  !t.hasOwnProperty("GeographicTypeGeoKey") && !t.hasOwnProperty("ProjectedCSTypeGeoKey") && (t.GeographicTypeGeoKey = 4326, t.ModelTransformation || (t.ModelTiepoint = [0, 0, 0, -180, 90, 0]), t.GeogCitationGeoKey = "WGS 84", t.GTModelTypeGeoKey = 2);
  const c = Object.keys(t).filter((f) => ir(f, "GeoKey")).sort((f, p) => $e[f] - $e[p]);
  if (!t.GeoKeyDirectory) {
    let f = t.GeoAsciiParams || "", p = f.length;
    const m = t.GeoDoubleParams || [];
    let _ = m.length;
    const L = [1, 1, 0, 0];
    let O = 0;
    c.forEach((F) => {
      const P = Number($e[F]), D = rr[P], g = t[F];
      if (g === void 0)
        return;
      let I, h, y;
      if (D === "SHORT")
        I = 1, h = 0, y = g;
      else if (D === "ASCII") {
        if (t.GeoAsciiParams)
          return;
        {
          const N = `${g.toString()}\0`;
          h = Number($e.GeoAsciiParams), y = p, I = N.length, f += N, p += N.length;
        }
      } else if (D === "DOUBLE") {
        if (t.GeoDoubleParams)
          return;
        {
          const N = ca(g);
          h = Number($e.GeoDoubleParams), y = _, I = N.length, N.forEach((b) => {
            m.push(Number(b)), _++;
          });
        }
      } else {
        console.warn(`[geotiff.js] couldn't get TIFFTagLocation for ${F}`);
        return;
      }
      L.push(P, h, I, y), O++;
    }), L[3] = O, t.GeoKeyDirectory = L, !t.GeoAsciiParams && f.length > 0 && (t.GeoAsciiParams = f), !t.GeoDoubleParams && m.length > 0 && (t.GeoDoubleParams = m);
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
    t[f] && (t[f] = ca(t[f]));
  });
  const l = zl(t);
  return Xl(i, r, a, l);
}
function lr(e, t) {
  return Jl(e, t);
}
function ql(e) {
  let t = 1 / 0, n = -1 / 0;
  for (const o of e)
    for (const r of o)
      r < t && (t = r), r > n && (n = r);
  const a = n - t || 1;
  return e.map(
    (o) => o.map((r) => Math.round((r - t) / a * 255))
  );
}
function kt(e, t) {
  const n = ql(e), a = n.length, o = n[0].length, r = document.createElement("canvas");
  r.width = o, r.height = a;
  const i = r.getContext("2d");
  if (!i) throw new Error("Could not get canvas context");
  const c = i.createImageData(o, a);
  for (let l = 0; l < a; l++) {
    const d = a - 1 - l;
    for (let f = 0; f < o; f++) {
      const p = (l * o + f) * 4, m = n[d][f], [_, L, O] = t ? t(e[d][f], f, d) : [m, m, m];
      c.data[p] = _, c.data[p + 1] = L, c.data[p + 2] = O, c.data[p + 3] = _ === 255 && L === 255 && O === 255 ? 0 : 255;
    }
  }
  return i.putImageData(c, 0, 0), r.toDataURL("image/png");
}
function ua(e) {
  return [e, e, e];
}
function yn(e, t, n = !1) {
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
async function Ql(e, t, n, a = {}) {
  if (!e || e.length === 0)
    throw new Error("Grid is empty or undefined");
  if (!e[0] || e[0].length === 0)
    throw new Error("Grid has no columns");
  const o = e.length, r = e[0].length, i = (t.maxX - t.minX) / r, c = (t.maxY - t.minY) / o, l = t.minX, d = t.maxY;
  if (!isFinite(i) || !isFinite(c) || !isFinite(l) || !isFinite(d))
    throw new Error(
      `Invalid coordinate values: pixelSizeX=${i}, pixelSizeY=${c}, originX=${l}, originY=${d}`
    );
  console.log("Creating RGB GeoTIFF:", {
    gridDimensions: { height: o, width: r },
    bounds: t
  });
  const f = new Uint8Array(o * r * 3);
  for (let m = 0; m < o; m++)
    for (let _ = 0; _ < r; _++) {
      const O = (m * r + _) * 3, F = e[m][_], [P, D, g] = n(F, _, m);
      f[O] = P, f[O + 1] = D, f[O + 2] = g;
    }
  const p = {
    height: o,
    width: r,
    samplesPerPixel: 3,
    // Geospatial metadata for EPSG:3857
    ModelPixelScale: [i, c, 0],
    ModelTiepoint: [0, 0, 0, l, d, 0],
    GeographicTypeGeoKey: 4326,
    ProjectedCSTypeGeoKey: 3857
  };
  try {
    console.log("Writing RGB GeoTIFF with metadata:", p), console.log("Interleaved RGB data:", {
      length: f.length,
      type: f.constructor.name,
      expectedLength: r * o * 3,
      firstPixel: [f[0], f[1], f[2]]
    });
    const m = await lr(f, p);
    return console.log("RGB GeoTIFF creation successful:", {
      arrayBufferSize: m.byteLength,
      bands: 3
    }), m;
  } catch (m) {
    throw new Error(`Failed to create RGB GeoTIFF: ${m}`);
  }
}
async function es(e, t, n = {}) {
  var O, F, P, D, g, I;
  const { noDataValue: a = -9999 } = n;
  if (!e || e.length === 0)
    throw new Error("Grid is empty or undefined");
  if (!e[0] || e[0].length === 0)
    throw new Error("Grid has no columns");
  const o = e.length, r = e[0].length, i = (t.maxX - t.minX) / r, c = (t.maxY - t.minY) / o, l = t.minX, d = t.maxY;
  if (!isFinite(i) || !isFinite(c) || !isFinite(l) || !isFinite(d))
    throw new Error(
      `Invalid coordinate values: pixelSizeX=${i}, pixelSizeY=${c}, originX=${l}, originY=${d}`
    );
  console.log("Grid data analysis:", {
    gridDimensions: { height: o, width: r },
    firstRow: (O = e[0]) == null ? void 0 : O.slice(0, 5),
    // First 5 values of first row
    lastRow: (F = e[o - 1]) == null ? void 0 : F.slice(0, 5),
    // First 5 values of last row
    sampleValues: [
      (P = e[0]) == null ? void 0 : P[0],
      (D = e[0]) == null ? void 0 : D[r - 1],
      // Top corners
      (g = e[o - 1]) == null ? void 0 : g[0],
      (I = e[o - 1]) == null ? void 0 : I[r - 1]
      // Bottom corners
    ],
    minMaxCheck: {
      hasNaN: e.some((h) => h.some((y) => isNaN(y))),
      hasUndefined: e.some((h) => h.some((y) => y === void 0)),
      hasNull: e.some((h) => h.some((y) => y === null))
    }
  });
  const f = [];
  let p = 1 / 0, m = -1 / 0;
  for (let h = 0; h < o; h++)
    for (let y = 0; y < r; y++) {
      const N = Number(e[h][y]), b = isFinite(N) && N !== null && N !== void 0 ? N : a;
      f.push(b), isFinite(b) && b !== a && (b < p && (p = b), b > m && (m = b));
    }
  let _;
  n.sampleFormat === "float" ? n.bitsPerSample === 64 ? _ = new Float64Array(f) : _ = new Float32Array(f) : n.sampleFormat === "int" ? n.bitsPerSample === 8 ? _ = new Int8Array(f) : n.bitsPerSample === 16 ? _ = new Int16Array(f) : _ = new Int32Array(f) : n.bitsPerSample === 8 || !n.bitsPerSample ? _ = new Uint8Array(f) : n.bitsPerSample === 16 ? _ = new Uint16Array(f) : _ = new Uint32Array(f), console.log("Flattened data analysis:", {
    totalPoints: _.length,
    minValue: p,
    maxValue: m,
    range: m - p,
    firstFewValues: Array.from(_.slice(0, 10)),
    lastFewValues: Array.from(_.slice(-10)),
    allZeros: Array.from(_).every((h) => h === 0),
    allSameValue: Array.from(_).every((h) => h === _[0]),
    dataType: _.constructor.name,
    arrayType: _ instanceof Float32Array ? "Float32Array" : _ instanceof Float64Array ? "Float64Array" : _ instanceof Uint8Array ? "Uint8Array" : _ instanceof Uint16Array ? "Uint16Array" : _ instanceof Uint32Array ? "Uint32Array" : _ instanceof Int8Array ? "Int8Array" : _ instanceof Int16Array ? "Int16Array" : _ instanceof Int32Array ? "Int32Array" : "regular array"
  });
  const L = {
    // Required basic properties (as per geotiff.js docs)
    height: o,
    width: r,
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
        type: _.constructor.name,
        length: _.length,
        firstValues: Array.from(_.slice(0, 5)),
        someMiddleValues: Array.from(
          _.slice(
            Math.floor(_.length / 2),
            Math.floor(_.length / 2) + 5
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
        maxX: l + r * i,
        minY: d - o * c,
        maxY: d
      }
    }), typeof L.width != "number" || typeof L.height != "number")
      throw new Error(
        `Invalid metadata: width=${typeof L.width}, height=${typeof L.height}`
      );
    const h = await lr([_], L);
    return console.log("GeoTIFF creation successful:", {
      arrayBufferSize: h.byteLength,
      expectedMinSize: r * o * 4
    }), h;
  } catch (h) {
    throw new Error(`Failed to create GeoTIFF: ${h}`);
  }
}
function sr(e, t) {
  const n = e.length, a = e[0].length, o = (t.maxX - t.minX) / a, r = (t.maxY - t.minY) / n, i = t.minX + o * 0.5, c = t.maxY - r * 0.5;
  return [
    o.toString(),
    "0",
    "0",
    (-r).toString(),
    i.toString(),
    c.toString()
  ].join(`
`);
}
async function ts(e, t, n = "grid_export.tif", a) {
  const o = await es(e, t, a), r = sr(e, t), i = (n.toLowerCase().endsWith(".tif") || n.toLowerCase().endsWith(".tiff"), ".tfw"), c = n.replace(
    /\.(tiff?|TIF{1,2})$/i,
    i
  );
  return {
    tiffData: o,
    tiffFilename: n,
    worldFileContent: r,
    worldFilename: c
  };
}
async function ns(e, t, n, a = "grid_export.tif", o) {
  const r = await Ql(
    e,
    t,
    n,
    o
  ), i = sr(e, t), c = (a.toLowerCase().endsWith(".tif") || a.toLowerCase().endsWith(".tiff"), ".tfw"), l = a.replace(
    /\.(tiff?|TIF{1,2})$/i,
    c
  );
  return {
    tiffData: r,
    tiffFilename: a,
    worldFileContent: i,
    worldFilename: l
  };
}
async function as(e, t, n = { output: "geojson" }) {
  if (!e.maps || !e.maps.activeMap)
    throw new Error("Active map is not available");
  if (!e.maps.activeMap.getCesiumWidget)
    throw new Error("Cesium widget is not available");
  const a = e.maps.activeMap.getScene(), [o, r, i, c] = t, l = Cn([o, r, 0]), d = Cn([i, c, 0]), f = ya.fromCartesianArray([l, d]), p = 111320, m = Qe.toDegrees(f.west), _ = Qe.toDegrees(f.east), L = Qe.toDegrees(f.south), O = Qe.toDegrees(f.north), F = (L + O) / 2, P = p * Math.cos(F * Math.PI / 180), D = (_ - m) * P, g = (O - L) * p, I = 1, h = Math.max(2, Math.round(D / I) + 1), y = Math.max(2, Math.round(g / I) + 1), N = [], b = [];
  for (let v = 0; v < h; v++)
    N.push(
      Qe.lerp(f.west, f.east, v / (h - 1))
    );
  for (let v = 0; v < y; v++)
    b.push(
      Qe.lerp(f.south, f.north, v / (y - 1))
    );
  const k = [];
  for (let v = 0; v < y; v++)
    for (let E = 0; E < h; E++)
      k.push(Lt.fromRadians(N[E], b[v]));
  const M = await qr(
    a.terrainProvider,
    k
  );
  let V;
  if (n.include3DTilesetHeights) {
    const v = M.map(
      (G) => Qr.fromRadians(G.longitude, G.latitude, G.height)
    );
    let E = [];
    a.clampToHeightMostDetailed ? E = await a.clampToHeightMostDetailed(v) : a.scene && a.scene.clampToHeightMostDetailed ? E = await a.scene.clampToHeightMostDetailed(v) : E = v.map(() => {
    }), V = [];
    for (let G = 0; G < y; G++) {
      V[G] = [];
      for (let j = 0; j < h; j++) {
        const H = G * h + j, ue = M[H].height, oe = E[H];
        V[G][j] = typeof oe == "number" && oe > ue ? oe : ue;
      }
    }
  } else {
    V = [];
    for (let v = 0; v < y; v++) {
      V[v] = [];
      for (let E = 0; E < h; E++)
        V[v][E] = M[v * h + E].height;
    }
  }
  function x(v, E) {
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
    let j = -1 / 0, H = null;
    for (const [ue, oe] of G) {
      const Pe = v + ue, xe = E + oe;
      if (Pe >= 0 && Pe < y && xe >= 0 && xe < h) {
        const C = V[v][E] - V[Pe][xe];
        C > 0.1 && C > j && (j = C, H = [ue, oe]);
      }
    }
    return H;
  }
  const B = [];
  for (let v = 0; v < y; v++) {
    B[v] = [];
    for (let E = 0; E < h; E++)
      B[v][E] = x(v, E);
  }
  const ge = [];
  for (let v = 0; v < y; v++) {
    ge[v] = [];
    for (let E = 0; E < h; E++)
      ge[v][E] = B[v][E] === null;
  }
  let he = 1 / 0, _e = -1 / 0;
  for (let v = 0; v < y; v++)
    for (let E = 0; E < h; E++) {
      const G = V[v][E];
      G < he && (he = G), G > _e && (_e = G);
    }
  const Ee = _e - he, z = [];
  for (let v = 0; v < y; v++) {
    z[v] = [];
    for (let E = 0; E < h; E++)
      if (ge[v][E])
        z[v][E] = "sink";
      else {
        const G = (V[v][E] - he) / Ee;
        G >= 0.75 ? z[v][E] = "source" : G >= 0.5 ? z[v][E] = "middle" : z[v][E] = "collection";
      }
  }
  const ae = Array(y).fill(0).map(() => Array(h).fill(1)), q = Array(y).fill(0).map(() => Array(h).fill(0));
  for (let v = 0; v < y; v++)
    for (let E = 0; E < h; E++) {
      const G = B[v][E];
      if (G) {
        const j = v + G[0], H = E + G[1];
        j >= 0 && j < y && H >= 0 && H < h && q[j][H]++;
      }
    }
  const Fe = [];
  for (let v = 0; v < y; v++)
    for (let E = 0; E < h; E++)
      q[v][E] === 0 && Fe.push([v, E]);
  for (; Fe.length > 0; ) {
    const [v, E] = Fe.shift(), G = B[v][E];
    if (G) {
      const j = v + G[0], H = E + G[1];
      j >= 0 && j < y && H >= 0 && H < h && (ae[j][H] += ae[v][E], q[j][H]--, q[j][H] === 0 && Fe.push([j, H]));
    }
  }
  const Y = {
    minX: t[0],
    minY: t[1],
    maxX: t[2],
    maxY: t[3]
  };
  let re;
  if (n.output === "raster" || n.output === "both")
    if (n.rasterType === "both") {
      const v = kt(V, ua), E = kt(
        ae,
        (G, j, H) => yn(
          G,
          z[H][j],
          ge[H][j]
        )
      );
      re = {
        type: "raster-both",
        rasters: [
          {
            dataUrl: v,
            rasterType: "height",
            tileWidth: h,
            tileHeight: y,
            grid: V,
            mercatorBounds: Y
          },
          {
            dataUrl: E,
            rasterType: "accumulation",
            tileWidth: h,
            tileHeight: y,
            grid: ae,
            mercatorBounds: Y,
            heightClassGrid: z,
            isSinkGrid: ge
          }
        ]
      };
    } else n.rasterType === "accumulation" ? re = {
      type: "raster",
      dataUrl: kt(
        ae,
        (E, G, j) => yn(
          E,
          z[j][G],
          ge[j][G]
        )
      ),
      rasterType: "accumulation",
      tileWidth: h,
      tileHeight: y,
      grid: ae,
      mercatorBounds: Y,
      heightClassGrid: z,
      isSinkGrid: ge
    } : re = {
      type: "raster",
      dataUrl: kt(V, ua),
      rasterType: "height",
      tileWidth: h,
      tileHeight: y,
      grid: V,
      mercatorBounds: Y
    };
  const se = [];
  for (let v = 0; v < y; v++)
    for (let E = 0; E < h; E++) {
      const G = B[v][E];
      if (G) {
        Lt.fromRadians(
          N[E],
          b[v],
          V[v][E]
        );
        const j = v + G[0], H = E + G[1];
        Lt.fromRadians(
          N[H],
          b[j],
          V[j][H]
        );
      }
    }
  for (let v = 0; v < y; v++)
    for (let E = 0; E < h; E++) {
      const G = Lt.fromRadians(N[E], b[v], V[v][E]), j = B[v][E] === null;
      se.push({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [
            Qe.toDegrees(G.longitude),
            Qe.toDegrees(G.latitude),
            G.height
          ]
        },
        properties: {
          type: "grid_cell",
          height: G.height,
          accumulation: ae[v][E],
          heightClass: z[v][E],
          isSink: j,
          gridIndex: [v, E],
          normalizedHeight: (G.height - he) / Ee
        }
      });
    }
  return n.output === "geojson" ? {
    type: "FeatureCollection",
    features: se
  } : n.output === "raster" && re ? re : n.output === "both" && re ? {
    geojson: {
      type: "FeatureCollection",
      features: se
    },
    raster: re
  } : {
    type: "FeatureCollection",
    features: se
  };
}
let Re = {
  endpoint: "https://urbreath.virtualcitymap.de/minioproxy",
  //'https://minio-dev.urbreath.tech',
  bucket: "vcs-analysis",
  accessKey: "VCS",
  secretKey: "iOUgAVACityp"
}, Ft = null;
function an(e, t) {
  const n = (t ?? "").trim();
  if (!n)
    return e;
  const a = n.replace(/\s+/g, "_"), o = e.lastIndexOf(".");
  return o <= 0 ? `${e}_${a}` : `${e.slice(0, o)}_${a}${e.slice(o)}`;
}
async function rs() {
  if (Ft)
    return Ft;
  const e = `${Re.endpoint}/api/v1/login`;
  console.log("[MinIO] Attempting login...");
  const t = await fetch(e, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      accessKey: Re.accessKey,
      secretKey: Re.secretKey
    }),
    credentials: "include"
    // Required to receive and store session cookies
  });
  if (!t.ok && t.status !== 204) {
    const n = await t.text();
    throw console.error(`[MinIO] Login failed: ${t.status}`, n), new Error(`MinIO login failed: ${t.status} ${n}`);
  }
  return console.log("[MinIO] Login successful (204 No Content), session cookie set"), Ft = "cookie-based", Ft;
}
async function Gt(e, t, n, a) {
  try {
    const o = e.uiConfig.getByKey("appTitle");
    let r = o && typeof o.value == "string" ? o.value : "default";
    r = r.split(" ")[0], console.log(`[MinIO] App title: ${r}`);
    const { config: i } = e.plugins.getByKey(pt);
    Re = {
      endpoint: i.minioEndpoint || Re.endpoint,
      bucket: i.minioBucket || Re.bucket,
      accessKey: i.minioAccessKey || Re.accessKey,
      secretKey: i.minioSecretKey || Re.secretKey
    }, await rs();
    const c = `${r}/waterflowAnalysis/${a}/${n}`;
    console.log(`[MinIO] Object key: ${c}`);
    const l = `${Re.endpoint}/api/v1/buckets/${Re.bucket}/objects/upload?prefix=${encodeURIComponent(c)}`;
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
      const m = await f.text();
      throw console.error(`[MinIO] Upload error response: ${m}`), new Error(
        `Failed to upload to MinIO: ${f.status} ${f.statusText}. ${m}`
      );
    }
    const p = `${Re.endpoint}/${Re.bucket}/${encodeURIComponent(c)}`;
    return console.log(`[MinIO] Upload successful, public URL: ${p}`), p;
  } catch (o) {
    throw console.error("[MinIO] Upload error:", o), new Error(
      `Failed to upload to MinIO: ${o instanceof Error ? o.message : String(o)}`
    );
  }
}
async function os(e, t, n, a) {
  try {
    const o = [];
    if (!t || t.length === 0)
      return console.warn("[MinIO] No GeoTIFF files to upload"), o;
    console.log(
      `[MinIO] Uploading ${t.length} GeoTIFF file(s) with world files and SLD`
    );
    for (const r of t) {
      const i = new Blob([r.tiffData], { type: "image/tiff" }), c = an(r.tiffFilename, a);
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
      const d = new Blob([r.worldFileContent], {
        type: "text/plain"
      }), f = an(r.worldFilename, a);
      console.log(
        `[MinIO] Uploading world file: ${f} (${d.size} bytes)`
      );
      const p = await Gt(
        e,
        d,
        f,
        n
      );
      if (o.push(p), console.log(`[MinIO] World file uploaded: ${p}`), r.sldContent && r.sldFilename) {
        const m = new Blob([r.sldContent], {
          type: "application/xml"
        }), _ = an(r.sldFilename, a);
        console.log(
          `[MinIO] Uploading SLD style: ${_} (${m.size} bytes)`
        );
        const L = await Gt(e, m, _, n);
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
function is(e = "WaterFlowAccumulation") {
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
class ls {
  /**
   * @param baseUrl e.g., "https://idra-dev.urbreath.tech/api/datasetngsi"
   */
  constructor(t) {
    Zt(this, "distEndpoint");
    Zt(this, "datasetEndpoint");
    const n = t.replace(/\/$/, "");
    this.distEndpoint = `${n}/distributiondcatap`, this.datasetEndpoint = `${n}/dataset`;
  }
  generateId(t) {
    const a = (/* @__PURE__ */ new Date()).toISOString().replace(/[-:]/g, "").split(".")[0].replace("Z", "");
    return `${t.toLowerCase().replace(/\s+/g, "")}${a}0100`;
  }
  async register(t, n) {
    const a = (/* @__PURE__ */ new Date()).toISOString().replace("Z", "+01:00"), o = await Promise.all(
      n.map(async (i) => {
        const c = this.generateId(i.title), l = {
          id: c,
          title: i.title,
          description: i.description,
          downloadURL: i.downloadURL,
          format: i.format,
          rights: "public",
          license: i.license || "CC BY 4.0",
          releaseDate: a,
          modifiedDate: a
        };
        return await this.postData(this.distEndpoint, l), `urn:ngsi-ld:DistributionDCAT-AP:id:${c}`;
      })
    ), r = {
      title: t.title,
      description: t.description,
      name: "VC Map integration",
      publisher: t.publisher,
      releaseDate: a,
      theme: t.theme,
      creator: t.creator,
      frequency: "",
      version: "1.0",
      datasetDistribution: o,
      spatial: [
        {
          type: "Point",
          coordinates: t.coordinates
        }
      ],
      contactPoint: ["VCS", "https://vc.systems"],
      keyword: t.keywords,
      accessRights: "public"
    };
    return await this.postData(this.datasetEndpoint, r);
  }
  async postData(t, n) {
    const a = await fetch(t, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2SXd0Nks5NGQtUzBsTWpmUlM2QzZsT0hFV1B6QnNvUm9jN2RMZWRXXzg0In0.eyJleHAiOjE3NTQ0MDU2OTAsImlhdCI6MTc1NDM2OTY5MCwianRpIjoiYThlZTgzZjQtMzVkNC00YzU3LWIzMWItZTBiYzhjMTA5NTA1IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay1kZXYudXJicmVhdGgudGVjaC9hdXRoL3JlYWxtcy91cmJyZWF0aC1hdXRoIiwiYXVkIjoicmVhbG0tbWFuYWdlbWVudCIsInN1YiI6ImU4MjJjMTc4LTFhOTItNGE3Yy1iNTkyLTI3NmRmYWM1NjlmMCIsInR5cCI6IkJlYXJlciIsImF6cCI6InVyYnJlYXRoIiwic2Vzc2lvbl9zdGF0ZSI6IjM3NGNmOTRjLWZlNDgtNGE4Ny1iNDYyLWFkMDFiNjc5MzQyNiIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiU1VQRVJfQURNSU4iXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbInZpZXctaWRlbnRpdHktcHJvdmlkZXJzIiwidmlldy1yZWFsbSIsIm1hbmFnZS1pZGVudGl0eS1wcm92aWRlcnMiLCJpbXBlcnNvbmF0aW9uIiwicmVhbG0tYWRtaW4iLCJjcmVhdGUtY2xpZW50IiwibWFuYWdlLXVzZXJzIiwicXVlcnktcmVhbG1zIiwidmlldy1hdXRob3JpemF0aW9uIiwicXVlcnktY2xpZW50cyIsInF1ZXJ5LXVzZXJzIiwibWFuYWdlLWV2ZW50cyIsIm1hbmFnZS1yZWFsbSIsInZpZXctZXZlbnRzIiwidmlldy11c2VycyIsInZpZXctY2xpZW50cyIsIm1hbmFnZS1hdXRob3JpemF0aW9uIiwibWFuYWdlLWNsaWVudHMiLCJxdWVyeS1ncm91cHMiXX19LCJzY29wZSI6Im9wZW5pZCBhdHRyaWJ1dGVzIGVtYWlsIHByb2ZpbGUiLCJzaWQiOiIzNzRjZjk0Yy1mZTQ4LTRhODctYjQ2Mi1hZDAxYjY3OTM0MjYiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGlsb3Rfcm9sZSI6IlNVUEVSX0FETUlOIiwicGlsb3RfY29kZSI6IkFMTCIsIm5hbWUiOiJTdXBlciBBZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6InN1cGVyYWRtaW4iLCJnaXZlbl9uYW1lIjoiU3VwZXIiLCJmYW1pbHlfbmFtZSI6IkFkbWluIiwiZW1haWwiOiJzdXBlckBhZG1pbi5jb20ifQ.cRxPVx7-K6ceL4_7wKUBYF0S98gI4Yhm-YWP6ImWAeqgde6i8eQ6TWtbUgi65FNuWWoYE0jYSropjWPS3OZ5xVuxtuWwjqnzNvaz1FuDgNu9TNecNpTeGfmZ1lGX7RItEbNPCzTtyODmCUi9-__bnrnIalwM0P0OY3Jb6ghfJnVZceiayDykv78KEqvgllCcdxgEF4zM61TrAx9dkbI9QZugD02LEkXW-tOQqJ5Oqm459nvBoKdvkYqJuFxlIYuIyJcIBK6t_nZJNck4qr976gBq7USd6U4jjfeAZtZM55mc6j-tRo-eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2SXd0Nks5NGQtUzBsTWpmUlM2QzZsT0hFV1B6QnNvUm9jN2RMZWRXXzg0In0.eyJleHAiOjE3NjA1NTY2MDEsImlhdCI6MTc2MDUyMDYwMSwianRpIjoiNDYyNGUyNGItYjgxZS00NjNlLTgxZTItZjZiMWY1OWRiZDlmIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay1kZXYudXJicmVhdGgudGVjaC9hdXRoL3JlYWxtcy91cmJyZWF0aC1hdXRoIiwiYXVkIjoicmVhbG0tbWFuYWdlbWVudCIsInN1YiI6ImU4MjJjMTc4LTFhOTItNGE3Yy1iNTkyLTI3NmRmYWM1NjlmMCIsInR5cCI6IkJlYXJlciIsImF6cCI6InVyYnJlYXRoIiwic2Vzc2lvbl9zdGF0ZSI6ImNlMGFjYTdhLTQyYjQtNGIzMC1hNTI2LTVlZWRlMTk5OTQ3OCIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiU1VQRVJfQURNSU4iXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbInZpZXctaWRlbnRpdHktcHJvdmlkZXJzIiwidmlldy1yZWFsbSIsIm1hbmFnZS1pZGVudGl0eS1wcm92aWRlcnMiLCJpbXBlcnNvbmF0aW9uIiwicmVhbG0tYWRtaW4iLCJjcmVhdGUtY2xpZW50IiwibWFuYWdlLXVzZXJzIiwicXVlcnktcmVhbG1zIiwidmlldy1hdXRob3JpemF0aW9uIiwicXVlcnktY2xpZW50cyIsInF1ZXJ5LXVzZXJzIiwibWFuYWdlLWV2ZW50cyIsIm1hbmFnZS1yZWFsbSIsInZpZXctZXZlbnRzIiwidmlldy11c2VycyIsInZpZXctY2xpZW50cyIsIm1hbmFnZS1hdXRob3JpemF0aW9uIiwibWFuYWdlLWNsaWVudHMiLCJxdWVyeS1ncm91cHMiXX19LCJzY29wZSI6Im9wZW5pZCBhdHRyaWJ1dGVzIGVtYWlsIHByb2ZpbGUiLCJzaWQiOiJjZTBhY2E3YS00MmI0LTRiMzAtYTUyNi01ZWVkZTE5OTk0NzgiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGlsb3Rfcm9sZSI6IlNVUEVSX0FETUlOIiwicGlsb3RfY29kZSI6IkFMTCIsIm5hbWUiOiJTdXBlciBBZG1pbiIsImdyb3VwcyI6WyJTVVBFUl9BRE1JTiJdLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzdXBlcmFkbWluIiwiZ2l2ZW5fbmFtZSI6IlN1cGVyIiwiZmFtaWx5X25hbWUiOiJBZG1pbiIsImVtYWlsIjoic3VwZXJAYWRtaW4uY29tIn0.WC1kU0TFhEzkVpeRLasmKVJCGlU9-rHa_XcIB_YXJf-ET_sJZmxrNpT5ZlCpeumlG44TkszrxuzsfFdCDawHZKt94d4uKWvlWH4rpOfj2qnoS85GmnLGeyZ3FfR2GBheTrtBeU3Lxymy4SONXhQPpMPiNYYC1fnl5wB49v8b9Jmhtryr06OqEP1RweQv_XbYKidB_t9Ho9OJGUWwtOSvBTmh3X_OTO8qkzXa12SqEg7n7p7kSoox8P_BQpdrfrYvNpeq6EL5v--WvvzYAoatZUA83Zliw1I1qhXw1HJjZr8koGGqlxCnuECBVaU_QRFMtMu9Vcmc0uVYrqjRqK0KlA"
      },
      body: JSON.stringify(n)
    });
    if (!a.ok)
      throw new Error(
        `IDRA Error (${a.status}): ${await a.text()}`
      );
    return a.status === 201 ? { success: !0 } : a.json();
  }
}
const ss = Wt({
  name: "terrainAnalysisMainWindow",
  props: {
    windowState: {
      type: Object,
      default: void 0
    }
  },
  emits: ["close"],
  components: {
    VcsFormSection: Er,
    VcsSelect: Ir,
    VForm: Zr,
    VContainer: zr,
    VRow: Xr,
    VCol: Kr,
    VcsLabel: Tr,
    VcsDatePicker: _r,
    VcsFormButton: hr,
    VcsTextArea: yr,
    VcsTextField: gr,
    VDialog: Hr,
    VCard: Yr,
    VCardTitle: Br,
    VCardText: $r,
    VCardActions: jr,
    VcsCheckbox: pr,
    VIcon: Wr,
    SelectionArea: Pl,
    VDivider: xr,
    VSpacer: Vr
  },
  setup(e) {
    const t = Tn("vcsApp"), { config: n } = t.plugins.getByKey(pt), { t: a } = Xt(), o = Ne(n.allowMinioUpload), r = Ne(n.allowCatalogueRegistry), i = Ne(n.catalogueEndpoint), c = Ne(!1), l = Ne(null), d = Ne(!1), f = Ne(""), p = Le(() => "Analysis"), m = Ne({
      geotiff: !0,
      geojson: !1
    });
    Ne(null);
    const _ = Ne(null), L = Le(
      () => m.value.geotiff || m.value.geojson
    ), O = Le(
      () => !!_.value && (m.value.geotiff || m.value.geojson)
    ), F = Le(() => {
      const M = a("terrainAnalysis.explanation.flowNote"), V = 50;
      if (M.length <= V)
        return M;
      const x = M.lastIndexOf(" ", V);
      return x > 0 ? M.substring(0, x).trim() : M.substring(0, V).trim();
    }), P = Le(() => {
      const M = a("terrainAnalysis.explanation.flowNote"), V = 50;
      if (M.length <= V)
        return "";
      const x = M.lastIndexOf(" ", V);
      return x > 0 ? M.substring(x).trim() : M.substring(V).trim();
    });
    async function D(M) {
      var B, ge;
      const V = t.layers.getByKey(
        String(Rt)
      );
      V && V.removeAllFeatures();
      const x = await M;
      if (x) {
        l.value = x;
        const he = x.getGeometry();
        if (he.getArea() <= 1e6) {
          he.getCoordinates()[0];
          const Ee = he.getExtent(), z = kn([
            Ee[0],
            Ee[1]
          ]), ae = kn([
            Ee[2],
            Ee[3]
          ]), q = await as(
            t,
            Ee,
            {
              output: "raster",
              rasterType: "accumulation",
              include3DTilesetHeights: !1
            }
          );
          if (_.value = q, "type" in q && q.type !== "raster")
            throw new Error("Unexpected result type from terrainWaterFlow");
          if (!("dataUrl" in q))
            throw new Error("Missing dataUrl in result");
          const Fe = q.dataUrl, Y = "tileWidth" in q ? q.tileWidth : 0, re = "tileHeight" in q ? q.tileHeight : 0, v = ((ge = (B = t.maps.activeMap) == null ? void 0 : B.getScene) == null ? void 0 : ge.call(B)).imageryLayers;
          console.log(v);
          const E = v.length > 0 ? v.get(v.length - 1) : null;
          E && E.imageryProvider && E.imageryProvider instanceof Jt && v.remove(E, !0), v.addImageryProvider(
            new Jt({
              url: Fe,
              tileWidth: Y,
              tileHeight: re,
              rectangle: ya.fromDegrees(
                z[0],
                z[1],
                ae[0],
                ae[1]
              )
            })
          ), console.log(v), V && V.removeAllFeatures();
        } else
          t.notifier.add({
            type: At.ERROR,
            title: "terrainAnalysis.error.title",
            message: "terrainAnalysis.error.message"
          });
      }
    }
    pa(() => {
      const V = t.maps.activeMap.getScene().imageryLayers;
      console.log(V);
      const x = V.length > 0 ? V.get(V.length - 1) : null;
      x && x.imageryProvider && x.imageryProvider instanceof Jt && V.remove(x, !0);
    });
    function g() {
      const M = f.value.trim();
      return M || p.value;
    }
    function I() {
      const M = /* @__PURE__ */ new Date();
      return `${M.getFullYear()}-${String(M.getMonth() + 1).padStart(2, "0")}-${String(M.getDate()).padStart(2, "0")}-${String(M.getHours()).padStart(2, "0")}-${String(M.getMinutes()).padStart(2, "0")}-${String(M.getSeconds()).padStart(2, "0")}`;
    }
    function h(M) {
      return M.substring(0, M.lastIndexOf("/")).replace(
        "https://urbreath.virtualcitymap.de/minioproxy/vcs-analysis",
        "https://minio-dev.urbreath.tech/browser/vcs-analysis"
      );
    }
    function y() {
      m.value = {
        geotiff: !0,
        geojson: !1
      }, f.value = "", d.value = !0;
    }
    function N() {
      d.value = !1;
    }
    function b() {
      d.value = !1, k({ ...m.value });
    }
    async function k(M) {
      var ge, he, _e, Ee;
      const V = {
        geotiff: !0,
        geojson: !1,
        ...M
      }, x = I(), B = g();
      try {
        const z = [];
        let ae = null;
        const q = x;
        if (V.geotiff && _.value) {
          const Y = dt(_.value);
          console.log("[GeoTIFF] Terrain analysis result:", {
            type: "type" in Y ? Y.type : "unknown",
            hasGrid: "grid" in Y,
            hasRasters: "rasters" in Y,
            resultKeys: Object.keys(Y)
          });
          const re = "rasters" in Y ? Y.rasters : [Y];
          console.log("[GeoTIFF] Rasters to process:", re.length);
          const se = [];
          for (let v = 0; v < re.length; v++) {
            const E = dt(re[v]);
            if (console.log("[GeoTIFF] Processing raster:", {
              hasGrid: !!E.grid,
              gridLength: (ge = E.grid) == null ? void 0 : ge.length,
              gridFirstRowLength: (_e = (he = E.grid) == null ? void 0 : he[0]) == null ? void 0 : _e.length,
              hasBounds: !!E.mercatorBounds,
              rasterType: "rasterType" in E ? E.rasterType : "unknown"
            }), !E.grid || !Array.isArray(E.grid)) {
              console.error("[GeoTIFF] Invalid grid: not an array", E);
              continue;
            }
            if (E.grid.length === 0) {
              console.error("[GeoTIFF] Invalid grid: empty array");
              continue;
            }
            if (!E.grid[0] || E.grid[0].length === 0) {
              console.error(
                "[GeoTIFF] Invalid grid: first row is empty or undefined"
              );
              continue;
            }
            if (!E.mercatorBounds) {
              console.error("[GeoTIFF] Missing mercatorBounds");
              continue;
            }
            if (E.grid && E.mercatorBounds) {
              const G = `terrain_${"rasterType" in E ? E.rasterType : "unknown"}_${q}.tif`;
              console.log(
                `[GeoTIFF] Creating GeoTIFF for ${E.rasterType}`,
                {
                  gridSize: {
                    height: E.grid.length,
                    width: (Ee = E.grid[0]) == null ? void 0 : Ee.length
                  },
                  bounds: E.mercatorBounds,
                  hasHeightClassGrid: !!E.heightClassGrid,
                  hasIsSinkGrid: !!E.isSinkGrid
                }
              );
              const j = dt(E.grid), H = dt(E.mercatorBounds);
              let ue;
              if (E.rasterType === "accumulation" && E.heightClassGrid && E.isSinkGrid) {
                const oe = dt(E.heightClassGrid), Pe = dt(E.isSinkGrid), C = await ns(
                  j,
                  H,
                  (rt, We, Je) => yn(
                    rt,
                    oe[Je][We],
                    Pe[Je][We]
                  ),
                  G,
                  {
                    compression: "deflate",
                    description: `Terrain ${E.rasterType} analysis (RGB)`
                  }
                ), K = is(
                  `WaterFlowAccumulation_${q}`
                );
                ue = {
                  ...C,
                  sldContent: K,
                  sldFilename: `terrain_${E.rasterType}_${q}.sld`
                };
              } else
                ue = await ts(
                  j,
                  H,
                  G,
                  {
                    sampleFormat: "float",
                    bitsPerSample: 32,
                    compression: "deflate",
                    description: `Terrain ${E.rasterType} analysis`
                  }
                );
              se.push(ue);
            }
          }
          if (se.length > 0) {
            const v = await os(
              t,
              se,
              q,
              B
            );
            z.push(...v), console.log("Uploaded GeoTIFF URLs:", z);
          } else
            t.notifier.add({
              type: At.WARNING,
              message: "No terrain analysis data available for GeoTIFF export."
            });
        }
        if (V.geojson && l.value) {
          const Y = `terrainAnalysis_polygon_${q}_${B}.geojson`, se = new eo({
            dataProjection: "EPSG:4326",
            featureProjection: "EPSG:3857"
          }).writeFeature(l.value), v = new Blob([se], {
            type: "application/vnd.geo+json"
          });
          ae = await Gt(
            t,
            v,
            Y,
            q
          ), console.log(
            `[GeoJSON] GeoJSON report uploaded: ${ae}`
          );
        }
        if (z.length + (ae ? 1 : 0) > 0) {
          const Y = ae ? h(ae) : z.length > 0 ? h(z[0]) : null;
          Y && t.notifier.add({
            type: At.SUCCESS,
            message: `Files can be found here: ${Y}/`
          });
          const re = "https://urbreath.virtualcitymap.de/minioproxy/vcs-analysis/", se = "https://minio-dev.urbreath.tech/browser/vcs-analysis/";
          if (r.value && i.value) {
            const v = new ls(
              i.value
            ), E = t.uiConfig.getByKey("appTitle");
            let G = E && typeof E.value == "string" ? E.value : "default";
            G = G.split(" ")[0];
            const j = await t.maps.activeMap.getViewpoint(), H = {
              title: `${G} Waterflow Analysis - ${q} - ${B}`,
              description: `Waterflow analysis mode: ${B}`,
              publisher: "Urbreath project",
              creator: "VCS",
              theme: ["ENVI"],
              keywords: ["Waterflow", `${G}`, "waterflow analysis"],
              coordinates: [
                j == null ? void 0 : j.groundPosition[0],
                j == null ? void 0 : j.groundPosition[1]
              ]
            };
            let ue = [];
            ae && ue.push({
              title: "Waterflow Data",
              description: "GeoJSON file with Waterflow data",
              format: "GeoJSON",
              license: "CC BY 4.0",
              downloadURL: ae.replace(
                re,
                se
              )
            }), z.length > 0 && z.forEach((oe) => {
              (oe.endsWith(".tiff") || oe.endsWith(".tif")) && ue.push({
                title: "Geotiff of terrain analysis result",
                description: "Geotiff file containing the result of the terrain analysis for the selected area",
                format: "GeoTIFF",
                downloadURL: oe.replace(
                  re,
                  se
                ),
                license: "CC BY 4.0"
              }), oe.endsWith(".tfw") && ue.push({
                title: "World file for Geotiff",
                description: "World file containing georeferencing information for the Geotiff",
                format: "Other",
                downloadURL: oe.replace(
                  re,
                  se
                ),
                license: "CC BY 4.0"
              }), oe.endsWith(".sld") && ue.push({
                title: "SLD file for terrain analysis result",
                description: "Styled Layer Descriptor (SLD) file containing styling information for the terrain analysis result",
                format: "XML",
                downloadURL: oe.replace(
                  re,
                  se
                ),
                license: "CC BY 4.0"
              });
            });
            try {
              await v.register(H, ue), t.notifier.add({
                type: "success",
                message: "All data successfully registered to Urbreath-catalogue"
              });
            } catch (oe) {
              const Pe = oe instanceof Error ? oe.message : String(oe);
              t.notifier.add({
                type: "error",
                message: `Failed to register data to Urbreath-catalogue: ${Pe}`
              });
            }
          }
        }
      } catch (z) {
        console.error("Upload to MinIO error:", z);
        const ae = z instanceof Error ? z.message : String(z);
        t.notifier.add({
          type: At.ERROR,
          message: `Failed to upload to MinIO: ${ae}`
        });
      }
    }
    return {
      polygon: l,
      terrainAnalysisResult: _,
      resultsAvailable: c,
      handleSession: D,
      minioUploadEnabled: o,
      uploadMinio: k,
      openUploadDialog: y,
      cancelUploadDialog: N,
      confirmUploadDialog: b,
      showUploadDialog: d,
      uploadOptions: m,
      uploadSuffix: f,
      defaultUploadSuffix: p,
      hasAnyUploadOption: L,
      canUploadReportData: O,
      flowNoteLine1: F,
      flowNoteLine2: P,
      icons: hn,
      closeSelf() {
        t.windowManager.remove(Ln);
      }
    };
  }
}), cs = { class: "d-flex justify-start gc-2 mt-4 mb-2" }, us = {
  width: "450",
  height: "145",
  style: { "vertical-align": "middle" }
}, fs = /* @__PURE__ */ ye(
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
), ds = {
  x: "30",
  y: "25",
  "alignment-baseline": "middle"
}, ms = /* @__PURE__ */ ye(
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
), ps = {
  x: "30",
  y: "55",
  "alignment-baseline": "middle"
}, gs = /* @__PURE__ */ ye(
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
), ys = {
  x: "30",
  y: "85",
  "alignment-baseline": "middle"
}, hs = {
  x: "0",
  y: "110",
  style: { "font-size": "12px", "font-style": "italic" }
}, _s = {
  x: "0",
  dy: "0"
}, Ts = {
  x: "0",
  dy: "15"
}, Is = { class: "d-flex justify-end gc-2" }, Es = { class: "text-body-2 mb-3" }, vs = { class: "text-caption mb-3" }, Ns = {
  key: 0,
  class: "text-caption mt-2"
};
function Ss(e, t, n, a, o, r) {
  const i = fe("VcsFormSection"), c = fe("v-form"), l = fe("SelectionArea"), d = fe("v-container"), f = fe("v-divider"), p = fe("VcsFormButton"), m = fe("v-col"), _ = fe("v-icon"), L = fe("v-row"), O = fe("v-card-title"), F = fe("VcsLabel"), P = fe("VcsTextField"), D = fe("VcsCheckbox"), g = fe("v-card-text"), I = fe("v-spacer"), h = fe("v-card-actions"), y = fe("v-card"), N = fe("v-dialog");
  return st(), Pt(
    jt,
    null,
    [
      te(
        c,
        { ref: "form" },
        {
          default: me(() => [
            te(i, {
              heading: e.$t("terrainAnalysis.help-title"),
              "start-open": "",
              "start-help-open": !0
            }, {
              help: me(() => [
                ye("ol", null, [
                  ye(
                    "li",
                    null,
                    ve(e.$t("terrainAnalysis.hint1.title")) + ":",
                    1
                    /* TEXT */
                  ),
                  ye(
                    "span",
                    null,
                    ve(e.$t("terrainAnalysis.hint1.description")),
                    1
                    /* TEXT */
                  ),
                  ye(
                    "li",
                    null,
                    ve(e.$t("terrainAnalysis.hint2.title")) + ":",
                    1
                    /* TEXT */
                  ),
                  ye(
                    "span",
                    null,
                    ve(e.$t("terrainAnalysis.hint2.description")),
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
      te(d, null, {
        default: me(() => [
          je('v-divider :thickness="2" class="mt-2 mb-2"></v-divider'),
          te(i, {
            heading: e.$t("terrainAnalysis.drawGeometry"),
            expandable: "",
            "start-open": "",
            tooltip: e.$t("terrainAnalysis.drawGeometryTooltip")
          }, {
            default: me(() => [
              te(d, { class: "mt-3 py-1 px-1" }, {
                default: me(() => [
                  te(l, {
                    onSessionstart: t[0] || (t[0] = (b) => e.handleSession(b))
                  })
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["heading", "tooltip"]),
          te(f, {
            thickness: 2,
            class: "mb-2"
          }),
          ye(
            "h2",
            null,
            ve(e.$t("terrainAnalysis.explanation.title")),
            1
            /* TEXT */
          ),
          ye("div", cs, [
            (st(), Pt("svg", us, [
              je(" Source areas (green) "),
              fs,
              ye(
                "text",
                ds,
                ve(e.$t("terrainAnalysis.explanation.sourceAreas")),
                1
                /* TEXT */
              ),
              je(" Collection areas (blue) "),
              ms,
              ye(
                "text",
                ps,
                ve(e.$t("terrainAnalysis.explanation.collectionAreas")),
                1
                /* TEXT */
              ),
              je(" Sink areas (red) "),
              gs,
              ye(
                "text",
                ys,
                ve(e.$t("terrainAnalysis.explanation.sinkAreas")),
                1
                /* TEXT */
              ),
              je(" Flow intensity note "),
              ye("text", hs, [
                ye(
                  "tspan",
                  _s,
                  ve(e.flowNoteLine1),
                  1
                  /* TEXT */
                ),
                ye(
                  "tspan",
                  Ts,
                  ve(e.flowNoteLine2),
                  1
                  /* TEXT */
                )
              ])
            ]))
          ]),
          te(f, {
            thickness: 2,
            class: "mb-2"
          }),
          ye("div", Is, [
            e.minioUploadEnabled ? (st(), rn(p, {
              key: 0,
              onClick: e.openUploadDialog,
              icon: "$vcsUpload",
              disabled: !(e.terrainAnalysisResult && e.polygon)
            }, {
              default: me(() => [
                Tt(
                  ve(e.$t("terrainAnalysis.uploadButton")),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onClick", "disabled"])) : je("v-if", !0),
            te(N, {
              modelValue: e.showUploadDialog,
              "onUpdate:modelValue": t[4] || (t[4] = (b) => e.showUploadDialog = b),
              persistent: "",
              "max-width": "520"
            }, {
              default: me(() => [
                te(y, null, {
                  default: me(() => [
                    te(O, { class: "text-h6" }, {
                      default: me(() => [
                        te(L, {
                          align: "center",
                          "no-gutters": ""
                        }, {
                          default: me(() => [
                            te(m, {
                              class: "text-left text-h6",
                              cols: "6"
                            }, {
                              default: me(() => [
                                Tt(
                                  ve(e.$t("terrainAnalysis.uploadDialog.title")),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 1
                              /* STABLE */
                            }),
                            te(m, {
                              class: "text-right",
                              cols: "6"
                            }, {
                              default: me(() => [
                                te(_, {
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
                    te(g, { class: "pt-2" }, {
                      default: me(() => [
                        ye(
                          "div",
                          Es,
                          ve(e.$t("terrainAnalysis.uploadDialog.selectItems")),
                          1
                          /* TEXT */
                        ),
                        te(F, { "html-for": "uploadSuffixInput" }, {
                          default: me(() => [
                            Tt(
                              ve(e.$t("terrainAnalysis.uploadDialog.fileSuffixLabel")),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        }),
                        te(P, {
                          id: "uploadSuffixInput",
                          modelValue: e.uploadSuffix,
                          "onUpdate:modelValue": t[1] || (t[1] = (b) => e.uploadSuffix = b),
                          placeholder: e.$t("terrainAnalysis.uploadDialog.fileSuffixPlaceholder"),
                          class: "mb-1"
                        }, null, 8, ["modelValue", "placeholder"]),
                        ye(
                          "div",
                          vs,
                          ve(e.$t("terrainAnalysis.uploadDialog.fileSuffixCurrent")) + ' "' + ve(e.defaultUploadSuffix) + '". ',
                          1
                          /* TEXT */
                        ),
                        te(D, {
                          modelValue: e.uploadOptions.geotiff,
                          "onUpdate:modelValue": t[2] || (t[2] = (b) => e.uploadOptions.geotiff = b),
                          label: e.$t("terrainAnalysis.uploadDialog.geotiffResultLabel")
                        }, null, 8, ["modelValue", "label"]),
                        te(D, {
                          modelValue: e.uploadOptions.geojson,
                          "onUpdate:modelValue": t[3] || (t[3] = (b) => e.uploadOptions.geojson = b),
                          label: e.$t("terrainAnalysis.uploadDialog.geojsonLabel"),
                          disabled: !e.canUploadReportData
                        }, null, 8, ["modelValue", "label", "disabled"]),
                        e.canUploadReportData ? je("v-if", !0) : (st(), Pt(
                          "div",
                          Ns,
                          ve(e.$t("terrainAnalysis.uploadDialog.requiredFilesLabel")),
                          1
                          /* TEXT */
                        ))
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    te(h, null, {
                      default: me(() => [
                        te(I),
                        te(p, { onClick: e.cancelUploadDialog }, {
                          default: me(() => [
                            Tt("Cancel")
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["onClick"]),
                        te(p, {
                          onClick: e.confirmUploadDialog,
                          disabled: !e.hasAnyUploadOption
                        }, {
                          default: me(() => [
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
          je(`VcsFormSection\r
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
          je('v-divider :thickness="2" class="mb-2"></v-divider'),
          je(`div class="d-flex justify-end gc-2 mt-4">\r
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
const Os = /* @__PURE__ */ ar(ss, [["render", Ss]]);
function fa() {
  return {
    allowCatalogueRegistry: !1,
    catalogueEndpoint: "https://urbreath.virtualcitymap.de/idraproxy/api/datasetngsi",
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
const Ln = "terrainAnalysis_window_id", hn = [
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
function Ps(e, t) {
  const n = fa(), a = { ...n, ...e };
  console.log(a, t);
  const o = [];
  return {
    get name() {
      return pt;
    },
    get version() {
      return So;
    },
    get mapVersion() {
      return Oo;
    },
    get config() {
      return a;
    },
    initialize(r, i) {
      console.log(
        "Called before loading the rest of the current context. Passed in the containing Vcs UI App ",
        r,
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
      }, l = new kr(c);
      r.styles.add(l);
      const { action: d, destroy: f } = vr(
        {
          name: "terrainAnalysis",
          icon: hn[0].icon,
          title: "terrainAnalysis.title"
        },
        {
          id: Ln,
          component: Os,
          state: {
            headerTitle: "terrainAnalysis.title",
            headerIcon: hn[0].icon
          },
          slot: Nr.DYNAMIC_LEFT,
          position: {
            //height: 800,
            minWidth: 450
          }
        },
        r.windowManager,
        pt
      );
      return o.push(f), r.toolboxManager.add(
        { type: Sr.SINGLE, id: pt, action: d },
        pt
      ), Promise.resolve();
    },
    onVcsAppMounted(r) {
      console.log(
        "Called when the root UI component is mounted and managers are ready to accept components",
        r
      );
    },
    /**
     * should return all default values of the configuration
     */
    getDefaultOptions() {
      return fa();
    },
    /**
     * should return the plugin's serialization excluding all default values
     */
    toJSON() {
      return a.allowMinioUpload !== n.allowMinioUpload && (e.allowMinioUpload = a.allowMinioUpload), a.minioEndpoint !== n.minioEndpoint && (e.minioEndpoint = a.minioEndpoint), a.minioBucketName !== n.minioBucketName && (e.minioBucketName = a.minioBucketName), a.allowCatalogueRegistry !== n.allowCatalogueRegistry && (e.allowCatalogueRegistry = a.allowCatalogueRegistry), a.catalogueEndpoint !== n.catalogueEndpoint && (e.catalogueEndpoint = a.catalogueEndpoint), e;
    },
    /**
     * should return the plugins state
     * @param {boolean} forUrl
     * @returns {PluginState}
     */
    getState(r) {
      return console.log("Called when collecting state, e.g. for create link", r), {
        prop: "*"
      };
    },
    /**
     * components for configuring the plugin and/ or custom items defined by the plugin
     */
    getConfigEditors() {
      return [];
    },
    i18n: { en: ro, de: no, be: io, ro: so, it: uo, cz: mo, ee: go, es: ho, fi: To, dk: Eo, gr: No },
    destroy() {
      o.forEach((r) => r());
    }
  };
}
export {
  Ps as default,
  hn as icons,
  Ln as windowId
};
