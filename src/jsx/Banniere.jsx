import '../sass/Banniere.scss';
import banniereWebp from '../img/banniere.webp';

export default function Banniere(){
    return(
        <div className="Banniere">
            <div className="imageBanniere">
                <img src={banniereWebp} alt="Bannière Programmeur/Intégrateur"/>
            </div>
            <div className="info">
                <h1>Antoine Côté-L'Écuyer</h1>
                <p className="description">ma description.</p>
                
            </div>
        </div>
    );
}