function customRender(reactElement,container){

    //First Version(Not Optimize)

    /*
    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);

    domElement.setAttribute('target',reactElement.props.target);

    container.appendChild(domElement);
    */


    //Sexcond Version(More Optimize)

    const domElement = document.createElement(reactElement.type);

    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
       domElement.setAttribute(prop,reactElement.props[prop]);
    }

    container.appendChild(domElement);

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click Me To Visit Google'
}

const mainContainer = document.getElementById('root');

customRender(reactElement,mainContainer);

