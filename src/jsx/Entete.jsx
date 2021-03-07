import '../sass/Entete.scss';

export default function Entete({text}) {
    return (
        <header className="Entete">
            <ul className="navPrincipale">
                <li><a href="#top"><p>{text.acc}</p></a></li>
                <li><a href="#conteneurProjets"><p>{text.pro}</p></a></li>
                <li><a href="#foot"><p>{text.plu}</p></a></li>
            </ul>
            <ul className="langue">
                <li>EN</li>
                <li className="lit">FR</li>
            </ul>
        </header>
    );
}