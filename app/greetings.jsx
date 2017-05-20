import React from "react";
import {AppSettings} from './settings/appSettings';

import {Jumbotron, Button} from "react-bootstrap";
import FontAwesome from 'react-fontawesome';

import greeterCSS from '../public/assets/css/greeter.css';

class Greetings extends React.Component {

    constructor (props) {
        super(props);

        console.log(greeterCSS);

        // event listeners
        this.onBtnClick = this.onBtnClick.bind(this);
    }

    onBtnClick () {
        window.open(this.props.url, '_blank');
    }

    render () {
        return (
            <Jumbotron>
                <div className={greeterCSS.root}>
                    <h1 className="display-3">
                        <FontAwesome
                            name='thumbs-o-up'
                            size='2x'
                            style={{
                                paddingRight: 30
                            }}
                        />
                        Welcome
                    </h1>
                    <hr className={greeterCSS.horizontalRed}/>
                    <p style={{marginTop: 30, marginBottom: 30}}>{this.props.name}</p>
                    <div className="lead">
                        <Button
                            bsStyle="primary"
                            onClick={() => this.onBtnClick()}
                        >
                            <FontAwesome name='github' style={{paddingRight: 10}}/>
                            Documentation
                        </Button>
                    </div>
                </div>
            </Jumbotron>
        )
    }
}

export default Greetings;