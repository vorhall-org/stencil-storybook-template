import {
  Component,
  // Element,
  Event,
  EventEmitter,
  h,
  Listen,
  Method,
  Prop,
} from '@stencil/core';
import { InterfaceMyButton } from './my-button.custom.d';

@Component({
  shadow: true,
  styleUrl: 'my-button.scss',
  tag: 'my-button',
})

export class MyButton {

  /**
   * Create a meaningful description for the properties/attributes.
   * This will be automatically rendered to the documentation.
   */
  @Prop() public firstName!: string;

  // @Element() private _element!: HTMLElement;

  @Prop() public variant?: InterfaceMyButton['variant'] = 'primary';

  /**
   * Create a meaningful description for the event.
   * This will be automatically rendered to the documentation.
   */
  @Event({
    bubbles: true,
    composed: true,
    eventName: 'my-button_button-clicked',
  })
  public clicked: EventEmitter<void>;

  /**
   * Create a meaningful description for the method.
   * This will be automatically rendered to the documentation.
   */
  @Method()
  public async sampleMethod(): Promise<void> {
    await console.log('method called');
  }

  @Listen('sample-listener')
  public sampleListenerHandler(event: CustomEvent): void {
    console.log('sample listener event handler', event.target);
  }

  private _buttonClick = (evt: any): void => {
    evt.preventDefault();
    this.clicked.emit();
  };

  public render(): HTMLDivElement {
    return (
      <div class='wrapper'>
        <p
          class='greeting'
          data-testid='greeting'
        >Hello, World! I'm <span class='name'>{this.firstName}</span></p>

        <button
          onClick={this._buttonClick}
          class={`button ${this.variant}`}
          data-testid='button'
        >Button</button>
      </div>
    );
  }
}
