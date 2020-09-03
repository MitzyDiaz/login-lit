import { html, css, LitElement } from 'lit-element';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';


export class LoginComp extends LitElement {
  static get styles() {
    return css`
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
        background: #F2E9E4;
        display: flex;
        margin: 0 auto;
        margin-top: 10%;
        width: 35%;
        height: 30%;
        border-radius: 10px 10px 10px 15px;
      }

      #titulo{
        text-align: center;
        color: #22223B;
      }
      paper-button.custom {
        background-color: #22223B !important;
        color: white !important;
        width: 100%;
        margin: 0 auto;
      }

      paper-button.custom:hover {
        background-color: white;
        color: white;
      }

       paper-input.custom-input {
        --paper-input-container-focus-color: #22223B;
          margin: 10px 0px 10px 0px;
          padding: 0px 10px 14px 10px; 
      }


      .image{
        padding: 30px 15px 5px 15px;
        width: 150px;
        height:150px;
      }

      #der{
        width: 100%;
        padding: 30px 20px 30px 20px;
      }

      #izq{
        border-radius: 0px 0px 0px 10px;
        padding: 20px;
        color: #F2E9E4;
        /*color: #C9ADA7;*/
        text-align: center;
        background: #22223B;
      }

      iron-icon{
        color: #C9ADA7;
        width: 20px;
        height: 20px;
      }


    `;
  }

  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'LOGIN';
    this.subtitle="COCKTAIL APP"
  }

  render() {
    return html`
    <div id="cont">
      <paper-card elevation="0">

        <div id="izq">
          <img class="image" src="img/martini.svg" alt="">
          <h2>${this.subtitle}</h2>
        </div>

        <div id="der">
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
            <paper-button raised class="custom" @click="${this._sendLogin}">Enter</paper-button>
          </div>
        </div>
          
      </paper-card>
    </div>
    `;
  }

/*NEW UPDATE*/
    _sendLogin() {
      let access = false;
      const email = this.shadowRoot.getElementById('inputmail').value;
      console.log('email', email);
      const password = this.shadowRoot.getElementById('inputpas').value;
      console.log('password', password);
      const expReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      let itsOk = expReg.test(email);

      if (itsOk === true && password !== '') {
        access = true;
        alert('datos correctos');
      } else {
        alert('datos incorrectos');
      }

      this.dispatchEvent(new CustomEvent('login', {detail: access}));

        // if (email === '' || password === '') {
        //   alert('Ingresa con e-mail y password');
        // }  
          

        // if (itsOk === true) {
        //     alert(`Entraste como ${email}`);
        // } else {
        //     alert(`${email} No es un e-mail valido`);
        // }
       }

    }
