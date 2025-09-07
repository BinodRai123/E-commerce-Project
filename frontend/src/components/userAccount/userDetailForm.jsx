import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const UserDetailForm = () => {
  const { user } = useSelector((state) => state.userReducer);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: user?.id,
      name: user?.name,
      email: user?.email,
      password: user?.password,
    },
  });

  return (
    <>
      <div className="mb-6 flex justify-end text-gray-600">
        Welcome! {user.name}
      </div>

      <div>
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormGroup
              register={register}
              name={"password"}
              label="Current Password"
              type="password"
            />
            <div /> {/* Spacer for layout */}
            <FormGroup
              register={register}
              name={"changePassword"}
              label="New Password"
              type="password"
            />
            <div /> {/* Spacer for layout */}
            <FormGroup
              register={register}
              name={"updatedPassword"}
              label="Confirm New Password"
              type="password"
            />
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

const FormGroup = ({ label, placeholder, type, register, name }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-2 font-semibold text-gray-700">{label}</label>
      <input
        {...register(name)}
        type={type}
        className="contact-account-input"
        placeholder={placeholder}
      />
    </div>
  );
};
