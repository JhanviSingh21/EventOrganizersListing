import { Search } from "@mui/icons-material";
import { InputAdornment, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app_config from "../../config";
import "../../stylesheets/browseorg.css";
const BrowseSlides = () => {
  const [datalist, setDatalist] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "org/getall").then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log(data);
          setDatalist(data);
          setLoading(false);
        });
      }
    });
  };

  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const displayOrganizers = () => {
    if (!loading) {
      return datalist.map(
        ({
          firstname,
          lastname,
          organisationname,
          heroimage,
          registeredaddress,
          state,
          city,
          postalcode,
          description,
          email,
          link,
          _id,
        }) => (
          <div key={_id} class="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="org-image" style={{backgroundImage : `url("${url}${heroimage}")`}}>
          
                  </div>
                  <h4 className="mt-3">
                    {organisationname}
                  </h4>
                  <Button
                    onClick={(e) => navigate("/main/orgdetail/" + _id)}
                    className="mt-3"
                    variant="contained"
                  >
                    Click For Full Details
                  </Button>
                  </div>
              </div>
          </div>
        )
      );
    }
  };

  const displayData = () => {
    if (!loading) {
      return datalist.map(
        ({
          firstname,
          lastname,
          organisationname,
          heroimage,
          registeredaddress,
          state,
          city,
          postalcode,
          description,
          email,
          link,
          _id,
        }) => (
          <div key={_id} class="col-md-12 col-lg-4 mb-4 mb-lg-0 ">
            <div class="container cont" id="container">
              <div class="card-wrapper">
                <div class="arrow" id="previous">
                  <i class="fa fa-arrow-left" aria-hidden="true"></i>
                </div>
                <div class="arrow" id="next">
                  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </div>
                <div class="main-window" id="main-window">
                  <div class="user-image">
                    <NavLink className="ripple" to={"/main/pptviewer/" + _id}>
                      <img
                        src={url + heroimage}
                        class="card-img-top"
                        alt="Laptop"
                      />
                    </NavLink>

                    {/* <div class='add-button'>+</div> */}
                    <p class="small">
                      <a href="#!" class="text-muted">
                        {link}
                      </a>
                    </p>
                    <h5 class="mb-0 username">{organisationname}</h5>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>
        )
      );
    }
  };

  const applyfilter = () => {};

  return (
    <div>
      <div style={{ background: "#eee", height: "200vh" }}>
        <img
          class="banner"
          src="  https://nasscom.in/sites/default/files/Landing_page_banner/events_listing.jpg"
        ></img>
        <div class=" row ground">
          <div class="col-md-5 mb-3">
            <div class="form-outline form">
              {/* <label for="state" > </label> */}

              {/* <input class="applyNowBtn" id="event-search" type="submit" name="searchevent" value="Search"></input> */}

              {/* <a href="#" class="adSearchLink">Advance Search </a>   */}
            </div>
          </div>
        </div>
        {/* <header style={styles.header}> */}

        {/* <Typography className="text-center text-black" variant="h5">
          Neephur
        </Typography> */}
        {/* <div> */}

        {/* <Typography className="text-center text-black" variant="h2">
          No Code Website List 
        </Typography>

        <div className="input-group mt-5">

          <input
            className="form-control"
            value={filter}
            label="Search Here"
            onChange={(e) => setFilter(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "active.active", mr: 1, my: 0.5 }} />
                </InputAdornment>
              ),
            }}
          />
          
          <button
            className="btn btn-primary"
            onClick={applyfilter}
            type="submit"
          >
            Search
          </button>
        </div> */}
        {/* </div> */}
        {/* </header> */}
        <div className="col-md-10 mx-auto">
          <div className="row">{displayOrganizers()}</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    // background:
    //   "linear-gradient(to right, #0000009b, #000000ad), url(http://localhost:5000/images/browse_back.jpg)",
    padding: "2rem",
    textShadow: "2px 2px 3px #0000005c",
    height: "300px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};

export default BrowseSlides;
