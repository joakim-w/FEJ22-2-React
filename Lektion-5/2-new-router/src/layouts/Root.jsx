import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
        {/* Renderar ut alla children till den här komponenten */}
      </div>
    </>
  )
}

export default Root