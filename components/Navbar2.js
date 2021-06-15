import Styles from "./Navbar2.module.css"


function Navbar2() {
    return (
        <div className={Styles.container}>
            <div className={Styles.nav}>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">Class Demo</a>

            <ul>
                <li><a href="/project/meals">MealDB</a></li>
                <li><a href="#">None</a></li>
                <li><a href="#">None</a></li>
            </ul>        
            </li>
            {/* <li><a href="#">Web Design</a>

            <ul>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Links</a></li>
                <li><a href="#">Tutorials</a>

                <ul>
                    <li><a href="#">HTML/CSS</a></li>
                    <li><a href="#">jQuery</a></li>
                    <li><a href="#">Other</a>

                        <ul>
                            <li><a href="#">Stuff</a></li>
                            <li><a href="#">Things</a></li>
                            <li><a href="#">Other Stuff</a></li>
                        </ul>
                    </li>
                </ul>
                </li>
            </ul>
            </li> */}
            
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>
        </ul>
            </div>

        </div>
    )
}

export default Navbar2
