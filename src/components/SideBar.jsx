import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from '../img/fabiosouttodev-002.jpg';

import "../styles/components/sidebar.sass";



const SideBar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Fabio Soutto" />
      <p className="title">Web Developer</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="" className="btn">
        download resume
      </a>
    </aside>
  );
};

export default SideBar;