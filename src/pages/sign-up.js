import { useState, useContext, useEffect } from 'react';
import { useHistory } from "react-router"
import { Link } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

export default function Login() {

    const history = useHistory();
    const { firebase } = useContext(FirebaseContext)

    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleSignUp = async (e) => {
        e.preventDefault();

        // try {
        //     // await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
        //     // history.push(ROUTES.DASHBOARD);
        // } catch (error) {
        //     // setEmailAddress('');
        //     // setPassword('');
        //     // setError(error.message);
        // }
    };

    useEffect(() => {
        document.title = 'Sign Up - Instagram'
    }, []);

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpeg" alt="iPhone with Instagram app"/>
            </div>

            <div className="flex flex-col w-2/5">

                <div className="flex flex-col items-center bg-white p-4 border rounded border-gray-primary mb-4">
                    <h1 className="flex justify-center w-full">
                        <img src="images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                    </h1>

                    {error && <p className="mb-4 text-xs text-red-primary" >{error}</p>}

                    <form onSubmit={handleSignUp} method="post">
                        
                        <input 
                            aria-label="Enter Your Email"
                            type="text"
                            placeholder="Email Address"
                            className="text-sm text-gray-base w-full mr-3 py-3 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <input 
                            aria-label="Enter Your Password"
                            type="password"
                            placeholder="Password"
                            className="text-sm text-gray-base w-full mr-3 py-3 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <button disabled={isInvalid} type="submit" 
                        className={
                            `bg-blue-medium text-white w-full rounded h-8 font-bold
                            ${isInvalid && 'opacity-50'}`}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>

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