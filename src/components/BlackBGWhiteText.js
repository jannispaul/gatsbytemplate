import React from "react"
import styled from "styled-components"
import Button from "../components/Button"

const StyledSection = styled.section`
    background-color: var(--color-black);
    /* padding-top: 130px;
    padding-bottom: 130px; */
    /* padding: 0px var(--padding-side); */
    padding: var(--padding-vertical) var(--padding-side);

    & > div {
        max-width: 1168px;
        margin: auto;
        /* padding: 0 var(--padding-side); */
    }

    h2 {
        color: var(--color-white);
    }

    p {
        color: var(--color-gray-medium);
        /* padding-right: 48px; */
    }

    h2 > span {
        color: var(--color-gray-medium);
    }

    hr {
        width: 40px;
        height: 2px;
        margin: 20px 0px;
        /* background-color: var(--color-gray-medium); */
        /* border: none; */
    }

    @media (min-width: 834px) {
    }
`

const BlackBGWhiteText = props => (
    <StyledSection>
        <div>
            <h2>
                {" "}
                {props.mainline} <br />
                <span>{props.subline}</span>
            </h2>
            <hr />
            {/* {props.body(paragraph => (<p>{paragraph}</p>))} */}
            {props.body.map(paragraph => (
                <p key={paragraph.key}>{paragraph}</p>
            ))}

            <Button link="/service" white>
                Mehr erfahren
            </Button>
        </div>
    </StyledSection>
)

export default BlackBGWhiteText
