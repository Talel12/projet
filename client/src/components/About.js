import React, { Component } from 'react'
import {setAlert,removeAlert} from '../actions/AlertActions'
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux'
import{contact,clearError}from '../actions/ContactAction'

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nom: '',
        prenom: '',
        email: '',
        description: '',
    }
  }
  handelChange = e => { this.setState({ [e.target.name]: e.target.value }) }
  registernow = () => {

    if (this.state.nom === '' ||
        this.state.prenom === '' ||
        this.state.email === '' || this.state.description === '') {
        let id = uuidv4()
        this.props.setAlert('tous les champs sont obligatoires', 'danger', id)
        setTimeout(() => { this.props.removeAlert(id)
          this.props.clearError() }, 5000);
    }
    else {
      this.props.contact({
          nom: this.state.nom,
          prenom: this.state.prenom,
          email: this.state.email,
          adress: this.state.description,
          
      })
  }
  }
 
    render() {
        return (<div className="contact">
    <h2>Contacter Nous</h2>
          <form >
            <table style={{width: '550px', border: 0}} cellPadding={8} cellSpacing={0}>
              <tbody><tr> <td>
                    <label ><p className="input" >Nom*:</p></label>
                  </td> <td>
                    <input name="nom" onChange={this.handelChange} type="text" maxLength={60} style={{width: '250px'}} />
                  </td> </tr> <tr> <td>
                    <label ><p className="input">Prenom:</p></label>
                  </td> <td>
                    <input name="prenom" onChange={this.handelChange} type="text" maxLength={43} style={{width: '250px'}} />
                  </td> </tr> <tr> <td>
                    <label ><p className="input">Email address*</p>:</label>
                  </td> <td>
                    <input name="email"onChange={this.handelChange} type="text" maxLength={90} style={{width: '250px'}} />
                  </td> </tr> <tr> <td>
                    <label ><p className="input">Description*:</p></label>
                  </td> <td>
                    <textarea name="description"onChange={this.handelChange} rows={7} cols={40} style={{width: '350px'}} defaultValue={""} />
                  </td> </tr> <tr> <td>
                    * - required fields
                  </td> <td>
                   
                  <button onClick={this.registernow} className="btn btn-outline-success m-2" type="button">envoyer </button>
                  </td> </tr>
              </tbody></table>
          </form>
          </div>
        );
      }  

}
const mapStateToProps = state => {
  return { contactus: state.contactus }
}
export default connect( mapStateToProps,{ setAlert, removeAlert,clearError,contact })(ContactUs)
  