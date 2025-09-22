import type { Workout } from "./workout";

export interface WorkoutListProp {
  workoutData: Workout[];
  setWorkoutData: React.Dispatch<React.SetStateAction<Workout[]>>;
}
