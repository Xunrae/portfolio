import '../sass/ConteneurProjets.scss';
import ListeProjets from './ListeProjets';

export default function ConteneurProjets({text, lang}){
    return(
        <div className="ConteneurProjets" id="conteneurProjets">
            <ListeProjets text={text} lang={lang} />
        </div>
    );
}