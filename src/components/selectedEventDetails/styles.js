import styled from "styled-components";
import { styled as muiStyled } from '@mui/material/styles';
import { Button, Paper, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";

export const Container = styled.div`
    height: calc(100% - 10px);
    padding: 5px;
    display: flex;
    align-items: center;
`
export const AddEventButton = muiStyled(Button)`
    margin: 0 5px;
`

export const AddActivityButton = muiStyled(Button)`
    margin: 0 5px;
`

export const ExportButton = muiStyled(Button)`
    margin: 0 5px;
`

export const Details = muiStyled(Paper)`
    box-sizing: border-box;
    margin: 0 5px;
    padding: 15px;
    height: calc(100% - 20px);
    flex: 1;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    -ms-overflow-style: none;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
    height: 5px;
    background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 2px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
        background-color: black;
    }
`

export const Modal = muiStyled(Dialog)``
export const ModalTitle = muiStyled(DialogTitle)``
export const ModalContent = muiStyled(DialogContent)``
export const ModalActions = muiStyled(DialogActions)``
export const TypeField = muiStyled(TextField)``
export const ModalButton = muiStyled(Button)``