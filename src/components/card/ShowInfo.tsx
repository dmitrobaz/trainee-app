import axios from 'axios';
import React, { useEffect, useState } from 'react';
interface IShowInfo {
    infoApiUrl?: any
}
const ShowInfo: React.FC<IShowInfo> = ({ infoApiUrl }) => {
    const [showInfoState, SetShowInfoState] = useState<boolean>(false)
    const [statusRequst, setStatusRequest] = useState<boolean>(false)
    const [infoList, setInfoList] = useState<any>([])

    useEffect(() => {
        infoApiUrl.map((item: string) => {
            axios.get(item).then(({ data }) => setInfoList((prevProps: any) => ([...prevProps, data])))
        })
    }, [])

    useEffect(() => {
        !infoList ? setStatusRequest(false) : setStatusRequest(true)
    }, [infoList])

    const onShowFilms = () => {

        SetShowInfoState(!showInfoState)
    }
    return (
        <>

            {showInfoState
                ? <>
                    <button className="button-show-info" onClick={onShowFilms}>
                        Close
                    </button>

                    {statusRequst
                        ? <ul >{infoList.map((film: any, key: number) => <li key={key}>{film.title}</li>)}</ul>
                        : <span>Loading...</span>}
                </>
                : <button className="button-show-info" onClick={onShowFilms}>Show films</button>

            }
        </>
    );
};

export default ShowInfo;