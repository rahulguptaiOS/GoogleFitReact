class RequestParams{
    getStepsParam = (startMilis, endTimeMilis) => {
        aggregateData = {
            dataTypeName: 'com.google.step_count.delta',
            dataSourceId: 'derived:com.google.step_count.delta:com.google.android.gms:estimated_steps'
        }
        duration = {
            durationMillis: 24 * 3600 * 1000
        }
        param = {
            aggregateBy: aggregateData,
            bucketByTime: duration,
            startTimeMillis:startMilis,
            endTimeMillis: endTimeMilis
        }

        return param
    }
}

export default RequestParams