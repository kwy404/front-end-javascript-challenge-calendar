import styled from 'styled-components';

export const Opacity = styled.div`
    z-index: 1005;
    width: 100%;
    top: 0;
    bottom: 0;
    position: fixed;
    opacity: 1;
    input{
        outline: none;
    }
    height: 100%;
    background: rgba(0,0,0,.40);
`

export const Draggable = styled.div`
    -webkit-box-align: center;
    box-align: center;
    -webkit-align-items: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-orient: vertical;
    box-orient: vertical;
    -webkit-flex-direction: column;
    flex-direction: column;
    bottom: 0;
    left: 0;
    padding: 0 5%;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transition: -webkit-transform .4s cubic-bezier(0.4,0.0,0.2,1);
    transition: -webkit-transform .4s cubic-bezier(0.4,0.0,0.2,1);
    -webkit-transition: transform .4s cubic-bezier(0.4,0.0,0.2,1);
    transition: transform .4s cubic-bezier(0.4,0.0,0.2,1);
`

export const Modal = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: stretch;
    align-items: stretch;
    overflow: hidden;
    -webkit-box-shadow: 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%), 0px 11px 15px -7px rgb(0 0 0 / 20%);
    box-shadow: 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%), 0px 11px 15px -7px rgb(0 0 0 / 20%);
    -webkit-border-radius: 8px;
    border-radius: 8px;
    opacity: 1;
    -webkit-transition: opacity 200ms ease-in-out;
    transition: opacity 200ms ease-in-out;
    -webkit-flex-shrink: 1;
    flex-shrink: 1;
    max-height: 100%;
`

Modal.span = styled.span`
    max-width: 400px;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    background-color: #fff;
    pointer-events: auto;
    position: relative;
    position: absolute;
    top: 50%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: stretch;
    align-items: stretch;
    overflow: hidden;
    -webkit-box-shadow: 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%), 0px 11px 15px -7px rgb(0 0 0 / 20%);
    box-shadow: 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%), 0px 11px 15px -7px rgb(0 0 0 / 20%);
    -webkit-border-radius: 8px;
    border-radius: 8px;
    -webkit-transition: opacity 200ms ease-in-out;
    transition: opacity 200ms ease-in-out;
    padding: 2em 3em 2em;
    padding-top: 5em;
    left: 35%;
    top: 45%;
    form{
        position: relative;
        width: 100%;
        display: flex;
        display: flex;
        align-content: flex-end;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: flex-end;
    }
    .header{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: left;
        justify-content: left;
        -webkit-align-items: center;
        align-items: center;
        height: 36px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        background-color: #f1f3f4;
        -webkit-box-shadow: inset 0 1px 0 #fff;
        box-shadow: inset 0 1px 0 #fff;
        cursor: move;
        overflow: hidden;
        -webkit-transition: .3s ease opacity;
        transition: .3s ease opacity;
    }
    .bottom{
        position: relative;
        text-align: right;
        -webkit-box-flex: none;
        -webkit-flex: none;
        flex: none;
        margin-top: 40px;
        line-height: 0;
        padding: 8px 16px 0;
    }
`