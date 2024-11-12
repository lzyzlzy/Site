import { createContext, useReducer } from 'react';

export const ConfigContext = createContext(null);
export const ConfigDispatchContext = createContext(null);

export function ConfigProvider({ children }) {
    let config = require('../config.json')
    let defaultData = config.data.find(i => i.key === config.defaultKey)
    const [data, dispatch] = useReducer(
        keyReducer,
        [config, defaultData]
    );

    return (
        <ConfigContext.Provider value={data}>
            <ConfigDispatchContext.Provider value={dispatch}>
                {children}
            </ConfigDispatchContext.Provider>
        </ConfigContext.Provider>
    );
}

function keyReducer([config, key], action) {
    switch (action.type) {
        case 'setKey': {
            let data = config.data.find(i => i.key === action.key)
            return [config, data];
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}