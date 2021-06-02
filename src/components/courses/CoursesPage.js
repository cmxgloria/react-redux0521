import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../redux/actions/courseActions';
import * as authorActions from '../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CourseList from './CourseList';
import { Redirect } from 'react-router-dom';
import { Spinner } from '../common/Spinner';
// import apiCallsInProgress from '../redux/reducers/apiStatusReducer';
import { toast } from 'react-toastify';

class CoursesPage extends React.Component {
  state = { redirectToAddCoursePage: false };
  // state = {
  //   course: {
  //     title: '',
  //   },

  //   // this.handleChange = this.handleChange.bind(this);
  // };

  // // arrow function inherit the binding context of their enclosing scope
  // handleChange = (event) => {
  //   const course = { ...this.state.course, title: event.target.value };
  //   this.setState({ course: course });
  // };

  // handleSubmit = (event) => {
  //   // this prevent form from causing the page to reload, prevent browser default behavior
  //   event.preventDefault();
  //   // this.props.createCourse(this.state.course);
  //   this.props.actions.createCourse(this.state.course);
  //   // alert(this.state.course.title);
  // };

  componentDidMount() {
    const { courses, authors, actions } = this.props;
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert('Loading courses failed' + error);
      });
    }
    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert('Loading authors failed' + error);
      });
    }
  }

  handleDelete = async (course) => {
    toast.success('deleted course');
    try {
      await this.props.actions.deleteCourse(course);
    } catch (error) {
      toast.error('delete failed. ' + error.message, { autoClose: false });
    }
  };

  render() {
    return (
      <div>
        {this.state.redirectToAddCoursePage && <Redirect to="/course" />}
        <h2>Courses</h2>
        {this.props.loading > 0 ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              onClick={() => this.setState({ redirectToAddCoursePage: true })}
            >
              Add Course
            </button>
            <CourseList
              onDeleteClick={this.handleDelete}
              courses={this.props.courses}
            />
          </>
        )}

        {/* <form onSubmit={this.handleSubmit}>
          <h2>Courses</h2> */}
        {/* <h3>Add Course</h3> */}
        {/* <input
            type="text"
            value={this.state.course.title}
            onChange={this.handleChange}
          />
          <input type="submit" value="Save" />
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Javascript</li>
            <li>Ruby</li> */}
        {/* {this.props.courses.map((course) => (
          <div key={course.title}>
            <li>{course.title}</li>
          </div>
        ))} */}
        {/* </ul>
        </form> */}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  // createCourse: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
    loading: state.apiCallsInProgress > 0,
  };
}

//Action creator must be called by dispatch, or nothing happens
function mapDispatchToProps(dispatch) {
  return {
    // createCourse: (course) => dispatch(courseActions.createCourse(course)),
    // createCourse: bindActionCreators(courseActions, dispatch),
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      deleteCourse: bindActionCreators(courseActions.deleteCourse, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
