import { createSlice } from "@reduxjs/toolkit";


export const appSlice = createSlice({
    name: 'app',
    initialState: {
        itemTitle: null,
        itemPrice: null,
        itemImg: null,
    },
    reducers: {
        setitemTitle: (state, action) => {
            state.app += action.payload
        },

    },
});


export const { setitemTitle } = appSlice.actions;

export const selectitemTitlesetitemTitle = (state) => state.app.itemTitle;
export const selectitemTitlesetitemPrice = (state) => state.app.itemPrice;
export const selectitemTitlesetitemImg = (state) => state.app.itemImg;

export default appSlice.reducer;