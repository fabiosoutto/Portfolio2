import "../styles/components/informationcontainer.sass";

import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>WhatsApp</h3>
          <p>(+55 51)9999-99999</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p><a className="link" href="mailto:fabiosoutto78@gmail.com"> fabiosoutto78@gmail.com</a></p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Location</h3>
          <p>RS / Brazil</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;