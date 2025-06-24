function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.Children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // Set attributes dynamically
    // This will loop through all props and set them as attributes
    for(prop in reactElement.props){
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);
}

const reactElement = {
    type :'a', 
    props :{
        href:'https://www.google.com/',
        target :'_blank',
    },
    Children: 'Click me to visit google'
}
const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer);