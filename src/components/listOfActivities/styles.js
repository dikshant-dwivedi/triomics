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
    scrollbar-width: none;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
        display: none;
    }
`

export const Activity = muiStyled(Card)`
    width: 100%;
    margin: 5px 0;
`
export const ActivityContent = muiStyled(CardContent)`
    width: 100%;
`


