const textInputFactory = function ({ React, Dimensions }) {
    const {
        TouchableOpacity,
        Text,
        TextInput,
        StatusBarIOS,
        View,
    } = React;
    const {
        func,
        object,
        string
    } = React.PropTypes;

    const Screen = {
        height: Dimensions.getHeight(),
        width: Dimensions.getWidth()
    };
    const styles = {
        /** View **/
        view_default:{
            borderColor: '#d3d3d3',
            borderBottomWidth: 1,
            paddingBottom: 5,
            paddingLeft: 16,
            paddingTop: 6
        },
        view_inline:{
            borderColor: '#d3d3d3',
            borderBottomWidth: 1,
            flexDirection: 'row',
            paddingBottom: 5,
            paddingLeft: 16,
            paddingTop: 6,
        },
        view_stacked:{
            borderColor: '#d3d3d3',
            borderBottomWidth: 1,
            paddingBottom: 5,
            paddingLeft: 16,
            paddingTop: 6,
        },

        /** Text **/
        text_default:{
            position: 'absolute',
            height: 0,
            width: 0
        },
        text_inline:{
            fontSize: 16,
            height: 36,
            paddingTop: 7,
            paddingRight: 10,
            paddingBottom: 7,
            width: ( [ Screen.width - 16 ] / 100 ) * 35
        },
        text_stacked:{
            fontSize: 16,
            paddingTop: 4,
            width: Screen.width
        },

        /** TextInput **/
        textInput_default:{
            fontSize: 14,
            height: 34,
            paddingBottom: 1,
            paddingTop: 2,
            width: Screen.width
        },
        textInput_inline:{
            fontSize: 14,
            height: 34,
            paddingRight: 24,
            width: ( [ Screen.width - 16 ] / 100 ) * 65
        },
        textInput_stacked:{
            fontSize: 14,
            height: 34,
            paddingBottom: 3,
            paddingRight: 8,
            paddingTop: 2,
            width: Screen.width
        }
    };


    return function _TextInput( props ) {
        _TextInput.PropTypes = {
            class: string,
            label: string,
            onChangeText: func,
            placeholder: string,
            value: string
        };

        return {
            props,

            setText( value ) {
                try {
                    return props.onChangeText(value);
                } catch (_error) {}
            },

            render() {
                const _styleView = styles[ "view_" + this.props.class ]; 
                const _styleText = styles[ "text_" + this.props.class ]; 
                const _styleTextInput = styles[ "textInput_" + this.props.class ];

                return(
                    <View style={[ _styleView ]} onPress={ () => this.refs.textInput.focus() }>
                        <Text style={[ _styleText ]} onPress={ () => this.refs.textInput.focus() } >
                            { this.props.label }
                        </Text>
                        <TextInput
                            ref='textInput'
                            onChangeText={ this.setText }
                            value={ this.props.value }
                            placeholder={ this.props.placeholder }
                            style={[ _styleTextInput ]} />
                    </View>
                )
            }
        }
    }
};

export default textInputFactory;