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
  // const [workoutData, setWorkoutData] = useState<Workout[]>([]);

  return (
    <div className="App w-full h-dvh bg-background pt-7">
      <div className="modal w-[350px] max-h-screen m-auto rounded-md shadow-lg">
        <WorkoutForm
          workoutData={workoutData}
          setWorkoutData={setWorkoutData}
        />
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
