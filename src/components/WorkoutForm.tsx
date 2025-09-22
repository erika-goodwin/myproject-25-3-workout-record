import { useId, useState } from "react";
import type { Workout } from "../types/workout";
import type { WorkoutFormProps } from "../types/workoutFormProps";

const WorkoutForm: React.FC<WorkoutFormProps> = ({ setWorkoutData }) => {
  const [errors, setErrors] = useState<{ [key in keyof Workout]?: string }>({});

  const [formData, setFormData] = useState({
    exercise: "",
    weight: "",
    reps: "",
  });
  const userId = useId();
  type InputForm = React.FormEvent<HTMLFormElement>;

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

    return newErrors;
  };

  const handleSubmit = (e: InputForm): void => {
    // Prevent the browser from reloading the page
    e.preventDefault();
    setErrors({});

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
    // Clean ups
    setFormData({ exercise: "", weight: "", reps: "" });
  };

  return (
    <div className=" w-full flex flex-col justify-center content-center">
      <div className="bg-primary p-4 rounded-t-md flex justify-center content-center">
        <h1 className="text-primary-shadow">Workout Tracker</h1>
      </div>
      <div className="w-full flex m-auto p-3 pt-5  justify-center content-center">
        <form
          className="w-full flex flex-col justify-center content-center"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row justify-around">
            <div className="bg-background-shadow shadow-md rounded-sm p-2 w-38">
              <p>Date</p>
            </div>
            <div className="w-38">
              <label htmlFor={`${userId}-exercise`} className="hidden">
                Workout :
              </label>
              <input
                id={`${userId}-exercise`}
                type="text"
                name="exercise"
                className="w-full bg-background-shadow shadow-md rounded-sm p-2"
                value={formData.exercise}
                placeholder="Workout"
                onChange={(e) =>
                  setFormData({ ...formData, exercise: e.target.value })
                }
              />
            </div>
          </div>
          <div className="error flex flex-col">
            {errors.exercise && (
              <span className="text-red-600">{errors.exercise}</span>
            )}
          </div>
          <div className="flex flex-col justify-around mt-3">
            <div className="flex flex-row justify-around">
              <div className="w-38 relative">
                <label htmlFor={`${userId}-weight`} className="hidden">
                  Weight :
                </label>
                <input
                  id={`${userId}-weight`}
                  type="number"
                  name="weight"
                  className="w-full bg-background-shadow shadow-md rounded-sm p-2"
                  value={formData.weight}
                  placeholder="Weight"
                  onChange={(e) =>
                    setFormData({ ...formData, weight: e.target.value })
                  }
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                  kg
                </span>
              </div>
              <div className="w-38">
                <label htmlFor={`${userId}-reps`} className="hidden">
                  Reps :
                </label>
                <input
                  id={`${userId}-reps`}
                  type="number"
                  name="reps"
                  className="w-full bg-background-shadow shadow-md rounded-sm p-2"
                  value={formData.reps}
                  placeholder="Reps"
                  onChange={(e) =>
                    setFormData({ ...formData, reps: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="error flex flex-col">
              {errors.weight && (
                <span className="text-red-600">{errors.weight}</span>
              )}
              {errors.reps && (
                <span className="text-red-600">{errors.reps}</span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-80 bg-accent hover:shadow-lg transition-colors duration-300 shadow-md mt-5"
          >
            <p className="text-background-shadow font-bold">Add Workout</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default WorkoutForm;

// Handles adding a new workout.
// Passes new workout up to App.tsx via props.
