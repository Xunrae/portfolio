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
                            <Projet key={proj.id}
                                id={proj.id}
                                nomFr={proj.nomFr}
                                nomEn={proj.nomEn}
                                contribFr={proj.contribFr}
                                contribEn={proj.contribEn}
                                descFr={proj.descriptFr}
                                descEn={proj.descriptEn}
                                url={proj.url}
                                text={text}
                                lang={lang}
                                git={proj.git}
                                build={proj.build} 
                            />
                        )
                    }
                </ul>
                
                <h2>{text.sit}</h2>
                <ul className="sites" id="sites">
                    {
                        tabProjetsWeb.map((prow) => 
                            <Projet key={prow.id}
                                id={prow.id}
                                nomFr={prow.nomFr}
                                nomEn={prow.nomEn}
                                contribFr={prow.contribFr}
                                contribEn={prow.contribEn}
                                descFr={prow.descriptFr}
                                descEn={prow.descriptEn}
                                url={prow.url}
                                text={text}
                                lang={lang}
                                git={prow.git}
                                build={prow.build} 
                            />
                        )
                    }
                </ul>
            </div>
        );
}