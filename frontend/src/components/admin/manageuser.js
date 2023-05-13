import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import app_config from "../../config";
import UserUpdate from "./userupdate";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const ManagePortfolio = () => {
  const url = app_config.api_url;

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});

  const fetchData = () => {
    fetch(url + 'user/getall')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUserData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = (id) => {
    fetch(url + "user/delete/" + id, { method: "DELETE" })
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
      return <UserUpdate formdata={formData}></UserUpdate>;
    }
  };

  const displayUser = () => {
    if (!loading) {
      return userData.map((user) => (
        <tr>
          <td>{user.fullname}</td>
          <td>{user.email}</td>

          <td>
<button
              onClick={(e) => deleteData(user._id)}
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
    <Container>
      <h1 className="text-center">Manage User</h1>
      <hr />

      <table className="table table-dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{displayUser()}</tbody>
      </table>
      <div className="mt-5">{displayUpdateForm()}</div>
    </Container>
  );
};

export default ManagePortfolio;