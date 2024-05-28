import { Outlet, Navigate } from 'react-router-dom'

const AuthLayout = () => {
  const isAuthenticated = false

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 flex-col items-center justify-center py-10">
            <Outlet />
          </section>

          <img
            src="/public/assets/images/side-img.svg"
            alt="side image"
            className=""
          />
        </>
      )}
    </>
  )
}

export default AuthLayout
