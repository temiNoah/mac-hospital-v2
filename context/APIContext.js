import React, { createContext, useState } from 'react'
import { apiObj } from '../api/api'

export const APIContext = createContext()

const { UserAuthAPI, CategoryAPI, AppointmentAPI, NewsLetterAPI } = apiObj


export const APIProvider = ({ children }) => {
    const [state, setState] = useState({
        userAuthAPI: UserAuthAPI(),
        categoryAPI: CategoryAPI(),
        appointmentAPI: AppointmentAPI(),
        newsLetterAPI: NewsLetterAPI()
    })

    return (
        <APIContext.Provider value={state}>
            {children}
        </APIContext.Provider>
    )

}