import ProfilePage from './components/profile/ProfilePage'
import "bootstrap/dist/css/bootstrap.min.css"
// import './App.css'
import './App.css'
import TopNavbar from './components/layout/Navbar'
import { useAppDispatch } from './store'
import { useEffect } from 'react'
import { fetchCurrentUser } from "./store/userSlice"
import Footer from './components/layout/Footer'




function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

  return (
    <>
      <TopNavbar />
      <ProfilePage />
      <Footer />
    </>
  )
}

export default App
