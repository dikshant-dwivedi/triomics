import styled from "styled-components";
import { styled as muiStyled } from '@mui/material/styles';
import { TextField, List as list, ListItem as listitem, ListItemButton as listitembutton, ListItemText } from "@mui/material";

export const Container = styled.div`
    height: calc(100% - 20px);
    padding: 10px;
`

export const SearchField = muiStyled(TextField)`
    width: 100%;
    height: 60px;
`
export const EventContainer = styled.div`
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

export const List = muiStyled(list)``
export const Event = muiStyled(listitem)`
    //border: 1px solid black;
    margin: 5px 0;
    background: ${props => props.isSelected ? "black" : "#CCF3EE"};
    color: ${props => props.isSelected ? "white" : "black"};
`
export const EventItemButton = muiStyled(listitembutton)``
export const EventItemText = muiStyled(ListItemText)``

export const NoEventInfo = styled.div`
    height: calc(100% - 70px);
    text-align: center;
    padding-top: 50%;
`

