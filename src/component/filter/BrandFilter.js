import React, { Component } from 'react';
import axios from 'axios';

const url = "https://apilink1.herokuapp.com/filter";

class BrandFilter extends Component {

    filterSubcategory = (event) => {
        let categoryId = this.props.categoryId;
        let BrandId = event.target.value;
        // sessionStorage.setItem('BrandId',BrandId);
        let outUrl;
        
            if (BrandId === "") {
            outUrl = `${url}/${categoryId}`
          
        } else {
            outUrl = `${url}/${categoryId}?BrandId=${BrandId}`
            
        }
        axios.get(outUrl)
            .then((res) => { this.props.restPerBrand(res.data) })

        }
        
    render() {
       // let categoryId = this.props.categoryId;
       // if (categoryId === 2) {
            return (
                <>
                    <center>Brand </center>

                    <div id="subcategory" style={{ "marginLeft": '15%', "display": 'flex','flexDirection':'column' }} onChange={this.filterSubcategory}>
                        <label className="radio">
                            <input type="radio" name="subcategory" value="" />All
                        </label>
                        <label className="radio">
                            <input type="radio" name="subcategory" value="3" />HP
                        </label>
                        <label className="radio">
                            <input type="radio" name="subcategory" value="4" />ASUS
                        </label>
                        <label className="radio">
                            <input type="radio" name="subcategory" value="5" />EPSON
                        </label>
                        <label className="radio">
                            <input type="radio" name="subcategory" value="7" />Acer
                        </label>
                        <label className="radio">
                            <input type="radio" name="subcategory" value="8" />Apple
                        </label>


                    </div>


                </>
            )

        }
    }
       
        


    


export default BrandFilter;