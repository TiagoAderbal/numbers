import './contact-form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';

function Formulario() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault();

        if (name === '' || email === '' || assunto === '' || message === '') {
            alert("Preencha todos os campos")
            return;
        }

        alert("ENVIADO")
    }

    return (
        <div className='form-contact'>
            <div className='title-contact'>
                <h1 className='title'>Fale conosco!</h1>
            </div>
            <div className='row content'>
                <div className='formulario col-lg'>
                    <div className='title-contact'>
                        <h1 className='title'>Como podemos te ajudar?</h1>
                    </div>
                    <form className='container form' onSubmit={sendEmail}>
                        <input
                            className='input'
                            type='text'
                            placeholder='Digite seu nome...'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />

                        <input
                            className='input'
                            type='text'
                            placeholder='Digite seu email...'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />

                        <input
                            className='input'
                            type='text'
                            placeholder='Digite o assunto...'
                            onChange={(e) => setAssunto(e.target.value)}
                            value={assunto}
                        />

                        <textarea
                            className='textarea'
                            placeholder='Digite sua mensagem...'
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />

                        <input className='button' type='submit' value="Enviar" />
                    </form>
                </div>
                <div className='col-lg'>
                    <div className='title-contact'>
                        <h1 className='title'>Onde estamos localizados?</h1>
                        <p>Av. Marcos Penteado de Ulhoa Rodrigues, 939 - CJ 802<br/>
                            Tamboré, Barueri, SP<br/>
                            CEP 06460-040</p>
                    </div>
                    <iframe
                        className='map'
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8454.252232986712!2d-46.84180237781353!3d-23.506154335659428!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf01f729d35939%3A0x637f60e2deefe1ce!2sAv.%20Marcos%20Penteado%20de%20Ulhoa%20Rodrigues%2C%20939%20-%20Tambor%C3%A9%2C%20Barueri%20-%20SP%2C%2006460-040!5e0!3m2!1spt-BR!2sbr!4v1702668401659!5m2!1spt-BR!2sbr"
                        title='map'
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
}

export default Formulario;