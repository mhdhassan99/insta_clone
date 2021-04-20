import { useState, useEffect, useContext } from 'react';
import UserContext from '../context/user';

export default function useUser() {

    const [activeUser, setActiveUser] = useState({});
    const { user } = useContext(UserContext);

    useEffect(() => {
        async function getUserObjByUserId() {
            // need a function that we can call (firebase services) that gets the user data based on user id

            setActiveUser(response);

        }
        if (user?.uid) {
            getUserObjByUserId();
        }
    }, [user]);
}