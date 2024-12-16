import { useForm } from "react-hook-form";
import Error from "./Error";
import type { DraftPatient } from "../types";
import { usePatientStore } from "../store";

export default function PatientForm() {

  const addPatient = usePatientStore(state => state.addPatient)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DraftPatient>();

  const registerPatient = (data: DraftPatient) => {
    addPatient(data)
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-amber-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre del Paciente"
            {...register("name", {
              required: "El nombre del paciente es obligatorio",
            })}
          />
          {errors.name && <Error>{errors.name?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="contact" className="text-sm uppercase font-bold">
            Persona de contacto
          </label>
          <input
            id="contact"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Nombre de la Persona de Contacto"
            {...register("contact", {
              required: "El nombre de la persona de contacto es obligatorio",
            })}
          />
          {errors.contact && (
            <Error>{errors.contact?.message}</Error>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Email de Registro"
            {...register("email", {
              required: "El Email es Obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email No Válido",
              },
            })}
          />

          {errors.email && <Error>{errors.email?.message}</Error>}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="date"
            type="date"
            className="w-full p-3  border border-gray-100"
            {...register("date", {
              required: "La fecha de de alta es obligatoria",
            })}
          />
          {errors.date && (
            <Error>{errors.date?.message}</Error>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="Síntomas del paciente"
            {...register("symptoms", {
              required: "Los síntomas son obligatorios",
            })}
          />
          {errors.symptoms && (
            <Error>{errors.symptoms?.message}</Error>
          )}
          
        </div>

        <input
          type="submit"
          className="bg-amber-600 w-full p-3 text-white uppercase font-bold hover:bg-amber-700 cursor-pointer transition-colors"
          value="Guardar Paciente"
        />
      </form>
    </div>
  );
}
