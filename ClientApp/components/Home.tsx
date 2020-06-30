import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MyComponent from 'simplewebrtc-screenshare-application-v2';
//import 'simplewebrtc-screenshare-application-v2/dist/index.css';//import 'simplewebrtc-screenshare-application/dist/index.css'

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    
    public render() {
        
        return <div>
            <h1>Hello!</h1>
            <MyComponent />
        </div>;
    }
}
