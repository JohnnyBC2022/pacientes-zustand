import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type PatientDetailsProps = {
  patient: Patient;
};

function PatientDetails({ patient }: PatientDetailsProps) {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Nombre Paciente" data={patient.name} />
      <PatientDetailItem label="Nombre Persona de Contacto" data={patient.contact} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Fecha Alta" data={patient.date.toString()} />
      <PatientDetailItem label="Síntomas" data={patient.symptoms} />

      <div className="flex justify-between mt-10">
        <button
            type="button"
            className="py-2 px-10 bg bg-amber-600 hover:bg-amber-700 text-white font-bold uppercase rounded-lg"
        >
            Editar
        </button>

        <button
            type="button"
            className="py-2 px-10 bg bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        >
            Eliminar
        </button>
      </div>
    </div>
  );
}

export default PatientDetails;
