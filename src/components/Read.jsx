import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Read = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/students/${id}`)
        .then((res) => { 
        setData(res.data);
        })
        .catch((error) => console.error(`there is an error in the Home.jsx file ${error}`))
    }, [id]);
    if (!data) return <div>Loading...</div>; 
    return (
        <div className='container'>
            <h1 className="text-center mt-5 mb-4">User {id}</h1>
            <div className="d-flex justify-content-end mb-3">
                <Link className='btn btn-primary' to='/'>Back</Link>
            </div>
            <div className="card p-4">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>ID:</strong> {data.id}</li>
                    <li className="list-group-item"><strong>Name:</strong> {data.name}</li>
                    <li className="list-group-item"><strong>Email:</strong> {data.email}</li>
                    <li className="list-group-item"><strong>Age:</strong> {data.age}</li>
                    <li className="list-group-item"><strong>Gender:</strong> {data.gender}</li>
                </ul>
            </div>
        </div>
    )
}

export default Read
