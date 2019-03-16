import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class Header extends React.Component {

    render() {
        return (
            <Appbar.Header>
                <Appbar.Content title={this.props.title} subtitle={this.props.subtitle ? this.props.subtitle : null} />
                {
                  this.props.icons &&
                  this.props.icons.map(icon =>
                    <Appbar.Action icon={icon.name}  />
                    )
                }
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