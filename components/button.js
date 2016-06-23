const buttonFactory = function({ React, Dimensions }) {
    const { 
        TouchableOpacity,
        Text,
        StatusBarIOS,
        View,
    } = React;
    const {
        func,
        object,
        string
    } = React.PropTypes;

    const styles = {
        /** Button **/
        button_size_small: {
            height: 31,
            marginTop: 10,
            marginBottom: 10,
            paddingLeft: 4,
            paddingRight: 4,
            justifyContent: 'center'
        },
        button_size_default: {
            height: 47,
            marginTop: 10,
            marginBottom: 10,
            paddingLeft: 12,
            paddingRight: 12,
            justifyContent: 'center'
        },
        button_size_large: {
            height: 59,
            marginTop: 10,
            marginBottom: 10,
            paddingLeft: 16,
            paddingRight: 16,
            justifyContent: 'center'
        },
        button_size_block: {
            height: 47,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            paddingLeft: 12,
            paddingRight: 12,
            justifyContent: 'center',
            width: Dimensions.getWidth() - 20
        },
        button_size_full: {
            height: 47,
            marginTop: 10,
            marginBottom: 10,
            paddingLeft: 16,
            paddingRight: 16,
            justifyContent: 'center',
            width: Dimensions.getWidth(),
            borderLeftWidth: 0,
            borderRightWidth: 0
        },

        /** Text **/
        text_size_small: {
            fontSize: 12,
            textAlign: 'center'
        },
        text_size_default: {
            fontSize: 16,
            textAlign: 'center'
        },
        text_size_large: {
            fontSize: 20,
            textAlign: 'center'
        },
        text_size_block: {
            fontSize: 16,
            textAlign: 'center'
        },
        text_size_full: {
            fontSize: 16,
            textAlign: 'center'
        }
    };

    return function Button( props ){
        Button.PropTypes = {
            backgroundColor: string,
            children: string.isRequired,
            onLongPress: func,
            onPress: func,
            onPressIn: func,
            onPressOut: func,
            textColor: string,
            width: string,
            size: string,
            styleButton: object,
            styleText: object
        };

        return{
            props,

            render() {
                const touchableProps = {
                    onPress: this.props.onPress,
                    onPressIn: this.props.onPressIn,
                    onPressOut: this.props.onPressOut,
                    onLongPress: this.props.onLongPress
                };
                const _size = {
                    border: !this.props.backgroundColor ? { borderColor: '#cccccc', borderWidth: 1 } : null,
                    button: styles['button_size_' + this.props.size] ? styles['button_size_' + this.props.size] : styles['button_size_default'],
                    text: styles['text_size_' + this.props.size] ? styles['text_size_' + this.props.size] : styles['text_size_default'],
                    width: { width: Dimensions.calculationWidth( this.props.width ) }
                };

                return ( 
                    <TouchableOpacity 
                        style = {[ _size.button, _size.border, _size.width, this.props.styleButton, { backgroundColor: this.props.backgroundColor } ]}
                        {...touchableProps} >
                        <Text style = {[ _size.text, this.props.styleText, { color: this.props.textColor } ]}> 
                            { this.props.children } 
                        </Text>
                    </TouchableOpacity>
                )
            }
        }
    }
}

export default buttonFactory;