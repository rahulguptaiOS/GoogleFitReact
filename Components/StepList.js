import React from 'react'
import FetchResource from './NetworkManager/FetchResource'
import {FlatList, View, ActivityIndicator} from 'react-native'
import StepComponent from './StepComponent'
import styles from './Style/GFitStyle'

export default class StepList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {steps: []}
    }

    componentDidMount() {
        var endDate = new Date().getTime()
        var startDate = endDate - (this.props.route.params.numOfDays * 24 * 3600 * 1000)
        var fetchResource = new FetchResource()
        fetchResource.fetchSteps(startDate, endDate)
        .then((stepsDetails) => {
            this.getViewModel(stepsDetails)
        })
    }

    getViewModel = (stepBuckets) => {
        var stepsArray = []
        stepBuckets.forEach((item, index, array) => {
             let stepView = {
                 key: index,
                 startDate: this.getReadableDate(item.startTimeMillis),
                 endDate: this.getReadableDate(item.endTimeMillis),
                 count: this.getStepsFromDataSet(item.dataset)
            }
            stepsArray.push(stepView)
        })
        this.setState({steps : stepsArray})
    }

    getStepsFromDataSet = (dataset) => {
        var steps = 0
        dataset.forEach((item, index, array) => {
            item.point.forEach((item, index, array) => {
                item.value.forEach((item, index, array) => {
                    steps = steps + item.intVal
                })
            })
        })
        return steps
    }

    getReadableDate = (timeInMillis) => {
        let date = new Date(Number(timeInMillis))
        return date.toDateString() 
    }

    render(){
        return (
            <View style = {styles.stepScreen}>
            {this.state.steps.length == 0 ? 
            <ActivityIndicator/> : 
            <FlatList 
                data = {this.state.steps}
                renderItem={({item}) => <StepComponent steps = {item} key = {""+ item.key}
            />}
            />}
        </View>
        )
    }

}