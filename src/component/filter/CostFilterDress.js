import React,{Component} from 'react';
import axios from 'axios';

const url = "https://apilink1.herokuapp.com/filter";

class CostFilterDress extends Component{

    filterData = (event) => {
        let categoryId = this.props.categoryId;
        let cost = (event.target.value).split('-')
        let lcost = cost[0];
        let hcost = cost[1]
        let costUrl;
        if(event.target.value === ""){
           
            costUrl = `${url}/${categoryId}`
            console.log(costUrl)
           
        }else{
          
            costUrl = `${url}/${categoryId}?lcost=${lcost}&hcost=${hcost}`
           
        }
        axios.get(costUrl)
        .then((res) => {this.props.restPerCost(res.data)})
       
      
    }

    render(){
        return(

            <>
                <center>Cost Filter</center>
                <div style={{"marginLeft":'15%',"display":'flex','flexDirection':'column'}} onChange={this.filterData}>
                    <label className="radio">
                        <input type="radio" name="cuisine" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="0-1500"/>0-1500
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1501-2000"/>1501-2000
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="2001-3000"/>2001-3000
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="3001-5000"/>3001-5000
                    </label>
                </div>
            </>
        )
    }
}

export default CostFilterDress;