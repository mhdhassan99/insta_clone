import { useState, useContext, useEffect } from 'react';
import { useHistory } from "react-router"
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Login() {

    const history = useHistory();
    const { firebase } = useContext(FirebaseContext)

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
            history.push(ROUTES.DASHBOARD);
        } catch (error) {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        }
    };

    useEffect(() => {
        document.title = 'Login - Instagram'
    }, []);

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpeg" alt="iPhone with Instagram app"/>
            </div>

            <div className="flex flex-col w-2/5">


                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border rounded border-gray-primary">
                    <p className="text-sm">Don't have an account?{` `}
                        <Link to="/signup" className="font-bold text-blue-medium">
                            Sign Up
                        </Link>
                    </p>
                </div>

            </div>

        </div>
    );
};