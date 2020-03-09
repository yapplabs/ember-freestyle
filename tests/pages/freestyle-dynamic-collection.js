import PageObject, {
  visitable,
  value,
  text,
  clickable,
  isVisible
} from 'ember-cli-page-object';

const tastefulInput = '.FreestyleDynamicCollection .FreestyleDynamic-input:contains(isTasteful:) input';
const variantA = '.FreestyleDynamicCollection .dynamic-properties-variant-a';
const variantB = '.FreestyleDynamicCollection .dynamic-properties-variant-b';
const variantListItemForVariantA = '.FreestyleCollection-variantListItem[data-test-variant-key="a"]';
const variantListItemForVariantB = '.FreestyleCollection-variantListItem[data-test-variant-key="b"]';

export default PageObject.create({
  visit: visitable('/acceptance?s=Dynamic%20Properties%20Collection'),

  snippet: text('.FreestyleUsage-snippet', { at: 3 }),

  toggleTastefulInput: clickable(tastefulInput),

  checkboxInputValue: value(tastefulInput),
  isVisible: isVisible('.x-Bar'),
  variantAText: text(variantA),
  chooseVariantA: clickable(variantListItemForVariantA),
  chooseVariantB: clickable(variantListItemForVariantB),
  variantBText: text(variantB)
});
