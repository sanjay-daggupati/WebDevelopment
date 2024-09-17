function customRender(reactComponent,container){
    /*const domElement=document.createElement(reactComponent.type)
    domElement.innerHTML=reactComponent.children
    domElement.setAttribute('href',reactComponent.props.href)
    domElement.setAttribute('target',reactComponent.props.target)
    container.appendChild(domElement)
    */
   const domElement=document.createElement(reactComponent.type)
   domElement.innerHTML=reactComponent.children
   for (const prop in reactComponent.props) {
    if(prop === 'children') continue
      domElement.setAttribute(prop,reactComponent.props[prop])
   }
   container.appendChild(domElement)
}
const reactComponent={
    type:"a",
    props:{
        href:"https://youtube.com",
        target:"_blank",
        
    },
    children:"Click me here to go to Youtube"
}

/*document.getElementById("root")*/
const mainContainer=document.querySelector('#root')

customRender(reactComponent,mainContainer)
