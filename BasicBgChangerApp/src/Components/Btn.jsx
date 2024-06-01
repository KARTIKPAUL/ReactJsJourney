
function Btn(){   
    
    const setRedColor = () =>{
        document.body.style.backgroundColor = 'red';
    }

    const setGreenColor = () =>{
        document.body.style.backgroundColor = 'green';
    }

    const setYellowColor = () =>{
        document.body.style.backgroundColor = 'yellow';
    }

    const setBlueColor = () =>{
        document.body.style.backgroundColor = 'blue';
    }

    const setPurpleColor = () =>{
        document.body.style.backgroundColor = 'purple';
    }

    const setWhiteColor = () =>{
        document.body.style.backgroundColor = 'white';
    }


    return(
        <>
           <div>
            <div className="flex gap-5 items-center justify-center mt-5">
                <button onClick={setRedColor} className="border rounded-full bg-red-500 px-4 py-1 text-white font-sm">Red</button>
                <button onClick={setGreenColor} className="border rounded-full bg-green-500 px-4 py-1 text-white font-sm">Green</button>
                <button onClick={setYellowColor} className="border rounded-full bg-yellow-500 px-4 py-1 text-white font-sm">Yellow</button>
                <button onClick={setBlueColor} className="border rounded-full bg-blue-500 px-4 py-1 text-white font-sm">Blue</button>
                <button onClick={setPurpleColor} className="border rounded-full bg-purple-500 px-4 py-1 text-white font-sm">Purple</button>
                <button onClick={setWhiteColor} className="border rounded-full bg-white px-4 py-1 text-black font-sm">White</button>
            </div>
           </div>
        </>
    )
}

export default Btn;