import WorkoutItem from "./WorkoutItem";

const WorkoutList = () => {
  return (
    <div className="bg-green-100 w-full flex flex-col justify-center content-center">
      <h1>WorkoutList</h1>
      <WorkoutItem />
    </div>
  );
};

export default WorkoutList;

// Receives workouts array from App.tsx.
// Maps over workouts and renders WorkoutItem.
