import '../sass/ListeProjets.scss';
import tabProjetsJeu from '../data/projetsJeu.json';
import tabProjetsWeb from '../data/projetsWeb.json';
import Projet from './Projet.jsx';

export default function ListeProjets({text, lang}){

    return(
            <div className="ListeProjets">
                <h2>{text.jeu}</h2>
                <ul className="jeux">
                    {
                        tabProjetsJeu.map((proj)=>
                            <Projet key={proj.id} id={proj.id} nomFr={proj.nomFr} nomEn={proj.nomEn} descFr={proj.descriptFr} descEn={proj.descriptEn} url={proj.url} lang={lang} />
                        )
                    }
                </ul>
                
                <h2>{text.sit}</h2>
                <ul className="sites">
                    {
                        tabProjetsWeb.map((prow) => 
                            <Projet key={prow.id} id={prow.id} nomFr={prow.nomFr} nomEn={prow.nomEn} descFr={prow.descriptFr} descEn={prow.descriptEn} url={prow.url} lang={lang}/>
                        )
                    }
                </ul>
            </div>
        );
}