import NavBar from '../../components/Header/Navbar'
import { useLoaderData } from 'react-router-dom'
const Teacher = () =>{
    const data = useLoaderData();
    console.log( data )
    return <>
        <NavBar />
    </>
}

export default Teacher