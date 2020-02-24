import { useState } from 'react';
import axios from 'axios';

export const Get = (url) => {
    const [data, setData] = useState();

    axios
    .get(url)

    .then(res => {
        console.log(res);
        setData(res.data);
    })

    .catch(err => {
        console.log(err);
    })

    return data;
}