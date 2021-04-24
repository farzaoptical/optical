import "./style.css";
import logo from "./لوجو فرزة.jpg";
import data from "./data.json";

function App() {
  const branchesArray = data.المحلات;
  const branches = branchesArray.map((branche) => (
    <div key={branche.الرقم} className="branches-container">
      <i className="fas fa-store"></i>
      <p className="place">{branche["إسـم الـمـحــل"]}</p>
      <p>{branche.العنوان}</p>
      <div className="branches-info">
        <a href={branche["رقم الهاتف"]}>
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href={"tel:" + branche["رقم  الجوال"]}>
          <i className="fas fa-phone"></i>
        </a>
        <a href={branche["لوكيشن الفرع"]}>
          <i className="fas fa-map-marker-alt"></i>
        </a>
      </div>
      <p>{branche["دوام رمضان"]}</p>
    </div>
  ));
  return (
    <div className="root">
      <div className="img-container">
        <img src={logo} alt="logo" />
      </div>
      <main>{branches}</main>
    </div>
  );
}

export default App;
