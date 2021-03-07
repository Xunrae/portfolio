import '../sass/Page.scss';
import Entete from './Entete.jsx';
import Banniere from './Banniere';
import ConteneurProjets from './ConteneurProjets';
import Footer from './Footer';

export default function Page() {

  const textJson = require('../data/lang/fr.json');
  let lang = "en";

  return (
    <div className="Page" data-lang="fr">
      <Entete text={textJson} />
      <Banniere text={textJson} />
      <ConteneurProjets text={textJson} lang={lang} />
      <Footer />
    </div>
  );
}
