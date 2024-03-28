import React from "react";
import "../css/roadmapline.css"

class Roadmapline extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            assets: [ require('../Images/teluslogo.png'),
                      require('../Images/transportcanadalogo.png'),
                      require('../Images/selfemployed.png'),
                      require('../Images/gamejam.png'),
                      require('../Images/labball.png'), 
                      require('../Images/neuralnetwork.png'), 
                      require('../Images/AIpathing.png'),
                      require('../Images/saablogo.png')]
        };
    }

    render(){
        return (
            <div className="roadmapline">
                <div id="circlething">
                    <img src={this.state.assets[this.props.logo_src]} alt=""></img>
                </div>
                <div className="linebottom"></div>
            </div>
        );
    }
}

export { Roadmapline };