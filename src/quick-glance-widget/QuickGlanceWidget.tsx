import React, { Component } from 'react';
import { Widget } from '@d3banking/web-sdk/components/Widget';
import { H2 } from '@d3banking/web-sdk/components/Text';
import { formatMoney } from '@d3banking/web-sdk/util/formatters';
import { store } from '@d3banking/web-sdk/store';

import './quick-glance-widget.scss';

class QuickGlanceWidget extends Component {
  // Gets the sum of all accounts associated with the passed in type
  sum(accountType: string) {
    const {
      accounts: { accounts } // Accounts isn't typed on the sdk's store
    }: any = store.getState();

    return accounts.reduce(
      (sum, { balance, type }) => (type === accountType ? sum + balance : sum),
      0
    );
  }

  render() {
    return (
      <Widget className="quick-glance-widget">
        <div className="row">
          <div className="col-6">
            <H2 className="total-assets">
              Total Assets
              <div className="total-assets-amount">{formatMoney(this.sum('ASSET'))}</div>
            </H2>
          </div>
          <div className="col-6">
            <H2 className="total-debt">
              Total Debt
              <div className="total-debt-amount"> -{formatMoney(this.sum('LIABILITY'))}</div>
            </H2>
          </div>
        </div>
      </Widget>
    );
  }
}

export default QuickGlanceWidget;
