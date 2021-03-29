import '../sass/Entete.scss';

export default function Entete({text, lang}) {

    //let allume = (lang)=> lang == 'fr' ? '' : 'lit'

    var etatLangEn;
    var etatLangFr;

    //changer le bouton de langue qui est allumé selon l'état de la langue
    if(lang==='fr'){
        etatLangEn = <li><button id="En" onClick={langEn} >EN</button></li>;
        etatLangFr = <li><button id="Fr" onClick={langFr} className='lit' >FR</button></li>;
    }
    else{
        etatLangEn = <li><button id="En" onClick={langEn} className='lit' >EN</button></li>;
        etatLangFr = <li><button id="Fr" onClick={langFr} >FR</button></li>;}

    return (
        <header className="Entete">
            <ul className="navPrincipale">
                <li><a href="#top"><p>{text.acc}</p></a></li>
                <li><a href="#conteneurProjets"><p>{text.pro}</p></a></li>
                <li><a href="#sites"><p>{text.plu}</p></a></li>
            </ul>
            <ul className="langue">
                {etatLangEn}
                {etatLangFr}
            </ul>
        </header>
    );
}


/**
 * fonctions de changement de langue
 * param : none
 * return : none
 */

 //plante un cookie 'en' et reload la page
function langEn(){
    localStorage.setItem('lang', 'en')
    window.location.reload(false);
}
//plante un cookie 'fr' et reload la page
function langFr(){
    localStorage.setItem('lang', 'fr');
    window.location.reload(false);
}