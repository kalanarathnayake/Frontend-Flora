import { Component } from "react";

import AuthenticationService from "../user/AuthenticationService";

class navbar extends Component {
  logout = () => {
    AuthenticationService.logout();
    window.location = "/"
  }
  render() {

    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    const loggedUserRole = AuthenticationService.loggedUserRole();
    const loggedUserId = AuthenticationService.loggedUserId();

    console.log("User Id is" + loggedUserId);
    // const loggedUser = AuthenticationService.loggedUserName();
    let loggedAsEManager = false;
    let loggedAsCManager = false;
    let loggedAsSManager = false;
    let loggedAsIManager = false;
    // let loggedAsWStaff = false;
    let loggedAsGHManager = false;
    let loggedAsOManager = false;
    let loggedAsDManager = false;
    let loggedAsPManager = false;
    let loggedAsFManager = false;
    let unknownUser = false;

    if (isUserLoggedIn == true) {
      console.log("User Logged In")
    } else {
      unknownUser = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Employee Manager') {
      loggedAsEManager = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Customer Manager') {
      loggedAsCManager = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Supplier Manager') {
      loggedAsSManager = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Inventory Manager') {
      loggedAsIManager = true;
    } 
    if (loggedUserRole != null && loggedUserRole === 'Green House Manager') {
      loggedAsGHManager = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Delivery Manager') {
      loggedAsDManager = true;
    }
    if (loggedUserRole != null && loggedUserRole === 'Product Manager') {
      loggedAsPManager = true;
    } if (loggedUserRole != null && loggedUserRole === 'Order Manager') {
      loggedAsOManager = true;
    }if (loggedUserRole != null && loggedUserRole === 'Finance Manager') {
      loggedAsFManager = true;
    }

    return (
      <div>
        <div>
          <nav className="flex flex-col w-full px-6 py-4 bg-white shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
            {unknownUser &&
              <>
                <div className="mb-2 sm:mb-0">
                  <a href="/" className="text-xl text-orange-600 no-underline duration-300 hover:text-orange-dark hover:font-bold">Home</a>
                </div>
                <div class="">
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
                    <button class="flex  bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800">  <a className="text-white no-underline text-md from-neutral-50" href="/signUp">Sign Up</a></button>
                  </div>
                  <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
                    <button class="flex text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800"><a className="text-white no-underline text-md" href="/signIn">Sign In</a></button>
                  </div>
                </div>
              </>
            }
            {isUserLoggedIn &&
              <>
                <div className="mb-2 sm:mb-0">
                  <a href="/" className="text-xl text-orange-600 no-underline duration-300 hover:text-orange-500 hover:font-bold">Home</a>
                </div>
                <div className='text-lg font-light hover:text-orange-dark'>
                  {loggedAsEManager &&
                    <>
                      <div>
                        <a href="/employee" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Employees</a>
                        
                      </div>
                    </>
                  }

                  {loggedAsCManager &&
                    <div>
                      <a href="/customer" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Customer</a>
                     
                    </div>
                  }
                  {loggedAsOManager &&
                    <div>
                      <a href="/order" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Orders</a>
                     
                    </div>
                  }

                  {loggedAsIManager &&
                    <>
                      <div>
                        <a href="/inventory" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Inventory</a>

                          
                       

                      </div>
                    </>
                  }

                  

                  {loggedAsGHManager &&
                    <>
                      <div>
                        <a href="/greenHouse" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Green House</a>
                       

                      </div>
                    </>
                  }
                  
                  {loggedAsSManager &&
                    <>
                      <div>
                        <a href="/supplier" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Supplier</a>
                        <a href="/inventoryorder" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Inventory Orders</a>



                      </div>
                    </>
                  }

                  {loggedAsPManager &&
                    <div>
                      <a href="/product" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Product</a>

                    </div>
                  }

                  {loggedAsDManager &&
                    <>
                      <div>
                        <a href="/delivery" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">All Deliveries</a>
                        <a href="/readyDelivery" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Ready Delivery</a>
                        

                      </div>
                    </>
                  }

                  {loggedAsFManager &&
                    <>
                      <div>
                        <a href="/salary" className="m-2 text-black no-underline duration-300 hover:text-orange-800 hover:font-normal">Salary</a>

                      </div>
                    </>
                  }

                </div>
                <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
                  <button class="flex text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800" onClick={this.logout}> Logout</button>
                </div>
              </>
            }
          </nav>
        </div >
      </div >
    );
  }
}

export default navbar;