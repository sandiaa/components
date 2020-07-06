import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
 
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                <div>Do you wanna do this</div>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
            author="Sam" 
            timeAgo="Today at 5:00 pm" 
            Content="Great Work"
            avatar={faker.image.avatar()}
            /> 
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail 
            author="Jane" 
            timeAgo="Today at 6:00 pm" 
            Content="Bad"
            avatar={faker.image.avatar() }
            /> 
            </ApprovalCard>          
        </div>
    );
};


ReactDOM.render (
    <App />, document.querySelector('#root')
);