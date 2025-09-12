## Loading Dots Web Components

A web component for three blinking loading dots.

![Screenshot](https://i.imgur.com/QViGPBX.gif)

[Demo Sandbox](https://codesandbox.io/p/sandbox/dw33f4?file=%2Fsrc%2FApp.js%3A31%2C1-32%2C1)

### Install

```bash
npm i loading-dots
```

Import in your css:

```css
@import 'loading-dots';
```

Or in your JavaScript (Babel and css-loader required):

```javascript
import 'loading-dots/loading-dots.css'
```

### Samples

```html
<p>Loading<loading-dots>.</loading-dots></p>

<p>Loading<loading-dots rgb>.</loading-dots></p>
```
