import React,{Component} from 'react'
import './footer.css';
import {card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class Footer extends Component{
    render()
    {
        return(<>
        <footer className="footer">
  	 <div className="container">
  	 	<div className="rowF">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a hrefhtml="#">about us</a></li>
  	 				<li><a hrefhtml="#">our services</a></li>
  	 				<li><a hrefhtml="#">privacy policy</a></li>
  	 				<li><a hrefhtml="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a hrefhtml="#">FAQ</a></li>
  	 				<li><a hrefhtml="#">shipping</a></li>
  	 				<li><a hrefhtml="#">returns</a></li>
  	 				<li><a hrefhtml="#">order status</a></li>
  	 				<li><a hrefhtml="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a hrefhtml="#">watch</a></li>
  	 				<li><a hrefhtml="#">bag</a></li>
  	 				<li><a hrefhtml="#">shoes</a></li>
  	 				<li><a hrefhtml="#">dress</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a hrefhtml="#"><i className="fab fa-facebook-f"></i></a>
  	 				<a hrefhtml="#"><i className="fab fa-twitter"></i></a>
  	 				<a hrefhtml="#"><i className="fab fa-instagram"></i></a>
  	 				<a hrefhtml="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
        </>

        )
    }
}
           
        

    

   
    

export default Footer;