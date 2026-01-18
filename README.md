# Password Generator

Netlify deployed link (https://tangerine-smakager-27b643.netlify.app/)

A small React app that creates random passwords with optional numbers and special characters. It uses a slider to pick the length and checkboxes to include numbers and/or special characters.

## Demo

Open the app in the browser to try it: the UI is implemented in [src/App.jsx](src/App.jsx).

## Features

- Select password length with a slider.
- Optionally include numbers and special characters.
- Copy the generated password to clipboard with a single click.
- Password regenerates when length or options change.

## How it works (implementation notes)

- The main UI and logic live in [src/App.jsx](src/App.jsx). The password generation logic is inside the component as the [`generatePassword`](src/App.jsx) callback and uses state variables such as [`length`](src/App.jsx), [`numberYes`](src/App.jsx), [`charYes`](src/App.jsx), [`password`](src/App.jsx) and the copy handler [`copyPassword`](src/App.jsx).
- The app is bootstrapped from [src/main.jsx](src/main.jsx) which mounts the app into [index.html](index.html).
- Styling comes from TailwindCSS.

## Usage

1. Install dependencies:

```sh
npm install
```
