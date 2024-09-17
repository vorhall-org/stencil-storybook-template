import {
  Component,
  h,
  Prop,
} from '@stencil/core';

@Component({
  shadow: true,
  styleUrl: '__name__.scss',
  tag: '__name__',
})

export class __nameUpperCase__ {

  /**
   * Create a meaningful description for the properties/attributes.
   * This will be automatically rendered to the documentation.
   */
  @Prop() public foo!: string;

  public render(): HTMLDivElement {
    return (
      <div>
        <span data-testid='greeting'>Component with param {this.foo}</span>
      </div>
    );
  }
}
