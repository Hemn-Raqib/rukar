import { Outlet } from 'react-router-dom'






// With Outlet:
// <Navbar />
// <Outlet>
//   <-- HomePage JobsPage AddJobPage JobPage EditJobPage NotFound , and other pages (gets inserted here based on the route) that has been routed inside the MainLayout-->
// </Outlet>
// <ToastContainer />


// Without Outlet:
// <Navbar />
// <-- No place for HomePage or other pages to be inserted -->
// <ToastContainer />

const MainLayout = () => {
  return (
    <>    
    <Outlet />
    </>
  )
}

export default MainLayout
