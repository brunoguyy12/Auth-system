import '../CSS/Loading.css'
import { ToastContainer } from 'react-toastify';

const Loading = () => {

    return(
        <main className=" w-screen h-screen flex justify-center items-center">
            <ToastContainer position='top-right'  />
            <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            </div>
        </main>
    )
}

export default Loading;