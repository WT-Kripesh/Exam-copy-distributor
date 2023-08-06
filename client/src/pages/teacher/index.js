import NavBar from '../../components/Header/Navbar'
import { useLoaderData } from 'react-router-dom'
import PendingPackageTable from '../../components/Home/pendingPackageTable';
const Teacher = () =>{
    const data = useLoaderData();
    console.log( data )
    return <>
        <NavBar />
        <PendingPackageTable initialData = { data } />
    </>
}

export default Teacher