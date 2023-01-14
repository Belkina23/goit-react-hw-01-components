import styled from '@emotion/styled';

const Table = styled.table`
    background-color: #ffffff;
    table-layout: fixed;
    margin: 50px auto;
    width: 500px;
    border-collapse: collapse;
    box-shadow: 1px 1px 4px #565656;
    th,
    td {
        padding: 10px;
        height: 20px;
    }
`;

const Thead = styled.thead`
    th {
        text-align: center;
        color: #fff;
        background-color: #269768;
    }
`;

const Tbody = styled.tbody`
    tr:nth-of-type(odd) {
        background-color: #eee;
    }
    td {
        text-align: center;
        color: #696969;
        border-bottom: 1px solid #eee;
    }
`;
export {Table, Thead, Tbody};