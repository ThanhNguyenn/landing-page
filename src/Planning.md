The App will consist of 3 big components: - The Header - The Body - The Footer

1. Header:

   - The Nav Bar
   - The Image: Arrow and text

2. The Body:
   -Using Grid

   - Client Feedback (Using flexbox )

3. Footer:
   - Flexbox

- Create a theme tsx file contains all the main color. There are 2 main color as primary color

<!-- {/_ <div>
<img src="/images/logo.svg" alt="sunnyside_logo" />
</div>
<div>
<div />
<div />
<div />
</div> _/} -->

    background-color: ${theme.primaryBlue};

    div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 20px 20px;

        li,a,button {
            font-family: ${theme.primaryBarlowFont};
            font-size: 16px;
            text-decoration: none;
            color: #edf0f1;
            padding: 24px 3%;
        }

        button {
            padding: 15px 20px;
            margin-left: 20px;
            background-color: rgb(115, 205, 255, 1);
            border: none;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease 0s;
            font-family: ${theme.primaryFrauncesFont};
            font-weight: 900;
            font-size: 18;
        }
        button:hover {
            background-color: rgb(0, 136, 169, 0.8);
        }

        img {
            cursor: pointer;
            margin-right: auto;
        }

        ul {
            list-style: none;

            li {
                display: inline-block;
                padding: 0px 25px;

                a {
                    transition: all 0.3s ease 0s;
                }

                a:hover {
                    color: #0088a9;
                }
            }
        }
    }


    div:nth-child(2) {
        display: none;
    }

    @media(max-width: 375px) {
        div:nth-child(1) {
            padding-top: 0px;
            position: absolute;
            flex-direction: column;
            top: 12vh;
            background-color: white;
            width: 75%;
            left: 25px;
            height: 35vh;
            justify-content: flex-start;
            font-weight: bold;

            img {
                display: none;
            }

            ul {
                display: flex;
                flex-direction: column;
                padding: 0px;
                width: 100%;
                text-align: center;
                li {
                    padding: 15px 0px;
                    color: rgb(166, 166, 166);
                }
            }

            button {
                margin-left: 3px;
                background-color: rgb(227, 216, 0);
                color: rgb(33, 33, 33);
            }
        }


        div:nth-child(2) {
            display: block;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 20px;
            }
    }
