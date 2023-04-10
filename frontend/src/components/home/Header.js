const Header = () => {
  return (
    <div>
      <p className="text-center pt-3 pb-3 h1">Eats By Jeets</p>
      <div className="d-flex justify-content-evenly">
        <i className="bi bi-list" role="button"></i>
        <i className="bi bi-house-door-fill" role="button"></i>
        <i className="bi bi-person-fill" role="button"></i>
      </div>
    </div>
  );
};

export default Header;
