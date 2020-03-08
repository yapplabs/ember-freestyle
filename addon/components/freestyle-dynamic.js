import { assign } from '@ember/polyfills';
import Component from '@ember/component';
import { set, computed } from '@ember/object';
import layout from '../templates/components/freestyle-dynamic';
import { assert } from '@ember/debug';
import { inject as service } from '@ember/service';
import { validateDynamicProperties, getDynamicPropertyValues } from 'ember-freestyle/utils/dynamic';

export default Component.extend({
  layout,
  classNames: ['FreestyleDynamic'],
  emberFreestyle: service(),
  headerTitle: 'Dynamic Properties',

  dynamicPropertyValues: computed('dynamicProperties', function() {
    return getDynamicPropertyValues(this);
  }),

  init() {
    this._super(...arguments);
    validateDynamicProperties(this);
  },
  
  show: computed('emberFreestyle.focus', 'slug', function() {
    let slug = this.get('slug');
    let focus = this.get('emberFreestyle.focus');
    if (focus && slug) {
      return !!slug.match(focus);
    }
    return true;
  }),

  actions: {
    changeValueTo(property, newValue) {
      // Make a copy and then reset dynamicProperties, to force template changes
      let dynamicProperties = assign({}, this.get('dynamicProperties'));
      set(dynamicProperties, `${property}.value`, newValue);

      this.set('dynamicProperties', dynamicProperties);
    },
    setFocus() {
      this.set('emberFreestyle.focus', this.get('slug'));
    }
  }
}).reopenClass({
  positionalParams: ['slug']
});
