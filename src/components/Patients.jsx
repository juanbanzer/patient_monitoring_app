import Patient from "./Patient"

function Patients({patients, setPatient, deletePatient}) {

  return (
    <div className="md:w-1/2 lg:w3/5 md:h-screen overflow-y-scroll mt-10 md:mt-0">
      <h2 className="font-black text-2xl text-center">Patients list</h2>
      <p className="mt-10 mb-5 m-3 text-center">{patients.length === 0 ? "Add a patient to start showing" : "Patient list:"}</p>

      {patients.map( (patient)=> {
        return(
          <Patient
            key = {patient.id}
            patient = {patient}
            setPatient = {setPatient}
            deletePatient = {deletePatient}
          />
        )
      })}

    </div>
  )
}

export default Patients