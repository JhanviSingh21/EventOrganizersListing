import { Search } from "@mui/icons-material";
import { InputAdornment, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app_config from "../../config";
import "../../stylesheets/review.css";
const BrowseSlides = () => {
  const [dataList, setDatalist] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = app_config.api_url;
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "review/getall").then((res) => {
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



  const disData = () => {
    if (!loading) {
      return dataList.map(
        ({
           description,
          _id,
        }) => (
          <div key={_id} class="col-md-12 col-lg-4 mb-4 mb-lg-0 ">
          <div class='container cont' id='container'>

  <div class='card-wrapper'>
    <div class='arrow' id='previous'><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
    <div class='arrow' id='next'><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
    <div class='main-window' id='main-window'>

 
        {/* <div class='add-button'>+</div> */}
        <p class="small">
                    <a href="#!" class="text-muted">
                      {description}
                    </a>
                  </p>

      </div>
        
      {/* <Button onClick={e=>navigate("/main/orgdetail/" + _id)} variant="contained">Click For Full Details</Button> */}
                
      </div>
     </div>
       </div>
    //   </div>
  
        )
      );
    }
  };

  const applyfilter = () => {};

  return (
    <div >
              
     
    <div style={{ background: "#eee", height: "200vh" }}>
    <div class='card-wrapper'>
    <div class='arrow' id='previous'><i class="fa fa-arrow-left" aria-hidden="true"></i></div>
    <div class='arrow' id='next'><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
    <div class='main-window' id='main-window'>
    {/* <img class="banner" src="  https://nasscom.in/sites/default/files/Landing_page_banner/events_listing.jpg"></img> */}
    
{/* <a href="#" class="adSearchLink">Advance Search </a>   */}
<h1>All Reviews</h1>

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
      <div className="container">
        <div className="row">{disData()}</div>
      </div>
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
