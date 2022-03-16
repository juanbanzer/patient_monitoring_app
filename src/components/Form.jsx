import {useState, useEffect} from 'react'
import Error from './Error'

function Form({patients, setPatients, patient, setPatient}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [symptoms, setSymptoms] = useState('')
  

  const[error, setError] = useState(false)


  // EVENT EFFECT TO COMPLETE THE FORM WITH PATIENT TO EDIT 
  useEffect(() => {
    if(Object.keys(patient).length > 0) {
      setName(patient.name)
      setEmail(patient.email)
      setDate(patient.date)
      setTime(patient.time)
      setSymptoms(patient.symptoms)
    }
  }, [patient])


  // GENERATE RANDOM AND UNIQUE ID 
  const generateId = () => {
    const random = Math.random().toString(36).substr(2)
    const date = Date.now().toString(36)

    return random + date
  }

  // FUNCTION TO SUBMIT FORM 
  const handleSubmit = (e) => {
    e.preventDefault()

    // FORM VALIDATION
    if ([name, email, date, symptoms].includes('')) {
      setError(true)
    } else {
        setError(false)

        // PATIENT OBJECT
        const patientObject = {
          name,
          email,
          date,
          time,
          symptoms,
        }

        if (patient.id) {
          // EDIT REGISTER 
          patientObject.id = patient.id // EQUAL ID TO THAT OF THE PATIENT TO BE EDITED
          const updatedPatients = patients.map(patientState => patientState.id === patient.id ? patientObject : patientState) 
          setPatients(updatedPatients)
          setPatient({}) // SET TEMPORAL PATIENT IN DEFAULT
        } else {
          // NEW REGISTER, SET ID ADD PATIENT TO PATIENTS LIST ARRAY
          patientObject.id = generateId();
          setPatients([...patients, patientObject])
        }
        
        // RESTART FORM 
        setName('')
        setEmail('')
        setDate('')
        setTime('')
        setSymptoms('')
    }

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 m-2 md:m-0">
      <h2 className="font-black text-2xl text-center">Form</h2>

      <p className="mt-10 mb-5 text-center">Add patient</p>
      <form className="bg-white shadow-sm rounded-lg py-10 px-10" onSubmit={handleSubmit}>
        {error && ( <Error mensaje="All fields are required"/> )}
        <div className="mb-5">
          <label htmlFor="name" className="block text-gray-700 uppercase font-bold" >Name:</label>
          <input 
            id="name" 
            type="text" 
            placeholder="Patient name" 
            className="border-2 w-full p-3 mt-2 rounded-md" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold" >Email:</label>
          <input 
            id="email" 
            type="email" 
            placeholder="Patient email" 
            className="border-2 w-full p-3 mt-2 rounded-md"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="date" className="block text-gray-700 uppercase font-bold" >Date:</label>
          <input 
            id="date" 
            type="date" 
            className="border-2 w-full p-3 mt-2 rounded-md"
            value={date} 
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="hour" className="block text-gray-700 uppercase font-bold" >Hour:</label>
          <input 
            id="hour" 
            type="time" 
            className="border-2 w-full p-3 mt-2 rounded-md"
            value={time} 
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold" >symptoms:</label>
          <textarea 
            id="symptoms" 
            placeholder="Describe the symptoms" 
            className="border-2 w-full p-3 mt-2 rounded-md"
            value={symptoms} 
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>
        <input type="submit" className="bg-red-700 text-white uppercase font-bold w-full cursor-pointer px-2 py-4 rounded-md text-sm" value={patient.id ? 'Edit patient' : 'Add patient'}/>
      </form>
    </div>
  )
}

export default Form