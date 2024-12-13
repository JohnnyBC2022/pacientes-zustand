import PatientForm from "./components/PatientForm";
import PatientsList from "./components/PatientsList";

function App() {
  return (
    <>
      <div className="container max-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Seguimiento de {""}
          <span className="text-amber-600">Pacientes</span>
        </h1>

        <div className="mt-12 md:flex">
          <PatientForm/>
          <PatientsList/>
        </div>
      </div>
    </>
  );
}

export default App;
