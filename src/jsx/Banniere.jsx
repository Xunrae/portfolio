import '../sass/Banniere.scss';
import banniereFr from '../img/bannerFr.webp';
import banniereEn from '../img/bannerEn.webp';

export default function Banniere({text, lang}){

    var banner;
    //changer la bannière dependamment de la langue
    if(lang ==='fr'){
        banner = banniereFr;
    }
    else{banner = banniereEn;}

    return(
        <div className="Banniere">
            <div className="imageBanniere">
                <img src={banner} alt={text.ban} />
                <h1>Antoine Côté-L'Écuyer</h1>
            </div>
            {/* Div additionel si jamais j'ai envie de mettre une description */}
            {/* <div className="info">
                <p className="description">{text.desc}</p>
                
            </div> */}
        </div>
    );
}