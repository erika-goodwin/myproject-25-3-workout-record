import type { Workout } from "./workout";

export interface WorkoutItemProps {
  data: Workout;
  handleDelete: (id: string) => void;
}
