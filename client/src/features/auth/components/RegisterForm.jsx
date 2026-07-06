import { useForm } from "react-hook-form";

function RegisterForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl space-y-5"
    >
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900">Create Account</h1>

        <p className="mt-2 text-sm text-slate-500">
          Start your paper trading journey.
        </p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Full Name"
          {...register("name", {
            required: "Name is required",
          })}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email Address"
          {...register("email", {
            required: "Email is required",
          })}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div></div>

      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
              message:
                "Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character.",
            },
          })}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-indigo-500"
        />

        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700"
      >
        Create Account
      </button>
    </form>
  );
}

export default RegisterForm;
