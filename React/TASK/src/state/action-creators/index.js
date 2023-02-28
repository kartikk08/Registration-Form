export const depositMoney = (amount) => {
return (dispatch) => {
    dispatch({
        type: 'deposit',
        payload: amount
    })
}

}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }

}


export const increment = (number) => {
    return (dispatch) => {
        dispatch({
        type : 'increment',
        payload: number
    })
    }

}

export const decrement = (number) => {
    return (dispatch) => {
        dispatch({
            type: 'decrement',
            payload: number
        })
    }
}

export const register = (user) => {
    return (dispatch) => {
        dispatch({
            type: 'REGISTRATION',
            payload: user
        })
    }
}

export const update = (updateduser) => {
    return (dispatch) => {
        dispatch({
            type: 'UPDATE',
            payload: updateduser
        })
    }
}