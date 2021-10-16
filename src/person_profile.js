import React from 'react' ;
import my_picture from "./profile_with_mask.jpg" ;

class Profile extends React.Component{
    constructor(props){
        super(props);
            this.state={
                fullName : "Khaled Atef",
                bio : "I dream of rain I dream of gardens in the desert sand" ,
                profession : "Full Stack developer" ,
                date : new Date () ,
                count : 0 ,
                
            };
           
    }

     componentDidMount(){
           setInterval(()=>{
           /*  return( this.setState(
                {
                    date : new Date (),
                }
            )); */
           this.tick()  ;
           },1000);
           
           
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        // we must put a condition before using setState
        if(this.state.date !== prevState.date){
           
            this.setState(
                {
                    count : this.state.count+1 ,
                }
            );

        }
        
    }

    componentWillUnmount(){
        alert("Are You Sure You Want to Delete Your Profile ?!")
    }  

      tick = ()=>{
      return( this.setState(
           {
               date : new Date (),
           }
       ));
    };  
    


render(){
    return(
        <div>
            <section>
             {this.props.name} {this.state.fullName}
              <br/>
             {this.props.bio} {this.state.bio}
              <br/>
             {this.props.pic} <img src={my_picture} alt='myImage' height="100" width="200" />

            </section>

            <p>
                it is{this.state.date.toLocaleTimeString()}
            </p>
           <br/>
           <h6>this component is updated {this.state.count} times</h6>
           
        </div>
    )
}


}

export default Profile ;