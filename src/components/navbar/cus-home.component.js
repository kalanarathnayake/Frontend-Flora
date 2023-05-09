import { Component } from "react";
import { Carousel, initTE } from "tw-elements";
import AuthenticationService from "../user/AuthenticationService";
import axios from 'axios';
import 'tw-elements';

initTE({ Carousel });

class CusHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            
            search: "Jetwing Colombo Seven",
            show: false,
        };
    }

    componentDidMount() {
       this.productList();
    }

    productList() {
        axios.get('http://localhost:5000/product/')
            .then(response => {
                this.setState({ products: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    searchProductList() {
        return this.state.products.map((currentProduct) => {
             {
                return (
                    <div className="mt-5 mb-12 shadow-xl card w-96 bg-base-100 hover:scale-105" >
                        <figure><img src={currentProduct.image} alt="Weddings" className='h-96' /></figure>
                        <div className="card-body">
                            <h2 className="justify-center font-bold card-title">{currentProduct.productName}</h2>
                            <p className='px-3 text-justify'>{currentProduct.productCategory}</p>
                            <table>
                                <tr className='flex justify-between'>
                                    <div>
                                        <td>{currentProduct.discount} Seats</td>
                                    </div>
                                    <div>
                                        <th className='text-cyan-800'>{currentProduct.price} per plate</th>
                                    </div>
                                </tr>
                            </table>
                        </div>
                    </div>
                );
            }
        });
    }

  render() {
    // const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    // const loggedUserRole = AuthenticationService.loggedUserRole();
    // // const loggedUser = AuthenticationService.loggedUserName();
    // let loggedAsEManager = false;
    // let loggedAsCManager = false;
    // let loggedAsEditor = false;
    // let unknownUser = false;

    // if (isUserLoggedIn === true) {
    //   console.log("User Logged In")
    // } else {
    //   unknownUser = true;
    // }

    // if (loggedUserRole != null && loggedUserRole === 'Employee Manager') {
    //   loggedAsEManager = true;
    // }
    // if (loggedUserRole != null && loggedUserRole === 'Customer Manager') {
    //   loggedAsCManager = true;
    // }
    // if (loggedUserRole != null && loggedUserRole === 'editor') {
    //   loggedAsEditor = true;
    // }

    

    return (
      <div class="">
      <div class="w-100">
          <img src="https://plazahollandi.com/wp-content/uploads/2020/09/bunches-of-tulips-scaled.jpg" alt="Jetwing Colombo Seven" />
      </div>
      
      {/* events and meetings */}
      <section class="">
          
          <div class="text-center bg-white text-gray-800 px-6">
              <h1 class="text-5xl text-blue-950 md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md ">Products<br />
              </h1>
          </div>
      </section>
      
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 mb-5 grid grid-cols-3 content-center ">
                    {this.searchProductList()}
                </div>

      
      
     
      {/*  */}
      
  </div>
    );
  }
}

export default CusHome;