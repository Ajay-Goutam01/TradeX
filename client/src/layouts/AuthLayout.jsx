function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;