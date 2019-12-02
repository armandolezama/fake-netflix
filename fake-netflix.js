import { LitElement, html } from 'lit-element';

export class FakeNetflix extends LitElement {

    static styles = css`
    :host {
        display: block;
    }
    `;

    static get properties() {
        return {
            propName: { type: String }
        };
    }

    
    render() {
        return html``;
    }
}
customElements.define('fake-netflix', FakeNetflix);