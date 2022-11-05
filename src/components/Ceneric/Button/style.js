import styled from "styled-components";

export const Container = styled.button`
    width: ${({width}) => width ? `${width}` : '140px'};
    margin-top: ${({mt}) => mt && `${mt}px`};
    margin-right: ${({mr}) => mr && `${mr}px`};
    margin-bottom: ${({mb}) => mb && `${mb}px`};
    margin-left: ${({ml}) => ml && `${ml}px`};

    padding: 0 ${({px}) => px && `${px}px`};
    padding: ${({py}) => py && `${py}px`} 0;
    padding-top: ${({pt}) => pt && `${pt}px`};
    padding-right: ${({pr}) => pr && `${pr}px`};
    padding-bottom: ${({pb}) => pb && `${pb}px`};
    padding-left: ${({pl}) => pl && `${pl}px`};
    font-family: 'Cera Pro';
    color: #fff;
    background-color: #46A358;
    border-radius: 6px;
    font-weight: ${({fw}) => fw ? `${fw}` : '500'};
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    border: none;
    outline: none;

    &:active {
        transform: scale(0.98);
    }
`;