import React from 'react';
import './App.scss';
import {Header} from "../components/header/Header";
import {InitialView} from "../components/initialScreenView/InitialView";
import user from "../common/images/icons/user.png";
import {User} from "../components/user/User";
import {useAppSelector} from "../hooks/Hooks";
import {selectUserLoginName} from "../selectors/UserSelectors";


function App() {

    const userLogin = useAppSelector(selectUserLoginName)

    return (
        <div className="App">
            <Header/>
            {
                userLogin
                    ? <User userLogin={userLogin}/>
                    : <InitialView
                        image={user}
                        text={'Start with searching a GitHub user'}
                    />
            }
        </div>
    );
}

export default App;

