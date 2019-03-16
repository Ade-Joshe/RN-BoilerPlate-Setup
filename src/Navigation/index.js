import * as React from 'react';
import { Music, Album, Recent } from '../Screens';
import BottomNav from '../Components/BottomNav';

routes = [
    { key: 'music', title: 'Music', icon: 'queue-music' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
];

stack = {
    music: Music,
    albums: Album,
    recents: Recent,
};
const Navigation = () => {
    return (
        <BottomNav routes={routes} NavigationStack={stack} />
    );
}

export default Navigation;