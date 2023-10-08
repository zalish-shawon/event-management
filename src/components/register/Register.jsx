
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { getAuth, updateProfile } from "firebase/auth";
import app from '../../provider/firebaseConfig';



const Register = () => {
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)
    const [terms, setTerms] = useState(false)
    const {createAccountWithPassword} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    
const handleUser = (e) => {
    const auth = getAuth(app)
    e.preventDefault()
    const name = e.target.name.value 
    const image = e.target.image.value
    const email = e.target.email.value
    const password = e.target.password.value
    const terms = e.target.terms.checked
    setError('')
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/

    if (password.length < 6) {
         setError("Password must be at least 6 characters");
         return
    } else if(!regex.test(password)) {
        setError("Password must contain at least one number, one uppercase letter, and one special character")
        return

    } else if(!terms) {
        setError("You must agree to the terms and conditions")
        return
    }

    createAccountWithPassword(email, password)
    .then(res => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
        navigate(location?.state ? location.state : "/")
        toast.success('Successfully registered!')

    })
    .catch(error => {
        console.error(error.message);
    })

    
}



    return (
        <section class="bg-gray-50 dark:bg-gray-900" style={{backgroundImage: 'url(/public/bg1.png)', backgroundSize: 'cover'}}>
                        <Toaster
                position="top-right"
                reverseOrder={false}
                />
                <div className='p-16'>

                
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create and account
                        </h1>
                        <form onSubmit={handleUser} class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                <input type="text" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your name" required/>
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                                <input type="text" name="image" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="image url" required/>
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                            </div>
                            {
                                error && <p className='text-red-600'>{error}</p>
                            }
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input name='terms' id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required/>
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-blue-500">Create an account</button>
                            <Link to={"/login"}>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                            </p>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Register;