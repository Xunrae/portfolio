import '../sass/Footer.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Footer(){
    return(
        <footer className="Footer" id="foot">
            <span className="github"><a target="_blank" href="https://github.com/Xunrae?tab=repositories" rel="noreferrer"><GitHubIcon /></a></span>    
            <span className="linkedin"><a target="_blank" href="https://linkedin.com/in/antoine-côté-l-écuyer-48b20418b/" rel="noreferrer"><LinkedInIcon /></a></span>
        </footer>
    );
}