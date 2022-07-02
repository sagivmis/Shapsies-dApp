import styled, { css } from "styled-components";

const Button = styled.button`
    display: inline-block;
    border: none;

    filter: brightness(1);
    cursor: pointer;
    text-decoration: none;
    text-align: center;

    margin: 3.5px;
    padding: 0.4em 1.5em;

    font-size: 22px;

    border-radius: 5px;
    z-index: 100;

    color: white;
    background-color: var(--med-green-link);
    background-color: rgba(0, 0, 0, 0);

    font-family: "BabyDoll";
    &:hover {
        filter: brightness(1.08);
        transform: scale(1.03);
        transition: 0.25s;
    }
    &:focus {
        outline: none;
    }

    &:active {
        transform: scale(0.97);
    }

    ${(props) =>
        props.navbar &&
        css`
            width: 97.5%;
            font-size: 26px;
        `}

    ${(props) =>
        props.small &&
        css`
            padding: 0 0.2em;
            font-size: 18px;
            &:hover {
                padding: 0.35em 0.2em;
            }
        `}

    ${(props) =>
        props.big &&
        css`
            padding: 2em 2.5em;
            font-size: 26px;
        `}

    ${(props) =>
        props.document &&
        css`
            padding: 0%;
            font-size: 26px;
        `}

    ${(props) =>
        props.w500 &&
        css`
            font-weight: 500;
        `}

    ${(props) =>
        props.secondary &&
        css`
            position: relative;
            width: 100%;

            padding: 0;

            background-color: white;
            border: 2px solid var(--btn-invert-color);
            color: var(--btn-invert-color);
            margin: 3.5px 0;

            &:hover {
                font-weight: 600;
                color: var(--btn-invert-hover-color);
                border: 3px solid var(--btn-invert-hover-color);
                box-shadow: rgba(135, 208, 242, 0.75) 0px 0px 9px;
            }
        `}

    ${(props) =>
        props.secondary &&
        props.small &&
        css`
            padding: 0.8em 0.4em;
            &:hover {
                padding: 1.5em 0.4em;
            }
        `}

    ${(props) =>
        props.secondary &&
        props.navbar &&
        css`
            width: 300%;
            right: 100%;
            padding: 0.2em 1.5em;

            &:hover {
                width: 375%;
                right: 137.5%;
            }
        `}
        
        ${(props) => {
        if (props.secondary)
            switch (props.type) {
                case "header":
                    return css`
                        width: 80%;
                        padding: 0.2em 0;
                        &:hover {
                            width: 100%;
                        }
                    `;
                default:
                    if (props.type)
                        console.error(
                            `${props.children} BTN:: Need to choose a type if specifed`
                        );
                    break;
            }
    }}

    ${(props) => {
        if (props.container) {
            switch (props.type) {
                // adjust width (second argument) to fit your needs
                case "navbar":
                    return css`
                        padding: 0em 37%;
                        width: 97.5%;
                    `;
                case "small":
                    return css`
                        padding: 0 0.4em;
                    `;
                case "header":
                    return css`
                        width: 60%;
                        padding: 0.1em 0.5em;
                    `;

                default:
                    if (props.type)
                        console.error(
                            `${props.children} BTN:: Need to choose a type if specifed`
                        );
                    break;
            }
        }
    }}
    
    ${(props) =>
        props.borderColor &&
        css`
            border: ${props.color} 2px solid;
            &:hover {
                // transform: scale(1);
            }
        `}
        
${(props) =>
        props.container &&
        css`
            background-color: white;
            &:hover {
                // transform: scale(1);
            }
        `}
${(props) =>
        props.textGlow &&
        css`
            text-shadow: 0px 0px 6px rgba(255, 255, 255, 1.8);
        `}
`;

export default Button;
