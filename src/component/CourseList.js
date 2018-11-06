import React, { Component } from 'react';

class CourseList extends Component {

    state = {
        isEdit : false
    }
    renderCourse =  () => {
        return(
            <li>
            <span>{this.props.detail.name}</span>
            <button onClick={this.toogleState}>Edit Course</button>
            <button onClick={() => this.props.deleteCourse(this.props.index)}> Delete Course</button>
          </li>
        )
    }

    //tooglestate
    toogleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit : !isEdit
        })
    }
    updateCourseItem = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toogleState();
    }

    //render update
    renderUpdateForm = (e) => {
        return(
            <form onSubmit={this.updateCourseItem}>
                <input type="text" ref={(v) => {this.input = v}} defaultValue={this.props.detail.name}/>
                <button>Update Course</button>
            </form>
           
        )
        
    }

  render() {
      let {isEdit} = this.state;
    return (
      <React.Fragment>
        { isEdit ? this.renderUpdateForm() : this.renderCourse() }
      </React.Fragment>
    );
  }
}
export default CourseList;