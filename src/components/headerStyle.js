import styled from "styled-components";

export const header = styled.header`
    background-color: rgba(255,255,255,1);
    font: 13px/27px Roboto,RobotoDraft,Arial,sans-serif;
    z-index: 986;
    color: black;
    min-width: 320px;
    position: relative;
    -webkit-transition: box-shadow 250ms;
    transition: box-shadow 250ms;
    padding: 8px;
`

header.center = styled.div`
    padding: 8px;
    -webkit-transition: background-color .4s;
    transition: background-color .4s;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: space-between;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    min-width: -webkit-min-content;
    min-width: min-content;
`

header.center.left = styled.div`
    padding-right: 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-flex: 1 0 auto;
    flex: 1 0 auto;
`

header.center.left.logo = styled.div`
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    display: inline-block;
    position: relative;
    top: 2px;
    -webkit-user-select: none;
    span{
        text-decoration: none;
        padding-left: 4px;
        color: #5f6368 !important;
        opacity: 1;
        display: inline-block;
        font-family: 'Product Sans',Arial,sans-serif;
        font-size: 22px;
        line-height: 24px;
        padding-left: 8px;
        position: relative;
        top: -1.5px;
        vertical-align: middle;
        color: inherit;
        opacity: 1;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
    }
`

header.center.date = styled.div`
    -webkit-box-pack: space-between;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-flex: 1 1 100%;
    flex: 1 1 100%;
    color: black;
    min-width: 320px;
    position: relative;
    -webkit-transition: box-shadow 250ms;
    transition: box-shadow 250ms;
`

header.center.date.center = styled.div`
    min-width: initial!important;
    min-width: auto!important;
    text-align: right;
    line-height: 0;
    -webkit-user-select: none;
`

header.center.date.center.flex = styled.div`
    -webkit-align-items: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    line-height: normal;
    margin-left: 8px;
    width: 100%;
`

header.center.date.center.flex.date = styled.div`
    display: inline-block;
    -webkit-align-items: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    line-height: normal;
    margin-left: 8px;
    width: 100%;
`