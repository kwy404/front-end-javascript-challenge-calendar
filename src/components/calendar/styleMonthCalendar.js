import styled from "styled-components";

export const container = styled.div`
    border-top: #dadce0 1px solid;
    position: relative;
    width: 100%;
    height: calc(100vh - 64px);
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
`

container.left = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: none;
    -webkit-flex: none;
    flex: none;
    -webkit-flex-direction: column;
    flex-direction: column;
    width: 256px;
    overflow: hidden;
    position: relative;
`

container.left.filled = styled.div`
    height: 84px;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
`

container.left.calendarContainer = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: 1;
    box-flex: 1;
    -webkit-flex-grow: 1;
    flex-grow: 1;
    -webkit-flex-shrink: 1;
    flex-shrink: 1;
    -webkit-flex-direction: column;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;
    ::before{
        content: "";
        height: 4px;
        position: absolute;
        top: 84px;
        -webkit-transition: box-shadow 100ms cubic-bezier(0.4,0.0,0.2,1);
        transition: box-shadow 100ms cubic-bezier(0.4,0.0,0.2,1);
        width: 248px;
        z-index: 1;
    }
`

container.left.calendarContainer.calendar = styled.div`
    -webkit-box-flex: 0;
    box-flex: 0;
    -webkit-flex-grow: 0;
    flex-grow: 0;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    height: 224px;
    padding-top: 0;
    margin-top: -5px;
`
container.left.calendarContainer.calendar.container = styled.div`
    padding: 0 14px 16px 19px;
    -webkit-user-select: none;
    position: relative;
`

container.left.buttonAdd = styled.div`
    position: absolute;
    left: 11px;
    top: 11px;
    -webkit-transition: left,top 300ms linear;
    transition: left,top 300ms linear;
    z-index: 506;
    -webkit-border-radius: 24px;
    border-radius: 24px;
    height: 48px;
    margin-top: 4px;
    width: 110px;
    -webkit-box-shadow: 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 2px 1px -1px rgb(0 0 0 / 12%), 0px 1px 3px 0px rgb(0 0 0 / 20%);
    box-shadow: 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 2px 1px -1px rgb(0 0 0 / 12%), 0px 1px 3px 0px rgb(0 0 0 / 20%);
    border-top-left-radius: 28px;
    border-top-right-radius: 28px;
    border-bottom-right-radius: 28px;
    border-bottom-left-radius: 28px;
    cursor: pointer;
    user-select: none;
    :hover{
        background: #eee;
        -webkit-box-shadow: 0 2px 3px 0 rgb(60 64 67 / 30%), 0 6px 10px 4px rgb(60 64 67 / 15%);
        box-shadow: 0 2px 3px 0 rgb(60 64 67 / 30%), 0 6px 10px 4px rgb(60 64 67 / 15%);
    }
    span{
        font-weight: 600;
        position: absolute;
        left: 60%;
        transform: translate(-50%);
        top: 29%;
    }
    svg{
        margin: 6px;
        position: absolute;
    }
`

container.left.calendarContainer.calendar.container.header = styled.div`
    height: 32px;
    font-size: 12px;
    font-weight: 400;
    color: #3c4043;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    margin-left: 4px;
    margin-right: 3px;
    span{
        -webkit-box-flex: 1;
        box-flex: 1;
        -webkit-flex-grow: 1;
        flex-grow: 1;
        padding-left: 5px;
        font-size: 14px;
        letter-spacing: .25px;
        line-height: 20px;
        color: #3c4043;
        font-weight: 600;
        :first-letter{
            text-transform: uppercase;
        }
    }
`

container.left.calendarContainer.calendar.container.grid = styled.div`
    display: table;
    table-layout: fixed;
    width: 100%;
    text-align: center;
    padding: 0 14px 16px 0px;
    -webkit-user-select: none;
    position: relative;
    margin: 7px -20px;
`

