import type { Workout } from "../types/workout";

export interface WorkoutFormProps {
  workoutData: Workout[];
  setWorkoutData: React.Dispatch<React.SetStateAction<Workout[]>>;
}
