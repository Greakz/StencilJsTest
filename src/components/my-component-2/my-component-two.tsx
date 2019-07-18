import {Component, h, State} from '@stencil/core';
import {fetchData, MyEntity} from "./fjasdkf";

@Component({
    tag: 'my-component-two',
    styleUrl: 'my-component.css',
    shadow: false
})
export class MyComponent2 {

    @State() value: string = '';
    @State() error: string = '';
    @State() code: string = '';

    componentDidLoad() {
        this.validate();
    }

    handleInput = (e: any) => {
        this.value = e.target.value;
        this.validate();
    };

    render() {
        // @ts-ignore
        const input = <input
            type="text"
            id="input-field"
            value={this.value}
            placeholder="type something..."
            onInput={this.handleInput}
        />;
        // @ts-ignore
        const button = <button disabled={this.error.length > 0} onClick={this.fetch}>Submit</button>
        return (
            <div>
                {input}
                <div id="error">{this.error}</div>
                <div id="code" style={{border: '1px solid #fa0'}}>{this.code}</div>
                {button}
            </div>
        );
    }

    private validate() {
        this.error = (this.value.length < 6) ? 'ZU KURZ' : '';
    }

    fetch = () => {
        const data: MyEntity = fetchData();
        this.code = data.code;
    }
}
