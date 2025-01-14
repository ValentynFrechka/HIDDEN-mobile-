import { View, Text } from "react-native";
import FertilizersShopRow from "../../components/FertilizersShopRow/FertilizersShopRow";
import { FertilizersDataProvider } from "../../providers/FertilizersDataProvider";
import { useState } from "react";
import FertilizerStatusBlock from "../../components/FertilizerStatusBlock/FertilizerStatusBlock";
import fertilizersViewStyles from "./styles/fertilizersView.styles";

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
        <View style={fertilizersViewStyles.container}>
            <View style={fertilizersViewStyles.spacedVerticalContainer}>
                <View style={fertilizersViewStyles.buyingContainer}>
                    <View style={fertilizersViewStyles.fertilizersListContainer}>
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

                    <View style={fertilizersViewStyles.yourBalanceContainer}>
                        <Text style={fertilizersViewStyles.yourBalanceText}>Your current balance:</Text>
                        
                        <View style={fertilizersViewStyles.horizontalBalanceContainer}>
                            <View style={fertilizersViewStyles.leafIcon}>

                            </View>

                            <Text style={fertilizersViewStyles.balance}>{balance}</Text>
                        </View>
                    </View>
                </View>

                <View style={fertilizersViewStyles.statusView}>
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