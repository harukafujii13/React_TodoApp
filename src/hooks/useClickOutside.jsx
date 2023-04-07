import { useEffect } from 'react'

export const useClickOutside = (ref, currentState, updater) => { 

    //ref: A ref object that represents the DOM element to track for clicks outside.
    //currentState: The current state of a boolean variable that determines 
    //              whether the component associated with the hook should be in an active or inactive state.
    //updater: A callback function to be called when a click outside the tracked DOM element is detected.

    useEffect(() => {
        const handler = (e) => {
            if(currentState && ref.current && !ref?.current.contains(e.target)){
                updater()
            }
        }

        //The handler function checks if currentState is truthy (i.e., true), 
        //if ref.current is defined and not null, and if the target of the mousedown event (e.target) 
        //is not contained within the ref.current element using the contains method. 
        //If these conditions are met, it calls the updater callback function

        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler) //cleanup function
        }
    }, [ref, currentState, updater])

}

//memo1
//The useClickOutside custom hook in the given code is designed to handle clicks outside a specified DOM element. 
//It uses the useEffect hook from React to set up an event listener for mousedown events on the document, 
//and then removes the event listener when the component unmounts or when the dependencies of the effect change.
//The useClickOutside custom hook in the given code is designed to handle clicks outside a specified DOM element. 
//It uses the useEffect hook from React to set up an event listener for mousedown events on the document, and then removes the event listener when the component unmounts or when the dependencies of the effect change.