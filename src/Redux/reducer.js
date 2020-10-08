import { Login_Google, Logout, Persist, Total_Expense_Constant } from "../Util/Constants";

const startState = {
  heading : 'Expenses',
  loggedInUser:{},
  UserLogin:false,
  ExpenseLog:[],
  UpcomingExpense:[],
  TotalExpenses:0,
  TotalUpcomingExpense:0,
  userObject: {}
}

export default (state = startState , action) => {
        switch( action.type ) {
          case Login_Google:
            let userobj = JSON.stringify(action.value)
            localStorage.setItem('user',userobj)
            console.log(action.value)
            return {
              ...state,
              UserLogin:true,
              userObject:action.value
            }
          case Persist:
            let userData = localStorage.getItem('user')
            console.log("in persist")
            if(userData)
            {
              console.log(userData)
              return {
                ...state,
                UserLogin:true,
                userObject:JSON.parse(userData)
              }
            }
            return state;
          case Logout:
            localStorage.removeItem('user')
            return {
              ...state,
              UserLogin:false,
              userObject:{}
            }
          default :
            return state;
        }
}