import Footer from "./Footer";
import Navbar from "./Navbar2";

export default function Layout({children}){
    return(
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}