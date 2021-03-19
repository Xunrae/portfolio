import '../sass/Page.scss';
import Entete from './Entete.jsx';
import Banniere from './Banniere';
import ConteneurProjets from './ConteneurProjets';
import Footer from './Footer';
import Lightbox from './Lightbox';
import cImg from '../img/c.webp';
import bubbleImg from '../img/bubble.webp';
import htmlImg from '../img/html.webp';
import jsImg from '../img/js.webp';
import reactImg from '../img/react.webp';
import unityImg from '../img/unity.webp';
import flower1Img from '../img/flower1.webp';
import flower2Img from '../img/flower2.webp';
import triskelImg from '../img/triskel.webp';
import visualImg from '../img/visual.webp';

export default function Page() {

  let lang;
  var textJson;

  

  if(localStorage.getItem('lang')){
    lang = localStorage.getItem('lang');
    textJson = require('../data/lang/'+lang+'.json');
  }
  else{
    lang = 'fr'
    textJson = require('../data/lang/fr.json');
  }

  return (
    <div className="Page">
      <Lightbox text={textJson} lang={lang} />
      <Entete text={textJson} lang={lang} />
      <Banniere text={textJson} lang={lang} />
      <ConteneurProjets text={textJson} lang={lang} />
      <Footer />
      <img className="imgFixed" id="bubbleImg" src={bubbleImg} alt="bubble"/>
      <img className="imgFixed" id="bubbleImg2" src={bubbleImg} alt="bubble"/>
      <img className="imgFixed" id="bubbleImg3" src={bubbleImg} alt="bubble"/>
      <img className="imgFixed" id="cImg" src={cImg} alt="C#"/>
      <img className="imgFixed" id="jsImg" src={jsImg} alt="js"/>
      <img className="imgFixed" id="visualImg" src={visualImg} alt="Visual Studio"/>
      <img className="imgFixed" id="reactImg" src={reactImg} alt="React"/>
      <img className="imgFixed" id="unityImg" src={unityImg} alt="Unity"/>
      <img className="imgFixed" id="htmlImg" src={htmlImg} alt="html"/>
      <img className="imgFixed" id="flower1" src={flower1Img} alt="Flowers1"/>
      <img className="imgFixed" id="flower2" src={flower2Img} alt="Flowers2"/>
      <img className="imgFixed" id="flower22" src={flower2Img} alt="Flowers2"/>
      <img className="imgFixed" id="triskel1" src={triskelImg} alt="Triskel"/>
      <img className="imgFixed" id="triskel2" src={triskelImg} alt="Triskel"/>
      <img className="imgFixed" id="triskel3" src={triskelImg} alt="Triskel"/>
    </div>
  );
}
