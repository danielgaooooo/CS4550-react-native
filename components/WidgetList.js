import React from 'react'
import {View, Button} from 'react-native'
import {ListItem} from 'react-native-elements'

class WidgetList extends React.Component {
    static navigationOptions = {title: 'Widgets'}

    constructor(props) {
        super(props);
        this.state = {
            widgets: [],
            courseId: 1,
            moduleId: 1
        }
    }

    componentDidMount() {
        const {navigation} = this.props;
        const lessonId = navigation.getParam("lessonId");
        fetch("http://localhost:8080/api/lesson/" + lessonId + "/widget")
            .then(response => (response.json()))
            .then(widgets => this.setState({widgets}))
    }

    render() {
        return (
            <View style={{padding: 15}}>
                <Button title="Create New Assignment"
                        onPress={() => this.props.navigation
                            .navigate('AssignmentWidget')}/>
                {this.state.widgets.map(
                    (widget, index) => (
                        <ListItem
                            onPress={() => this.props.navigation
                                .navigate("QuestionList", {examId: widget.id})}
                            key={index}
                            subtitle={widget.text}
                            title={widget.name}/>))}
            </View>
        )
    }
}

export default WidgetList;