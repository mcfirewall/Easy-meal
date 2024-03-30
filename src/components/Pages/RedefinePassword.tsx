import './styles/RedefinePassword.scss';
import cadeado from '../../assets/cadeado.png'
import {Upside} from '../Upside'


export function RedefinePassword(){
    return(
        <>
        <Upside/>
        <div className="layout-form">
        <h1>Redefinir a senha</h1>
        <p>Crie uma nova senha para sua conta</p>
        <form action="" >
        <label htmlFor="senha">Nova senha</label>
            <div className="cont-input">
            <img className="img-input" src={cadeado}/>
            <input type="pasword" name="senha" placeholder="●●●●●●●●●●●●●●●●●" className="inp-2" />
            </div>
             <label htmlFor="senha">Confirmar senha</label>
            <div className="cont-input">
            <img className="img-input" src={cadeado}/>
            <input type="pasword" name="senha" placeholder="●●●●●●●●●●●●●●●●●" className="inp-2" />
            </div>
            <button type="submit" className="btn-form">Redefinir senha</button>
        </form>
        </div>
        </>
    )
}