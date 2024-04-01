
const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }

    return (
        <section className="space-y-6 flex flex-col justify-center items-center">
            <h2>Please, Register</h2>
            <form onSubmit={handleRegister} className="flex flex-col gap-6">
                <input type="email" name="email" placeholder="Your Email" />
                <input type="password" name="password" placeholder="Your Password" />
                <input type="submit" value="Register" className="btn btn-primary" />
            </form>
        </section>
    );
};

export default Register;