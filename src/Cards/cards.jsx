import  React,{Component} from 'react';
import Card from './cardUI'
import img1 from "../assests/i1.jpg"
import img2 from "../assests/i2.jpg"
import img3 from "../assests/i3.jpg"
import Navbar1 from './navbar'

class Cards extends Component{

        
      
    render(){
        return(
            <div>
            <Navbar1/>
            
            <div className="container-fluid d-flex justify-content-center" style={{paddingTop:"100px"}}>
                <div className="row">
                <div className="col-md-4">
                <Card imgsrc={img1} title="Two Satyrs" upvotes="100"  views="2000" comments="7"/>
                </div>
                <div className="col-md-4">
                <Card imgsrc={img2} title="Composition"  upvotes="80" views="900" comments="20"/>
                </div>
                <div className="col-md-4">
                <Card imgsrc={img3} title="Silence"  upvotes="7000"  views="10000" comments="223"/>
                </div>
                </div>   
            </div>
            </div>
        );
    }

}

export default Cards;