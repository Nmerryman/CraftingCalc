import { createContext, Dispatch, useContext, useState } from "react";
import { RRKey } from "@/app/crafting/solver";

const DisabledListContext = createContext<Array<RRKey>>([]);
const DisabledListDispatchContext = createContext<Dispatch<Array<RRKey>>>(() => {});

export function DisabledListProvider({children}: {children: React.ReactNode}) {
    const [disabledList, setDisabledList] = useState<Array<RRKey>>([]);
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


export function removeFromDisabledList(item: RRKey, disabledList: Array<RRKey>, setDisabledList: Dispatch<Array<RRKey>>) {
    setDisabledList(disabledList.filter(i => i != item));
}
