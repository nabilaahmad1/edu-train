import { useEffect, useState } from "react";

const useServices = () => {
    // fetch services data 
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    // return service details 
    return [services];
}

export default useServices;