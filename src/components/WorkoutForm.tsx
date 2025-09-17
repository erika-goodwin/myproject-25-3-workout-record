import { useId, useState } from "react";
import type { Workout } from "../types/workout";

const WorkoutForm = () => {
  const [workoutData, setWorkoutData] = useState<Workout[]>([]);
  const userId = useId();
  type InputForm = React.FormEvent<HTMLFormElement>;
  //   type InputEvent = React.ChangeEvent<HTMLInputElement>;
  //   type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

  console.log(">>>> workoutData:", workoutData);

  const handleSubmit = (e: InputForm): void => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    console.log(">>>>> handleSubmit()", form, formData, formJson);

    const newWorkout: Workout = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      exercise: formJson.exercise as string,
      weight: Number(formJson.weight),
      reps: Number(formJson.reps),
    };

    console.log(">>> newWorkout:", newWorkout);

    // Adding data into array
    setWorkoutData((prev) => [...prev, newWorkout]);
    console.log(">>>> workoutData [update]:", workoutData);
  };

  return (
    <div className="bg-orange-100 w-full flex flex-col justify-center content-center">
      <div className="flex justify-center content-center">
        <h1>WorkoutForm</h1>
      </div>
      <div className="flex m-auto p-3 w-1/2 bg-amber-500  justify-center content-center">
        <form
          className="bg-amber-300 flex flex-col justify-center content-center"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row">
            <label htmlFor={`${userId}-exercise`}>Workout :</label>
            <input
              id={`${userId}-exercise`}
              type="text"
              name="exercise"
              className="bg-white"
            />
          </div>
          <div className="flex flex-row">
            <label htmlFor={`${userId}-weight`}>Weight :</label>
            <input
              id={`${userId}-weight`}
              type="number"
              name="weight"
              className="bg-white"
            />
          </div>
          <div className="flex flex-row">
            <label htmlFor={`${userId}-reps`}>Reps :</label>
            <input
              id={`${userId}-reps`}
              type="number"
              name="reps"
              className="bg-white"
            />
          </div>
          <button type="submit" className="w-80">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default WorkoutForm;

// Handles adding a new workout.
// Passes new workout up to App.tsx via props.
