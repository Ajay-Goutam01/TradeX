function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-4xl font-bold text-slate-900">{title}</h2>

      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;
