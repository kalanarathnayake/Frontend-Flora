import { Component } from "react";
import { Carousel, initTE } from "tw-elements";
import AuthenticationService from "../user/AuthenticationService";
import 'tw-elements';

initTE({ Carousel });

class home extends Component {

  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
    const loggedUserRole = AuthenticationService.loggedUserRole();
    // const loggedUser = AuthenticationService.loggedUserName();
    let loggedAsEManager = false;
    let loggedAsCManager = false;
    let loggedAsEditor = false;
    let unknownUser = false;

    if (isUserLoggedIn === true) {
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
    if (loggedUserRole != null && loggedUserRole === 'editor') {
      loggedAsEditor = true;
    }

    return (
      <div class="">
      <div class="w-100 h-30">
          <img src="https://ncc-website-2.s3.amazonaws.com/images/IMG_4748.jpg" alt="Jetwing Colombo Seven" />
      </div>
      <section class="">
          <div class="grid grid-cols-2 divide-x">
              <div class="text-center bg-white text-gray-800 pt-20 px-8 pb-10">
                  <h3 class="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight uppercase mb-8 drop-shadow-md "><span class="text-blue-950 font-serif font-light  ">JETWING COLOMBO SEVEN</span>
                  </h3>
                  <p>Nearly half a century ago, our legendary brand of hospitality was born on this very coastline. From the warm hearts of a Sri Lankan family, the values of passion, humility, integrity, and tenacity were brought to life in a charming beachside villa that has since inspired a world of luxury spread across our tropical isle.</p>
                  <p>It all began here – at our original home of Sri Lankan hospitality. The home in which we welcomed the world as part of our family, and treated the world as one of our own. From mouthwatering meals to unique experiences, we have always been delighted to share the magic of our land with you. And today, as our timeless seas hold a wealth of stories past, we invite you to our nostalgic shores to begin one of your own.</p>
                  <p>Ravindra de Silva
                      Manager – Jetwing Colombo Seven</p>
              </div>
              <div class="max-w-[90%] mx-auto px-5 py-5 lg:px-32 lg:pt-16">
                  <img src="https://www.jetwinghotels.com/jetwingcolomboseven/wp-content/uploads/sites/4/2019/10/DSC_2849-1200x810.jpg" alt="Events" class="h-[25rem] w-[80rem] pr-8 hover:animate-pulse" />
              </div>
          </div>
      </section>
      {/* events and meetings */}
      <section class="">
          <div class="max-w-[90%] mx-auto px-5 pb-5 lg:px-32 lg:pt-12">
              <img src="https://www.jetwinghotels.com/jetwingcolomboseven/wp-content/uploads/sites/4/2019/10/DSC_2133-Desktop-1920-x-656.jpg" alt="Events" />
          </div>
          <div class="text-center bg-white text-gray-800 px-6">
              <h1 class="text-5xl text-blue-950 md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md ">Events and Meetings<br />
              </h1>
          </div>
      </section>
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 " >
          <div class="p-10">
              <a href="/" class=" flex no-underline text-black flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl h-96 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div class="flex flex-col justify-between p-4 leading-normal">
                      <table>
                          
                      </table>
                  </div>
              </a>
          </div>
      </div>
      <section class="">
          <div class="text-center bg-white text-gray-800 px-6">
              <h1 class="text-5xl text-blue-950 md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md ">Weddings<br />
              </h1>
          </div>
      </section>
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 mb-5 grid grid-cols-3 content-center ">
          
      </div>
      {/* Accomodations*/}
      <section class="">
          <div class="max-w-[90%] mx-auto px-5 py-5 lg:px-32 lg:pt-12">
              <table>
                  <tr>
                      <td rowspan="2"><div >
                          <img src="https://www.jetwinghotels.com/jetwingcolomboseven/wp-content/uploads/sites/4/2019/08/Gallery1-2.jpg" alt="Events" class="h-[30rem] w-[100rem] transition duration-300 ease-in-out hover:opacity-40" />
                      </div></td>
                      <td><div >
                          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/84/59/c5/rooftop-infinity-pool.jpg?w=1100&h=-1&s=1" alt="Events" class="h-[15rem] w-[80rem] transition duration-300 ease-in-out hover:opacity-40" />
                      </div></td>
                  </tr>
                  <tr>
                      <td>
                          <div >
                              <img src="https://i0.wp.com/colombocitynews.com/wp-content/uploads/2022/06/vir_1.jpg?fit=1200%2C900&ssl=1" alt="Events" class="h-[15rem] w-[80rem] transition duration-300 ease-in-out hover:opacity-40" />
                          </div>
                      </td>
                  </tr>
              </table>
          </div>
      </section>
      <section class="">
          <div class="text-center bg-white text-gray-800 px-6">
              <h1 class="text-5xl md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md text-blue-950 ">Accomodations<br />
              </h1>
          </div>
      </section>
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12 " >
          <div class="p-10">
              <div class="py-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow  md:max-w-7xl  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <table>
                      <thead className='justify-center'>
                          <tr>
                              <th class="pl-12 py-2">Room Name</th>
                              <th class="pl-12 py-2">Size</th>
                              <th class="pl-8 py-2">Number Of People</th>
                              <th class="pl-8 py-2">Price</th>
                              <th class="pl-42 py-2">Features</th>
                              <th class="pl-12 py-2">Book Here</th>
                          </tr>
                      </thead>
                      </table>
              </div>
          </div>
      </div>
     
      {/*  */}
      <section class="">
          <div class="text-center bg-white text-gray-800 px-6 pt-6 pb-8">
              <h1 class="text-5xl md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md text-blue-950 ">Gallery<br />
              </h1>
          </div>
          <div class="mb-24 container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
              <div class="-m-1 flex flex-wrap md:-m-2">
                  <div class="flex w-1/3 flex-wrap transition duration-300 ease-in-out hover:scale-110">
                      <div class="w-full p-1 md:p-2">
                          <img
                              alt="gallery"
                              class="block h-full w-full rounded-lg object-cover object-center "
                              src="https://www.jetwinghotels.com/wp-content/uploads/2019/06/colombo-hotel-category-744x653.jpg"
                          />
                      </div>
                  </div>
                  <div class="flex w-1/3 flex-wrap transition duration-300 ease-in-out hover:scale-110">
                      <div class="w-full p-1 md:p-2">
                          <img
                              alt="gallery"
                              class="block h-full w-full rounded-lg object-cover object-center"
                              src="https://www.jetwinghotels.com/wp-content/uploads/2018/07/mermaid-hotel-kalutara.jpg"
                          />
                      </div>
                  </div>
                  <div class="flex w-1/3 flex-wrap transition duration-300 ease-in-out hover:scale-110">
                      <div class="w-full p-1 md:p-2">
                          <img
                              alt="gallery"
                              class="block h-full w-full rounded-lg object-cover object-center"
                              src="https://www.jetwinghotels.com/wp-content/uploads/2017/10/Colombo-7-categorythumbnail.jpg" />
                      </div>
                  </div>
                  <div class="flex w-1/3 flex-wrap transition duration-300 ease-in-out hover:scale-110">
                      <div class="w-full p-1 md:p-2">
                          <img
                              alt="gallery"
                              class="block h-full w-full rounded-lg object-cover object-center"
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceBMogAcpWxMh3HK4QGYZrGPKlIwN-Tximyd0rj8c-4sDIWZ7EGdrKe_G6jaFPIE_iSs&usqp=CAU"
                          />
                      </div>
                  </div>
                  <div class="flex w-1/3 flex-wrap transition duration-300 ease-in-out hover:scale-110">
                      <div class="w-full p-1 md:p-2">
                          <img
                              alt="gallery"
                              class="block h-full w-full rounded-lg object-cover object-center"
                              src="https://www.jetwinghotels.com/wp-content/uploads/2019/06/bentota-hotels-category-744x653-1.jpg" />
                      </div>
                  </div>
                  <div class="flex w-1/3 flex-wrap transition duration-300 ease-in-out hover:scale-110">
                      <div class="w-full p-1 md:p-2">
                          <img
                              alt="gallery"
                              class="block h-full w-full rounded-lg object-cover object-center"
                              src="https://www.jetwinghotels.com/jetwinglake/wp-content/uploads/sites/8/2017/11/lake-Gallery2.jpg" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </div>
    );
  }
}

export default home;