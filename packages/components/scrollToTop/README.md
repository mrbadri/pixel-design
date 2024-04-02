
# @pixel-design/scroll-to-top

A lightweight, beautiful UI component to add a "scroll to top" feature to your web projects, styled with Tailwind CSS for ease of customization and consistency with your design system.

## Features

- **Ease of Use**: Easily integrate with any web project using Tailwind CSS.
- **Customizable**: Adjustable properties to match your site's design.
- **Performance**: Optimized for fast loading and smooth interaction.

## Demo

Experience the smooth and visually appealing "scroll to top" feature in action. [View the demo here](#) or check out the included GIF below:

![Scroll to Top Demo](https://github.com/mrbadri/pixel-design/assets/85818966/396933f0-946a-4e31-9119-99fa5a77e8cc)

## Prerequisites

Before you install `@pixel-design/scroll-to-top`, make sure you have Tailwind CSS installed in your project. This package is designed to work seamlessly with Tailwind CSS for styling.

## Installation

To install the package, run the following command in your project directory:

```bash
npm i @pixel-design/scroll-to-top
```

## Usage
### Using the ScrollToTop Component
Simply import the ScrollToTop component into your React project and use it as follows:

```typescript
import ScrollToTop from '@pixel-design/scroll-to-top';

function App() {
  return (
    <div>
      {/* Your app content */}
      <ScrollToTop />
    </div>
  );
}

export default App;
```

### Using the UseScrollToTop Hook
For more control and customization, you can use the UseScrollToTop hook. Here is how to integrate it:

```typescript
import { useEffect, useState } from 'react';
import UseScrollToTop from '@pixel-design/scroll-to-top';

function App() {
  const {
    scrollToTop,
    getWrapperProps,
    getProgressProps,
  } = UseScrollToTop({ icon: 'your-icon', size: 'md' });

  // Example usage of the hook's return values
  useEffect(() => {
    // Use `scrollToTop` or other values as needed
  }, [scrollToTop]);

  // Render your component based on the hook's output
  // Example: <div {...getWrapperProps()}></div>

  return <div>Your app content</div>;
}

export default App;
```

