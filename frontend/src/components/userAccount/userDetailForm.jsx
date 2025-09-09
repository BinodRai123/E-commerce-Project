import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../../Store/Actions/userAction";

const UserDetailForm = () => {
  const { user } = useSelector((state) => state.userReducer);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const dispatch = useDispatch();
  const { register, handleSubmit,reset } = useForm({
    defaultValues: {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      password: user?.password,
      address: user?.address || "",
      newPassword: "",
      updatedPassword: "",
    },
  });


   const handleUpdateForm = (formData) => {
    if (formData.newPassword && formData.newPassword !== formData.updatedPassword) {
      setPasswordMatchError(true);
      return;
    }

    setPasswordMatchError(false);

    const updatedUser = {
      ...formData,
      password: formData.newPassword ? formData.newPassword : formData.password,
    };

    // Removing temporary fields before sending to json-server
    delete updatedUser.newPassword;
    delete updatedUser.updatedPassword;

    dispatch(asyncUpdateUser(updatedUser));

    reset(updatedUser);
  }

  return (
    <>
      <div className="mb-6 flex justify-end text-gray-600">
        Welcome! {user.name}
      </div>

      <form onSubmit={handleSubmit(handleUpdateForm)}>
        <h2 className="mb-6 text-2xl font-bold">Edit Your Profile</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <FormGroup
            label="First Name"
            register={register}
            name={"name"}
            placeholder="Enter First Name"
            type={"text"}
          />
          <FormGroup
            label="Last Name"
            register={register}
            name={"last-name"}
            placeholder="Enter Last Name"
            type={"text"}
          />
          <FormGroup
            label="Email"
            register={register}
            name={"email"}
            placeholder="Example@gmail.com"
            type={"email"}
          />
          <FormGroup
            label="Address"
            register={register}
            name={"address"}
            placeholder="Address"
            type={"text"}
          />
        </div>

        <div className="mt-8">
          <h3 className="mb-4 text-xl font-bold">Password Changes</h3>
          <div className="grid gap-6 md:grid-cols-2 grid-rows-3 grid-flow-col">
            <FormGroup
              register={register}
              name={"password"}
              label="Current Password"
              type="password"
            />

            <FormGroup
              register={register}
              name={"newPassword"}
              label="New Password"
              type="password"
            />

            <FormGroup
              register={register}
              name={"updatedPassword"}
              label="Confirm New Password"
              type="password"
            />
          </div>
          {passwordMatchError && (
            <p className="text-red-700 mt-5">Passwords do not match!</p>
          )}
        </div>
        <div className="mt-10 flex flex-col items-center justify-end gap-4 md:flex-row">
          <button
            type="button"
            className="outline-none px-6 py-3 font-medium text-red-500 cursor-pointer "
          >
            Cancel
          </button>
          <input
            className="button text-xl rounded"
            type="submit"
            value={"Save Changes"}
          />
        </div>
      </form>
    </>
  );
};

export default UserDetailForm;

const FormGroup = ({ label, placeholder, type, register, name }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";
  const currentPassword = label === "Current Password";

  return (
    <div className="flex flex-col relative">
      <label className="mb-2 font-semibold text-gray-700">{label}</label>
      <input
        {...register(name)}
        type={isPasswordField && !showPassword ? "password" : "text"}
        className="contact-account-input"
        placeholder={placeholder}
        readOnly={currentPassword && true}
      />
      {/* watch password function */}
      {isPasswordField && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-10 text-gray-500 border-0"
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      )}
    </div>
  );
};
