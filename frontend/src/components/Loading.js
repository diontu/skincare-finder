import React , {useState} from 'react';
import { css } from '@emotion/core';
import BeatLoader from 'react-spinners/BeatLoader';
import { useSelector } from 'react-redux';

const override = css `
    display: block;
    margin: auto;
    position: absolute;
    top: 50%;
`;

function Loading(props) {

    const loading = useSelector(state => !state.receive_products);

    return (
        <div>
            <BeatLoader
                css={override}
                size={35}
                color={"#227766"}
                loading={loading}
            />
        </div>
    );
}

export default Loading; 