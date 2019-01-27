import React from 'react';
import styled, { css } from '@d3banking/web-sdk/styles/emotion';
import { ThemeState } from '@d3banking/web-sdk/typings';
import { H1 } from '@d3banking/web-sdk/components/Text';
import { Button } from '@d3banking/web-sdk/components/buttons/Button';
import { formatNumber } from '@d3banking/web-sdk/util/formatters';
import { Reward } from '../typings';

interface RewardItemProps {
  reward: Reward;
  redeemable: boolean;
}

// Creating the themed reward item
const RewardItem = styled('div')(
  ({ theme, redeemable }: { theme: ThemeState; redeemable: boolean }) => ({
    borderBottom: `1px solid ${theme.palette.grey.light}`,
    padding: 20,

    '.redeem': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      color: redeemable ? theme.palette.error.main : 'inherit'
    }
  })
);

// Creating basic classes for this component
const classes = {
  item: css({
    minHeight: 200
  }),
  image: css({
    width: '100%',
    height: 'auto'
  }),
  content: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  })
};

export default ({ reward, redeemable }: RewardItemProps) => (
  <RewardItem className="reward-item row" redeemable>
    <div className="col-4">
      <img className={`reward-image ${classes.image}`} src={reward.img} />
    </div>
    <div className={`col-8 ${classes.content}`}>
      <div className="reward-item-information">
        <H1 className="reward-item-name">{reward.name}</H1>
        <span className="reward-item-cost">{formatNumber(reward.cost, { decimalPlaces: 0 })}</span>
      </div>
      <div className="redeem">
        <Button className="redeem-reward" disabled={!redeemable} callToAction>
          Redeem
        </Button>
        {!redeemable && <span className="redeem-error">Not enough points</span>}
      </div>
    </div>
  </RewardItem>
);
