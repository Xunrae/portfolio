import '../sass/Projet.scss';

export default function Projet({id, nomFr, nomEn, contribFr, contribEn, descFr, descEn, url, text, lang, git, build}){
    let nom;
    let desc;
    let contrib;

    //choix de langue
    if(lang==='fr'){
        nom = nomFr;
        desc = descFr;
        contrib = contribFr;
    }
    else{
        nom = nomEn;
        desc = descEn;
        contrib = contribEn;
    }

/**
 * fonction lightboxAppear : fonction qui change le contenu du lightbox et son affichage
 * param : none
 * return: none
 */
    function lightboxAppear(){
        //les elements à changer
        const lightbox = document.getElementById('Lightbox');
        const vid = document.getElementById('lightboxVid');
        const nomLightbox = document.getElementById('lightboxNomProjet');
        const description = document.getElementById('lightboxDesc');
        const urlGit = document.getElementById('lightboxGit');
        const urlProjet = document.getElementById('lightboxUrl');
        const urlBuild = document.getElementById('lightboxBuild');

        //chemins pour image/video
        const pathImg =`img/${id}.webp`;
        const pathVid = `vid/${id}.mp4`;

        //nom et description de la cible
        const nomLb = nom;
        const descript = desc;
        
        //image et source de la video
        vid.poster = pathImg;
        vid.src = pathVid;

        //changer innerHtlml et href
        nomLightbox.innerHTML = nomLb;
        description.innerHTML = descript;
        urlGit.href = git;
        urlProjet.href = url;
        urlBuild.href = build;

        //changer les datasets du lightbox
        lightbox.dataset.gittext = urlGit.innerHTML;
        lightbox.dataset.linktext = urlProjet.innerHTML;
        lightbox.dataset.buildtext = urlBuild.innerHTML;

        //si il n'y a pas de lien pour git, une fenetre de projet dans le browser ou un build
        //vider l'affichage du innerHTML
        if(git===""){
            urlGit.innerHTML = "";
        }

        if(url===""){
            urlProjet.innerHTML = "";
        }

        if(build===""){
            urlBuild.innerHTML = "";
        }

        //changer classes du lightbox
        lightbox.classList.remove('LightboxInactive');
        lightbox.classList.add('LightboxActive');
    }

    return (
        <li className="Projet">
            <button onClick={lightboxAppear} >
                <div className='image'>
                    <div className="hoverImg"></div>
                    <img src={`img/${id}.webp`} alt={nom}>
                    </img>
                    <p className="contribution">{text.cont}<br />{contrib}</p>
                </div>
            </button>
            <div className="info">
                <h3>{nom}</h3>
            </div>
        </li>
    );
}

