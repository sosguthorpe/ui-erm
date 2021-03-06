import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { stripesConnect } from '@folio/stripes/core';
import { Button } from '@folio/stripes/components';

import { urls } from '../utilities';
import css from './OpenBasketButton.css';

class OpenBasketButton extends React.Component {
  static manifest = Object.freeze({
    basket: {
      initialValue: [],
    },
    query: {},
  });

  static propTypes = {
    mutator: PropTypes.shape({
      basket: PropTypes.object,
      query: PropTypes.object,
    }),
    resources: PropTypes.shape({
      basket: PropTypes.array,
    }),
  }

  handleClick = () => {
    this.props.mutator.query.update({
      _path: urls.basket(),
    });
  }

  render() {
    const basket = this.props.resources.basket || [];

    return (
      <Button
        buttonClass={css.button}
        buttonStyle="primary"
        data-test-open-basket-button
        data-test-basket-size={basket.length}
        disabled={basket.length === 0}
        id="open-basket-button"
        onClick={this.handleClick}
      >
        <FormattedMessage
          id="ui-agreements.basketButton"
          values={{ count: basket.length }}
        />
      </Button>
    );
  }
}

export default stripesConnect(OpenBasketButton);
