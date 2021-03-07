import '../sass/ListeProjets.scss';
import tabProjetsJeu from '../data/projetsJeu.json';
import tabProjetsWeb from '../data/projetsWeb.json';
import Projet from './Projet.jsx';

export default function ListeProjets(){
    return(
            <div className="ListeProjets">
                <h2>Jeux</h2>
                <ul>
                    {
                        tabProjetsJeu.map((proj) => 
                            <Projet id={proj.id} nom={proj.nomFr} desc={proj.descriptFr} url={proj.url} />
                        )
                    }
                </ul>
                
                <h2>Sites web</h2>
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