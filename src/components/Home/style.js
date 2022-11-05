import styled from "styled-components";

export const Container = styled.section`
    max-width: var(--width);
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

export const Hero = styled.section`
    display: flex;
    align-items: center;

    & .hero-intro {
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: #3D3D3D;
    }

    & .hero-title {
        font-weight: 900;
        font-size: 70px;
        line-height: 70px;
        text-transform: uppercase;
        color: #3D3D3D;

        & .green {
            color: #46A358;
        }
    }

    & .hero-desc {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #727272;
    }
`;

export const Products = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const Filtered = styled.section`
    max-width: 310px;
    width: 100%;
    background: #FBFBFB;
    padding: 14px 18px;
    margin-right: 50px;
`;

export const ProductItems = styled.aside`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Categories = styled.div`

    & .title {
        font-weight: 700;
        font-size: 18px;
        line-height: 16px;
        color: #3D3D3D;
    }

    & .category-item {
        margin: 20px 0;
        /* color: ${({active}) => active ? '#46A358' : '#3D3D3D'}; */
        font-size: 15px;
        font-weight: 500;
        padding-left: 12px;
        cursor: pointer;
    }
`;

export const Price = styled.div`
    margin-top: 36px;
    margin-bottom: 46px;

    & .title {
        font-weight: 700;
        font-size: 18px;
        line-height: 16px;
        color: #3D3D3D;
        margin-bottom: 20px;
    }

    & .price-interval {
        margin-top: 16px;
        font-weight: 700;
        font-size: 18px;
        line-height: 16px;
        color: #46A358;
    }

    & .price {
        font-size: 15px;
        line-height: 16px;
        color: #3D3D3D;
        font-weight: 400;
    }
`;

export const Size = styled.div`

    & .title {
        font-weight: 700;
        font-size: 18px;
        line-height: 16px;
        color: #3D3D3D;
    }

    & li {
        margin: 20px 0;
        padding-left: 12px;
    }
`;