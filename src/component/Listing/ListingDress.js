import React,{Component} from 'react';
import './listing.css';
import {Link} from 'react-router-dom';

import CostFilterDress from '../filter/CostFilterDress';
import BrandFilterDress from '../filter/BrandFilterDress';
import Header from '../../Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
 const url="https://apilink1.herokuapp.com/product/";


class ListingDress extends Component{
  
    constructor(props){
        // console.log("indie const lsit",props)
        super(props)
        this.state={
            listingData:'',
            categoryId:this.props.match.params.categoryId
          
            
        }
    }
    setDataPerFilter=(data)=>{
      this.setState({listingData:data})
  }
       
    componentDidMount(){

        let categoryId=this.props.match.params.categoryId;
        // console.log("category in dress",categoryId)
        sessionStorage.setItem('categoryId',categoryId)
        fetch(`${url}${categoryId}`,{method:'GET'})
        .then(res=>res.json())
        .then((data)=>{this.setState({listingData:data})})
       
    }
    renderItem=()=>{
        let listingData=this.state.listingData;
        // console.log(listingData)
        if(listingData){
       
            return(
                listingData.map((item,i)=>{
                    return(            
                    
                    <Link to={`/details/${this.state.categoryId}?productId=${item.product_id}`} key={i}>
                     
                        <div className="col" key={item._id}>
              <div className="card">
                <img src={item.Image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{item.product_name}</h5>
                  <p className="card-text">{item.Brand[0].brand_name}</p>
                  <p className="card-text extra">Price: Rs.{item.Price}</p>
                  </div>
              </div>
              </div>
              </Link>
           
            
                    )
                }
                )
            )
            }
    }
            
  
    render(){
        console.log(this.props)
                    return(
                    <>
                    <Header/>
                    <div id="listing">
                      <div id="filter">
                      <center> <h5>Filters</h5></center>
                      <div>
                    <CostFilterDress categoryId={this.props.match.params.categoryId} 
                      restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                    </div>
                    <hr/>
                    <div>
                    <BrandFilterDress categoryId={this.props.match.params.categoryId} 
                      restPerBrand={(data) => {this.setDataPerFilter(data)}}/>
                    </div>
                     </div> 
                        <div id="filterItem">
                        <div className="row row-cols-1 row-cols-md-4  row-cols-lg-4 g-4" >
                          {this.renderItem()}   
                            </div>
                             
                        </div>
                    </div>
                     </>
    
                    )
                }
            

    }


export default ListingDress;