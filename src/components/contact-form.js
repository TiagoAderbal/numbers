import './contact-form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

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

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send('service_7n8jcip', 'template_g29y3tn', templateParams, 'kbGxGKS2VKNde25Q4')
            .then((response) => {
                console.log("email enviado", response.status, response.text)
                setName('')
                setEmail('')
                setAssunto('')
                setMessage('')
            }, (err) => {
                console.log("erro: ", err)
            })

    }

    return (
        <div className='form-contact'>
            <div className='title-contact'>
                <h1 className='title'>Fale conosco!</h1>
            </div>
            <div className='content'>
                <div className='row formulario'>
                    {/* <div className='title-contact'>
                        <h1 className='title'>Como podemos te ajudar?</h1>
                    </div> */}
                    <div className='col-sm'>
                        <img className='img-form' src='./assets/imgs/banner_form.png' alt=''></img>
                    </div>
                    <form className='col-lg container form' onSubmit={sendEmail}>
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
            </div>
        </div>
    );
}

export default Formulario;