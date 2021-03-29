import '../sass/Lightbox.scss';
import CloseIcon from '@material-ui/icons/Close';

export default function Lightbox({text, lang}){

    return(
        <div id="Lightbox" className="LightboxInactive" data-gittext="" data-linktext="" data-linkbuild="" onClick={changeClass}>
            <div className="contenuLightbox">
                <div className="imageComposant">
                    <button onClick={changeClass}><CloseIcon className="closeIcon" /></button>
                    <video id="lightboxVid" controls src="vid/proj0001.mp4" poster="img/proj0001.webp"/>
                    <h3 id="lightboxNomProjet">A</h3>
                </div>

                <div className="descriptLightbox">
                    <p className="descript" id="lightboxDesc"></p>
                    <a className="git" id="lightboxGit" target="_blank" href="#Lightbox">{text.git}</a>
                    <a className="url" id="lightboxUrl" target="_blank" href="#Lightbox">{text.link}</a>
                    <a className="build" id="lightboxBuild" target="_blank" href="#Lightbox">{text.exe}</a>
                </div>
            </div>
        </div>
    );
    
}
/**
 * fonction changeClass : fonction qui change la classe du lightbox pour le fermer
 * param : none
 * return : none
 */
function changeClass(){
    const lightbox = document.getElementById('Lightbox');

    if(lightbox.classList.contains('LightboxActive')){
        lightbox.classList.remove('LightboxActive');
        lightbox.classList.add('LightboxInactive');

        //change les innerHTML pour leurs valeurs par defaut
        document.getElementById('lightboxGit').innerHTML = lightbox.dataset.gittext;
        document.getElementById('lightboxUrl').innerHTML = lightbox.dataset.linktext;
        document.getElementById('lightboxBuild').innerHTML = lightbox.dataset.buildtext;

        //pause la video si elle jou encore
        document.getElementById('lightboxVid').pause();

    }
}