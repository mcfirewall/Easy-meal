import envelope from '../../assets/envelope-de-papel-branco.png'
import {Upside} from '../Upside'
import './styles/Forgot.scss';


export function Forgot(){
    return(
        <>
        <Upside/>
        <div className="layout-form">
        <h1>Recuperar senha</h1>
        <p>Informe seu email para recuperar a senha, será enviado um <br/> email com um link para redifinir a senha</p>
        <form action="" >
            <label htmlFor="email">Seu email</label>
            <div className="cont-input">
            <img className="img-input" src={envelope} />
            <input type="email" name="email" placeholder="Informe o seu email" className="inp-1"/>
            </div>
            <button type="submit" className="btn-form">Continuar</button>
        </form>
        </div>
        </>
    )
}