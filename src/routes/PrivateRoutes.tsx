
import { lazy, useLayoutEffect } from "react"
import { checkPathMatch, paths } from "../routes/helpers"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"

const AccountSettingPage = lazy(()=>import('pages/AccountSettingsPage'))

const PrivateRoutes: React.FC = () => {
    const location = useLocation()

    const isMatch = checkPathMatch(location.pathname,paths)

return (
    <Routes>
        <Route path={paths.accountSettings} element={<AccountSettingPage />} />
        <Route path='*' element={!isMatch ? <Navigate to={paths.home}/>:null} />
    </Routes>
)
}

export default PrivateRoutes

