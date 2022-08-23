import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { HistoryPage } from "../pages/HistoryPage"

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='/history' element={<HistoryPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router 