import axios from 'axios';
import React, { useEffect, useState } from 'react';
interface IShowInfo {
    infoApiUrl?: any
}
const ShowInfo: React.FC<IShowInfo> = ({ infoApiUrl }) => {
    const [showFilms, SetShowFilms] = useState<boolean>(false)
    const [statusRequst, setStatusRequest] = useState<boolean>(false)
    const [filmList, setFilmList] = useState<any>([])

    useEffect(() => {
        infoApiUrl.map((item: string) => {
            axios.get(item).then(({ data }) => setFilmList((prevProps: any) => ([...prevProps, data])))
        })
    }, [])

    useEffect(() => {
        !filmList ? setStatusRequest(false) : setStatusRequest(true)
    }, [filmList])

    const onShowFilms = () => {
        SetShowFilms(!showFilms)
    }
    return (
        <>

            {!showFilms
                ? <button className="button-show-info" onClick={onShowFilms}>Show films</button>
                : <>
                    <button className="button-show-info" onClick={onShowFilms}>
                        Close
                    </button>
                    {statusRequst
                        ? <ul >{filmList.map((film: any, key: number) => <li key={key}>{film.title}</li>)}</ul>
                        : <span>Loading...</span>}
                </>
            }
        </>
    );
};

export default ShowInfo;