import React from 'react';

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: '',
      },
    };
  }

  handleChange(event) {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  }

  render() {
    return (
      <div>
        <form action="">
          <h2>Courses</h2>
          <h3>Add Course</h3>
          <input
            type="text"
            value={this.state.course.title}
            onChange={this.handleChange.bind(this)}
          />
          <input type="submit" value="Save" />
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Javascript</li>
            <li>Ruby</li>
          </ul>
        </form>
      </div>
    );
  }
}

export default CoursesPage;
