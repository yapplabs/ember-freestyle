import { assert } from '@ember/debug';
import { get } from '@ember/object';

export function validateDynamicProperties(component) {
  let dynamicProperties = get(component, 'dynamicProperties');

  if (dynamicProperties) {
    assert(
      `dynamicProperties passed into freestyle-dynamic must be an object.  You passed: ${dynamicProperties}`,
      typeof dynamicProperties === 'object'
    );
  } else {
    component.dynamicProperties = {};
  }
}

export function getDynamicPropertyValues(component) {
  let dynamicPropertyValues = {};
  let dynamicProperties = get(component, 'dynamicProperties');
  Object.keys(dynamicProperties).forEach((propertyName) => {
    dynamicPropertyValues[propertyName] = get(dynamicProperties, `${propertyName}.value`);
  });

  return dynamicPropertyValues;
}
