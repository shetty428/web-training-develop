import React from 'react';
import { Input } from '@d3banking/web-sdk/components/form/Input';
import RewardItem from './RewardItem';
import { Reward } from '../typings';

interface RewardsListProps {
  rewards: Reward[];
  availablePoints: number;
}

export default ({ rewards, availablePoints }: RewardsListProps) => (
  <div className="rewards-list">
    <Input className="rewards-search" block placeholder="Search for rewards..." />
    {rewards.map(reward => (
      <RewardItem reward={reward} redeemable={availablePoints >= reward.cost} />
    ))}
  </div>
);
