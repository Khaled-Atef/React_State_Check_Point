import React from "react";
import Profile from "./person_profile";
class Display extends React.Component{
    constructor(props){
        super(props);
        this.state={
            show : true ,
        }
    }

    deleteClock = ()=>{
       return( this.setState({

            show : !this.state.show ,
        }));

            
    }

    render(){
        return(
            <div>
                {
                    this.state.show? <Profile pic="photo: " name="Name: " bio="Bio: "/>: <h4>profile is removed</h4>
                }
                <br/>
                <button onClick={this.deleteClock}>Delete/View Profile</button>
            </div>
        )
    }
}

export default Display ;
