import '../sass/Lightbox.scss';

export default function Lightbox({text, lang}){

    return(
        <div id="Lightbox" className="LightboxInactive" data-gittext="" data-linktext="" data-linkbuild="">
            <div className="imageComposant">
                <button onClick={changeClass}>X</button>
                <img id="lightboxImg" src="img/proj0001.webp" alt="afasf"/>
                <h3 id="lightboxNomProjet">A</h3>
            </div>

            <div className="descriptLightbox">
                <p className="descript" id="lightboxDesc"></p>
                <a className="git" id="lightboxGit" target="_blank" href="#Lightbox">{text.git}</a>
                <a className="url" id="lightboxUrl" target="_blank" href="#Lightbox">{text.link}</a>
                <a className="build" id="lightboxBuild" target="_blank" href="#Lightbox">{text.exe}</a>
            </div>
        </div>
    );
}

function changeClass(){
    const lightbox = document.getElementById('Lightbox');
    if(lightbox.classList.contains('LightboxActive')){
        lightbox.classList.remove('LightboxActive');
        lightbox.classList.add('LightboxInactive');
        document.getElementById('lightboxGit').innerHTML = lightbox.dataset.gittext;
        document.getElementById('lightboxUrl').innerHTML = lightbox.dataset.linktext;
        document.getElementById('lightboxBuild').innerHTML = lightbox.dataset.buildtext;
    }
}