import {
  Component,
  h,
  Prop,
} from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  shadow: true,
  styleUrl: 'my-component.scss',
  tag: 'my-component',
})
export class MyComponent {

  /**
   * The first name
   */
  @Prop() public first;

  /**
   * The middle name
   */
  @Prop() public middle: string;

  /**
   * The last name
   */
  @Prop() public last: string;

  private _getText(): string {
    // const foo: Array = [];
    return format(this.first, this.middle, this.last);
  }

  public render(): HTMLDivElement {
    return <div>Hello, World! I'm {this._getText()}</div>;
  }
}
