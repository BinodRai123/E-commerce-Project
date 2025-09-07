import { useReducer } from "react";
import { useSelector } from "react-redux";

const UserDetailForm = () => {
  const {user} = useSelector(() => useReducer)

  return (
    <>
      <div className="mb-6 flex justify-end text-gray-600">
        Welcome! Md Rimel
      </div>
      <div>
        <h2 className="mb-6 text-2xl font-bold">Edit Your Profile</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormGroup label="First Name" placeholder="Md" />
          <FormGroup label="Last Name" placeholder="Rimel" />
          <FormGroup label="Email" placeholder="rimel111@gmail.com" />
          <FormGroup
            label="Address"
            placeholder="Kingston, 5236, United State"
          />
        </div>
        <div className="mt-8">
          <h3 className="mb-4 text-xl font-bold">Password Changes</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormGroup label="Current Password" type="password" />
            <div /> {/* Spacer for layout */}
            <FormGroup label="New Password" type="password" />
            <div /> {/* Spacer for layout */}
            <FormGroup label="Confirm New Password" type="password" />
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-end gap-4 md:flex-row">
          <button
            type="button"
            className="outline-none px-6 py-3 font-medium text-red-500 cursor-pointer "
          >
            Cancel
          </button>
          <button type="submit" className="button text-xl rounded">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default UserDetailForm;

const FormGroup = ({ label, placeholder, type = "text" }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-semibold text-gray-700">{label}</label>
      <input
        type={type}
        className="contact-account-input"
        placeholder={placeholder}
      />
    </div>
  );
};
