# 🌍 My Dreams — World Map & Curse System

A symbolic world-mapping web project where countries, states, and people are assigned allegiances and curses.

This project blends:

- 🌍 Geopolitical visualization  
- 🧿 Symbolic curse tracking  
- 📜 Narrative world-building  
- ⚛️ Interactive UI systems  

It functions as both:

- A **visual dashboard**
- A **personal world system**
- A **living journal of conflicts and curses**

---

# 🧠 Project Concept

This system represents a world divided into:

- **Alliances**
- **Neutral forces**
- **Conflicts**
- **Ultraviolence zones**
- **Cursed individuals**

Maps act as the **battlefield**, while panels act as **records of truth**.

Each person listed in the curse system has exactly **one assigned curse**, tracked through structured data.

---

# ⚙️ Tech Stack

## Frontend

- ReactJS  
- TailwindCSS  
- React Simple Maps  

## Data

- JSON-driven systems  
- Dynamic rendering  

## Maps

- World Map (TopoJSON)  
- USA Map (State-level)  

---

# 🗂️ Project Structure

```
src/
│
├── components/
│   ├── Panel.jsx
│   ├── WorldMap.jsx
│   ├── USAMap.jsx
│
├── pages/
│   ├── Curses.jsx
│   ├── World.jsx
│
├── data/
│   ├── countries.js
│   ├── states.js
│   ├── blackList.js
│
├── assets/
│   ├── maps/
│   │   ├── countries-50m.json
│   │   ├── us-states.json
│
└── App.jsx
```

---

# 🧿 Curse System

The curse system contains:

## Primary Curse Panels

- 🤍 Curse of White Hand  
- 🖤 Curse of Black Hand  
- 👥 Cursed People Registry  

Each panel can:

- Expand  
- Collapse  
- Display structured curse data  

---

# 👥 People Curse Table

Each person:

- Has **one assigned curse**
- Is loaded dynamically from **JSON data**

## Example Data

```js
export const blackList = [
  {
    name: "Person 1",
    curse: "White Hand"
  },
  {
    name: "Person 2",
    curse: "Black Hand"
  }
];
```

## Example Output

| Person | Curse |
|--------|-------|
| Person 1 | White Hand |
| Person 2 | Black Hand |

---

# 🌍 World Map System

Countries are colored based on allegiance:

| Type | Meaning |
|------|--------|
| Blue | USA Bloc |
| Gray | Neutral |
| Red | The Others |
| Stripe | Conflict |
| Purple | Ultraviolence |

Legend panels explain map logic.

Each map includes:

- Toggleable legend  
- Narrative text box  
- Dynamic coloring  

---

# 🇺🇸 USA Map System

States are classified as:

| Type | Meaning |
|------|--------|
| Red | Pure Red States |
| Light Red | Mixed Red |
| Blue | Blue States |
| Striped | Conflict Zones |
| Dark Purple | Curse Strongholds |

Used to simulate internal fracture dynamics.

---

# 🧩 Panel Component System

Reusable UI component:

```jsx
<Panel title="Section Title">
  Content inside
</Panel>
```

## Features

- Expand / Collapse  
- Animated open/close  
- Tailwind styling  
- Reusable across:

  - Maps  
  - Curse lists  
  - Legends  
  - Data views  

---

# 📦 Installation

Clone repository:

```bash
git clone https://github.com/LilDreamGit/my-dreams.git
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

# 🗺️ Data Driven System

Most visual behavior is controlled using:

- JSON datasets  
- Configurable color logic  
- Mapping rules  

## Example

```js
const allegianceColors = {
  blue: "#3B82F6",
  neutral: "#9CA3AF",
  red: "#EF4444",
  ultraviolence: "#7C3AED"
};
```

---

# 🎯 Goals of the Project

- Build a symbolic mapping system  
- Track curse assignments  
- Visualize power structures  
- Create a narrative world model  
- Maintain a visual dream journal  

---

# 🔮 Future Features

Planned expansions:

- 🌍 Click country → assign allegiance  
- 👥 Click person → change curse  
- 🧿 Curse strength levels  
- 🗺️ Zoomable regional maps  
- 📜 Timeline system  
- 🧠 Event logging  
- 🔴 Conflict simulation  

---

# 📸 Screenshots (Add Later)

Create a folder:

```
screenshots/
```

Then add:

```
world-map.png  
usa-map.png  
curses.png  
people-table.png
```

And show them like:

```md
![World Map](./screenshots/world-map.png)
![USA Map](./screenshots/usa-map.png)
```

---

# 🧑‍💻 Author

**Renzo Guillen - LIL DREAM**  
Developer — System Builder — World Designer  

GitHub:  
https://github.com/LilDreamGit  

---

# ⚠️ Disclaimer

This project is symbolic and experimental.

It represents fictional structures, narrative mapping, and creative visualization systems.

Not intended to represent real-world hostility.

---

# 🌌 Final Note

This is not just a map.

It is a **system of memory, power, and narrative.**