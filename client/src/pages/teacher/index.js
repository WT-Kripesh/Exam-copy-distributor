import Header from '../../components/Header/header'
import { useLoaderData } from 'react-router-dom'
const Teacher = () =>{
    const data = useLoaderData();
    console.log( data )
    return <>
        <Header />
    </>
}

export default Teacher