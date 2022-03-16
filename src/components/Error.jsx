function Error({mensaje}) {
  return (
    <div className='bg-red-800 p-3 text-white rounded-md uppercase font-bold mb-4 text-center text-sm'>
        <p>{mensaje}</p>
    </div>
  )
}

export default Error