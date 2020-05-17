import React from 'react'
import Layout from '../components/Layout';
import SEO from "../components/seo";

import * as Styled from '../styles/pages/contactStyles';

const Contact = () =>
{
  const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas placeat aliquid repellendus quod consequuntur qui consequatur, incidunt harum voluptatem odio reiciendis, consectetur labore sed, hic expedita quaerat ipsam. Tenetur, quisquam?';

  return (
    <Layout>
      <SEO title="Contato" />

      <div className="container">
        <div className="row">
          <div className="col-12 py-4 mb-3">
            <h1>Contact</h1>
            <p>{text}</p>
          </div>
          <div className="col-md-6 mb-3">

            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Nome</label>
                <input type="text" className="form-control" id="exampleInputName" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input type="Email" className="form-control" id="Email" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Mensagem</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-success">Send</button>
            </form>

          </div>
          <div className="col-md-6 mb-3">
            <ul className="list-group">
              <li className="list-group-item">
                <Styled.EmailWrapper danger />
                my-email@example.com
              </li>
              <li className="list-group-item">
                <Styled.PhoneWrapper />
                +55 99 99999-9999
              </li>
              <li className="list-group-item">
                <Styled.LocationOnWrapper />
                Rua fulano de tal,777
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
