import POPOSSpace from "./POPOSSpace";
import "./POPOSList.css";

function POPOSList() {
    return (
        <div className="POPOSList">
            <POPOSSpace 
            name="50 California Street"
            address="50 California St."
            image="50-california-st.jpg"
            />
            <POPOSSpace 
            name="100 Pine"
            address="100 Pine"
            image="100-pine.jpg"
            />
            <POPOSSpace 
            name="101 California"
            address="101 California"
            image="101-california.jpg"
            />
            <POPOSSpace 
            name="343 Sansome Roof Garden"
            address="343 Sansome Roof Garden"
            image="343-sansome-roof-garden.jpg"/>
            <POPOSSpace 
            name="555 California"
            address="555 California"
            image="555-california.jpg"
            />
            <POPOSSpace 
            name="525 Market Street Plaza"
            address="525 Market Street Plaza"
            image="525-market-street-plaza.jpg"
            />
        </div>
    )
};

export default POPOSList;