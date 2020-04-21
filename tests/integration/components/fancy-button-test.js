import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | fancy-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<FancyButton data-do-this="do not click me" />`);

    assert.dom('button').hasText('Click Me');

    assert.dom('button').hasAttribute('data-do-this', 'do not click me');
  });
});
