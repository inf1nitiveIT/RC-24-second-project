import Header from '../../components/header/header';
import ContactSection from '../../components/contact-section/contact-section';
import { Helmet } from 'react-helmet-async';

function ContactPage () {
  return(
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Header />
      <ContactSection />
    </>
  );
}

export default ContactPage;
