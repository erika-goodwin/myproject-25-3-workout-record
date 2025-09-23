import type { WorkoutItemProps } from "../types/workoutItemProps";

const WorkoutItem: React.FC<WorkoutItemProps> = ({ data, handleDelete }) => {
  const isoString = data.date;
  const date = new Date(isoString);
  const formatted = date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-background-shadow w-full not-first:mt-4 p-3 rounded-md flex flex-col justify-center content-center relative">
      <p className="text-sm">{formatted}</p>
      <h2 className="w-full mt-1.5">{data.exercise}</h2>
      <p>
        Record: {data.weight} kg X {data.reps} reps
      </p>
      <div
        className="bg-caution absolute w-8 h-8 rounded-md top-[50%] translate-y-[-50%] right-4 p-2 flex flex-col justify-center content-center text-center cursor-pointer"
        onClick={() => handleDelete(data.id)}
      >
        <p data-id={data.id} className="text-background-shadow">
          x
        </p>
      </div>
    </div>
  );
};

export default WorkoutItem;

// Displays a single workout (date, exercise, weight, reps).
// Includes delete button.
