import { useEffect, useState } from "react";

const UseMenu = () => {
    const [Menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data);
                setLoading(false);

            })


    }, [])
    return [Menu, loading]

}
export default UseMenu