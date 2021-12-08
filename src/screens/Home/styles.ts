import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 12px;
`;

export const Load = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;
`;

export const Status = styled.View`
  flex: 1;
`;

export const StatusDate = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

export const Components = styled.ScrollView`
  margin-top: 10px;
  flex: 1;
`;

export const Component = styled.View`
  padding: 5px 24px;
  border-bottom-width: 1px;
  border-color: #ddd;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ComponentContent = styled.View``;

export const ComponentTitle = styled.Text`
  font-size: 26px;
`;

export const ComponentStatus = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #666;
`;

export const ComponentDot = styled.View<{color: string}>`
  background-color: ${({color})=>color};
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;

export const Footer = styled.View`
  padding: 12px 24px;
`;

export const UIButton = styled.TouchableOpacity`
  background-color: #5490df;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const UIButtonTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;