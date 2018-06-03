import * as React from "react";
import { Header } from "blg-header";
import { PhotoRedSocial } from "blg-photo-redsocial";
import FooterComponent from "footer-widgets";
import { AboutMeComponent } from "about-me-plugin";
import "./home.scss";
import { Route, Switch, match } from "react-router-dom";
import { connect } from "react-redux";
import { PostPage } from "../post";
import { ListPost } from "../listPost";

const AboutMeProps = {
  content:
    "Espero que disfruten leyendo mis post como disfruto yo escribiéndolos. Y una vez más les doy la bienvenida a mis nuevos alumnos a la ESCUELITA DE SEXO, donde hay más práctica que teoría y donde todo pasa por algo, y si no pasa se le echa saliva.",
  img:
    "https://instagram.faep5-1.fna.fbcdn.net/vp/8c7e84a08e588b0e80330dca35912777/5BBF84F8/t51.2885-19/s150x150/27892604_2018324714861923_1316620077105152000_n.jpg",
  textUppercase: "Escuelita de Sexo"
};

export const Home: React.SFC = props => {
  return (
    <div className="Home">
      <header>
        <Header />
        <div className="kotha-logo text-center">
          <h1>
            <a href="/" />
            <img src="/images/logo.jpeg" style={{ width: "290px" }} />
          </h1>
        </div>
      </header>
      <div className="contentHome">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <Switch>
                <Route exact path="/:category?" component={ListPost} />
                <Route path="/post/:id" component={PostPage} />
              </Switch>
            </div>
            <div className="col-sm-4">
              <AboutMeComponent
                content={AboutMeProps.content}
                img={AboutMeProps.img}
                textUppercase={AboutMeProps.textUppercase}
              />
            </div>
          </div>
        </div>
      </div>
      <PhotoRedSocial />
      <FooterComponent />
    </div>
  );
};
