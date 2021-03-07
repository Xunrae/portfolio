import '../sass/Entete.scss';

export default function Entete(props) {
    return (
        <header className="Entete">
            <ul className="navPrincipale">
                <li><a href="#top"><p>Accueil</p></a></li>
                <li><a href="#conteneurProjets"><p>Projets</p></a></li>
                <li><a href="#foot"><p>Plus</p></a></li>
            </ul>
            <ul className="langue">
                <li>EN</li>
                <li>FR</li>
            </ul>
        </header>
    );
}