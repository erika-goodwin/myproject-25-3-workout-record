import "./App.css";
// import { useState } from "react";
import type { Workout } from "./types/workout";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
import useLocalStorage from "./hooks/useLocalStrage";

function App() {
  const [workoutData, setWorkoutData] = useLocalStorage<Workout[]>(
    "workout",
    []
  );

  return (
    <div className="App w-screen h-screen bg-background sm:pt-3 ">
      <div className="modal w-[350px] max-h-screen mx-auto rounded-md shadow-lg flex flex-col">
        <WorkoutForm setWorkoutData={setWorkoutData} />
        <WorkoutList
          workoutData={workoutData}
          setWorkoutData={setWorkoutData}
        />
      </div>
    </div>
  );
}

export default App;

// Holds state of all workouts.
// Loads/saves to LocalStorage.
// Renders WorkoutForm + WorkoutList.
