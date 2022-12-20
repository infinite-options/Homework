import "./App.css";
import { useState, useEffect, useRef } from "react";
import Listing from "./Listing.js";

function App() {
    const [dropdown, setDropdown] = useState("");
    const [showAll, setShowAll] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [renderData, setRenderData] = useState([]);
    const listings = useRef([]);
    const data = useRef([]);
    const key = useRef(0);

    useEffect(() => {
        fetch(
            "https://kfc19k33sc.execute-api.us-west-1.amazonaws.com/dev/api/v2/businesses"
        )
            .then((res) => res.json())
            .then((d) => {
                data.current = d.result;
            })
            .then(() => {
                key.current = -1;
                listings.current = [];
                data.current.forEach((list) => {
                    listings.current = [
                        ...listings.current,
                        <Listing
                            key={key.current + 1}
                            data={data.current}
                            image={list.business_image}
                            name={list.business_name}
                            longitude={list.business_longitude}
                            latitude={list.business_latitude}
                            address={list.business_address}
                            unit={list.business_unit}
                            city={list.business_city}
                            state={list.business_state}
                            zip={list.business_zip}
                            status={list.business_status}
                            desc={list.business_desc}
                            id={list.business_uid}
                            type={list.business_type}
                            date_created={list.business_created_at}
                            assoc={JSON.parse(list.business_association)}
                            hours={JSON.parse(list.business_hours)}
                            contact_firstname={list.business_contact_first_name}
                            contact_lastname={list.business_contact_last_name}
                            phone={list.business_phone_num}
                            email={list.business_email}
                            showAll={showAll}
                        />,
                    ];
                    key.current += 1;
                });
                setLoaded(true);
                setRenderData(listings.current);
            });
    }, [showAll]);

    return (
        <div className="App">
            <div className="main-container">
                {!loaded && (
                    <div className="centered">
                        <div className="blob-1"></div>
                        <div className="blob-2"></div>
                    </div>
                )}
                {loaded && (
                    <div className="heading">
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div className="wrapper">
                                <div className="search_box">
                                    <div className="dropdown">
                                        <div
                                            className="default_option"
                                            onClick={() => {
                                                if (dropdown === "") {
                                                    setDropdown("active");
                                                } else {
                                                    setDropdown("");
                                                }
                                            }}
                                        >
                                            Name
                                        </div>
                                        <ul className={dropdown}>
                                            <li>Name</li>
                                            <li>Type</li>
                                        </ul>
                                    </div>
                                    <div className="search_field">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Search"
                                        />
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    onChange={(e) => {
                                        console.log(e.target.checked);
                                        setShowAll(e.target.checked);
                                    }}
                                />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <h1 className="heading__title">BUSINESSES</h1>
                    </div>
                )}
                {loaded && <ul className="cards">{renderData}</ul>}
            </div>
        </div>
    );
}

export default App;
