import { toast } from "react-toastify";

export const formValidator = ({
  amount,
  category,
  date,
}) => {
  if (
    !amount ||
    !category?.trim() ||
    !date
  ) {
    toast.error("Please fill all required fields");
    return false;
  }

  if (Number(amount) <= 0) {
    toast.error("Amount must be greater than 0");
    return false;
  }

  const selectedDate = new Date(date);
  selectedDate.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate > today) {
    toast.error("Future dates are not allowed");
    return false;
  }

  return true;
};