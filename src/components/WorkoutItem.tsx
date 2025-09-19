import type { Workout } from "../types/workout";

interface WorkoutItemProps {
  data: Workout;
  handleDelete: (id: string) => void;
}

const WorkoutItem: React.FC<WorkoutItemProps> = ({ data, handleDelete }) => {
  console.log(">>>> Item:", data);

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
    <div className="bg-blue-100 w-150 m-auto mb-10 p-3  bg-white flex flex-col justify-center content-center text-center relative">
      <h2>{data.exercise}</h2>
      <p>
        {data.weight} kg X {data.reps} reps
      </p>
      <p>{formatted}</p>

      <div
        className="bg-cyan-200 absolute w-8 h-8 top-0 right-0 p-2 flex flex-col justify-center content-center text-center cursor-pointer"
        onClick={handleDelete}
      >
        <p data-id={data.id}>x</p>
      </div>
    </div>
  );
};

export default WorkoutItem;

// Displays a single workout (date, exercise, weight, reps).
// Includes delete button.
