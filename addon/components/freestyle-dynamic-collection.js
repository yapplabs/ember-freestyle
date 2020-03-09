import { assign } from '@ember/polyfills';
import Component from '@ember/component';
import { set, computed } from '@ember/object';
import layout from '../templates/components/freestyle-dynamic-collection';
import { inject as service } from '@ember/service';
import { validateDynamicProperties, getDynamicPropertyValues } from 'ember-freestyle/utils/dynamic';

export default Component.extend({
  layout,
  classNames: ['FreestyleDynamicCollection'],
  emberFreestyle: service(),
  headerTitle: 'Dynamic Properties Collection',

  dynamicPropertyValues: computed('dynamicProperties', function() {
    return getDynamicPropertyValues(this);
  }),

  init() {
    this._super(...arguments);
    validateDynamicProperties(this);
  },

  actions: {
    changeValueTo(property, newValue) {
      // Make a copy and then reset dynamicProperties, to force template changes
      let dynamicProperties = assign({}, this.get('dynamicProperties'));
      set(dynamicProperties, `${property}.value`, newValue);

      this.set('dynamicProperties', dynamicProperties);
    }
  }
});
