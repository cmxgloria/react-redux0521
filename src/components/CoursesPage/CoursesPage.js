import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../redux/actions/courseActions';
import PropTypes from 'prop-types';

class CoursesPage extends React.Component {
  state = {
    course: {
      title: '',
    },

    // this.handleChange = this.handleChange.bind(this);
  };

  // arrow function inherit the binding context of their enclosing scope
  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  };

  handleSubmit = (event) => {
    // this prevent form from causing the page to reload, prevent browser default behavior
    event.preventDefault();
    this.props.createCourse(this.state.course);
    // alert(this.state.course.title);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Courses</h2>
          <h3>Add Course</h3>
          <input
            type="text"
            value={this.state.course.title}
            onChange={this.handleChange}
          />
          <input type="submit" value="Save" />
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Javascript</li>
            <li>Ruby</li>
            <li>
              {this.props.courses.map((course) => (
                <div key={course.title}>{course.title}</div>
              ))}
            </li>
          </ul>
        </form>
      </div>
    );
  }
}
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

//Action creator must be called by dispatch, or nothing happens
function mapDispatchToProps(dispatch) {
  return {
    createCourse: (course) => dispatch(courseActions.createCourse(course)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
