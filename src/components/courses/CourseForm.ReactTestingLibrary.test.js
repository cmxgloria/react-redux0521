import React from 'react';
import CourseForm from './CourseForm';
import { cleanup, render } from 'react-testing-library';

afterEach(cleanup);

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {},
  };

  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it('renders Add course header', () => {
  const { getTextBy } = renderCourseForm();
  getTextBy('Add Course');
});

it('labels save buttons as "Save" when not saving', () => {
  const { getTextBy } = renderCourseForm();
  getTextBy('Save');
});

it('labels save button as "Saving..." when saving', () => {
  const { getTextBy } = renderCourseForm();
  getTextBy('Saving...');
});
