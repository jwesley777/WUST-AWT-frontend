import { useState } from "react";

function LoginForm(props) {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Login:
                <input type="text" value="login" onChange={e => setLogin(e.target.value)}/>
            </label>

            <label>
                Password:
                <input type="text" value="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            
            <input type="submit" value="Log in" />
        </form>
    )
}
export default LoginForm;