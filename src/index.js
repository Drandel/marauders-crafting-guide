import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/navbar'
import './styles/style.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CData from './data/crafting.json'

const craftingData = JSON.parse(JSON.stringify(CData));
console.log(craftingData)

const App = () => {
    return(
        <>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className='col-md-4'>Item</div>
                    <div className='col-md-4'>Details</div>
                    <div className='col-md-4'>Recpe</div>
                </div>
            </div>
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>); 