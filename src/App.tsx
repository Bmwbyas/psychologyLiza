import React from 'react';

import './App.css';
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/header/Header";
import Main from "./components/main/Main";
import {routes} from "./routes";
import {MyOffice} from "./components/myOffice/MyOffice";
import {Work} from "./components/work/Work";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <div className="flex flex-col flex-wrap font-mono font-medium ">
            <Header />
            <Routes>
                <Route path='/' element={<Main />}/>
                <Route path={routes.main} element={<Main />}/>
                <Route path={routes.aboutMe} element={<MyOffice />}/>
                <Route path={routes.work} element={<Work />}/>
                <Route path={routes.contacts} element={<Contacts />}/>
            </Routes>
            <Footer/>
        </div>
    )

}

export default App;
