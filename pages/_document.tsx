import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document';
import {AppRegistry} from 'react-native-web';
import React from 'react';
import {flush} from 'react-native-media-query';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const {renderPage} = ctx;

        AppRegistry.registerComponent('react-native-stylesheet', () => Main);
        const {getStyleElement} = AppRegistry.getApplication('react-native-stylesheet');
        const page = await renderPage();
        const styles = [getStyleElement(), flush()];

        return {...page, styles: React.Children.toArray(styles)};
    }

    render() {
        return (
            <Html>
                <Head/>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}
