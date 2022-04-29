//Home
export const goToHomePage = (navigate) => {
   navigate("/") 
}

//User
export const goToListTripsPage = (navigate) => {
    navigate("/trips/list")
}

export const goToApplicationFormPage = (navigate) => {
    navigate("/trips/application")
}

export const goBackListTripsPage = (navigate) => {
    navigate(-1) 
}

//ADM
export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToLogout = (navigate) => {
    window.localStorage.clear('token') 
    navigate("/login")
}

export const goToAdminHomePage = (navigate) => {
    navigate("/admin/trips/list")
}

export const goToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}

export const goBackAdminHomePage = (navigate) => {
    navigate(-1)
}

export const goToTripDetailsPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}