import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';


export default class BottomNav extends React.Component {
    state = {
        index: 0,
        routes: this.props.routes,
    };

    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap(this.props.NavigationStack);

    render() {
        return (
            <BottomNavigation
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
            />
        );
    }
}