container.left.calendarContainer.calendar.container.grid.row = styled.div`
    display: table-row;
    height: 28px;
    display: table;
    table-layout: fixed;
    width: 100%;
    text-align: center;
    padding: 0 0px 16px 11px;
    -webkit-user-select: none;
    position: relative;
    left: 10px;
    span{
        display: table-cell;
        font-size: 10px;
        font-weight: 500;
        vertical-align: middle;
        color: #70757a;
        cursor: pointer;
        margin-left: 4px;
        :hover .hover{
            color: #70757a;
            background: #ddd;
        }
    }
    .active .hover{
        background: #1a73e8 !important;
        color: white !important;
    }
    .hover{
        color: #70757a;
        background: transparent;
        position: absolute;
        width: 24px;
        height: 24px;
        line-height: 24px;
        margin: auto;
        -webkit-border-radius: 50%;
        border-radius: 50%;
        position: relative;
        transition: background-color 100ms linear;
        font-weight: 500;
        -webkit-border-radius: 50%;
        border-radius: 50%;
    }
`

container.center = styled.div`
    -webkit-box-flex: 1 1 auto;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    overflow: hidden;
    position: relative;
`

container.center.main = styled.div`
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    outline: none;
`

container.center.main.grid = styled.div`
    background-color: #fff;
    height: 100%;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    position: relative;
    height: 100vh;
`

container.center.main.grid.header = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: none;
    -webkit-flex: none;
    flex: none;
    overflow: auto;
    height: calc(100% - 74px);
    right: 8px;
    position: relative;
`

container.center.main.grid.header.time = styled.div`
    white-space: nowrap;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: none;
    -webkit-flex: none;
    flex: none;
    -webkit-flex-direction: column;
    flex-direction: column;
`

container.center.main.grid.header.time.flex = styled.div`
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    margin-left: 1px;
    min-width: 40px;
    position: relative;
    height: 100%;
`

container.center.main.grid.header.time.flex.inline = styled.div`
    margin-left: 0;
    display: inline-block;
    display: block;
    overflow-y: hidden;
    height: 0;
    max-width: 80px;
`

export const time = styled.div`
    background-color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: table-cell;
    line-height: 24px;
    min-height: 24px;
    overflow: hidden;
    padding-right: 1px;
    position: relative;
    text-align: center;
    top: 64px;
    vertical-align: middle;
    .time{
        color: #70757a;
        font-size: 10px;
        -webkit-font-smoothing: subpixel-antialiased;
    }
`

time.times = styled.div`
    display: block;
    overflow-y: hidden;
    height: 0;
    max-width: 80px;
    position: relative;
    height: 100%;
`

time.times.time = styled.div`
    user-select: none;
    position: relative;
    height: 48px;
    padding-right: 8px;
    text-align: right;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    min-width: 48px;
    padding: 4px;
    white-space: nowrap;
    color: #70757a;
    font-size: 10px;
    -webkit-font-smoothing: subpixel-antialiased;
    span{
        display: block;
        position: relative;
        top: -6px;
        color: #70757a;
        font-size: 10px;
        -webkit-font-smoothing: subpixel-antialiased;
    }
`

export const presentation = styled.div`
    margin-left: -1px;
    -webkit-box-flex: 1 1 auto;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    position: relative;
`

presentation.row = styled.div`
    height: 84px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-flex: none;
    -webkit-flex: none;
    flex: none;
    overflow: hidden;
`

presentation.grid = styled.div`
    background-color: #fff;
    height: 100%;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    position: relative;
`

presentation.row.presentation = styled.div`
    margin-left: -1px;
    -webkit-box-flex: 1 1 auto;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
    position: relative;
`

presentation.row.presentation.none = styled.div`
    width: 9px;
    min-width: 9px;
`

presentation.row.presentation.date = styled.div`
    margin-left: 0px;
    top: 65px;
    position: fixed;
    background: #fff;
    z-index: 10;
    -webkit-transform: scale(1);
    -webkit-box-flex: 1 0 auto;
    -webkit-flex: 1 0 auto;
    flex: 1 0 auto;
    width: 129px;
    min-width: 129px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    z-index: 3;
    overflow: hidden;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-flex: 1 1 0%;
    -webkit-flex: 1 1 0%;
    flex: 1 1 0%;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    outline: none;
    width: 100% !important;
    border-bottom: 1px solid #d1ccd7;
    padding-bottom: 4px;
