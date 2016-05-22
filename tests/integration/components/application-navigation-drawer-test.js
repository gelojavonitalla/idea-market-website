import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('application-navigation-drawer', 'Integration | Component | application navigation drawer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{application-navigation-drawer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#application-navigation-drawer}}
      template block text
    {{/application-navigation-drawer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
