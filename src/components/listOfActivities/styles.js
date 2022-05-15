import styled from "styled-components";
import { styled as muiStyled } from '@mui/material/styles';
import { TextField, Card, CardContent } from "@mui/material";

export const Container = styled.div`
    height: calc(100% - 20px);
    padding: 10px;
`

export const SearchField = muiStyled(TextField)`
    width: 100%;
    height: 60px;
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
    background: #F9CEEE;
`
export const ActivityContent = muiStyled(CardContent)`
    width: 100%;
`

export const NoActivityInfo = styled.div`
    height: calc(100% - 70px);
    text-align: center;
    padding-top: 50%;
`


