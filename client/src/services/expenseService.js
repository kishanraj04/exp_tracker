import axios from "axios";

const API = "http://localhost:5000/api";

export const getExpenses = (params) =>
  axios.get(`${API}/expenses`, { params });

export const createExpense = (data) =>
  axios.post(`${API}/expenses`, data);

export const updateExpense = (id, data) =>
  axios.put(`${API}/expenses/${id}`, data);

export const deleteExpense = (id) =>
  axios.delete(`${API}/expenses/${id}`);

export const getSummary = () =>
  axios.get(`${API}/expenses/summary`);