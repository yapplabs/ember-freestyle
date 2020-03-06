import PageObject, {
  text,
  count,
  collection
} from 'ember-cli-page-object';

export default PageObject.create({
  title: text('.FreestyleFilterableTitle'),
  content: text('.FreestyleUsage-rendered'),
  numTitles: count('.FreestyleFilterableTitle'),
  numFocusButtons: count('.FreestyleUsage-focusCta'),
  numNotesSection: count('.FreestyleUsage-notes'),
  numCodeSection: count('.FreestyleUsage-usage'),

  notesSection: {
    scope: '.FreestyleUsage-notes',
    snippets: collection('.FreestyleUsage-snippet')
  },

  usageSection: {
    scope: '.FreestyleUsage-usage',
    snippets: collection('.FreestyleUsage-snippet', {
      rawText: text('', { normalize: false })
    })
  }

});
