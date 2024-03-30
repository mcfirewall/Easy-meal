import './styles/CheckEmail.scss';
import {Upside} from '../Upside'
import sending from '../../assets/sending-email.svg'

export function CheckEmail(){
    return(
        <>
        <Upside/>
        <div className="layout-form">
            <img src={sending} alt="" className="sending"/>
        <h1>Verificar email</h1>
            <p>
            Foi enviado um link para o seu email,<br/>
            “<span style={{color: "#E73959"}}>antoniocamposgabriel@gmail.com</span>”, acesse e<br/> 
            clique o link para redefinir as tuas credenciais.
            </p>
            <button type="submit" className="btn-form">Entrar no sistema</button>
        </div>
        </>
    )
}