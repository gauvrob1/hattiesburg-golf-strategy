# 🏌️ Hattiesburg Country Club - Course Strategy Guide

An interactive, hole-by-hole strategy guide for Hattiesburg Country Club, personalized with custom club distances.

![Par 71 | 6,902 Yards | Slope 131](https://img.shields.io/badge/Par%2071-6%2C902%20Yards-green)
![Former PGA Tour Host](https://img.shields.io/badge/Former%20PGA%20Tour-Magnolia%20Classic-gold)

## Features

- 🗺️ **Visual Hole Maps** - Animated landing zone markers for each shot
- 🎯 **Personalized Club Selection** - Based on YOUR exact distances
- 📊 **Shot-by-Shot Breakdown** - Distance and remaining yardage for every shot
- ⚠️ **Hazard Warnings** - Water, bunkers, and tree locations
- 📋 **Strategy Notes** - Tee shot tips, approach advice, and where to miss
- 📱 **Mobile Friendly** - Works on any device

## Club Distances Used

| Club | Distance |
|------|----------|
| Driver | 265 yards |
| 3 Wood | 235 yards |
| Hybrid | 220 yards |
| 4 Iron | 200 yards |
| 5 Iron | 180 yards |
| 6 Iron | 165 yards |
| 7 Iron | 155 yards |
| 8 Iron | 145 yards |
| 9 Iron | 135 yards |
| PW | 125 yards |
| 52° | 115 yards |
| SW | 90 yards |
| LW | 65 yards |

## Course Highlights

- **Hole 5 (442y, Par 4)** - #1 Handicap. Consider 3-wood for accuracy.
- **Hole 13 (630y, Par 5)** - Monster hole, not reachable in two.
- **Hole 18 (420y, Par 4)** - Signature finishing hole with downhill approach over water to three-tiered green.

### Reachable Par 5s
- Hole 9 (462 yards)
- Hole 17 (523 yards)

## About the Course

Hattiesburg Country Club hosted the PGA Tour's Magnolia Classic from 1968-1993. Notable champions include Payne Stewart (his first Tour win in 1982), Craig Stadler, and Nick Faldo.

Redesigned by Max Maxwell and Nathan Crace in 1999.

## Usage

This is a React component. To use:

```jsx
import HattiesburgCourseGuide from './hattiesburg-strategy';

function App() {
  return <HattiesburgCourseGuide />;
}
```

Or paste the code into [Claude.ai](https://claude.ai) as an artifact to run it instantly.

## Customize Your Distances

Edit the `clubs` object at the top of the file to match your personal distances:

```javascript
const clubs = {
  'Driver': 265,    // Change to your distance
  '3 Wood': 235,
  // ... etc
};
```

---

*Built with ⛳ for better course management*
