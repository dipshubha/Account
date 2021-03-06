export const convertButtonClick = () => ({
    type: 'CONVERT_BUTTON_CLICK'
});

export const userDetailsClear = () => ({
    type: 'CLEAR_DATAS'
});

export const showStateToFalse = () => ({
    type: 'SHOW_STATE_TO_FALSE',
});

export const onAccountsFetched = (accounts) => async (dispatch) => {
    accounts.sort((accountDetailsA, accountDetailsB) => {
        let nameA = accountDetailsA.Name.toUpperCase();
        let nameB = accountDetailsB.Name.toUpperCase();
        return (nameA < nameB) ? -1 : (nameB > nameA) ? 1 : 0;
    });
    dispatch ({
        type: 'ACCOUNT_FILE_SELECTED',
        payload: accounts
    });
};

export const accDetailsStatus = (data) => ({
    type: 'ACCOUNT_DETAILS_STATUS',
    payload: data
});

export const enterUserName = (data) => ({
    type: 'ENTER_USER_NAME',
    payload: data
});
