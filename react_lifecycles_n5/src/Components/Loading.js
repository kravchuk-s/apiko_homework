import React from 'react';
import styled from 'styled-components';

function Loading() {
    const DIV = styled.div`
    color: #222222
    font-weight: bold
    text-align: center
    font-size: 22px
    margin: 20px 0
    `;
    return <DIV>Loading...</DIV>;
}

export default Loading;