import React from 'react'
import '../../stylesheet/Contato.css'
import whatsapp from '../../img/logos/whatsapp-white.png'
import telegram from '../../img/logos/telegram-white.png'
//import github from '../../img/logos/github-logo.png'
//import linkedin from '../../img/logos/linkedin-white.png'
import carta from '../../img/logos/carta-white.png'

const Contato = () => {
    return(
        <div className="contato-area">
            <h1 className="title" >Entre em contato</h1>
            <div className="linha">
                <img className="contato-icon" src={whatsapp} alt="whatsapp-icon"/>
                <h4 className="contato-text" >+55 (61) 98330-3025</h4>
            </div>
            <div className="linha">
                <img className="contato-icon" src={telegram} alt="telegram-icon"/>
                <h4 className="contato-text" >@EricoBandeira</h4>
            </div>
            <div className="linha">
                <img className="contato-icon" src={carta} alt="envelope-icon"/>
                <h4 className="contato-text" >ericobandeira@hotmail.com</h4>
            </div>
            <div className="github-linkedin">
                <a href={`https://github.com/ericGOD24`} >
                    <img className="contato-icon icon-hover" src={require('../../img/logos/github-logo.png')} alt="github-logo" ></img>
                </a>
                <a href={`https://gitlab.com/ericGOD`} >
                    <img className="contato-icon icon-hover" src={require('../../img/logos/gitlab-logo.png')} alt="github-logo" ></img>
                </a>
                <a href={`https://www.linkedin.com/in/EricoBandeira/`} >
                    <img className="contato-icon icon-hover" src={require('../../img/logos/linkedin-white.png')} alt="github-logo" ></img>
                </a>
            </div>
        </div>
    )
}

export default Contato;