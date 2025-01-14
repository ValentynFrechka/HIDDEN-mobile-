import { TouchableOpacity, View, Text } from "react-native";
import { ensureContext } from "./TabbedViewContext";
import React, { useState } from "react";
import tabbedViewStyles from "./tabbedView.styles";

type TabbedViewProps = {
    context: string;
    fontColor: string;
    views: { [label: string]: React.ComponentType };
    initialView?: string;
    rerenderViews?: boolean;
}

const TabbedView: React.FC<TabbedViewProps> = ({ context, fontColor, views, initialView = Object.keys(views)[0], rerenderViews }) => {
    const [view, setView] = useState<string>(initialView);
    const Context = ensureContext(context);

    const getBorderStyle = (label: string) => {
        if (view === label)
            return tabbedViewStyles.activeBorder
        else return tabbedViewStyles.inactiveBorder;
    }

    const renderView = () => {
        if (rerenderViews) {
            return (
                <>
                {React.createElement(views[view])}
                </>
            );
        }
        else {
            return (
                <>
                {Object.entries(views).map(([label, Component]) => (
                    <View
                        key={label}
                        style={{
                            display: label === view ? "flex" : "none",
                            flex: 1,
                        }}
                    >
                        <Component />
                    </View>
                ))}
                </>
            )
        }
    }

    return (
        <Context.Provider value={{ view, setView }}>
            <View style={tabbedViewStyles.container}>
                <View style={tabbedViewStyles.tabsRow}>
                    {Object.keys(views).map((label) => (
                        <TouchableOpacity key={label} onPress={() => setView(label)} style={getBorderStyle(label)}>
                            <Text style={[tabbedViewStyles.tabText, { color: fontColor }]}>{label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={tabbedViewStyles.contentContainer}>
                    {renderView()}
                </View>
            </View>
        </Context.Provider>
    );
};

export default TabbedView;