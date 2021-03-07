import '../sass/Projet.scss';

export default function Projet({id, nomFr, nomEn, descFr, descEn, url, lang}){

    //const targetBlank = (url) => url!=='' ? '_blank' : '';
    var nom;
    var desc;

    //choix de langue
    if(lang==='fr'){
        nom = nomFr;
        desc = descFr;
    }
    else{
        nom = nomEn;
        desc = descEn;
    }

    //const nomc = lang=> (lang ==='fr') ? nomFr : nomEn;

    //si il n'y a pas d'url
    var targetBlank;
    var classUrl;

    if(url!==""){
        targetBlank = "_blank";
        classUrl = "";
    }
    else{
        targetBlank = ""
        classUrl = "noPointer";
    }

    return (
        <li className="Projet">
            <a target={targetBlank} href={url}  rel="noreferrer" className={classUrl}>
                <div className={'image ' + classUrl}>
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