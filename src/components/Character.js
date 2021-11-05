
import React from 'react';
import styled from 'styled-components';

const SytledDiv = styled.div`

        border: 2px ;
        border: solid black;
        background: white;
        border-radius: 10px;
        background: white;
        margin 1;
        text-align:left;
        padding: 3%;
        margin: 5%;
        opacity: .6;
        width:20%;
        `


const Character = props => {
   
   return (
       <SytledDiv>
           <h2>Name: {props.info.name}</h2>
            <li>Height: {props.info.height}</li>
            <li>Weight: {props.info.mass}</li>
            <li>Hair: {props.info.hair_color}</li>
            <li>Gender: {props.info.gender}</li>
            <li>Skin: {props.info.skin_color}</li>
            <li>DOB: {props.info.birth_year}</li>
       </SytledDiv>
   )
}

export default Character;