`

presentation.row.presentation.date.data = styled.h2`
    font-weight: 400;
    margin: 0;
    text-align: center;
    width: 46px;
    user-select: none;
    height: 88px;
    .dayT{
        color: #1a73e8;
        line-height: 32px;
        position: relative;
        z-index: 3;
        font-size: 11px;
        font-weight: 500;
        letter-spacing: 0.8px;
        margin-left: 0;
        margin-top: 8px;
        text-indent: 0.8px;
        text-transform: uppercase;
    }
    .day{
        font-size: 25px;
        letter-spacing: -2.5px;
        text-indent: -2.5px;
        font-variant: tabular-nums;
        -webkit-font-feature-settings: "tnum" 1;
        font-feature-settings: "tnum" 1;
        background-color: #1a73e8;
        color: white;
        position: relative;
        z-index: 3;
        font-size: 26px;
        letter-spacing: -2.6px;
        text-indent: -2.6px;
        font-variant: tabular-nums;
        -webkit-font-feature-settings: "tnum" 1;
        font-feature-settings: "tnum" 1;
        -webkit-border-radius: 100%;
        border-radius: 100%;
        color: #fff;
        font-family: 'Google Sans',Roboto,Arial,sans-serif;
        line-height: 46px;
        height: 46px;
        margin-left: auto;
        margin-right: auto;
        margin-top: -8px;
        width: 46px;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: column;
        flex-direction: column;
        -webkit-justify-content: center;
        justify-content: center;
        font-weight: 400;
        margin: 0;
        text-align: center;
        width: 100%;
    }
`

export const presentati = styled.div`
    z-index: 1;
    -webkit-box-flex: 1 1 auto;
    -webkit-flex: 1 1 auto;
    flex: 1 1 auto;
    overflow-x: auto;
    overflow-y: scroll;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    height: auto;
    width: calc(100vw - 265px);
    position: relative;
    top: -1140px;
    overflow: hidden;
    ::after{
        content: '';
        background: #dadce0;
        position: fixed;
        width: 1px;
        margin-top: -1px;
        top: 0px;
        height: 100%;
        z-index: 3;
        margin-left: 56px;
        pointer-events: none;
    }
`

presentati.row = styled.div`
    position: relative;
    top: 82px;
    height: 48px;
    left: 32px;
    ::after {
        content: '';
        border-bottom: #dadce0 1px solid;
        position: absolute;
        width: calc(100vw - 305px);
        margin-top: -1px;
        z-index: 3;
        pointer-events: none;
        height: 1px;
    }
    .cell{
        position: absolute;
        width: 100vw;
        height: 48px;
    }
`

export const tarefa = styled.div`
    user-select: none;
    border-radius: 6px;
    position: absolute;
    left: 26px;
    top: 0px;
    height: 46px;
    z-index: 5;
    background-color: rgb(3,155,229);
    border-color: rgb(3,155,229);
    width: 68vw;
    span{
        color: white;
        padding: 10px;
        margin-top: 5px;
    }
`

export const menuItem = styled.div`
    width: 192px;
    height: auto;
    min-width: 192px;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition: max-width 0.2s cubic-bezier(0.0,0.0,0.2,1) ,max-height 0.2s cubic-bezier(0.0,0.0,0.2,1) ,opacity 0.1s linear;
    transition: max-width 0.2s cubic-bezier(0.0,0.0,0.2,1) ,max-height 0.2s cubic-bezier(0.0,0.0,0.2,1) ,opacity 0.1s linear;
    background: #ffffff;
    border: 0;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -webkit-box-shadow: 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%), 0px 5px 5px -3px rgb(0 0 0 / 20%);
    box-shadow: 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%), 0px 5px 5px -3px rgb(0 0 0 / 20%);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    max-height: 100%;
    max-width: 100%;
    opacity: 1;
    outline: 1px solid transparent;
    z-index: 2000;
    position: fixed;
    top: 200px;
    left: 300px;
    padding: 10px;
    .color{
        -webkit-border-radius: 50%;
        border-radius: 50%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: inline-block;
        outline: none;
        width: 18px;
        height: 18px;
        margin: 3px;
        cursor: pointer;
        position: relative;
        background-color: #e8eaed;
        :hover{
            transform: scale(1.11);
        }
    }
}
`

export const Opacity = styled.div`
    z-index: 1005;
    width: 100%;
    top: 0;
    bottom: 0;
    pointer-events: ;
    position: fixed;
    opacity: 1;
    input{
        outline: none;
    }
    height: 100%;
`