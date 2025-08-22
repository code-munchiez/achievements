# achievements

A JavaScript library for creating and managing achievement videos with animated visual effects.

## Features

- 🏆 Create achievement badges with animated effects
- 🎬 Generate video frames for achievements
- 📱 Interactive web demo with live preview
- 💾 Export/import achievement data
- 🎨 Customizable visual styling

## Files

- `video.js` - Core achievement video generation library
- `video-demo.html` - Interactive demo showcasing video functionality
- `console.js` - Console utilities
- `sort.js` - Sorting utilities

## Quick Start

### Using the Web Demo

1. Open `video-demo.html` in your browser
2. Add achievements using the form
3. Click "Generate Video Frame" to create a single frame
4. Click "Play Animation" to see animated effects
5. Export your achievements as JSON for later use

### Using the JavaScript Library

```javascript
// Create a new video generator
const videoGen = new AchievementVideo();

// Add achievements
videoGen.addAchievement('First Step', 'Completed your first task!');
videoGen.addAchievement('Learning Path', 'Finished the tutorial');

// Initialize canvas (in browser)
videoGen.initCanvas('myCanvas', 800, 600);

// Generate a video frame
const achievement = videoGen.achievements[0];
videoGen.generateAchievementFrame(achievement, 0);
```

## API Reference

### AchievementVideo Class

#### Methods

- `addAchievement(title, description, timestamp)` - Add a new achievement
- `initCanvas(canvasId, width, height)` - Initialize HTML5 canvas for rendering
- `generateAchievementFrame(achievement, frameNumber)` - Generate a single video frame
- `generateVideoSequence(duration)` - Generate a sequence of frames
- `exportAchievements()` - Export achievement data as JSON
- `loadAchievements(data)` - Load achievement data from JSON

## Example Output

The video generator creates animated achievement badges featuring:
- Golden circular badges with glow effects
- Trophy emoji icons
- Achievement titles and descriptions
- Timestamps
- Smooth animations and transitions

## Browser Compatibility

Works in all modern browsers that support HTML5 Canvas and ES6 classes.