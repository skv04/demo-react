import axios from "axios";
import "./styles/addbusrote.css";
import { useEffect, useState } from "react";
import Header from "./Header";
function Routes() {
  const [Items, setItems] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [File, setFile] = useState();
  const formData = new FormData();
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getroutes");
        const busData = response.data.alldata;
        setAllItems(busData);
      } catch (err) {
        console.log(err);
      }
    };

    handleFetch();
  }, []);
  return (
    <>
      <Header />
      <div className="content">
        <div className="container mt-4">
          <div className="row">
            {allItems.map((item, i) => (
              <div className="col-md-4 mb-4" key={i}>
                {/* 3 cards per row */}
                <div className="card h-100">
                  {item.Photo ? (
                    <img
                      src={item.Photo}
                      width="100%"
                      height="200px"
                      className="card-img-top"
                      alt={item.BusNumber}
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div
                      className="card-img-top"
                      style={{
                        height: "200px",
                        width: "200px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#f0f0f0",
                      }}
                    >
                      No Image Available
                    </div>
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{item.BusNumber}</h5>
                    <p className="card-text">
                      Stops: {item.Busstops} <br />
                      Arrival: {item.Arrivaltime} <br />
                      Departure: {item.Departuretime} <br />
                      Source: {item.Source} <br />
                      Destination: {item.Destination} <br />
                      Driver: {item.Driver} <br />
                      Company: {item.BusCompany}
                    </p>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Routes;
