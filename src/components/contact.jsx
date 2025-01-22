import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, company, phone, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      company,
      phone,
      message
    };

    try {
      const response = await fetch('https://sheetdb.io/api/v1/bq06l6o9z5ucc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data }),
      });

      if (response.ok) {
        alert('Formulário enviado com sucesso!');
        clearState();
      } else {
        console.error('Erro ao enviar os dados:', response.statusText);
        alert('Houve um erro ao enviar o formulário.');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      alert('Houve um erro ao enviar o formulário.');
    }
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Fale com a gente:</h2>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nome Completo"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                          type="text"
                          id="company"
                          name="company"
                          className="form-control"
                          placeholder="Nome da Empresa"
                          required
                          onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-control"
                          placeholder="Telefone"
                          pattern="^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$"
                          required
                          onInvalid={(e) => e.target.setCustomValidity('Por favor, insira um telefone válido no formato (11) 91234-5678.')}
                          onInput={(e) => e.target.setCustomValidity('')}
                          onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Solicitar Contato
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Informações de contato</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Endereço
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              {/*<p>*/}
              {/*  <span>*/}
              {/*    <i className="fa fa-phone"></i> Telefone*/}
              {/*  </span>{" "}*/}
              {/*  {props.data ? props.data.phone : "loading"}*/}
              {/*</p>*/}
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          {/*<div className="col-md-12">*/}
          {/*  <div className="row">*/}
          {/*    <div className="social">*/}
          {/*      <ul>*/}
          {/*        <li>*/}
          {/*          <a href={props.data ? props.data.facebook : "/"}>*/}
          {/*            <i className="fa fa-facebook"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <a href={props.data ? props.data.twitter : "/"}>*/}
          {/*            <i className="fa fa-twitter"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <a href={props.data ? props.data.youtube : "/"}>*/}
          {/*            <i className="fa fa-youtube"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
      {/*<div id="footer">*/}
      {/*  <div className="container text-center">*/}
      {/*    <p>*/}
      {/*      &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}*/}
      {/*      <a href="http://www.templatewire.com" rel="nofollow">*/}
      {/*        TemplateWire*/}
      {/*      </a>*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
