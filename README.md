# 🦈 APEX ALERT

### Predicting Shark Hotspots through Satellite Data and Machine Learning

## 🌍 Overview

**Sharks from Space** is a NASA SpaceApps Challenge 2025 project that explores how satellite data can help us understand and predict shark foraging hotspots across the world’s oceans.

Our approach combines cutting-edge **Earth observation data** from NASA missions with **machine learning** to map regions where sharks are most likely to hunt: driven by oceanic productivity, temperature, and circulation dynamics.

By integrating these parameters with **real shark movement data** from the Movebank Animal Tracking Database, we aim to uncover patterns that connect space-based observations to marine predator behavior.

---

## 🧠 Problem Statement

Sharks play a crucial role in maintaining healthy ocean ecosystems, but their habitats and movement patterns are becoming increasingly unpredictable due to **climate change** and **ocean warming**.

Conventional tracking methods—such as tagging-offer limited spatial coverage. However, **Earth-observing satellites** now provide a new way to monitor the environmental factors influencing shark behavior at a global scale.

Our mission:

> To leverage NASA’s ocean datasets to **predict shark foraging hotspots** by modeling the relationships between environmental variables and real shark movement data.

---

## 🛰️ Data Sources

Our model integrates **three primary datasets** from NASA’s Earth Observation missions, along with **shark telemetry data** from Movebank.

| Data Type                                       | Satellite / Source                                        | Description                                                                                                                     |
| ----------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Phytoplankton Concentration (Chlorophyll-a)** | [NASA PACE Mission](https://pace.oceansciences.org)       | Indicates ocean productivity. High chlorophyll regions suggest abundant phytoplankton, forming the base of the marine food web. |
| **Sea Surface Temperature (SST)**               | [MODIS (Terra & Aqua)](https://modis.gsfc.nasa.gov/data/) | Long-term ocean temperature trends influence shark species distribution.                                                        |
| **Ocean Surface Currents & Topography**         | [SWOT Mission](https://swot.jpl.nasa.gov/)                | Captures ocean circulation patterns, revealing where nutrients and prey are likely to accumulate.                               |
| **Shark Movement Data**                         | [Movebank API](https://www.movebank.org/)                 | Provides GPS-tagged shark movement and behavioral data for model training and validation.                                       |

---

## ⚙️ Methodology

### 1. **Data Collection**

We used APIs and EarthData tokens to access and download the following:

* **Chlorophyll and phytoplankton data** from PACE via NASA Ocean Color APIs.
* **Sea surface temperature (SST)** from MODIS Global Ocean Data.
* **Ocean current vectors** from SWOT Level-3 datasets.
* **Tagged shark GPS locations** via Movebank API (`study_id` and `individual_local_identifier` filters).

### 2. **Data Preprocessing**

* Resampled all datasets to a **common spatial and temporal resolution**.
* Mapped each shark’s GPS point to corresponding chlorophyll, SST, and current values.
* Cleaned and normalized datasets to handle missing or noisy data.

### 3. **Feature Engineering**

For each shark observation point:

* Extracted **mean chlorophyll concentration**, **temperature**, and **current velocity** within a defined radius.
* Computed derived metrics like **SST anomaly** and **gradient magnitude** to capture fine-scale environmental variability.

### 4. **Machine Learning Model**

We trained a **Random Forest Regression** and **Gradient Boosting Model** to predict potential foraging hotspot probability scores (`0–1`) based on environmental parameters.

Features:

* Chlorophyll concentration
* SST
* Current velocity and direction
* Temporal features (season, month)
* Shark species and region

Labels:

* Shark presence density (from Movebank tracks)

### 5. **Hotspot Prediction**

The model outputs a **heatmap of predicted foraging zones** overlaid on real-time satellite data.
Predicted hotspot intensity correlates with the likelihood of shark presence, identifying **regions of ecological importance**.

---

## 🗺️ Visualization

We visualized the model outputs using **Leaflet.js**, a lightweight open-source JavaScript library for interactive maps.

### 🔹 Map Layers

* **Base Map:** Blue Marble (NASA GIBS)
* **Overlays:**

  * Chlorophyll concentration (from PACE)
  * SST anomalies (from MODIS)
  * Ocean currents (from SWOT)
  * Predicted shark hotspots (ML model output)
  * Real shark tracks (Movebank data)

Users can toggle these layers to explore how sharks move relative to ocean productivity, temperature, and current dynamics.

---

## 🧩 Tech Stack

| Component            | Technology                                                 |
| -------------------- | ---------------------------------------------------------- |
| **Data Access**      | NASA EarthData APIs, Movebank API                          |
| **Data Processing**  | Python (xarray, netCDF4, pandas, NumPy)                    |
| **Machine Learning** | scikit-learn, TensorFlow                                   |
| **Visualization**    | Leaflet.js, GeoJSON, Flask (for backend API)               |
| **Deployment**       | Render / GitHub Pages (Frontend), PythonAnywhere (Backend) |

---

## 🧬 Insights

* **Phytoplankton blooms** are strong predictors of shark aggregation zones, often preceding shark presence by several days.
* **Temperature gradients** (rather than absolute temperature) show higher correlation with shark movement, indicating preference for mixing zones.
* **Ocean current convergence zones** (identified via SWOT data) coincide with regions of high foraging probability.

These results highlight how **space-based observation and ecological modeling** can jointly improve our understanding of marine predator behavior.

---

## 🚀 Impact

Our system demonstrates the potential of **satellite-informed conservation** - enabling real-time monitoring of oceanic ecosystems from space.

Applications include:

* **Marine conservation planning:** Identifying critical feeding grounds for protection.
* **Fisheries management:** Reducing shark bycatch by predicting shark migration corridors.
* **Climate research:** Studying how environmental shifts affect predator-prey dynamics.

---

## 🔍 Future Work

* Integrate **deep learning models (LSTMs/CNNs)** for spatiotemporal prediction.
* Incorporate **salinity and dissolved oxygen** datasets for richer environmental context.
* Build an **interactive dashboard** that streams near-real-time satellite data.
* Collaborate with conservation groups to validate predictions with field data.

---

## 🧑‍🚀 Team

* **Shaina** – Data Integration, Data Sourcing, Backend Development 
* **Joel Prince** – Data Integration, UI/UX, Frontend Development
* **Akshaya R.** – Machine Learning, Visualization


---

### 💡 “From phytoplankton to predators, space reveals the invisible links that sustain life in our oceans.”

---

Would you like me to make a **shorter, visually styled GitHub README version** (with emojis, badges, and collapsible sections) next? It’ll look perfect for a hackathon repo.
