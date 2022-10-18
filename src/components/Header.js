import { useState } from "react"

function Header() {

    console.log("Header component has been executed")
    

    // const [statefulVariable, setStatefulVariable] = useState(initialValue);
    // const [pizza, setPizza] = useState("margaritta");
    // const [pizzasArr, setPizzasArr] = useState(["margaritta", "carbonara", "funghi"]);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [counter, setCounter] = useState(0);
    

    // let classString = "";
    // if(counter>=10){
    //     classString = "highlighted";
    // }

    //let classString = condition ? expresssionIfTrue : expresssionIfFalse;
    let classString = counter>=10 ? "highlighted" : ""; //with a ternary operator


    const inlineStyle = {
        color: "purple",
        marginBottom: "2rem"
    }


    const increaseCounter = () => {
        console.log("increasing counter....");
        //counter++; //NEVER UPDATE STATE DIRECTLY (use the updater function)
        //setCounter(counter + 1); //If the new value depends on the previous value, we should use a "Functional Update"

        setCounter((prevCounter) => {
            const newValue = prevCounter + 1;
            return newValue;
        });
    }

    const decreaseCounter = () => {
        if(counter>0){
            setCounter( (prevCounter) => {
                return prevCounter-1;
            });
        }
    }

    return (
        <header style={inlineStyle} className={classString}>
            <h1>this is the header</h1>
            <h2>Number of times that the user has clicked: {counter}</h2>

            <button onClick={decreaseCounter}>Decrease</button>
            <button onClick={increaseCounter}>Increase</button>

            {/* <button onClick={() => {doSomething(20)}} >Increase counter</button> */}
            

        </header>
    );
}

export default Header;