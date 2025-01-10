import { axiosInstance } from "../../utils/baseurl";
import { notifyError, notifySuccess } from "../../utils/toastmessage";

/**
 * Common delete operation function
 * @param {string} url - API endpoint for delete operation
 * @param {string|number} id - ID of the resource to be deleted
 * @param {function} refresh - Callback function to refresh data after deletion
 */
const deleteOperation = async (url, id) => {
  try {
    const response = await axiosInstance.delete(`/${url}/${id}`);
    notifySuccess(response.data.message || "Deleted successfully");
  } catch (error) {
    notifyError(error.response.data.error); // Backend-provided error message
  }
};

export default deleteOperation;
