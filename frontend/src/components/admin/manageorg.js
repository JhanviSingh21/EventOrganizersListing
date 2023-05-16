import { useEffect, useState } from "react";
import app_config from "../../config";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
//import "../../stylesheets/browseplatform.css";
import Update from "./update";

const ManageOrg = () => {
  const url = app_config.api_url;

  const [orgData, setOrgData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});

  const [selOrg, setSelOrg] = useState(null);

  const fetchData = () => {
    fetch(url + "org/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrgData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = (id) => {
    fetch(url + "org/delete/" + id, { method: "DELETE" }).then((res) => {
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
      return <Update formdata={formData} />;
    }
  };

  const displayOrg = () => {
    if (!loading) {
      return orgData.map((org) => (
        <tr>
          <td>{org.organisationname}</td>
          <td>{org.registeredaddress}</td>
          <td>
            <button
              onClick={(e) => deleteData(org._id)}
              className="btn btn-danger"
            >
              <DeleteForeverIcon color="dark" />
            </button>
          </td>
          <td>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#edit-org"
              onClick={(e) => setSelOrg(org)}
            >
              <EditIcon color="dark" />
            </button>
          </td>
        </tr>
      ));
    }
  };

  return (
    <div>
      <div
        class="modal  fade"
        id="edit-org"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Edit Event Organizer Details
              </h1>
              <button
                type="button"
                class="btn-close btn btn-danger"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                x
              </button>
            </div>
            <div class="modal-body">
              {selOrg !== null && <Update formdata={selOrg} />}
            </div>
            
          </div>
        </div>
      </div>

      <div className="col-md-10 mx-auto">
        <h1 className="text-center">Manage Organisation</h1>
        <hr />
        <table class="table align-middle mb-0 bg-white">
          <thead class="bg-light">
            <tr>
              <th>Organizer Name</th>
              <th>Address</th>
              <th colSpan={2}>Actions</th>
              {/* <th>Organisation Name</th> */}
            </tr>
          </thead>
          <tbody>{displayOrg()}</tbody>
        </table>
        <div className="mt-5">{displayUpdateForm()}</div>
      </div>
    </div>
  );
};

export default ManageOrg;
