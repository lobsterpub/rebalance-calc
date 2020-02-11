import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as Bootstrap from "react-bootstrap";
import * as DnD from "react-beautiful-dnd";

import { AppState } from "../../store";
import { IAccount, AccountStateT } from "../../store/types/accountTypes";
import * as AccountActions from "../../store/actions/accountActions";
import Account from "./Account";

export interface IAccountListProps {
  /* State */
  accounts: AccountStateT;

  /* Actions */
  addAccount: typeof AccountActions.addAccount;
  moveAccount: typeof AccountActions.moveAccount;
}

class AccountList extends React.Component<IAccountListProps> {
  render() {
    const onDragEnd = (result: DnD.DropResult, provided: DnD.ResponderProvided): void => {
      if (!result.destination) {
        return;
      }

      let oldIndex = result.source.index;
      let newIndex = result.destination.index;
      this.props.moveAccount(oldIndex, newIndex);
    };

    const listItems = this.props.accounts.map((account: IAccount, index: number) => {
      return (
        <DnD.Draggable key={account.id} draggableId={account.id} index={index}>
        {(provided: DnD.DraggableProvided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="row" key={account.id}>
              <div className="col">
                <div style={{textAlign:"center"}}>=-=</div>
                <Account
                  alternateBackground={(index % 2) > 0}
                  account={account}
                />
                <div style={{textAlign:"center"}}>-=-</div>
              </div>
            </div>
          </div>
        )}
        </DnD.Draggable>
      );
    });

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h4>Current Account Balances:</h4>
            <div className="alert alert-info alert-sm">For help classifying accounts, see the first bullet in the list <a href="https://www.bogleheads.org/wiki/Principles_of_tax-efficient_fund_placement#General_strategy">here</a>.</div>
          </div>
        </div>
        <DnD.DragDropContext onDragEnd={onDragEnd}>
          <DnD.Droppable droppableId="droppable">
            {(provided: DnD.DroppableProvided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {listItems}
                {provided.placeholder}
              </div>
            )}
          </DnD.Droppable>
        </DnD.DragDropContext>
        <div className="row justify-content-center">
          <div className="col-lg-auto text-center">
            <Bootstrap.Button 
              variant="outline-primary" 
              className="btn-sm" 
              onClick={ this.props.addAccount }
            >
              +
            </Bootstrap.Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  accounts: state.present.accounts
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addAccount: () => dispatch(AccountActions.addAccount()),
  moveAccount: (oldIndex: number, newIndex: number) => dispatch(AccountActions.moveAccount(oldIndex, newIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountList);
