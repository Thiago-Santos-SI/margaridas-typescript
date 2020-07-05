import React from "react";
import {Text, View} from "react-native";

import Materials from "../../components/materials";
import {Container, Form, Title} from "./styles";

const HomeScreen: React.FC = () =>{

    return(
        <Container>
            <Form>
                <Title> Materiais </Title>
            </Form>
        </Container>
    )
}

export default HomeScreen