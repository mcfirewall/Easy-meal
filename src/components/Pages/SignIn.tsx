import './styles/SignIn.scss';
import cadeado from '../../assets/cadeado.png'
import envelope from '../../assets/envelope-de-papel-branco.png'
import {Upside} from '../Upside'


export function SignIn(){
    return(
        <>
        <Upside/>
        <div className="layout-form">
        <h1>Entrar no Sistema</h1>
        <form action="" >
            <label htmlFor="email">Seu email</label>
            <div className="cont-input">
            <img className="img-input" src={envelope} />
            <input type="email" name="email" placeholder="Informe o seu email" className="inp-1"/>
            </div>
            <label htmlFor="senha">Sua senha</label>
            <div className="cont-input">
            <img className="img-input" src={cadeado}/>
            <input type="pasword" name="senha" placeholder="●●●●●●●●●●●●●●●●●" className="inp-2" />
            </div>
            <div className="checkbox">
            <input type="checkbox" className="check"/>
            Manter logado por 15 dias
            </div>
            <button type="submit" className="btn-form">Entrar no sistema</button>
        </form>
        <p> <span className="span1">Ainda lembra da senha?</span> <span className="span2">Recuperar senha</span></p>
        </div>
        </>
    )
}