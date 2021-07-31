import React from 'react'
import {View, Text} from 'react-native'
import styles from './Style/GFitStyle'

export default class StepComponent extends React.Component {
    render() {
        console.log(this.props.steps)
        return (<View style = {styles.listStyle}>
                    <View >
                        <Text>
                            {"Start date:"+this.props.steps.startDate}
                        </Text>
                        <Text>
                            {"End date:"+this.props.steps.endDate}
                        </Text>
                    </View>
                    <Text style = {styles.textStyel}>
                        {this.props.steps.count+" steps"}
                    </Text>
        </View>)
    }
}