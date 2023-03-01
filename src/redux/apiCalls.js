import { updateUsers, setUsers, deleteUser } from "./userRedux";
import axios from "axios";

export const SetUsers = async (dispatch) => {
  const res = await axios.get("https://bytive-backend.onrender.com/api/users");
  dispatch(setUsers(res.data));
};

export const UpdateUsers = async (dispatch, userId, userInfo) => {
  const res = await axios.put(
    `https://bytive-backend.onrender.com/api/users/${userId}`,
    userInfo
  );
  dispatch(updateUsers(res.data));
};

export const DeleteUsers = async (dispatch, userId) => {
  await axios.delete(`https://bytive-backend.onrender.com/api/users/${userId}`);
  dispatch(deleteUser(userId));
};
