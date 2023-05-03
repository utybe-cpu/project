import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import './UserTable.css'

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [usersPerPage, setUsersPerPage] = useState(5);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(
        `https://randomuser.me/api/?results=50`
      );
      setUsers(response.data.results);
    };
    fetchUsers();
  }, []);

  const usersVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(usersVisited, usersVisited + usersPerPage)
    .map((user) => (
      <tr key={user.login.uuid}>
        <td>
          <Link
            to={`/user/${user.login.uuid}`}
            onClick={() => dispatch({ type: "SET_USER", payload: user })}
          >
            {`${user.name.title} ${user.name.first} ${user.name.last}`}
          </Link>
        </td>
        <td>{user.location.country}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
      </tr>
    ));

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleSelect = (e) => {
    setUsersPerPage(parseInt(e.target.value));
    setPageNumber(0);
  };

  return (
    <div>
      <h2 className="title">User List</h2>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Country</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>{displayUsers}</tbody>
      </table>
      <div className="pagination">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationButtons"}
          previousLinkClassName={"previousButton"}
          nextLinkClassName={"nextButton"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
        <select className="select" onChange={handleSelect}>
          <option value="5">Show 5</option>
          <option value="10">Show 10</option>
          <option value="25">Show 25</option>
          <option value="50">Show 50</option>
        </select>
      </div>
    </div>
  );
};

export default UserTable;