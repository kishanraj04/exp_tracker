import axios from "axios";
import { toast } from "react-toastify";

const API = "http://localhost:5000/api";

export const getExpenses = (params) =>
  axios.get(`${API}/expenses`, { params });

export const createExpense =async (data) =>
  {
    const response = await axios.post(`${API}/expenses`, data);
    console.log(response?.status);
    if(response?.status === 201){
        toast.success("Expense added successfully");
    }
    return response;
  }

export const updateExpense = (id, data) =>
  {
    const response = axios.put(`${API}/expenses/${id}`, data);
    if(response?.status === 200){
        toast.success("Expense updated successfully");
    }
    return response;
  }

export const deleteExpense = (id) =>
  axios.delete(`${API}/expenses/${id}`);

export const getSummary = () =>
  axios.get(`${API}/expenses/summary`);