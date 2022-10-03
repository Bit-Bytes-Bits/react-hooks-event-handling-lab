// Code Keypad Component Here

function Keypad (){
    function handleOnchange(e){
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" onChange={handleOnchange} />
        </div>
    )
}

export default Keypad;