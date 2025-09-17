import "./App.css";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App w-full">
      <WorkoutForm />
      <WorkoutList />
    </div>
  );
}

export default App;

// Holds state of all workouts.
// Loads/saves to LocalStorage.
// Renders WorkoutForm + WorkoutList.
