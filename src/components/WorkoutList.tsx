import type { WorkoutListProp } from "../types/workoutListProp";
import WorkoutItem from "./WorkoutItem";

const WorkoutList: React.FC<WorkoutListProp> = ({
  workoutData,
  setWorkoutData,
}) => {
  const handleDelete = (id: string) => {
    setWorkoutData((prevData) =>
      prevData.filter((workout) => workout.id !== id)
    );
  };

  return (
    <div className="w-full max-h-[355px] sm:max-h-[470px] p-3 rounded-b-md overflow-y-scroll flex flex-col justify-start content-center">
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
