import * as React from 'react';
import { Header } from 'blg-header';
import { PhotoRedSocial } from 'blg-photo-redsocial';
import FooterComponent from 'footer-widgets';
import { AboutMeComponent } from 'about-me-plugin';
import './home.scss';
import { Route, Switch, match } from 'react-router-dom';
import { connect } from 'react-redux';
import { PostPage } from '../post'
import { ListPost } from '../listPost';

const AboutMeProps = {
  content: 'TypeScript is a free and open-source programming language' +
    'developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript' +
    ', and adds optional static typing to the language',
  img: 'http://www.sgmobmart.com/listings/upload/126/userprofile/PF12681275.jpg',
  textUppercase: 'TypescriptLang'
};

export const Home: React.SFC = (props) => {
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
                <Route exact path='/:category?' component={ListPost} />
                <Route path='/post/:id' component={PostPage} />
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
  )
}
