import { useEffect, useState } from "react";
import app_config from "../../config";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
//import "../../stylesheets/browseplatform.css";
import Update from "./update";

const ManageOrg = () => {
  const url = app_config.api_url;

  const [orgData, setOrgData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});

  const fetchData = () => {
    fetch(url + 'org/getall')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setOrgData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = (id) => {
    fetch(url + "org/delete/" + id, { method: "DELETE" })
    .then((res) => {
      console.log(res.status);
      fetchData();
    });
  };

  const updateData = (form) => {
    setShowForm(true);
    setFormData(form);
  };

  const displayUpdateForm = () => {
    if (showForm) {
      return 
     <Update formdata={formData}></Update>;
    }
  };

  const displayOrg = () => {
    if (!loading) {
      return orgData.map((org) => (
        <tr>
          <td>{org.organisationname}</td>
          <td>{org.email}</td>
          <td>
            <button
              onClick={(e) => deleteData(org._id)}
              className="btn btn-danger"
            >
              {/* <i class="fa fa-trash" aria-hidden="true"></i> */}
              < DeleteForeverIcon color="dark" />
            </button>
          </td>
          <td>
            <button className="btn btn-primary" onClick={updateData}>
              {/* <i class="fas fa-pen"></i> */}
              < EditIcon color="dark" />
            </button>
          </td>
        </tr>
      ));
    }
  };

  return (
     <div>
      <h1 className="text-center">Manage Organisation</h1>
      <hr />
      <table class="table align-middle mb-0 bg-white">
  <thead class="bg-light">
    <tr>
      <th>Orgamistion Name</th>
      <th>Email</th>
      {/* <th>Organisation Name</th> */}
    </tr>
  </thead>
  <tbody>
    {/* <tr>
      <td>
     
          <div class="ms-3">
            <p class="fw-bold mb-1">John Doe</p>

          </div>
        
      </td>
      <td><p class="text-muted mb-0">john.doe@gmail.com</p></td>
      <td>

        <p class="text-muted mb-0">IT department</p>
      </td>
       */}
      {/* <td>
        <button type="button" class="btn btn-link btn-sm btn-rounded">
          Delete
        </button>
      </td>
      <td>
        <button type="button" class="btn btn-link btn-sm btn-rounded">
          Edit
        </button>
      </td> */}
    {/* </tr> */}
    
       
  </tbody>
  <tbody>{displayOrg()}</tbody>
</table>
      <div className="mt-5">{displayUpdateForm()}</div>
     </div>
  );
};

export default ManageOrg;
