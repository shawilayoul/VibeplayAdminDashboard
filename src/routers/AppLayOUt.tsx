import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"
import Header from "../components/Header"
import Footer from "../components/Footer"

const AppLayOUt = () => {
    return (
        <div className="max-w-full">
            <div className="b fixed w-full">
                <Header />
            </div>
            <div className="flex justify-betwee w-full">
                <div className="bg-blue-600 mt-16 z-5 h-screen fixed text-white">
                    <SideBar />
                </div>
                <div className="p-2 w-[100%]  h-screen  ml-[18%] mt-[60px]">
                    <Outlet />
                </div>
            </div>
            <div className=""> <Footer /></div>
        </div>
    )
}

export default AppLayOUt