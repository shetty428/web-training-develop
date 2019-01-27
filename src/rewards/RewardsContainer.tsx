import React, { Component } from 'react';
import styled from '@d3banking/web-sdk/styles/emotion';
import { ThemeState } from '@d3banking/web-sdk/typings/state';
import { Widget } from '@d3banking/web-sdk/components/Widget';
import { InfoCircleIcon } from '@d3banking/web-sdk/components/icons/InfoCircleIcon';
import { fetchRewards } from './api';
import RewardPoints from './RewardPoints';
import { RewardsList } from './rewards-list';
import { Reward } from './typings';

interface RewardsContainerState {
  rewards?: Reward[];
  availablePoints?: number;
}

const StyledRewardsContainer = styled('div')(({ theme }: { theme: ThemeState }) => ({
  backgroundColor: theme.palette.common.white,
  padding: 15,

  '.right-column': {
    borderLeft: `1px solid ${theme.palette.grey.light}`
  },

  '.rewards-widget': {
    borderRadius: 5
  }
}));

class RewardsContainer extends Component<{}, RewardsContainerState> {
  state = {
    rewards: undefined,
    availablePoints: 0
  };

  // Normally fetches for data should be done in the componentDidMount lifecycle
  componentDidMount() {
    fetchRewards().then(({ availablePoints, rewards }) => {
      this.setState({ availablePoints, rewards });
    });
  }

  render() {
    const { availablePoints, rewards } = this.state;
    // If rewards hasn't been fetched yet, don't show anything. Can put a loading spinner here if desired
    if (!rewards) {
      return null;
    }

    return (
      <StyledRewardsContainer className="rewards container">
        <div className="row h-100">
          <div className="left-column col-8">
            <RewardsList rewards={rewards} availablePoints={availablePoints} />
          </div>
          <div className="right-column col-4">
            <RewardPoints points={availablePoints} />
            <Widget
              title="Learn more about rewards"
              to="/self-service" // We can route anywhere
              WidgetIcon={InfoCircleIcon}
              className="rewards-widget mt-2"
            />
          </div>
        </div>
      </StyledRewardsContainer>
    );
  }
}

export default RewardsContainer;
