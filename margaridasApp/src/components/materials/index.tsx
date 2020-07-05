import React from "react";
import {Container, Name, NameQuantity} from "./styles";
import {View} from "react-native";

const Materials: React.FC = () =>{
    return(
        <Container>
            <View>
                <Name>Nome: </Name>
                <NameQuantity>Quantidade comprada: </NameQuantity>
                <Name>preço que comprou: R$</Name>
            </View>
        </Container>
    )
}

export default Materials