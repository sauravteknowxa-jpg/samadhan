import { Route, Routes } from "react-router-dom";
import Fiverr from "./component/fiverr";
import Home from "./component/Home";
import About from "./component/About";
import Blog from "./component/Blog";
import Event from "./component/Event";
import Service from "./component/Service";
import Stake from "./component/Stake";
import Contact from "./component/Contact";


function App(){
    return (
        <>
            <Routes>
                <Route path="/" element={<Fiverr />}>
                    <Route index element={<Home />}/>
                    < Route path="about" element={<About />}/>
                    < Route path="blog" element={<Blog />}/>
                    < Route path="event" element={<Event />}/>
                    < Route path="service" element={<Service />}/>
                    < Route path="stake" element={<Stake />}/>
                    < Route path="contact" element={<Contact />}/>
                    < Route path="about" element={<About />}/>
                </Route>
            </Routes>
            
        </>
    )
}

export default App;