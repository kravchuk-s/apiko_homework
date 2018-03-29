import React from 'react';
import styled from 'styled-components';

function NoItem() {
    const H2 = styled.h2`
    color: #222222
    text-transform: uppercase;
    `;
    return <H2>No items found</H2>;
}

export default NoItem;