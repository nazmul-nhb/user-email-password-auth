import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;

        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be 6 characters or longer');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your Password Should Contain at least one upper case character!');
            return;
        } else if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
            setRegisterError('Your Password Should Contain at least one special character!');
            return;
        } else if (!accepted) {
            setRegisterError('Please, Accept Our Terms & Conditions')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully!')
            })
            .catch(error => {
                setRegisterError(error.message);
            });
        e.target.reset();
    }

    return (
        <section className="space-y-6 flex flex-col justify-center items-center mt-8">
            <h2 className="text-2xl font-medium">Please, Register</h2>
            <form onSubmit={handleRegister} className="flex flex-col gap-6">
                <input className="input border border-red-950" type="email" name="email" placeholder="Your Email" required />
                <div className="relative">
                    <input className="input w-full border border-red-950" type={showPassword ? "text" : "password"} name="password" placeholder="Your Password" required />
                    <span className="absolute top-1/2 right-2 -translate-y-1/2" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="terms">Accept Our <Link>Terms & Conditions</Link></label>
                </div>
                <input type="submit" value="Register" className="btn btn-primary" />
            </form>
            {
                registerError && <p className="text-red-700">{registerError}</p>
            }
            {
                success && <p className="text-green-700">{success}</p>
            }
            <p className="font-medium">Already have an Account? Please, <Link to={'/login'}>Login Here!</Link></p>
        </section>
    );
};

export default Register;