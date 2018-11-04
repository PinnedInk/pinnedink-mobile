import { StackNavigator } from "react-navigation";
import { Works } from "./screens/works";

const Routes = StackNavigator({
    FirstScreen : { screen: Works },
});

export default Routes;
