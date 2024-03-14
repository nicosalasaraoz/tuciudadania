import React from "react";
import { Carousel, Container } from "react-bootstrap";



const Header = ({ setSearchState, searchState, setCategory}) => {
  return (
      <Container>
        <div className="container-fluid carousel-inner mt-3">
          <Carousel fade>
            <Carousel.Item>
              <img
                      className="d-block w-100"
                      src="https://media.tycsports.com/files/2023/03/02/540591/pasaporte_862x485.webp"
                      alt=""
                      height={400}
                    />
              <Carousel.Caption>
               <h3 className="title">
                        Obtene tu pasaporte Italiano
                      </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                      className="d-block w-100"
                      src="https://media.tycsports.com/files/2023/03/02/540591/pasaporte_862x485.webp"
                      alt=""
                      height={400}
                    />
              <Carousel.Caption>
                <h3 className="title">
                        Obtene tu pasaporte Italiano
                      </h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                      className="d-block w-100"
                      src="https://media.tycsports.com/files/2023/03/02/540591/pasaporte_862x485.webp"
                      alt=""
                      height={400}
                    />
              <Carousel.Caption>
                <h3 className="title">
                        Obtene tu pasaporte Italiano
                      </h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
  );
};

export default Header;
