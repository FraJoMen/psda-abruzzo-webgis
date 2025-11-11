# WebGIS – Piogge PSDA Abruzzo

Il **WebGIS – Piogge PSDA Abruzzo** è uno strumento interattivo sviluppato per favorire la **divulgazione dei risultati** e la **consultazione immediata dei dati pluviometrici a scala comunale**, derivati dal *Piano Stralcio di Difesa dalle Alluvioni (PSDA Abruzzo)*.

👉 **[Apri la mappa interattiva](https://frajomen.github.io/psda-abruzzo-webgis/)**

📄 **Approfondimento completo:**  
🔗 [Articolo sul sito di Francisco J. Mendez](https://www.franciscojmendez.com/progetti/mappe-piogge-abruzzo/)

---

## 🌧️ Descrizione

Il WebGIS consente la **consultazione a scala comunale** dei parametri pluviometrici \(h(1,T)\) e \(n(T)\) utilizzati per la definizione delle **curve di possibilità pluviometrica (CPP)**, per tempi di ritorno **T = 20, 50, 100, 200 e 500 anni**.

È basato su una **cartografia di sfondo OpenStreetMap (OSM)**, sulla quale sono sovrapposti:

- i **raster dei parametri** \(h(1,T)\) e \(n(T)\);  
- i **layer vettoriali** dei confini comunali, con valori medi, minimi e massimi calcolati mediante *Zonal Statistics*;  
- le **isolinee digitalizzate** dei parametri CPP, tratte dalle tavole originali del PSDA Abruzzo.

Tramite l’**icona del cannocchiale** (barra sinistra) è possibile cercare un Comune e centrare la vista corrispondente.  
L’opzione **`doHighlight`** evidenzia in giallo i comuni selezionabili al passaggio del cursore.  
La **legenda interattiva** (barra destra) permette di attivare o disattivare i layer per differenti tempi di ritorno e di confrontare più scenari pluviometrici.

Il WebGIS fornisce una **rappresentazione sintetica e accessibile** della distribuzione spaziale dei parametri \(h(1,T)\) e \(n(T)\) sull’intero territorio regionale di competenza del PSDA Abruzzo.

---

## 🧭 Dati e progetto QGIS

I dati utilizzati per la costruzione del WebGIS derivano dal progetto principale:  
👉 **[PSDA Abruzzo – Mappe pluviometriche e QGIS](https://github.com/FraJoMen/franciscojmendez_Risorse/tree/main/articolo_03_Piogge%20Abruzzo)**

Lì sono disponibili:
- i raster GeoTIFF dei parametri \(h(1,T)\) e \(n(T)\);  
- i layer vettoriali e le isolinee digitalizzate;  
- il progetto QGIS completo e preconfigurato con percorsi relativi.

---

## ⚠️ Avvertenze

I dati e le mappe qui presentati sono condivisi con la **massima attenzione e accuratezza**, ma **senza alcuna garanzia** di completezza, correttezza o idoneità a specifici scopi progettuali.  
L’utilizzo è libero, a condizione che venga **citata la fonte**, e avviene sotto la **responsabilità esclusiva dell’utente**.

---

## ⚖️ Licenza

- **Codice e struttura WebGIS:** MIT License  
- **Dati:** citare la fonte originale *PSDA Abruzzo (BETA Studio – WL | Delft Hydraulics, 2002)*  
  e la digitalizzazione/interpolazione a cura di *Francisco J. Mendez (2025)*.

---

## 👤 Autore

**Ing. Francisco José Mendez**  
[https://franciscojmendez.com](https://franciscojmendez.com)
