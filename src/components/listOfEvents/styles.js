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
    scrollbar-width: none;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
        display: none;
    }
`

export const List = muiStyled(list)``
export const Event = muiStyled(listitem)`
    border: 1px solid black;
    background: ${props => props.isSelected ? "#808080" : "white"};
    color: ${props => props.isSelected ? "white" : "black"};
`
export const EventItemButton = muiStyled(listitembutton)``
export const EventItemText = muiStyled(ListItemText)``





