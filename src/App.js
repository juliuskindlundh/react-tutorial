import React,{Component} from "react"
import Table from './Table'
import Form from './Form'
import ShowData from './ShowData'

class App extends React.Component {
    state = {
        characters:[],
        data:[]
    };

    componentDidMount(){
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';
        fetch(url).then((result)=>result.json()).then((result)=>{
            this.setState({
                data:result,
            })
        })
    }

    removeCharacter = (index) => {
        const{characters} = this.state;
        this.setState({
            characters: characters.filter((character,i) => {
                return i !== index
            })
        });
    }

    handleSubmit = (character) => {
        this.setState({characters:[...this.state.characters,character]});
    }

    render(){
        const{characters,data} = this.state
        return(
            <div className="container">
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>
                <ShowData data={data}/>
            </div>
        )
    }
}

export default App