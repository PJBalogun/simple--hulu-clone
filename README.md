# Spotify Clone

A Spotify clone built with React JS, Vite, Material UI, and the Spotify Web API.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a Spotify clone built for educational purposes, following a "Build a Spotify Clone with REACT JS for Beginners" tutorial. It demonstrates how to use modern web development technologies to create a music streaming application.

## Features

- User authentication with Spotify
- Display user playlists
- Play, pause, and skip tracks
- Responsive design using Material UI

## Technologies Used

- React JS
- Vite
- Material UI
- Spotify Web API
- Axios
- React Router DOM

## Setup and Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/spotify-clone.git
    cd spotify-clone
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a Spotify Developer account and get your client ID and client secret from the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).

4. Create a `.env` file in the root directory and add your Spotify credentials:

    ```plaintext
    VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
    VITE_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
    VITE_REDIRECT_URI=http://localhost:3000/callback
    ```

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Click the "Login to Spotify" button to authenticate with Spotify.
- After logging in, you can view your playlists and control playback.

## Project Structure

```plaintext
spotify-clone/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Player.js
│   │   ├── Sidebar.js
│   │   └── ...
|── utils/
    |___services/
    |   |
│   │   └── spotifyService.js
│   ├── App.js
│   ├── main.js
│   └── ...
├── .env
├── package.json
└── README.md
