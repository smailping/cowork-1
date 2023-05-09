import { Component } from 'react';

class EventPractice extends Component {
    state = { message: ""};
    
    // constructor(props) {
    //     super(props);
    //     this.handleChage = this.handleChage.bind(this);
    //     this.handeClikc = this.handeClikc.bind(this);
    // }

    handleChage() {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handeClikc = () => {
        alert(this.state.username + "");
    }


    render() {
        return (
        <div>
        <h1>이벤트 연습</h1>
        <input
            name="message"
            placeholder="사용자명"
            value={this.state.message}
            onChange={this.handleChage}                           
        />
        <input
            name='message'
            placeholder='아무거나 입력해보세요'
            value={this.state.message}
            />
        <button
         onClick={()=> {
            alert(this.state.message);
            this.setState({ message: ""});
         }}
         >

         render() {}
            return (
                <div>
                    <h1>이벤트 연습</h1>
                    <input
                    name="message"
                    placeholder='아무거나 입력해보세요'
                    value={this.state.message}
                    onChange={this.handeClikc}
                    onKeyPress={this.handleKeyPress}
                    />
                    <button onClick={this.handeClikc}>확인</button>
                    <h2>{this}</h2>
                </div>
            )
         {}
            
            확인
         </button>
        <h2>{this.state}</h2>
        </div>
        );
            }           
}
