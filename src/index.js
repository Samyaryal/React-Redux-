import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
           <CommentDetail 
                author = "Sam" 
                timeAgo="Today at 4:45PM" 
                commentBlog="Nice post"
                avatar={faker.image.avatar()}
            />
           <CommentDetail 
                author = "Alex"  
                timeAgo ="Today at 12:OOAM" 
                commentBlog="good luck with it"
                avatar={faker.image.avatar()}
            />
           <CommentDetail 
                author = "Jane" 
                timeAgo=" at 2:00PM" 
                commentBlog="Great job, keep it up"
                avatar={faker.image.avatar()}
            />
          
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'))
