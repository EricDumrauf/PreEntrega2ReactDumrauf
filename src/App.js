import ProfileCard from "./components/ProfileCard";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "bulma/css/bulma.css";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Error from "./components/Error";
import "./App.css"

function App(){
    return(
        <div>  
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                    <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
                    <Route path="*" element={<Error/>} /> 
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;