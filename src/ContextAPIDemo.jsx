import { useState, createContext, useContext } from 'react'

const MyContext = createContext()

function MyProvider(props) {
    const [data, setData] = useState('something else')

    return (
        <MyContext.Provider value={{ data, setData }}>
            {props.children}
        </MyContext.Provider>
    )
}

function ChildComponent() {
    const { data } = useContext(MyContext)

    return (
        <>
            <p>Data from context: {data}</p>
        </>
    )
}

//Think of this as the "App" component
function ContextAPIDemo() {
    const data = "hi"
    return (
        <MyProvider>
            <ChildComponent />
        </MyProvider>
    )
}

export default ContextAPIDemo