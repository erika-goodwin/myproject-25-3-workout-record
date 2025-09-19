import { useId, useState } from "react";
import type { Workout } from "../types/workout";
import type { WorkoutFormProps } from "../types/workoutFormProps";

const WorkoutForm: React.FC<WorkoutFormProps> = ({
  workoutData,
  setWorkoutData,
}) => {
  const [errors, setErrors] = useState<{ [key in keyof Workout]?: string }>({});

  const [formData, setFormData] = useState({
    exercise: "",
    weight: "",
    reps: "",
  });
  const userId = useId();
  type InputForm = React.FormEvent<HTMLFormElement>;
  //   type InputEvent = React.ChangeEvent<HTMLInputElement>;
  //   type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

  // const formJson: { [k: string]: FormDataEntryValue }
  // Record<string, FormDataEntryValue>
  const validationForm = (formJson: Record<string, FormDataEntryValue>) => {
    const newErrors: { [key in keyof Workout]?: string } = {};

    if (
      formJson.exercise == "" ||
      (formJson.exercise as string).split("").length <= 0 ||
      !isNaN(Number(formJson.exercise))
    ) {
      newErrors.exercise = "Exercise is required!";
    }
    if (formJson.weight == "" || Number(formJson.weight) <= 0) {
      newErrors.weight = "Weight has to be greater than 0";
    }

    if (formJson.reps == "" || Number(formJson.reps) <= 0) {
      newErrors.reps = "Reps has to be greater than 0";
    }

    console.log(">>>> validationForm: newError| ", formJson, newErrors);

    return newErrors;
  };

  const handleSubmit = (e: InputForm): void => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    const newErrors = validationForm(formJson);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    const newWorkout: Workout = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      exercise: formJson.exercise as string,
      weight: Number(formJson.weight),
      reps: Number(formJson.reps),
    };

    // Adding data into array
    setWorkoutData((prev) => [...prev, newWorkout]);

    // setExercise("");
    // setWeight("");
    // setReps("");
    setFormData({ exercise: "", weight: "", reps: "" });
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
              value={formData.exercise}
              onChange={(e) =>
                setFormData({ ...formData, exercise: e.target.value })
              }
            />
          </div>
          {errors.exercise && (
            <span className="text-red-600">{errors.exercise}</span>
          )}
          <div className="flex flex-row">
            <label htmlFor={`${userId}-weight`}>Weight :</label>
            <input
              id={`${userId}-weight`}
              type="number"
              name="weight"
              className="bg-white"
              value={formData.weight}
              onChange={(e) =>
                setFormData({ ...formData, weight: e.target.value })
              }
            />
          </div>
          {errors.weight && (
            <span className="text-red-600">{errors.weight}</span>
          )}
          <div className="flex flex-row">
            <label htmlFor={`${userId}-reps`}>Reps :</label>
            <input
              id={`${userId}-reps`}
              type="number"
              name="reps"
              className="bg-white"
              value={formData.reps}
              onChange={(e) =>
                setFormData({ ...formData, reps: e.target.value })
              }
            />
          </div>
          {errors.reps && <span className="text-red-600">{errors.reps}</span>}
          <div className="error"></div>
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
