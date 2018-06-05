import React from 'react'
import {View, Button} from 'react-native'
import {FormLabel, FormInput, Text} from 'react-native-elements'

class AssignmentWidget extends React.Component {
    static navigationOptions = {title: 'Create an Assignment'};

    constructor(props) {
        super(props);
        this.state = {
            lessonId: 1,
            title: '',
            description: '',
            points: 0,
            link: '',
            file: '',
            answer: '',
            preview: true
        };
        this.preview = this.preview.bind(this);
        this.previewOff = this.previewOff.bind(this);
    }

    componentDidMount() {

    }

    preview() {
        this.setState({preview: true});
    }

    previewOff() {
        this.setState({preview: false});
    }

    render() {
        return (
            <View>
                <View hidden={!this.state.preview}>
                    <FormLabel>Title</FormLabel>
                    <FormInput onChangeText={
                        text => this.updateForm({title: text})
                    }/>

                    <FormLabel>Description</FormLabel>
                    <FormInput onChangeText={
                        text => this.updateForm({description: text})
                    }/>

                    <FormLabel>Points</FormLabel>
                    <FormInput onChangeText={
                        text => this.updateForm({points: text})
                    }/>
                    <Button onPress{() => this.preview}>Preview</Button>
                </View>
                <View hidden={this.state.preview}>
                    <Text h2>{this.state.title}</Text>
                    <Text h2>{this.state.points}</Text>
                    <Text>{this.state.description}</Text>
                    <Text h2>Essay Answer</Text>


                    <Button onPress{() => this.previewOff}>Back to Editing</Button>
                </View>
            </View>
        )
    }
}

export default AssignmentWidget;