## Workout Recorder
_Track your daily lifts and your PRs!_

<img width="800" height="600" alt="wod-shot-1" src="https://github.com/user-attachments/assets/0cfbfc2d-8a61-43c8-98b7-5c9dc07b962f" />
  



This is a single-page React application built with TypeScript.
The goal of this project was to focus on core React fundamentals without relying on a backend, authentication, or complex libraries.
All workout data is persisted using LocalStorage, allowing the app to retain records even after a page refresh.

- **Spec:** React, TypeScript, Tailwind CSS

- **Check App:** [Check here](https://workout-record-erika.vercel.app/)

### Why made me create this app?

I work out almost every day, mainly doing CrossFit and HYROX-style training, and I also prepared for HYROX by myself. One issue I constantly had was not remembering my max lifts, so I often trained based only on how I felt that day. While that can work, I realized that to truly improve and get stronger, it’s important to know exact numbers—what I can lift, what I lifted before, and whether I’m actually progressing. This app was created as a simple way to record workouts and clearly understand my own strength and performance over time.

### Core Features

- Add a workout with date, exercise name, weight, and reps
- View all workouts in a table (newest first)
- Delete a workout with a single click
- Persist data using LocalStorage
- Fully typed using TypeScript

### What was challenging?

Even though the app itself is simple, the most challenging part was designing the state flow correctly. I had to decide where the main workout data should live, how to pass it through components using props, and how to update state safely when adding or deleting workouts. LocalStorage, on the other hand, was something I was already comfortable with because I had used it many times in CRO experiments, where I didn’t have access to a database. It felt natural to reuse a familiar approach while applying it in a more structured React project, which allowed me to focus on practicing proper state management and component design. This project reminded me that even small applications require thoughtful structure and clear data flow.

### Goals for Improvement

For future improvements, I would like to add features such as filtering and sorting workouts, as well as additional fields like notes. In my next project, I plan to use Supabase as a database so I can practice data fetching, reading, and writing with a real backend instead of relying only on LocalStorage. From a design perspective, this app uses the same layout for both mobile and desktop, intentionally keeping a compact, mobile-first look. In my next app, I want to better enjoy designing separate experiences for mobile and desktop, with layouts that take advantage of larger screens. By preparing mockups, file structure, and data design more carefully in advance, I aim to build projects that are more scalable, polished, and maintainable.

<img width="800" height="600" alt="wod-shot-2" src="https://github.com/user-attachments/assets/9ab1e1cb-3f96-4212-9f40-43654da61c84" />
