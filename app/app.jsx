import React from "react";
import {AppSettings} from './settings/appSettings';

import Greeting from "./greetings";
import FontAwesome from "react-fontawesome";
import {Row, Container, Col} from "react-bootstrap";

import appCSS from '../public/assets/css/style.css';

class App extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className="container">
                <div className={appCSS.content}>
                    <Row>
                        <Col md={12}>
                            <Greeting
                                name={AppSettings.getCredits()}
                                url={AppSettings.getUrl()}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className={appCSS.copyright}
                             style={{
                                 textAlign: 'right'
                             }}>
                            {AppSettings.getLicense()}
                            <FontAwesome name='copyright' style={{
                                paddingRight: 5, paddingLeft: 5
                            }}/>
                            {AppSettings.getCopyLeft()}
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default App;