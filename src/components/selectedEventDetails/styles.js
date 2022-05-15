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

export const Details = muiStyled(Paper)`
    margin: 0 5px;
    padding: 5px;
    height: calc(100% - 30px);
    flex: 1;
`

export const Modal = muiStyled(Dialog)``
export const ModalTitle = muiStyled(DialogTitle)``
export const ModalContent = muiStyled(DialogContent)``
export const ModalActions = muiStyled(DialogActions)``
export const TypeField = muiStyled(TextField)``
export const ModalButton = muiStyled(Button)``