import React, { useEffect } from "react"
import { ELoading } from "../../enum/ELoading"
import { View, Text, Button } from "react-native"
import * as Progress from "react-native-progress";
import { useLoadingStateUtil } from "../../util/loadingStateUtil";
import { loadingScreenDimensionStyles, circleProps } from "./styles/screen.dimension.styles"
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../styles/global.dimension.styles";
import { LoadingScreenIcons } from "../../icons/LoadingScreen.icons";
import useEthKeyService from "../../../services/EthKeyService";
import useEthWalletService from "../../../services/EthWalletService";
import useBackendInteractionService from "../../../services/BackendInteractionService";

type LoadingScreenProps = {
    initialLoadingState: ELoading.linking | ELoading.activating | ELoading.signingIn | ELoading.done,
    onLoadingStateChange: (newStep: ELoading) => void
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ initialLoadingState, onLoadingStateChange }) => {
    const { stateText, loadingState, setLoadingState } = useLoadingStateUtil(initialLoadingState);

    const keyService = useEthKeyService();
    const backendService = useBackendInteractionService();

    useEffect(() => {
        setTimeout(() => {
            onLoadingStateChange(loadingState);
        }, loadingState === ELoading.done ? 1000 : 0);
    }, [loadingState]);

    useEffect(() => {
        const loadKeys = async () => {
            let keys = await keyService.loadKeys();
            if (!keys) {
                keys = await keyService.generateKeys();
                if (!keys) return;
                await backendService.createUser("User", "email@mail.com", "deviceId", keys.address);
                await keyService.saveKeysToFile(keys);
            }
            if (keys) setLoadingState(ELoading.done);
        };

        loadKeys();
    }, []);

    if (loadingState !== ELoading.done) {
        return (
            <SafeAreaView style={globalStyles.safeAreaView}>
                <View style={{position: "absolute", marginTop: 50}}>
                    <Button /* Debug */ title="Change state" onPress={() => setLoadingState(ELoading.done)} />
                </View>
                <View style={loadingScreenDimensionStyles.container}>
                    <Progress.Circle style={loadingScreenDimensionStyles.circleStyle} {...circleProps}/>
                    <Text style={loadingScreenDimensionStyles.loadingText}>{stateText}</Text>
                </View>
            </SafeAreaView>
        )
    }
    else {
        return (
            <View style={loadingScreenDimensionStyles.container}>
                <View style={loadingScreenDimensionStyles.doneIcon}>
                    <LoadingScreenIcons.CongratulationsIcon width={"100%"} height={"100%"} />
                </View>
                <Text style={loadingScreenDimensionStyles.doneTitle}>Congrats!</Text>
                <Text style={loadingScreenDimensionStyles.doneText}>
                    You’ve successfully signed in to your account!
                </Text>
            </View>
        )
    }

}

export default LoadingScreen;