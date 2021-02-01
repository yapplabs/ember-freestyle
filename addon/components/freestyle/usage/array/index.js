import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FreestyleUsageStringComponent extends Component {
  // @action onInput(event) {
  //   this.args.onInput(event.target.value);
  // }

  @action addItem() {
    let { onChange, items } = this.args;
    items.push('');
    onChange(items);
  }

  @action updateItem(index, value) {
    let { onChange, items } = this.args;
    items[index] = value;
    onChange(items);
  }

  @action removeItem(index) {
    let { onChange, items } = this.args;
    items.splice(index, 1);
    onChange(items);
  }

  // NOTE: Maybe freestyle can just depend on truth-helpers?
  get useStringControl() {
    return this.args.type === 'String';
  }
  get useBooleanControl() {
    return this.args.type === 'Boolean';
  }
  get useNumberControl() {
    return this.args.type === 'Number';
  }
  get useObjectControl() {
    return this.args.type === 'Object';
  }
}
