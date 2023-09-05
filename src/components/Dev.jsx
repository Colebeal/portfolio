export default function Dev({ returnHomeHandler }) { 

  return (
    <div className="font-dm-sans max-w-full transition-opacity animate-rise-up">
      <h1 onClick={returnHomeHandler} className="cursor-pointer">Cole Beal</h1>
      <h2 className="border-b-2 border-b-teal-700">The Developer</h2>
    </div>
  )
}