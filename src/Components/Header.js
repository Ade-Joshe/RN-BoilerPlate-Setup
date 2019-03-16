import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class Header extends React.Component {
      _goBack = () => console.warn('Went back');

      _onSearch = () => console.warn('Searching');

      _onMore = () => console.warn('Shown more');

    render() {
        return (
            <Appbar.Header>
                {/* <Appbar.BackAction onPress={this._goBack} /> */}
                <Appbar.Content title="Title" subtitle="Subtitle" />
                <Appbar.Action icon="search" onPress={this._onSearch} />
                <Appbar.Action icon="more-vert" onPress={this._onMore} />
            </Appbar.Header>
        );
    }
}

/*****
 * class MyComponent extends React.Component {
  render() {
    return (
      <Appbar style={styles.bottom}>
        <Appbar.Action icon="archive" onPress={() => console.log('Pressed archive')} />
        <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
        <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
        <Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} />
      </Appbar>
    );
  }
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
 *
 */