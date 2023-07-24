import { FC } from "react";
import { VictoryBar, VictoryChart, VictoryStack, VictoryTheme } from "victory";

interface Props {
  dataToPlot: {
    user: string;
    followers: number;
  }[];
}

const FollowersChart: FC<Props> = ({ dataToPlot }) => {
  console.log(dataToPlot);
  return (
    <div>
      <VictoryChart domainPadding={{ x: 20 }} theme={VictoryTheme.material}>
        <VictoryStack colorScale={"warm"}>
          <VictoryBar data={dataToPlot} x="user" y="followers" />
        </VictoryStack>
      </VictoryChart>
    </div>
  );
};

export default FollowersChart;
