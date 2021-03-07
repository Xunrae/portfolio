import '../sass/Page.scss';
import Entete from './Entete.jsx';
import Banniere from './Banniere';
import ConteneurProjets from './ConteneurProjets';
import Footer from './Footer';

export default function Page() {
  return (
    <div className="Page">
      <Entete />
      <Banniere />
      <ConteneurProjets />
      <Footer />
    </div>
  );
}
