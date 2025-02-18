import POPOSSpace from "./POPOSSpace";
import "./POPOSList.css";
import data from "./sfpopos-data.json"

function POPOSList() {

    const spaces = data.map(({ title, address, images, hours }) => {
        return (
            <POPOSSpace
                key={title} // The title could be a key, since each title is unique
                name={title}
                address={address}
                image={images[0]}
                hours={hours}
            />
        )
    });
    return (
        <div className="POPOSList">
            { spaces }
        </div>
    )
};

export default POPOSList;