import { createGlobalStyle } from "styled-components";
import { Colors } from "./Colors";

const ResetStyle = createGlobalStyle`
html, body, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font: inherit;
		vertical-align: baseline;
	}
	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
    body,html{
		height: 100%;
        min-height: 100% !important;
        background-color: #808080;
    }

    #root{
        min-height: 100%;
		max-height: fit-content;
    }

    input{
        &:focus{
            outline: none;
        }
    }

	.swal2-image{
		object-fit: cover;
	}

    button{
        cursor: pointer;
        user-select: none;
        &:disabled{
            cursor: not-allowed;
        }
    }

	.swal2-title-terms-of-service{
		font-size: 20px;
	}
	.swal2-popup-terms-of-service{
		width: 100%;
		max-width: 550px;
		padding-top: 20px;
	}

	
    * {
        font-family: "Inter", sans-serif;
        transition: all 200ms;
        box-sizing: border-box;
		&::-webkit-scrollbar {
			width: 10px;
			background-color: white;
			opacity: 0.5;
		}
		&::-webkit-scrollbar-thumb {
			background-color:${Colors.main};
			border-radius: 1px;
		}
    }

    strong{
        font-weight: 700;
    }
`;

export default ResetStyle;