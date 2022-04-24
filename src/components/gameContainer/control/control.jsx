import React from 'react';
import style from './control.module.css';
import ControlButton from "./controlButton/controlButton";
import { faArrowUp, faArrowRight,
        faArrowDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Control = () => {
    return(
        <div className={style.control}>
            <div>
                <ControlButton icon={faArrowUp} />
            </div>
            <div className={style.horizontalLayer}>
                <ControlButton icon={faArrowLeft} />
                <ControlButton icon={faArrowRight} />
            </div>
            <div>
                <ControlButton icon={faArrowDown} />
            </div>
        </div>
    );
}

export default Control;