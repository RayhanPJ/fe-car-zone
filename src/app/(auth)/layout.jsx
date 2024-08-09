import Navbar from "@/components/common/Navbar"

const AuthLayout = ({ children }) => {
  return (
   <>
      <Navbar />
      {children}
   </>
  )
}

export default AuthLayout