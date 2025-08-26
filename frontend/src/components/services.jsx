const Services = ({img, services, add_info}) => {
  return (
    <div className="text-center flex gap-2 flex-col items-center justify-center">
      <img className="h-20" src={`${img}`} alt="" />
      <h1 className="text-xl font-bold uppercase">{services}</h1>
      <span className="text-sm">{add_info}</span>
    </div>
  );
};

export default Services;
