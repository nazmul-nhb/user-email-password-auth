import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {

    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setLoginError('');
        setSuccess('');

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Logged in Successfully!')
            })
            .catch(error => {
                setLoginError(error.message);
            });
        e.target.reset();
    }

    const handleForgotPassword = () => {
        setLoginError('');
        const email = emailRef.current.value;
        if (!email) {
            setLoginError('Please, Provide an Email');
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => setSuccess('Password Reset Email Sent Successfully!'))
            .catch(error => setLoginError(error.message))
    }

    return (
        <section className="space-y-6 flex flex-col justify-center items-center mt-8">
            <h2 className="text-2xl font-medium">Please, Login</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-6">
                <input className="input border border-red-950" type="email" name="email" ref={emailRef} placeholder="Your Email" required />
                <div className="relative">
                    <input className="input w-full border border-red-950" type={showPassword ? "text" : "password"} name="password" placeholder="Your Password" required />
                    <span className="absolute top-1/2 right-2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
                <a onClick={handleForgotPassword} href="#">Forgot Password?</a>
                <input type="submit" value="Login" className="btn btn-primary" />
            </form>
            {
                loginError && <p className="text-red-700">{loginError}</p>
            }
            {
                success && <p className="text-green-700">{success}</p>
            }
            <p className="font-medium">New to this site? Please, <Link to={'/register'}>Register Here!</Link></p>
        </section>
    );
};

export default Login;