import React, { Component } from 'react';
import CourseForm from './component/CourseForm';
import CourseList from './component/CourseList';
import './'
class App extends Component {

  state = {
    courses : [
      { name : 'HTML'},
      { name : 'CSS'},
      { name : 'JQuery'}
  ],
  current:''
  }

  //Update
  
  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  //addCourse
  addCourse = (e) => {

    let current = this.state.current;  
    let courses = this.state.courses;
    courses.push({name:current})
    this.setState({
      courses,
      current: ''
    })

    e.preventDefault();
  }

  //Delete Course
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    })
  }


  //Edit course 
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value; 
    this.setState({
      courses
    })
  }

  render() {
    const { courses }= this.state;
    const courseList = courses.map( (item, index) => {
      return <CourseList detail = {item} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    } )
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm current = {this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>
        <ul>
          { courseList }
        </ul>
      </section>
    );
  }
}

export default App;
