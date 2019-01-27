import React, { Component } from 'react';
import styled from '@d3banking/web-sdk/styles/emotion';
import { ThemeState } from '@d3banking/web-sdk/typings';
import { LargeTitle } from '@d3banking/web-sdk/components/Text';
import { getCompanyAttribute } from '@d3banking/web-sdk/util/systemSettings';
import SelfServiceSection from './SelfServiceSection';
import CustomerSupport from './CustomerSupport';

interface SelfServiceContainerState {
  phoneNumber?: string;
  email?: string;
}

const StyledSelfServiceContainer = styled('div')(({ theme }: { theme: ThemeState }) => ({
  backgroundColor: theme.palette.common.white,
  padding: 15,

  '.contact-info a': {
    color: theme.palette.grey.dark,
    textDecoration: 'underline'
  }
}));

class SelfServiceContainer extends Component<{}, SelfServiceContainerState> {
  state = {
    phoneNumber: undefined,
    email: undefined
  };

  componentDidMount() {
    const phoneNumber = getCompanyAttribute('self-service.support.contact.phoneNumber');
    const email = getCompanyAttribute('self-service.support.contact.email');
    this.setState({ phoneNumber, email });
  }

  render() {
    return (
      <StyledSelfServiceContainer className="self-service container">
        <header className="self-service-header pb-2">
          <div className="row">
            <div className="col-8">
              <LargeTitle className="self-service-title">Self Service</LargeTitle>
            </div>
            <div className="col-4 contact-info">
              <CustomerSupport phoneNumber={this.state.phoneNumber} email={this.state.email} />
            </div>
          </div>
        </header>
        <SelfServiceSection className="general-section" title="General Questions">
          <dt>I get a System Unavailable dialog, what should I do?</dt>
          <dd>
            Hopefully you will never see this dialog box. However, if you do, it is probably because
            the system is down for maintenance. Please try again later. If the problem persists,
            contact your financial institution.
          </dd>
        </SelfServiceSection>

        <SelfServiceSection className="dashboard-section" title="Dashboard">
          <dt>
            Why do the totals displayed in the Income and Expense categories under the Current Month
            Status of the Dashboard appear not to be accurate?
          </dt>
          <dd>
            You might not be tracking all of your accounts. Also, you might have one or more offline
            accounts that you need to update.
          </dd>
          <dt>What is Net Worth?</dt>
          <dd>
            Your net worth is the total asset account balances in the system minus your total
            liability account balances (rounded to the nearest dollar) in the system.
          </dd>
          <dt>What is the Budget Forecast?</dt>
          <dd>
            Budget Forecast is displayed above the Current Month Status on the Dashboard and at the
            top of the Budget page. However, it is only displayed if you have created a budget. If
            you have not created a budget, the information is not displayed. The amount to the left
            of the progress bar indicates your budgeted amount for the month. The amount within the
            progress bar indicates your actual amounts for the month. The Differences amount to the
            right of the progress bar amount indicates the difference between what you have budgeted
            for the month and your actual spending.
          </dd>
          <dt>Why can’t I see all of my accounts on the Dashboard page?</dt>
          <dd>
            Only deposit account types of checking, savings and credit account types of credit card
            accounts are displayed on the Dashboard page.
          </dd>
        </SelfServiceSection>
        <SelfServiceSection className="accounts-section" title="Accounts">
          <dt>Can I manually add an account?</dt>
          <dd>
            Yes. On the Accounts page, press the Add Offline Account button and enter the account
            information.
          </dd>
          <dt>Why does part of my account number contain 'X's?</dt>
          <dd>
            To protect your account number from being viewed or obtained by unwanted individuals,
            the system masks part of your account number.
          </dd>
          <dt>Why don't I see one or more of my accounts?</dt>
          <dd>
            If you do not see an account, you may have hidden the account from view. If you wish to
            include and view the account, access Settings from the main Navigation and select
            Accounts. Press Show button next to the hidden account.
          </dd>
          <dt>Why is an account on the Accounts page grayed out?</dt>
          <dd>
            If the account is grayed out, you have excluded the account from your net worth and
            budget. If you wish to include the account, remove the check from the Exclude option for
            the Account.
          </dd>
          <dt>I do not see the Delete button for some of my Accounts.</dt>
          <dd>
            The account is an online account managed by your financial institution. These accounts
            cannot be deleted. You can only delete offline accounts you manually created.
          </dd>
        </SelfServiceSection>

        <SelfServiceSection className="transactions-section" title="Transactions">
          <dt>Why can’t I see more than 30 days worth of transactions?</dt>
          <dd>
            Currently, the system is set to display only 30 days worth of transaction history in
            descending date order.
          </dd>
          <dt>
            Are transactions for an excluded or hidden account returned in a search using the Search
            function on the Transactions menu?
          </dt>
          <dd>
            No. To unhide an account, uncheck the Hide checkbox in the transaction details. To
            include an account, go to Settings, Accounts and press the Show button next to the
            account.
          </dd>
          <dt>Are Excluded or Hidden Account Transactions included in my budget?</dt>
          <dd>
            No. To unhide an account, uncheck the Hide checkbox in the transaction details. To
            include an account, go to Settings, Accounts and press the Show button next to the
            account.
          </dd>
          <dt>Are Excluded or Hidden Account Transactions included in my net worth?</dt>
          <dd>
            No. To unhide an account, uncheck the Hide checkbox in the transaction details. To
            include an account, go to Settings, Accounts and press the Show button next to the
            account.
          </dd>
          <dt>Can I split a transaction in to different categories?</dt>
          <dd>
            Yes. Select a transaction to display the transaction details. Select a new category and
            enter an amount. Press Split button. The split transactions display together in the
            transaction list. You can split the transactions multiple times using these steps. Other
            splits that have been performed display under Other splits of this transaction when you
            press the Split button in the transaction details.
          </dd>
          <dt>Can I remove a category from a split transaction?</dt>
          <dd>
            Yes. Select the transaction split to display the transaction details. Press Delete
            button. The split will be removed and the amount allocated will be added to the portion
            of the transaction that was split prior to this split.
          </dd>
          <dt>How do I view only uncategorized transactions?</dt>
          <dd>Press the View Uncategorized button on the Transactions page.</dd>
          <dt>How do I recategorize a transaction?</dt>
          <dd>
            Select the transaction from the Transactions page. Press the category shown in the
            table, i.e., Uncategorized expense. The categories available are displayed. If there are
            sub-categories under a category it is denoted with a plus (+). Press the plus (+) to
            display sub-categories. Select the appropriate category or sub-category. The transaction
            and transactions with the same description currently in the system will be categorized
            in this category or sub-category. When you recategorize a transaction, the system
            creates a “Recategorization Rule.” This allows any future transactions with that same
            description to be placed in the same category/sub-category. To view recategorization
            rules that have been created for you, select Settings from the main Navigation menu and
            the Rules sub-menu.
          </dd>
          <dt>Can I create my own category or sub-category?</dt>
          <dd>
            Yes. Select a transaction to display transaction details. Press Add Category button to
            display the Add Category fields. Enter a category name, select Income or Expense radio
            button. If it is a sub-category of a category, check the Subcategory of checkbox and
            select the parent category. Press Create button and the new category or subcategory is
            created. You can verify it is created by viewing user created categories and
            sub-categories under Settings, Categories. You will also see the new category the next
            time you view the list of categories in the transaction details.
          </dd>
        </SelfServiceSection>

        <SelfServiceSection className="budget-section" title="Budget">
          <dt>How do I create a budget?</dt>
          <dd>
            For optimal benefit, it is best to create a budget once you have three months of
            transaction history. Select the Budget icon from the Navigation menu. The Budget page is
            displayed with a Create Budget button. Press the Create Budget and a budget will be
            created based on your last three month transaction history.
          </dd>
          <dt>Can I modify a budgeted amount for a category?</dt>
          <dd>
            Yes. When you press the Budget field for a category, the Budget category field and any
            sub-categories become editable fields. Enter a new amount in the Total Amount field and
            tab out of the field.
          </dd>
          <dt>Can I start over with my budget?</dt>
          <dd>
            Yes. On the Budget page, press the Reset button. Your budget will be reset based on your
            last three month’s transaction history. Your previous spending budget will be removed
            from your financial analysis and cannot be retrieved.
          </dd>
        </SelfServiceSection>

        <SelfServiceSection className="financial-section" title="Financial Goals">
          <dt>
            When I create a goal, I see financial goal types of Retirement and Other, what is
            “Other”?
          </dt>
          <dd>
            A goal type of “Other” allows you to create any type of goal you wish, for example
            saving for a car, college or vacation. Identify the goal by the goal name.
          </dd>
          <dt>How does my financial goal impact my budget?</dt>
          <dd>
            If you add a financial goal and have selected the Include in Budget option the goal is
            included in the Savings Goals entry in your budget.
          </dd>
        </SelfServiceSection>
      </StyledSelfServiceContainer>
    );
  }
}

export default SelfServiceContainer;
