import { usePatientStore } from "../store";
import PatientDetails from "./PatientDetails";

function PatientsList() {
  const patients = usePatientStore((state) => state.patients);

  return (
    <div className="md:w-1/2 lg: 3/5 md: h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-amber-600 font-bold">Pacientes y Citas</span>
          </p>
          {patients.map( patient =>(
            <PatientDetails
              key={patient.id}
              patient={patient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Añade pacientes a la lista mediante el{" "}
            <span className="text-amber-600 font-bold">
              formulario de la izquierda
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default PatientsList;
