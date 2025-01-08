import { useEffect, useState } from "react";
import { ELoading } from "../enum/ELoading";

export function useLoadingStateUtil(initialState: ELoading) {
    const getStateText = (step: ELoading): string => {
        switch (step) {
            case ELoading.linking:
                return "Linking your NFC to app...";
            case ELoading.activating:
                return "Activating your account...";
            case ELoading.signingIn:
                return "Signing you in...";
            case ELoading.done:
                return "Done."
            default:
                return "";
        }
    };

    const [loadingState, setLoadingState] = useState<ELoading>(initialState);
    const [stateText, setStateText] = useState(getStateText(loadingState));

    useEffect(() => {
        setStateText(getStateText(loadingState))
    }, [loadingState])

    return { stateText, loadingState, setLoadingState };
}