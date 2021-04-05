import { useState, useContext, useEffect } from 'react';
import { useHistory } from "react-router"
import FirebaseContext from '../context/firebase';

export default function Login() {

    const history = useHistory();
    const { firebase } = useContext(FirebaseContext)

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = () => {};

    useEffect(() => {
        document.title = 'Login - Instagram'
    }, []);

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpeg" alt="iPhone with Instagram app"/>
            </div>

            <div className="flex flex-col w-2/5">

                <h1 className="flex justify-center w-full">
                    <img src="images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
                </h1>

                {error && <p className="mb-4 text-xs text-red-primary" >{error}</p>}

                <form onSubmit={handleLogin} method="post">
                    <input 
                        aria-label="Enter Your Email"
                        type="text"
                        placeholder="Email Address"
                        className="text-sm text-gray-base w-full mr-3 py-3 px-4 h-2 border border-gray-primary rounded mb-2"
                        onChange={({ target }) => console.log(target.value)}
                    />
                    <input 
                        aria-label="Enter Your Password"
                        type="password"
                        placeholder="Password"
                        className="text-sm text-gray-base w-full mr-3 py-3 px-4 h-2 border border-gray-primary rounded mb-2"
                        onChange={({ target }) => console.log(target.value)}
                    />

                </form>

            </div>
        </div>
    )
}