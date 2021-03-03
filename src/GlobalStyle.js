import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root{
    --blue: #0056b3;
    --darkBlue: #0c1c4a;
    --royalBlue: #2f5dc3;
    --lightBlue: #f4f6f7;
    --whiteBlue: #eff7ff;
    --white: #ffffff;
    --darkGray: #495057; 
    --lightGray: #cccccc; 
    --orange: #ff7900;
    --green: #2bb673;
    --lightGreen: #d8fff0;
    --darkGreen: #147948;
    --borderBottom: #eaedef;
    --brightBlue: #208ae5;
    --deepBlue: #0a315f;
    --nightBlue: #062043;
    --shadow: 0px 0.5rem 1rem rgba(0, 0, 0, 0.1);
    --shadowNav: 0px 0.3rem .5rem -5px rgba(0, 0, 0, 0.2);
    --red: #ea3131;
    --pink: #ffe2e2;
}

.container{
    margin: 0 auto;
    max-width: 1150px;
}

.discount{
    padding: 5px;
    background-color: var(--pink);
    color: var(--red);
    font-weight: bold;
    font-size: .8rem;
}

.pricedel{
    font-size: .8rem;
    color: var(--darkGray);
}

hr {
    margin: 1rem 0;
    border-top: 1px solid var(--lightGray);
}

*{
    margin: 0;
    padding: 0;
}

a{
    text-decoration: none;
    color: var(--darkBlue); 
    &:hover{
        color: var(--blue);
    }
}

p{
    color: var(--darkBlue)
}

.signin{
    color: var(--royalBlue);
    background-color: var(--whiteBlue);
}

.signup{
    color: var(--white);
    background-color: var(--royalBlue);
    &:hover{
        background-color : var(--blue);
    }
}

`;
