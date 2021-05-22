import React from 'react';

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
    alert(this.state.course.title);
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
        </form>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Javascript</li>
          <li>Ruby</li>
        </ul>
      </div>
    );
  }
}

export default CoursesPage;
