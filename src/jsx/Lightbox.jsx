import '../sass/Lightbox.scss';

export default function Lightbox({text, lang}){

    return(
        <div id="Lightbox" className="LightboxInactive" data-gittext="" data-linktext="" data-linkbuild="">
            <button onClick={changeClass}>X</button>
            <div className="imageComposant">
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
    if(document.getElementById('Lightbox').classList.contains('LightboxActive')){
        document.getElementById('Lightbox').classList.remove('LightboxActive');
        document.getElementById('Lightbox').classList.add('LightboxInactive');
        document.getElementById('lightboxGit').innerHTML = document.getElementById('Lightbox').dataset.gittext;
        document.getElementById('lightboxUrl').innerHTML = document.getElementById('Lightbox').dataset.linktext;
        document.getElementById('lightboxBuild').innerHTML = document.getElementById('Lightbox').dataset.buildtext;
    }
}