import React, {useState} from 'react';
import Projects from "../Projects";
import './Login.css'

const Login = () => {

    const [error, setError] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const database = [
        {
            username: "admin",
            password: "admin"
        }
    ]

    const errors = {
        uname: "Invalid username.Try again",
        pass: "invalid password.Try again"
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let { uname, pass } = document.forms[0];

        const userData = database.find((user) => user.username === uname.value);

        if (userData) {
            if (userData.password !== pass.value) {
                setError({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setError({ name: "uname", message: errors.uname });
        }
    };

    const errorMessage = (name) =>
        name === error.name && (
            <div className="error">{error.message}</div>
        );
    return (
        <div className="app">
            {isSubmitted ? <Projects to/> :
                <section className="py-26 bg-white">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-lg mx-auto mt-8 pt-8">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label className="block mb-2 ml-5 font-extrabold text-left text-[#6B7280]" htmlFor="">Логин</label>
                                    <input
                                        className="inline-block w-full p-4 leading-6 text-lg font-bold placeholder-grey-800 bg-white shadow border-2 border-grey-900 rounded"
                                        type="text"
                                        name="uname"
                                        onChange={(e) => e.target.value}
                                        placeholder="логин"
                                        required
                                    />
                                    {errorMessage('uname')}
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 ml-5 font-extrabold text-left text-[#6B7280]" htmlFor="">Пароль</label>
                                    <input
                                        className="inline-block w-full p-4 leading-6 text-lg font-bold placeholder-grey-800 bg-white shadow border-2 border-grey-900 rounded"
                                        type="password"
                                        name="pass"
                                        onChange={(e) => e.target.value}
                                        placeholder="**********"
                                        required
                                    />
                                    {errorMessage('pass')}
                                </div>
                                <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
                                    <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                                        <label htmlFor="">
                                            <input type="checkbox"/>
                                            <span className="ml-1 font-bold text-[#6B7280]">Запомнить пароль</span>
                                        </label>
                                    </div>
                                </div>
                                <button
                                    className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white
                                        font-extrabold bg-[#D924E0FF] hover:bg-[#D924E0FF] border-3 border-[#D924E0FF] shadow rounded
                                         transition duration-200">Войти
                                </button>
                                <div className="w-full lg:w-auto text-left">
                                    <a className="inline-block font-bold hover:underline text-[#D924E0FF]"
                                       href="#">Забыли пароль?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            }
        </div>
    );
}

export default Login;