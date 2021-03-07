import '../sass/ListeProjets.scss';
import tabProjetsJeu from '../data/projetsJeu.json';
import tabProjetsWeb from '../data/projetsWeb.json';
import Projet from './Projet.jsx';

export default function ListeProjets({text, lang}){

    // let descript = (lang)=> lang == fr ? {proj.descriptFr} : {proj.descriptEn}

    return(
            <div className="ListeProjets">
                <h2>{text.jeu}</h2>
                <ul className="jeux">
                    {
                        tabProjetsJeu.map((proj) => 
                            <Projet id={proj.id} nom={proj.nomFr} desc={proj.descriptFr} url={proj.url} />
                        )
                    }
                </ul>
                
                <h2>{text.sit}</h2>
                <ul className="sites">
                    {
                        tabProjetsWeb.map((prow) => 
                            <Projet id={prow.id} nom={prow.nomFr} desc={prow.descriptFr} url={prow.url} />
                        )
                    }
                </ul>
            </div>
        );
}