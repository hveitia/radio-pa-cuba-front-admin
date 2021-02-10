import { useEffect } from 'react';
import { login } from '../../actions/auth';
import { getBillboard } from "../../actions/billboard";
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from "react-redux";

export const LoginScreen = ({ history }) => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const { loading } = useSelector(state => state.ui);
    useEffect(() => {
        if (state.auth.token != null) {
            dispatch(getBillboard());
            history.replace('/');
        }
    }, [state.auth.token])

    const [formValues, handleInputChange] = useForm({
        email: "",
        password: ""
    });

    const { email, password } = formValues;

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <div className="container">
            <form onSubmit={handleClick}>
                <div className="row">
                    <div className="d-flex justify-content-center ">
                        <div className="form-login">
                            <h4>Radio Pa Cuba Admin</h4>
                            <input
                                type="text"
                                name="email"
                                className="form-control input-sm chat-input"
                                placeholder="Email"
                                autoComplete="off"
                                value={email}
                                onChange={handleInputChange}
                            />
                            <br />
                            <input type="text"
                                name="password"
                                className="form-control input-sm chat-input"
                                placeholder="Password"
                                autoComplete="off"
                                value={password}
                                onChange={handleInputChange}
                            />
                            <br />
                            <div className="wrapper">
                                {!loading ? <button type="submit"
                                    className="btn btn-primary btn-md"
                                    onClick={handleClick}>
                                    Entrar
                            </button> :
                            <button className="btn btn-primary" type="button" disabled>
                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    Verificando...
                            </button>}
                            </div>
                            <br />
                            {state.ui.msgError && <div className="alert alert-danger" role="alert">
                                Usuario y/o contraseña incorrectos.
                        </div>}
                        </div>
                    </div>
                </div>
            </form>

        </div>
    )
}
