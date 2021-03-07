import '../sass/ConteneurProjets.scss';
import ListeProjets from './ListeProjets';

export default function ConteneurProjets(){
    return(
        <div className="ConteneurProjets" id="conteneurProjets">
            <ListeProjets />
        </div>
    );
}