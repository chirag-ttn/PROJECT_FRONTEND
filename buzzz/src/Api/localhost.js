import axios from "axios";

const token = localStorage.getItem("token") || null;

export default axios.create({
    baseURL:"http://localhost:4444",
    headers : {"Authorization":token}
}
)