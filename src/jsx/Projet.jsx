import '../sass/Projet.scss';

export default function Projet({id, nom, desc, url}){

    const targetBlank = (url) => url!=='' ? '_blank' : '';

    return (
        <li className="Projet">
            <a target="_blank" href={url}>
                <div className="image">
                    <img src={'../img/' + id + '.webp'} alt={nom}>
                    </img>
                    <p className="description">{desc}</p>
                </div>
            </a>
            <div className="info">
                <h3>{nom}</h3>
            </div>
        </li>
    );
}