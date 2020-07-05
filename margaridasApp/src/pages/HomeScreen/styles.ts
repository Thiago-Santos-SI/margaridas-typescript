import styled from 'styled-components/native';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {getStatusBarHeight} from 'react-native-status-bar-height';


interface User {
    id: number;
    name: string;
}


export const Container = styled(LinearGradient).attrs({
    colors: ['#7159c1', '#9b50c1'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1},
})`
  flex: 1;
  padding-top: ${25 + getStatusBarHeight()}px;
  padding-bottom: 10px;
`;

export const ContainerCustos = styled(LinearGradient).attrs({
    colors: ['#7159c1', '#9b50c1'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 1},
})`
  flex: 1;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
  padding: 0px 20px;
`;