import React from "react";
import "../../stylesheets/home.css";
import web from "../../images/img3.png";
const Home = () => {
  return (
    <div className="head">
      <section id="header" className="d-flex align-items-center first">
        <div class="container-fluid nav_bg">
          <div class="row">
            <div class="col-10 mx-auto">
              <div class="row">
                <div class="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Search Different
                    <strong class="brand-name"> Event</strong>
                    <strong class="brand-names"> Organizers </strong>
                  </h1>
                  {/* <h2 class="my-3">
                We undertake the responsibility to open these parachutes{" "}
              </h2> */}
                  <div class="mt-3">
                    <a href="/main/browseorg" className=" btn-get-started">
                      Search
                    </a>

                    {/* <NavLink to="/" class="btn-get-started">Get Started</NavLink> */}
                  </div>
                </div>
                <div class="col-lg-5 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    class="img-fluid animated"
                    alt="home img"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main class="main">
        <p class="para">Services</p>
        <section class="card-area">
          <section class="card-section">
            <div class="card cardss">
              <div class="flip-card">
                <div class="flip-card__container">
                  <div class="card-front">
                    <div class="card-front__tp card-front__tp--city">
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xlinkHref="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 60 60"
                        class="card-front__icon"
                      >
                        <g>
                          <path d="M49.7,22c-1.1,0-2,0.9-2,2v32.2c0,1.1,0.9,2,2,2s2-0.9,2-2V24C51.7,22.9,50.8,22,49.7,22z" />
                          <path
                            d="M13,29.5c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3h20.8c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3h20.8c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7
                                       V7.1h24.8v15.3c0,1.1,0.9,2,2,2s2-0.9,2-2V5.1c0-1.1-0.9-2-2-2H3.7c-1.1,0-2,0.9-2,2v51c0,1.1,0.9,2,2,2s2-0.9,2-2V36.5H13
                                       c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3H13z"
                          />
                          <path
                            d="M58,11.9c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0
                                       c0-0.1-0.1-0.1-0.1-0.2c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.2-0.1
                                       c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.2,0c0,0,0,0,0,0
                                       c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0.1l-12.6,7.8
                                       c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2
                                       c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0v5.4H22.1
                                       c-1.1,0-2,0.9-2,2v28.9c0,1.1,0.9,2,2,2s2-0.9,2-2V29.3h17.3v26.9c0,1.1,0.9,2,2,2s2-0.9,2-2V21l8.6-5.3v40.5c0,1.1,0.9,2,2,2
                                       s2-0.9,2-2V12.1C58,12,58,12,58,11.9z"
                          />
                          <path d="M28,31L28,31c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S29.1,31,28,31z" />
                          <path d="M33.5,31L33.5,31c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S34.6,31,33.5,31z" />
                          <path d="M28,36L28,36c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S29.1,36,28,36z" />
                          <path d="M33.5,36L33.5,36c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S34.6,36,33.5,36z" />
                        </g>
                      </svg>

                      <h2 class="card-front__heading">Corporate Event</h2>
                      {/* <p class="card-front__text-price">
                                From £29
                            </p> */}
                    </div>

                    <div class="card-front__bt">
                      <p class="card-front__text-view card-front__text-view--city">
                        View me
                      </p>
                    </div>
                  </div>
                  <div class="card-back">
                    {/* <video class="video__container" autoplay muted loop>
                                    <source class="video__media" src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761" type="video/mp4"/>
                                </video> */}
                    <div class="img__container">
                      <img
                        class="img__media"
                        src="https://indiaeventplanner.com/files/resized/c48c01e3-6bb8-4653-ad24-80bdac49aae5/300;162;207c03397957d74494803f0ff6a39d523c073260.jpg"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>

              <div class="inside-page">
                <div class="inside-page__container">
                  <h3 class="inside-page__heading inside-page__heading--city">
                    For Corporates Management
                  </h3>
                  <p class="inside-page__text">
                    As cities never sleep, there are always something going on,
                    no matter what time!
                  </p>
                  {/* <a href="#" class="inside-page__btn inside-page__btn--city">View deals</a> */}
                </div>
              </div>
            </div>
          </section>

          <section class="card-section">
            <div class="card cardss">
              <div class="flip-card">
                <div class="flip-card__container">
                  <div class="card-front">
                    <div class="card-front__tp card-front__tp--ski">
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xml="http://www.w3.org/2000/svg"
                        xlinkHref="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 60 60"
                        class="card-front__icon"
                      >
                        <g>
                          <path
                            d="M58.8,54.5L38.5,19.3c-0.4-0.6-1-1-1.7-1s-1.4,0.4-1.7,1L14.8,54.5c-0.4,0.6-0.4,1.4,0,2c0.4,0.6,1,1,1.7,1h40.6
                                       c0.7,0,1.4-0.4,1.7-1C59.2,55.9,59.2,55.1,58.8,54.5z M36.8,24.3l5.8,10c-0.5-0.2-1.1-0.3-1.7-0.3c-2.5,0-3.7,1.5-4.6,2.5
                                       c-0.7,0.9-1,1.1-1.5,1.1s-0.8-0.2-1.5-1.1c-0.6-0.7-1.3-1.5-2.4-2.1L36.8,24.3z M20,53.5l8.9-15.4c0.5,0,0.7,0.3,1.4,1.1
                                       c0.8,1,2.1,2.5,4.6,2.5s3.7-1.5,4.6-2.5c0.7-0.9,1-1.1,1.5-1.1c0.5,0,0.8,0.2,1.5,1.1c0.8,1,2.1,2.5,4.5,2.5l6.8,11.8H20z"
                          />
                          <path
                            d="M14.7,51.5c1.1,0,2-0.9,2-2s-0.9-2-2-2H6.4l9.1-15.7c0.6,0.6,1.5,1.3,2.9,1.3c1.8,0,2.8-1.2,3.3-1.8
                                       c0.1-0.1,0.2-0.2,0.3-0.3c0.1,0.1,0.2,0.2,0.3,0.3c0.5,0.6,1.5,1.8,3.3,1.8c1.1,0,2-0.9,2-2c0-1.1-0.9-2-1.9-2
                                       c-0.1-0.1-0.2-0.2-0.3-0.4c-0.5-0.6-1.5-1.8-3.3-1.8c-1.8,0-2.8,1.2-3.3,1.8c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1-0.1-0.2-0.2-0.3-0.3
                                       c-0.1-0.2-0.3-0.4-0.5-0.6l5.7-9.9l3.8,6.6c0.6,1,1.8,1.3,2.7,0.7c1-0.6,1.3-1.8,0.7-2.7L25,13.2c-0.4-0.6-1-1-1.7-1
                                       s-1.4,0.4-1.7,1l-8.4,14.5c-0.1,0.1-0.2,0.3-0.3,0.4L1.2,48.5c0,0,0,0.1,0,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2
                                       c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2C1,50,1,50,1,50.1
                                       c0,0.1,0,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1
                                       c0.1,0,0.1,0.1,0.2,0.1c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0.1,0,0.1,0c0.1,0,0.3,0.1,0.5,0.1c0,0,0,0,0,0
                                       c0,0,0,0,0,0c0,0,0,0,0,0H14.7z"
                          />
                          <path
                            d="M40.7,12.3h3.1l-2.2,2.2c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l2.2-2.2v3.1
                                       c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5v-3.1l2.2,2.2c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1l-2.2-2.2h3.1
                                       c0.8,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5h-3.1l2.2-2.2c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0L49,7.2V4
                                       c0-0.8-0.7-1.5-1.5-1.5S46,3.2,46,4v3.1l-2.2-2.2c-0.6-0.6-1.5-0.6-2.1,0c-0.6,0.6-0.6,1.5,0,2.1l2.2,2.2h-3.1
                                       c-0.8,0-1.5,0.7-1.5,1.5S39.9,12.3,40.7,12.3z"
                          />
                        </g>
                      </svg>
                      <h2 class="card-front__heading">PR Management</h2>
                      {/* <p class="card-front__text-price">
                                                   From £199
                                               </p> */}
                    </div>

                    <div class="card-front__bt">
                      <p class="card-front__text-view card-front__text-view--ski">
                        View me
                      </p>
                    </div>
                  </div>

                  <div class="card-back">
                    {/* <video class="video__container" autoplay muted loop>
                                    <source class="video__media" src="https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611" type="video/mp4"/>
                                </video> */}
                    <div class="img__container">
                      <img
                        class="img__media"
                        src="https://indiaeventplanner.com/files/resized/f71382db-7ae5-486f-a3fc-f1edc436ee93/300;162;145c9122b646c2495d6154052a3c320282c8dd32.jpg"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>

              <div class="inside-page">
                <div class="inside-page__container">
                  <h3 class="inside-page__heading inside-page__heading--ski">
                    For PR Management
                  </h3>
                  <p class="inside-page__text">
                    Love snow? Why not take up exciting ski-in sessions and hit
                    the slope?
                  </p>
                  {/* <a href="#" class="inside-page__btn inside-page__btn--ski">View deals</a> */}
                </div>
              </div>
            </div>
          </section>

          <section class="card-section">
            <div class="card cardss">
              <div class="flip-card">
                <div class="flip-card__container">
                  <div class="card-front">
                    <div class="card-front__tp card-front__tp--beach">
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xml="http://www.w3.org/2000/svg"
                        xlinkHref="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 60 60"
                        class="card-front__icon"
                      >
                        <path
                          d="M57.2,28h-7.4c-0.4-4-2-7.7-4.4-10.6l3.2-3.2c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0l-3.2,3.2c-3-2.4-6.6-4-10.6-4.4V2.8
                                   c0-1.1-0.9-2-2-2s-2,0.9-2,2v7.4c-4,0.4-7.7,2-10.6,4.4l-3.2-3.2c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l3.2,3.2
                                   c-2.4,3-4,6.6-4.4,10.6H2.8c-1.1,0-2,0.9-2,2s0.9,2,2,2h7.4c0.4,4,2,7.7,4.4,10.6l-3.2,3.2c-0.8,0.8-0.8,2,0,2.8
                                   c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6l3.2-3.2c3,2.4,6.6,4,10.6,4.4v7.4c0,1.1,0.9,2,2,2s2-0.9,2-2v-7.4c4-0.4,7.7-2,10.6-4.4
                                   l3.2,3.2c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8l-3.2-3.2c2.4-3,4-6.6,4.4-10.6h7.4c1.1,0,2-0.9,2-2
                                   S58.3,28,57.2,28z M30,45.9c-8.8,0-15.9-7.2-15.9-15.9c0-8.8,7.2-15.9,15.9-15.9c8.8,0,15.9,7.2,15.9,15.9
                                   C45.9,38.8,38.8,45.9,30,45.9z"
                        />
                      </svg>

                      <h2 class="card-front__heading">Weddings</h2>
                      {/* <p class="card-front__text-price">
                                                   From £229
                                               </p> */}
                    </div>

                    <div class="card-front__bt">
                      <p class="card-front__text-view card-front__text-view--beach">
                        View me
                      </p>
                    </div>
                  </div>
                  <div class="card-back">
                    {/* <video class="video__container" autoplay muted loop>
                                    <source class="video__media" src="https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761" type="video/mp4"/>
                                </video> */}
                    <div class="img__container">
                      <img
                        class="img__media"
                        src="https://indiaeventplanner.com/files/resized/3ae4eeeb-9539-4eb3-9c90-90f6a92582f4/300;162;ebf2450f6195355c815fe92bf655c6b4cee79c93.jpg"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>

              <div class="inside-page">
                <div class="inside-page__container">
                  <h3 class="inside-page__heading inside-page__heading--beach">
                    For Weddings
                  </h3>
                  <p class="inside-page__text">
                    Relax and get sun-kissed tan in the sea or take up surfting
                    for an adventure!
                  </p>
                  {/* <a href="#" class="inside-page__btn inside-page__btn--beach">View deals</a> */}
                </div>
              </div>
            </div>
          </section>

          <section class="card-section">
            <div class="card cardss ">
              <div class="flip-card">
                <div class="flip-card__container">
                  <div class="card-front">
                    <div class="card-front__tp card-front__tp--camping">
                      <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xlinkHref="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 60 60"
                        class="card-front__icon"
                      >
                        <path
                          d="M57,52.1c0-0.4-0.1-0.7-0.3-1.1l-6.3-10.8L32.4,9l2.3-4c0.6-1,0.2-2.2-0.7-2.7c-1-0.6-2.2-0.2-2.7,0.7L30,5.2L28.7,3
                                   c-0.6-1-1.8-1.3-2.7-0.7c-1,0.6-1.3,1.8-0.7,2.7l2.3,4l-18,31.1L3.3,51C3.1,51.3,3,51.7,3,52.1c0,0.4,0.1,0.7,0.3,1
                                   c0.4,0.6,1,1,1.7,1h50c0.7,0,1.4-0.4,1.7-1C56.9,52.8,57,52.4,57,52.1z M34.7,49.8C34.2,50,32.1,50,30,50s-4.2,0-4.7-0.2
                                   c-0.2-0.5-0.2-2.1-0.2-3.6l0-4.3c0-2.7,2.2-4.9,4.9-4.9s4.9,2.2,4.9,4.9l0,4.3C34.9,47.7,34.9,49.3,34.7,49.8z M13.1,42.1L28,16.5
                                   v16.7c-3.9,0.9-6.9,4.4-6.9,8.6l0,4.3c0,1.7,0,2.9,0.2,4H8.5L13.1,42.1z M38.7,50.1c0.2-1,0.2-2.3,0.2-4l0-4.3
                                   c0-4.2-2.9-7.7-6.9-8.6V16.5l15,25.7l4.6,7.9H38.7z"
                        />
                      </svg>
                      <h2 class="card-front__heading">Celebrity</h2>
                      {/* <p class="card-front__text-price">
                                                   From £129
                                               </p> */}
                    </div>

                    <div class="card-front__bt">
                      <p class="card-front__text-view card-front__text-view--camping">
                        View me
                      </p>
                    </div>
                  </div>
                  <div class="card-back">
                    {/* <video class="video__container" autoplay muted loop>
                                    <source class="video__media" src="https://player.vimeo.com/external/180185916.sd.mp4?s=c893e4770f87b00e0d6b5a1de138b01b02aaa085&profile_id=164&oauth2_token_id=57447761" type="video/mp4"/>
                                </video> */}
                    <div class="img__container">
                      <img
                        class="img__media"
                        src="https://indiaeventplanner.com/files/resized/e9466279-3339-42db-bb01-d15cebe65d36/300;162;559a210f666732625d4f66214d87f9e9004e1814.jpg"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>

              <div class="inside-page">
                <div class="inside-page__container">
                  <h3 class="inside-page__heading inside-page__heading--camping">
                    For Celebrity Management
                  </h3>
                  <p class="inside-page__text">
                    Get your boots on for some hiking and explore all the
                    beautiful scenery of nature!
                  </p>
                  {/* <a href="#" class="inside-page__btn inside-page__btn--camping">View deals</a> */}
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* <a href="/main/signup" class="inside-page__btn inside-page__btn--camping">Select Your City</a> */}
        <div class="wpb_column vc_column_container vc_col-sm-12">
          <div class="vc_column-inner ">
            <div class="wpb_wrapper">
              <div class="vc_empty_space">
                <span class="vc_empty_space_inner"></span>
              </div>
              <div class="vc_empty_space">
                <span class="vc_empty_space_inner"></span>
              </div>
              <div class="vc_empty_space">
                <span class="vc_empty_space_inner"></span>
              </div>
              <div class="vc_empty_space">
                <span class="vc_empty_space_inner"></span>
              </div>
              <div class="genesisexpo_module_text">
                {/* <h3 ><span class="spans" ><b>Search Events Organisers Near You</b></span></h3> */}
              </div>
              <div class="vc_row wpb_row vc_inner vc_row-fluid">
                <div class="wpb_column vc_column_container vc_col-sm-12">
                  <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                      <div class="wpb_single_image wpb_content_element vc_align_center  vc_custom_1573475673363">
                        {/* <figure class="wpb_wrapper vc_figure">
			<div class="vc_single_image-wrapper   vc_box_border_grey"><img class="vc_single_image-img " src="https://www.kppreventsmarketing.com/wp-content/uploads/2019/11/Rounded-Rectangle-1-copy-5-450x50.png" width="450" height="50" alt="Rounded Rectangle 1 copy 5" title="Rounded Rectangle 1 copy 5"/></div>
		</figure> */}
                        {/* <div class="row">
                <div class="col-md-4 mb-4 div">
                <div class="form-outline">

     <div class="form-item form-type-select form-item-gateway-country"  >
  <label for="state" > </label>
<select name="state" id="state" class="form-control">
<option value="">--Select State--</option>
<option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
</select>
</div>
	</div>
	</div>
	</div> */}
                      </div>

                      {/* <div class="wpb_single_image wpb_content_element vc_align_center">
		
		<figure class="wpb_wrapper vc_figure">
			<a href="/main/example" target="_self" class="vc_single_image-wrapper   vc_box_border_grey"><img class="vc_single_image-img " src="https://www.kppreventsmarketing.com/wp-content/uploads/2019/11/Button-450x50.png" width="350" height="50" alt="Button" title="Button"/></a>
		</figure>
	</div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="vc_empty_space">
                <span class="vc_empty_space_inner"></span>
              </div>
              <div class="vc_empty_space">
                <span class="vc_empty_space_inner"></span>
              </div>
              <div class="vc_empty_space">
                <span class="vc_empty_space_inner"></span>
              </div>
              <div class="vc_empty_space">
                <span class="vc_empty_space_inner"></span>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer">
          <p class="footer-text">&copy; 2022 OrganiseEasy</p>
        </footer>
      </main>
    </div>
  );
};
export default Home;
