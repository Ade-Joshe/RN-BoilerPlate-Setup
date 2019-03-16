import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Header from '../Components/Header';


export default class BottomNav extends React.Component {
    state = {
        index: 0,
        routes: this.props.routes,
    };

    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap(this.props.NavigationStack);

    render() {
        return (
            <React.Fragment>
                <Header
                    title={this.state.routes[this.state.index].title}
                    subtitle={this.state.routes[this.state.index].subtitle}
                    icons={this.state.routes[this.state.index].icons}
                />
                <BottomNavigation
                    navigationState={this.state}
                    onIndexChange={this._handleIndexChange}
                    renderScene={this._renderScene}
                />
            </React.Fragment>
        );
    }
}