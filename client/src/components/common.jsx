import styled from 'styled-components'
import { hexToRgbString } from '../constants/utility';

export const IconContainer = styled.div`
    background-color: ${(props) => hexToRgbString(props.backgroundColor, props.alpha) || 'inherit'};
    border-radius: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    > * {
        color: #fff;
        width: 50%;
        height: 50%;
    }
`

export const ButtonIcon = styled(IconContainer)`
    cursor: pointer;
`

export const ColorIcon = styled.div`
    background-color: ${(props) => props.color};
    border-radius: 5px;
`

export const StackChildren = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    > * {
        margin-bottom: ${(props) => props.space}px;
    }
    > *:last-child {
        margin-bottom: 0;
    }
`

export const InlineChildren = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    > * {
        margin-right: ${(props) => props.space}px;
    }
    > *:last-child {
        margin-right: 0;
    }
`

export const Cell = styled.div`
    flex: 1;
    align-self: ${(props) => props.align || 'center'};
`

export const Text = styled.div`
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize};
    font-family: Roboto;
    text-align:  ${(props) => props.align || 'left'};
    display: ${(props) => props.inline ? 'inline' : 'block'};
    tag: ${(props) => props.tag};
`

export const InputField = styled.input`
    background-color: #344154;
    padding: 10px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 16px;
    width: 100%;
    outline: none;
`