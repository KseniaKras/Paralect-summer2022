import React from 'react';
import './App.scss';
import {Header} from "../components/header/Header";
import {InitialView} from "../components/initialScreenView/InitialView";
import user from "../common/images/icons/userIcon.png";
import {User} from "../components/user/User";
import {useAppSelector} from "../hooks/Hooks";
import {selectIsInitialized} from "../selectors/AppSelectors";


function App() {

    const isInitialized = useAppSelector(selectIsInitialized)

    return (
        <div className="App">
            <Header/>
            {
                isInitialized
                    ? <User/>
                    : <InitialView
                        image={user}
                        text={'Start with searching a GitHub user'}
                    />
            }
        </div>
    );
}

export default App;

