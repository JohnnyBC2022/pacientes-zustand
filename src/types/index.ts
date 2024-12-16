export type Patient = {
    id: string
    name: string
    contact: string
    email: string
    date: Date
    symptoms: string
}

export type DraftPatient = Omit<Patient, 'id'>