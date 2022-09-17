import React, { Component } from "react"
import Layout from "../components/Layout/layout"
import { graphql } from 'gatsby'

class ContactPage extends Component {
  render() {
    let contactData = this.props.data.allContactJson.nodes[0]
    return (
      <Layout page={"contact"}>
        <h1 className="title">{contactData.title}</h1>
        <div className="text">
          Мы открыты для сотрудничества. Напишите нам.
        </div>
        <div className="contact-grid-container">
          <div className="contact-grid-item">
            <img
              src={contactData.email_icon}
              alt="Email"
              className="contact-icon"
            ></img>
          </div>
          <div className="contact-grid-item">
            <img
              src={contactData.phone_icon}
              alt="Телефон"
              className="contact-icon"
            ></img>
          </div>
          <div className="contact-grid-item">
            <img
              src={contactData.vk_icon}
              alt="ВКонтакте"
              className="contact-icon"
            ></img>
          </div>
          <div className="contact-grid-item">vmire@yandex.ru</div>
          <div className="contact-grid-item">8 (933) 992-11-95</div>
          <div className="contact-grid-item">vk.com/vmire.omsk</div>
        </div>
      </Layout>
    )
  }
}
export default ContactPage

export const query = graphql`
  query {
    allContactJson {
      nodes {
        id
        title
        description
        text
        email
        phone
        vk
        email_icon
        phone_icon
        vk_icon
      }
    }
  }
`
