# Video Timecode Navigation App

A React application that features a left sidebar menu with three clickable links and a right-side video player. Clicking on menu items will jump to specific time codes in the video.

## Features

- **Responsive Layout**: Left sidebar menu with video player on the right
- **Time Code Navigation**: Click menu items to jump to specific video timestamps
- **Active State Tracking**: Menu items highlight when the video is near their time code
- **Real-time Updates**: Current video time is displayed and updated in real-time
- **Mobile Responsive**: Layout adapts to smaller screens

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- The left sidebar contains three menu items: Introduction (0:00), Main Content (0:30), and Conclusion (1:30)
- Click any menu item to jump to that time code in the video
- The current video time is displayed at the bottom of the sidebar
- Menu items will highlight when the video is playing near their time code

## Project Structure

```
src/
├── components/
│   ├── Menu.js          # Left sidebar menu component
│   ├── Menu.css         # Menu styling
│   ├── VideoPlayer.js   # Video player component
│   └── VideoPlayer.css  # Video player styling
├── App.js               # Main app component
├── App.css              # Main app styling
├── index.js             # App entry point
└── index.css            # Global styles
```

## Customization

To customize the time codes and menu items, edit the `menuItems` array in `App.js`:

```javascript
const menuItems = [
  { id: 1, label: 'Introduction', timeCode: 0 },
  { id: 2, label: 'Main Content', timeCode: 30 },
  { id: 3, label: 'Conclusion', timeCode: 90 }
];
```

To use your own video, replace the video source URLs in `VideoPlayer.js`.
# paypal
