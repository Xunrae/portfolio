import '../sass/Banniere.scss';
import banniereWebp from '../img/banniere.webp';

export default function Banniere({text}){
    return(
        <div className="Banniere">
            <div className="imageBanniere">
                <img src={banniereWebp} alt={text.ban} />
            </div>
            <div className="info">
                <h1>Antoine Côté-L'Écuyer</h1>
                <p className="description">{text.desc}</p>
                
            </div>
        </div>
    );
}