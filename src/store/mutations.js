const mutations = {
	SET_Profile(state, val) {
		state.Profile= val
  },
  SET_token(state, val) {
    state.App.token=val
  },
  SET_Nickname(state, val) {
    state.Profile.Nickname=val
  },
  SET_Sex(state, val) {
    state.Profile.Sex=val
  },
  SET_Introduce(state, val) {
    state.Profile.Introduce=val
  },
  SET_Address(state, val) {
    state.Profile.Address=val
  },
  SET_Birth(state, val) {
    state.Profile.Birth=val
  },
  SET_Password(state, val) {
    state.Profile.Password=val
  },
  SET_Phone_get(state, val) {
    state.Profile.Phone_get=val
  },
  SET_Address_get(state, val) {
    state.Profile.Address_get=val
  },
  SET_Emile(state, val) {
    state.Profile.Emile=val
  },


  SET_News(state, val) {
    state.News=val
  },


  SET_Data_det(state, val) {
    state.Data_det=val
  },
  // SET_Car(state, val) {
  //   state.Profile.Car[state.Profile.Car.length]=val
  // },
  PUT_Car(state, val) {
    state.Profile.Car=val
  },
  SET_Car_num(state, val) {
    state.Profile.Car[state.App.Num ].num= val
  },
  SET_Num(state, val) {
    state.App.Num = val
  },
  SET_Car_checked(state, val) {
    state.Profile.Car[state.App.Num ].checked= val
  },
  SET_All_checked(state, val) {
    state.App.All_checked= val
  },

  PUT_History(state, val) {
    state.Profile.History=val
  },

  PUT_Collect(state, val) {
    state.Profile.Collect=val
  },


  PUT_My_order_order(state, val) {
    state.Profile.My_order=val
  },
  PUT_My_order(state, [index,val]) {
    state.Profile.My_order[index].active=val
  },


  PUT_Guess(state, val) {
    state.Guess=val
  },
  SET_Guess(state, val) {
    state.Guess[state.Guess.length]=val
  },
  PUT_My_guess(state, val) {
    state.Profile.Guess=val
  },
  
  SET_Search_data(state, val) {
    state.Search_data[state.Search_data.length]=val
  },
  PUT_Search_data(state, val) {
    state.Search_dat=val
  },

  Delete_History(state, val) {
    state.Profile.History=val
  },
  Delete_Collect(state, val) {
    state.Profile.Collect=val
  }
  
}
 

export default mutations;