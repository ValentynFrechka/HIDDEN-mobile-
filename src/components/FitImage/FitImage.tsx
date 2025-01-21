import { Image, ImageSourcePropType } from "react-native";
import fitImageStyles from "./styles/fitImage.styles";

type FitImageProps = {
    src: ImageSourcePropType;
}

export const FitImage: React.FC<FitImageProps> = ({ src }) => {
    return (
        <Image resizeMode="contain" style={fitImageStyles.dimensions} source={src}/>
    );
}