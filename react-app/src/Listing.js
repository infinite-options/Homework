import "./Listing.css";
import { useEffect, useState } from "react";

function Listing(props) {
    const [coordinates, setCoordinates] = useState(["", ""]);
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");
    const [hours, setHours] = useState("");
    const [assoc, setAssoc] = useState([]);
    const [date, setDate] = useState("");
    const [card__overlay, setcard__overlay] = useState("card__overlay_min");
    const [showFullListing, setShowFullListing] = useState(true);
    const [scrollTrigger, setScrollTrigger] = useState(false);

    function formatAddress(address, unit, city, state, zip) {
        let a = address !== null && address !== "" ? address : "";
        let u = unit !== null && unit !== "" ? "Unit " + unit : "";
        let c = city !== null && city !== "" ? city : "";
        let s = state !== null && state !== "" ? state : "";
        let z = zip !== null && zip !== "" ? zip : "";

        return showFullListing
            ? a + " " + u + ", " + c + ", " + s + " " + z
            : a + " " + u;
    }
    function formatContact(first, last, phone, email) {
        if (
            (phone === null || phone === "") &&
            (email === null || email === "")
        ) {
            return "";
        }

        let num = parseInt(phone).toString();
        let strnum = "";
        if (num.length === 7) {
            strnum = num.substring(0, 3) + "-" + num.substring(3, 7);
        } else if (num.length === 10) {
            strnum =
                "(" +
                num.substring(0, 3) +
                ") " +
                num.substring(3, 6) +
                "-" +
                num.substring(6, 10);
        } else if (num.length >= 11) {
            strnum = "+" + num;
        }

        return (
            <div className="card__description">
                <b>Contact:</b>
                <p>
                    {first !== null && first !== "" ? first : ""}{" "}
                    {last !== null && last !== "" ? last : ""}
                    {strnum !== "" && <br />}
                    <span>{strnum}</span>
                    {email !== null && email !== "" && <br />}
                    <a
                        href={
                            email !== null && email !== ""
                                ? "mailto:" + email
                                : ""
                        }
                    >
                        {email !== null && email !== "" ? email : ""}
                    </a>
                </p>
            </div>
        );
    }
    function formatHrsString(date) {
        var d = new Date("August 19, 2002 " + date);
        var hh = d.getHours();
        var m = d.getMinutes();
        var s = d.getSeconds();
        var dd = "AM";
        var h = hh;
        if (h >= 12) {
            h = hh - 12;
            dd = "PM";
        }
        if (h === 0) {
            h = 12;
        }
        m = m < 10 ? "0" + m : m;

        s = s < 10 ? "0" + s : s;

        var pattern = new RegExp("0?" + hh + ":" + m + ":" + s);

        var replacement = h + ":" + m;
        replacement += " " + dd;

        return date.replace(pattern, replacement);
    }
    function formatHours(obj) {
        if (obj === null) {
            return "";
        }

        return (
            <div className="card__description">
                <b>Hours:</b>
                <table className="card__hourstable">
                    <tbody>
                        <tr>
                            <td>Sunday:</td>
                            <td>
                                {formatHrsString(obj.Sunday[0]) +
                                    " - " +
                                    formatHrsString(obj.Sunday[1])}
                            </td>
                        </tr>
                        <tr>
                            <td>Monday:</td>
                            <td>
                                {formatHrsString(obj.Monday[0]) +
                                    " - " +
                                    formatHrsString(obj.Monday[1])}
                            </td>
                        </tr>
                        <tr>
                            <td>Tuesday:</td>
                            <td>
                                {formatHrsString(obj.Tuesday[0]) +
                                    " - " +
                                    formatHrsString(obj.Tuesday[1])}
                            </td>
                        </tr>
                        <tr>
                            <td>Wednesday:</td>
                            <td>
                                {formatHrsString(obj.Wednesday[0]) +
                                    " - " +
                                    formatHrsString(obj.Wednesday[1])}
                            </td>
                        </tr>
                        <tr>
                            <td>Thursday:</td>
                            <td>
                                {formatHrsString(obj.Thursday[0]) +
                                    " - " +
                                    formatHrsString(obj.Thursday[1])}
                            </td>
                        </tr>
                        <tr>
                            <td>Friday:</td>
                            <td>
                                {formatHrsString(obj.Friday[0]) +
                                    " - " +
                                    formatHrsString(obj.Friday[1])}
                            </td>
                        </tr>
                        <tr>
                            <td>Saturday:</td>
                            <td>
                                {formatHrsString(obj.Saturday[0]) +
                                    " - " +
                                    formatHrsString(obj.Saturday[1])}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    function formatAssociations(...arr) {
        if (arr[0] === null || arr[0].length === 0) {
            return "";
        }

        let foo = arr[0];
        if (foo.length < 2) {
            return (
                "| Associated with " +
                props.data.find((business) => business.business_uid === foo[0])
                    .business_name
            );
        } else if (foo.length === 2) {
            return (
                "| Associated with " +
                props.data.find((business) => business.business_uid === foo[0])
                    .business_name +
                " & " +
                props.data.find((business) => business.business_uid === foo[1])
                    .business_name
            );
        } else {
            foo[foo.length - 1] =
                " & " +
                props.data.find(
                    (business) => business.business_uid === foo[foo.length - 1]
                ).business_name;
            for (let i = 0; i < foo.length - 1; i++) {
                foo[i] =
                    " " +
                    props.data.find(
                        (business) => business.business_uid === foo[i]
                    ).business_name;
            }
            return "| Associated with " + foo;
        }
    }
    function formatDate(string) {
        var options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(string).toLocaleDateString([], options);
    }

    useEffect(() => {
        if (
            (props.longitude !== null || props.longitude !== "") &&
            (props.latitude !== null || props.latitude !== "")
        ) {
            setCoordinates([props.longitude, props.latitude]);
        }
        setContact(
            formatContact(
                props.contact_firstname,
                props.contact_lastname,
                props.phone,
                props.email
            )
        );
        setHours(formatHours(props.hours));
        setAssoc(formatAssociations(props.assoc));
        setDate(formatDate(props.date_created));
    }, []);

    useEffect(() => {
        setShowFullListing(props.showAll);
        if (props.showAll) {
            setTimeout(() => {
                setScrollTrigger(true);
            }, 250);
        } else {
            setScrollTrigger(false);
        }
    }, [props.showAll]);

    useEffect(() => {
        if (showFullListing && scrollTrigger) {
            setcard__overlay("card__overlay_full_scrollable");
        } else if (showFullListing) {
            setcard__overlay("card__overlay_full");
        } else {
            setcard__overlay("card__overlay_min");
        }
        setAddress(
            formatAddress(
                props.address,
                props.unit,
                props.city,
                props.state,
                props.zip
            )
        );
    }, [showFullListing, scrollTrigger]);

    return (
        <div>
            <li>
                <div
                    className="card"
                    onClick={() => {
                        setShowFullListing(!showFullListing);
                        if (!showFullListing) {
                            setTimeout(() => {
                                setScrollTrigger(true);
                            }, 250);
                        } else {
                            setScrollTrigger(false);
                        }
                    }}
                >
                    <img src={props.image} className="card__image" alt="" />
                    <div className={card__overlay}>
                        <div
                            className={
                                showFullListing
                                    ? "card__header_stay"
                                    : "card__header_move"
                            }
                        >
                            <div className="card__header_arc"></div>
                            <h3 className="card__title">
                                {props.name}{" "}
                                {props.type !== "" ? " · " + props.type : ""}
                            </h3>
                            <div className="card__header-text">
                                <a
                                    href={
                                        "https://www.google.com/maps/search/?api=1&query=" +
                                        coordinates[1] +
                                        "%2C" +
                                        coordinates[0]
                                    }
                                    className="card__address"
                                >
                                    {address}
                                </a>
                                <span
                                    className={
                                        props.status === "ACTIVE"
                                            ? "card__active"
                                            : "card__inactive"
                                    }
                                >
                                    {props.status === "ACTIVE"
                                        ? "ACTIVE"
                                        : "INACTIVE"}
                                </span>
                            </div>
                        </div>
                        <p className="card__description">{props.desc}</p>
                        {hours}
                        {contact}
                        <p className="card__specs">
                            ID: {props.id} | Date Created: {date} {assoc}
                        </p>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default Listing;
