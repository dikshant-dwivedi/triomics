import styled from "styled-components";
import { styled as muiStyled } from '@mui/material/styles';
import { Card, CardContent, Button } from "@mui/material";

export const Container = styled.div`
    height: calc(100% - 20px);
    padding: 10px;
`

export const Heading = styled.h3`
    text-align: center;
    border: 1px solid black;
    margin: 0px;
    padding: 15px 0;
`

export const ActivityContainer = styled.div`
    height: calc(100% - 70px);
    margin: 5px 0;
    overflow-y: scroll;

    -ms-overflow-style: none;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 2px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
        background-color: black;
    }
`

export const Activity = muiStyled(Card)`
    width: 100%;
    margin: 5px 0;
    background: #FFE59D;
    display: flex;
    flex-direction: column;
`
export const ActivityContent = muiStyled(CardContent)`
    width: 100%;
`

export const DragDropInfo = styled.div`
    height: calc(100% - 70px);
    text-align: center;
    padding-top: calc((100% - 70px)/2)
`

export const MapButton = muiStyled(Button)`
    display: none;
    @media screen and (max-width: 1080px) {
        display: inline;
    }
`