# PSDA Abruzzo – WebGIS Parametri CPP (h(1,T), n(T))

Questo WebGIS rende disponibili in forma aperta e consultabile i **raster dei parametri pluviometrici** *h(1,T)* (mm) e *n(T)* (–) utilizzati nel modello delle **curve di possibilità pluviometrica (CPP)**:

> **h(d, T) = h(1, T) · dⁿ(T)**

per tempi di ritorno **T = 20, 50, 100, 200, 500 anni**.

👉 **[Apri la mappa interattiva](https://frajomen.github.io/psda-abruzzo-webgis/)**

---

## Contesto
La regionalizzazione delle precipitazioni è un tassello chiave per la valutazione idrologica e la progettazione delle opere di difesa idraulica. In Abruzzo, il riferimento operativo consolidato è il **Piano Stralcio di Difesa dalle Alluvioni (PSDA)**, basato sugli studi di **Calenda e Cosentino (1994)** e **Calenda et al. (1999)**.

Il più recente **Piano di Bacino Stralcio Distrettuale Idraulico**, adottato da **AUBAC** con **Delibera n. 57/2025**, non introduce al momento una nuova banca dati pluviometrica. Le Norme specificano che le basi dati saranno individuate in regionalizzazioni omogenee e aggiornate quando disponibili; pertanto, **le regionalizzazioni PSDA restano oggi il principale riferimento operativo**.

---

## Dati e metodo
- **Raster prodotti** per ciascun \(T\): `RAS_h_TR20`, `RAS_h_TR50`, `RAS_h_TR100`, `RAS_h_TR200`, `RAS_h_TR500` e `RAS_n_TR20`, …, `RAS_n_TR500`.
- **Origine**: tavole PSDA vettorializzate e georiferite (isolinee).
- **Interpolazione**: TIN (superficie continua) + IDW (integrazione bordi/aree a dati radi).
- **Griglia**: 150 × 150 m, **ETRS89 / UTM33N**.
- **Output**: GeoTIFF; Zonal Statistics su poligoni comunali per consultazione amministrativa.
- **Bacini coperti (PSDA Abruzzo)**: Tordino, Vomano, Aterno–Pescara, Sangro, Trigno.

> Nota: i valori per **T=20** sono mantenuti per completezza storica; ai fini pianificatori il **PAI Distrettuale Idraulico (31.07.2025)** utilizza tre classi principali (≈ T 30–50; ≈ T 100–200; ≥ T 500).

---

## Progetto QGIS & Open Data
- Un progetto QGIS preconfigurato (nel repo “Risorse”) carica automaticamente i raster e i layer di contesto (comuni, reticolo, bacini PSDA).
- Tutti i risultati sono pubblicati come **open data**. Uso libero previa **citazione della fonte**; nessuna garanzia di completezza/correttezza/idoneità a specifici scopi. L’uso resta sotto esclusiva responsabilità dell’utente.

**Download dati (GeoTIFF, progetto QGIS):** vedi repo: `franciscojmendez_Risorse` (cartella /articolo_03_Piogge Abruzzo/…)

---

## Licenza
- **Codice/impaginazione WebGIS**: MIT License.
- **Dati**: indicare la fonte originale PSDA Abruzzo e l’autore della digitalizzazione/interpolazione.

---

## Autore
Ing. Francisco José Mendez – https://franciscojmendez.com
