import React from "react";
import { isMobile } from 'react-device-detect';
import "../css/thoughtsbox.css"
import axios from 'axios'
import jobdesc from '../Images/jobdescriptionicon.png';
import jobsoftskill from '../Images/softskillsicon.png';
import jobtechskill from '../Images/technicalskillsicon.png';
import jobobjective from '../Images/jobobjectiveidon.png';

class Thoughtsbox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showtooltip: false, 
      title: ['Tasks?', 'Soft Skills?', 'Technical Skills?', "Objectives?"],
      jobdesc: 'NA',
      softskills: 'NA', 
      techskills: 'NA',
      objective: 'NA',
      messagetitle: '',
      messagebody: '',
      intromsgbodyshow: this.props.intromsgbody,
      intromsgheadshow: this.props.intromsghead,
      typeparent: this.props.typeparent,
      typechild: this.props.typechild
    };
  
  }

  showMessage = (messagetitle, messagebody) => {
    if(!isMobile){
      this.setState(prevState => ({showtooltip: !prevState.showtooltip, 
                                   messagetitle: messagetitle,
                                   messagebody: messagebody}))
    }
  }

  touchScreenOff = (messagetitle, messagebody) => {
    if(isMobile){
      this.setState(prevState => ({showtooltip: !prevState.showtooltip, 
                                   messagetitle: messagetitle,
                                   messagebody: messagebody}))
    }
  }

  componentDidMount(){

    try {
      var self = this;
      axios({
          method: 'post',
          url: '/getInformation',
          data: {
            typeparent: this.state.typeparent,
            typechild: this.state.typechild
          }
      }).then(function(res) {
        self.setState({
          jobdesc: res.data.tasks,
          softskills: res.data.soft, 
          techskills: res.data.technical,
          objective: res.data.objectives
        });
      })
    } catch(err) {
        console.log(err);
    }
  
  }

  render(){
    return (
      <div className="tbencapsulate">
        <div id="buttontooltip">
          { this.state.showtooltip ? 
            <ToolHoverableTip changeToolTip = {this.touchScreenOff} showtooltip={this.state.showtooltip} nametitle={this.state.messagetitle} namebody={this.state.messagebody} exittooltip={this.showMessage}/> 
            : null
          }
        </div>
        <div className="thoughtsbox">
          <text id="mhead"> {this.state.intromsgheadshow}</text>
          <text id="mbody"> {this.state.intromsgbodyshow}  </text>
          <div id="buttonarea">
            <button id="infocircle" onMouseEnter={() => this.showMessage(this.state.title[0], this.state.jobdesc)} 
                                    onMouseLeave={() => this.showMessage('', '')}
                                    onTouchStart={() => this.touchScreenOff(this.state.title[0], this.state.jobdesc)}> <img src={jobdesc} alt=""></img> </button>
            
            <button id="infocircle" onMouseEnter={() => this.showMessage(this.state.title[1], this.state.softskills)} 
                                    onMouseLeave={() => this.showMessage('', '')}
                                    onMouseDown={() => this.touchScreenOff(this.state.title[1], this.state.softskills)}> <img src={jobsoftskill} alt=""></img> </button>
            
            <button id="infocircle" onMouseEnter={() => this.showMessage(this.state.title[2], this.state.techskills)} 
                                    onMouseLeave={() => this.showMessage('', '')}
                                    onMouseDown={() => this.touchScreenOff(this.state.title[2], this.state.techskills)}> <img src={jobtechskill} alt=""></img> </button>
            
            <button id="infocircle" onMouseEnter={() => this.showMessage(this.state.title[3], this.state.objective)} 
                                    onMouseLeave={() => this.showMessage('', '')}
                                    onTouchStart={() => this.touchScreenOff(this.state.title[3], this.state.objective)}> <img src={jobobjective} alt=""></img> </button>
          </div>
      </div>
      </div>
    );
  }
}

function ToolHoverableTip(props){
  return (
    <div className="tooltipbox">
      <div className="tooltipboxoverlay" onClick={props.changeToolTip}></div>
      <p id="desctitle"> {props.nametitle} </p>
      <p id="desctext"> {props.namebody} </p>
    </div>
  );
}

export { Thoughtsbox };