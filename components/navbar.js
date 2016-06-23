const navBarFactory = function ({ React, Dimensions }) {
    const {
        TouchableOpacity,
        Text,
        StatusBar,
        View,
        Image,
    } = React;
    const {
        func,
        object,
        string
    } = React.PropTypes;

    const navBarHeight = 44;
    const statusBarHeight = 20;
    const styles = {
        navBar: {
            width: Dimensions.getWidth(),
        },
        navBarContainer: {
            backgroundColor: '#fff',
            borderColor: '#c9c9c9',
            borderBottomWidth: 1,
            height: navBarHeight,
            padding: 5
        },
        buttonText: {
            alignItems: 'center',
            height: navBarHeight - 10,
            position: 'absolute',
            justifyContent: 'center'
        },
        buttonTextCenter: {
            right: 5,
            left: 5
        },
        buttonTextLeft: {
            left: 5
        },
        buttonTextRight: {
            right: 5,
        },
        titleText: {
            fontSize: 17,
            color: '#000'
        },


    };


    return function NavBar( props ) {
        NavBar.propTypes = {
            backgroundColor: string,
            titleCenter: React.PropTypes.shape({
                color: string,
                onPress: func,
                onPressIn: func,
                onPressOut: func,
                onLongPress: func,
                text: string,
                style: object,
                source:String,
            }),
            titleLeft: React.PropTypes.shape({
                color: string,
                onPress: func,
                onPressIn: func,
                onPressOut: func,
                onLongPress: func,
                text: string,
                style: object,
                source:String,
            }),
            titleRight: React.PropTypes.shape({
                color: string,
                onPress: func,
                onPressIn: func,
                onPressOut: func,
                onLongPress: func,
                text: string,
                style: object,
                source:String,
            }),
        };

        return {
            props,

            getTitleNavBar(title, type) {
                if (title) {
                    const touchableProps = {
                        onPress: title.onPress,
                        onPressIn: title.onPressIn,
                        onPressOut: title.onPressOut,
                        onLongPress: title.onLongPress
                    };
                    const _activeOpacity = !title.onPress && !title.onPressIn && !title.onPressOut && !title.onLongPress ? 1 : 0;
                    var tempText;
                    if(title.source){
                        tempText = <Image style = {[styles.titleText, {color: title.color}, title.style]}
                                         source = {title.source}
                        >
                        </Image>
                    } else{
                        if (title.text) {
                            tempText =  <Text style = {[styles.titleText, {color: title.color}, title.style]}>
                                { title.text }
                            </Text>

                          }
                    }

                    return (
                        <TouchableOpacity style = {[ type, styles.buttonText ]}
                                          activeOpacity = { _activeOpacity }
                            {...touchableProps }>
                            {tempText}


                        </TouchableOpacity>
                    )
                }
            },

            render() {
                const _statusBarStyle = this.props.statusBarHidden ? { height: 0 } : { height: statusBarHeight };
                this.props.statusBarHidden ? StatusBar.setHidden(true) : StatusBar.setHidden(false);

                return (
                    <View style = { styles.navBar } >
                        <View style = {[ _statusBarStyle, { backgroundColor: this.props.backgroundColor }]}></View>
                        <View style = {[ styles.navBarContainer, { backgroundColor: this.props.backgroundColor }]}>
                            { this.getTitleNavBar( this.props.titleCenter, styles.buttonTextCenter ) }
                            { this.getTitleNavBar( this.props.titleLeft, styles.buttonTextLeft ) }
                            { this.getTitleNavBar( this.props.titleRight, styles.buttonTextRight ) }
                        </View>
                    </View>
                )
            }
        }
    }
}

export default navBarFactory;
