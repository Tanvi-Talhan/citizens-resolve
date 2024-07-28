# Citizens Resolve

Citizens Resolve is a comprehensive web application designed to manage and report issues efficiently. The app is built using React, Vite, and Tailwind CSS, and includes backend features for robust data handling and synchronization. This app also supports offline capabilities to ensure continuous usability even without internet connectivity.

## Table of Contents

- [Features](#features)
- [Pages](#pages)
- [Additional Features](#additional-features)
- [Offline Capabilities](#offline-capabilities)
- [Setup and Installation](#setup-and-installation)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

### User Profile
- View user information
- List of submitted issues
- Edit profile option

### Comment Section
- Text area for comments
- Display comments with user information

### Notifications
- Alert for new messages
- Notification icon in header

## Pages

### User Pages
1. Home
2. Report Issue
3. My Issue Page
4. Issue Detail
5. Help & Support Page
6. User Profile Page
7. Contact Us
8. Login/Sign Up

### Admin Pages
1. All Issues Page
2. Admin Dashboard

## Additional Features

1. Responsive Design (Compulsory)
2. Multi-Language Support
3. Light & Dark Themes
4. Data Security

## Offline Capabilities

To ensure usability during network outages, the app includes the following offline capabilities:

### Service Workers
- Cache essential assets and API responses
- Serve cached content when offline
- Implement using vite-plugin-pwa for easy setup

### Local Storage and Data Synchronization
- Use IndexedDB for offline data storage
- Synchronize local data with the backend when the user is back online

### Handling Offline States in the UI
- Display offline notification banners
- Style offline-related UI elements using Tailwind CSS

### Web App Manifest
- Create a manifest file to make the app installable on mob
- Define app name, icons, start URL, and theme colors

### Additional Offline Features
1. *Emergency Contacts*
   - Store emergency contact information locally for offline access
   - Implement one-touch dial feature for quick access
2. *Offline Forms*
   - Allow users to fill and submit forms offline
   - Save drafts for later editing and submission
3. *Content Synchronization*
   - Automatically sync data with the backend when online
   - Ensure the latest content is available offline

## Setup and Installation

1. *Clone the repository:*
   ```bash
   git clone https://github.com/yourusername/citizens-resolve.git
   cd citizens-resolve
