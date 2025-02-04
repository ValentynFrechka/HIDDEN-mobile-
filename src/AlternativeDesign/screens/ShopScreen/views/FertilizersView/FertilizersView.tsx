import { View, Text, ImageSourcePropType } from "react-native";
import FertilizersShopRow from "../../components/FertilizersShopRow/FertilizersShopRow";
import { FertilizersDataProvider } from "../../providers/FertilizersDataProvider";
import { useState } from "react";
import FertilizerStatusBlock from "../../components/FertilizerStatusBlock/FertilizerStatusBlock";
import fertilizersViewStyles from "./styles/fertilizersView.styles";
import { ShopScreenIcons } from "../../../../icons/ShopScreenIcons";
import UserBalanceInfo from "../../../../components/UserBalanceInfo/UserBalanceInfo";
import { ECurrency } from "../../../../components/UserBalanceInfo/enum/ECurrency";

type FertilizerStat = {
    [name: string]: {
        iconSrc: ImageSourcePropType;
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
                iconSrc: fertilizer.iconSrc,
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
                                iconSrc={fertilizer.iconSrc} 
                                name={fertilizer.name} 
                                description={(fertilizer.description ? fertilizer.description : undefined)}
                                price={fertilizer.price}                        
                            />
                        ))}
                    </View>
                    
                    <UserBalanceInfo balance={balance} currency={ECurrency.leafs} style={fertilizersViewStyles.yourBalanceContainer}/>
                </View>

                <View style={fertilizersViewStyles.statusView}>
                    {Object.keys(fertilizerStats).map((key) => (
                        <FertilizerStatusBlock
                            key={key} 
                            iconSrc={fertilizerStats[key].iconSrc}
                            amount={fertilizerStats[key].amount}                       
                        />
                    ))}
                </View>
            </View>
        </View>
    );
};

export default FertilizersView;