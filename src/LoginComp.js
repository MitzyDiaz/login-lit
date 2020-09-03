import { html, css, LitElement } from 'lit-element';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';


export class LoginComp extends LitElement {

    static get styles() {
        return css `
      :host {
        display: block;
        padding: 25px;
        color: var(--login-comp-text-color, #000);
      }

      #cont{
        margin: 0px auto;
        display: flex;
      }


      paper-card{
        display: flex;
        margin: 0 auto;
        margin-top: 10%;
        border: 4px solid transparent;
        border-image: linear-gradient(150deg, #f10295, #8e0aaf);
        border-image-slice:1;
      }

      #titulo{
        text-align: center;
      }
      paper-button.custom {
      --paper-button-ink-color: var(--paper-pink-a200);
      --paper-button-flat-keyboard-focus: {
        background-color: pink !important;
        color: white !important;
      };
      --paper-button-raised-keyboard-focus: {
        background-color: red !important;
        color: white !important;
      };
    }
    paper-button.custom:hover {
      background-color: pink;
      color: white;
    }
    paper-button.pink {
      color: pink;

    }

    .image{
      width: 200px;
      height:200px;
    }


    `;
    }

    static get properties() {
        return {
            title: {
                type: String
            },
            subtitle: {
                type: String
            }
        };
    }

    constructor() {
        super();
        this.title = 'LOGIN';
        this.subtitle = "COCKTAIL LIST"
    }

    render() {

        return html `
    <div id="cont">
      <paper-card>

      <div style="background: #ccc;">
        <img class="image" src="img/juice.svg" alt="">
        <h2 id="titulo">${this.subtitle}</h2>
      </div>
      
      <div>
        <div class="card-content">
        <h2 id="titulo">${this.title}</h2>
          <paper-input id="inputmail" class="custom-input" label="Email">
            <iron-icon icon="mail" slot="prefix"></iron-icon>
          </paper-input>
          <paper-input id="inputpas" class="custom-input" label="Password" type="password">
            <iron-icon icon="lock" slot="prefix"></iron-icon>
          </paper-input>
        </div>
        <div class="card-actions">
          <paper-button raised class="custom pink" @click="${this._sendLogin}">link</paper-button>
        </div>
      </div>
          
      </paper-card>
      </div>
    `;
    }

    _sendLogin() {
        const email = this.shadowRoot.getElementById('inputmail').value;
        console.log('email', email);
        const password = this.shadowRoot.getElementById('inputpas').value;
        console.log('password', password);
        const expReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        let itsOk = expReg.test(email);

        if (email === '' || password === '') return alert('Ingresa con e-mail y password');

        if (itsOk === true) {
            alert(`Entraste como ${email}`);
        } else {
            alert(`${email} No es un e-mail valido`);
        }
    }

}