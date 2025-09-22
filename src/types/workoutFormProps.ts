import type { Workout } from "../types/workout";

export interface WorkoutFormProps {
  setWorkoutData: React.Dispatch<React.SetStateAction<Workout[]>>;
}
