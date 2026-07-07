import useAuth from "../hooks/useAuth";

function Profile() {
  const { user } = useAuth();

  return (
    <div className="mx-auto max-w-4xl">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <div className="flex items-center gap-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-4xl font-bold text-white">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <div>
            <h1 className="text-4xl font-bold">{user?.name}</h1>

            <p className="mt-2 text-slate-500">{user?.email}</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Full Name</p>

            <h3 className="mt-2 text-xl font-semibold">{user?.name}</h3>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Email Address</p>

            <h3 className="mt-2 text-xl font-semibold">{user?.email}</h3>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Role</p>

            <h3 className="mt-2 text-xl font-semibold">
              {user?.role || "Customer"}
            </h3>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Account Status</p>

            <h3 className="mt-2 text-xl font-semibold text-green-600">
              Active
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
