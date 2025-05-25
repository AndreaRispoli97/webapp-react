import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Loader from "../components/Loader"
import { useContext } from "react"
import GlobalContext from "../contexts/globalContext"


const DefaultLayout = () => {

    const { isLoading } = useContext(GlobalContext)

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            {isLoading && <Loader />}
            <footer>sono il footer</footer>

        </>
    )
}

export default DefaultLayout