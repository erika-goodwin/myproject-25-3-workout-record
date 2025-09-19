import type { WorkoutFormProps } from "../types/workoutFormProps";
import WorkoutItem from "./WorkoutItem";

const WorkoutList: React.FC<WorkoutFormProps> = ({
  workoutData,
  setWorkoutData,
}) => {
  const handleDelete = (id: string) => {
    setWorkoutData((prevData) =>
      prevData.filter((workout) => workout.id !== id)
    );
  };

  return (
    <div className="bg-green-100 w-full flex flex-col justify-center content-center">
      <h1 className="text-center">WorkoutList</h1>
      {[...workoutData]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((data) => (
          <WorkoutItem data={data} handleDelete={() => handleDelete(data.id)} />
        ))}
    </div>
  );
};

export default WorkoutList;

// Receives workouts array from App.tsx.
// Maps over workouts and renders WorkoutItem.
