import { createContext, Dispatch, useContext, useState } from "react";

const DisabledListContext = createContext<Array<string|number>>([]);
const DisabledListDispatchContext = createContext<Dispatch<Array<string|number>>>(() => {});

export function DisabledListProvider({children}: {children: React.ReactNode}) {
    const [disabledList, setDisabledList] = useState<Array<string|number>>([]);
    return (
        <DisabledListContext.Provider value={disabledList}>
            <DisabledListDispatchContext.Provider value={setDisabledList}>
                {children}
            </DisabledListDispatchContext.Provider>
        </DisabledListContext.Provider>
    );
}

export function useDisabledList() {
    return useContext(DisabledListContext);
}

export function useDisabledListDispatch() {
    return useContext(DisabledListDispatchContext);
}
