import * as React from "react";
import { connect } from "react-redux";

import { AppState } from "../../store";
import AccountsReducer from "../../store/reducers/accountsReducer"

export type IAvailableAccountsProps = ReturnType<typeof AccountsReducer>;

class AssetAllocation extends React.Component<IAvailableAccountsProps, AppState> {
  constructor(props: IAvailableAccountsProps) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid mb-1 border-left border-right border-primary rounded">
        <div className="row">
          <div className="col">
            <h2>Account Balances:</h2>
            <div className="alert alert-info alert-sm">For help classifying accounts, see the first bullet in the list <a href="https://www.bogleheads.org/wiki/Principles_of_tax-efficient_fund_placement#General_strategy">here</a>.</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): IAvailableAccountsProps => {
  return state.present.accounts;
};

export default connect(
  mapStateToProps,
  {}
)(AssetAllocation);
