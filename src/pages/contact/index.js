import Formulario from "../../components/contact-form";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

function Contact() {
    return (
        <div className="App">
            <Navbar></Navbar>
            <Formulario></Formulario>
            <Footer></Footer>
        </div>
    );
}

export default Contact;