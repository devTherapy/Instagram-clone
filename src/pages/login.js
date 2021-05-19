import {useEffect, useState, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import FireBaseContext from '../contexts/firebase';
export default function Login(){
    const history = useHistory();
    const {firebase} = useContext(FireBaseContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInValid = password === "" || email === "";

    const handleLogin = () => {}

    useEffect(() => {
        document.title = "Login - Instagram"
    }, [])
    return(
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
        <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app"/>
        </div>
        <div className="fles flex-col w-2/5">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
        <h1 className="flex justify-center w-full">
            <img src="/images/logo.png" alt="Instagram" className="mt-2 w-6/12 mb-4" />
          </h1>

          {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

          <form onSubmit={handleLogin} method="POST">
          <input
              aria-label="Enter your email address"
              type="text"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange = {({target}) => {setEmail(target.value)}}
            />
            <input
            aria-label = "Enter your password"
            type ="text"
            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
            placeholder= "Password"
            onChange = {({target}) => {setPassword(target.value)}}
            />
            <button 
            disabled = {isInValid}
            type= "submit"
            className={`bg-blue-500 text-white w-full rounded h-8 font-bold
            ${isInValid && 'opacity-50'}`}
            >
              Login  
            </button>
          </form>
        </div>
         </div>
        </div>
    )  
}