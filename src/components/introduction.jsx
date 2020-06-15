import React, {Component} from "react";
import styled from "styled-components";
export default class Introduction extends Component {
  render() {
    return (
      <StyledIntro>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: "url(images/me.jpeg)"}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc ">
                          <h1>
                            Hi! <br />
                            I'm Shahriar
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary "
                              href="https://cvlogin.com/cv/7cd6e68846f37043194f2727527f0878"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View CV
                              <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: "url(images/me.jpeg)"}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            I love building
                            <br /> THINGS !!
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary "
                              href="https://github.com/Shahriar-Shakil"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Projects <i className="icon-briefcase3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: "url(images/me.jpeg)"}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            I often <br />
                            Write ...{" "}
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary "
                              href="https://mrshahriar.blogspot.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Blog <i className="icon-book" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </StyledIntro>
    );
  }
}
const StyledIntro = styled.div`
  .desc {
    h1 {
      color: #fff !important;
      text-shadow: 0 0 8px #c02a2a;
    }
    p {
      a {
        border: 1px solid #000 !important ;
        color: #fff !important;
        text-shadow: 0 0 8px #c02a2a;
        background: #ec071b5e !important;
        :hover {
          background: #ec071b !important;
        }
      }
    }
  }
`;
