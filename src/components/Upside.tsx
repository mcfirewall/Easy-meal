import EasyMealLogo from '../assets/Logo.svg';
import './Upside.scss'

export function Upside(){
    return(
    <div className="upside">
            <div className="cont-upside">
            <img src={EasyMealLogo} className="logo" alt="Logo" />
            <strong><p className="Easy" style={{marginLeft: "12px",fontSize: "20px"}}>Easy Meal</p></strong>
            </div>
        </div>
    )
}