function Patient({patient, setPatient, deletePatient}) {


  // ALERT TO CONFIRM DELETE PATIENT 
  const handleDelete = () => {
    const response = confirm('Are you sure?')
    if (response) {
      deletePatient(patient.id)
    }
  }

  return (
    <div className="bg-white shadow-sm rounded-lg py-10 px-10 m-4">
          <p className="font-bold mb-3 text-gray-700 uppercase">Name: {""}
            <span className="font-normal normal-case">{patient.name}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
            <span className="font-normal normal-case">{patient.email}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Date: {""}
            <span className="font-normal normal-case">{patient.date}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Time: {""}
            <span className="font-normal normal-case">{patient.time}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">Symptoms: {""}
            <span className="font-normal normal-case">{patient.symptoms}</span>
          </p>
          <div className="flex justify-between mt-5">
            <button type="button" className="py-3 rounded-md px-10 bg-green-600 hover:bg-green-800 text-white uppercase font-bold text-sm"
            onClick={() => setPatient(patient)}
            >Edit</button>
            <button type="button" className="py-3 rounded-md px-10 bg-red-600 hover:bg-red-800 text-white uppercase font-bold text-sm"
            onClick={handleDelete}
            >Delete</button>
          </div>
      </div>
  )
}

export default Patient