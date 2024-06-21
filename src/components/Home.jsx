import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import '../App.css'

const Home = () => {
    const [data, setData] = useState([]);

    const [deleted, setDeleted] = useState(true);

    useEffect(() => {
        if(deleted){
            setDeleted(false)
        }
        axios.get(`${import.meta.env.VITE_API_URL}/students`)
        .then((res) => { 
        setData(res.data.result);
        })
        .catch((error) => console.error(`there is an error in the Home.jsx file ${error}`))
    }, [deleted]);
    const handleDelete = (id) => {
        const userConfirmed = confirm("Are You Sure You Want To Delete This User?");

        if (userConfirmed) {
            axios.delete(`${import.meta.env.VITE_API_URL}/delete_user/${id}`)
            .then((res) => {
                setDeleted(true);
            })
            .catch((error) => console.error(`there is an error of deleting user from Home.jsx file inside the client folder ${error}`))
        } else {
            return;
        }   
    };

  return (
    <div className='container-fluid bg-custom  vh-100 vw-200'>
            <h3 className='text-center mt-5'>Students</h3>
            <div className="d-flex justify-content-end mb-4">
                <Link className='btn btn-primary' to='/create'>Add New Student</Link>
            </div>
        <table className='table table-striped table-custom text-center' >
            <thead className="bg-white">
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Age</td>
                    <td>Gender</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {
                   data.map((user, index) => (
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>{user.gender}</td>
                        <td>
                            <Link className='btn btn-sm btn-outline-primary me-2' to={`/read/${user.id}`}>Read</Link>
                            <Link className='btn btn-sm btn-outline-warning me-2' to={`/edit/${user.id}`}>Edit</Link>
                            <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-outline-danger'>Delete</button>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
  )
}

export default Home
