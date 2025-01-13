import React, { useEffect } from "react"
import { ELoading } from "../../enum/ELoading"
import { View, Text, Button } from "react-native"
import * as Progress from "react-native-progress";
import { useLoadingStateUtil } from "../../util/loadingStateUtil";
import { dimensionStyles, circleProps } from "./styles/screen.dimension.styles"
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../../styles/global.styles";

type LoadingScreenProps = {
    initialLoadingState: ELoading.linking | ELoading.activating | ELoading.signingIn | ELoading.done,
    onLoadingStateChange: (newStep: ELoading) => void
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ initialLoadingState, onLoadingStateChange }) => {
    const { stateText, loadingState, setLoadingState } = useLoadingStateUtil(initialLoadingState);

    useEffect(() => {
        setTimeout(() => {
            onLoadingStateChange(loadingState);
        }, loadingState === ELoading.done ? 1000 : 0);
    }, [loadingState]);

    if (loadingState !== ELoading.done) {
        return (
            <SafeAreaView style={globalStyles.safeAreaView}>
                <View style={{position: "absolute", marginTop: 50}}>
                    <Button /* Debug */ title="Change state" onPress={() => setLoadingState(ELoading.done)} />
                </View>
                <View style={dimensionStyles.container}>
                    <Progress.Circle style={dimensionStyles.circleStyle} {...circleProps}/>
                    <Text style={dimensionStyles.loadingText}>{stateText}</Text>
                </View>
            </SafeAreaView>
        )
    }
    else {
        return (
            <View style={dimensionStyles.container}>
                <View style={dimensionStyles.doneIcon}></View>
                <Text style={dimensionStyles.doneTitle}>Congrats!</Text>
                <Text style={dimensionStyles.doneText}>
                    You’ve successfully signed in to your account!
                </Text>
            </View>
        )
    }

}

export default LoadingScreen;