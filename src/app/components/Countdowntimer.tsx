import React, {useState , useEffect} from "react"
const CountdownTimer: React.FC = () => {
  const [time , setTime]  = useState(0);
  const [isRunning, setIsRunning] = useState (false);
  const [remainingTime, setRemainingTime]= useState(0);




  useEffect (()=> {
    let timer: NodeJS.Timeout;
    if (isRunning && remainingTime  >  0) {
        timer = setInterval(() => {
            setRemainingTime ((prev) => prev - 1 )
        },1000)
    }
    else if (remainingTime===0) {
        setIsRunning (false)
    }
    return () =>   clearInterval (timer);


  },[isRunning, remainingTime])

    const handleStart = () =>{
        if(time > 0) {
            setRemainingTime(time)
            setIsRunning(true)
        }
    
    }  
    const handlePause = () =>{
        setIsRunning (false)

    }
    const handleReset =() => {
        setIsRunning(false)
        setRemainingTime (0)
        setTime(0)

    }
    return (
        <div className="flex flex-col min-h-screen
        items-center justify-center bg-gradient-to-br
        from-black to-grey">
    <img src="../images/logo.png" alt="" 
    className="absolute top-4 right-4 h-auto w-40" />
    <h1 className="text-4xl font-extrabold uppercase mb-6">
        Countdown timer</h1>
    <input
     type="number"
     className="border-2 border-black-400 p-3
     mb-6 text-sky-400 text-xl rounded"
     placeholder="Enter time in seconds" 
     value={time > 0 ? time:""}
     onChange={(e)=> setTime(Number(e.target.value))}
     />


     <div className="text-3xl font-semibold uppercase mb-6" >
        {remainingTime} Seconds remaining
        
     </div>
    <div>
        <button
        onClick= {handleStart}
        className="flex spacing-x-6 text-white px-8 py-4 rounded-lg font-normal
        bg-gradient-to-r from-blue-500 to-teal-500 
        hover:from-blue-600 hove:to-teal-600
        ">
        Start
             
        </button>

        <button
        onClick= {handlePause}
        className="flex spacing-x-6 text-white px-8 py-4 rounded-lg font-normal
        bg-gradient-to-r from-yellow-500 to-orange-500 
        hover:from-yellow-600 hove:to-orange-600
        ">
        Pause
             
        </button>

     <button
        onClick= {handleStart}
        className="flex spacing-x-6 text-white px-8 py-4 rounded-lg font-normal
        bg-gradient-to-r from-blue-500 to-teal-500 
        hover:from-blue-600 hove:to-teal-600
        ">
            Start
             
        </button>







        </div>     









        </div>
    )

}
export default CountdownTimer;