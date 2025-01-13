import { View, Text } from "react-native";
import FertilizersShopRow from "../components/FertilizersShopRow";
import { FertilizersDataProvider } from "../providers/FertilizersDataProvider";
import { useState } from "react";
import FertilizerStatusBlock from "../components/FertilizerStatusBlock";
import dimensionStyles from "../styles/fertilizersView.styles";

type FertilizerStat = {
    [name: string]: {
        iconPath: string;
        amount: number;
    };
};

const FertilizersView = () => {
    const fertilizersDataProvider = FertilizersDataProvider.instance;

    const [balance, setBalance] = useState(320);

    const getFertilizerAmountStat = (name: string) => {
        return 0;
    }

    const [fertilizerStats, setFertilizerStats] = useState<FertilizerStat>(
        fertilizersDataProvider.fertilizers.reduce ((acc, fertilizer) => {
            acc[fertilizer.name] = {
                iconPath: fertilizer.iconPath,
                amount: getFertilizerAmountStat(fertilizer.name)
            };
            return acc;
        }, {} as FertilizerStat)
    );
    
    return (
        <View style={dimensionStyles.container}>
            <View style={dimensionStyles.spacedVerticalContainer}>
                <View style={dimensionStyles.buyingContainer}>
                    <View style={dimensionStyles.fertilizersListContainer}>
                        {fertilizersDataProvider.fertilizers.map((fertilizer) => (
                            <FertilizersShopRow
                                key={fertilizer.name} 
                                iconPath={fertilizer.iconPath} 
                                name={fertilizer.name} 
                                description={(fertilizer.description ? fertilizer.description : undefined)}
                                price={fertilizer.price}                        
                            />
                        ))}
                    </View>

                    <View style={dimensionStyles.yourBalanceContainer}>
                        <Text style={dimensionStyles.yourBalanceText}>Your current balance:</Text>
                        
                        <View style={dimensionStyles.horizontalBalanceContainer}>
                            <View style={dimensionStyles.leafIcon}>

                            </View>

                            <Text style={dimensionStyles.balance}>{balance}</Text>
                        </View>
                    </View>
                </View>

                <View style={dimensionStyles.statusView}>
                    {Object.keys(fertilizerStats).map((key) => (
                        <FertilizerStatusBlock
                            key={key} 
                            iconPath={fertilizerStats[key].iconPath}
                            amount={fertilizerStats[key].amount}                       
                        />
                    ))}
                </View>
            </View>
        </View>
    );
};

export default FertilizersView;