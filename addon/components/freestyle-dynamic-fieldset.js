import Component from '@ember/component';
import layout from '../templates/components/freestyle-dynamic-fieldset';
import { assert } from '@ember/debug';

export default Component.extend({
  layout,
  tagName: 'fieldset',
  classNames: ['FreestyleDynamicFieldset'],
  headerTitle: null, //pass
  dynamicProperties: null,  //pass
  init() {
    this._super(...arguments);
    let dynamicProperties = this.get('dynamicProperties');

    if (dynamicProperties) {
      assert(
        `dynamicProperties passed into freestyle-dynamic-fieldset must be an object.  You passed: ${dynamicProperties}`,
        typeof dynamicProperties === 'object'
      );
    } else {
      this.dynamicProperties = {};
    }
  }
});
