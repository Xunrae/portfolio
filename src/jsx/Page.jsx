import '../sass/Page.scss';
import Entete from './Entete.jsx';
import Banniere from './Banniere';
import ConteneurProjets from './ConteneurProjets';
import Footer from './Footer';

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
      <Entete text={textJson} lang={lang} />
      <Banniere text={textJson} lang={lang} />
      <ConteneurProjets text={textJson} lang={lang} />
      <Footer />
    </div>
  );
}
