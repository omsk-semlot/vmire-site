import React, { Component } from "react"
import Layout from "../components/Layout/layout"
import { graphql } from 'gatsby'

class IndexPage extends Component {
  state = {
    smallScreen: false,
    modal: { name: "" },
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }

  resize() {
    this.setState({ smallScreen: window.innerWidth <= 840 })
  }

  openModal(e) {
    this.setState({ modal: e })
    document.getElementById("modal").style.display = "block"
  }

  closeModal() {
    document.getElementById("modal").style.display = "none"
  }
  render() {
    let indexData = this.props.data.allPublicJson.nodes[0]
    let homeItems = []
    let i = 0
    indexData.home_items.forEach(item => {
      homeItems.push(
        <div
          key={i}
          onClick={this.openModal.bind(this, item)}
          className={
            this.state.smallScreen ? "grid-item-small" : "home-grid-item"
          }
          style={{
            backgroundImage: `url(/images/start-video.png), url(${item.image})`,
            backgroundSize: "30%, 100%",
            backgroundPosition: "center center, center, center",
            backgroundRepeat: "no-repeat, no-repeat"
          }}
        ></div>
      )
      i++
    })
    return (
      <Layout page={"public"}>
        <h1 className="title">{indexData.title}</h1>
        <div className="home-main">
          <div className="text">{indexData.text}</div>
          <div className="divider"></div>
          <div
            className={
              this.state.smallScreen
                ? "grid-container-small"
                : "home-grid-container"
            }
          >
            {homeItems}
          </div>
        </div>
        <div id="modal" className="modal" onClick={this.closeModal}>
          <div
            className={
              this.state.smallScreen ? "modal-content-small" : "modal-content"
            }
          >
            <span className="modal-close">&times;</span>
              <iframe 
	        width="905" 
	        height="509" 
	        src={this.state.modal.url} 
	        title={this.state.modal.name} 
	        frameborder="0" 
	        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen" 
	        allowfullscreen>
	      </iframe>	    

              <div>
                <span className="modal-title">{this.state.modal.name}</span>
                <p className="modal-text">{this.state.modal.description}</p>
                <p className="modal-text">
                  Дата создания: {this.state.modal.completed}
                </p>
              </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default IndexPage

export const query = graphql`
  query {
    allPublicJson {
      nodes {
        title
        description
        text
        home_items {
          name
	        url
          description
          completed
          image
        }
      }
    }
  }
`
