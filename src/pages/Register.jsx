import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.config";
import { useState } from "react";

const Register = () => {

    const [showError, setShowError] = useState('')

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <section className="space-y-6 flex flex-col justify-center items-center mt-8">
            <h2 className="text-2xl font-medium">Please, Register</h2>
            <form onSubmit={handleRegister} className="flex flex-col gap-6">
                <input type="email" name="email" placeholder="Your Email" />
                <input type="password" name="password" placeholder="Your Password" />
                <input type="submit" value="Register" className="btn btn-primary" />
            </form>
        </section>
    );
};

export default Register;