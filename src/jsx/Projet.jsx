import '../sass/Projet.scss';

export default function Projet({id, nomFr, nomEn, contribFr, contribEn, descFr, descEn, url, text, lang, git, build}){

    //const targetBlank = (url) => url!=='' ? '_blank' : '';
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

    //const nomc = lang=> (lang ==='fr') ? nomFr : nomEn;

    function lightboxAppear(){
        const lightbox = document.getElementById('Lightbox');
        const img = document.getElementById('lightboxImg');
        const nomLightbox = document.getElementById('lightboxNomProjet');
        const description = document.getElementById('lightboxDesc');
        const urlGit = document.getElementById('lightboxGit');
        const urlProjet = document.getElementById('lightboxUrl');
        const urlBuild = document.getElementById('lightboxBuild');

        const path =`img/${id}.webp`;
        const nomLb = nom;
        const descript = desc;
        
        img.src = path;

        nomLightbox.innerHTML = nomLb;
        description.innerHTML = descript;
        urlGit.href = git;
        urlProjet.href = url;
        urlBuild.href = build;

        lightbox.dataset.gittext = urlGit.innerHTML;
        lightbox.dataset.linktext = urlProjet.innerHTML;
        lightbox.dataset.buildtext = urlBuild.innerHTML;

        if(git===""){
            urlGit.innerHTML = "";
        }

        if(url===""){
            urlProjet.innerHTML = "";
        }

        if(build===""){
            urlBuild.innerHTML = "";
        }

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

