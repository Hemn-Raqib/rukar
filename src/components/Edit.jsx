import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from 'react-router-dom';


const Edit = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    age: '',
    gender: ''
});   
 const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:2000/students/${id}`)
        .then((res) => { 
        setData(res.data);
        })
        .catch((error) => console.error(`there is an error in the Home.jsx file ${error}`))
    }, [id]);

    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post(`http://localhost:2000/edit_user/${id}`, data)
      .then((res) => {
          navigate("/");
      })
      .catch((error) => {
          console.error(`there is an error from create.jsx file of submition ${error}`);
      })
  };
    if (!data) return <div>Loading...</div>; 
    return (
      <div className="container-fluid py-5 bg-light">
          <div className="container">
              <div className="row justify-content-center">
                  <div className="col-md-6">
                      <div className="card shadow">
                          <div className="card-body">
                              <h3 className="card-title text-center mb-4">User {id}</h3>
                              <div className="d-flex justify-content-end">
    <Link className='btn btn-primary' to='/'>Back</Link>
</div>
                              <form onSubmit={handleSubmit}>
                                  <div className="form-group my-3">
                                      <label htmlFor="name" className="form-label">Name</label>
                                      <input value={data.name} id="name" type="text" className="form-control" name="sname" required
                                          onChange={(e) => setData({...data, name:e.target.value})} />
                                  </div>
                                  <div className="mb-3">
                                      <label htmlFor="email" className="form-label">Email</label>
                                      <input value={data.email} id="email" type="email" className="form-control" name="email" required
                                          onChange={(e) => setData({...data, email:e.target.value})} />
                                  </div>
                                  <div className="mb-3">
                                      <label htmlFor="age" className="form-label">Age</label>
                                      <input value={data.age} id="age" type="text" className="form-control" name="age" required
                                          onChange={(e) => setData({...data, age:e.target.value})} />
                                  </div>
                                  <div className="mb-3">
                                      <label htmlFor="gen" className="form-label">Gender</label>
                                      <input value={data.gender} id="gen" type="text" className="form-control" name="gen" required
                                          onChange={(e) => setData({...data, gen:e.target.value})} />
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

export default Edit


{/*
<form onSubmit={handlSubmit}>
    
        <input  id="name" type="text" name="sname"  required
       onChange={(e) => setData({...data, name:e.target.value})} />
    </div>
    <div className='form-group my-3'>
        <label htmlFor="email">Email</label>
        <input  id="email" type="email" name="email" required
        onChange={(e) => setData({...data, email:e.target.value})} />
    </div>
    <div className='form-group my-3'>
        <label htmlFor="age">Age</label>
        <input  id="age" type="text" name="age" required
        onChange={(e) => setData({...data, age:e.target.value})} />
    </div>
    <div className='form-group my-3'>
        <label htmlFor="gen">Gender</label>
        <input  id="gen" type="text" name="gen" required
        onChange={(e) => setData({...data, gen:e.target.value})} />
    </div>
    <button className='btn btn-success' type="submit">Save</button>
</form> */}