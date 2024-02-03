import styled from "styled-components";
import bg from "../../assets/img/qianshi_bg.jpg";

export const HomePage = styled.div`
    padding: 16px;
`

export const HomeTitle = styled.h2`
    text-align: center;
    padding: 20px;
    margin-bottom: 30px;
`
export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 850px;
    margin: 0 auto;
`

export const QianCardContainer = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
`

export const QianCard = styled.div`
    width: 235px;
    height: 398px;
    border: 2px solid #e2d7bc;
    padding: 10px;
    background-color: #E1DACA;
    background-image: url(${bg});
    background-repeat: no-repeat;
    color: #7F735B;
    background-size: cover;
    text-align: center;
    margin-bottom: 20px;
    user-select: none;
    margin-right: 10px;
`
export const QianCardWrap = styled.div`
    border: 2px solid #A9A395;
`

export const QianName = styled.div`
    width: 100%;
    border-bottom: 2px solid #A9A395;
    padding: 11px;
    font-size: 20px;
    box-sizing: inherit;
`

export const QianNum = styled.div`
    width: 100%;
    border-bottom: 2px solid #A9A395;
    padding: 12px;
    font-size: 24px;
`

export const QianContent = styled.div`
    writing-mode: vertical-lr;
    white-space: nowrap;
    margin: 40px auto;
    font-size: 24px;
`

export const FormContainer = styled.div`

`

export const FormBox = styled.div`
    margin-bottom: 15px;
    h6{
        font-size: 16px;
        margin-bottom: 5px;
    }
`

export const FormInput = styled.input`
    width: 235px;
    padding: 15px 10px;
    border: 1px solid #bea366;
    border-radius: 5px;
    box-sizing: border-box;
`

export const Btn = styled.div`
    padding: 10px 20px;
    background: #812c18;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`