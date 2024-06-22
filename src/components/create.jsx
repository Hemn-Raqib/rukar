import { useState } from "react"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const Create = () => {

    const [values, setValues] = useState({
        id:'',
        name: '',
        email: '',
        age: '',
        gen: ''
    });

    const navigate = useNavigate();

    const handlSubmit = (e) => {
        e.preventDefault();
        axios.post(`${import.meta.env.VITE_API_URL}/add_user`, values)
        .then((res) => {
            navigate("/");
        })
        .catch((error) => {
            console.error(`there is an error from create.jsx file of submition ${error}`);
        })
    };


    return (
        <div className="container-fluid py-5 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow">
                            <div className="card-body">
                                <h3 className="card-title text-center mb-4">Add Student</h3>
                                <form onSubmit={handlSubmit}>
                                    {/* <div className="mb-3">
                                        <label htmlFor="id" className="form-label">ID</label>
                                        <input id="id" type="number" className="form-control" name="id" required
                                            onChange={(e) => setValues({...values, id:e.target.value})} />
                                    </div> */}
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input id="name" type="text" className="form-control" name="sname" required
                                            onChange={(e) => setValues({...values, name:e.target.value})} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input id="email" type="email" className="form-control" name="email" required
                                            onChange={(e) => setValues({...values, email:e.target.value})} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="age" className="form-label">Age</label>
                                        <input id="age" type="text" className="form-control" name="age" required
                                            onChange={(e) => setValues({...values, age:e.target.value})} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="gen" className="form-label">Gender</label>
                                        <input id="gen" type="text" className="form-control" name="gen" required
                                            onChange={(e) => setValues({...values, gen:e.target.value})} />
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-primary" type="submit">Save</button>
                                        <Link to="/" className="btn btn-secondary ms-2">Cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create
