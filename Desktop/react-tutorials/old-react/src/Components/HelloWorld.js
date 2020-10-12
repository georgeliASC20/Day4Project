import React from 'react'

class HelloWorld extends React.Component{

render(){

    return(
        <hi>Hello {this.props.name}</hi>
    )

}


}

export default HelloWorld;