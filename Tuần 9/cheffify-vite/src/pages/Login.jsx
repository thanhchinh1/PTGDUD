import Header from '../components/Header';import LoginModal from '../components/LoginModal';import { img } from '../data/data';
export default function Login(){return <><Header/><div className="page-width screen900 bg-preview" style={{backgroundImage:`url(${img.hero})`}}></div><LoginModal/></>}
