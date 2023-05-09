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
      <div class="w-100">
          <img src="https://plazahollandi.com/wp-content/uploads/2020/09/bunches-of-tulips-scaled.jpg" alt="Jetwing Colombo Seven" />
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
              <div class="max-w-[80%] mx-auto px-5 py-5 lg:px-32 lg:pt-16">
                  <img src="https://media.istockphoto.com/id/1440711298/vector/white-lily-flower-vector-illustration.jpg?s=612x612&w=0&k=20&c=di2tNrJwMGXyQsbdpAPOpvyNpwekOD1w53i9mDK5fmU=" alt="Events" class="h-[25rem] w-[80rem] pr-8 hover:animate-pulse" />
              </div>
          </div>
      </section>
      {/* events and meetings */}
      <section class="">
          <div class="max-w-[90%] mx-auto px-5 pb-5 lg:px-32 lg:pt-12">
              <img src="https://www.1800flowers.com/blog/wp-content/uploads/2021/05/Birthday-Flowers-Colors.jpg" alt="Events" />
          </div>
          <div class="text-center bg-white text-gray-800 px-6">
              <h1 class="text-5xl text-blue-950 md:text-6xl xl:text-3xl font-bold tracking-tight uppercase drop-shadow-md ">Our Services<br />
              </h1>
          </div>
      </section>
      <div class=" container mx-auto px-5 py-2 lg:px-32 lg:pt-12 mb-5 grid grid-cols-3 content-center" >
          <div className="shadow-xl card w-96 bg-base-100 hover:scale-105">
            <figure><img src="https://i0.wp.com/www.figandbloom.com/wp-content/uploads/2023/01/F_B_Blog_Pretty-in-Pink_V22.jpg?fit=860%2C860&ssl=1" alt="Shoes" class="h-72" /></figure>
            <div className="card-body">
              <h2 className="justify-center pb-2 text-2xl card-title">Jetwing Sea</h2>
              <p class="text-center">Born out of the historic splendour of Jetwing Seashells from 1978, our home has since grown into a symbol of modern elegance among Sri Lankan beach resorts. The enchantment of this nostalgic coastline has stayed true to our legendary family values.</p>
            </div>
          </div>
          <div className="shadow-xl card w-96 bg-base-100 hover:scale-105">
            <figure><img src="https://wallpapershome.com/images/pages/pic_h/6498.jpg" alt="Shoes" class="h-72" /></figure>
            <div className="card-body">
              <h2 className="justify-center pb-2 text-2xl card-title">Jetwing Blue</h2>
              <p class="text-center">It all began here – at our original home of Sri Lankan hospitality. The home in which we welcomed the world as part of our family, and treated the world as one of our own</p>
            </div>
          </div>
          <div className="shadow-xl card w-96 bg-base-100 hover:scale-105">
            <figure><img src="https://wallpapershome.com/images/pages/pic_h/336.jpg" alt="Shoes" class="h-72" /></figure>
            <div className="card-body">
              <h2 className="justify-center pb-2 text-2xl card-title">Jetwing Colombo Seven</h2>
              <p class="text-center">Built upon the land where our founder once resided, this exotic metropolis we call home is where our legendary hospitality shines the brightest – a privilege we extend to the world, as we take you in with open arms.</p>
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