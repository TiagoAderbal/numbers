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
                <h1>Como podemos te ajudar?</h1>
            </div>
            <div className='formulario'>
                <form className=' container form' onSubmit={sendEmail}>
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
            <div>

            </div>
        </div>
    );
}

export default Formulario;