import {useState, useEffect} from 'react'
import Form from "./components/Form"
import Header from "./components/Header"
import Patients from "./components/Patients"

function App() {

  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})


  // SAVE PATIENTS IN LOCALSTORAGE 
  useEffect(() => {
    const getLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? []
      setPatients(patientsLS)
    }
    getLS()
  }, [])

  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])


  // FUNCTION TO DELETE PATIENT 
  const deletePatient = (id) => {
    const updatedPatients = patients.filter(patient => patient.id !== id)
    setPatients(updatedPatients)
  }


  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-20 md:flex mx-auto w-full md:flex md:justify-around">
        <Form
          patients = {patients}
          setPatients = {setPatients}
          patient = {patient}
          setPatient = {setPatient}
        />
        <Patients
          patients = {patients}
          setPatient = {setPatient}
          deletePatient = {deletePatient}
        />
      </div>
    </div>
  )
}

export default App
