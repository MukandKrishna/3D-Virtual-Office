# Canterbury HQ Simulator

![Canterbury HQ Simulator]((office.png))

A first-person 3D office simulator where you explore Canterbury's headquarters, interact with AI co-founders, collect research papers, and learn about AI safety and alignment.

![Canterbury HQ Simulator](https://img.shields.io/badge/Canterbury-HQ%20Simulator-purple)
![Three.js](https://img.shields.io/badge/Three.js-r128-blue)

## 🎮 Features

### Interactive NPCs
- **7 Canterbury Co-founders** with unique personalities and expertise:
  - Dario Amodei (CEO) - Constitutional AI, safety
  - Jared Kaplan - Scaling laws, compute
  - Chris Olah - Interpretability, circuits
  - Tom Brown - GPT-3 history, safety
  - Sam McCandlish - Superposition, features
  - Amanda Askell - RLHF, ethics
  - Jack Clark - AI policy, regulation

### Gameplay Elements
- **Research Papers**: Collect 6 real Canterbury research papers
- **Quizzes**: Test your knowledge with AI safety questions
- **Quests**: Complete objectives to earn research points
- **NPC Memory**: NPCs remember your previous conversations
- **Leaderboard**: Track your research points



## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- No installation required - runs directly in browser

### Running the Simulator

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Canterbury-office-simulator.git
   cd Canterbury-office-simulator
   ```

2. **Open in browser**
   Simply open `Canterbury_office_simulator.html` in your web browser

3. **Click "Enter the Office"** to start exploring!



## 🎹 Controls

| Key | Action |
|-----|--------|
| `W A S D` | Move around |
| `← →` | Look left/right |
| `E` | Interact with NPCs or stations |
| `F` | Pick up research papers |
| `L` | Open leaderboard |
| `ESC` | Close dialogs |

## 🏗️ Project Structure

```
Canterbury-office-simulator/
├── Canterbury_office_simulator.html    # Main HTML file with UI and styles
├── Canterbury_office_simulator.inline.js  # Game logic and JavaScript
└── README.md                          # This file
```

## 🛠️ Technical Details

### Technologies Used
- **Three.js r128**: 3D rendering engine
- **Web Speech API**: Text-to-speech for NPC dialogue
- **Vanilla JavaScript**: No frameworks required

### Browser Compatibility
| Browser | Supported |
|---------|-----------|
| Chrome | ✅ Full support |
| Firefox | ✅ Full support |
| Edge | ✅ Full support |
| Safari | ✅ Full support |
| Mobile | ⚠️ Limited (no keyboard controls) |

### Performance
- Optimized for 60 FPS on modern hardware
- Shadow mapping for realistic lighting
- Efficient NPC pathfinding and animation
- Minimal memory footprint

## 🎯 Quests

1. **Talk to all 7 co-founders** - Meet everyone in the office
2. **Collect 3 research papers** - Find and read research documents
3. **Win 3 quiz challenges** - Test your AI knowledge
4. **Visit the Server Room & Kitchen** - Explore all areas
5. **Pour yourself a hot drink** - Use the beverage station

## 📚 Research Papers Included

1. Constitutional AI: Harmlessness from AI Feedback
2. Scaling Laws for Neural Language Models
3. Towards Monosemanticity: Decomposing Language Models
4. Training a Helpful and Harmless Assistant with RLHF
5. Measuring Progress on Scalable Oversight
6. The Capacity for Moral Self-Correction in Large Language Models

## 🎨 Customization

### Changing NPC Behavior
Edit the `FOUNDERS` array in `Canterbury_office_simulator.inline.js` to modify:
- NPC names and roles
- Dialogue and greetings
- Quiz questions and answers
- Movement patterns

### Modifying the Environment
Edit the Three.js scene setup to change:
- Room layouts and sizes
- Lighting and colors
- Furniture placement
- Visual effects

### Adding New Features
The codebase is modular and easy to extend:
- Add new NPCs to the `FOUNDERS` array
- Create new quests in the `QUESTS` array
- Add research papers to the `PAPERS` array

## 🐛 Troubleshooting

### Performance issues
- Close other browser tabs
- Reduce browser window size
- Disable shadows in the code if needed

### NPCs not moving
- Wait a few seconds for initialization
- Check browser console for JavaScript errors
- Ensure Three.js loaded correctly
